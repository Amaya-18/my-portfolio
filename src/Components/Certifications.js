import { Award } from 'lucide-react';
import './Certifications.css';

export default function Certifications({ data }) {
  return <section id="certifications" className="certifications section-shell"><div className="section-header"><span className="section-tag">Certifications</span><span className="section-rule" /></div><div className="certifications-heading"><p className="kicker">Proof of curiosity</p><h2>Always learning, <em>always testing.</em></h2></div><div className="certifications-list">{data.map((cert, index) => <div className="certification" key={cert}><span>0{index + 1}</span><Award size={18} /><h3>{cert}</h3></div>)}</div></section>;
}
