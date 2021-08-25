import {EventEmitter} from '@angular/core';
import {Recipe} from '../recipes/recipe.model'
export class RecipeService{
    private recipes: Recipe[]=[
        new Recipe('My Recipe1','Recipe Desc1','https://www.simplyrecipes.com/thmb/IbY_MK3pA1G_ZHzWltgZCxe_OUk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-vertical-a-1600-0eafb4cd27b74617abb36379751eed51.jpg'),
        new Recipe('My Recipe2','Recipe Desc2','https://www.simplyrecipes.com/thmb/IbY_MK3pA1G_ZHzWltgZCxe_OUk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-vertical-a-1600-0eafb4cd27b74617abb36379751eed51.jpg'),
      ];
 recipeSelected = new EventEmitter<Recipe>();
 getRecipes(){
     return this.recipes.slice();
 }

}