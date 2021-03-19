const { app, BrowserWindow } = require('electron');
const path = require('path');

if (require('electron-squirrel-startup')) { 
  app.quit();
}

const createWindow = () => {

  const mainWindow = new BrowserWindow({
    width: 720,
    height: 620,
    resizable: false
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.setMenuBarVisibility(false);

};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {

  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
