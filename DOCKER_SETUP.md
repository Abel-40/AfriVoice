# AfriVoice Docker Setup Guide

This guide will help you run the AfriVoice prototype using Docker and Docker Compose. No need to install Node.js, npm, or pnpm locally—Docker handles everything!

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Docker**: [Download Docker Desktop](https://www.docker.com/products/docker-desktop)
- **Docker Compose**: Usually included with Docker Desktop

### Verify Installation

Open your terminal and run:

```bash
docker --version
docker-compose --version
```

You should see version information for both.

---

## Quick Start (Production Mode)

Run the AfriVoice prototype in production mode with a single command:

```bash
docker-compose up
```

The application will be available at: **http://localhost:3000**

### What Happens

1. Docker builds the application image
2. Dependencies are installed
3. The application is compiled
4. The server starts on port 3000

### Stop the Application

Press `Ctrl+C` in your terminal, or run:

```bash
docker-compose down
```

---

## Development Mode (With Hot Reload)

For development with live code reloading, use the development Docker Compose file:

```bash
docker-compose -f docker-compose.dev.yml up
```

The application will be available at: **http://localhost:3000**

### Features

- **Hot Reload**: Changes to your code automatically reload in the browser
- **Live Development**: Edit files locally, see changes instantly
- **Full Dependencies**: All Node.js packages are available inside the container

### Stop Development Server

Press `Ctrl+C` in your terminal, or run:

```bash
docker-compose -f docker-compose.dev.yml down
```

---

## Common Commands

### View Running Containers

```bash
docker ps
```

### View Container Logs

```bash
docker-compose logs -f
```

### Rebuild the Image

If you update dependencies (package.json), rebuild:

```bash
docker-compose build --no-cache
```

### Clean Up

Remove all containers, networks, and images:

```bash
docker-compose down -v
docker image prune -a
```

---

## Troubleshooting

### Port 3000 Already in Use

If port 3000 is already in use, you can change it in `docker-compose.yml`:

```yaml
ports:
  - "3001:3000"  # Access at http://localhost:3001
```

### Container Won't Start

Check the logs:

```bash
docker-compose logs
```

### Permission Denied Error

On Linux, you may need to run Docker commands with `sudo`:

```bash
sudo docker-compose up
```

Or add your user to the docker group:

```bash
sudo usermod -aG docker $USER
newgrp docker
```

### Out of Disk Space

Clean up unused Docker resources:

```bash
docker system prune -a
```

---

## Project Structure

```
afrivoice-prototype/
├── Dockerfile              # Production image
├── Dockerfile.dev          # Development image with hot reload
├── docker-compose.yml      # Production setup
├── docker-compose.dev.yml  # Development setup
├── .dockerignore           # Files to exclude from Docker build
├── client/                 # Frontend React code
├── server/                 # Backend server code
├── package.json            # Dependencies
└── DOCKER_SETUP.md         # This file
```

---

## Environment Variables

### Production

The production container runs with:
- `NODE_ENV=production`

### Development

The development container runs with:
- `NODE_ENV=development`

To add custom environment variables, edit the `environment` section in the respective `docker-compose.yml` file.

---

## Building for Deployment

To build a production-ready image:

```bash
docker build -t afrivoice:latest .
```

To run the built image:

```bash
docker run -p 3000:3000 afrivoice:latest
```

---

## Performance Tips

1. **Use .dockerignore**: Already configured to exclude unnecessary files
2. **Multi-stage Build**: The Dockerfile uses multi-stage builds to keep image size small
3. **Layer Caching**: Docker caches layers, so rebuilds are faster
4. **Development vs Production**: Use the appropriate compose file for your workflow

---

## Next Steps

1. **Customize**: Edit files in the `client/src/` directory
2. **Test**: Open http://localhost:3000 in your browser
3. **Deploy**: Use the production Dockerfile for cloud deployment

---

## Support

For issues or questions:

1. Check the logs: `docker-compose logs`
2. Verify Docker is running: `docker ps`
3. Rebuild the image: `docker-compose build --no-cache`
4. Review the [Docker documentation](https://docs.docker.com/)

---

**Happy coding! 🚀**
