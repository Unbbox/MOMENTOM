const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];

// 랜덤 배경 이미지 선택
const chosenImage = images[Math.floor(Math.random() * images.length)];

const imgUrl = `url(img/${chosenImage})`;

console.log(imgUrl);

document.body.style.backgroundImage = imgUrl;
