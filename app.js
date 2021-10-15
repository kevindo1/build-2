import { foods } from "./food.js";
import { renderFoods } from "./renderFood.js";

const foodList = document.getElementById('food-list')

for (let food of foods) {
    const foodLi = renderFoods(food);

    foodList.append(foodLi);
}
