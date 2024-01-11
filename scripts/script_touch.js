

let initialX = 0, initialY = 0, offsetX = 0, offsetY = 0;

square.addEventListener('touchstart', (e) => {
  // Начальные координаты касания
  initialX = e.touches[0].clientX - offsetX;
  initialY = e.touches[0].clientY - offsetY;
});

square.addEventListener('touchmove', (e) => {
  e.preventDefault(); // Предотвращение стандартного поведения касания

  // Текущие координаты касания
  let currentX = e.touches[0].clientX;
  let currentY = e.touches[0].clientY;

  // Вычисление смещения
  offsetX = currentX - initialX;
  offsetY = currentY - initialY;

  // Перемещение элемента
  square.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

square.addEventListener('touchend', () => {
  // Окончательное положение после перемещения
  initialX = offsetX;
  initialY = offsetY;
});
