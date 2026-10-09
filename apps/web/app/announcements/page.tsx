import Link from 'next/link';
import { announcements } from '@/lib/mock-data';

export default function AnnouncementsPage() {
  return (
    <main className="page-shell">
      <div className="page-header">
        <div>
          <p className="eyebrow">Communication</p>
          <h1>Announcements</h1>
        </div>
        <Link href="/" className="cta-button secondary">Back to dashboard</Link>
      </div>

      <section className="panel">
        <div className="panel-header">
          <h2>Latest updates</h2>
          <button className="cta-button">+ New announcement</button>
        </div>
        <ul className="list-stack">
          {announcements.map((item) => (
            <li key={item.id} className="list-row stacked">
              <div>
                <strong>{item.title}</strong>
                <small>{item.author}</small>
              </div>
              <div className="soft-text">{item.summary}</div>
              <span className="soft-text">{item.date}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
