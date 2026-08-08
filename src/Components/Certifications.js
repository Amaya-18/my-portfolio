import './Certifications.css';

const certifications = [
  {
    title: 'Software Testing Foundations',
    issuer: 'CompTIA',
  },
  {
    title: 'Microsoft Security Essentials',
    issuer: 'Microsoft',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <div className="section-header">
        <span className="section-tag">Certifications</span>
        <span className="section-rule" />
      </div>

      <div className="certifications-grid">
        {certifications.map((cert) => (
          <article className="cert-card" key={cert.title}>
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <span className="cert-badge">Credential</span>
          </article>
        ))}
      </div>
    </section>
  );
}
