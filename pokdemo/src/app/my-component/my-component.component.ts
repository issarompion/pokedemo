import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokeApiServiceService } from '../poke-api-service.service'
import { Move } from '../move';
import { Stat } from '../stat'
import { Type } from '../type'


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],

})
export class MyComponentComponent implements OnInit {

  choix : Pokemon;
  StatArray : number[] = [0, 0, 0, 0, 0, 0]

  id () : string {
    if(this.choix === undefined){
      return "ID"
    }else {
      if(this.choix.id === undefined){
      return "ID"
      }
      return String(this.choix.id)
    }
  }
  
  liste : Pokemon[] = []
  done : Boolean = false
  ready : Boolean = false
 

  onChange(newValue) {
    console.log(newValue);
    this.done = false
}

  go() : void {
    if(this.choix instanceof Pokemon){
      console.log("go")
      this.done=true
      this.getinfo()
    }
    else{
      alert("Veuillez choisir un pokemon dans la liste");
    } 
  }

  filteredPokemonSingle: Pokemon[];


  filterPokemonSingle(event) {
    this.done = false
    this.filteredPokemonSingle = this.filterPokemon(event.query, this.liste);
}

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



  constructor(private service: PokeApiServiceService) { 
  this.service = service
  }

  ngOnInit() {
    console.log("ngOnInit")
    let url = "https://pokeapi.co/api/v2/pokedex/1";
      this.service
        .getListOfGroup(url)
        .subscribe(
          data => {
            for (var i = 0; i < data.pokemon_entries.length ; i++) {
             this.liste.push(new Pokemon(data.pokemon_entries[i].entry_number,data.pokemon_entries[i].pokemon_species.name))
             if(data.pokemon_entries.length == this.liste.length){
              this.ready = true 
               return
             }
            }
          },
          err => {
            console.log(err);
          }
        );
    
  }

  str: string = '';


  getinfo(){
   this.choix.types = []
    this.choix.stats = []
    this.choix.moves = []
}
  }
