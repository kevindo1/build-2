const foodList = document.getElementById('food-list')

export function renderFoods(food) {
    const foodLi = document.createElement('li');
    foodLi.classList.add('food-item')

    const foodImg = document.createElement('img');
    foodImg.src = food.src;

    const foodSpan = document.createElement('span');
    foodSpan.textContent = food.name;
}