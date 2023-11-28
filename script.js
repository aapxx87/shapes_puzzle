// Figures
const square = document.querySelector('.square')
const triangle_1 = document.querySelector('.triangle_1')
const triangle_2 = document.querySelector('.triangle_2')
const triangle_1_medium = document.querySelector('.triangle_1_medium')
const triangle_1_small = document.querySelector('.triangle_1_small')
const triangle_2_small = document.querySelector('.triangle_2_small')
const parallelepiped = document.querySelector('.parallelepiped')

// Inputs
const input_mov = document.querySelector('.input_mov')
const input_rot = document.querySelector('.input_rot')
const btn_save = document.querySelector('.btn_save')
const btn_mov = document.querySelector('.btn_mov')


// Выбор активной фигуры дял перемещения 
let active_figure = 'square'




// единицы на сколько px двигается каждая фигура при однократном нажатии на клавишу
let movLength = 5
let rotateLength = 2







// Переменные сохраняющие позицию Square
let square_top = 0
let square_left = 0
let square_currentRotation = 0

// Переменные сохраняющие позицию Triangle_1
let triangle_top = 0
let triangle_left = 100
let triangle_currentRotation = 0

// Переменные сохраняющие позицию Triangle_2
let triangle_2_top = 0
let triangle_2_left = 300
let triangle_2_currentRotation = 0

// Переменные сохраняющие позицию Triangle_1_medium
let triangle_1_medium_top = 300
let triangle_1_medium_left = 0
let triangle_1_medium_currentRotation = 0

// Переменные сохраняющие позицию Triangle_1_small
let triangle_1_small_top = 200
let triangle_1_small_left = 0
let triangle_1_small_currentRotation = 0

// Переменные сохраняющие позицию Triangle_2_small
let triangle_2_small_top = 100
let triangle_2_small_left = 0
let triangle_2_small_currentRotation = 0

// Переменные сохраняющие позицию parallelepiped
let parallelepiped_top = 420
let parallelepiped_left = 25
let parallelepiped_currentRotation = 0
// let parallelepiped_transform = 'skew(-45deg)'




btn_mov.addEventListener('click', function () {

  square.style.top = '300px'
  square.style.left = '300px'
  square.style.transform = 'rotate(45deg)'

  triangle_1.style.top = '115px'
  triangle_1.style.left = '265px'
  triangle_1.style.transform = 'rotate(-45deg)'


  triangle_2.style.top = '405px'
  triangle_2.style.left = '265px'
  triangle_2.style.transform = 'rotate(135deg)'
})









// Обработчик событий значений перемещенияи/поворота
btn_save.addEventListener('click', function () {
  movLength = Number(input_mov.value)
  rotateLength = Number(input_rot.value)
})





// функция удаления активного бордера со всех фигур
const remove_all_figures_active_border = function () {
  square.classList.remove('active_border');
  triangle_1.classList.remove('active_border');
  triangle_2.classList.remove('active_border');
  triangle_1_small.classList.remove('active_border');
  triangle_2_small.classList.remove('active_border');
  triangle_1_medium.classList.remove('active_border');
  parallelepiped.classList.remove('active_border');
}






// Выбор текущей фигуры

square.addEventListener('click', function () {
  active_figure = 'square'

  remove_all_figures_active_border()

  square.classList.add('active_border');

  console.log('Active figure - SQUARE');
})


triangle_1.addEventListener('click', function () {
  active_figure = 'triangle_1'

  remove_all_figures_active_border()

  triangle_1.classList.add('active_border');

  console.log('Active figure - TRIANGLE_1')
})


triangle_2.addEventListener('click', function () {
  active_figure = 'triangle_2'

  remove_all_figures_active_border()

  triangle_2.classList.add('active_border');

  console.log('Active figure - TRIANGLE_2')
})

triangle_1_medium.addEventListener('click', function () {
  active_figure = 'triangle_1_medium'

  remove_all_figures_active_border()

  triangle_1_medium.classList.add('active_border');

  console.log('Active figure - triangle_1_small')
})


triangle_1_small.addEventListener('click', function () {
  active_figure = 'triangle_1_small'

  remove_all_figures_active_border()

  triangle_1_small.classList.add('active_border');

  console.log('Active figure - triangle_1_small')
})


triangle_2_small.addEventListener('click', function () {
  active_figure = 'triangle_2_small'

  remove_all_figures_active_border()

  triangle_2_small.classList.add('active_border');

  console.log('Active figure - triangle_1_small')
})


parallelepiped.addEventListener('click', function () {
  active_figure = 'parallelepiped'

  remove_all_figures_active_border()

  parallelepiped.classList.add('active_border');

  console.log('Active figure - parallelepiped')
})







// Перемещения фигур

document.addEventListener('keydown', function (event) {

  if (active_figure === 'square' && event.keyCode === 38) {
    // console.log('Стрелка вверх нажата');

    square_top = square_top - movLength
    square.style.top = square_top + 'px';

  }

  if (active_figure === 'triangle_1' && event.keyCode === 38) {
    // console.log('Стрелка вверх нажата');

    triangle_top = triangle_top - movLength
    triangle_1.style.top = triangle_top + 'px';

  }

  if (active_figure === 'triangle_2' && event.keyCode === 38) {
    // console.log('Стрелка вверх нажата');

    triangle_2_top = triangle_2_top - movLength
    triangle_2.style.top = triangle_2_top + 'px';

  }

  if (active_figure === 'triangle_1_small' && event.keyCode === 38) {
    // console.log('Стрелка вверх нажата');

    triangle_1_small_top = triangle_1_small_top - movLength
    triangle_1_small.style.top = triangle_1_small_top + 'px';

  }

  if (active_figure === 'triangle_2_small' && event.keyCode === 38) {
    // console.log('Стрелка вверх нажата');

    triangle_2_small_top = triangle_2_small_top - movLength
    triangle_2_small.style.top = triangle_2_small_top + 'px';

  }

  if (active_figure === 'triangle_1_medium' && event.keyCode === 38) {
    // console.log('Стрелка вверх нажата');

    triangle_1_medium_top = triangle_1_medium_top - movLength
    triangle_1_medium.style.top = triangle_1_medium_top + 'px';

  }

  if (active_figure === 'parallelepiped' && event.keyCode === 38) {
    // console.log('Стрелка вверх нажата');

    parallelepiped_top = parallelepiped_top - movLength
    parallelepiped.style.top = parallelepiped_top + 'px';

  }

});


document.addEventListener('keydown', function (event) {

  if (active_figure === 'square' && event.keyCode === 40) {
    // console.log('Стрелка вниз нажата');

    square_top = square_top + movLength
    square.style.top = square_top + 'px';
  }

  if (active_figure === 'triangle_1' && event.keyCode === 40) {
    // console.log('Стрелка вниз нажата');

    triangle_top = triangle_top + movLength
    triangle_1.style.top = triangle_top + 'px';
  }

  if (active_figure === 'triangle_2' && event.keyCode === 40) {
    // console.log('Стрелка вниз нажата');

    triangle_2_top = triangle_2_top + movLength
    triangle_2.style.top = triangle_2_top + 'px';
  }

  if (active_figure === 'triangle_1_small' && event.keyCode === 40) {
    // console.log('Стрелка вверх нажата');

    triangle_1_small_top = triangle_1_small_top + movLength
    triangle_1_small.style.top = triangle_1_small_top + 'px';

  }

  if (active_figure === 'triangle_2_small' && event.keyCode === 40) {
    // console.log('Стрелка вверх нажата');

    triangle_2_small_top = triangle_2_small_top + movLength
    triangle_2_small.style.top = triangle_2_small_top + 'px';

  }

  if (active_figure === 'triangle_1_medium' && event.keyCode === 40) {
    // console.log('Стрелка вверх нажата');

    triangle_1_medium_top = triangle_1_medium_top + movLength
    triangle_1_medium.style.top = triangle_1_medium_top + 'px';

  }

  if (active_figure === 'parallelepiped' && event.keyCode === 40) {
    // console.log('Стрелка вверх нажата');

    parallelepiped_top = parallelepiped_top + movLength
    parallelepiped.style.top = parallelepiped_top + 'px';

  }

});


document.addEventListener('keydown', function (event) {

  if (active_figure === 'square' && event.keyCode === 37) {
    // console.log('Стрелка влево нажата');

    square_left = square_left - movLength
    square.style.left = square_left + 'px';
  }

  if (active_figure === 'triangle_1' && event.keyCode === 37) {
    // console.log('Стрелка влево нажата');

    triangle_left = triangle_left - movLength
    triangle_1.style.left = triangle_left + 'px';
  }

  if (active_figure === 'triangle_2' && event.keyCode === 37) {
    // console.log('Стрелка влево нажата');

    triangle_2_left = triangle_2_left - movLength
    triangle_2.style.left = triangle_2_left + 'px';
  }

  if (active_figure === 'triangle_1_small' && event.keyCode === 37) {
    // console.log('Стрелка влево нажата');

    triangle_1_small_left = triangle_1_small_left - movLength
    triangle_1_small.style.left = triangle_1_small_left + 'px';
  }

  if (active_figure === 'triangle_2_small' && event.keyCode === 37) {
    // console.log('Стрелка влево нажата');

    triangle_2_small_left = triangle_2_small_left - movLength
    triangle_2_small.style.left = triangle_2_small_left + 'px';
  }

  if (active_figure === 'triangle_1_medium' && event.keyCode === 37) {
    // console.log('Стрелка влево нажата');

    triangle_1_medium_left = triangle_1_medium_left - movLength
    triangle_1_medium.style.left = triangle_1_medium_left + 'px';
  }


  if (active_figure === 'parallelepiped' && event.keyCode === 37) {
    // console.log('Стрелка влево нажата');

    parallelepiped_left = parallelepiped_left - movLength
    parallelepiped.style.left = parallelepiped_left + 'px';
  }

});


document.addEventListener('keydown', function (event) {

  if (active_figure === 'square' && event.keyCode === 39) {
    // console.log('Стрелка вправо нажата');

    square_left = square_left + movLength
    square.style.left = square_left + 'px';
  }

  if (active_figure === 'triangle_1' && event.keyCode === 39) {
    // console.log('Стрелка вправо нажата');

    triangle_left = triangle_left + movLength
    triangle_1.style.left = triangle_left + 'px';
  }

  if (active_figure === 'triangle_2' && event.keyCode === 39) {
    // console.log('Стрелка вправо нажата');

    triangle_2_left = triangle_2_left + movLength
    triangle_2.style.left = triangle_2_left + 'px';
  }

  if (active_figure === 'triangle_1_small' && event.keyCode === 39) {
    // console.log('Стрелка влево нажата');

    triangle_1_small_left = triangle_1_small_left + movLength
    triangle_1_small.style.left = triangle_1_small_left + 'px';
  }

  if (active_figure === 'triangle_2_small' && event.keyCode === 39) {
    // console.log('Стрелка влево нажата');

    triangle_2_small_left = triangle_2_small_left + movLength
    triangle_2_small.style.left = triangle_2_small_left + 'px';
  }

  if (active_figure === 'triangle_1_medium' && event.keyCode === 39) {
    // console.log('Стрелка влево нажата');

    triangle_1_medium_left = triangle_1_medium_left + movLength
    triangle_1_medium.style.left = triangle_1_medium_left + 'px';
  }

  if (active_figure === 'parallelepiped' && event.keyCode === 39) {
    // console.log('Стрелка влево нажата');

    parallelepiped_left = parallelepiped_left + movLength
    parallelepiped.style.left = parallelepiped_left + 'px';
  }

});


// Повороты фигур


document.addEventListener('keydown', function (event) {

  if (active_figure === 'square' && event.keyCode === 68) {
    // console.log('Нажата D');

    square_currentRotation = square_currentRotation + rotateLength
    square.style.transform = 'rotate(' + square_currentRotation + 'deg)'
  }

  if (active_figure === 'triangle_1' && event.keyCode === 68) {
    // console.log('Нажата D');

    triangle_currentRotation = triangle_currentRotation + rotateLength
    triangle_1.style.transform = 'rotate(' + triangle_currentRotation + 'deg)'
  }

  if (active_figure === 'triangle_2' && event.keyCode === 68) {
    // console.log('Нажата D');

    triangle_2_currentRotation = triangle_2_currentRotation + rotateLength
    triangle_2.style.transform = 'rotate(' + triangle_2_currentRotation + 'deg)'
  }

  if (active_figure === 'triangle_1_small' && event.keyCode === 68) {
    // console.log('Нажата D');

    triangle_1_small_currentRotation = triangle_1_small_currentRotation + rotateLength
    triangle_1_small.style.transform = 'rotate(' + triangle_1_small_currentRotation + 'deg)'
  }

  if (active_figure === 'triangle_2_small' && event.keyCode === 68) {
    // console.log('Нажата D');

    triangle_2_small_currentRotation = triangle_2_small_currentRotation + rotateLength
    triangle_2_small.style.transform = 'rotate(' + triangle_2_small_currentRotation + 'deg)'
  }

  if (active_figure === 'triangle_1_medium' && event.keyCode === 68) {
    // console.log('Нажата D');

    triangle_1_medium_currentRotation = triangle_1_medium_currentRotation + rotateLength
    triangle_1_medium.style.transform = 'rotate(' + triangle_1_medium_currentRotation + 'deg)'
  }


  if (active_figure === 'parallelepiped' && event.keyCode === 68) {
    // console.log('Нажата D');

    parallelepiped_currentRotation = parallelepiped_currentRotation + rotateLength

    parallelepiped.style.transform = 'rotate(' + parallelepiped_currentRotation + 'deg) skew(45deg)'
  }




});




document.addEventListener('keydown', function (event) {

  if (active_figure === 'square' && event.keyCode === 65) {
    // console.log('Нажата A');
    square_currentRotation = square_currentRotation - rotateLength
    square.style.transform = 'rotate(' + square_currentRotation + 'deg)'
  }

  if (active_figure === 'triangle_1' && event.keyCode === 65) {
    // console.log('Нажата A');

    triangle_currentRotation = triangle_currentRotation - rotateLength
    triangle_1.style.transform = 'rotate(' + triangle_currentRotation + 'deg)'
  }

  if (active_figure === 'triangle_2' && event.keyCode === 65) {
    // console.log('Нажата A');

    triangle_2_currentRotation = triangle_2_currentRotation - rotateLength
    triangle_2.style.transform = 'rotate(' + triangle_2_currentRotation + 'deg)'
  }

  if (active_figure === 'triangle_1_small' && event.keyCode === 65) {
    // console.log('Нажата D');

    triangle_1_small_currentRotation = triangle_1_small_currentRotation - rotateLength
    triangle_1_small.style.transform = 'rotate(' + triangle_1_small_currentRotation + 'deg)'
  }


  if (active_figure === 'triangle_2_small' && event.keyCode === 65) {
    // console.log('Нажата D');

    triangle_2_small_currentRotation = triangle_2_small_currentRotation - rotateLength
    triangle_2_small.style.transform = 'rotate(' + triangle_2_small_currentRotation + 'deg)'
  }


  if (active_figure === 'triangle_1_medium' && event.keyCode === 65) {
    // console.log('Нажата D');

    triangle_1_medium_currentRotation = triangle_1_medium_currentRotation - rotateLength
    triangle_1_medium.style.transform = 'rotate(' + triangle_1_medium_currentRotation + 'deg)'
  }


  if (active_figure === 'parallelepiped' && event.keyCode === 65) {
    // console.log('Нажата D');

    parallelepiped_currentRotation = parallelepiped_currentRotation - rotateLength

    parallelepiped.style.transform = 'rotate(' + parallelepiped_currentRotation + 'deg) skew(-45deg)'
  }


});








document.addEventListener('keydown', function (event) {

  if (active_figure === 'parallelepiped' && event.keyCode === 83) {
    // console.log('Нажата A');

    console.log('Par mirror - true');


  }

});


document.addEventListener('keydown', function (event) {

  if (active_figure === 'parallelepiped' && event.keyCode === 87) {
    // console.log('Нажата A');

    console.log('Par mirror - false');


  }

});







