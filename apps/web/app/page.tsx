export default function Page() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Montessori School Management</h1>
      <p>Welcome to your school management dashboard.</p>

      <section style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', marginTop: '2rem' }}>
        {[
          { title: 'Students', value: '420' },
          { title: 'Attendance', value: '96.4%' },
          { title: 'Fee Collection', value: '$42.8K' },
          { title: 'Staff', value: '38' }
        ].map((item) => (
          <div key={item.title} style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1rem', background: '#f9fafb' }}>
            <p style={{ margin: 0, color: '#6b7280' }}>{item.title}</p>
            <h2 style={{ margin: '0.5rem 0 0', fontSize: '1.8rem' }}>{item.value}</h2>
          </div>
        ))}
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Core Modules</h2>
        <ul>
          <li>Student Enrollment & Profiles</li>
          <li>Attendance Tracking</li>
          <li>Staff & Payroll Overview</li>
          <li>Scheduling & Classroom Allocation</li>
          <li>Fee Management</li>
          <li>Parent Communication</li>
          <li>Montessori Progress Observation</li>
          <li>Inventory & Events</li>
        </ul>
      </section>
    </main>
  );
}
