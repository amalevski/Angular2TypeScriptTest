import {Recipe} from '../../Models/Recipe/recipe.model';
import {RecipeIngredient} from '../../Models/Common/RecipeIngredient';

export const Recipes: Recipe[]=[
  { name: "Cake",description:"CakeDescription",origin:"CakeOrigin",hours:"01",minutes:"10",ContainingIngredients:[new RecipeIngredient(1,"Tomato"), new RecipeIngredient(2,"Egg"),new RecipeIngredient(1,"Milk")]},
  { name: "Pizza",description:"PizzaDescription",origin:"PizzaOrigin",hours:"02",minutes:"12",ContainingIngredients:[new RecipeIngredient(1,"Flour"), new RecipeIngredient(2,"Sugar")]}
];
