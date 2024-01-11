function makeMovable(element, figureName) {
  let initialX = 0, initialY = 0;

  const updatePositionAndRotation = () => {
    let posX = figures[figureName].left, posY = figures[figureName].top;
    let rotation = figures[figureName].rotation_angle;

    element.style.top = `${posY}px`;
    element.style.left = `${posX}px`;
    element.style.transform = `rotate(${rotation}deg)`;
  };

  element.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      updatePositionAndRotation();

      let posX = figures[figureName].left, posY = figures[figureName].top;
      initialX = e.touches[0].clientX - posX;
      initialY = e.touches[0].clientY - posY;
    }
  });

  element.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (e.touches.length === 1) {
      let currentX = e.touches[0].clientX;
      let currentY = e.touches[0].clientY;
      let posX = currentX - initialX;
      let posY = currentY - initialY;

      element.style.top = `${posY}px`;
      element.style.left = `${posX}px`;

      figures[figureName].left = posX;
      figures[figureName].top = posY;
    }
  });
}

// Получение ссылок на элементы и применение функции makeMovable
const elements = {
  'square': document.querySelector('.square'),
  'triangle_1_big': document.querySelector('.triangle_1_big'),
  'triangle_2_big': document.querySelector('.triangle_2_big'),
  'triangle_1_medium': document.querySelector('.triangle_1_medium'),
  'triangle_1_small': document.querySelector('.triangle_1_small'),
  'triangle_2_small': document.querySelector('.triangle_2_small'),
  'parallelepiped': document.querySelector('.parallelepiped')
};

Object.keys(elements).forEach(key => {
  makeMovable(elements[key], key);
});









// function makeMovable(element, figureName) {
//   let posX = figures[figureName].left, posY = figures[figureName].top;
//   let initialX = 0, initialY = 0;

//   // Установка начального положения и угла поворота
//   element.style.top = `${posY}px`;
//   element.style.left = `${posX}px`;
//   element.style.transform = `rotate(${figures[figureName].rotation_angle}deg)`;

//   element.addEventListener('touchstart', (e) => {
//     if (e.touches.length === 1) {
//       initialX = e.touches[0].clientX - posX;
//       initialY = e.touches[0].clientY - posY;
//     }
//   });

//   element.addEventListener('touchmove', (e) => {
//     e.preventDefault();
//     if (e.touches.length === 1) {
//       let currentX = e.touches[0].clientX;
//       let currentY = e.touches[0].clientY;
//       posX = currentX - initialX;
//       posY = currentY - initialY;
//       element.style.top = `${posY}px`;
//       element.style.left = `${posX}px`;
//     }

//     figures[figureName].left = posX;
//     figures[figureName].top = posY;
//   });
// }

// // Применение функции makeMovable к каждому элементу
// const elements = {
//   'square': document.querySelector('.square'),
//   'triangle_1_big': document.querySelector('.triangle_1_big'),
//   'triangle_2_big': document.querySelector('.triangle_2_big'),
//   'triangle_1_medium': document.querySelector('.triangle_1_medium'),
//   'triangle_1_small': document.querySelector('.triangle_1_small'),
//   'triangle_2_small': document.querySelector('.triangle_2_small'),
//   'parallelepiped': document.querySelector('.parallelepiped')
// };


// Object.keys(elements).forEach(key => {
//   makeMovable(elements[key], key);
// });




