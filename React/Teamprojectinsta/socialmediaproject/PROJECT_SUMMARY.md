# Vango - Social Media Platform

## Project Overview
Vango is a fully functional React-based social media platform with user authentication, landing page with reels, and interactive like functionality. The project features an elegant blue theme throughout the application.

## Features Implemented

### ✅ 1. Authentication System
- **Signup Page**
  - Form validation (username, email, password, confirm password)
  - Password matching verification
  - Duplicate user prevention
  - Success/error messages with animations
  - Local storage integration for user data
  - Auto-redirect to login after successful signup

- **Login Page**
  - Email and password validation
  - Secure authentication against stored user data
  - Error handling for invalid credentials
  - Success message with redirect to landing page
  - Protected routes (cannot access landing without login)

### ✅ 2. Local Storage Implementation
- User data stored in localStorage under 'users' key
- Current logged-in user stored in 'currentUser' key
- Automatic session management
- Data persistence across page reloads

### ✅ 3. Landing Page - Social Media Feed
- Responsive grid layout with reel cards
- 6 sample reels with diverse content categories:
  - Travel content
  - Creative/Art content
  - Fitness content
  - Food/Lifestyle content
  - Music content
  - Nature content

### ✅ 4. Reel Card Features
Each reel card displays:
- Author avatar with emoji representation
- Author name and video title
- Video placeholder (responsive 3:4 aspect ratio)
- View count badge
- Comment count
- Watch count
- Like button with dynamic state

### ✅ 5. Interactive Like Functionality
- Click to like/unlike videos
- Like count increases when you like
- Button color changes from cyan to red when liked
- Smooth animations on like action
- Emoji changes from 🤍 to ❤️ based on state
- Persistent like state within the session

### ✅ 6. Header Navigation
- Vango logo with gradient styling
- Welcome message showing current username
- Logout button
- Sticky header that remains visible while scrolling

### ✅ 7. Styling & Theme
- **Color Palette (Elegant Blue):**
  - Primary Blue: #1e3c72
  - Secondary Blue: #2a5298
  - Light Blue: #6dd5ed (accents)
  - Cyan/Accent: #00d4ff (highlights)
  - Dark Background: #0f1419

- **Design Features:**
  - Smooth gradient backgrounds
  - Hover effects on cards (lift animation)
  - Responsive grid layout
  - Smooth transitions and animations
  - Focus states on inputs
  - Error state styling
  - Success message animations

### ✅ 8. Responsive Design
- Mobile-first approach
- Breakpoints for tablets and large screens
- Fluid grid layout
- Touch-friendly buttons and inputs

## File Structure

```
src/
├── pages/
│   ├── Login.jsx           # Login page component
│   ├── Signup.jsx          # Signup page component
│   └── Landing.jsx         # Main reel feed page
├── components/
│   └── Header.jsx          # Header with navigation
├── styles/
│   ├── Auth.css            # Authentication pages styling
│   ├── Header.css          # Header styling
│   ├── Landing.css         # Landing page styling
├── App.jsx                 # Main app router
├── main.jsx                # Entry point
├── index.css               # Global styles
└── App.css                 # App-level styling
```

## How to Use

### 1. Start the Development Server
```bash
npm run dev
```
The app will be available at `http://localhost:5173` (or next available port)

### 2. Create an Account
- Click "Sign up here" on the login page
- Fill in username, email, password
- Submit to create account
- Will automatically redirect to login

### 3. Login
- Enter your email and password
- Click Login button
- You'll be redirected to the landing page

### 4. Browse Reels
- View a grid of video reels
- Each reel shows author info and content
- Scroll to see all reels

### 5. Like Videos
- Click the like button on any reel
- Button will turn red and show ❤️
- Like count will increase by 1
- Click again to unlike

### 6. Logout
- Click the Logout button in the header
- You'll be redirected to login page
- Session data is cleared

## Technology Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **State Management:** React Hooks (useState)
- **Storage:** Browser localStorage
- **Styling:** CSS with CSS variables and gradients
- **Responsive Design:** CSS Grid and Flexbox

## Validation Rules

### Signup
- Username: Minimum 3 characters
- Email: Valid email format
- Password: Minimum 6 characters
- Confirm Password: Must match password

### Login
- Email and password both required
- Must match stored user credentials

## Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Future Enhancement Ideas

1. **Real Video Integration**
   - Replace placeholder images with actual video playback
   - Add video upload functionality

2. **User Profile Pages**
   - View user profiles
   - Follow/unfollow users
   - User statistics

3. **Comments Section**
   - Add comments to videos
   - Reply to comments
   - Comment moderation

4. **Search & Filter**
   - Search videos by title or author
   - Filter by category
   - Trending section

5. **Database Integration**
   - Move from localStorage to backend database
   - User authentication with JWT tokens
   - Cloud storage for videos

6. **Social Features**
   - Share videos
   - Create collections/playlists
   - Direct messaging
   - Notifications

## Testing Credentials

Use these to test the app after signup:
- **Email:** john@example.com
- **Password:** password123

## Notes

- All data is stored in browser localStorage (not persistent across browser clear)
- This is a demonstration/prototype version
- For production, implement proper backend authentication
- Video placeholders use external placeholder service

---

**Project Status:** ✅ Complete and Fully Functional
