import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import {Ingredient} from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
 editedSubscription:Subscription;
 editMode=false;
 editedItemIndex:number;
 editedItem:Ingredient;
 @ViewChild('f') slform:NgForm;
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
   this.editedSubscription= this.shoppingService.startedEditing.subscribe(
      (index:number)=>{
        this.editMode=true;
        this.editedItemIndex=index;
        this.editedItem=this.shoppingService.getIngredient(index);
        this.slform.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        })
      }
    )
  }
  onSubmit(form:NgForm){
     const f = form.value;
     const ing= new Ingredient(f.name,f.amount)
     if(this.editMode){
      this.shoppingService.updateIngredient(this.editedItemIndex,ing);
     }
     else{
     this.shoppingService.addIngr(ing);
     }
     this.editMode=false;
     form.reset()
  }
  onClear(){
    this.editMode=false;
    this.slform.reset();
  }
  onDelete(){
    this.shoppingService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  ngOnDestroy(){
    this.editedSubscription.unsubscribe();
  }
}
