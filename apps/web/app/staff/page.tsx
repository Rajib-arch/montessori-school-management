import Link from 'next/link';
import { staff } from '@/lib/mock-data';

export default function StaffPage() {
  return (
    <main className="page-shell">
      <div className="page-header">
        <div>
          <p className="eyebrow">People</p>
          <h1>Staff</h1>
        </div>
        <Link href="/" className="cta-button secondary">Back to dashboard</Link>
      </div>

      <section className="grid-two">
        {staff.map((member) => (
          <div key={member.id} className="panel">
            <div className="panel-header">
              <h2>{member.name}</h2>
              <span className="pill">{member.role}</span>
            </div>
            <div className="class-meta">
              <span>Department: {member.department}</span>
              <span>Shift: {member.shift}</span>
              <span>Leave balance: {member.leave}</span>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
