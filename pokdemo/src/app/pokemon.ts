import { Move } from './move';
import { Stat } from './stat';
import { Type } from './type';
import { ChartDataSets } from 'chart.js';

export class Pokemon {
    id: number
    nom: string;
    base_happiness : number; //1) base_happiness
    capture_rate : number; //1) capture_rate
    habitat : string; //1) habitat.name
    text : string; //1) flavor_text_entries[i].flavor_text where flavor_text_entries[i].language.name == "en"
  
    img_url : string
    types : Type[] //2) types[i].type.name
    stats : Stat[]//2) stats[i].base_stat (number) , stats[i].effort (number) , stats[i].stat.name
    moves : Move[] //2) moves[i].move.name // moves[i].move.url (https://pokeapi.co/api/v2/move/x/) => type.name
  
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

  public arrayToJsonStats() : {} {
    if(this.stats.length==6){
        let nom0 : string = this.stats[0].nom
        let stat0 : number = this.stats[0].base_stat
        let nom1 : string = this.stats[1].nom
        let stat1 : number = this.stats[1].base_stat
        let nom2 : string = this.stats[2].nom
        let stat2 : number = this.stats[2].base_stat
        let nom3 : string = this.stats[3].nom
        let stat3 : number = this.stats[3].base_stat
        let nom4 : string = this.stats[4].nom
        let stat4 : number = this.stats[4].base_stat
        let nom5 : string = this.stats[5].nom
        let stat5 : number = this.stats[5].base_stat
        
 return {
     [nom0] : stat0,
     [nom1] : stat1,
     [nom2] : stat2,
     [nom3] : stat3,
     [nom4] : stat4,
     [nom5] : stat5
 }
}else return {}
  }
  
  public getArray() : number[] {
    var json = this.arrayToJsonStats()
    return [json['speed'],json['special-defense'],json['special-attack'],json['defense'],json['attack'],json['hp']]
}


}
