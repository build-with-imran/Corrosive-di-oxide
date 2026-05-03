# Quick Start Guide - Vango

## Installation & Setup

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

The app will open at `http://localhost:5173` (or next available port)

## Quick Test Flow

### 1. **Sign Up (First Time)**
- Click "Sign up here"
- Enter details:
  - Username: `john_doe`
  - Email: `john@example.com`
  - Password: `password123`
  - Confirm Password: `password123`
- Click "Sign Up"
- Auto-redirects to login

### 2. **Login**
- Email: `john@example.com`
- Password: `password123`
- Click "Login"
- Redirects to landing page

### 3. **Explore Reels**
- Scroll through the feed
- See 6 different reels with various content

### 4. **Like Videos**
- Click heart button on any reel
- Button turns red (❤️) and count increases
- Click again to unlike (turns cyan 🤍)

### 5. **Logout**
- Click "Logout" button in top right
- Returns to login page

## Project Structure

```
socialmediaproject/
├── src/
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── Landing.jsx
│   ├── components/
│   │   └── Header.jsx
│   ├── styles/
│   │   ├── Auth.css
│   │   ├── Header.css
│   │   └── Landing.css
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## Key Features

✅ **Authentication**
- Signup with validation
- Login with credential checking
- Session management via localStorage

✅ **Social Media Feed**
- Grid layout with 6 reels
- Author information with emojis
- Video placeholders
- View count, comment count

✅ **Interactive Likes**
- Click to like/unlike
- Dynamic button colors
- Animated transitions
- Like count updates

✅ **Elegant UI**
- Blue gradient theme
- Smooth animations
- Responsive design
- Professional styling

## Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm lint
```

## Customization

### Change Theme Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary-blue: #1e3c72;        /* Main blue */
  --secondary-blue: #2a5298;      /* Secondary blue */
  --light-blue: #6dd5ed;          /* Light accents */
  --accent-blue: #00d4ff;         /* Bright cyan */
  /* ... other colors ... */
}
```

### Add More Reels
Edit `src/pages/Landing.jsx`, add objects to the `useState` array:
```javascript
{
  id: 7,
  author: 'New Author',
  avatar: '🎬',
  title: 'Your Title',
  videoUrl: 'image-url',
  likes: 100,
  liked: false,
  views: 500,
  comments: 20
}
```

### Modify Validation Rules
Edit validation functions in:
- `src/pages/Signup.jsx` - `validateForm()`
- `src/pages/Login.jsx` - Form submission logic

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

### Local Storage Not Working
- Use browser DevTools (F12)
- Check Application → Local Storage
- Clear if corrupted: `localStorage.clear()`

### Styling Not Applied
- Hard refresh browser (Ctrl+Shift+R)
- Clear browser cache
- Rebuild: `npm run build`

## Browser Console Tips

### Check Stored Users
```javascript
console.log(JSON.parse(localStorage.getItem('users')))
```

### Check Current User
```javascript
console.log(JSON.parse(localStorage.getItem('currentUser')))
```

### Clear All Data
```javascript
localStorage.clear()
```

## Performance Tips

1. **Large Datasets:** Current implementation shows 6 reels. For production with 100+ reels:
   - Implement pagination
   - Add infinite scroll
   - Use React virtualization libraries

2. **Images:** Replace placeholders with optimized images or lazy loading

3. **Storage:** For large user bases, migrate from localStorage to backend database

## Security Considerations

⚠️ **Current Implementation:**
- Uses localStorage (not secure for sensitive data)
- Passwords stored as plain text
- No encryption or hashing

✅ **Production Recommendations:**
- Use JWT authentication
- Hash passwords with bcrypt
- Implement HTTPS
- Use secure HTTP-only cookies
- Add CORS protection
- Validate on backend

## Support & Documentation

- React Docs: https://react.dev
- Vite Docs: https://vitejs.dev
- React Router: https://reactrouter.com
- CSS Variables: https://developer.mozilla.org/en-US/docs/Web/CSS/--*

---

**Enjoy using Vango! 🚀**
