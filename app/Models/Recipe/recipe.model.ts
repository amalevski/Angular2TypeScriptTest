import {RecipeIngredient} from '../Common/RecipeIngredient';
import {Time} from '../Common/Time';

export class Recipe {
  name: string;
  description: string;
  origin:string;
  hours:number;
  minutes:number;
  ContainingIngredients:Array<RecipeIngredient> = new Array<RecipeIngredient>();

  constructor(){}

  constructor(name:string,description:string,origin:string,ContainingIngredients:Array<RecipeIngredient>){
    this.name=name;
    this.description=description;
    this.origin=origin;
    this.ContainingIngredients=ContainingIngredients;
  }

  constructor(name:string,description:string,origin:string,hours:number,minutes:number,ContainingIngredients:Array<RecipeIngredient>){
    this.name=name;
    this.description=description;
    this.origin=origin;
    this.hours=hours;
    this.minutes=minutes;
    this.ContainingIngredients=ContainingIngredients;
  }
}
