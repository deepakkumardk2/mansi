const images = [
    './maan1.jpg',
    './maan2.jpg',
    './maan3.jpg',
    './maan4.jpg',
    './maan5.jpg'
];

let currentIndex = 0;
const imageElement = document.getElementById('slider-image');

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
}

setInterval(changeImage, 2000);



