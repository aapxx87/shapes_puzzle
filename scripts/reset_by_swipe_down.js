// функция reset при touch движении экрана вниз

let startY = 0; // Начальная позиция Y касания
const threshold = 300; // Минимальное расстояние для активации функции



document.addEventListener('touchstart', function (e) {
  startY = e.touches[0].clientY;
}, false);



document.addEventListener('touchmove', function (e) {
  let touchY = e.touches[0].clientY;
  if (touchY - startY > threshold) {

    input_mov.value = 25

    const height = parseInt(getComputedStyle(square).height)
    console.log(height);

    if (height === 70) {

      square.style.top = '257px'
      square.style.left = '225px'
      square.style.transform = 'rotate(45deg)'

      triangle_1_big.style.top = '223px'
      triangle_1_big.style.left = '40px'
      triangle_1_big.style.transform = 'rotate(-135deg)'

      triangle_2_big.style.top = '123px'
      triangle_2_big.style.left = '139px'
      triangle_2_big.style.transform = 'rotate(-45deg)'

      triangle_1_medium.style.top = '293px'
      triangle_1_medium.style.left = '210px'
      triangle_1_medium.style.transform = 'rotate(-90deg)'

      triangle_1_small.style.top = '307px'
      triangle_1_small.style.left = '175px'
      triangle_1_small.style.transform = 'rotate(135deg)'

      triangle_2_small.style.top = '207px'
      triangle_2_small.style.left = '275px'
      triangle_2_small.style.transform = 'rotate(45deg)'

      parallelepiped.style.top = '343px'
      parallelepiped.style.left = '135px'
      parallelepiped.style.transform = 'rotate(0deg) skew(-45deg)'

      figures.square = {
        top: 257,
        left: 225,
        rotation_angle: 45,
      }


      figures.triangle_1_big = {
        top: 223,
        left: 40,
        rotation_angle: -135,
      }

      figures.triangle_2_big = {
        top: 123,
        left: 139,
        rotation_angle: -45,
      }

      figures.triangle_1_medium = {
        top: 293,
        left: 210,
        rotation_angle: -90,
      }

      figures.triangle_1_small = {
        top: 307,
        left: 175,
        rotation_angle: 135,
      }

      figures.triangle_2_small = {
        top: 207,
        left: 275,
        rotation_angle: 45,
      }


      figures.parallelepiped = {
        top: 343,
        left: 135,
        rotation_angle: -45,
      }


    } else {

      square.style.top = '267px'
      square.style.left = '233px'
      square.style.transform = 'rotate(45deg)'

      triangle_1_big.style.top = '238px'
      triangle_1_big.style.left = '75px'
      triangle_1_big.style.transform = 'rotate(-135deg)'

      triangle_2_big.style.top = '154px'
      triangle_2_big.style.left = '160px'
      triangle_2_big.style.transform = 'rotate(-45deg)'

      triangle_1_medium.style.top = '297px'
      triangle_1_medium.style.left = '221px'
      triangle_1_medium.style.transform = 'rotate(-90deg)'

      triangle_1_small.style.top = '309px'
      triangle_1_small.style.left = '190px'
      triangle_1_small.style.transform = 'rotate(135deg)'

      triangle_2_small.style.top = '225px'
      triangle_2_small.style.left = '276px'
      triangle_2_small.style.transform = 'rotate(45deg)'

      parallelepiped.style.top = '339px'
      parallelepiped.style.left = '156px'
      parallelepiped.style.transform = 'rotate(0deg) skew(-45deg)'

      figures.square = {
        top: 267,
        left: 233,
        rotation_angle: 45,
      }


      figures.triangle_1_big = {
        top: 238,
        left: 75,
        rotation_angle: -135,
      }

      figures.triangle_2_big = {
        top: 154,
        left: 160,
        rotation_angle: -45,
      }

      figures.triangle_1_medium = {
        top: 297,
        left: 221,
        rotation_angle: -90,
      }

      figures.triangle_1_small = {
        top: 309,
        left: 190,
        rotation_angle: 135,
      }

      figures.triangle_2_small = {
        top: 225,
        left: 276,
        rotation_angle: 45,
      }


      figures.parallelepiped = {
        top: 339,
        left: 156,
        rotation_angle: -45,
      }

    }


    // Предотвратите дальнейшее распространение события, если нужно
    // e.preventDefault();
  }
}, false);

document.addEventListener('touchend', function (e) {
  // Обработка окончания жеста
}, false);
