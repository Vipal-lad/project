import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  Recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://images.notquitenigella.com/images/easy-lamb-ribs-recipe/ll.jpg'),
    new Recipe('A Test Recipe','This is simply a test','https://images.notquitenigella.com/images/easy-lamb-ribs-recipe/ll.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
