# pokedemo

## Run the project

Dans un terminal : `cd pokdemo/`, `npm run start` et aller à `localhost:4200/` dans un navigateur web.

## intrdocution

Voici le compte rendu de TP Angular dans le module IHMW. Mon travail à été séparé en 2 grandes parties qui sont les deux composants que j'ai crée à savoir mon composant de recherche "my-component" et mon composant d'affichage "affichage". Pour chacune des deux parties je présenterais les choix (conception, réalisation, rendu) que j'ai choisi et les difficultés rencontrés.

##### Création d'un serveur web pour tester le fonctionnement de l'arrosage manuel à distance (Lien avec le WP3)

## 1.Composant de recherche "my-componant"

Au départ je suivais à la lettre les questions de TP pour monter en compétence sur Angular. Je n'ai pas rencontré de difficultés particulières sur les premières questions notament grâce a quelque choix. A un moment donné il fallait binder "le choix du dresseur" de la balise select. Pour me simplifier les choses j'ai décider de créer une fonction toString() dans ma classe pokémon.

 ```ts
 public toString = () : string => {
        return this.nom;
    }
```

Je traitais donc uniquement sur les pokémons. Ensuite j'ai remarqué que j'aurais pu résoudre le problème en utilisant `[ngValue]` dans l'option du select.
Après cela je trouvais que le select n'était pas trop partique j'ai donc décider mettre un autocomplete de PrimeNG avec un bouton déroulant. Je trouvais la selection de pokémon beaucoup plus simple. J'ai donc laisser tomber le pipe l'autocomplete PrimeNG proposait déjà une option de filtrage dans une fonction.

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




 
