@echo off
setlocal

REM README.cmd - repository helper for Learn Playwright Batch 2x

:START
if "%~1"=="" goto HELP
if /I "%~1"=="help" goto HELP
if /I "%~1"=="open" goto OPEN
if /I "%~1"=="verify" goto VERIFY
if /I "%~1"=="run" goto RUN
if /I "%~1"=="README" goto OPEN

echo Invalid command: %~1
echo.
goto HELP

:OPEN
echo Opening README.md...
start "" "%~dp0README.md"
goto END

:VERIFY
echo Verifying Node.js environment and setup...
call :CHECK_NODE
if errorlevel 1 exit /b 1
node "%~dp0Chapter_01_Basics\03_JS_Verify_Setup.js"
goto END

:RUN
echo Running first JS example...
call :CHECK_NODE
if errorlevel 1 exit /b 1
node "%~dp0Chapter_01_Basics\01_Basics.js"
goto END

:CHECK_NODE
where node >nul 2>&1
if errorlevel 1 (
  echo Node.js was not found on PATH. Please install Node.js 18+ and try again.
  exit /b 1
)
exit /b 0

:HELP
echo Usage: README.cmd ^<command^>
echo.
echo Commands:
echo   help      Show this help message
echo   open      Open README.md in the default editor
echo   verify    Run Chapter_01_Basics\03_JS_Verify_Setup.js
echo   run       Run Chapter_01_Basics\01_Basics.js
echo.
echo Examples:
echo   README.cmd open
echo   README.cmd verify
echo   README.cmd run
goto END

:END
endlocal
