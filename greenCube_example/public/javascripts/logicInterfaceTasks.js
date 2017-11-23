function addTask(){
    var tarea = $('#txtTask').val();
    console.log(tarea);

    if (!tarea == "" ){
        
        $.ajax ({
            type: 'POST',
            url:'http://localhost:3000',
            data:{    
                'task': tarea
            },
            dataType: 'json',
            success: (succ)=>{
                console.log("Se agrego exitosamente");
                
            },
            error:(err)=>{
                console.log(err);
            }
          });
        
    }else{
       alert("Erorr!! Ingrese un dato valido");
    }

}

