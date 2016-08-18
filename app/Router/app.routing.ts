import { Routes, RouterModule } from '@angular/router';
import {NewRecipeComponent} from '../Components/RecipeNew/recipe.new';
import {RecipeListComponent} from '../Components/RecipeList/recipe.list';
import {RecipePreviewComponent} from '../Components/RecipePreview/recipe.preview';

const appRoutes: Routes = [
  { path:'Recipe/:index',component:RecipePreviewComponent },
  { path: 'NewRecipe', component: NewRecipeComponent },
  { path: 'Index', component: RecipeListComponent },
  { path: '**', component: RecipeListComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
