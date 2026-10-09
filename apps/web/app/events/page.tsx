import Link from 'next/link';
import { events } from '@/lib/mock-data';

export default function EventsPage() {
  return (
    <main className="page-shell">
      <div className="page-header">
        <div>
          <p className="eyebrow">School calendar</p>
          <h1>Events</h1>
        </div>
        <Link href="/" className="cta-button secondary">Back to dashboard</Link>
      </div>

      <section className="grid-two">
        {events.map((event) => (
          <div key={event.id} className="panel">
            <div className="panel-header">
              <h2>{event.title}</h2>
              <span className="pill">{event.type}</span>
            </div>
            <div className="class-meta">
              <span>Date: {event.date}</span>
              <span>Location: {event.location}</span>
              <span>RSVP: {event.rsvp}</span>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
