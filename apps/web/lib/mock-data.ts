export type Student = {
  id: string;
  name: string;
  className: string;
  parent: string;
  status: 'active' | 'pending' | 'graduated';
  attendance: number;
};

export type ClassItem = {
  id: string;
  name: string;
  teacher: string;
  students: number;
  room: string;
  schedule: string;
};

export type AttendanceEntry = {
  name: string;
  percent: number;
};

export type StaffMember = {
  id: string;
  name: string;
  role: string;
  department: string;
  shift: string;
  leave: string;
};

export type FinanceEntry = {
  id: string;
  type: string;
  status: 'Paid' | 'Pending' | 'Overdue';
  amount: string;
  due: string;
  collected: string;
};

export type Observation = {
  id: string;
  student: string;
  area: string;
  notes: string;
  level: 'Developing' | 'Proficient' | 'Mastered';
};

export type InventoryItem = {
  id: string;
  name: string;
  category: string;
  stock: number;
  reorderLevel: number;
  location: string;
};

export type Announcement = {
  id: string;
  title: string;
  summary: string;
  author: string;
  date: string;
};

export type EventItem = {
  id: string;
  title: string;
  date: string;
  location: string;
  type: string;
  rsvp: string;
};

export const schoolSummary = {
  totalStudents: 420,
  attendanceRate: 96.4,
  feesCollected: '$42.8K',
  openCases: 12
};

export const students: Student[] = [
  { id: '1', name: 'Ava Thompson', className: 'Lower Elementary', parent: 'Daniel Thompson', status: 'active', attendance: 98 },
  { id: '2', name: 'Noah Patel', className: 'Primary', parent: 'Rina Patel', status: 'active', attendance: 95 },
  { id: '3', name: 'Mila Gomez', className: 'Toddler', parent: 'Luis Gomez', status: 'pending', attendance: 89 },
  { id: '4', name: 'Leo Martin', className: 'Upper Elementary', parent: 'Sophia Martin', status: 'active', attendance: 97 },
  { id: '5', name: 'Zoe Nguyen', className: 'Early Childhood', parent: 'Hoa Nguyen', status: 'graduated', attendance: 100 }
];

export const classes: ClassItem[] = [
  { id: 'c1', name: 'Toddler Room', teacher: 'Ms. Emma Wells', students: 18, room: 'Room 1', schedule: '9:00 AM - 1:30 PM' },
  { id: 'c2', name: 'Primary A', teacher: 'Mr. Alan Brooks', students: 22, room: 'Room 2', schedule: '8:30 AM - 2:00 PM' },
  { id: 'c3', name: 'Lower Elementary', teacher: 'Ms. Sara Kim', students: 21, room: 'Room 4', schedule: '8:45 AM - 2:30 PM' },
  { id: 'c4', name: 'Upper Elementary', teacher: 'Mr. Daniel Ruiz', students: 19, room: 'Room 5', schedule: '9:00 AM - 3:00 PM' }
];

export const attendance: AttendanceEntry[] = [
  { name: 'Toddler', percent: 94 },
  { name: 'Primary', percent: 96 },
  { name: 'Lower Elementary', percent: 98 },
  { name: 'Upper Elementary', percent: 97 }
];

export const staff: StaffMember[] = [
  { id: 's1', name: 'Emma Wells', role: 'Lead Teacher', department: 'Early Childhood', shift: 'Morning', leave: '8 days' },
  { id: 's2', name: 'Alan Brooks', role: 'Teacher', department: 'Primary', shift: 'Morning', leave: '5 days' },
  { id: 's3', name: 'Sara Kim', role: 'Teacher', department: 'Elementary', shift: 'Full Day', leave: '6 days' },
  { id: 's4', name: 'Nina Foster', role: 'Finance Manager', department: 'Finance', shift: 'Office', leave: '4 days' }
];

export const finance: FinanceEntry[] = [
  { id: 'f1', type: 'Tuition Collection', status: 'Paid', amount: '$18,400', due: '2026-10-30', collected: '$18,400' },
  { id: 'f2', type: 'Materials Fee', status: 'Pending', amount: '$2,300', due: '2026-10-25', collected: '$1,100' },
  { id: 'f3', type: 'Transportation', status: 'Overdue', amount: '$3,200', due: '2026-10-14', collected: '$1,500' }
];

export const observations: Observation[] = [
  { id: 'o1', student: 'Ava Thompson', area: 'Practical Life', notes: 'Independent handwashing and table setting completed without prompts.', level: 'Proficient' },
  { id: 'o2', student: 'Noah Patel', area: 'Mathematics', notes: 'Counting objects up to 20 with confidence and accuracy.', level: 'Developing' },
  { id: 'o3', student: 'Mila Gomez', area: 'Sensorial', notes: 'Matched color tablets with careful focus and calm concentration.', level: 'Mastered' },
  { id: 'o4', student: 'Leo Martin', area: 'Language', notes: 'Read short paragraphs and used proper sentence structure.', level: 'Proficient' }
];

export const inventory: InventoryItem[] = [
  { id: 'i1', name: 'Practical Life Kit', category: 'Classroom', stock: 14, reorderLevel: 8, location: 'Room 2 Shelf A' },
  { id: 'i2', name: 'Math Beads Set', category: 'Curriculum', stock: 6, reorderLevel: 5, location: 'Math Storage' },
  { id: 'i3', name: 'Art Paper Pack', category: 'Supplies', stock: 40, reorderLevel: 10, location: 'Art Corner' },
  { id: 'i4', name: 'Cleaning Supplies', category: 'Operations', stock: 12, reorderLevel: 6, location: 'Janitorial Closet' }
];

export const announcements: Announcement[] = [
  { id: 'a1', title: 'Parent Orientation', summary: 'Orientation for new families will take place on Friday, October 18th.', author: 'School Admin', date: '2026-10-09' },
  { id: 'a2', title: 'School Field Trip', summary: 'Lower Elementary class will visit the botanical garden next week.', author: 'Ms. Kim', date: '2026-10-08' },
  { id: 'a3', title: 'Fee Reminder', summary: 'Tuition payments are due before the end of the month.', author: 'Finance Team', date: '2026-10-07' }
];

export const events: EventItem[] = [
  { id: 'e1', title: 'Open Day', date: '2026-10-18', location: 'Main Hall', type: 'School Event', rsvp: '86%' },
  { id: 'e2', title: 'Community Workshop', date: '2026-10-20', location: 'Outdoor Space', type: 'Workshop', rsvp: '62%' },
  { id: 'e3', title: 'Annual Exhibition', date: '2026-10-27', location: 'Campus Lawn', type: 'Exhibition', rsvp: '92%' }
];
