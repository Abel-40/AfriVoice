#!/bin/bash

# AfriVoice - Development Start Script
# This script starts the AfriVoice prototype in development mode with hot reload

echo "🔥 Starting AfriVoice Prototype (Development Mode)..."
echo ""
echo "Building Docker image and starting container with hot reload..."
echo ""

docker-compose -f docker-compose.dev.yml up

echo ""
echo "✅ AfriVoice is running in development mode!"
echo "📱 Open your browser and go to: http://localhost:3000"
echo "🔄 Hot reload is enabled - your changes will appear automatically"
echo ""
echo "To stop the application, press Ctrl+C"
