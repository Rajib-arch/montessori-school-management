import Link from 'next/link';
import { schoolSummary, students, classes, attendance, finance, staff, observations, inventory, announcements, events } from '@/lib/mock-data';

export default function StudentsPage() {
  return (
    <main className="page-shell">
      <div className="page-header">
        <div>
          <p className="eyebrow">Student management</p>
          <h1>Students</h1>
        </div>
        <Link href="/" className="cta-button secondary">Back to dashboard</Link>
      </div>

      <section className="panel">
        <div className="panel-header">
          <h2>Student records</h2>
          <button className="cta-button">+ Add student</button>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Class</th>
              <th>Status</th>
              <th>Parent</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.className}</td>
                <td><span className={`badge ${student.status}`}>{student.status}</span></td>
                <td>{student.parent}</td>
                <td>{student.attendance}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
