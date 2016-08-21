import { Component, Input } from '@angular/core';

@Component({
  selector: 'ingredient-list',
  templateUrl: '/app/Components/IngredientList/ingredient.list.html'
})
export class IngredientList {
  @Input() recipeIngredients : any;
  constructor(){
  }

  removeRecipeIngredient(name:string,quantity:number){
    for(let ri of this.recipeIngredients){
      if(ri.name==name && ri.quantity==quantity)
      {
        this.recipeIngredients.remove(ri);
      }
    }
  }

  remove(index:number){
    this.recipeIngredients.splice(index,1);
  }
}
