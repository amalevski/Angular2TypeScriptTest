import {IngredientService} from "../ingredient.service";
import {Ingredient} from "../../../Models/Ingredient/ingredient.model";
import {Ingredients} from "../../../MockData/Ingredient/ingredient.mock";


describe('Service:Ingredient', function () {
  let service:IngredientService;

  beforeEach(function() {
    service = new IngredientService();
  });

  it('Test getIngredients function', () => {
    //get mock data
    let allMockIngredients=Ingredients;
    // get all ingredients from service
    let allIngredients=service.getIngredients();
    //check whether are equal
    expect(allMockIngredients).toEqual(allIngredients);
  });

  it('Test getIngredientByName function', ()=>{
    let ingredient:Ingredient;
    //get ingredient by name
    ingredient=service.getIngredientByName('Tomato');
    //check if the fetched ingredient`s name is tomato
    expect(ingredient.name).toEqual('Tomato');

  });

  it('Test saveIngredient function', () => {
    service.saveIngredient('ice');
    let allIngredients:Array<Ingredient>=service.getIngredients();
    expect(allIngredients).toContain({name:'ice'});
  });

});
