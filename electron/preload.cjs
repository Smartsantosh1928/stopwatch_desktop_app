const { ipcRenderer,contextBridge } = require('electron')

// const myAPI = {
//     greet: () => {
//         console.log("hello sandy");
//     }
// };

// contextBridge.exposeInMainWorld('myAPI', myAPI);
contextBridge.exposeInMainWorld('ipcRenderer',ipcRenderer);
