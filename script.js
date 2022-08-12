function selectFood(food) {
    const removeSelected = document.querySelector('.selectedFood')
    if (removeSelected) {
    removeSelected.classList.remove('selectedFood') 
    }
    const selectedFood = document.querySelector(food)
    selectedFood.classList.add('selectedFood')
}

function selectDrink(Drink) {
    const removeSelected = document.querySelector('.selectedDrink')
    if (removeSelected) {
    removeSelected.classList.remove('selectedDrink') 
    }
    const selectedDrink = document.querySelector(Drink)
    selectedDrink.classList.add('selectedDrink')
}

function selectDessert(Dessert) {
    const removeSelected = document.querySelector('.selectedDessert')
    if (removeSelected) {
    removeSelected.classList.remove('selectedDessert') 
    }
    const selectedDessert = document.querySelector(Dessert)
    selectedDessert.classList.add('selectedDessert')
}


