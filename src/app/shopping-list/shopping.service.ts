import { Subject } from 'rxjs';
import {Ingredient} from '../shared/ingredient.model';
export class ShoppingService{
   private ingredients:Ingredient[]=[
        new Ingredient("Apple",5),
        new Ingredient("Tomato",15),
    
      ];
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing= new Subject<number>();
    getIngredients(){
        return this.ingredients.slice();
    }
    getIngredient(id:number){
        return this.ingredients[id];
    }
    addIngr(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addToSL(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    updateIngredient(index:number,newIngredient:Ingredient){
        this.ingredients[index]=newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}