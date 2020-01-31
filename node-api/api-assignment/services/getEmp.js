const helper = require('../helper') 

const getEmployeeWithID = (req, res) => {
  const user = helper.userData.db.find((userData, index) => userData.id === parseInt(req.params.id))
  if (!user) {
    return res.status(404).send("ID not found"); 
  } 
  res.send(user);
};
  
module.exports = getEmployeeWithID;
