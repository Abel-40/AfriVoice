#!/bin/bash

# AfriVoice - Stop Script
# This script stops the AfriVoice prototype containers

echo "🛑 Stopping AfriVoice Prototype..."
echo ""

docker-compose down

echo ""
echo "✅ AfriVoice has been stopped"
echo "💾 All containers and networks have been cleaned up"
