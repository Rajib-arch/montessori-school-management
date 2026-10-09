import Link from 'next/link';
import { Home, Users, CalendarCheck2, BookOpen, DollarSign, ClipboardList, Warehouse, BellRing, Rocket, LogIn, Sparkles } from 'lucide-react';
import { schoolSummary, students, classes, attendance, staff, finance, observations, inventory, announcements, events } from '@/lib/mock-data';

const metrics = [
  { label: 'Students', value: schoolSummary.totalStudents, icon: Users },
  { label: 'Attendance', value: `${schoolSummary.attendanceRate}%`, icon: CalendarCheck2 },
  { label: 'Fees Collected', value: schoolSummary.feesCollected, icon: DollarSign },
  { label: 'Open Cases', value: schoolSummary.openCases, icon: BellRing }
];

const navItems = [
  { href: '/', label: 'Overview', icon: Home },
  { href: '/students', label: 'Students', icon: Users },
  { href: '/classes', label: 'Classes', icon: BookOpen },
  { href: '/attendance', label: 'Attendance', icon: CalendarCheck2 },
  { href: '/staff', label: 'Staff', icon: ClipboardList },
  { href: '/finance', label: 'Finance', icon: DollarSign },
  { href: '/progress', label: 'Progress', icon: Sparkles },
  { href: '/inventory', label: 'Inventory', icon: Warehouse },
  { href: '/events', label: 'Events', icon: Rocket },
  { href: '/announcements', label: 'Announcements', icon: BellRing },
  { href: '/login', label: 'Login', icon: LogIn }
];

export default function HomePage() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">M</div>
          <div>
            <strong>Montessori</strong>
            <small>School Suite</small>
          </div>
        </div>

        <nav className="nav">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} className="nav-item">
              <Icon size={18} />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Overview</p>
            <h1>Montessori school management dashboard</h1>
          </div>
          <button className="cta-button">+ New enrollment</button>
        </header>

        <section className="metrics-grid">
          {metrics.map(({ label, value, icon: Icon }) => (
            <div key={label} className="metric-card">
              <div className="metric-icon">
                <Icon size={18} />
              </div>
              <div>
                <p>{label}</p>
                <h3>{value}</h3>
              </div>
            </div>
          ))}
        </section>

        <section className="content-grid">
          <div className="panel">
            <div className="panel-header">
              <h2>Students</h2>
              <Link href="/students">View all</Link>
            </div>
            <ul className="list-stack">
              {students.slice(0, 5).map((student) => (
                <li key={student.id} className="list-row">
                  <div>
                    <strong>{student.name}</strong>
                    <small>{student.className}</small>
                  </div>
                  <span className={`badge ${student.status}`}>{student.status}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h2>Attendance</h2>
              <Link href="/attendance">View all</Link>
            </div>
            <div className="progress-stack">
              {attendance.slice(0, 4).map((item) => (
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
          </div>
        </section>

        <section className="content-grid">
          <div className="panel">
            <div className="panel-header">
              <h2>Montessori progress</h2>
              <Link href="/progress">Open</Link>
            </div>
            <ul className="list-stack">
              {observations.slice(0, 5).map((item) => (
                <li key={item.id} className="list-row">
                  <div>
                    <strong>{item.student}</strong>
                    <small>{item.area}</small>
                  </div>
                  <span className="pill">{item.level}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h2>Announcements</h2>
              <Link href="/announcements">All updates</Link>
            </div>
            <ul className="list-stack">
              {announcements.slice(0, 4).map((item) => (
                <li key={item.id} className="list-row stacked">
                  <div>
                    <strong>{item.title}</strong>
                    <small>{item.author}</small>
                  </div>
                  <span className="soft-text">{item.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bottom-grid">
          <div className="panel">
            <div className="panel-header">
              <h2>Class overview</h2>
              <Link href="/classes">All classes</Link>
            </div>
            <ul className="list-stack">
              {classes.map((classItem) => (
                <li key={classItem.id} className="list-row">
                  <div>
                    <strong>{classItem.name}</strong>
                    <small>{classItem.teacher}</small>
                  </div>
                  <span className="soft-text">{classItem.students} students</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h2>Upcoming events</h2>
              <Link href="/events">See calendar</Link>
            </div>
            <ul className="list-stack">
              {events.slice(0, 4).map((event) => (
                <li key={event.id} className="list-row stacked">
                  <div>
                    <strong>{event.title}</strong>
                    <small>{event.date}</small>
                  </div>
                  <span className="soft-text">{event.location}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
