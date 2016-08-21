import {RecipeService} from "../recipe.service";
import {Recipe} from "../../../Models/Recipe/recipe.model";
import {RecipeIngredient} from "../../../Models/Common/RecipeIngredient";
import {Recipes} from "../../../MockData/Recipe/recipe.mock";


describe('Service:Recipe', function () {
  let service:RecipeService;


  beforeEach(function() {
    service = new RecipeService();
  });

  it('Test getRecipes function', () => {
    //get all mock recipes
    let allRecipesMock=Recipes;
    //get all recipes from service
    let allRecipes=service.getRecipes();

    expect(allRecipes).toEqual(allRecipesMock);
  });

  it('Test removeRecipe function', ()=>{
    //fetch first recipe
    let recipe:Recipe=service.getRecipeByIndex(1);

    //remove first recipe
    service.removeRecipe(0);

    //check if exist
    let recipes:Array<Recipe>=service.getRecipes();
    expect(recipes).toContain(recipe);
  });

  it('Test addRecipe function', ()=>{
    //new recipe
    let recipe:Recipe=new Recipe("nameTest",
      "descTest",
      "originTest",
      "10:10",
      [ new RecipeIngredient(1, "Tomato"),
        new RecipeIngredient(2, "Egg"),
        new RecipeIngredient(1, "Milk")
      ]);

    //add new recipe
    service.addRecipe(recipe);

    //check if is added
    expect(service.getRecipes()).toContain(recipe);
  });
  it('Test getRecipeByIndex function', ()=>{

    let recipes:Array<Recipe>=service.getRecipes();

    let recipeOnIndex:Recipe=service.getRecipeByIndex(1);

    expect(recipes[1]).toEqual(recipeOnIndex);
  });

});
