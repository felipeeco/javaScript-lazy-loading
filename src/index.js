import { registerImage } from './lazy.js'

const maximun = 122;
const minimum = 1;

const random = () => Math.floor(Math.random() * (maximun - minimum) - minimum);

const createImageNode = () => {

    const container = document.createElement('div');
    container.className = "p-4";

    const imagen = document.createElement('img');
    imagen.className = 'mx-auto';
    imagen.width = '320';
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(imagen)

    return container;
}

const newImage = createImageNode();
const mountNode = document.querySelector('#images');
const buttonAddImage = document.querySelector('#add-image-button');
const actionAddImage = () => {
    const addImage = createImageNode();
    mountNode.append(addImage);
    registerImage(addImage);
}
buttonAddImage.addEventListener('click', actionAddImage);
mountNode.append(newImage);