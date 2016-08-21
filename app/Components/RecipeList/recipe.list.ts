import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {RecipeService} from '../../Services/Recipe/recipe.service'

@Component({
  selector: 'recipes-list',
  templateUrl: '/app/Components/RecipeList/recipe.list.html',
  providers:[RecipeService]
})
export class RecipeListComponent {

  recipes = Array<any>();

  constructor(private recipeService:RecipeService, private router:Router ){
    this.recipes=recipeService.getRecipes();
  }

  NavigateToCreatePage(){
    this.router.navigate(['/NewRecipe']);
  }

  Preview(index:number){
    this.router.navigate(['/Recipe',index]);
  }
  Remove(index:number){
   this.recipeService.removeRecipe(index);
  }
}
