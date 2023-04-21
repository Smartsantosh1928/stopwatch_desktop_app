const { app, BrowserWindow,ipcMain } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 400,
    height: 590,
    transparent: true,
    frame: false,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    icon: path.join(app.getAppPath(), 'dist/icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: true,
      devTools: false,
    }
  })

  win.loadFile(path.join(app.getAppPath(), 'dist/index.html'))
  // win.loadURL('http://localhost:5173')

  ipcMain.on('close-window', () => {
    win.close();
  });

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
