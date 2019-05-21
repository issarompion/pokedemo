import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { Move } from '../move';
import { Stat } from '../stat'
import { Type } from '../type'



//import { MyComponentComponent } from '../my-component/my-component.component'
import { PokeApiServiceService } from '../poke-api-service.service'
import { fillProperties } from '@angular/core/src/util/property';


@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {

  @Input() ChildPokemon: Pokemon;
  done :Boolean;

  //IMAGE
  img_url () : string{
    if(this.ChildPokemon.img_url === undefined){
      return "http://www.etudiant-en-sciences.fr/images/loading.gif?1464015627"
    }else{
      return this.ChildPokemon.img_url 
    }
  }
  //DESCRIPTION
  text():string{
    if(this.ChildPokemon.text === undefined){
      return "Aucune description disponible"
    }else{
      return this.ChildPokemon.text 
    }
  }
  //TYPES
  types():Type[]{
    return this.ChildPokemon.types
  }
  //STATS
    public radarChartOptions: RadialChartOptions = {
      responsive: true,
      scales: {
        gridLines: {
          color: ['rgba(10, 102, 40, 1)']
        }
    }
    };
    colors = [
      {
        backgroundColor: 'rgba(103, 58, 183, .1)',
        borderColor: 'rgb(103, 58, 183)',
        pointBackgroundColor: 'rgb(103, 58, 183)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
      },
      // ...colors for additional data sets
    ];
    public radarChartType: ChartType = 'radar';
    public radarChartLabels: Label[]
    public radarChartData: ChartDataSets[]
  //MOVES
 /* moves(): Move[] {
    return this.ChildPokemon.moves
  }*/
  moves : Move[]


  constructor(private service: PokeApiServiceService) {
    this.service = service
    this.done =false
    this.radarChartData = [{ data: [0,0,0,0,0,0], label: 'Stats' }]
    this.radarChartLabels= ['speed', 'special-defense', 'special-attack', 'defense', 'attack', 'hp'];
    }

  ngOnInit() {
    let url1 = "https://pokeapi.co/api/v2/pokemon-species/"+this.ChildPokemon+'/';
    let url2 = "https://pokeapi.co/api/v2/pokemon/"+this.ChildPokemon+'/';
      this.service
        .getListOfGroup(url1)
        .subscribe(
          data => {
            this.base_happiness = data.base_happiness
            this.capture_rate = data.capture_rate
            this.habitat = data.habitat.name
 
            for (var i = 0; i < data.flavor_text_entries.length ; i++) {
              if(data.flavor_text_entries[i].language.name == "en"){
                this.ChildPokemon.text=data.flavor_text_entries[i].flavor_text
               break;
              }
             }
 
 
          },
          err => {
            console.log(err);
          }
        );
 
    this.service
    .getListOfGroup(url2)
    .subscribe(
      data => {
        this.ChildPokemon.img_url = data.sprites.front_default
        for (var i = 0; i < data.types.length ; i++) {
          this.ChildPokemon.types.push(new Type(data.types[i].type.name))
         }
        
        for (var i = 0; i < data.stats.length ; i++) {
          this.ChildPokemon.stats.push(new Stat(data.stats[i].stat.name,data.stats[i].base_stat,data.stats[i].effort))
          if(this.ChildPokemon.stats.length == data.stats.length){
            this.radarChartData = [{ data: this.ChildPokemon.getArray(), label: 'Stats' }]
          }
         }
 
         for (var i = 0; i < data.moves.length ; i++) {
           console.log(data.moves[i].move.name)
          this.PushMove(data.moves[i].move.name,data.moves[i].move.url,data.moves.length)
         }
        
      },
      err => {
        console.log(err);
      }
    );

    }

    PushMove(name:string,url:string,l:number){
      this.service
      .getListOfGroup(url)
      .subscribe(
        data => {
          this.ChildPokemon.moves.push(new Move(new Type(data.type.name),name))
          if(this.ChildPokemon.moves.length == l){
            this.moves = this.ChildPokemon.moves
          }
        },
        err => {
          console.log(err);
        }
      );
    }

    base_happiness : number; //1) base_happiness
    capture_rate : number; //1) capture_rate
    habitat : string; //1) habitat.name

  }



