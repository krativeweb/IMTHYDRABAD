import Image from "next/image";
import Link from "next/link";

export default function ConnectSection() {
  const connects = [
    {
      img: "/media/IR/cc1.jpg",
      title: "Corporate Connect",
      link: "/corporate-connect",
    },
    {
      img: "/media/IR/gc1.jpg",
      title: "Global Connect",
      link: "/studying-at-imt-hyderabad",
    },
    {
      img: "/media/IR/cc2.jpg",
      title: "Community Connect",
      link: "/community-connect",
    },
  ];

  return (
    <section className="py-4" style={{ background: "#151e54" }}>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {connects.map((c, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <Image
                  src={c.img}
                  className="card-img-top"
                  alt={c.title}
                  width={400}
                  height={250}
                />
                <div className="card-body">
                  <h5 className="card-title text-uppercase fw-bold text-dark">
                    {c.title}
                  </h5>
                  <p className="card-text text-secondary">...</p>
                  <Link
                    href={c.link}
                    className="text-warning fw-bold text-decoration-none"
                  >
                    Know More <i className="fas fa-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
