import Link from 'next/link';
import { classes } from '@/lib/mock-data';

export default function ClassesPage() {
  return (
    <main className="page-shell">
      <div className="page-header">
        <div>
          <p className="eyebrow">Academic structure</p>
          <h1>Classes & scheduling</h1>
        </div>
        <Link href="/" className="cta-button secondary">Back to dashboard</Link>
      </div>

      <section className="grid-two">
        {classes.map((item) => (
          <div key={item.id} className="panel">
            <div className="panel-header">
              <h2>{item.name}</h2>
              <span className="pill">{item.teacher}</span>
            </div>
            <div className="class-meta">
              <span>Students: {item.students}</span>
              <span>Room: {item.room}</span>
              <span>Schedule: {item.schedule}</span>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
