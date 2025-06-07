const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('tabs', {
  switchPage: (pageName) => ipcRenderer.send('switch-page', pageName),
});