const helper = require('../helper') 

const postRequest = (req, res) => {
	if (!req.body.name || !req.body.company || !req.body.position) {
		res.status(400).send("Invalid Details");
	}
	const emp = {
		id : parseInt(Date.now()) ,
		name : req.body.name ,
  	company : req.body.company,
  	position : req.body.position
	}
	helper.userData.db.push(emp);
	res.send(emp);	
};

module.exports = postRequest;

