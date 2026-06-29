@echo off
echo Starting ERP Application...
echo.

echo ========================================
echo STEP 1: Starting Backend (Spring Boot)
echo ========================================
cd backend
echo Make sure you have Java 17+ and Maven installed
echo.
echo To install Maven: https://maven.apache.org/download.cgi
echo To install Java: https://adoptium.net/temurin/releases/?version=17
echo.
echo If you have Maven installed, run:
echo   mvn spring-boot:run
echo.
echo Backend will start on: http://localhost:8080
echo.
pause

echo ========================================
echo STEP 2: Starting Frontend (React)
echo ========================================
cd ..
echo Starting frontend...
npm run dev
echo.
echo Frontend will start on: http://localhost:5173
echo.
pause
