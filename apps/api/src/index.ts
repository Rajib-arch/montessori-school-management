import express from 'express';
import cors from 'cors';

const app = express();
const port = Number(process.env.PORT || 4000);

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    success: true,
    message: 'Montessori school management API is healthy',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/summary', (_req, res) => {
  res.json({
    success: true,
    data: {
      totalStudents: 420,
      attendanceRate: 96.4,
      feesCollected: '$42.8K',
      openCases: 12,
      currentYear: '2026'
    }
  });
});

app.get('/api/students', (_req, res) => {
  res.json({
    success: true,
    data: [
      { id: '1', name: 'Ava Thompson', className: 'Lower Elementary', parent: 'Daniel Thompson', status: 'active', attendance: 98 },
      { id: '2', name: 'Noah Patel', className: 'Primary', parent: 'Rina Patel', status: 'active', attendance: 95 },
      { id: '3', name: 'Mila Gomez', className: 'Toddler', parent: 'Luis Gomez', status: 'pending', attendance: 89 },
      { id: '4', name: 'Leo Martin', className: 'Upper Elementary', parent: 'Sophia Martin', status: 'active', attendance: 97 }
    ]
  });
});

app.get('/api/classes', (_req, res) => {
  res.json({
    success: true,
    data: [
      { id: 'c1', name: 'Toddler Room', teacher: 'Ms. Emma Wells', students: 18, room: 'Room 1', schedule: '9:00 AM - 1:30 PM' },
      { id: 'c2', name: 'Primary A', teacher: 'Mr. Alan Brooks', students: 22, room: 'Room 2', schedule: '8:30 AM - 2:00 PM' },
      { id: 'c3', name: 'Lower Elementary', teacher: 'Ms. Sara Kim', students: 21, room: 'Room 4', schedule: '8:45 AM - 2:30 PM' }
    ]
  });
});

app.get('/api/attendance', (_req, res) => {
  res.json({
    success: true,
    data: [
      { name: 'Toddler', percent: 94 },
      { name: 'Primary', percent: 96 },
      { name: 'Lower Elementary', percent: 98 },
      { name: 'Upper Elementary', percent: 97 }
    ]
  });
});

app.get('/api/staff', (_req, res) => {
  res.json({
    success: true,
    data: [
      { id: 's1', name: 'Emma Wells', role: 'Lead Teacher', department: 'Early Childhood', shift: 'Morning', leave: '8 days' },
      { id: 's2', name: 'Alan Brooks', role: 'Teacher', department: 'Primary', shift: 'Morning', leave: '5 days' },
      { id: 's3', name: 'Nina Foster', role: 'Finance Manager', department: 'Finance', shift: 'Office', leave: '4 days' }
    ]
  });
});

app.get('/api/finance', (_req, res) => {
  res.json({
    success: true,
    data: [
      { id: 'f1', type: 'Tuition Collection', status: 'Paid', amount: '$18,400', due: '2026-10-30', collected: '$18,400' },
      { id: 'f2', type: 'Materials Fee', status: 'Pending', amount: '$2,300', due: '2026-10-25', collected: '$1,100' }
    ]
  });
});

app.get('/api/observations', (_req, res) => {
  res.json({
    success: true,
    data: [
      { id: 'o1', student: 'Ava Thompson', area: 'Practical Life', notes: 'Independent handwashing and table setting completed without prompts.', level: 'Proficient' },
      { id: 'o2', student: 'Noah Patel', area: 'Mathematics', notes: 'Counting objects up to 20 with confidence and accuracy.', level: 'Developing' },
      { id: 'o3', student: 'Mila Gomez', area: 'Sensorial', notes: 'Matched color tablets with careful focus and calm concentration.', level: 'Mastered' }
    ]
  });
});

app.get('/api/inventory', (_req, res) => {
  res.json({
    success: true,
    data: [
      { id: 'i1', name: 'Practical Life Kit', category: 'Classroom', stock: 14, reorderLevel: 8, location: 'Room 2 Shelf A' },
      { id: 'i2', name: 'Math Beads Set', category: 'Curriculum', stock: 6, reorderLevel: 5, location: 'Math Storage' },
      { id: 'i3', name: 'Art Paper Pack', category: 'Supplies', stock: 40, reorderLevel: 10, location: 'Art Corner' }
    ]
  });
});

app.get('/api/events', (_req, res) => {
  res.json({
    success: true,
    data: [
      { id: 'e1', title: 'Open Day', date: '2026-10-18', location: 'Main Hall', type: 'School Event', rsvp: '86%' },
      { id: 'e2', title: 'Community Workshop', date: '2026-10-20', location: 'Outdoor Space', type: 'Workshop', rsvp: '62%' },
      { id: 'e3', title: 'Annual Exhibition', date: '2026-10-27', location: 'Campus Lawn', type: 'Exhibition', rsvp: '92%' }
    ]
  });
});

app.get('/api/announcements', (_req, res) => {
  res.json({
    success: true,
    data: [
      { id: 'a1', title: 'Parent Orientation', summary: 'Orientation for new families will take place on Friday, October 18th.', author: 'School Admin', date: '2026-10-09' },
      { id: 'a2', title: 'School Field Trip', summary: 'Lower Elementary class will visit the botanical garden next week.', author: 'Ms. Kim', date: '2026-10-08' }
    ]
  });
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
