import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
export class ShoppingListService {

    ingredientChange = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatao', 10)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        // informing the ingredient list has been changed
        this.ingredientChange.emit(this.ingredients.slice());
    }
}