/// Using fs module promise 

const fs = require('fs');
let readPromise = new Promise( function(resolve,reject) {
  const readWiki = fs.readFile('nodewiki.txt','utf8',function(error, data) {
    if(error) {
      reject(error);    
      }
    else {
      resolve(data);
      }
  });  
});

readPromise.
  then( (dataToBePassed) => {
    return new Promise(function(resolve, reject) {  
    fs.writeFile('newFile.txt',dataToBePassed,function(err,ndata) {
      if(err) {
        reject(err);
        console.log("Error in file writing:- "+'\n'); 
        throw err; 
      } 
      else {
        resolve('File write operation done');
      }
    })
  })  
console.log("File written succesfully in newFile.txt from nodewiki.txt");  
})
.then(function(data) {
  console.log('Hey',data)
})
.catch(function(msg){
  console.log('Error occurred in reading file :-'+'\n'+msg)
});