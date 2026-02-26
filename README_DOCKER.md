# AfriVoice Prototype - Docker Quick Start Guide

Welcome! This guide will help you run the AfriVoice prototype using Docker in just a few simple steps.

## 🎯 What You Need

1. **Docker Desktop** - [Download here](https://www.docker.com/products/docker-desktop)
2. **That's it!** No Node.js, npm, or coding knowledge required.

## 🚀 Quick Start (Choose One)

### Option 1: Using Scripts (Easiest)

#### On Mac/Linux:
```bash
./start.sh
```

#### On Windows:
```bash
start.bat
```

### Option 2: Using Docker Compose Directly

#### Production Mode:
```bash
docker-compose up
```

#### Development Mode (with live reload):
```bash
docker-compose -f docker-compose.dev.yml up
```

## 📱 Access the Application

Once running, open your browser and go to:

```
http://localhost:3000
```

You should see the AfriVoice landing page!

## 🎮 Exploring the Prototype

### Landing Page
- Hero section with "Learn by Talking to AI"
- Value proposition cards
- How it works section
- Call-to-action buttons

### Sign Up / Sign In
- Click "Get Started" or "Sign In" button
- Try the authentication pages

### Dashboard
- View learning companions
- See learning progress
- Access session history

### Voice Session
- Click on a companion card
- Interact with the large microphone button
- View the transcript panel

### Build Companion
- Create your own AI tutor
- See live preview as you customize
- Choose subject, voice type, and style

## 🛑 Stopping the Application

### Using Script:
#### Mac/Linux:
```bash
./stop.sh
```

#### Windows:
```bash
stop.bat
```

### Using Keyboard:
Press `Ctrl+C` in your terminal

## 🔄 Development Mode (For Editing Code)

If you want to edit the code and see changes instantly:

#### Mac/Linux:
```bash
./start-dev.sh
```

#### Windows:
```bash
start-dev.bat
```

**Hot reload is enabled** - any changes you make to files in the `client/src/` folder will automatically refresh in your browser!

## 📂 Project Structure

```
afrivoice-prototype/
├── client/                 # Frontend code (React)
│   └── src/
│       ├── pages/         # All page components
│       ├── components/    # Reusable UI components
│       └── index.css      # Styling
├── server/                # Backend (Express)
├── Dockerfile             # Production setup
├── Dockerfile.dev         # Development setup
├── docker-compose.yml     # Production config
├── docker-compose.dev.yml # Development config
├── start.sh              # Start script (Mac/Linux)
├── start.bat             # Start script (Windows)
└── DOCKER_SETUP.md       # Detailed documentation
```

## ❓ Troubleshooting

### "Port 3000 is already in use"

Edit `docker-compose.yml` and change:
```yaml
ports:
  - "3001:3000"  # Use 3001 instead
```

Then access at `http://localhost:3001`

### "Docker command not found"

Make sure Docker Desktop is installed and running:
- [Download Docker Desktop](https://www.docker.com/products/docker-desktop)
- Start the Docker Desktop application

### "Container won't start"

Check the logs:
```bash
docker-compose logs
```

### "Changes aren't showing up"

Make sure you're using development mode:
```bash
docker-compose -f docker-compose.dev.yml up
```

## 📚 Pages in the Prototype

| Page | URL | Description |
|------|-----|-------------|
| Landing | `/` | Homepage with hero and value props |
| Sign In | `/signin` | User login page |
| Sign Up | `/signup` | User registration page |
| Dashboard | `/dashboard` | Main app with companions and progress |
| Voice Session | `/voice-session` | Interactive voice learning interface |
| Session Summary | `/session-summary` | Results and achievements |
| Build Companion | `/build-companion` | Create custom AI tutor |

## 🎨 Design Features

- **Color Scheme**: Teal (primary), Orange (secondary), Light backgrounds
- **Typography**: Poppins (headings) + Inter (body)
- **Mobile-First**: Responsive design for all devices
- **Accessible**: High contrast, large touch targets
- **Interactive**: Smooth animations and transitions

## 💡 Tips

1. **Explore All Pages**: Click through the navigation to see the full user flow
2. **Try the Microphone Button**: On the voice session page, click the large microphone
3. **Customize Companions**: Build your own AI tutor with different subjects and styles
4. **Check Progress**: View learning stats and session history on the dashboard

## 🔗 Useful Links

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Guide](https://docs.docker.com/compose/)
- [React Documentation](https://react.dev/)

## 📞 Need Help?

1. Check `DOCKER_SETUP.md` for detailed troubleshooting
2. Review Docker logs: `docker-compose logs`
3. Restart Docker: Stop and start the application again
4. Rebuild the image: `docker-compose build --no-cache`

## ✨ Next Steps

1. **Explore the prototype** - Click through all pages
2. **Edit the code** - Use development mode to make changes
3. **Customize colors/fonts** - Edit `client/src/index.css`
4. **Add new pages** - Create new files in `client/src/pages/`

---

**Enjoy exploring AfriVoice! 🎉**

For more detailed information, see `DOCKER_SETUP.md`
