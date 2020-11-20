@echo off

::https://docs.microsoft.com/en-us/dotnet/core/deploying/ready-to-run
dotnet publish -c Release -r win-x64 -p:PublishReadyToRun=true

:: https://docs.microsoft.com/en-us/dotnet/core/deploying/single-file
::dotnet publish -r win-x64 -p:PublishSingleFile=true --self-contained true
