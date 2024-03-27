

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