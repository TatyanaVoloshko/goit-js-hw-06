function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttonChangeColor = document.querySelector('button.change-color')
const body = document.querySelector('body')
const valueColor = document.querySelector('span.color')


buttonChangeColor.addEventListener('click', element => {
  let colorBody = getRandomHexColor();
  body.style.backgroundColor = colorBody;
  valueColor.textContent = colorBody;
})