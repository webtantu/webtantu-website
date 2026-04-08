#!/bin/bash
echo "=============================================="
echo "WebTantu Project Setup - Automated Installer"
echo "=============================================="

echo ""
echo "Installing Node.js dependencies (this might take a minute)..."
npm install

echo ""
echo "Dependencies installed successfully!"
echo "Starting the WebTantu Vite development server..."
echo ""

npm run dev
