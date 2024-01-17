// Figures for playing
const square = document.querySelector('.square')
const triangle_1_big = document.querySelector('.triangle_1_big')
const triangle_2_big = document.querySelector('.triangle_2_big')
const triangle_1_medium = document.querySelector('.triangle_1_medium')
const triangle_1_small = document.querySelector('.triangle_1_small')
const triangle_2_small = document.querySelector('.triangle_2_small')
const parallelepiped = document.querySelector('.parallelepiped')

const figures_all = document.querySelectorAll('.figures')


// Figures for Templates
const square_sample = document.querySelector('.square_sample')
const triangle_1_big_sample = document.querySelector('.triangle_1_big_sample')
const triangle_2_big_sample = document.querySelector('.triangle_2_big_sample')
const triangle_1_medium_sample = document.querySelector('.triangle_1_medium_sample')
const triangle_1_small_sample = document.querySelector('.triangle_1_small_sample')
const triangle_2_small_sample = document.querySelector('.triangle_2_small_sample')
const parallelepiped_sample = document.querySelector('.parallelepiped_sample')


// Mobile controllers
const mobile_arrow_up = document.querySelector('.arrow_up')
const mobile_arrow_down = document.querySelector('.arrow_down')
const mobile_arrow_left = document.querySelector('.arrow_left')
const mobile_arrow_right = document.querySelector('.arrow_right')
const mobile_arrow_rot_left = document.querySelector('.arrow_rot_left')
const mobile_arrow_rot_right = document.querySelector('.arrow_rot_right')

// Mobile controllers movement speed
const mobile_speed_slow = document.querySelector('.mobile_key_slow')
const mobile_speed_medium = document.querySelector('.mobile_key_medium')
const mobile_speed_fast = document.querySelector('.mobile_key_fast')


// Inputs
const input_mov = document.querySelector('.input_mov')
const input_rot = document.querySelector('.input_rot')

// Create shape
const shape_selector = document.getElementById('target_shapes')
const btn_create_shape = document.querySelector('.btn_shape')

// Craete shape sample
const btn_create_template = document.querySelector('.btn_shape_samples')

// Save
const btn_save = document.querySelector('.btn_grab')
const save_obj = document.querySelector('.temp_save_figure_obj_container')

// Reset
const btn_reset = document.querySelector('.btn_reset')

// Menu
const menu_container = document.querySelector('.menu_container')
const btn_menu_close = document.querySelector('.btn_menu_close')
const btn_menu_open = document.querySelector('.btn_menu_open')

// Color schema
const color_schema_selector = document.getElementById('color_schema_selector')
const btn_apply_color_schema = document.querySelector('.btn_apply_color_schema')
const btns_colors_schema = document.querySelectorAll('.schema_box')




btns_colors_schema.forEach(function (element) {

  element.addEventListener('click', function () {

    for (const [key, value] of Object.entries(color_schema)) {

      document.querySelector(`.${key}`).style.background = `${value.background[element.getAttribute('value')]}`

    }
  })

})










// Изменнеи цветовой схемы фигур
btn_apply_color_schema.addEventListener('click', function () {

  console.log(color_schema_selector.value);

  for (const [key, value] of Object.entries(color_schema)) {

    document.querySelector(`.${key}`).style.background = `${value.background[color_schema_selector.value]}`

  }

})






// Выбор активной фигуры дял перемещения 
let active_figure = 'square'



// Показ/Скрытие фигур для построения шаблона 
const display_template_figures = function (display_property) {

  square_sample.style.display = `${display_property}`
  triangle_1_big_sample.style.display = `${display_property}`
  triangle_2_big_sample.style.display = `${display_property}`
  triangle_1_medium_sample.style.display = `${display_property}`
  triangle_1_small_sample.style.display = `${display_property}`
  triangle_2_small_sample.style.display = `${display_property}`
  parallelepiped_sample.style.display = `${display_property}`

}



// Создание объекта с парамтерами фигур созданного паттерна
btn_save.addEventListener('click', function () {


  // --- SQUARE---

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


  // save_obj.style.display = 'block'
  save_obj.textContent = JSON.stringify(temp_shape_obj, null, 2);



  console.log(temp_shape_obj);


})



// Функция создания фигуры основными танами или танами шаблона
const build_shape = function (template = '') {
  // передаем в функцию параметр чтобы понимать из каких именно фигур строить форму (основных игровых или template)

  // 1. забираем название фигуры, которую хотим построить из селектора со списком фигур
  const shape = shape_selector.value

  // 2. проходимся циклом по объекту в котормо содержатся координаты всех доступных фигур, чтобы найти объект с координатами нужной фигуры
  for (const [form, figures_param] of Object.entries(shapes)) {

    // 3. form - это ключи итерируемого объекта, то есть названия фигур, как только ключ (form) совпадает с выбранным из селектора (shape) мы забираем объект (figures_param) с координатами нужного form пок аждой фигуре и переходим к нему (шаг 4)
    if (form === shape) {

      // const target_figure_to_set_properties = form

      // 4. итерируем по выбранной форме все фигуры и даем каждой фигруе вытянутое из объекта расположение
      for (const figure of Object.entries(figures_param)) {

        const figure_target = figure[0]

        const top = figure[1].top
        const left = figure[1].left
        const rotation_angle = figure[1].rotation_angle

        const skew = figure[1].skew

        document.querySelector(`.${figure_target}${template}`).style.top = top + 'px'
        document.querySelector(`.${figure_target}${template}`).style.left = left + 'px'

        // skew есть только у параллепипеда, поэтому у всех остальных фигур он undefined, чтобы избежать ошибок проверяем есть ли параметр skew и есль есть то знанчит это паралепипед и намного по другому названчаем ему стили
        if (skew) {
          document.querySelector(`.${figure_target}${template}`).style.transform = 'rotate(' + rotation_angle + 'deg)' + ' skew(' + skew + 'deg)'
        } else {
          document.querySelector(`.${figure_target}${template}`).style.transform = 'rotate(' + rotation_angle + 'deg)'
        }

        // если это основные фигуры а НЕtemplate то обновляем при перемещении их текущие координаты
        if (!template) {
          figures[figure_target] = {
            top: top,
            left: left,
            rotation_angle: rotation_angle,
          }
        }

      }

    }

  }

}



// Создание выбранной фигуры
btn_create_shape.addEventListener('click', function () {

  build_shape()

})


// Создание выбранного шаблона фигуры
btn_create_template.addEventListener('click', function () {

  build_shape('_sample')

  display_template_figures('block')

})


// Кнопка reset - возврат фигур в первоначальнео положение 
btn_reset.addEventListener('click', function () {


  display_template_figures('none')


  input_mov.value = 25


  square.style.top = '256px'
  square.style.left = '225px'
  square.style.transform = 'rotate(-45deg)'

  triangle_1_big.style.top = '223px'
  triangle_1_big.style.left = '37px'
  triangle_1_big.style.transform = 'rotate(-135deg)'

  triangle_2_big.style.top = '120px'
  triangle_2_big.style.left = '138px'
  triangle_2_big.style.transform = 'rotate(-45deg)'

  triangle_1_medium.style.top = '295px'
  triangle_1_medium.style.left = '210px'
  triangle_1_medium.style.transform = 'rotate(-90deg)'

  triangle_1_small.style.top = '307px'
  triangle_1_small.style.left = '175px'
  triangle_1_small.style.transform = 'rotate(135deg)'

  triangle_2_small.style.top = '204px'
  triangle_2_small.style.left = '275px'
  triangle_2_small.style.transform = 'rotate(45deg)'

  parallelepiped.style.top = '345px'
  parallelepiped.style.left = '135px'
  parallelepiped.style.transform = 'rotate(0deg) skew(45deg)'






  figures.square = {
    top: 256,
    left: 225,
    rotation_angle: -45,
  }


  figures.triangle_1_big = {
    top: 223,
    left: 37,
    rotation_angle: -135,
  }

  figures.triangle_2_big = {
    top: 120,
    left: 138,
    rotation_angle: -45,
  }

  figures.triangle_1_medium = {
    top: 295,
    left: 210,
    rotation_angle: -90,
  }

  figures.triangle_1_small = {
    top: 307,
    left: 175,
    rotation_angle: 135,
  }

  figures.triangle_2_small = {
    top: 204,
    left: 275,
    rotation_angle: 45,
  }


  figures.parallelepiped = {
    top: 345,
    left: 135,
    rotation_angle: -45,
  }



})


// функция выделения бордером текущей активнйо фигуры
const highlight_active_figure = function (active_figure) {

  // убираем класс active_border со всех фигур
  for (const element of figures_all.entries()) {
    document.querySelector(`.${element[1].classList[1]}`).classList.remove('active_border');
  }

  // добавляем класс active_border к текущей фигуре, на которую кликнули
  document.querySelector(`.${active_figure}`).classList.add('active_border');

}



// Добавление бордера к выбранной фигуре
figures_all.forEach(function (figure) {

  figure.addEventListener('click', function () {

    active_figure = this.classList[1]

    highlight_active_figure(active_figure)

  })

})



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



btn_menu_close.addEventListener('click', function () {
  menu_container.classList.add('menu_hidden')
})


btn_menu_open.addEventListener('click', function () {
  menu_container.classList.remove('menu_hidden')
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



// функция reset при touch движении экрана вниз

let startY = 0; // Начальная позиция Y касания
const threshold = 200; // Минимальное расстояние для активации функции

document.addEventListener('touchstart', function (e) {
  startY = e.touches[0].clientY;
}, false);

document.addEventListener('touchmove', function (e) {
  let touchY = e.touches[0].clientY;
  if (touchY - startY > threshold) {
    // Запустите вашу функцию здесь

    display_template_figures('none')


    input_mov.value = 25


    square.style.top = '256px'
    square.style.left = '225px'
    square.style.transform = 'rotate(45deg)'

    triangle_1_big.style.top = '223px'
    triangle_1_big.style.left = '37px'
    triangle_1_big.style.transform = 'rotate(-135deg)'

    triangle_2_big.style.top = '120px'
    triangle_2_big.style.left = '138px'
    triangle_2_big.style.transform = 'rotate(-45deg)'

    triangle_1_medium.style.top = '295px'
    triangle_1_medium.style.left = '210px'
    triangle_1_medium.style.transform = 'rotate(-90deg)'

    triangle_1_small.style.top = '307px'
    triangle_1_small.style.left = '175px'
    triangle_1_small.style.transform = 'rotate(135deg)'

    triangle_2_small.style.top = '204px'
    triangle_2_small.style.left = '275px'
    triangle_2_small.style.transform = 'rotate(45deg)'

    parallelepiped.style.top = '345px'
    parallelepiped.style.left = '135px'
    parallelepiped.style.transform = 'rotate(0deg) skew(-45deg)'






    figures.square = {
      top: 256,
      left: 225,
      rotation_angle: -45,
    }


    figures.triangle_1_big = {
      top: 223,
      left: 37,
      rotation_angle: -135,
    }

    figures.triangle_2_big = {
      top: 120,
      left: 138,
      rotation_angle: -45,
    }

    figures.triangle_1_medium = {
      top: 295,
      left: 210,
      rotation_angle: -90,
    }

    figures.triangle_1_small = {
      top: 307,
      left: 175,
      rotation_angle: 135,
    }

    figures.triangle_2_small = {
      top: 204,
      left: 275,
      rotation_angle: 45,
    }


    figures.parallelepiped = {
      top: 345,
      left: 135,
      rotation_angle: -45,
    }


    // Предотвратите дальнейшее распространение события, если нужно
    // e.preventDefault();
  }
}, false);

document.addEventListener('touchend', function (e) {
  // Обработка окончания жеста
}, false);




