

let startX;




menu_container.addEventListener('touchstart', function (e) {
  startX = e.touches[0].clientX;
}, false);

menu_container.addEventListener('touchend', function (e) {
  const endX = e.changedTouches[0].clientX;
  const moveLength = startX - endX;

  // Если смахивание было достаточно длинным влево, сдвигаем контейнер
  if (moveLength > 50) { // 50px как пример минимальной длины свайпа
    this.style.left = '-400px' // Сдвигаем контейнер
  }
}, false);



backgrounds_container.addEventListener('touchstart', function (e) {
  startX = e.touches[0].clientX;
}, false);

backgrounds_container.addEventListener('touchend', function (e) {
  const endX = e.changedTouches[0].clientX;
  const moveLength = startX - endX;

  // Если смахивание было достаточно длинным влево, сдвигаем контейнер
  if (moveLength > 50) { // 50px как пример минимальной длины свайпа
    this.style.left = '-400px' // Сдвигаем контейнер
  }
}, false);







let startY2;

container_playground.addEventListener('touchstart', function (e) {
  startY2 = e.touches[0].clientY;
}, false);

container_playground.addEventListener('touchend', function (e) {
  const endY = e.changedTouches[0].clientY;
  const moveLength = startY2 - endY;

  // Если смахивание было достаточно длинным вверх, сдвигаем контейнер вверх
  if (moveLength > 20) { // 50px как пример минимальной длины свайпа вверх
    this.style.top = '-70px'; // Сдвигаем контейнер вверх
  } else if (moveLength < -20) { // 50px как пример минимальной длины свайпа вниз
    this.style.top = '0px'; // Сдвигаем контейнер вниз (или в исходное положение)
  }
}, false);



