import Link from 'next/link';
import { attendance } from '@/lib/mock-data';

export default function AttendancePage() {
  return (
    <main className="page-shell">
      <div className="page-header">
        <div>
          <p className="eyebrow">Daily operations</p>
          <h1>Attendance</h1>
        </div>
        <Link href="/" className="cta-button secondary">Back to dashboard</Link>
      </div>

      <section className="panel">
        <div className="panel-header">
          <h2>Class attendance overview</h2>
          <button className="cta-button">Mark attendance</button>
        </div>
        <div className="progress-stack large">
          {attendance.map((item) => (
            <div key={item.name}>
              <div className="row-between">
                <span>{item.name}</span>
                <strong>{item.percent}%</strong>
              </div>
              <div className="bar">
                <span style={{ width: `${item.percent}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
