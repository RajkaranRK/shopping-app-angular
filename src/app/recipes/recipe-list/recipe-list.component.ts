
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  demoImageUrl: string = 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/12/4/0/WU1504H_lighter-asian-noodle-salad_s4x3.jpg.rend.hgtvcom.826.620.suffix/1480899697405.jpeg';

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', this.demoImageUrl),
    new Recipe('Another Test Recipe', 'This is simply a another test', this.demoImageUrl)
  ];


  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {

  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
