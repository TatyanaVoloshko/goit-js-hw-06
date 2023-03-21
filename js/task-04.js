const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -=1;
    },
};

const displayCounter = document.querySelector('#value')
const buttonMinus = document.querySelector('button[data-action="decrement"]')
const buttonPlus = document.querySelector('button[data-action="increment"]')

buttonPlus.addEventListener('click', function() {
    counterValue.increment();
    console.log(counter);
    displayCounter.textContent = counterValue.value;
});

buttonMinus.addEventListener('click', function() {
    counterValue.decrement();
    console.log(counter);
    displayCounter.textContent = counterValue.value;
    
});

