# pokedemo

## Run the project

Dans un terminal : `cd pokdemo/`, `npm run start` et aller à `localhost:4200/` dans un navigateur web.

## introduction

Voici le compte rendu de TP Angular dans le module IHMW. Mon travail à été séparé en 2 grandes parties qui sont les deux composants que j'ai crée à savoir mon composant de recherche "my-component" et mon composant d'affichage "affichage". Pour chacune des deux parties je présenterais mes choix et les difficultés rencontrées.

## 1.Composant de recherche "my-componant"

### 1.1 Input, select et autocomplete

Au départ je suivais à la lettre les questions du TP pour monter en compétence sur Angular. Je n'ai pas rencontré de difficultés particulières sur les premières questions notament grâce a quelque choix. A un moment donné il fallait binder "le choix du dresseur" de la balise select. Pour me simplifier les choses j'ai décidé de créer une fonction toString() dans ma classe pokémon.

 ```ts
 public toString = () : string => {
        return this.nom;
    }
```

Je traitais donc uniquement sur les pokémons. Ensuite j'ai remarqué que j'aurais pu résoudre le problème en utilisant `[ngValue]` dans l'option du select.
Après cela je trouvais que le select n'était pas trop pratique j'ai donc décidé mettre un autocomplete de PrimeNG avec un bouton déroulant. Je trouvais la selection de pokémon beaucoup plus simple avec. J'ai donc laisser tomber le pipe car l'autocomplete PrimeNG proposait déjà une option de filtrage dans une fonction.

```ts
filterPokemon(query, pokemons: Pokemon[]):Pokemon[] {
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



### 1.2 Le button de lancement

Après avoir choisi son pokémon dans l'autocomplete, le choix est attribué à la variable `choix:Pokemon` et l'utilisateur peu appuyer sur le button de lancement "OK". Ce boutton lance une fonction `go()` qui va permettre de rentre visible mon deuxième composant d'affichage avec un `ngIf` sur la variable `done`. Pour éviter toute erreur, je vérifie quand même que `choix` est bien une instance de pokemon, sinon j'envoie une alerte "Veuillez choisir un pokemon dans la liste" :

  go() : void {
    if(this.choix instanceof Pokemon){
      console.log("go")
      this.done=true
    }
    else{
      alert("Veuillez choisir un pokemon dans la liste");
    } 
  }
  
  Ce booléen `done`, me permet également de rendre invisible le composant d'affichage si il y a un changement de pokemon dans l'autocomplete avec sa fonction `onChange()`.


## 2.Composant d'affichage "affichage"

### 2.1 Modification de la classe Pokemon

### 2.2 Affichage de l'image, la description et le(s) type(s)

### 2.3 Affichage des moves

### 2.4 Affichage des stats

 
