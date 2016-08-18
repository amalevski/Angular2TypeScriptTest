import { Injectable } from '@angular/core';
import {Recipes} from '../../MockData/Recipe/recipe.mock';
import {Recipe} from '../../Models/Recipe/recipe.model';
import {RecipeIngredient} from '../../Models/Common/RecipeIngredient';

@Injectable()
export class RecipeService {

  getRecipes() {
  return Recipes;
  }
  getRecipeByIndex(index:number){
    return Recipes[index];
  }
  addRecipe(recipe:any){
    console.log(recipe);
    Recipes.push(recipe);
  }
  removeRecipe(index:number){
    Recipes.splice(index,1);
  }
}
