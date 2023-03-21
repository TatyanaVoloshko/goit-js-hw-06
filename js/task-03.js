const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listGallery = document.querySelector(".gallery");

const listImg = images 
.map((image) => `<li><img class="picture" src=${image.url} width = '500' alt='${image.alt}'></img></li>`)
.join("");

listGallery.insertAdjacentHTML("beforeend", listImg);
console.log(listGallery)

listGallery.style.listStyle = 'none'
listGallery.style.justifyContent = 'center'
listGallery.style.padding ='20px'
listGallery.style.display = 'flex'
listGallery.style.flexDirection = 'column'
listGallery.style.gap = '20px'

