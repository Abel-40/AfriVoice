# Afrivoice Prototype - Vercel Deployment

This project is now configured for deployment to Vercel's free tier.

## Deployment Instructions

### 1. Deploy to Vercel

1. **Install Vercel CLI** (optional but recommended):
   ```bash
   npm install -g vercel
   ```

2. **Deploy using Vercel CLI**:
   ```bash
   vercel
   ```
   Follow the prompts to link your project to Vercel.

3. **Or deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Connect your GitHub repository
   - Import this project
   - Vercel will automatically detect the configuration and deploy

### 2. Configuration Details

The project is configured with:
- **Framework**: Static site (React + Vite)
- **Build Command**: `pnpm run build`
- **Output Directory**: `dist/public`
- **Install Command**: `pnpm install`

### 3. Important Notes

- **Server-side functionality**: The Express server has been removed for Vercel compatibility. All functionality is client-side.
- **Routing**: Client-side routing is handled by the Vercel configuration
- **Environment Variables**: Add any required environment variables in the Vercel dashboard

### 4. Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

### 5. Custom Domain (Optional)

After deployment, you can add a custom domain through the Vercel dashboard:
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

The application will be available at `https://your-project-name.vercel.app` after deployment.