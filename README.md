# pokedemo

## Run the project

Dans un terminal : `cd pokdemo/`,`npm install`, `npm run start` et aller à `localhost:4200/` dans un navigateur web.

## Introduction

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

Après avoir choisi son pokémon dans l'autocomplete, le choix est attribué à la variable `choix:Pokemon` et l'utilisateur peu appuyer sur le button de lancement "OK".Ce boutton lance une fonction `go()` qui va permettre de rentre visible mon deuxième composant d'affichage avec un `ngIf` sur la variable `done`. Pour éviter toute erreur, je vérifie quand même que le choix est bien une instance de pokemon, sinon j'envoie une alerte "Veuillez choisir un pokemon dans la liste" :

```ts
  go() : void {
    if(this.choix instanceof Pokemon){
      console.log("go")
      this.done=true
    }
    else{
      alert("Veuillez choisir un pokemon dans la liste");
    } 
  }
```
  
  Ce booléen `done`, me permet également de rendre invisible le composant d'affichage si il y a un changement de pokemon dans l'autocomplete avec sa fonction `onChange()`.

### 1.3 Le pokemon choisi en @Input du composant d'affichage

J'ai décidé de mettre le pokemon choisi en input du composant affichage, pour cela j'ai bindé la variable [ChildPokemon] que j'ai créé dans le composant affichage :

*my-component.component.html*
```html
<div id = "affichage">
  <app-affichage *ngIf="done"  [ChildPokemon]="choix"></app-affichage>
</div> 
```

*affichage.component.ts*
```ts
@Input() ChildPokemon: Pokemon;
```

Plus tard j'ai vu que dans les consignes qu'il était indiqué de créer un service pour partager les informations entre les deux composants. Il fallait créer un observable où le composant d'affichage pouvait y souscrire pour détecter le changement de pokemon. Au final j'ai décidé de garder ma façon de faire car elle me convenait.

## 2.Composant d'affichage "affichage"

### 2.1 Modification de la classe Pokemon

Dans le *OnInit()* du composant d'affichage, je m'occupe de récupérer toute les informations à afficher de mon pokemon. Dès lors je me suis dit qu'il fallait que je change un peu ma classe pokémon en lui ajoutant des variables qui corresponderaient à ces infos. Les infos que je voulais récupérer étaient : l'image, le(s) type(s), la description, les stats et les moves.

- Pour l'image et la description c'était simple vu qu'on récuperait une url et une description en string, j'ai donc créer deux variable `img_url:string`et `text:string`.

- Pour le(s) type(s), je me suis dis que cela pouvait être un tableau de `Type`, une nouvelle classe, construite avec le `nom:string` et le `style:{}` en css que j'ai récupéré sur un site.

- Pour les stats, je me suis dis que ce pouvait être un tableau de `Stat`, une nouvelle classe, construite avec le `nom:string`, la `base_stat:number` et `effort:number`

- Enfin pour les moves, je me suis dis que ce pouvait être un tableau de `Move`, une nouvelle classe, construite avec le `nom:string` et le `type:Type`

J'arrive à la classe pokemon final suivante :

```ts
export class Pokemon {
    id: number
    nom: string;
    text : string;
    img_url : string
    types : Type[]
    stats : Stat[]
    moves : Move[] 
  
    constructor(id:number,nom: string) {
        this.id = id;
        this.nom = nom;
        this.stats = []
        this.types = []
        this.moves = []
    }
    
    public toString = () : string => {
        return this.nom;
    }

}
```

A partir de là j'ajoute proprement les informations du pokémon choisi dans le OnInit() d'affichage, en exemple avec :

```ts
this.service
    .getListOfGroup(url)
    .subscribe(
      data => {
//...
for (var i = 0; i < data.stats.length ; i++) {
    this.ChildPokemon.stats.push(new Stat(data.stats[i].stat.name,data.stats[i].base_stat,data.stats[i].effort))
 }
//...
}
)
```

Maintenant je peux afficher les informations.

### 2.2 Affichage de l'image, la description et le(s) type(s)

Ici pas de problème d'affichage, j'ai juste afficher l'image le type et la description avec des composants html classique. ma principale difficulté était de bien les ranger pour que ce soit propre, je n'ai jamais eu de cours d'html donc c'était un peu compliqué au départ.

### 2.3 Affichage des stats

Ici je me suis dit qu'il pouvait être intéressant d'afficher les stats avec un graphique, j'ai utilisé le **RadarChart** de PrimeNG. J'ai eu pas mal de difficultés rien que dans l'importation du module car, il y avait un problème de version d'Angular. Ensuite il fallait absolument que j'initialise les données du graphique dans le OnInit() juste après avoir récupérer TOUTES les stats parce que le graphique n'était pas dynamique et on ne pouvait pas l'initialiser avant de posseder toute les données. Ce qui me donne un bout de code moche à ajouter dans le for précédent (2.1) :

```ts
if(this.ChildPokemon.stats.length == data.stats.length){
            this.radarChartData = [{ data: this.ChildPokemon.getArray(), label: 'Stats' }]
            // la fonction getArray() renvoi les données dans le bon format de radarChartData
          }
```

### 2.4 Affichage des moves

Enfin j'ai décidé d'afficher les moves avec un **p-virtualScroller** de PrimeNG qui est en fait un tableau déroulant. Et ici aussi j'ai eu le même problème que pour l'affichage des stats à savoir qu'il fallait que j'initialise les données une fois qu'elles étaient toutes récupérées.

## Conclusion

J'ai beaucoup apprecié le TP et le module en général, il nous a permit de nous familiarisé à Angular et surtout d'avoir un vrai cours sur la programmation web (parce qu'on apprennait un peu par nous même jusque là) et les frameworks utilisés et en particulier Angular.
 
