import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.sevice';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameElementRef: ElementRef;
  @ViewChild('amountInput') amountElementRef: ElementRef;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
  OnAddItem() {
    var newIngred = new Ingredient(this.nameElementRef.nativeElement.value, this.amountElementRef.nativeElement.value);
    this.shoppingListService.addIngredient(newIngred);
  }
}
