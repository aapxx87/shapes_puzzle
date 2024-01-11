
function makeMovable(element) {
  let initialX = 0, initialY = 0, offsetX = 0, offsetY = 0;

  element.addEventListener('touchstart', (e) => {
    initialX = e.touches[0].clientX - offsetX;
    initialY = e.touches[0].clientY - offsetY;
  });

  element.addEventListener('touchmove', (e) => {
    e.preventDefault(); // Предотвращение стандартного поведения касания

    let currentX = e.touches[0].clientX;
    let currentY = e.touches[0].clientY;

    offsetX = currentX - initialX;
    offsetY = currentY - initialY;

    element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });

  element.addEventListener('touchend', () => {
    initialX = offsetX;
    initialY = offsetY;
  });
}

// Получение элементов
// const square = document.querySelector('.square');
// const triangle_1_big = document.querySelector('.triangle_1_big');
// const triangle_2_big = document.querySelector('.triangle_2_big');
// const triangle_1_medium = document.querySelector('.triangle_1_medium');
// const triangle_1_small = document.querySelector('.triangle_1_small');
// const triangle_2_small = document.querySelector('.triangle_2_small');
// const parallelepiped = document.querySelector('.parallelepiped');

// Применение функции к каждой фигуре
makeMovable(square);
makeMovable(triangle_1_big);
makeMovable(triangle_2_big);
makeMovable(triangle_1_medium);
makeMovable(triangle_1_small);
makeMovable(triangle_2_small);
makeMovable(parallelepiped);