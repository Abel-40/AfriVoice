@echo off
REM AfriVoice - Production Start Script (Windows)
REM This script starts the AfriVoice prototype in production mode

echo.
echo 🚀 Starting AfriVoice Prototype (Production Mode)...
echo.
echo Building Docker image and starting container...
echo.

docker-compose up

echo.
echo ✅ AfriVoice is running!
echo 📱 Open your browser and go to: http://localhost:3000
echo.
echo To stop the application, press Ctrl+C
pause
