import {Recipe} from '../../Models/Recipe/recipe.model';
import {RecipeIngredient} from '../../Models/Common/RecipeIngredient';

export const Recipes:Recipe[] = [
  new Recipe("Cake",
    "CakeDescription",
    "CakeOrigin",
    "10:10",
    [ new RecipeIngredient(1, "Tomato"),
      new RecipeIngredient(2, "Egg"),
      new RecipeIngredient(1, "Milk")
    ]),
  new Recipe("Pizza",
    "PizzaDescription",
    "PizzaOrigin",
    "10:10",
    [ new RecipeIngredient(1, "Flour"),
      new RecipeIngredient(2, "Sugar")
    ]),
  new Recipe("Pizza",
    "PizzaDescription PizzaDescription PizzaDescription PizzaDescription PizzaDescription",
    "PizzaOrigin",
    "10:10",
    [ new RecipeIngredient(1, "Flour"),
      new RecipeIngredient(2, "Sugar")
    ])
];
