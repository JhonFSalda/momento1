const fs = require('fs');
console.log("Por favor escriba su nombre: ");

var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    var dato = d.toString().trim();

    var saludo1 = "Español: ¡Hola! " + dato + ".";
    var saludo2 = "English: ¡Hello! " + dato + ".";
    var saludo3 = "Deutsch: ¡Hallo! " + dato + ".";
    //var saludo4 = "Español: ¡ 안녕 ! " + dato + ".";
    //var saludo5 = "Español: ¡Hola! " + dato + ".";

    console.log("");
    console.log("");
    console.log("Tus saludos son:");
    console.log("");
    console.log(saludo1);
    console.log(saludo2);
    console.log(saludo3);
    

    // if(dato == 'salir'){
    //     return process.stdin.destroy();
    // }

    fs.writeFile(
        'Saludo' + dato + '.txt', 
        'Aquí estan tus saludos '+ dato +': \n \n' +
        saludo1 + "\n" + 
        saludo2 + "\n" +
        saludo3 + "\n",
        (err) => {
            if (err) 
                throw err;
        console.log('Se guardó un archivo de texto con tus saludos.');
      });
    
    
});


