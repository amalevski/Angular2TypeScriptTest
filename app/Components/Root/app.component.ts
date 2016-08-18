import { Component } from '@angular/core';
import {NewRecipeComponent} from '../RecipeNew/recipe.new';
import {RecipeListComponent} from '../RecipeList/recipe.list';

@Component({
    selector: 'my-app',
    directives:[NewRecipeComponent,RecipeListComponent],
    templateUrl: '/app/Components/Root/app.component.html'
})
export class AppComponent {
  showList:boolean;
  constructor(){
    this.showList=true;
  }
}
