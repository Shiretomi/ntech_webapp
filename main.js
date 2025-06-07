const { app, BrowserWindow, ipcMain } = require('electron');
const path = require("node:path");

let win;

const openMainWindow = () => {
	const win = new BrowserWindow({
		width: 1300,
		height: 800,
		autoHideMenuBar: true,
		resizable: false,
		webPreferences: {
			preload: path.join(__dirname, "static/preloads/mainPreload.js")
		}
	})

	win.loadFile("static/pages/mainPage.html");
}
app.whenReady().then(() => {
	openMainWindow()

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	  })
  	

}).catch((res) => {
	console.log(res);
})

ipcMain.on('switch-page', (event, pageName) => {
	const win = BrowserWindow.fromWebContents(event.sender)
	if (!win) return;
	const filePath = path.join(__dirname, 'static/pages', pageName + '.html');
	win.loadFile(filePath);
  });