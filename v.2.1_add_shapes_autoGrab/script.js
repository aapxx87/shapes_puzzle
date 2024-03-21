// Figures
const square = document.querySelector('.square')
const triangle_1_big = document.querySelector('.triangle_1_big')
const triangle_2_big = document.querySelector('.triangle_2_big')
const triangle_1_medium = document.querySelector('.triangle_1_medium')
const triangle_1_small = document.querySelector('.triangle_1_small')
const triangle_2_small = document.querySelector('.triangle_2_small')
const parallelepiped = document.querySelector('.parallelepiped')

const figures_all = document.querySelectorAll('.figures')



// Inputs
const input_mov = document.querySelector('.input_mov')
const input_rot = document.querySelector('.input_rot')


// Create shape
const target_shape = document.getElementById('target_shapes')
const btn_shape = document.querySelector('.btn_shape')

// Grab
const btn_grab = document.querySelector('.btn_grab')



// Выбор активной фигуры дял перемещения 
let active_figure = 'square'




const figures = {

  square: {
    top: 0,
    left: 0,
    rotation_angle: 0,
  },

  triangle_1_big: {
    top: 0,
    left: 100,
    rotation_angle: 0,
  },

  triangle_2_big: {
    top: 0,
    left: 300,
    rotation_angle: 0,
  },

  triangle_1_medium: {
    top: 300,
    left: 0,
    rotation_angle: 0,
  },

  triangle_1_small: {
    top: 200,
    left: 0,
    rotation_angle: 0,
  },

  triangle_2_small: {
    top: 100,
    left: 0,
    rotation_angle: 0,
  },

  parallelepiped: {
    top: 420,
    left: 25,
    rotation_angle: 0,
  },

}


const shapes = {

  castle: {

    square: {
      top: 202,
      left: 150,
      rotation_angle: 0,
    },

    triangle_1_big: {
      top: 400,
      left: 180,
      rotation_angle: 135,
    },

    triangle_2_big: {
      top: 302,
      left: 80,
      rotation_angle: -135,
    },

    triangle_1_medium: {
      top: 272,
      left: 150,
      rotation_angle: -180,
    },

    triangle_1_small: {
      top: 167,
      left: 150,
      rotation_angle: 135,
    },

    triangle_2_small: {
      top: 336,
      left: 282,
      rotation_angle: -180,
    },

    parallelepiped: {
      top: 380,
      left: 270,
      rotation_angle: -135,
      skew: 45,
    },

  },

  camel: {

    square: {
      top: 236,
      left: 227,
      rotation_angle: 45,
    },

    triangle_1_big: {
      top: 320,
      left: 121,
      rotation_angle: 90,
    },

    triangle_2_big: {
      top: 300,
      left: 240,
      rotation_angle: 45,
    },

    triangle_1_medium: {
      top: 270,
      left: 142,
      rotation_angle: 135,
    },

    triangle_1_small: {
      top: 135,
      left: 325,
      rotation_angle: -45,
    },

    triangle_2_small: {
      top: 186,
      left: 276,
      rotation_angle: -135,
    },

    parallelepiped: {
      top: 268,
      left: 289,
      rotation_angle: -90,
      skew: 45,
    },

  },

  rabbit: {

    square: {
      top: 182,
      left: 281,
      rotation_angle: 0,
    },

    triangle_1_big: {
      top: 280,
      left: 211,
      rotation_angle: 45,
    },

    triangle_2_big: {
      top: 349,
      left: 180,
      rotation_angle: 0,
    },

    triangle_1_medium: {
      top: 62,
      left: 232,
      rotation_angle: 45,
    },

    triangle_1_small: {
      top: 337,
      left: 294,
      rotation_angle: 45,
    },

    triangle_2_small: {
      top: 287,
      left: 246,
      rotation_angle: 225,
    },

    parallelepiped: {
      top: 84,
      left: 276,
      rotation_angle: 90,
      skew: 45,
    },

  },

  bear: {
    "square": {
      "top": 222,
      "left": 187,
      "rotation_angle": 0
    },
    "triangle_1_big": {
      "top": 250,
      "left": 325,
      "rotation_angle": -135
    },
    "triangle_2_big": {
      "top": 222,
      "left": 256,
      "rotation_angle": 180
    },
    "triangle_1_medium": {
      "top": 223,
      "left": 257,
      "rotation_angle": 0
    },
    "triangle_1_small": {
      "top": 371,
      "left": 375,
      "rotation_angle": -90
    },
    "triangle_2_small": {
      "top": 221,
      "left": 117,
      "rotation_angle": -90
    },
    "parallelepiped": {
      "top": 332,
      "left": 212,
      "rotation_angle": 135,
      "skew": 45
    }
  },

  ship: {
    "square": {
      "top": 385,
      "left": 334,
      "rotation_angle": 45
    },
    "triangle_1_big": {
      "top": 400,
      "left": 200,
      "rotation_angle": 135
    },
    "triangle_2_big": {
      "top": 300,
      "left": 100,
      "rotation_angle": -45
    },
    "triangle_1_medium": {
      "top": 321,
      "left": 320,
      "rotation_angle": 135
    },
    "triangle_1_small": {
      "top": 336,
      "left": 383,
      "rotation_angle": -45
    },
    "triangle_2_small": {
      "top": 336,
      "left": 284,
      "rotation_angle": -45
    },
    "parallelepiped": {
      "top": 272,
      "left": 130,
      "rotation_angle": 90,
      "skew": 45
    }
  },

  pram: {
    "square": {
      "top": 379,
      "left": 116,
      "rotation_angle": 45
    },
    "triangle_1_big": {
      "top": 225,
      "left": 150,
      "rotation_angle": 0
    },
    "triangle_2_big": {
      "top": 155,
      "left": 166,
      "rotation_angle": 135
    },
    "triangle_1_medium": {
      "top": 245,
      "left": 240,
      "rotation_angle": -45
    },
    "triangle_1_small": {
      "top": 377,
      "left": 258,
      "rotation_angle": 45
    },
    "triangle_2_small": {
      "top": 378,
      "left": 256,
      "rotation_angle": -135,
    },
    "parallelepiped": {
      "top": 273,
      "left": 70,
      "rotation_angle": 45,
      "skew": 45
    }
  },

  sailing: {
    "square": {
      "top": 335,
      "left": 86,
      "rotation_angle": 45
    },
    "triangle_1_big": {
      "top": 251,
      "left": 149,
      "rotation_angle": 45
    },
    "triangle_2_big": {
      "top": 280,
      "left": 219,
      "rotation_angle": 0
    },
    "triangle_1_medium": {
      "top": 172,
      "left": 99,
      "rotation_angle": -135
    },
    "triangle_1_small": {
      "top": 385,
      "left": 134,
      "rotation_angle": 135
    },
    "triangle_2_small": {
      "top": 385,
      "left": 229,
      "rotation_angle": -45,
    },
    "parallelepiped": {
      "top": 420,
      "left": 145,
      "rotation_angle": 0,
      "skew": 45
    }
  },

  fox: {
    "square": {
      "top": 141,
      "left": 185,
      "rotation_angle": 45
    },
    "triangle_1_big": {
      "top": 254,
      "left": 148,
      "rotation_angle": -135
    },
    "triangle_2_big": {
      "top": 325,
      "left": 175,
      "rotation_angle": -90
    },
    "triangle_1_medium": {
      "top": 246,
      "left": 169,
      "rotation_angle": 45
    },
    "triangle_1_small": {
      "top": 93,
      "left": 235,
      "rotation_angle": 45
    },
    "triangle_2_small": {
      "top": 91,
      "left": 137,
      "rotation_angle": -135
    },
    "parallelepiped": {
      "top": 405,
      "left": 338,
      "rotation_angle": 135,
      "skew": 45,
    }
  }
}






btn_grab.addEventListener('click', function () {


  // --- square ---

  const square_top = parseInt(window.getComputedStyle(square).top)
  const square_left = parseInt(window.getComputedStyle(square).left)

  // значения matrix, полученного из свойства transform
  const square_matrix = window.getComputedStyle(square).transform

  // Извлечение значений a, b, c, и d из строки matrix
  const square_values = square_matrix.match(/matrix\(([^,]+), ([^,]+), ([^,]+), ([^,]+), [^,]+, [^,]+\)/);
  const square_a = parseFloat(square_values[1]);
  const square_b = parseFloat(square_values[2]);
  const square_c = parseFloat(square_values[3]);
  const square_d = parseFloat(square_values[4]);

  // Вычисление угла вращения в радианах и преобразование в градусы
  const square_angleRad = Math.atan2(square_b, square_a);
  const square_angleDeg = Math.ceil(square_angleRad * (180 / Math.PI));




  // --- triangle_1_big ---

  const triangle_1_big_top = parseInt(window.getComputedStyle(triangle_1_big).top)
  const triangle_1_big_left = parseInt(window.getComputedStyle(triangle_1_big).left)

  // значения matrix, полученного из свойства transform
  const triangle_1_big_matrix = window.getComputedStyle(triangle_1_big).transform

  // Извлечение значений a, b, c, и d из строки matrix
  const triangle_1_big_values = triangle_1_big_matrix.match(/matrix\(([^,]+), ([^,]+), ([^,]+), ([^,]+), [^,]+, [^,]+\)/);
  const triangle_1_big_a = parseFloat(triangle_1_big_values[1]);
  const triangle_1_big_b = parseFloat(triangle_1_big_values[2]);
  const triangle_1_big_c = parseFloat(triangle_1_big_values[3]);
  const triangle_1_big_d = parseFloat(triangle_1_big_values[4]);

  // Вычисление угла вращения в радианах и преобразование в градусы
  const triangle_1_big_angleRad = Math.atan2(triangle_1_big_b, triangle_1_big_a);
  const triangle_1_big_angleDeg = Math.ceil(triangle_1_big_angleRad * (180 / Math.PI));





  // --- triangle_2_big ---

  const triangle_2_big_top = parseInt(window.getComputedStyle(triangle_2_big).top)
  const triangle_2_big_left = parseInt(window.getComputedStyle(triangle_2_big).left)

  // значения matrix, полученного из свойства transform
  const triangle_2_big_matrix = window.getComputedStyle(triangle_2_big).transform

  // Извлечение значений a, b, c, и d из строки matrix
  const triangle_2_big_values = triangle_2_big_matrix.match(/matrix\(([^,]+), ([^,]+), ([^,]+), ([^,]+), [^,]+, [^,]+\)/);
  const triangle_2_big_a = parseFloat(triangle_2_big_values[1]);
  const triangle_2_big_b = parseFloat(triangle_2_big_values[2]);
  const triangle_2_big_c = parseFloat(triangle_2_big_values[3]);
  const triangle_2_big_d = parseFloat(triangle_2_big_values[4]);

  // Вычисление угла вращения в радианах и преобразование в градусы
  const triangle_2_big_angleRad = Math.atan2(triangle_2_big_b, triangle_2_big_a);
  const triangle_2_big_angleDeg = Math.ceil(triangle_2_big_angleRad * (180 / Math.PI));





  // // --- triangle_1_medium ---

  const triangle_1_medium_top = parseInt(window.getComputedStyle(triangle_1_medium).top)
  const triangle_1_medium_left = parseInt(window.getComputedStyle(triangle_1_medium).left)

  // значения matrix, полученного из свойства transform
  const triangle_1_medium_matrix = window.getComputedStyle(triangle_1_medium).transform

  // Извлечение значений a, b, c, и d из строки matrix
  const triangle_1_medium_values = triangle_1_medium_matrix.match(/matrix\(([^,]+), ([^,]+), ([^,]+), ([^,]+), [^,]+, [^,]+\)/);
  const triangle_1_medium_a = parseFloat(triangle_1_medium_values[1]);
  const triangle_1_medium_b = parseFloat(triangle_1_medium_values[2]);
  const triangle_1_medium_c = parseFloat(triangle_1_medium_values[3]);
  const triangle_1_medium_d = parseFloat(triangle_1_medium_values[4]);

  // Вычисление угла вращения в радианах и преобразование в градусы
  const triangle_1_medium_angleRad = Math.atan2(triangle_1_medium_b, triangle_1_medium_a);
  const triangle_1_medium_angleDeg = Math.ceil(triangle_1_medium_angleRad * (180 / Math.PI));




  // // --- triangle_1_small ---

  const triangle_1_small_top = parseInt(window.getComputedStyle(triangle_1_small).top)
  const triangle_1_small_left = parseInt(window.getComputedStyle(triangle_1_small).left)

  // значения matrix, полученного из свойства transform
  const triangle_1_small_matrix = window.getComputedStyle(triangle_1_small).transform

  // Извлечение значений a, b, c, и d из строки matrix
  const triangle_1_small_values = triangle_1_small_matrix.match(/matrix\(([^,]+), ([^,]+), ([^,]+), ([^,]+), [^,]+, [^,]+\)/);
  const triangle_1_small_a = parseFloat(triangle_1_small_values[1]);
  const triangle_1_small_b = parseFloat(triangle_1_small_values[2]);
  const triangle_1_small_c = parseFloat(triangle_1_small_values[3]);
  const triangle_1_small_d = parseFloat(triangle_1_small_values[4]);

  // Вычисление угла вращения в радианах и преобразование в градусы
  const triangle_1_small_angleRad = Math.atan2(triangle_1_small_b, triangle_1_small_a);
  const triangle_1_small_angleDeg = Math.ceil(triangle_1_small_angleRad * (180 / Math.PI));





  // // --- triangle_2_small ---

  const triangle_2_small_top = parseInt(window.getComputedStyle(triangle_2_small).top)
  const triangle_2_small_left = parseInt(window.getComputedStyle(triangle_2_small).left)

  // значения matrix, полученного из свойства transform
  const triangle_2_small_matrix = window.getComputedStyle(triangle_2_small).transform

  // Извлечение значений a, b, c, и d из строки matrix
  const triangle_2_small_values = triangle_2_small_matrix.match(/matrix\(([^,]+), ([^,]+), ([^,]+), ([^,]+), [^,]+, [^,]+\)/);
  const triangle_2_small_a = parseFloat(triangle_2_small_values[1]);
  const triangle_2_small_b = parseFloat(triangle_2_small_values[2]);
  const triangle_2_small_c = parseFloat(triangle_2_small_values[3]);
  const triangle_2_small_d = parseFloat(triangle_2_small_values[4]);

  // Вычисление угла вращения в радианах и преобразование в градусы
  const triangle_2_small_angleRad = Math.atan2(triangle_2_small_b, triangle_2_small_a);
  const triangle_2_small_angleDeg = Math.ceil(triangle_2_small_angleRad * (180 / Math.PI));




  // // // --- parallelepiped ---

  const parallelepiped_top = parseInt(window.getComputedStyle(parallelepiped).top)
  const parallelepiped_left = parseInt(window.getComputedStyle(parallelepiped).left)

  // // значения matrix, полученного из свойства transform
  const parallelepiped_matrix = window.getComputedStyle(parallelepiped).transform

  // console.log(parallelepiped_matrix);

  // // Извлечение значений a, b, c, и d из строки matrix
  const parallelepiped_values = parallelepiped_matrix.match(/matrix\(([^,]+), ([^,]+), ([^,]+), ([^,]+), [^,]+, [^,]+\)/);
  const parallelepiped_a = parseFloat(parallelepiped_values[1]);
  const parallelepiped_b = parseFloat(parallelepiped_values[2]);
  const parallelepiped_c = parseFloat(parallelepiped_values[3]);
  const parallelepiped_d = parseFloat(parallelepiped_values[4]);

  // // Вычисление угла вращения в радианах и преобразование в градусы
  const parallelepiped_angleRad = Math.atan2(parallelepiped_b, parallelepiped_a);
  const parallelepiped_angleDeg = Math.ceil(parallelepiped_angleRad * (180 / Math.PI));

  // Вычисление skewX и skewY из матрицы
  const parallelepiped_skewX = Math.atan2(parallelepiped_b, parallelepiped_d) * (180 / Math.PI);
  const parallelepiped_skewY = Math.atan2(parallelepiped_c, parallelepiped_a) * (180 / Math.PI);



  const temp_shape_obj = {

    square: {
      top: square_top,
      left: square_left,
      rotation_angle: square_angleDeg,
    },

    triangle_1_big: {
      top: triangle_1_big_top,
      left: triangle_1_big_left,
      rotation_angle: triangle_1_big_angleDeg,
    },

    triangle_2_big: {
      top: triangle_2_big_top,
      left: triangle_2_big_left,
      rotation_angle: triangle_2_big_angleDeg,
    },

    triangle_1_medium: {
      top: triangle_1_medium_top,
      left: triangle_1_medium_left,
      rotation_angle: triangle_1_medium_angleDeg,
    },

    triangle_1_small: {
      top: triangle_1_small_top,
      left: triangle_1_small_left,
      rotation_angle: triangle_1_small_angleDeg,
    },

    triangle_2_small: {
      top: triangle_2_small_top,
      left: triangle_2_small_left,
      rotation_angle: triangle_2_small_angleDeg,
    },

    parallelepiped: {
      top: parallelepiped_top,
      left: parallelepiped_left,
      rotation_angle: parallelepiped_angleDeg,
      skew: parallelepiped_skewY,
    },
  }



  console.log(temp_shape_obj);


})








// Создание выбранной фигуры

btn_shape.addEventListener('click', function () {

  const shape = target_shape.value

  square.style.top = shapes[shape].square.top + 'px'
  square.style.left = shapes[shape].square.left + 'px'
  square.style.transform = 'rotate(' + shapes[shape].square.rotation_angle + 'deg)'

  triangle_1_big.style.top = shapes[shape].triangle_1_big.top + 'px'
  triangle_1_big.style.left = shapes[shape].triangle_1_big.left + 'px'
  triangle_1_big.style.transform = 'rotate(' + shapes[shape].triangle_1_big.rotation_angle + 'deg)'

  triangle_2_big.style.top = shapes[shape].triangle_2_big.top + 'px'
  triangle_2_big.style.left = shapes[shape].triangle_2_big.left + 'px'
  triangle_2_big.style.transform = 'rotate(' + shapes[shape].triangle_2_big.rotation_angle + 'deg)'

  triangle_1_medium.style.top = shapes[shape].triangle_1_medium.top + 'px'
  triangle_1_medium.style.left = shapes[shape].triangle_1_medium.left + 'px'
  triangle_1_medium.style.transform = 'rotate(' + shapes[shape].triangle_1_medium.rotation_angle + 'deg)'

  triangle_1_small.style.top = shapes[shape].triangle_1_small.top + 'px'
  triangle_1_small.style.left = shapes[shape].triangle_1_small.left + 'px'
  triangle_1_small.style.transform = 'rotate(' + shapes[shape].triangle_1_small.rotation_angle + 'deg)'

  triangle_2_small.style.top = shapes[shape].triangle_2_small.top + 'px'
  triangle_2_small.style.left = shapes[shape].triangle_2_small.left + 'px'
  triangle_2_small.style.transform = 'rotate(' + shapes[shape].triangle_2_small.rotation_angle + 'deg)'

  parallelepiped.style.top = shapes[shape].parallelepiped.top + 'px'
  parallelepiped.style.left = shapes[shape].parallelepiped.left + 'px'
  parallelepiped.style.transform = 'rotate(' + shapes[shape].parallelepiped.rotation_angle + 'deg)' + ' skew(' + shapes[shape].parallelepiped.skew + 'deg)'

})









// функция удаления активного бордера со всех фигур
const remove_all_figures_active_border = function () {

  square.classList.remove('active_border');
  triangle_1_big.classList.remove('active_border');
  triangle_2_big.classList.remove('active_border');
  triangle_1_small.classList.remove('active_border');
  triangle_2_small.classList.remove('active_border');
  triangle_1_medium.classList.remove('active_border');
  parallelepiped.classList.remove('active_border');

}





// Выбор текущей фигуры

figures_all.forEach(function (figure) {

  figure.addEventListener('click', function () {

    // console.log(`Active figure - ${this.classList[1]}`);

    active_figure = this.classList[1]

    remove_all_figures_active_border()

    document.querySelector(`.${active_figure}`).classList.add('active_border');

  })

})





// Перемещения фигур

document.addEventListener('keydown', function (event) {

  // ВВЕРХ
  if (event.keyCode === 38) {
    figures[active_figure].top = figures[active_figure].top - Number(input_mov.value)
    document.querySelector(`.${active_figure}`).style.top = figures[active_figure].top + 'px'
  }

  // ПВНИЗ
  if (event.keyCode === 40) {
    figures[active_figure].top = figures[active_figure].top + Number(input_mov.value)
    document.querySelector(`.${active_figure}`).style.top = figures[active_figure].top + 'px'
  }

  // ВЛЕВО
  if (event.keyCode === 37) {
    figures[active_figure].left = figures[active_figure].left - Number(input_mov.value)
    document.querySelector(`.${active_figure}`).style.left = figures[active_figure].left + 'px'
  }


  // ВПРАВО
  if (event.keyCode === 39) {
    figures[active_figure].left = figures[active_figure].left + Number(input_mov.value)
    document.querySelector(`.${active_figure}`).style.left = figures[active_figure].left + 'px'
  }

  // Поворот ВПРАВО
  if (event.keyCode === 68) {
    figures[active_figure].rotation_angle = figures[active_figure].rotation_angle + Number(input_rot.value)

    if (active_figure === 'parallelepiped') {
      document.querySelector(`.${active_figure}`).style.transform = 'rotate(' + figures[active_figure].rotation_angle + 'deg) skew(45deg)'

    } else {
      document.querySelector(`.${active_figure}`).style.transform = 'rotate(' + figures[active_figure].rotation_angle + 'deg)'
    }

  }

  // Поворот ВЛЕВО
  if (event.keyCode === 65) {

    figures[active_figure].rotation_angle = figures[active_figure].rotation_angle - Number(input_rot.value)

    if (active_figure === 'parallelepiped') {
      document.querySelector(`.${active_figure}`).style.transform = 'rotate(' + figures[active_figure].rotation_angle + 'deg) skew(-45deg)'

    } else {
      document.querySelector(`.${active_figure}`).style.transform = 'rotate(' + figures[active_figure].rotation_angle + 'deg)'
    }

  }

});




