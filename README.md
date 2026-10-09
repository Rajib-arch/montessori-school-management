# Montessori School Management Web App

A full-stack school administration system for Montessori institutions, built as a monorepo with a Next.js frontend and Express API.

## Features

- Student enrollment and records
- Attendance monitoring
- Staff and class management
- Parent communication
- Fee and finance tracking
- Montessori observation and progress tracking
- Inventory and resource planning
- Events and announcements
- Reporting and dashboard analytics

## Stack

Frontend
- Next.js
- TypeScript
- Tailwind CSS

Backend
- Express
- TypeScript

## Project structure

```bash
apps/
  web/        # Next.js frontend
  api/        # Express backend
```

## Getting started

```bash
npm install
npm run dev
```

This starts both the frontend and the API in parallel.

## App URLs

- Frontend: http://localhost:3000
- API: http://localhost:4000

## Available API endpoints

- GET /api/health
- GET /api/summary
- GET /api/students
- GET /api/classes
- GET /api/attendance
- GET /api/staff
- GET /api/finance
- GET /api/observations
- GET /api/inventory
- GET /api/events
- GET /api/announcements

## Notes

This initial version is a working MVP with realistic mock data to support demo, onboarding, and project iteration.
