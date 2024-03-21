// Перемещения фигур - клавиатура
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




// Мобильные контроллеры перемещения фигур
mobile_arrow_up.addEventListener('click', function () {

  if (active_figures_movements.length > 0) {

    const new_set = new Set(active_figures_movements)

    new_set.forEach(function (item) {

      figures[item].top = figures[item].top - Number(input_mov.value)
      document.querySelector(`.${item}`).style.top = figures[item].top + 'px'

    })


  } else {

    figures[active_figure].top = figures[active_figure].top - Number(input_mov.value)
    document.querySelector(`.${active_figure}`).style.top = figures[active_figure].top + 'px'

  }


})


mobile_arrow_down.addEventListener('click', function () {

  if (active_figures_movements.length > 0) {

    const new_set = new Set(active_figures_movements)

    new_set.forEach(function (item) {

      figures[item].top = figures[item].top + Number(input_mov.value)
      document.querySelector(`.${item}`).style.top = figures[item].top + 'px'

    })


  } else {

    figures[active_figure].top = figures[active_figure].top + Number(input_mov.value)
    document.querySelector(`.${active_figure}`).style.top = figures[active_figure].top + 'px'

  }





})


mobile_arrow_left.addEventListener('click', function () {


  if (active_figures_movements.length > 0) {

    const new_set = new Set(active_figures_movements)

    new_set.forEach(function (item) {

      figures[item].left = figures[item].left - Number(input_mov.value)
      document.querySelector(`.${item}`).style.left = figures[item].left + 'px'

    })


  } else {

    figures[active_figure].left = figures[active_figure].left - Number(input_mov.value)
    document.querySelector(`.${active_figure}`).style.left = figures[active_figure].left + 'px'

  }





})


mobile_arrow_right.addEventListener('click', function () {

  if (active_figures_movements.length > 0) {

    const new_set = new Set(active_figures_movements)

    new_set.forEach(function (item) {

      figures[item].left = figures[item].left + Number(input_mov.value)
      document.querySelector(`.${item}`).style.left = figures[item].left + 'px'

    })


  } else {

    figures[active_figure].left = figures[active_figure].left + Number(input_mov.value)
    document.querySelector(`.${active_figure}`).style.left = figures[active_figure].left + 'px'

  }







})




mobile_arrow_rot_left.addEventListener('click', function () {

  figures[active_figure].rotation_angle = figures[active_figure].rotation_angle - Number(input_rot.value)

  if (active_figure === 'parallelepiped') {
    document.querySelector(`.${active_figure}`).style.transform = 'rotate(' + figures[active_figure].rotation_angle + 'deg) skew(-45deg)'

  } else {
    document.querySelector(`.${active_figure}`).style.transform = 'rotate(' + figures[active_figure].rotation_angle + 'deg)'
  }


})


mobile_arrow_rot_right.addEventListener('click', function () {

  figures[active_figure].rotation_angle = figures[active_figure].rotation_angle + Number(input_rot.value)

  if (active_figure === 'parallelepiped') {
    document.querySelector(`.${active_figure}`).style.transform = 'rotate(' + figures[active_figure].rotation_angle + 'deg) skew(45deg)'

  } else {
    document.querySelector(`.${active_figure}`).style.transform = 'rotate(' + figures[active_figure].rotation_angle + 'deg)'
  }




})




// Изменение скорости движение фигур

mobile_speed_slow.addEventListener('click', function () {

  mobile_speed_medium.classList.remove('active_btn')
  mobile_speed_fast.classList.remove('active_btn')
  mobile_speed_slow.classList.add('active_btn')

  mobile_speed_medium.classList.remove('shape_in')
  mobile_speed_fast.classList.remove('shape_in')
  mobile_speed_slow.classList.add('shape_in')

  input_mov.value = 1
})


mobile_speed_medium.addEventListener('click', function () {

  mobile_speed_medium.classList.add('active_btn')
  mobile_speed_fast.classList.remove('active_btn')
  mobile_speed_slow.classList.remove('active_btn')

  mobile_speed_medium.classList.add('shape_in')
  mobile_speed_fast.classList.remove('shape_in')
  mobile_speed_slow.classList.remove('shape_in')


  input_mov.value = 5
})


mobile_speed_fast.addEventListener('click', function () {

  mobile_speed_medium.classList.remove('active_btn')
  mobile_speed_fast.classList.add('active_btn')
  mobile_speed_slow.classList.remove('active_btn')

  mobile_speed_medium.classList.remove('shape_in')
  mobile_speed_fast.classList.add('shape_in')
  mobile_speed_slow.classList.remove('shape_in')

  input_mov.value = 25
})




// Multifigur select
checkbox_multimovements.addEventListener('change', function () {

  if (!this.checked) {

    active_figures_movements = []

    figures_all.forEach(function (figure) {

      active_figure = 'square'

      highlight_active_figure(active_figure)

    })

  } else {

    square.classList.remove('active_border');

  }

})


// Select all figures
checkbox_select_all.addEventListener('change', function () {

  if (this.checked) {

    active_figures_movements = ['square', 'triangle_1_big', 'triangle_2_big', 'triangle_1_medium', 'triangle_1_small', 'triangle_2_small', 'parallelepiped']

    active_figures_movements.forEach(function (el) {
      document.querySelector(`.${el}`).classList.add('active_border');
    })


  } else {

    active_figures_movements.forEach(function (el) {
      document.querySelector(`.${el}`).classList.remove('active_border');
    })

    active_figures_movements = []

  }


})

