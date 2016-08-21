import { Component, Type } from '@angular/core';
import {RecipeListComponent} from '../RecipeList/recipe.list';

@Component({
    selector: 'my-app',
    directives:[RecipeListComponent],
    templateUrl: '/app/Components/Root/app.component.html'
})
export class AppComponent extends Type {
  showList:boolean;
  constructor(){
    super();
    this.showList=true;
  }
}
