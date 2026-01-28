"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const DistinguishedClientsSection = ({ emblaRef }) => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/distinguished-clients`
        );
        const json = await res.json();

        if (json.success) {
          setClients(json.data);
        }
      } catch (error) {
        console.error("Failed to load distinguished clients", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  return (
    <section className="placement-alliances-section py-4" data-aos="fade-up">
      <div className="container text-center">
        <h6 className="subtitle text-warning">Our Clients</h6>
        <h2 className="section-title mb-4">Our Distinguished Clients</h2>
        <p className="mb-5">
          We are proud to be associated with top companies.
        </p>

        {loading ? (
          <p>Loading clients...</p>
        ) : (
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {clients.map((client, index) => (
                <div className="embla__slide" key={client._id}>
                  <div className="logo-box">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_URL}/${client.image}`}
                      alt={client.title || "Client Logo"}
                      width={140}
                      height={80}
                      style={{ objectFit: "contain" }}
                      priority={index < 4}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DistinguishedClientsSection;
