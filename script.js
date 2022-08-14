let foodPrice = 0
let drinkPrice = 0
let dessertPrice = 0
let msg = ''

function selectFood(food, price, name) {
    const foodCheckOut = document.querySelector('.food h2')
    foodCheckOut.innerHTML = name

    const removeSelected = document.querySelector('.selectedFood')
    if (removeSelected) {
    removeSelected.classList.remove('selectedFood') 
    }
    const selectedFood = document.querySelector(food)
    selectedFood.classList.add('selectedFood')
    foodPrice = price

    if (drinkPrice !== 0 && dessertPrice !== 0) {
        const button = document.querySelector('.footer div')
        button.innerHTML = 'Fechar pedido'
        button.classList.add('button')
    }
}

function selectDrink(Drink, price, name) {
    const drinkCheckOut = document.querySelector('.drink h2')
    drinkCheckOut.innerHTML = name

    const removeSelected = document.querySelector('.selectedDrink')
    if (removeSelected) {
    removeSelected.classList.remove('selectedDrink') 
    }
    const selectedDrink = document.querySelector(Drink)
    selectedDrink.classList.add('selectedDrink')
    drinkPrice = price


    if (foodPrice !== 0 && dessertPrice !== 0) {
        const button = document.querySelector('.footer div')
        button.innerHTML = 'Fechar pedido'
        button.classList.add('button')
    }
}

function selectDessert(Dessert, price, name) {
    const dessertCheckOut = document.querySelector('.dessert h2')
    dessertCheckOut.innerHTML = name

    const removeSelected = document.querySelector('.selectedDessert')
    if (removeSelected) {
    removeSelected.classList.remove('selectedDessert') 
    }
    const selectedDessert = document.querySelector(Dessert)
    selectedDessert.classList.add('selectedDessert')
    dessertPrice = price

    if (drinkPrice !== 0 && foodPrice !== 0) {
        const button = document.querySelector('.footer div')
        button.innerHTML = 'Fechar pedido'
        button.classList.add('button')
    }
}
const confirmation = document.querySelector('.confirmationBackground')

function end () {
    if (foodPrice !== 0 && drinkPrice !== 0 && dessertPrice !== 0) {
        const foodCheckOutPrice = document.querySelector('.food h3')
        const drinkCheckOutPrice = document.querySelector('.drink h3')
        const dessertCheckOutPrice = document.querySelector('.dessert h3')
        const total = document.querySelector('.total h3')
        const totalCheckout = `R$ ${(foodPrice + drinkPrice + dessertPrice).toFixed(2)}`

        total.innerHTML = totalCheckout.replace('.', ',')
        foodCheckOutPrice.innerHTML = String(foodPrice.toFixed(2)).replace('.',',')
        drinkCheckOutPrice.innerHTML = String(drinkPrice.toFixed(2)).replace('.',',')
        dessertCheckOutPrice.innerHTML = String(dessertPrice.toFixed(2)).replace('.',',')

        const foodName = document.querySelector('.food h2').innerHTML
        const drinkName = document.querySelector('.drink h2').innerHTML
        const dessertName = document.querySelector('.dessert h2').innerHTML
    
        msg = `Olá, gostaria de fazer o pedido:
        - Prato: ${foodName}
        - Bebida: ${drinkName}
        - Sobremesa: ${dessertName}
        Total: R$ ${(foodPrice + drinkPrice + dessertPrice).toFixed(2)}`
        
        msg = encodeURIComponent(msg)
        msg = 'https://wa.me/?text=' + msg
        
        confirmation.classList.remove('hidden')
    }
}

function cancel() {
    confirmation.classList.add('hidden')
}

function finish() {
    window.open(msg,'_blank')
    window.location.reload()
}