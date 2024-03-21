// Figures
const square = document.querySelector('.square')
const triangle_1 = document.querySelector('.triangle_1_big')
const triangle_2 = document.querySelector('.triangle_2_big')
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
}









btn_shape.addEventListener('click', function () {

  const shape = target_shape.value

  square.style.top = shapes[shape].square.top + 'px'
  square.style.left = shapes[shape].square.left + 'px'
  square.style.transform = 'rotate(' + shapes[shape].square.rotation_angle + 'deg)'

  triangle_1.style.top = shapes[shape].triangle_1_big.top + 'px'
  triangle_1.style.left = shapes[shape].triangle_1_big.left + 'px'
  triangle_1.style.transform = 'rotate(' + shapes[shape].triangle_1_big.rotation_angle + 'deg)'

  triangle_2.style.top = shapes[shape].triangle_2_big.top + 'px'
  triangle_2.style.left = shapes[shape].triangle_2_big.left + 'px'
  triangle_2.style.transform = 'rotate(' + shapes[shape].triangle_2_big.rotation_angle + 'deg)'

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
  parallelepiped.style.transform = 'rotate(' + shapes[shape].parallelepiped.rotation_angle + 'deg)' + ' skew(45deg)'

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

figures_all.forEach(function (figure) {

  figure.addEventListener('click', function () {

    console.log(`Active figure - ${this.classList[1]}`);

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




