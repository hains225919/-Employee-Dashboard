@echo off
set "PATH=%LOCALAPPDATA%\Programs\Git\cmd;%LOCALAPPDATA%\Programs\Git\gcm;%PATH%"
echo ==============================================
echo Pushing Employee Dashboard to GitHub...
echo ==============================================
git push -u origin main
echo.
pause
