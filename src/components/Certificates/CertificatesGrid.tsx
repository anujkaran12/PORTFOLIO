// src/components/CertificatesGrid.tsx
import React from "react";
import CertificateCard from "./CertificateCard";
import './CertificateCard.css'
import cf1 from '../../assets/cf-1.png'
import cf2 from '../../assets/cf-2.png'
import cf3 from '../../assets/cf-3.png'
const certificates = [
  {
    id: 1,
    title: "C, C++, Data Structure & Algorithm",
    issuer: "mysirg.com",
    date: "Jan 2024",
    image: cf1,
    link: "https://media.licdn.com/dms/document/media/v2/D4D1FAQHUFAuVodT9ng/feedshare-document-pdf-analyzed/feedshare-document-pdf-analyzed/0/1689766318335?e=1759968000&v=beta&t=RlHsaxEJJBDtCF8HIBQFlrzIxqmlSOOR_YYzDqYN19A",
  },
  {
    id: 2,
    title: "React training",
    issuer: "Internshala",
    date: "Mar 2024",
    image: cf2,
    link: "https://media.licdn.com/dms/document/media/v2/C561FAQFwLzmqWmyzRw/feedshare-document-pdf-analyzed/feedshare-document-pdf-analyzed/0/1679245692493?e=1759968000&v=beta&t=nKYL5dTxkmA9SjQYNNIX_rpe4iDx2qbmmWyETj1sExU",
  },
  {
    id: 3,
    title: "Pregrad Fullstack Web Developer",
    issuer: "Pregrad",
    date: "Jun 2024",
    image: cf3,
    link: "https://drive.google.com/file/d/1LiMDWVVwCUeNuySYbNHSR0Y-6stsFVrw/view",
  },
];

const CertificatesGrid: React.FC = () => {
  return (
    <div className="certificates-grid">
      {certificates.map((cert) => (
        <CertificateCard key={cert.id} certificate={cert} />
      ))}
    </div>
  );
};

export default CertificatesGrid;
