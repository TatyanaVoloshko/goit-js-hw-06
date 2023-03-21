const changeInput = document.querySelector('input#font-size-control');
const changeFontSize = document.querySelector('span#text');

changeInput.addEventListener('change', event => {
    changeFontSize.style.fontSize = `${event.target.value}px`
});