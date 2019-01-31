import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test','https://ifoodreal.com/wp-content/uploads/2017/07/HEALTHY-DINNER-IDEAS.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test','https://ifoodreal.com/wp-content/uploads/2017/07/HEALTHY-DINNER-IDEAS.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test','https://ifoodreal.com/wp-content/uploads/2017/07/HEALTHY-DINNER-IDEAS.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
