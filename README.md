# Afrivoice Prototype - Deploy to Vercel

This project is configured for easy deployment to Vercel's free tier.

## Deploy to Vercel

Click the button below to deploy directly to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-repo/your-project-name)

## Manual Deployment Steps

1. Go to [vercel.com](https://vercel.com/) and sign up/in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect the settings and deploy
5. Your site will be live at `https://your-project-name.vercel.app`

## Configuration

The project is already configured for Vercel deployment:
- Uses static site generation
- Handles client-side routing correctly
- No server dependencies required
- All UI elements preserved

## Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build
```

## Notes

- The application runs as a static site with client-side routing
- All UI functionality remains intact
- No server-side features are used (for free tier compatibility)
- The build output is stored in `dist/public`