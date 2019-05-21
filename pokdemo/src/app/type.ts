export class Type {
    nom : string;
    style : {};

    public toString = () : string => {
        return this.nom +", "+this.style;
    }
    constructor(nom:string){
        this.nom = nom

        switch(nom) {
            case "normal": {
               this.style = {'background': '#A8A878', 'border-style': 'solid none', 'border-width': '1px', 'border-top-color': '#D8D8D0', 'border-bottom-color': '#705848', 'border-radius': '5px', 'padding': '0.15em', 'font-size': '9pt', 'color': '#F8F8F8', 'text-shadow': '0px 1px 1'}
               break
            }
            case "fire": {
               this.style = {'background':'#F08030','border-style':'solid none','border-width':'1px','border-top-color':'#F8D030','border-bottom-color':'#C03028','border-radius':'5px','padding':'0.15em','font-size':'9pt',' color':'#F8F8F8','text-shadow':'0px 1px 1px #807870'}
               break
            }
            case "water": {
                this.style = {'background':'#6890F0','border-style':'solid none','border-width':'1px','border-top-color':'#98D8D8','border-bottom-color':'#807870','border-radius':'5px','padding':'0.15em','font-size':'9pt','color':'#F8F8F8','text-shadow':'0px 1px 1px #807870'}
                break
             }
             case "electric": {
                this.style = {'background':'#F8D030','border-style':'solid none','border-width':'1px','border-top-color':'#F8F878','border-bottom-color':'#B8A038','border-radius':'5px','padding':'0.15em','font-size':'9pt','color':'#F8F8F8','text-shadow':'0px 1px 1px #807870'}
                break
             }
             case "grass": {
                this.style = {'background':'#78C850','border-style':'solid none','border-width':'1px','border-top-color':'#C0F860','border-bottom-color':'#588040','border-radius':'5px','padding':'0.15em','font-size':'9pt','color':'#F8F8F8','text-shadow':'0px 1px 1px #807870'}
                break
             }
             case "bug": {
                this.style = {'background':'#A8B820','border-style':'solid none','border-width':'1px','border-top-color':'#D8E030','border-bottom-color':'#A8B820','border-radius':'5px','padding':'0.15em','font-size':'9pt','color':'#F8F8F8','text-shadow':'0px 1px 1px #807870'}
                break
             }
             case "flying": {
                this.style = {'background':'#A890F0','border-style':'solid none','border-width':'1px','border-top-color':'#C8C0F8','border-bottom-color':'#705898','border-radius':'5px','padding':'0.15em','font-size':'9pt','color':'#F8F8F8','text-shadow':'0px 1px 1px #807870'}
                break
             }
             case "fighting": {
               this.style = {'background':'#C03028','border-style':'solid none','border-width':'1px','border-top-color':'#F08030','border-bottom-color':'#484038','border-radius':'5px','padding':'0.15em','font-size':'9pt','color':'#F8F8F8','text-shadow':'0px 1px 1px #807870'}
               break
            }
            case "ice": {
               this.style = {'background':'#98D8D8','border-style':'solid none','border-width':'1px','border-top-color':'#D0F8E8','border-bottom-color':'#9090A0','border-radius':'5px','padding':'0.15em','font-size':'9pt','color':'#F8F8F8','text-shadow':'0px 1px 1px #807870'}
               break
            }
            case "rock": {
               this.style = {'background':'#B8A038','border-style':'solid none','border-width':'1px','border-top-color':'#E0C068','border-bottom-color':'#886830','border-radius':'5px','padding':'0.15em','font-size':'9pt','color':'#F8F8F8','text-shadow':'0px 1px 1px #807870'}
               break
            }
            case "ground": {
               this.style = {'background':'#E0C068','border-style':'solid none','border-width':'1px','border-top-color':'#F8F878','border-bottom-color':'#886830','border-radius':'5px','padding':'0.15em','font-size':'9pt','color':'#F8F8F8','text-shadow':'0px 1px 1px #807870'}
               break
            }
            case "poison": {
               this.style = {'background':'#A040A0','border-style':'solid none','border-width':'1px','border-top-color':'#D880B8','border-bottom-color':'#483850','border-radius':'5px','padding':'0.15em','font-size':'9pt','color':'#F8F8F8','text-shadow':'0px 1px 1px #807870'}
               break
            }
            case "psychic": {
               this.style = {'background':'#F85888','border-style':'solid none','border-width':'1px','border-top-color':'#F8C0B0','border-bottom-color':'#789010','border-radius':'5px','padding':'0.15em','font-size':'9pt','color':'#F8F8F8','text-shadow':'0px 1px 1px #807870'}
               break
            }
            case "ghost": {
               this.style = {'background':'#705898','border-style':'solid none','border-width':'1px','border-top-color':'#A890F0','border-bottom-color':'#483850','border-radius':'5px','padding':'0.15em','font-size':'9pt','color':'#F8F8F8','text-shadow':'0px 1px 1px #807870'}
               break
            }
            case "dragon": {
               this.style = {'background':'#7038F8','border-style':'solid none','border-width':'1px','border-top-color':'#B8A0F8','border-bottom-color':'#483890','border-radius':'5px','padding':'0.15em','font-size':'9pt','color':'#F8F8F8','text-shadow':'0px 1px 1px #807870'}
               break
            }
            case "dark": {
               this.style = {'background':'#705848','border-style':'solid none','border-width':'1px','border-top-color':'#A8A878','border-bottom-color':'#484038','border-radius':'5px','padding':'0.15em','font-size':'9pt','color':'#F8F8F8','text-shadow':'0px 1px 1px #807870'}
               break
            }
            case "steel": {
               this.style = {'background':'#B8B8D0','border-style':'solid none','border-width':'1px','border-top-color':'#D8D8C0','border-bottom-color':'#807870','border-radius':'5px','padding':'0.15em','font-size':'9pt','color':'#F8F8F8','text-shadow':'0px 1px 1px #807870'}
               break
            }
            case "fairy": {
               this.style = {'background':'#F0B6BC','border-style':'solid none','border-width':'1px','border-top-color':'#F5CAD1','border-bottom-color':'#905F63','border-radius':'5px','padding':'0.15em','font-size':'9pt','color':'#F8F8F8','text-shadow':'0px 1px 1px #807870'}
               break
            }
            default: {
               this.style = {'background': '#A8A878', 'border-style': 'solid none', 'border-width': '1px', 'border-top-color': '#D8D8D0', 'border-bottom-color': '#705848', 'border-radius': '5px', 'padding': '0.15em', 'font-size': '9pt', 'color': '#F8F8F8', 'text-shadow': '0px 1px 1'}
               //,'display': 'table-cell','width': '50%'
                break
            }
 
         }
 
 
    }

}