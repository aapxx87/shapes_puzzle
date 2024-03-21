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
  figures[active_figure].top = figures[active_figure].top - Number(input_mov.value)
  document.querySelector(`.${active_figure}`).style.top = figures[active_figure].top + 'px'
})


mobile_arrow_down.addEventListener('click', function () {
  figures[active_figure].top = figures[active_figure].top + Number(input_mov.value)
  document.querySelector(`.${active_figure}`).style.top = figures[active_figure].top + 'px'
})


mobile_arrow_left.addEventListener('click', function () {
  figures[active_figure].left = figures[active_figure].left - Number(input_mov.value)
  document.querySelector(`.${active_figure}`).style.left = figures[active_figure].left + 'px'
})


mobile_arrow_right.addEventListener('click', function () {
  figures[active_figure].left = figures[active_figure].left + Number(input_mov.value)
  document.querySelector(`.${active_figure}`).style.left = figures[active_figure].left + 'px'

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




mobile_speed_slow.addEventListener('click', function () {

  mobile_speed_medium.classList.remove('active_btn')
  mobile_speed_fast.classList.remove('active_btn')
  mobile_speed_slow.classList.add('active_btn')

  input_mov.value = 1
})


mobile_speed_medium.addEventListener('click', function () {

  mobile_speed_medium.classList.add('active_btn')
  mobile_speed_fast.classList.remove('active_btn')
  mobile_speed_slow.classList.remove('active_btn')


  input_mov.value = 5
})



mobile_speed_fast.addEventListener('click', function () {

  mobile_speed_medium.classList.remove('active_btn')
  mobile_speed_fast.classList.add('active_btn')
  mobile_speed_slow.classList.remove('active_btn')

  input_mov.value = 25
})




// Multi figur movements

