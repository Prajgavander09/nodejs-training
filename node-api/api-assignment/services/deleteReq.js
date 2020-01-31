const server = require('../server')
const helper = require('../helper') 


const deleteRequest = (req, res) => {
	//if (error) throw error; 
	const index = helper.userData.db.findIndex((userData) =>  userData.id === parseInt(req.params.id));    
    if (index == -1) {
      res.status(404).send("ID not found");
      return;     
    }

	res.send(helper.userData.db.splice((index),1)); 
};

module.exports = deleteRequest;