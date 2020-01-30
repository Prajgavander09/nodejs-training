const http = require('http');
//const server = require('./server.js')
const server = http.createServer();
//server.listen(8080)

const express = require('express');
const appexpress = express()
appexpress.use(express.json());
appexpress.listen(8080, console.log("Server started on localhost:8080"));

// {
// 	//data: ,
// 	message: ,
// 	error: 
// }

var db = [{
  id : 1580382197452, 
  name : 'Sachin',
  company : 'Gammastack',
  position : 'Sr. Solution Eng'
} , {
  id : 1580382121204, 
  name : 'Virat',
  company : 'Gammastack',
  position : 'Solution Eng'
} , {
  id : 1580382020762, 
  name : 'Rohit',
  company : 'Gammastack',
  position : 'Solution Eng'
} , {
  id : 1580381287737,
  name:'Prajjwal',
  company:'Gammastack',
  position:'Trainee Solution Eng'
}]

///homepage
appexpress.get('/', function (req, res) {
  //if (error) throw error;
  res.send('hello user !');
})


///employees page
appexpress.get('/employee', function(req, res) {
  //if (error) throw error;
  res.end(JSON.stringify(db));
});

///employees/id page
appexpress.get('/employee/:id', function(req, res) {
  //if (error) throw error;
  const user = db.find((userData, index)=> userData.id === parseInt(req.params.id))

  if (!user) {
  	return res.status(404).send("ID not found"); 
  } 

  res.send(JSON.stringify(user));
  //res.write(JSON.stringify(db));
  //res.end();
});

appexpress.delete('/employee/:id', function(req, res){
	//if (error) throw error;	
	res.send(db.splice((parseInt(req.params.id)-1),1));	
});

appexpress.post('/employee', (req, res) => {
	const emp = {
		id : parseInt(Date.now()) ,
		name : req.body.name ,
  	company : req.body.company,
  	position : req.body.position
	}
	//console.log(req.body);
	db.push(emp);
	res.send(emp);	

})
appexpress.put('/employee/:id', function(req, res) {
	//if (error) throw error; 
	// TODO :- Here write logic of a for loop in which all operations of finding and posting will be written
	const index = db.findIndex((userData) =>  userData.id === parseInt(req.params.id));
  
  if (index == -1) {
		res.status(404).send("ID not found");
    return; 		
	}
  console.log(db[index])
	//const {name, company, position} = req.body;	
	db[index].name = req.body.name 
	//console.log(name)
  db[index].company = req.body.company
  db[index].position = req.body.position
	
  res.send(JSON.stringify(db));

});

