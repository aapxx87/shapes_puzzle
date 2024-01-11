function getAngle(touches) {
  let x1 = touches[0].clientX;
  let y1 = touches[0].clientY;
  let x2 = touches[1].clientX;
  let y2 = touches[1].clientY;
  return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
}

function makeInteractive(element, figureName) {
  let posX = figures[figureName].left, posY = figures[figureName].top;
  let rotation = figures[figureName].rotation_angle;
  let initialX = 0, initialY = 0, initialAngle = 0;

  element.style.transform = `translate(${posX}px, ${posY}px) rotate(${rotation}deg)`;

  element.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      initialX = e.touches[0].clientX - posX;
      initialY = e.touches[0].clientY - posY;
    } else if (e.touches.length === 2) {
      initialAngle = getAngle(e.touches);
    }
  });

  element.addEventListener('touchmove', (e) => {
    e.preventDefault();

    if (e.touches.length === 1) {
      let currentX = e.touches[0].clientX;
      let currentY = e.touches[0].clientY;
      posX = currentX - initialX;
      posY = currentY - initialY;
      element.style.transform = `translate(${posX}px, ${posY}px) rotate(${rotation}deg)`;
    } else if (e.touches.length === 2) {
      let currentAngle = getAngle(e.touches);
      rotation += currentAngle - initialAngle;
      initialAngle = currentAngle;
      element.style.transform = `translate(${posX}px, ${posY}px) rotate(${rotation}deg)`;
    }

    figures[figureName].left = posX;
    figures[figureName].top = posY;
    figures[figureName].rotation_angle = rotation;
  });

  element.addEventListener('touchend', (e) => {
    if (e.touches.length < 2) {
      rotation += getAngle(e.changedTouches);
      initialAngle = 0;
    }
  });
}

// Получение ссылок на элементы и применение функции makeInteractive
// const square = document.querySelector('.square');
// const triangle_1_big = document.querySelector('.triangle_1_big');
// const triangle_2_big = document.querySelector('.triangle_2_big');
// const triangle_1_medium = document.querySelector('.triangle_1_medium');
// const triangle_1_small = document.querySelector('.triangle_1_small');
// const triangle_2_small = document.querySelector('.triangle_2_small');
// const parallelepiped = document.querySelector('.parallelepiped');

makeInteractive(square, 'square');
makeInteractive(triangle_1_big, 'triangle_1_big');
makeInteractive(triangle_2_big, 'triangle_2_big');
makeInteractive(triangle_1_medium, 'triangle_1_medium');
makeInteractive(triangle_1_small, 'triangle_1_small');
makeInteractive(triangle_2_small, 'triangle_2_small');
makeInteractive(parallelepiped, 'parallelepiped');











// function makeMovable(element) {
//   let initialX = 0, initialY = 0, offsetX = 0, offsetY = 0;

//   element.addEventListener('touchstart', (e) => {
//     initialX = e.touches[0].clientX - offsetX;
//     initialY = e.touches[0].clientY - offsetY;
//   });

//   element.addEventListener('touchmove', (e) => {
//     e.preventDefault(); // Предотвращение стандартного поведения касания

//     let currentX = e.touches[0].clientX;
//     let currentY = e.touches[0].clientY;

//     offsetX = currentX - initialX;
//     offsetY = currentY - initialY;

//     element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
//   });

//   element.addEventListener('touchend', () => {
//     initialX = offsetX;
//     initialY = offsetY;
//   });
// }



// // Применение функции к каждой фигуре
// makeMovable(square);
// makeMovable(triangle_1_big);
// makeMovable(triangle_2_big);
// makeMovable(triangle_1_medium);
// makeMovable(triangle_1_small);
// makeMovable(triangle_2_small);
// makeMovable(parallelepiped);




// function makeRotatable(element) {
//   let initialAngle = 0;
//   let rotation = 0;

//   function getAngle(touches) {
//     let x1 = touches[0].clientX;
//     let y1 = touches[0].clientY;
//     let x2 = touches[1].clientX;
//     let y2 = touches[1].clientY;

//     return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
//   }

//   element.addEventListener('touchstart', (e) => {
//     if (e.touches.length === 2) {
//       initialAngle = getAngle(e.touches);
//     }
//   });

//   element.addEventListener('touchmove', (e) => {
//     if (e.touches.length === 2) {
//       e.preventDefault(); // Предотвращение стандартного поведения касания
//       let currentAngle = getAngle(e.touches);
//       let deltaAngle = currentAngle - initialAngle;

//       element.style.transform = `rotate(${rotation + deltaAngle}deg)`;
//     }
//   });

//   element.addEventListener('touchend', (e) => {
//     if (e.touches.length < 2) {
//       rotation += getAngle(e.changedTouches);
//       initialAngle = 0;
//     }
//   });
// }

// // Применение функции к элементам
// const elements = [square, triangle_1_big, triangle_2_big, triangle_1_medium, triangle_1_small, triangle_2_small, parallelepiped];
// elements.forEach(makeRotatable);
