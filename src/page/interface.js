const electron = require("electron");
const ipc = electron.ipcRenderer;
const {dialog} = require('electron').remote;

function setClipboard(clipboardData){
  // send new event
  ipc.send("clipboardSet", clipboardData);
}

var HANDLER = function(){ console.log("Hmm, I'm all alone in my lonely code."); };
ipc.on('hotkey', function(){
  HANDLER();
});

const smalltalk = require('smalltalk');
window.prompt = function(Title = "", Message = "", Value = "", Callback) {
  return smalltalk.prompt(Title, Message, Value)
    .then((value) => {
      Callback(value);
      return value;
	})
  .catch(()=>{
    Callback(false);
    return false;
  });
};



// Used for Debug, Do not Remove
console.log(`%c JS Interface %c Loaded %c`, "background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff", "background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff", "background:transparent")
