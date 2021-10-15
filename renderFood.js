export function renderFoods(food) {
    const foodLi = document.createElement('li');
    foodLi.classList.add('food-item');

    const foodImg = document.createElement('img');
    foodImg.src = food.img;

    const foodSpan = document.createElement('span');
    foodSpan.classList.add('food-name');
    foodSpan.textContent = food.name;

    foodLi.append(foodImg, foodSpan);

    return foodLi;
}
