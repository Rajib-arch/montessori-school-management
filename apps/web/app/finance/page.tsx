import Link from 'next/link';
import { finance } from '@/lib/mock-data';

export default function FinancePage() {
  return (
    <main className="page-shell">
      <div className="page-header">
        <div>
          <p className="eyebrow">Finance</p>
          <h1>Fee management</h1>
        </div>
        <Link href="/" className="cta-button secondary">Back to dashboard</Link>
      </div>

      <section className="grid-two">
        {finance.map((entry) => (
          <div key={entry.id} className="panel">
            <div className="panel-header">
              <h2>{entry.type}</h2>
              <span className="pill">{entry.status}</span>
            </div>
            <div className="class-meta">
              <span>Amount: {entry.amount}</span>
              <span>Due: {entry.due}</span>
              <span>Collected: {entry.collected}</span>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
