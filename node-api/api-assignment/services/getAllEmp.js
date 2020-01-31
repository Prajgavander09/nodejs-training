
const helper = require('../helper') 

const getAllEmployeeData = (req, res) => {
    res.send(helper.userData.db);
  };

module.exports = getAllEmployeeData;