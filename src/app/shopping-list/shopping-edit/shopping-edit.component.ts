import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameElementRef: ElementRef;
  @ViewChild('amountInput') amountElementRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  OnAddItem() {
    var newIngred = new Ingredient(this.nameElementRef.nativeElement.value, this.amountElementRef.nativeElement.value);
    this.ingredientAdded.emit(newIngred);
  }
}
