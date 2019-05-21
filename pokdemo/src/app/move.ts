import { Type } from './type';

export class Move {
    nom: string
    type : Type;
  
    constructor(type:Type,nom: string) {
        this.nom = nom;
        this.type=type
    }

    public toString = () : string => {
        return this.nom;
    }
  
  }