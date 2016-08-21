import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {IngredientService} from "../../Services/Ingredient/ingredient.service";
import {IngredientList} from "../IngredientList/ingredient.list";
import {Ingredient} from "../../Models/Ingredient/ingredient.model";
import {RecipeIngredient} from '../../Models/Common/RecipeIngredient';
import {RecipeService} from '../../Services/Recipe/recipe.service';
import {Recipe} from '../../Models/Recipe/recipe.model';
import { TimeValidators } from '../../Validators/TimeValidators/time.validators';


@Component({
  selector: 'new-recipe',
  templateUrl: '/app/Components/RecipeNew/recipe.new.html',
  providers:[IngredientService,RecipeService],
  directives:[IngredientList]
})
export class NewRecipeComponent {

  ingredients = new Array<any>();
  newRecipeIngredients= new Array<any>();
  newIngredientForm: FormGroup;
  newRecipeForm: FormGroup;
  showAllErrors : boolean = false;

  constructor(private formBuilder: FormBuilder,public ingredientService:IngredientService, private recipeService:RecipeService,private router:Router){

    this.ingredients=ingredientService.getIngredients();

    this.newRecipeForm=this.formBuilder.group({
      'name': ['',Validators.required],
      'description':['',Validators.required],
      'origin':'',
      'time':['', Validators.compose([TimeValidators.Format, TimeValidators.Minutes])],
      'ContainingIngredients':this.newRecipeIngredients
    });

    this.newIngredientForm=this.formBuilder.group({
      'quantity': ['1',Validators.required],
      'ingredientName':['Sugar',Validators.required]
    });

  }

  ShouldShowErrorMessageFor(name : string){
    return (! this.newRecipeForm.controls[name].valid ) && ( this.showAllErrors || this.newRecipeForm.controls[name].dirty);
  }

  AddNewIngredient(){
    if(this.newIngredientForm.valid) {
      let newIngredient = this.ingredientService.getIngredientByName(this.newIngredientForm.value.ingredientName);
      this.newRecipeIngredients.push(new RecipeIngredient(this.newIngredientForm.value.quantity, newIngredient.name));

    }
  }

  AddNewRecipe(){
    if(this.newRecipeForm.valid) {
      this.showAllErrors = false;
      this.recipeService.addRecipe(new Recipe(this.newRecipeForm.value.name,
        this.newRecipeForm.value.description,
        this.newRecipeForm.value.origin,
        this.newRecipeForm.value.time,
        this.newRecipeIngredients));
      this.newRecipeForm.reset();
      this.newRecipeIngredients = new Array<any>();
    } else {
      this.showAllErrors = true;
      console.log(this.newRecipeForm);
    }
  }

  NavigateToIndexPage(){
    this.router.navigate(['/Index']);
  }

}
