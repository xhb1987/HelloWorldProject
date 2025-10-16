#!/bin/bash

# React Native Project Post-Upgrade Setup Script
# Run this script after the upgrade to set up your development environment

set -e

echo "🚀 Setting up React Native 0.76 project..."
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo -e "${BLUE}📦 Installing Node dependencies...${NC}"
    npm install
    echo -e "${GREEN}✓ Dependencies installed${NC}"
    echo ""
else
    echo -e "${GREEN}✓ Node modules already installed${NC}"
    echo ""
fi

# iOS setup
if [ -d "ios" ]; then
    echo -e "${BLUE}🍎 Setting up iOS...${NC}"
    cd ios
    
    # Check if CocoaPods is installed
    if ! command -v pod &> /dev/null; then
        echo -e "${YELLOW}⚠️  CocoaPods not found. Installing...${NC}"
        sudo gem install cocoapods
    fi
    
    # Install pods
    echo "Installing CocoaPods dependencies..."
    pod install
    cd ..
    echo -e "${GREEN}✓ iOS setup complete${NC}"
    echo ""
else
    echo -e "${YELLOW}⚠️  iOS directory not found${NC}"
    echo ""
fi

# Clean up caches
echo -e "${BLUE}🧹 Cleaning caches...${NC}"

# Clean watchman
if command -v watchman &> /dev/null; then
    watchman watch-del-all
    echo -e "${GREEN}✓ Watchman cache cleared${NC}"
fi

# Clean Metro cache
rm -rf $TMPDIR/react-*
rm -rf $TMPDIR/metro-*
echo -e "${GREEN}✓ Metro cache cleared${NC}"

# Clean Android build (optional)
if [ -d "android" ]; then
    echo -e "${BLUE}🤖 Cleaning Android build...${NC}"
    cd android
    ./gradlew clean > /dev/null 2>&1 || true
    cd ..
    echo -e "${GREEN}✓ Android cleaned${NC}"
fi

echo ""
echo -e "${GREEN}✅ Setup complete!${NC}"
echo ""
echo -e "${BLUE}Next steps:${NC}"
echo "1. Read README-UPGRADE.md for important information"
echo "2. Read NAVIGATION_MIGRATION.md to migrate navigation code"
echo "3. Start Metro bundler: npm start"
echo "4. Run on Android: npm run android"
echo "5. Run on iOS: npm run ios"
echo ""
echo -e "${YELLOW}⚠️  IMPORTANT: You need to migrate navigation code before the app will run!${NC}"
echo "See NAVIGATION_MIGRATION.md for details."
echo ""
