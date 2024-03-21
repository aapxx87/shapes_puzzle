// функция reset при touch движении экрана вниз

let startY = 0; // Начальная позиция Y касания
const threshold = 300; // Минимальное расстояние для активации функции



document.addEventListener('touchstart', function (e) {
  startY = e.touches[0].clientY;
}, false);



document.addEventListener('touchmove', function (e) {
  let touchY = e.touches[0].clientY;
  if (touchY - startY > threshold) {
    // Запустите вашу функцию здесь



    input_mov.value = 25


    square.style.top = '256px'
    square.style.left = '225px'
    square.style.transform = 'rotate(45deg)'

    triangle_1_big.style.top = '223px'
    triangle_1_big.style.left = '37px'
    triangle_1_big.style.transform = 'rotate(-135deg)'

    triangle_2_big.style.top = '120px'
    triangle_2_big.style.left = '138px'
    triangle_2_big.style.transform = 'rotate(-45deg)'

    triangle_1_medium.style.top = '295px'
    triangle_1_medium.style.left = '210px'
    triangle_1_medium.style.transform = 'rotate(-90deg)'

    triangle_1_small.style.top = '307px'
    triangle_1_small.style.left = '175px'
    triangle_1_small.style.transform = 'rotate(135deg)'

    triangle_2_small.style.top = '204px'
    triangle_2_small.style.left = '275px'
    triangle_2_small.style.transform = 'rotate(45deg)'

    parallelepiped.style.top = '345px'
    parallelepiped.style.left = '135px'
    parallelepiped.style.transform = 'rotate(0deg) skew(-45deg)'






    figures.square = {
      top: 256,
      left: 225,
      rotation_angle: 45,
    }


    figures.triangle_1_big = {
      top: 223,
      left: 37,
      rotation_angle: -135,
    }

    figures.triangle_2_big = {
      top: 120,
      left: 138,
      rotation_angle: -45,
    }

    figures.triangle_1_medium = {
      top: 295,
      left: 210,
      rotation_angle: -90,
    }

    figures.triangle_1_small = {
      top: 307,
      left: 175,
      rotation_angle: 135,
    }

    figures.triangle_2_small = {
      top: 204,
      left: 275,
      rotation_angle: 45,
    }


    figures.parallelepiped = {
      top: 345,
      left: 135,
      rotation_angle: -45,
    }


    // Добавьте виброотклик

    if ('vibrate' in navigator) {
      navigator.vibrate(200); // Вибрация на 200 миллисекунд
    }


    // Предотвратите дальнейшее распространение события, если нужно
    // e.preventDefault();
  }
}, false);

document.addEventListener('touchend', function (e) {
  // Обработка окончания жеста
}, false);
