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




