// src/components/CertificateCard.tsx
import React from "react";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string; // optional view certificate link
}

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  return (
    <div className="certificate-card">
      <img src={certificate.image} alt={certificate.title} className="certificate-image" />
      <div className="certificate-content">
        <h3 className="certificate-title">{certificate.title}</h3>
        <p className="certificate-issuer">{certificate.issuer}</p>
        <p className="certificate-date">{certificate.date}</p>
        {certificate.link && (
          <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="certificate-button">
            View Certificate
          </a>
        )}
      </div>
    </div>
  );
};

export default CertificateCard;
