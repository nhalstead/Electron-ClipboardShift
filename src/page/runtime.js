var group = null;

document.addEventListener("DOMContentLoaded", function(event) {
  // Define the Needed document Depends.
  group = document.getElementById("group");

  HANDLER = function(){
    next();
  };

});


function next(){
    if(group.firstElementChild == null){
      return false;
    }

    var t = group.firstElementChild.innerText;
    setClipboard(t); // Save to Current User's Clipboard
    group.firstElementChild.remove();
}


function addElement(){
  prompt("", "New Element", "", function(value){
    if(value == ""){
      return false;
    }
    add(value);
  });
}

function add(value){
  var t = document.createElement("button");
  t.type = "button";
  t.className = "list-group-item";
  t.innerText = value;
  group.append(t);
  console.log("Added Element to the List");
}

function removeNext(){
  group.firstElementChild.remove();
}

function removeAll(){
  for(var i = 0; i < group.children.length; ++i){
    group.children[i].remove(); // Remove ELement
  }
}

function promptJSON(){
  prompt("", "JSON List", "", function(value){
    if(value == ""){
      return false;
    }
    importJSON(value);
  });
}

function importJSON(text = "[]"){
  var jsonData = JSON.parse(text);
  for (var i = 0; i < jsonData.length; i++) {
      var element = jsonData[i];
      add(element);
  }
}
