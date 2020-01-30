const main = require('./main')

exports.deleteRequest = (appexpress) => {
	appexpress.delete('/employee/:id', function(req, res, next){
	//if (error) throw error; 
	const index = main.userData.db.findIndex((userData) =>  userData.id === parseInt(req.params.id));    
    if (index == -1) {
      res.status(404).send("ID not found");
      return;     
    }

	res.send(main.userData.db.splice((index),1)); 

	});
}