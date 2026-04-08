@echo off
echo ==============================================
echo WebTantu Project Setup - Automated Installer
echo ==============================================

echo.
echo Installing Node.js dependencies (this might take a minute)...
call npm install

echo.
echo Dependencies installed successfully!
echo Starting the WebTantu Vite development server...
echo.

call npm run dev
pause
