import { Injectable } from '@angular/core';

import {Ingredients} from '../../MockData/Ingredient/ingredient.mock';

@Injectable()
export class IngredientService {

  getIngredients() {
    return Ingredients;
  }
  getIngredientByName(name:string){
    for(let i of Ingredients){
      if(i.name==name)
      { return i; }
    }
  }
  saveIngredient(ingredientName:string){
    console.log(ingredientName);
    Ingredients.push({name:ingredientName});
  }
}
