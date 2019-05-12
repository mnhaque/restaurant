import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.sevice';
@Injectable()
// providedIn: 'root'
//})
export class RecipeService {
    constructor(private shoppingListService: ShoppingListService) { }
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Sandwitch',
            'Tasty chicken sandwitch',
            'https://ifoodreal.com/wp-content/uploads/2017/07/HEALTHY-DINNER-IDEAS.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 10)
            ]),
        new Recipe('burger',
            'Mutton burger',
            'https://ifoodreal.com/wp-content/uploads/2017/07/HEALTHY-DINNER-IDEAS.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 10)
            ]),
        new Recipe('Sub',
            'Peas veggie sub',
            'https://ifoodreal.com/wp-content/uploads/2017/07/HEALTHY-DINNER-IDEAS.jpg',
            [
                new Ingredient('Honey Oats bread', 1),
                new Ingredient('Peas', 1),
                new Ingredient('Veggies', 10)
            ])
    ];
    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(id: number): Recipe {
        return this.recipes[id];
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}