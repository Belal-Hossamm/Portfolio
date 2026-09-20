@echo off
echo ===================================================
echo   Launching Belal Hossam's Portfolio Website...
echo ===================================================
timeout /t 1 >nul
start http://localhost:5173
npm run dev
pause
