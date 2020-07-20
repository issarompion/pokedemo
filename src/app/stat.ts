export class Stat {

    nom: string
    base_stat: number;
    effort : number ;
  
    constructor(nom:string,base_stat: number,effort : number) {
        this.base_stat = base_stat;
        this.nom = nom;
        this.effort = effort;
    }

    public toString = () : string => {
        return this.nom;
    }


}
