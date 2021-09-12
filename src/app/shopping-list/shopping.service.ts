import { Subject } from 'rxjs';
import {Ingredient} from '../shared/ingredient.model';
export class ShoppingService{
   private ingredients:Ingredient[]=[
        new Ingredient("Apple",5),
        new Ingredient("Tomato",15),
    
      ];
    ingredientsChanged = new Subject<Ingredient[]>();
    getIngredients(){
        return this.ingredients.slice();
    }
    addIngr(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addToSL(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}