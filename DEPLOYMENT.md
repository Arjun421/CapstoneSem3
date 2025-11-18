# Deployment Guide - Render

## Prerequisites
1. GitHub account
2. Render account (sign up at https://render.com)
3. Your Neon database URL

## Step 1: Push to GitHub

1. Initialize git in your project:
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Create a new repository on GitHub
3. Push your code:
```bash
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

## Step 2: Deploy Backend on Render

1. Go to https://dashboard.render.com
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: auth-backend (or any name)
   - **Region**: Choose closest to UK (e.g., Frankfurt)
   - **Branch**: main
   - **Root Directory**: backend
   - **Environment**: Node
   - **Build Command**: `npm install && npx prisma generate`
   - **Start Command**: `npm start`

5. Add Environment Variables (click "Advanced"):
   - `DATABASE_URL` = Your Neon database URL
   - `JWT_SECRET` = any-random-secret-key-here
   - `PORT` = 3001

6. Click "Create Web Service"
7. Wait for deployment (5-10 minutes)
8. Copy your backend URL (e.g., https://auth-backend-xxxx.onrender.com)

## Step 3: Update Frontend for Production

Update `frontend/src/main.js`:
- Change `const API_URL = 'http://localhost:3001/api/auth';`
- To: `const API_URL = 'https://YOUR-BACKEND-URL.onrender.com/api/auth';`

Commit and push:
```bash
git add .
git commit -m "Update API URL for production"
git push
```

## Step 4: Deploy Frontend on Vercel

1. Go to https://vercel.com (sign up/login with GitHub)
2. Click "Add New" → "Project"
3. Import your GitHub repository: `Arjun421/CapstoneSem3`
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click "Deploy"
6. Wait 2-3 minutes
7. Your app is live! 🎉
8. Copy your frontend URL (e.g., https://capstone-sem3.vercel.app)

## Step 5: Update CORS (Important!)

Update `backend/server.js` to allow your frontend domain:
```javascript
app.use(cors({
  origin: 'https://your-frontend-url.onrender.com'
}));
```

Commit and push - Render will auto-redeploy.

## Free Tier Notes
- Backend may sleep after 15 min of inactivity (takes 30s to wake up)
- 750 hours/month free
- Perfect for testing and sharing with friends!

## Your Live URLs
- Frontend: https://your-frontend-name.onrender.com
- Backend: https://your-backend-name.onrender.com
