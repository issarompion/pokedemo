# pokedemo

## intrdocution

Voici le compte rendu de TP Angular dans le module IHMW. Mon travail à été séparer en 2 grandes partie qui sont enfaite les deux composant que j'ai crée à savoir mon composant de recherche "my-component" et mon composant d'affichage "affichage". Pour chacune des deux partie je présenterais les choix (conception, réalisation, rendu) que j'ai choisi et les difficultés rencontrés.

##### Création d'un script pour l'arrosage manuel

A présent il faut pouvoir contrôler le GPIO17 afin qui puisse déclencher l'arrosage manuel. Après quelques recherches sur le net j'ai vu qu'il était possible de le faire avec `node.js`[7],[8]. Le fait de pouvoir le faire avec ce langage me semble être une bonne solution étant donné que nous voulions aussi créer le serveur web avec ce langage. J'ai donc créer un script node.js appelé `ArrosageManuel.js` qui, sur le lancement sur le raspberry, allumait le port GPIO17 pendant une dizaine de seconde (temps d'arrosage) et se refermait immédiatement.

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


##### Création d'un serveur web pour tester le fonctionnement de l'arrosage manuel à distance (Lien avec le WP3)

## 1.Composant de recherche "my-componant"


Au départ je suivais à la lettre les questions de TP pour monter en compétence sur angular. Je n'ai pas rencontrer de difficulté particulière les premières questions notament grâce a quelque choix de conception. A un moment donné il fallait binder "le choix du dresseur" de la balise <select>. Pour me simplifier les choses j'ai décider de créer une fonction toString() dans ma classe pokémon.
 s
 
 ```ts
 public toString = () : string => {
        return this.nom;
    }
```

Je traitais donc uniquement sur les pokémons. Ensuite j'ai remarqué que j'aurais pu résoudre le problème en utilisant *[ngValue]* dans l'option du select.
Après cela je trouvais que le select n'était pas trop partique j'ai donc décider mettre un autocomplete de PrimeNG avec un bouton déroulant. Je trouvais la selection de pokémon beaucoup plus simple. J'ai donc laisser tomber le pipe l'autocomplete prime NG proposait déjà une option de filtrage dans une fonction.

```ts
filterPokemon(query, pokemons: Pokemon[]):Pokemon[] {
            //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
            this.filteredPokemonSingle = [];
            for(let i = 0; i < pokemons.length; i++) {
                let pokemon = pokemons[i];
                if(pokemon.nom.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                  this.filteredPokemonSingle.push(pokemon);
                }
            }
            return this.filteredPokemonSingle;
}
```

 
