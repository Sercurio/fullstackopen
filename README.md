# fullstackopen

# Useful libraries

# Problems encountred

## React auto refresh with wsl2

### Solution n°1

We need to create a .env file at the root of the projet and add this two environnement variable.

```
CHOKIDAR_USEPOLLING=true
FAST_REFRESH=false
```

### Solution n°2

Put the project inside the wsl directory that can be accessible with \\wsl$ variable inside Windows environement.

## Cypress launch with Windows WSL

Cypress doesn't launch and don't give us any errors.
We need to first download an XServer for windows, for example : https://github.com/ArcticaProject/vcxsrv and configure the shortcut target with -ac arguments.

```
C:/{pathtoexecutable}/xLaunch.exe -ac
```

When Xlaunch is launched, we need to tick the "Disable access control" box.

Next we need to export the DISPLAY environement variable with the wsl2 ip thanks to this script.

```
# set DISPLAY variable to the IP automatically assigned to WSL2
export DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2; exit;}'):0.0
```

After that we start the dbus service with this command

```
# Automatically start D-Bus to allow communication with Cypress GUI app
sudo /etc/init.d/dbus start &> /dev/null
```
