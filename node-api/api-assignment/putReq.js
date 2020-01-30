const main = require('./main.js')

exports.putRequest = (appexpress) => {
  appexpress.put('/employee/:id', function(req, res) {
    //if (error) throw error; 
    // TODO :- Here write logic of a for loop in which all operations of finding and posting will be written
    const index = main.userData.db.findIndex((userData) =>  userData.id === parseInt(req.params.id));
    
    if (index == -1) {
      res.status(404).send("ID not found");
      return;     
    }

    //console.log(db[index])
    //const {name, company, position} = req.body; 
    main.userData.db[index].name = req.body.name 
    main.userData.db[index].company = req.body.company
    main.userData.db[index].position = req.body.position
    
    res.send(main.userData.db);

  });
}