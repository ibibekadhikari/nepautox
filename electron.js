// electron.js
const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 425,
    minWidth: 425,
    maxWidth: 425,
    maxHeight: 700,
    minHeight: 700,
    icon: path.join(__dirname, '/public/favicon.ico'),
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,

    },
  });

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  mainWindow.on('closed', () => {
    mainWindow = null;
    app.quit();
  });
  //mainWindow.webContents.openDevTools();
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
app.on('before-quit', () => {
  // Perform any cleanup or save data if needed
  console.log('Application is quitting');
});
