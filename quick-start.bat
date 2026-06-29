@echo off
echo ========================================
echo   ERP Project - Quick Start Guide
echo ========================================
echo.
echo System Requirements Check:
echo.

REM Check Node.js
node --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [✓] Node.js is installed
    node --version
) else (
    echo [✗] Node.js is NOT installed
    echo Please install Node.js from https://nodejs.org/
)

REM Check npm
npm --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [✓] npm is installed
    npm --version
) else (
    echo [✗] npm is NOT installed
)

REM Check Java
java -version >nul 2>&1
if %errorlevel% equ 0 (
    echo [✓] Java is installed
    java -version 2>&1 | findstr "version"
) else (
    echo [✗] Java is NOT installed
    echo Please install Java 17+ from https://adoptium.net/
)

REM Check Maven
mvn --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [✓] Maven is installed
    mvn --version | findstr "Apache Maven"
) else (
    echo [✗] Maven is NOT installed
    echo.
    echo ========================================
    echo   OPTION 1: Run Frontend Only
    echo ========================================
    echo This option requires NO additional installation
    echo The frontend will run with mock data
    echo.
    set /p choice="Run frontend now? (y/n): "
    if /i "%choice%"=="y" (
        echo.
        echo Starting Frontend...
        echo.
        cd /d "%~dp0"
        npm run dev
    ) else (
        echo.
        echo ========================================
        echo   OPTION 2: Install Maven for Full Stack
        echo ========================================
        echo.
        echo To install Maven, choose one method:
        echo.
        echo Method A: Chocolatey (Recommended)
        echo   1. Install Chocolatey:
        echo      Set-ExecutionPolicy Bypass -Scope Process -Force
        echo      iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
        echo   2. Install Maven:
        echo      choco install maven -y
        echo.
        echo Method B: Manual Installation
        echo   1. Download from: https://maven.apache.org/download.cgi
        echo   2. Extract to: C:\Program Files\Apache\maven
        echo   3. Add to PATH: C:\Program Files\Apache\maven\bin
        echo.
        echo Method C: Scoop
        echo   1. Install Scoop:
        echo      Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
        echo      Invoke-RestObject -Uri https://get.scoop.sh | Invoke-Expression
        echo   2. Install Maven:
        echo      scoop install maven
        echo.
        echo After installing Maven, run this script again.
        echo.
        echo ========================================
        echo   OPTION 3: Frontend Only (No Backend)
        echo ========================================
        echo.
        set /p choice="Run frontend only now? (y/n): "
        if /i "%choice%"=="y" (
            echo.
            echo Starting Frontend...
            echo.
            cd /d "%~dp0"
            npm run dev
        )
    )
    goto end
)

echo.
echo ========================================
echo   All Requirements Met!
echo ========================================
echo.
echo Choose an option:
echo.
echo 1. Start Backend Only
echo 2. Start Frontend Only  
echo 3. Start Both (Full Stack)
echo 4. Exit
echo.
set /p choice="Enter your choice (1-4): "

if "%choice%"=="1" (
    echo.
    echo Starting Backend...
    echo.
    cd /d "%~dp0backend"
    mvn spring-boot:run
) else if "%choice%"=="2" (
    echo.
    echo Starting Frontend...
    echo.
    cd /d "%~dp0"
    npm run dev
) else if "%choice%"=="3" (
    echo.
    echo Starting Backend...
    echo.
    start "ERP Backend" cmd /k "cd /d %~dp0backend && mvn spring-boot:run"
    echo.
    echo Backend starting in new window...
    echo Waiting 10 seconds for backend to start...
    timeout /t 10 /nobreak
    echo.
    echo Starting Frontend...
    echo.
    cd /d "%~dp0"
    npm run dev
) else (
    echo.
    echo Exiting...
)

:end
echo.
echo ========================================
echo   Quick Start Complete!
echo ========================================
echo.
echo Access URLs:
echo - Frontend: http://localhost:5173
echo - Backend API: http://localhost:8080/api
echo - H2 Console: http://localhost:8080/h2-console
echo.
echo For detailed instructions, see: RUN_COMPLETE_PROJECT.md
echo.
pause
