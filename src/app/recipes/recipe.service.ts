import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from '../recipes/recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
@Injectable()
export class RecipeService{
    constructor(private shoppingService:ShoppingService){}

    private recipes: Recipe[]=[
        new Recipe('Potato Wedges',
        'Ola! Awesome wedges',
        'https://www.simplyrecipes.com/thmb/IbY_MK3pA1G_ZHzWltgZCxe_OUk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-vertical-a-1600-0eafb4cd27b74617abb36379751eed51.jpg',
        [
            new Ingredient('Potatos',2),
            new Ingredient('Chillies',2)
        ]
        ),
        new Recipe('Chicken Burger',
        'My Chicken Burger',
        'https://www.thespruceeats.com/thmb/vJUFf6L4p8y9Cn_1pE9Z7Ua9uok=/3000x2001/filters:fill(auto,1)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg',
        [
            new Ingredient('Buns',2),
            new Ingredient('Chicken Patty',1),
            new Ingredient('Onion rings',2)
        ]
        ),
      ];
 recipeSelected = new EventEmitter<Recipe>();
 getRecipes(){
     return this.recipes.slice();
 }
 getRecipeById(id:number){
   return this.recipes[id];
 }
  addToSL(ingredients:Ingredient[]){
    this.shoppingService.addToSL(ingredients);
  }
}