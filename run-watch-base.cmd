@ECHO OFF

SET DOTNET_USE_POLLING_FILE_WATCHER=1
SET DOTNET_WATCH=1
SET DOTNET_WATCH_ITERATION=1

::dotnet watch run debug
dotnet watch run
