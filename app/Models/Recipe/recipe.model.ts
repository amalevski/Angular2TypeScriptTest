import {RecipeIngredient} from '../Common/RecipeIngredient';

export class Recipe {
  name: string;
  description: string;
  origin:string;
  time:string;
  ContainingIngredients:Array<RecipeIngredient> = new Array<RecipeIngredient>();

  constructor(name:string, description:string, origin:string, time:string, ContainingIngredients:Array<RecipeIngredient>){
    this.name=name;
    this.description=description;
    this.origin=origin;
    this.time=time;
    this.ContainingIngredients=ContainingIngredients;
  }
}
