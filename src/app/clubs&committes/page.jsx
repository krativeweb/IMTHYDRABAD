"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function ClubsAndCommittees() {
  // Data embedded in the same file
  const clubData = {
    1: {
      title: "ALTIUS – THE SPORTS CLUB OF IMT-HYDERABAD",
      content: `<p><strong>Team Altius</strong> aims at bringing together people from different cultures and mindsets with the spirit of Sportsmanship. Altius has always tried to play a role in establishing a proper work-life balance in studies and sports which refreshes the minds of students, to continue the zeal for sports and to raise a bar in the years to come.</p>
         <h6>Flagship Events</h6>
         <ul>
           <li>IMT Hyderabad League (IHL) – Cricket, Football, Basketball, Volleyball, Table Tennis, Mini Marathon</li>
         </ul>`,
      img: "/media/clubs&committes/1club.png",

      links: [
        {
          icon: "fab fa-instagram",
          url: "https://www.instagram.com/altius_imthyd/",
        },
        {
          icon: "fab fa-facebook",
          url: "https://www.facebook.com/AltiusIMTH/",
        },
      ],
      mentor: { img: "./media/clubs&committes/data/Altius/all.webp" },
      students: [
        { img: "./media/clubs&committes/data/Altius/1.webp" },
        { img: "./media/clubs&committes/data/Altius/2.webp" },
        { img: "./media/clubs&committes/data/Altius/3.webp" },
        { img: "./media/clubs&committes/data/Altius/4.webp" },
        { img: "./media/clubs&committes/data/Altius/5.webp" },
        { img: "./media/clubs&committes/data/Altius/6.webp" },
        { img: "./media/clubs&committes/data/Altius/7.webp" },
      ],
    },
    2: {
      title: "Communication Wing",
      content: `<p>The <strong>Communication Wing</strong> is an amalgamation of the different skills that are needed to enhance one's communication. From writing to public speaking, we ensure that there is a fun aspect to effective interaction, as well as to eliminate the fear that people hold when it comes to communicating thoughts and ideas publically.</p>
         <h6>Objective</h6>
         <p>To build and improve effective communication and social skills & enhance the productivity and creative abilities of fellow IMT-ians by means of various innovative events, platforms, and exposure.</p>
         <h6>What do we intend to achieve?</h6>
         <ul>
           <li>Peer interaction and development through opportunities like Open Mic Nights, Mock GDs, Debates, etc.</li>
           <li>Higher visibility for IMT-H by integrating platforms like Toastmasters, Terribly Tiny Tales</li>
           <li>Creating a unique identity via Humans of IMT Hyderabad initiative</li>
           <li>Accessible communication development through social media campaigns (#WordoftheDay, Idiom of the week, book reviews, book barters)</li>
         </ul>
         <h6>Events</h6>
         <ul><li>Open Mic Nights</li><li>Big Fight: Debate</li><li>Pantomath</li><li>League of Nations</li></ul>
         <h6>Initiatives in the pipeline</h6>
         <ul><li>Toastmasters</li><li>TTT: Terribly Tiny Tales</li></ul>`,
      img: "/media/clubs&committes/2club.png",
      links: [
        {
          icon: "fab fa-instagram",
          url: "https://www.instagram.com/communication_wing/",
        },
        {
          icon: "fab fa-linkedin",
          url: "https://www.linkedin.com/company/communication-wing-imth/",
        },
      ],
      mentor: { img: "./media/clubs&committes/data/CommWing/all.webp" },
      students: [
        { img: "./media/clubs&committes/data/CommWing/1.webp" },
        { img: "./media/clubs&committes/data/CommWing/2.webp" },
        { img: "./media/clubs&committes/data/CommWing/3.webp" },
        { img: "./media/clubs&committes/data/CommWing/1.webp" },
        { img: "./media/clubs&committes/data/CommWing/5.webp" },
        { img: "./media/clubs&committes/data/CommWing/6.webp" },
        { img: "./media/clubs&committes/data/CommWing/7.webp" },
      ],
    },
    3: {
      title: "Antragna",
      content: `<p>A PGDM programme doesn't stop at the classroom, especially when the Campus is as diverse as ours. Antragna - the cultural club of IMT Hyderabad is all about bringing out the latent cultural expression inside every student. Apart from celebrating major festivals, Antragna's objective is to promote cultural creativity across performing and visual arts. We facilitate festival celebrations, stage productions, street plays and other cultural showcases.</p>
         <h6>Objectives</h6>
         <p>To develop the spirit and attitude among students to explore experiential and innovative ways of learning the new-age business intricacies & strategies through culture and performance.</p>`,
      img: "/media/clubs&committes/3club.png",
      links: [],
      mentor: { img: "./media/clubs&committes/data/Antragna/all.webp" },
      students: [
        { img: "./media/clubs&committes/data/Antragna/1.webp" },
        { img: "./media/clubs&committes/data/Antragna/2.webp" },
        { img: "./media/clubs&committes/data/Antragna/3.webp" },
        { img: "./media/clubs&committes/data/Antragna/4.webp" },
        { img: "./media/clubs&committes/data/Antragna/5.webp" },
        { img: "./media/clubs&committes/data/Antragna/6.webp" },
        { img: "./media/clubs&committes/data/Antragna/7.webp" },
      ],
    },
    4: {
      title: "Athena",
      content: `<p><strong>Athena</strong> is a student-driven club that provides a platform for exploring strategy and business thinking. It collaborates with corporates to bring live projects, bridging academics and industry expectations.</p>
         <h6>Events & Initiatives</h6>
         <ul>
           <li><strong>Crazzino</strong> - Athena’s flagship event testing decision making.</li>
           <li><strong>IHL Fantasy League</strong> - cricket based analytical game run alongside IHL.</li>
           <li><strong>Be-Trust</strong> - trust and understanding game.</li>
           <li><strong>Chakravyuh</strong> - major Implez event focused on strategy and ROI.</li>
           <li><strong>Ace The Space</strong> - minor event testing knowledge and quick thinking.</li>
         </ul>
         <h6>Initiatives</h6>
         <ul>
           <li>Live projects & case solving with Kraftshala</li>
           <li>Wall Magazine - curated strategic news/items for campus</li>
           <li>#WhatsTheirStrategy - online series featuring strategy content</li>
         </ul>
         <h6>Meet The Team</h6>
         <p>Top Row (L-R): Siddharth K, Anubhav Jaiswal, Shalini Shaw, Harshil Patel, Vijeth S, Pranay Jain</p>
         <p>Middle Row (L-R): Anush Kumar, Lavish Jain</p>
         <p>Lowest Row (L-R): Akshita Agarwal, Harsh Dhoot, Sakshi Mundhra, Sowmya Alur, Yash Shrivastava</p>
         <p><strong>Co-ordinators:</strong> Pranay Jain & Sowmya Alur</p>`,
      img: "/media/clubs&committes/4club.png",
      links: [],
      mentor: { img: "./media/clubs&committes/data/Athena/all.webp" },
      students: [
        { img: "./media/clubs&committes/data/Athena/1.webp" },
        { img: "./media/clubs&committes/data/Athena/2.webp" },
        { img: "./media/clubs&committes/data/Athena/3.webp" },
        { img: "./media/clubs&committes/data/Athena/4.webp" },
        { img: "./media/clubs&committes/data/Athena/5.webp" },
        { img: "./media/clubs&committes/data/Athena/6.webp" },
        { img: "./media/clubs&committes/data/Athena/7.webp" },
      ],
    },
    5: {
      title: "Mercatus Mantra",
      content: `<p><strong>Objective:</strong> To bring people together and explore marketing aspects that make one industry-fit, using unique and engaging initiatives.</p>
         <p><strong>About the Club:</strong> Mercatus Mantra applies marketing concepts to practical events and runs year-round initiatives to teach branding, pricing, positioning, and marketing strategy.</p>
         <h6>What we intend to achieve</h6>
         <ul>
           <li>Opportunities for students to participate in and organise marketing-centric events</li>
           <li>Higher visibility for IMT-H through inter-college participation</li>
           <li>Keep students updated on marketing trends via campaigns and an annual magazine</li>
         </ul>
         <h6>Flagship Event: Buzzaar</h6>
         <p>An experiential marketplace where participants sell products applying branding, pricing and communication strategies.</p>
         <h6>Other Events & Initiatives</h6>
         <ul>
           <li>Market Surveys</li>
           <li>Brandathon</li>
           <li>Brandify</li>
           <li>AdTract</li>
           <li>The Riddler’s Anarchy</li>
           <li>Mercazine (Annual Marketing Magazine)</li>
         </ul>`,
      img: "/media/clubs&committes/5club.png",
      links: [],
      mentor: { img: "./media/clubs&committes/data/Mercatus/all.webp" },
      students: [
        { img: "./media/clubs&committes/data/Mercatus/1.webp" },
        { img: "./media/clubs&committes/data/Mercatus/2.webp" },
        { img: "./media/clubs&committes/data/Mercatus/3.webp" },
        { img: "./media/clubs&committes/data/Mercatus/4.webp" },
        { img: "./media/clubs&committes/data/Mercatus/5.webp" },
        { img: "./media/clubs&committes/data/Mercatus/6.webp" },
        { img: "./media/clubs&committes/data/Mercatus/7.webp" },
      ],
    },
    6: {
      title: "Opuskriya",
      content: `<p>Opuskriya is the Operations Club of IMT-Hyderabad. Its objective is to provide a platform for interaction between students and industry leaders in Operations Management. The club organises operations-based case study events and business simulations.</p>
         <h6>Flagship & Major Events</h6>
         <ul>
           <li><strong>Chain E Maniac</strong> – time-based simulation testing operational decision-making.</li>
           <li><strong>Episteme</strong> – major case-study event during IMPELZ testing analytical skills.</li>
           <li><strong>Joker’s Conviction</strong> – minor event assessing adaptive strategy-making skills.</li>
         </ul>
         <h6>Certification & Courses</h6>
         <ul>
           <li>Six Sigma Green Belt Certification (in association with KPMG)</li>
           <li>SCM EXE Certification (in association with CII)</li>
         </ul>`,
      img: "/media/clubs&committes/6club.jpg",
      links: [
        {
          icon: "fab fa-facebook",
          url: "https://www.facebook.com/OpuskriyaIMT/",
        },
      ],
      mentor: { img: "./media/clubs&committes/data/Opuskriya/all.webp" },
      students: [
        { img: "./media/clubs&committes/data/Opuskriya/6.webp" },
        { img: "./media/clubs&committes/data/Opuskriya/2.webp" },
        { img: "./media/clubs&committes/data/Opuskriya/5.webp" },
        { img: "./media/clubs&committes/data/Opuskriya/4.webp" },
        { img: "./media/clubs&committes/data/Opuskriya/1.webp" },
        { img: "./media/clubs&committes/data/Opuskriya/3.webp" },
        { img: "./media/clubs&committes/data/Opuskriya/7.webp" },
      ],
    },
    7: {
      title: "Prarambh",
      content: `<p>Prarambh (E-Cell) promotes entrepreneurial spirit via events that foster innovation and startup skills.</p>
         <h6>Events</h6>
         <ul>
           <li><strong>Food Fiesta</strong> – annual food festival with student-run stalls</li>
           <li><strong>Pitch Up</strong> – B-Plan competition and startup podium</li>
           <li><strong>Ortus</strong> – storytelling platform with entrepreneur talks</li>
           <li><strong>TiE GRAD</strong> – entrepreneurial workshops in association with TiE</li>
         </ul>`,
      img: "/media/clubs&committes/7club.jpg",
      links: [
        {
          icon: "fab fa-instagram",
          url: "https://www.instagram.com/ecell_imthyderabad/",
        },
        {
          icon: "fas fa-envelope",
          url: "mailto:prarambh.ecell@imthyderabad.edu.in",
        },
        {
          icon: "fab fa-facebook",
          url: "https://www.facebook.com/ecell.imthyd/",
        },
      ],
      mentor: { img: "./media/clubs&committes/data/Prarambh/1.webp" },
      students: [
        { img: "./media/clubs&committes/data/Prarambh/all.webp" },
        { img: "./media/clubs&committes/data/Prarambh/all.webp" },
        { img: "./media/clubs&committes/data/Prarambh/all.webp" },
        { img: "./media/clubs&committes/data/Prarambh/all.webp" },
        { img: "./media/clubs&committes/data/Prarambh/all.webp" },
        { img: "./media/clubs&committes/data/Prarambh/all.webp" },
        { img: "./media/clubs&committes/data/Prarambh/all.webp" },
      ],
    },
    8: {
      title: "Tassavur",
      content: `<p><strong>Objective:</strong> Tassavur (Imagination) was formed in 2018 to give a platform for creative expression — art, photography, filmmaking, poetry and more.</p>
         <h6>How we work</h6>
         <p>We create a warm environment through events that channel ideas into tangible creative outcomes.</p>
         <h6>Events & Activities</h6>
         <ul>
           <li>Friendship Day</li>
           <li>Who Did It Better (online poll for creativity)</li>
           <li>Live sketching</li>
           <li>Calligraphy Workshop</li>
           <li>Photo Walk</li>
           <li>Independence Day T-shirt design</li>
           <li>Photography Workshop</li>
           <li>Riveria (painting event)</li>
           <li>Face-Off (face painting)</li>
           <li>Nazaria (single-light photography)</li>
           <li>Product Design Workshop (with Kilkaari & Co.)</li>
         </ul>`,
      img: "/media/clubs&committes/8club.png",
      links: [
        {
          icon: "fab fa-instagram",
          url: "https://www.instagram.com/tassavurimthyd/",
        },
        {
          icon: "fab fa-facebook",
          url: "https://www.facebook.com/TassavurIMTHyd/",
        },
      ],
      mentor: { img: "./media/clubs&committes/data/Tassavur/all.webp" },
      students: [
        { img: "./media/clubs&committes/data/Tassavur/1.webp" },
        { img: "./media/clubs&committes/data/Tassavur/2.webp" },
        { img: "./media/clubs&committes/data/Tassavur/3.webp" },
        { img: "./media/clubs&committes/data/Tassavur/4.webp" },
        { img: "./media/clubs&committes/data/Tassavur/5.webp" },
        { img: "./media/clubs&committes/data/Tassavur/2.webp" },
        { img: "./media/clubs&committes/data/Tassavur/4.webp" },
      ],
    },
  };

  const committeeData = {
    1: {
      title: "Media Relations Committee",
      content: `<p>The Media Relations Committee (MRC) is responsible for communicating campus news externally. Known as the "face of IMT-H", MRC publishes content and coordinates campus activities via six teams.</p>
         <h6>The 6 cohorts & roles</h6>
         <ul>
           <li><strong>Admissions:</strong> Helps prospective students, answers queries and boosts awareness.</li>
           <li><strong>Blog:</strong> Writes creative and concise articles about campus events.</li>
           <li><strong>Social Media:</strong> Runs official social accounts and live updates during flagship events.</li>
           <li><strong>Design:</strong> Creates posters and newsletter layouts.</li>
           <li><strong>Photography:</strong> Captures key campus moments in events.</li>
           <li><strong>Press Release:</strong> Shares stories and interviews with media outlets.</li>
         </ul>`,
      img: "/media/clubs&committes/1comm.jpeg",
      mentor: { img: "./media/clubs&committes/data/MRC/all.webp" },
      students: [
        { img: "./media/clubs&committes/data/MRC/1.webp" },
        { img: "./media/clubs&committes/data/MRC/2.webp" },
        { img: "./media/clubs&committes/data/MRC/3.webp" },
        { img: "./media/clubs&committes/data/MRC/4.webp" },
        { img: "./media/clubs&committes/data/MRC/5.webp" },
        { img: "./media/clubs&committes/data/MRC/6.webp" },
        { img: "./media/clubs&committes/data/MRC/7.webp" },
      ],
    },
    2: {
      title: "Mezzo",
      content: `<p>Mezzo ensures nutritious food and a well-managed dining experience at IMT-H.</p>
         <h6>Mess</h6>
         <p>Mezzo manages meal quality (two members taste each meal daily), conducts inventory audits, and ensures hygiene. The mess staffing includes cooks, employees and supervisors; Mezzo acts as intermediary between students and kitchen staff.</p>
         <h6>Inventory & Infrastructure</h6>
         <p>Mezzo maintains dining halls (capacity ~300), executive dining, and infrastructure.</p>
         <h6>Cafeteria (Adda)</h6>
         <p>Mezzo liaises with Adda staff, recommends menu items, and performs inventory checks to maintain hygiene and stock updates.</p>`,
      img: "/media/clubs&committes/2comm.png",
      mentor: { img: "./media/clubs&committes/data/MEZZO/all.webp" },
      students: [
        { img: "./media/clubs&committes/data/MEZZO/1.webp" },
        { img: "./media/clubs&committes/data/MEZZO/2.webp" },
        { img: "./media/clubs&committes/data/MEZZO/3.webp" },
        { img: "./media/clubs&committes/data/MEZZO/4.webp" },
        { img: "./media/clubs&committes/data/MEZZO/5.webp" },
        { img: "./media/clubs&committes/data/MEZZO/6.webp" },
        { img: "./media/clubs&committes/data/MEZZO/7.webp" },
      ],
    },
    3: {
      title: "TEDx",
      content: `<p><strong>Objective:</strong> To spread ideas via short powerful talks across Technology, Entertainment and Design.</p>
         <p>The organising committee plans yearly themes, contacts speakers, manages promotions, sponsorships and budgeting. Volunteers help with social media, logistics and event delivery.</p>
         <p>We follow TED's mission: "Ideas worth spreading" — bringing diverse perspectives to the local community.</p>
         <p><strong>Website:</strong> <a href="https://www.tedximthyderabad.com/" target="_blank">https://www.tedximthyderabad.com/</a></p>`,
      img: "/media/clubs&committes/3comm.png",
      mentor: { img: "./media/clubs&committes/data/Tedx/all.webp" },
      students: [
        { img: "./media/clubs&committes/data/Tedx/1.webp" },
        { img: "./media/clubs&committes/data/Tedx/2.webp" },
        { img: "./media/clubs&committes/data/Tedx/3.webp" },
        { img: "./media/clubs&committes/data/Tedx/4.webp" },
        { img: "./media/clubs&committes/data/Tedx/3.webp" },
        { img: "./media/clubs&committes/data/Tedx/2.webp" },
        { img: "./media/clubs&committes/data/Tedx/1.webp" },
      ],
    },
    4: {
      title: "Alumni Relations Committee",
      content: `<p>The Alumni Relations Committee (ARC) builds a bridge between alumni and IMT Hyderabad, collaborating with other IMT campuses for unity and alumni engagement.</p>
         <h6>Key Initiatives</h6>
         <ul>
           <li><strong>Alumni Walk the Talk:</strong> Web series where alumni share transition stories.</li>
           <li><strong>Campus Drive series:</strong> Connects alumni recruiters' insights with campus life.</li>
           <li><strong>Workshops:</strong> Photography workshops and seminars by alumni.</li>
           <li><strong>Mentorship Program:</strong> One-on-one guidance by alumni experts.</li>
           <li><strong>CV Screening:</strong> Resume screening before placements.</li>
           <li><strong>Chapter Meets:</strong> City chapter meets across cities for alumni networking.</li>
         </ul>`,
      img: "/media/clubs&committes/4comm.png",
      mentor: { img: "./media/clubs&committes/data/ARC/all.webp" },
      students: [
        { img: "./media/clubs&committes/data/ARC/1.webp" },
        { img: "./media/clubs&committes/data/ARC/2.webp" },
        { img: "./media/clubs&committes/data/ARC/3.webp" },
        { img: "./media/clubs&committes/data/ARC/4.webp" },
        { img: "./media/clubs&committes/data/ARC/5.webp" },
        { img: "./media/clubs&committes/data/ARC/6.webp" },
        { img: "./media/clubs&committes/data/ARC/7.webp" },
      ],
    },
    5: {
      title: "International Relations (IRC)",
      content: `<p><strong>Purpose:</strong> To establish IMT Hyderabad on the global stage by handling inbound/outbound student exchanges and short-term exchange programs (STEP).</p>
         <p>This committee connects IMT-H with partner institutions worldwide and supports exchange logistics and student coordination.</p>`,
      img: "/media/clubs&committes/5comm.png",
      mentor: { img: "./media/clubs&committes/data/IRC/all.webp" },
      students: [
        { img: "./media/clubs&committes/data/IRC/1.webp" },
        { img: "./media/clubs&committes/data/IRC/2.webp" },
        { img: "./media/clubs&committes/data/IRC/3.webp" },
        { img: "./media/clubs&committes/data/IRC/4.webp" },
        { img: "./media/clubs&committes/data/IRC/5.webp" },
        { img: "./media/clubs&committes/data/IRC/6.webp" },
        { img: "./media/clubs&committes/data/IRC/7.webp" },
      ],
    },
    6: {
      title: "Student Council",
      content: `<p>The Student Council ensures student welfare, maintains discipline, and acts as a communication bridge between students and management to resolve grievances.</p>
         <h6>Objectives</h6>
         <ul>
           <li>Ensure well-being and discipline of student fraternity</li>
           <li>Implement changes that deliver long-term student benefits</li>
           <li>Bridge communication between students and management for grievance resolution</li>
         </ul>`,
      img: "/media/clubs&committes/6comm.jpg",
      mentor: { img: "./media/clubs&committes/data/Student/1.webp" },
      students: [
        { img: "./media/c.webp" },
        { img: "./media/c.webp" },
        { img: "./media/c.webp" },
        { img: "./media/c.webp" },
        { img: "./media/c.webp" },
        { img: "./media/c.webp" },
        { img: "./media/c.webp" },
      ],
    },
  };

  // Clubs slider refs
  const clubsRowRef = useRef(null);
  const detailCardClubsRef = useRef(null);
  const detailTitleClubsRef = useRef(null);
  const detailContentClubsRef = useRef(null);
  const detailLinksClubsRef = useRef(null);

  // NEW — Clubs mentor + students refs
  const mentorContainerClubsRef = useRef(null);
  const studentTrackClubsRef = useRef(null);
  const studentPrevClubsRef = useRef(null);
  const studentNextClubsRef = useRef(null);

  // Committees slider refs
  const committeesRowRef = useRef(null);
  const detailCardCommitteeRef = useRef(null);
  const detailTitleCommitteeRef = useRef(null);
  const detailContentCommitteeRef = useRef(null);
  const detailLinksCommitteeRef = useRef(null);

  // Committees mentor + students refs
  const mentorContainerRef = useRef(null);
  const studentTrackRef = useRef(null);
  const studentPrevRef = useRef(null);
  const studentNextRef = useRef(null);

  // ---------------------------------------------------------
  // AOS + Owl Carousel
  // ---------------------------------------------------------
  useEffect(() => {
    import("jquery").then(($) => {
      window.$ = window.jQuery = $.default;

      import("owl.carousel").then(() => {
        window.$("#youtube-carousel").owlCarousel({
          loop: true,
          margin: 20,
          nav: true,
          dots: true,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 },
          },
        });
      });
    });

    import("aos").then((AOS) => AOS.init({ duration: 1200, once: true }));
  }, []);

  // ---------------------------------------------------------
  // STUDENT SLIDER LOGIC — Committees
  // ---------------------------------------------------------
  useEffect(() => {
    let committeeIdx = 0;

    const updateCommitteeSlider = () => {
      if (!studentTrackRef.current || !studentTrackRef.current.children.length)
        return;

      const visible = window.innerWidth >= 992 ? 3 : 1;
      const total = studentTrackRef.current.children.length;
      const maxIdx = Math.max(0, total - visible);

      committeeIdx = Math.min(Math.max(committeeIdx, 0), maxIdx);

      const w =
        studentTrackRef.current.children[0].getBoundingClientRect().width;
      const gap = 20;

      studentTrackRef.current.style.transform = `translateX(-${
        committeeIdx * (w + gap)
      }px)`;

      studentPrevRef.current.disabled = committeeIdx === 0;
      studentNextRef.current.disabled = committeeIdx === maxIdx;
    };

    // -------------------------------------------------------
    // MAIN SLIDER INITIALIZER
    // -------------------------------------------------------
    const initMainSlider = ({
      rowRef,
      prevBtnId,
      nextBtnId,
      dotsId,
      totalCards,
      desktopVis,
      dataObj,
      detailRefs,
      onOpen,
    }) => {
      const row = rowRef.current;
      if (!row) return;

      const prevBtn = document.getElementById(prevBtnId);
      const nextBtn = document.getElementById(nextBtnId);
      const dots = document.getElementById(dotsId);

      let curPage = 0;
      let totalPages = 1;

      const calcPages = () => {
        const items =
          window.innerWidth >= 992
            ? desktopVis
            : window.innerWidth >= 768
            ? 3
            : 2;
        totalPages = Math.ceil(totalCards / items);
        curPage = Math.min(curPage, totalPages - 1);
      };

      const render = () => {
        row.style.transform = `translateX(calc(-${curPage} * (100% + 15px)))`;

        prevBtn.disabled = curPage === 0;
        nextBtn.disabled = curPage >= totalPages - 1;

        dots.innerHTML = "";
        for (let i = 0; i < totalPages; i++) {
          const li = document.createElement("li");
          li.className = `dot ${i === curPage ? "active" : ""}`;
          li.onclick = () => {
            curPage = i;
            render();
          };
          dots.appendChild(li);
        }
      };

      const handleOpen = (id, cardEl) => {
        const item = dataObj[id];
        if (!item) return;

        row
          .querySelectorAll(".image-card")
          .forEach((c) => c.classList.remove("active"));
        cardEl.classList.add("active");

        detailRefs.card.style.display = "block";
        detailRefs.title.innerHTML = item.title;
        detailRefs.content.innerHTML = item.content;
        detailRefs.links.innerHTML = "";

        if (item.links) {
          item.links.forEach((l) => {
            detailRefs.links.innerHTML += `
            <a href="${l.url}" class="btn btn-sm btn-outline-warning me-2" target="_blank">
              <i class="${l.icon}"></i>
            </a>`;
          });
        }

        if (onOpen) onOpen(item);
      };

      row.querySelectorAll(".image-card").forEach((card) => {
        card.onclick = () => handleOpen(card.dataset.card, card);
      });

      prevBtn.onclick = () => {
        if (curPage > 0) curPage--;
        render();
      };

      nextBtn.onclick = () => {
        if (curPage < totalPages - 1) curPage++;
        render();
      };

      window.addEventListener("resize", () => {
        calcPages();
        render();
        updateCommitteeSlider();
        updateClubSlider();
      });

      calcPages();
      render();

      const first = row.querySelector(".image-card[data-card='1']");
      if (first) first.click();
    };

    // ---------------------------------------------------------
    // CLUBS STUDENT SLIDER LOGIC
    // ---------------------------------------------------------
    let clubIdx = 0;

    const updateClubSlider = () => {
      if (
        !studentTrackClubsRef.current ||
        !studentTrackClubsRef.current.children.length
      )
        return;

      const visible = window.innerWidth >= 992 ? 3 : 1;
      const total = studentTrackClubsRef.current.children.length;
      const maxIdx = Math.max(0, total - visible);

      clubIdx = Math.min(Math.max(clubIdx, 0), maxIdx);

      const w =
        studentTrackClubsRef.current.children[0].getBoundingClientRect().width;
      const gap = 20;

      studentTrackClubsRef.current.style.transform = `translateX(-${
        clubIdx * (w + gap)
      }px)`;

      studentPrevClubsRef.current.disabled = clubIdx === 0;
      studentNextClubsRef.current.disabled = clubIdx === maxIdx;
    };

    // ---------------------------------------------------------
    // INIT CLUBS SLIDER
    // ---------------------------------------------------------
    initMainSlider({
      rowRef: clubsRowRef,
      prevBtnId: "prevBtnClubs",
      nextBtnId: "nextBtnClubs",
      dotsId: "dotsClubs",
      totalCards: 8,
      desktopVis: 8,
      dataObj: clubData,
      detailRefs: {
        card: detailCardClubsRef.current,
        title: detailTitleClubsRef.current,
        content: detailContentClubsRef.current,
        links: detailLinksClubsRef.current,
      },

      onOpen: (item) => {
        mentorContainerClubsRef.current.innerHTML = `
        <div class="member-card">
          <img src="${item.mentor.img}" alt="${item.mentor.name}">
          <div class="member-info"><h5>${item.mentor.name}</h5></div>
        </div>`;

        studentTrackClubsRef.current.innerHTML = item.students
          .map(
            (s) => `
        <div class="student-card-wrapper">
         <div class="member-card">
  <img src="${s.img}" alt="">
</div>

        </div>`
          )
          .join("");

        clubIdx = 0;
        setTimeout(updateClubSlider, 50);
      },
    });

    // ---------------------------------------------------------
    // INIT COMMITTEES SLIDER
    // ---------------------------------------------------------
    initMainSlider({
      rowRef: committeesRowRef,
      prevBtnId: "prevBtnCommittee",
      nextBtnId: "nextBtnCommittee",
      dotsId: "dotsCommittee",
      totalCards: 6,
      desktopVis: 6,
      dataObj: committeeData,
      detailRefs: {
        card: detailCardCommitteeRef.current,
        title: detailTitleCommitteeRef.current,
        content: detailContentCommitteeRef.current,
        links: detailLinksCommitteeRef.current,
      },

      onOpen: (item) => {
        mentorContainerRef.current.innerHTML = `
        <div class="member-card">
          <img src="${item.mentor.img}" alt="${item.mentor.name}">
          <div class="member-info"><h5>${item.mentor.name}</h5></div>
        </div>`;

        studentTrackRef.current.innerHTML = item.students
          .map(
            (s) => `
        <div class="student-card-wrapper">
          <div class="member-card">
          <img src="${s.img}" alt="">
           </div>

        </div>`
          )
          .join("");

        committeeIdx = 0;
        setTimeout(updateCommitteeSlider, 50);
      },
    });

    // ---------------------------------------------------------
    // STUDENT NAV BUTTONS (CLUBS)
    // ---------------------------------------------------------
    studentPrevClubsRef.current.onclick = () => {
      clubIdx--;
      updateClubSlider();
    };

    studentNextClubsRef.current.onclick = () => {
      clubIdx++;
      updateClubSlider();
    };

    // ---------------------------------------------------------
    // STUDENT NAV BUTTONS (COMMITTEES)
    // ---------------------------------------------------------
    studentPrevRef.current.onclick = () => {
      committeeIdx--;
      updateCommitteeSlider();
    };

    studentNextRef.current.onclick = () => {
      committeeIdx++;
      updateCommitteeSlider();
    };
  }, []);

  return (
    <>
      {/* Embedded CSS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* Faculty Hero */
      .faculty-hero {
        background: url('/media/banners/annualevents.webp');
        position: relative;
        background-size: cover;
        height: 60vh;
          background-position: center !important;
      }
      .faculty-hero::before {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.3);
      }
      .faculty-hero h2,
      .faculty-hero p {
        position: relative;
        z-index: 1;
      }
      .faculty-hero h2 {
        margin-top: 150px;
      }
      .batch-badge {
        display: none !important;
      }

      /* Member Card Styles */
      .member-card {
        position: relative;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 10px rgba(0,0,0,0.15);
        background: #fff;
        transition: transform 0.3s ease;
      }
      .member-card:hover {
        transform: translateY(-5px);
      }
      .member-card img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        object-position: top center;
      }
      // .member-info {
      //   background: #08317a;
      //   color: #fff;
      //   text-align: center;
      //   padding: 10px 5px;
      // }
      // .member-info h5 {
      //   margin: 0;
      //   font-size: 1rem;
      //   font-weight: 600;
      // }
      // .member-info p {
      //   margin: 0;
      //   font-size: 0.8rem;
      //   opacity: 0.8;
      // }
      .member-card .member-info  {
  display: none !important;
}

      .mentor-wrapper {
        max-width: 300px;
        width: 100%;
      }
      // .batch-badge {
      //   position: absolute;
      //   top: 10px;
      //   right: 10px;
      //   background: #ffc107;
      //   color: #000;
      //   padding: 3px 10px;
      //   border-radius: 20px;
      //   font-size: 0.75rem;
      //   font-weight: bold;
      //   z-index: 2;
      //   box-shadow: 0 2px 4px rgba(0,0,0,0.2);
      // }

      .student-slider-container {
        position: relative;
        padding: 0 50px;
      }
      .student-track-window {
        overflow: hidden;
        width: 100%;
      }
      .student-track {
        display: flex;
        transition: transform 0.5s ease-in-out;
        gap: 20px;
      }
      .student-card-wrapper {
        flex-shrink: 0;
        width: 100%;
      }
      @media (min-width: 992px) {
        .student-card-wrapper {
          width: calc((100% - 40px) / 3);
        }
      }
      .student-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 5;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .student-nav.prev-btn {
        left: 0;
      }
      .student-nav.next-btn {
        right: 0;
      }
      .student-nav:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      /* Image Card */
      .image-card {
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
        cursor: pointer;
        position: relative;
        height: 160px;
      }
      .image-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0,0,0,0.2);
      }
      .image-card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .image-card.active {
        border-bottom: 12px double #ffc107;
        transition: all 0.3s ease-in-out;
        background-color: #163977;
      }
      .card-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 8px 12px;
        border-radius: 0 0 12px 12px;
      }
      .card-overlay h5 {
        margin: 0;
        font-size: 0.85rem;
      }

      /* Slider Container */
      .slider-container {
        position: relative;
        margin-top: 30px;
        user-select: none;
      }
      .cards-slider {
        overflow: hidden;
        width: 100%;
        padding: 0 15px;
      }
      .cards-row {
        display: flex;
        transition: transform 0.5s ease;
        gap: 15px;
      }
      .card-wrapper {
        flex-shrink: 0;
      }

      /* Bottom Controls */
      .slider-controls {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
        margin-top: 20px;
      }
      .nav-btn {
        background: #ffc107;
        color: white;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        font-size: 18px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background 0.3s;
      }
      .nav-btn:hover {
        background: #0056b3;
      }
      .nav-btn:disabled {
        background: #ccc;
        cursor: not-allowed;
      }
      .dots {
        display: flex;
        justify-content: center;
        gap: 8px;
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #ccc;
        cursor: pointer;
        transition: background 0.3s;
      }
      .dot.active {
        background: #ffc107;
        width: 25px;
        border-radius: 5px;
      }

      /* Detail Card */
      .detail-card {
        border-radius: 12px;
        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        margin-top: 30px;
        display: none;
      }

      /* Responsive for Sliders */
      @media (min-width: 992px) {
        .clubs .card-wrapper {
          width: calc((100% - 105px) / 8);
        }
        .committees .card-wrapper {
          width: calc((100% - 75px) / 6);
        }
        .image-card {
          height: 150px;
        }
        .slider-controls {
          display: none !important;
        }
        .cards-slider {
          padding: 0;
        }
      }
      @media (min-width: 768px) and (max-width: 991.98px) {
        .card-wrapper {
          width: calc((100% - 30px) / 3);
        }
        .image-card {
          height: 140px;
        }
      }
      @media (max-width: 767.98px) {
        .card-wrapper {
          width: calc((100% - 15px) / 2);
        }
        .image-card {
          height: 130px;
        }
        .cards-slider {
          padding: 0 10px;
        }
      }

      /* Video Carousel Section */
      .video-carousel-section {
        background: #163977;
      }
      .image-wrapper img {
        width: 100%;
        height: auto;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .image-wrapper img:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
      }
      .owl-nav button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0,0,0,0.5);
        color: #fff;
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
      }
      .owl-nav button:hover {
        background: rgba(0,0,0,0.8);
      }
      @media (max-width: 768px) {
        .image-wrapper img {
          border-radius: 5px;
        }
      }
      .video-wrapper {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      }
      .video-wrapper iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: transform 0.3s ease;
      }
      .video-wrapper iframe:hover {
        transform: scale(1.03);
      }
      .owl-carousel .owl-nav button.owl-prev,
      .owl-carousel .owl-nav button.owl-next {
        position: absolute;
        top: 40%;
        background-color: rgba(0,0,0,0.5);
        color: #fff;
        border: none;
        padding: 10px 15px;
        border-radius: 50%;
      }
      .owl-carousel .owl-nav button.owl-prev {
        left: -25px;
      }
      .owl-carousel .owl-nav button.owl-next {
        right: -25px;
      }
      .owl-theme .owl-dots .owl-dot {
        display: inline-block;
        zoom: 1;
      }
      .owl-carousel .owl-nav button.owl-next,
      .owl-carousel .owl-nav button.owl-prev,
      .owl-carousel button.owl-dot {
        background: 0 0;
        color: white;
        border: none;
        padding: 0 !important;
        font: inherit;
        background-color: #163977 !important;
      }

      /* Events Calendar Section */
      .events-calendar-section {
        background: #163977;
        color: #fff;
      }
      .event-card {
        display: flex;
        align-items: center;
        background: #d4d4d4;
        border-radius: 12px;
        padding: 15px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .event-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.3);
      }
      .event-date {
        text-align: center;
        background: #ffb433;
        color: #163977;
        border-radius: 12px;
        padding: 10px;
        width: 60px;
        margin-right: 15px;
        flex-shrink: 0;
      }
      .event-date .day {
        font-size: 22px;
        font-weight: bold;
        display: block;
      }
      .event-date .month {
        font-size: 14px;
        text-transform: uppercase;
      }
      .event-info .event-title {
        font-size: 18px;
        color: #163977;
        font-weight: bold;
        margin-bottom: 5px;
      }
      .event-info .event-time,
      .event-info .event-location {
        font-size: 14px;
        margin-bottom: 3px;
      }
      .event-info .view-details {
        margin-top: 5px;
        font-size: 12px;
        padding: 3px 8px;
      }

      /* Faculty Card and Tabs */
      .faculty-card {
        background: #f8f9fa;
        border: none;
        border-radius: 1.5rem;
      }
      .faculty-img {
        border-radius: 1.2rem;
        transition: transform 0.4s ease;
      }
      .faculty-img:hover {
        transform: scale(1.03);
      }
      .social-icon {
        display: inline-flex;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        background: #ffc107;
        color: #ffffffff;
        transition: all 0.3s;
      }
      .social-icon:hover {
        background: #5390d9;
        color: #ffffffff;
        transform: translateY(-3px);
      }
      .nav-pills .nav-link.active {
        background: #ffc107 !important;
        color: #333 !important;
        transition: all 0.3s !important;
      }
      .nav-pills .nav-link {
        border-radius: 30px;
        background-color: #e9ecef;
        color: #333;
      }
    `,
        }}
      />

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPXCPVN"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* Faculty Section - Hero and Breadcrumb */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: "url('/media/banners/annualevents.webp')",
            position: "relative",
            backgroundSize: "cover",
            height: "60vh",
            backgroundPosition: "center !important",
          }}
        >
          <h2 className="display-5 fw-bold mb-2">
            Explore Student Life at IMT Hyderabad
          </h2>
          <p className="text-white">
            Where learning continues beyond classrooms. <br />
            Student clubs and committees foster leadership, teamwork, and
            real-world problem-solving through collaboration and creativity.
          </p>
        </div>
        <div
          className="breadcrumb p-4"
          style={{ backgroundColor: "rgb(22, 57, 119)" }}
        >
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/"
                    className="text-white fw-bold"
                  >
                    Home
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active text-warning fw-bold"
                  aria-current="page"
                >
                  Clubs & Committees
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Student Life Section */}
      <section id="executive-education" className="py-5">
        <div className="container" data-aos="fade-up" data-aos-delay="200">
          <div className="card p-4">
            <h2
              className="section-title text-center"
              style={{ color: "#08317a" }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              STUDENT LIFE @ IMT
            </h2>
            <div className="row justify-content-center mt-3">
              <div className="col-lg-12 text-justify">
                <p className="mb-4">
                  "I always knew looking back on the years would make me laugh,
                  but I never knew looking back on the days would make me cry."
                </p>
                <p className="mb-4">
                  Life at IMT Hyderabad is always filled with events - they say
                  life starts at 5 in the morning and ends at 5. With the
                  changing outlook in management education, the theories are
                  made and solved every now and then, where the businesses are
                  going global, where the geographies are not just defined with
                  dotted lines, the need of the hour is to keep up with pace.
                  Understanding the same, B-Schools around the world are
                  striving to incorporate all these in their students. So if
                  everyone is following the same trend worldwide, then how is
                  life at IMT Hyderabad different from the others?
                </p>
                <p className="mb-4">
                  Well, the answer lies at IMT Hyderabad on one hand when the
                  student is prepared to cater to the need of the hour, it also
                  incorporates within the student the forgotten lesson of
                  humanity. In an environment where students are perceived to be
                  the most important stakeholder, and in almost every occasion
                  the students are given a fair chance to voice their opinions,
                  bring out the sense of involvement, responsibility and pride
                  within the student. Here, life is not only saturated to the
                  black prints on crisp paper bound books. The lively campus of
                  IMT Hyderabad believes in events with the regular lectures in
                  the form of activities by the students, and of course for the
                  students. On one hand when there is enormous pressure of
                  assignments, class tests etc, the other hand has limitless
                  fun, friends - made for life, soothing chords of guitar and of
                  course a sense of belonging that the students make at IMT
                  Hyderabad far from their sunny native lands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clubs Section */}
      <section className="py-5">
        <div className="container">
          <h2
            className="section-title text-center"
            style={{ color: "#08317a" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            CLUBS @ IMT
          </h2>

          {/* TOP SLIDER (Images Row) */}
          <div className="slider-container clubs">
            <div className="cards-slider">
              <div className="cards-row" ref={clubsRowRef}>
                {Object.entries(clubData).map(([key, club]) => (
                  <div className="card-wrapper" key={key}>
                    <div className="image-card" data-card={key}>
                      <img src={club.img} alt={club.title} />
                      <div className="card-overlay">
                        <h5>{club.title.split(" – ")[0]}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Nav Buttons + Dots */}
            <div className="slider-controls">
              <button className="nav-btn prev-btn" id="prevBtnClubs">
                &lt;
              </button>
              <ul className="dots" id="dotsClubs"></ul>
              <button className="nav-btn next-btn" id="nextBtnClubs">
                &gt;
              </button>
            </div>
          </div>

          {/* DETAIL CARD */}
          <div
            className="card detail-card"
            style={{ color: "#08317a" }}
            ref={detailCardClubsRef}
          >
            <div className="card-body">
              <h4 className="card-title text-center" ref={detailTitleClubsRef}>
                Club Details
              </h4>

              <p className="card-text" ref={detailContentClubsRef}></p>

              {/* Social Links */}
              <div ref={detailLinksClubsRef}></div>

              {/* MENTOR SECTION */}
              <div className="mentor-section text-center mt-5">
                <div
                  ref={mentorContainerClubsRef}
                  className="d-flex justify-content-center"
                ></div>
              </div>

              {/* STUDENTS SLIDER SECTION */}
              <div className="student-section mt-5">
                <h4
                  className="text-center text-uppercase fw-bold mb-4"
                  style={{ color: "#08317a" }}
                >
                  Our Events
                </h4>

                <div className="student-slider-container">
                  {/* Prev Button */}
                  <button
                    className="student-nav prev-btn btn btn-warning"
                    ref={studentPrevClubsRef}
                  >
                    &lt;
                  </button>

                  {/* Track Window */}
                  <div className="student-track-window">
                    <div
                      className="student-track"
                      ref={studentTrackClubsRef}
                    ></div>
                  </div>

                  {/* Next Button */}
                  <button
                    className="student-nav next-btn btn btn-warning"
                    ref={studentNextClubsRef}
                  >
                    &gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Carousel */}
      <section className="video-carousel-section py-5">
        <div className="container-fluid">
          <h2 className="text-center fw-bold mb-4 text-warning">Events</h2>
          <div id="youtube-carousel" className="owl-carousel owl-theme">
            {["1.webp", "2.webp", "3.webp", "4.webp"].map((img, index) => (
              <div className="item" key={index}>
                <div className="image-wrapper">
                  <img
                    src={`/media/events/${img}`}
                    alt={`Image ${index + 1}`}
                    className="img-fluid"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <section className="py-5">
        <div className="container">
          <h2
            className="section-title text-center"
            style={{ color: "#08317a" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            COMMITTEES @ IMT
          </h2>
          <div className="slider-container committees">
            <div className="cards-slider">
              <div className="cards-row" ref={committeesRowRef}>
                {Object.entries(committeeData).map(([key, committee]) => (
                  <div className="card-wrapper" key={key}>
                    <div className="image-card" data-card={key}>
                      <img src={committee.img} alt={committee.title} />
                      <div className="card-overlay">
                        <h5>{committee.title}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="slider-controls">
              <button className="nav-btn prev-btn" id="prevBtnCommittee">
                &lt;
              </button>
              <ul className="dots" id="dotsCommittee"></ul>
              <button className="nav-btn next-btn" id="nextBtnCommittee">
                &gt;
              </button>
            </div>
          </div>
          <div
            className="card detail-card"
            style={{ color: "#08317a" }}
            ref={detailCardCommitteeRef}
          >
            <div className="card-body">
              <h4
                className="card-title text-center"
                ref={detailTitleCommitteeRef}
              >
                Committee Details
              </h4>
              <p className="card-text" ref={detailContentCommitteeRef}></p>
              <div className="mentor-section text-center mt-5">
                <div
                  ref={mentorContainerRef}
                  className="d-flex justify-content-center"
                ></div>
              </div>
              <div className="student-section mt-5">
                <h4
                  className="text-center text-uppercase fw-bold mb-4"
                  style={{ color: "#08317a" }}
                >
                  Our Events
                </h4>
                <div className="student-slider-container">
                  <button
                    className="student-nav prev-btn btn btn-warning"
                    ref={studentPrevRef}
                  >
                    &lt;
                  </button>
                  <div className="student-track-window">
                    <div className="student-track" ref={studentTrackRef}></div>
                  </div>
                  <button
                    className="student-nav next-btn btn btn-warning"
                    ref={studentNextRef}
                  >
                    &gt;
                  </button>
                </div>
              </div>
              <div
                ref={detailLinksCommitteeRef}
                className="mt-4 text-center"
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Calendar Section */}
      <section className="events-calendar-section py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4 text-warning">
            Events Calendar
          </h2>
          <div className="row g-4">
            <div className="col-md-4 col-sm-6">
              <div className="event-card">
                <div className="event-date">
                  <span className="day">15</span>
                  <span className="month">Oct</span>
                </div>
                <div className="event-info">
                  <h5 className="event-title">Tech Workshop</h5>
                  <p className="event-time">10:00 AM - 1:00 PM</p>
                  <p className="event-location">Auditorium, Block A</p>
                  <button className="btn btn-warning btn-sm view-details">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="event-card">
                <div className="event-date">
                  <span className="day">22</span>
                  <span className="month">Oct</span>
                </div>
                <div className="event-info">
                  <h5 className="event-title">Art Exhibition</h5>
                  <p className="event-time">2:00 PM - 5:00 PM</p>
                  <p className="event-location">Gallery Hall</p>
                  <button className="btn btn-warning btn-sm view-details">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="event-card">
                <div className="event-date">
                  <span className="day">30</span>
                  <span className="month">Oct</span>
                </div>
                <div className="event-info">
                  <h5 className="event-title">Music Concert</h5>
                  <p className="event-time">6:00 PM - 9:00 PM</p>
                  <p className="event-location">Open Ground</p>
                  <button className="btn btn-warning btn-sm view-details">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
