import { EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
export class ShoppingService{
   private ingredients:Ingredient[]=[
        new Ingredient("Apple",5),
        new Ingredient("Tomato",15),
    
      ];
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    getIngredients(){
        return this.ingredients.slice();
    }
    addIngr(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}