if (!([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) { Start-Process powershell.exe "-NoProfile -ExecutionPolicy Bypass -File `"$PSCommandPath`"" -Verb RunAs; exit }

netsh interface portproxy add v4tov4 listenport=19000 listenaddress=0.0.0.0 `
    connectport=19000 connectaddress=$($(wsl hostname -I).Trim());

netsh interface portproxy add v4tov4 listenport=19001 listenaddress=0.0.0.0 `
    connectport=19001 connectaddress=$($(wsl hostname -I).Trim());
	
echo proxyBounded!

pause