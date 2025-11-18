# Login & Signup App

Full-stack authentication app with Prisma ORM, Neon database, and Tailwind CSS.

## Setup

### Backend Setup

1. Navigate to backend folder:
```bash
cd backend
npm install
```

2. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

3. Update `.env` with your Neon database URL:
   - Go to https://neon.tech and create a database
   - Copy the connection string
   - Paste it in `.env` as `DATABASE_URL`

4. Generate Prisma client and run migrations:
```bash
npm run prisma:generate
npm run prisma:migrate
```

5. Start backend server:
```bash
npm run dev
```

### Frontend Setup

1. Open a new terminal and navigate to frontend folder:
```bash
cd frontend
npm install
```

2. Start frontend dev server:
```bash
npm run dev
```

3. Open http://localhost:3000 in your browser

## Features

- User signup with email, password, and name
- User login with email and password
- Password hashing with bcrypt
- JWT authentication
- Tailwind CSS styling
- Prisma ORM with Neon PostgreSQL database
