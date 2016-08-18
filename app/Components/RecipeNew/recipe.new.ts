import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import {IngredientService} from "../../Services/Ingredient/ingredient.service";
import {IngredientList} from "../IngredientList/ingredient.list";
import {Ingredient} from "../../Models/Ingredient/ingredient.model";
import {RecipeIngredient} from '../../Models/Common/RecipeIngredient';
import {RecipeService} from '../../Services/Recipe/recipe.service';
import {ValidationService} from '../../Services/Validation/validation.service';


@Component({
  selector: 'new-recipe',
  templateUrl: '/app/Components/RecipeNew/recipe.new.html',
  providers:[IngredientService,RecipeService],
  directives:[IngredientList]
})
export class NewRecipeComponent {

  ingredients = new Array<>();
  newRecipeIngredients= new Array<>();
  newIngredientForm: any;
  newRecipeForm: any;

  constructor(private formBuilder: FormBuilder,public ingredientService:IngredientService, private recipeService:RecipeService,private router:Router){

    this.ingredients=ingredientService.getIngredients();

    this.newRecipeForm=this.formBuilder.group({
      'name': ['',Validators.required],
      'description':['',Validators.required],
      'origin':'',
      'hours':'',
      'minutes':['',Validators.required],
      'ContainingIngredients':[this.newRecipeIngredients,Validators.required]
    });

    this.newIngredientForm=this.formBuilder.group({
      'quantity': ['1',Validators.required],
      'ingredientName':['Sugar',Validators.required]
    });

  }

  AddNewIngredient(){
    if(this.newIngredientForm.valid) {
      let newIngredient = this.ingredientService.getIngredientByName(this.newIngredientForm.value.ingredientName);
      this.newRecipeIngredients.push(new RecipeIngredient(this.newIngredientForm.value.quantity, newIngredient.name));

    }
  }

  AddNewRecipe(){
    if(this.newRecipeForm.valid) {
      this.recipeService.addRecipe(this.newRecipeForm.value);
    }
  }

  NavigateToIndexPage(){
    this.router.navigate(['/Index']);
  }

}
