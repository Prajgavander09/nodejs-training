const helper = require('../helper')

const putRequest = (req, res) => {
  //if (error) throw error; 
  // TODO :- Here write logic of a for loop in which all operations of finding and posting will be written
  const index = helper.userData.db.findIndex((userData) =>  userData.id === parseInt(req.params.id));
  if (index == -1) {
    res.status(404).send("ID not found");
    return;  
  }
  helper.userData.db[index].name = req.body.name 
  helper.userData.db[index].company = req.body.company
  helper.userData.db[index].position = req.body.position
  res.send(helper.userData.db);
};

module.exports = putRequest;