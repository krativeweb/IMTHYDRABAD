"use client";

import Link from "next/link";
import Image from "next/image";

export default function CampusLifeGallery() {
  const items = [
    { img: "/media/img/g.webp", title: "BLOGS", link: "https://blog.imthyderabad.edu.in/" },
    {
      img: "/media/img/h.webp",
      title: "LRC",
      link: "/learning-resource-center-lrc",
    },
    {
      img: "/media/img/f.webp",
      title: "CLUBS & COMMITTEES",
      link: "/clubs&committes",
    },
    { img: "/media/img/z.webp", title: "CAMPUS PULSE", link: "/anualevents" },
    { img: "/media/news.jpg", title: "NEWSLETTERS", link: "/newsletters" },
    { img: "/media/media.jpg", title: "MEDIA", link: "/medias" },
    { img: "/media/img/x.webp", title: "CAMPUS TOUR", link: "/Campus-Tour" },
  ];

  return (
    <section className="campus-life-gallery py-4">
      <div className="container-fluid">
        <h2
          className="section-title mb-4 text-center"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Campus Life
        </h2>

        <div className="masonry-gallery">
          {items.map((item, i) => (
            <div
              key={i}
              className={`masonry-item ${
                i === 0
                  ? "large"
                  : i === 1
                  ? "tall"
                  : i === 2
                  ? "wide"
                  : "medium"
              }`}
              data-aos="fade-up"
            >
              <Link href={item.link} className="block">
                <div className="relative group overflow-hidden rounded-lg">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={500}
                    height={400}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="gallery-caption absolute bottom-0 left-0 w-full text-center bg-opacity-70 bg-warning py-2">
                    <h5 className="text-white text-lg font-semibold">
                      {item.title}
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
