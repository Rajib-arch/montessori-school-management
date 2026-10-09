import Link from 'next/link';
import { observations } from '@/lib/mock-data';

export default function ProgressPage() {
  return (
    <main className="page-shell">
      <div className="page-header">
        <div>
          <p className="eyebrow">Montessori learning</p>
          <h1>Progress tracking</h1>
        </div>
        <Link href="/" className="cta-button secondary">Back to dashboard</Link>
      </div>

      <section className="panel">
        <div className="panel-header">
          <h2>Observation log</h2>
          <button className="cta-button">New observation</button>
        </div>
        <ul className="list-stack">
          {observations.map((item) => (
            <li key={item.id} className="list-row stacked">
              <div>
                <strong>{item.student}</strong>
                <small>{item.area}</small>
              </div>
              <div className="soft-text">{item.notes}</div>
              <span className="pill">{item.level}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
