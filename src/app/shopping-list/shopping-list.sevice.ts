import { Ingredient } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];
      getIngredients(){
          return this.ingredients.slice();
      }
      addIngredient(ing:Ingredient){
          this.ingredients.push(ing);
          this.ingredientsChanged.next(this.ingredients.slice());
      }
      addIngredients(ings:Ingredient[]){
          this.ingredients.push(...ings);
          this.ingredientsChanged.next(this.ingredients.slice());
      }
}