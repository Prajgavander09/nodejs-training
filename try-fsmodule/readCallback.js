/// reading file async using callback

const fs = require('fs');
const readWiki = fs.readFile('nodewiki.txt','utf8',function(err, readFileData) {
  if(err) {
    console.log("Error in file reading :- "+'\n'); 
    throw err; 
  }
  else {
  const append = fs.appendFile('copiedStuff.txt',readFileData,function(err, ndata) {
    if(err) {
      console.log("Error in file writing:- "+'\n'); 
      throw err; 
    }    
    console.log("File written succesfully in copiedStuff.txt from nodewiki.txt");               
    });
  }                  
})

console.log("This statement will be executed first");

