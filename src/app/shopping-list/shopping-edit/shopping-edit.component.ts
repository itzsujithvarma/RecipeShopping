import { Component, ElementRef, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingName',{static:false}) ingNameRef:ElementRef
  @ViewChild('ingAmt',{static:false}) ingAmtRef:ElementRef
 
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
  }
  onSubmit(){
     const iname=this.ingNameRef.nativeElement.value;
     const iamount=this.ingAmtRef.nativeElement.value;
     const ing= new Ingredient(iname,iamount)
     this.shoppingService.addIngr(ing);
     
  }
}
