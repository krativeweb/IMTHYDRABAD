// src/app/faculty/[slug]/page.jsx
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { parseHTML } from 'linkedom';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL; // https://thekreativeweb.com/codes/imt_hydrabad/api

/* -------------------------------------------------
   Safe HTML parser (server + client)
   ------------------------------------------------- */
const safeParseHTML = (html) => {
  if (typeof window !== 'undefined') {
    return new DOMParser().parseFromString(html, 'text/html');
  }
  const { document } = parseHTML(html);
  return document;
};

/* -------------------------------------------------
   Parse <li> lists
   ------------------------------------------------- */
const parseList = (html) => {
  if (!html) return [];
  const doc = safeParseHTML(html);
  return Array.from(doc.querySelectorAll('li')).map(li => li.textContent?.trim() || '');
};

/* -------------------------------------------------
   Education + Service
   ------------------------------------------------- */
const parseEducationAndService = (html) => {
  const education = [], service = [];
  if (!html) return { education, service };

  const doc = safeParseHTML(html);
  const eduList = doc.querySelector('#menu5 ul');
  const srvList = doc.querySelector('#menu6 ul');

  eduList?.querySelectorAll('li').forEach(li => {
    const txt = li.textContent?.trim();
    if (!txt) return;
    const m = txt.match(/(.+?)\s+from\s+(.+?),\s*(.+?)\s*\(([\d–\s]+)\)/);
    if (m) {
      education.push({
        degree: m[1].trim(),
        institution: `${m[2].trim()}, ${m[3].trim()}`,
        years: m[4].replace(/\s/g, '').replace(/–/g, '–')
      });
    } else {
      education.push({ degree: txt, institution: '', years: '' });
    }
  });

  srvList?.querySelectorAll('li').forEach(li => {
    const txt = li.textContent?.trim();
    if (!txt) return;
    const m = txt.match(/(\w+ \d{4} – \w+ \d{4})\s+(.+?),\s+(.+)/);
    if (m) service.push({ years: m[1], role: m[2], institution: m[3] });
  });

  return { education, service };
};

/* -------------------------------------------------
   Teaching & Research Interests
   ------------------------------------------------- */
const parseInterests = (html) => {
  const teaching = [], research = [];
  if (!html) return { teaching, research };

  const doc = safeParseHTML(html);
  doc.querySelector('#menu1 ul')?.querySelectorAll('li').forEach(li => {
    const t = li.textContent?.trim(); t && teaching.push(t);
  });
  doc.querySelector('#menu2 ul')?.querySelectorAll('li').forEach(li => {
    const t = li.textContent?.trim(); t && research.push(t);
  });
  return { teaching, research };
};

/* -------------------------------------------------
   Publications
   ------------------------------------------------- */
const parsePublications = (html) => {
  const journals = [], conferences = [];
  if (!html) return { journals, conferences };

  const doc = safeParseHTML(html);
  doc.querySelector('#menu3 ul')?.querySelectorAll('li').forEach(li => {
    journals.push({ citation: li.innerHTML });
  });
  doc.querySelector('#menu4 ul')?.querySelectorAll('li').forEach(li => {
    conferences.push({ citation: li.innerHTML });
  });
  return { journals, conferences };
};

/* -------------------------------------------------
   Awards
   ------------------------------------------------- */
const parseAwards = (html) => {
  if (!html) return [];
  const doc = safeParseHTML(html);
  return Array.from(doc.querySelectorAll('p')).map(p => {
    const txt = p.textContent?.trim() || '';
    const m = txt.match(/(\d{4})\s*[-–]\s*(.+)/);
    return {
      year: m ? m[1] : txt.split(/[-–]/)[0].trim(),
      description: m ? m[2].trim() : txt.split(/[-–]/).slice(1).join('-').trim()
    };
  });
};

/* -------------------------------------------------
   Other Activities
   ------------------------------------------------- */
const parseOtherActivities = (html) => {
  if (!html) return [];
  const doc = safeParseHTML(html);
  return Array.from(doc.querySelectorAll('p')).map(p => p.textContent?.trim() || '').filter(Boolean);
};

/* -------------------------------------------------
   Main Component
   ------------------------------------------------- */
export default function FacultyProfile() {
  const { slug } = useParams();
  const [faculty, setFaculty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* ---------- FETCH ---------- */
  useEffect(() => {
    if (!slug) return;

    const fetchFaculty = async () => {
      const url = `${BASE_URL}/faculties/${slug}`;
      console.log('Fetching faculty:', url); // DEBUG

      try {
        const { data } = await axios.get(url, { timeout: 12000 });
        console.log('API Response:', data); // DEBUG

        if (data.error) throw new Error(data.error);

        const mapped = {
          name: `${data.prof_prefix || ''} ${data.prof_name}`.trim(),
          designation: data.prof_designation?.toUpperCase() || '',
          qualification: data.prof_qualification || '',
          functionalArea: data.prof_functional_area || '',
          dateOfJoining: data.joining_date
            ? new Date(data.joining_date).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
              })
            : '',
          email: data.prof_email || '',
          phone: data.prof_mobile
            ? `+91 ${data.prof_mobile.replace(/(\d{5})(\d{5})/, '$1 $2')}`
            : '',
          image: data.prof_image?.includes('showassets2.php')
            ? data.prof_image
            : `${BASE_URL.replace('/api', '')}/assets/admin/images/faculty-directory/${data.prof_image}`,
          qrCode: `${BASE_URL.replace('/api', '')}/assets/admin/images/faculty-directory/QRCode/${data.prof_qrcode}`,
          brief: data.prof_description || '',
          ...parseEducationAndService(data.prof_education || ''),
          ...parseInterests(data.prof_teaching_interest || ''),
          ...parsePublications(data.prof_publications || ''),
          awards: parseAwards(data.prof_awards || ''),
          otherActivities: parseOtherActivities(data.prof_other_activity || ''),
          socialLinks: {
            linkedin: data.prof_linkedin || '',
            website: data.prof_website || '',
            scholar: data.prof_scholar_link || '',
            researchGate: data.prof_research_gate || ''
          }
        };

        setFaculty(mapped);
      } catch (err) {
        console.error('Fetch error:', err.response?.data || err.message);
        setError(err.response?.data?.error || err.message || 'Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    fetchFaculty();
  }, [slug]);

  /* ---------- AOS ---------- */
  useEffect(() => {
    import('aos').then(AOS => AOS.init({ duration: 1000, once: true }));
  }, []);

  /* ---------- UI ---------- */
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading…</span>
        </div>
      </div>
    );
  }

  if (error || !faculty) {
    return (
      <div className="container py-5 text-center">
        <div className="alert alert-danger">
          <strong>Error:</strong> {error || 'Faculty not found'}
        </div>
        <Link href="/faculty" className="btn btn-outline-primary">
          Back to Faculty List
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* ==== CSS ==== */}
      <style jsx global>{`
        .faculty-hero{background:url('/media/banners/faculty.webp')!important;position:relative;background-size:cover!important;height:60vh}
        .faculty-hero::before{content:'';position:absolute;inset:0;background:rgba(0,0,0,.3)}
        .faculty-hero h2,.faculty-hero p{position:relative;z-index:1}
        .faculty-hero h2{margin-top:150px}
        .faculty-card{background:#f8f9fa;border:none;border-radius:1.5rem}
        .faculty-img{border-radius:1.2rem;transition:transform .4s ease}
        .faculty-img:hover{transform:scale(1.03)}
        .social-icon{display:inline-flex;width:40px;height:40px;border-radius:50%;justify-content:center;align-items:center;background:#ffc107;color:#fff;transition:all .3s}
        .social-icon:hover{background:#5390d9;color:#fff;transform:translateY(-3px)}
        .faculty-tabs .nav-pills .nav-link{border-radius:50rem;background:#e9ecef;color:#333;transition:all .3s}
        .faculty-tabs .nav-pills .nav-link.active{background:#ffc107;color:#000}
      `}</style>

      {/* ==== GTM ==== */}
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TPXCPVN" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
      </noscript>

      <section className="faculty-section">

        {/* Hero */}
        <div className="faculty-hero text-center text-white py-5">
          <h2 className="display-5 fw-bold mb-2" data-aos="fade-up">Our Inspiring Faculties</h2>
          <p className="text-white" data-aos="fade-up" data-aos-delay="100">Meet the mentors shaping the future</p>
        </div>

        {/* Breadcrumb */}
        <div className="breadcrumb p-4" style={{ backgroundColor: 'rgb(22,57,119)' }}>
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item"><Link href="/" className="text-white fw-bold" style={{ textDecoration: 'none' }}>Home</Link></li>
                <li className="breadcrumb-item"><Link href="/faculty" className="text-white fw-bold" style={{ textDecoration: 'none' }}>Faculty</Link></li>
                <li className="breadcrumb-item active text-warning fw-bold" aria-current="page">{faculty.name}</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Profile Card */}
        <div className="container mt-5">
          <div className="row faculty-card shadow-lg p-4 rounded-4 align-items-center g-4" data-aos="fade-up">
            <div className="col-lg-3 col-md-4 text-center">
              <Image src={faculty.image} alt={faculty.name} className="img-fluid rounded-4 faculty-img shadow-sm"
                     width={310} height={310} style={{ maxHeight:310, objectFit:'cover' }} />
            </div>

            <div className="col-lg-6 col-md-8">
              <h3 className="fw-bold mb-3" style={{ color: 'rgb(22,57,119)' }}><i>{faculty.name}</i></h3>
              <ul className="list-unstyled mb-4">
                <li><strong>Designation:</strong> {faculty.designation}</li>
                <li><strong>Qualification:</strong> {faculty.qualification}</li>
                <li><strong>Functional Area:</strong> {faculty.functionalArea}</li>
                <li><strong>Date of Joining:</strong> {faculty.dateOfJoining}</li>
                <li><strong>Email:</strong> <Link href={`mailto:${faculty.email}`} className="link-primary">{faculty.email}</Link></li>
                <li><strong>Phone:</strong> <Link href={`tel:${faculty.phone.replace(/\s/g,'')}`} className="link-primary">{faculty.phone}</Link></li>
              </ul>

              <div className="d-flex gap-3">
                {faculty.socialLinks.linkedin && <Link href={faculty.socialLinks.linkedin} target="_blank" className="social-icon"><i className="fab fa-linkedin-in"></i></Link>}
                {faculty.socialLinks.website && <Link href={faculty.socialLinks.website} target="_blank" className="social-icon"><i className="fas fa-globe"></i></Link>}
                {faculty.socialLinks.scholar && <Link href={faculty.socialLinks.scholar} target="_blank" className="social-icon"><i className="ai ai-google-scholar"></i></Link>}
                {faculty.socialLinks.researchGate && <Link href={faculty.socialLinks.researchGate} target="_blank" className="social-icon"><i className="ai ai-researchgate"></i></Link>}
              </div>
            </div>

            <div className="col-lg-3 text-center">
              <Image src={faculty.qrCode} alt="QR Code" className="img-fluid" width={240} height={240} style={{ maxWidth:240 }} />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="container my-5">
          <div className="faculty-tabs mt-4">
            <ul className="nav nav-pills justify-content-center flex-wrap gap-2 mb-4" id="facultyTab" role="tablist">
              {['Brief','Education','Teaching & Research Interests','Publications','Awards & Honors','Service','Other Professional Activities']
                .map((tab, i) => (
                  <li className="nav-item" role="presentation" key={i}>
                    <button className={`nav-link ${i===0?'active':''}`}
                            id={`${tab.toLowerCase().replace(/ & /g,'-').replace(/\s/g,'-')}-tab`}
                            data-bs-toggle="tab"
                            data-bs-target={`#${tab.toLowerCase().replace(/ & /g,'-').replace(/\s/g,'-')}`}
                            type="button" role="tab">{tab}</button>
                  </li>
                ))}
            </ul>

            <div className="tab-content p-4 rounded-4 shadow-sm bg-light">
              {/* Brief */}
              <div className="tab-pane fade show active" id="brief" role="tabpanel">
                <div dangerouslySetInnerHTML={{ __html: faculty.brief }} />
              </div>

              {/* Education */}
              <div className="tab-pane fade" id="education" role="tabpanel">
                <h5><span className="badge bg-warning text-dark rounded-pill px-3 py-2">Education</span></h5>
                <ul className="list-group list-group-flush mt-3">
                  {faculty.education.map((e,i)=>(
                    <li className="list-group-item" key={i}><strong>{e.degree}</strong> – {e.institution} ({e.years})</li>
                  ))}
                </ul>
              </div>

              {/* Teaching & Research */}
              <div className="tab-pane fade" id="teaching-research-interests" role="tabpanel">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <h5><span className="badge bg-warning text-dark rounded-pill px-3 py-2">Teaching Interests</span></h5>
                    <ul className="mt-3">{faculty.teachingInterests.map((t,i)=><li key={i}>{t}</li>)}</ul>
                  </div>
                  <div className="col-md-6">
                    <h5><span className="badge bg-warning text-dark rounded-pill px-3 py-2">Research Interests</span></h5>
                    <ul className="mt-3">{faculty.researchInterests.map((r,i)=><li key={i}>{r}</li>)}</ul>
                  </div>
                </div>
              </div>

              {/* Publications */}
              <div className="tab-pane fade" id="publications" role="tabpanel">
                <ul className="nav nav-pills mb-3" id="pubInnerTab" role="tablist">
                  <li className="nav-item"><button className="nav-link active" id="journals-tab" data-bs-toggle="tab" data-bs-target="#journals">Journal Papers</button></li>
                  <li className="nav-item"><button className="nav-link" id="conferences-tab" data-bs-toggle="tab" data-bs-target="#conferences">Conference Presentations</button></li>
                </ul>
                <div className="tab-content p-3 bg-white rounded-4 shadow-sm">
                  <div className="tab-pane fade show active" id="journals">
                    <ul className="list-group list-group-flush">
                      {faculty.journalPapers.map((p,i)=><li className="list-group-item" key={i} dangerouslySetInnerHTML={{__html:p.citation}}/>)}
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="conferences">
                    <ul className="list-group list-group-flush">
                      {faculty.conferencePapers.map((p,i)=><li className="list-group-item" key={i} dangerouslySetInnerHTML={{__html:p.citation}}/>)}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Awards */}
              <div className="tab-pane fade" id="awards-honors" role="tabpanel">
                <ul className="list-group list-group-flush">
                  {faculty.awards.map((a,i)=><li className="list-group-item" key={i}><strong>{a.year} –</strong> {a.description}</li>)}
                </ul>
              </div>

              {/* Service */}
              <div className="tab-pane fade" id="service" role="tabpanel">
                <h5><span className="badge bg-warning text-dark rounded-pill px-3 py-2">Service</span></h5>
                <ul className="list-group list-group-flush mt-3">
                  {faculty.service.map((s,i)=><li className="list-group-item" key={i}>{s.years}: {s.role}, {s.institution}</li>)}
                </ul>
              </div>

              {/* Other Activities */}
              <div className="tab-pane fade" id="other-professional-activities" role="tabpanel">
                <h5><span className="badge bg-warning text-dark rounded-pill px-3 py-2">Other Professional Activities</span></h5>
                <ul className="list-group list-group-flush mt-3">
                  {faculty.otherActivities.map((a,i)=><li className="list-group-item" key={i}>{a}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
