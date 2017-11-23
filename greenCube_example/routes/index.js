var express = require('express');
var router = express.Router();
const Task = require('../conection_db');


/* GET home page. */

router.get('/', function (req, res, next) {
 
  
  Task.find({}, function (err,tasks){
            if (err) {
              console.log("Falla en la conexion");
            }
    console.log("EL servidor arranco con exito");
    res.render('index', { title: 'Administrador de tareas',
                          taskList:tasks });
            console.log("Se ejecuto la consulta con exito");
          })
       
});
router.get('/delete/:id', function (req, res, next) {
    var id = req.params.id;
    Task.remove({ _id: id }, function (err, tasks){
      if (err) {
        throw err;
        
      }
      console.log("Se eliminó con éxito el row");
      res.redirect('/');
      });
    
 
});

/* POST home page. */
router.post('/', function(req, res, next) {

        String: dato = req.body.task;
        var task =  new Task({task:dato});
        task.save(function(err){
          if(err){
            console.log('Error al salvar en la base de datos');

          }
          else{
            console.log('Tarea guardada con exito');
          }
        });

 
});



module.exports = router;
