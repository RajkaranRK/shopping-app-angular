import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('Burger',
         'Chicken Burger with french fries',
         'https://93546-d-c.ooyala.com/content/images/1143/263141_636x357.jpg',
         [
             new Ingredient('Meat', 1),
             new Ingredient('Bund', 2),
             new Ingredient('Cheez', 2)
         ]),
        new Recipe('Tasty Schintelz',
        'A super tasty schintelz awesome!!',
        'https://media.timeout.com/images/103064909/630/472/image.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French fries', 20)
        ])
    ];

    recipeSelected = new EventEmitter<Recipe>();

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

}