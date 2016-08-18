import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {RecipeService} from '../../Services/Recipe/recipe.service'
import {Recipe} from '../../Models/Recipe/recipe.model';

@Component({
  selector: 'recipes-preview',
  templateUrl: '/app/Components/RecipePreview/recipe.preview.html',
  providers:[RecipeService]
})
export class RecipePreviewComponent {

  index:number;
  recipe:Recipe;

  constructor(private recipeService:RecipeService, private router:Router, private route:ActivatedRoute ){

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.index = +params['index'];
      this.recipe = this.recipeService.getRecipeByIndex(this.index);
    });
  }

  NavigateToIndexPage(){
    this.router.navigate(['/Index']);
  }

  Remove(){
    console.log(this.index);
    this.recipeService.removeRecipe(this.index);
    this.router.navigate(['/Index']);
  }
}
