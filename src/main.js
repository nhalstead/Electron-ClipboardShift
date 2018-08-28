const {app, BrowserWindow, Menu, ipcMain, globalShortcut} = require('electron');
const path = require('path');
const url = require('url');
const clipboardy = require('clipboardy');
var fs = require('fs');

var win;

ipcMain.on('clipboardSet', function(event, args){
  clipboardy.writeSync(args);
});

//Disable all of the Default Menus
	app.on('browser-window-created',function(e,window) {
	  window.setMenu(null);
	});

function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({
  		width: 500, height: 600,
  		backgroundColor: '#000000',
  		resizable: false,
  		movable: true,
  		minimizable: true,
  		maximizable: false,
  		closable: true,
  		alwaysOnTop: true
  	});

    // and load the index.html of the app.
    win.loadURL(url.format({
      pathname: path.join(__dirname, '/page/index.html'),
      protocol: 'file:',
      slashes: true
    }));

    // Emitted when the window is closed.
    win.on('closed', () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      win = null
    });

    //win.webContents.openDevTools();
  }

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  app.on('ready', function(){
  	createWindow();

    // Add Global Event for CTRL+ALT+V
    globalShortcut.register('Ctrl+Alt+v', () => {
      win.webContents.send('hotkey');
    });

  });

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
