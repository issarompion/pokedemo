```javascript
// ArrosageManuel.js
var Gpio = require('onoff').Gpio;
var Transitor = new Gpio(17, 'out');

// Nous définissons un temps d'arrosage de 10s

arrosage();
function arrosage () {
Transitor.writeSync(1);
  console.log("Arrosage en cours...(10s)");
setTimeout(finArrossage,10000);
};

function finArrossage(){
  Transitor.writeSync(0); //Remise à 0
  Transitor.unexport(); //Exportation vers des ressources gratuites
  console.log("Arrosage fini");
}
```
