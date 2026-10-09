import express from 'express';

const app = express();
const port = Number(process.env.PORT || 4000);

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    app: 'montessori-school-management-api',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/modules', (_req, res) => {
  res.json({
    modules: [
      'Student Enrollment',
      'Attendance Tracking',
      'Staff Management',
      'Scheduling',
      'Fee Management',
      'Parent Communication',
      'Montessori Progress Tracking',
      'Inventory & Resources',
      'Events',
      'Reporting'
    ]
  });
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
