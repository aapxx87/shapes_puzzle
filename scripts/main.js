
// Выбор активной фигуры дял перемещения 
let active_figure = 'square'

let active_figures_movements = []



// ? FIGURES SCALING

btn_085x.addEventListener('click', function () {

  const square_top = parseInt(getComputedStyle(square).top)

  if (square_top === 257) {

    square.style.top = '267px'
    square.style.left = '233px'
    square.style.transform = 'rotate(45deg)'

    triangle_1_big.style.top = '238px'
    triangle_1_big.style.left = '75px'
    triangle_1_big.style.transform = 'rotate(-135deg)'

    triangle_2_big.style.top = '154px'
    triangle_2_big.style.left = '160px'
    triangle_2_big.style.transform = 'rotate(-45deg)'

    triangle_1_medium.style.top = '297px'
    triangle_1_medium.style.left = '221px'
    triangle_1_medium.style.transform = 'rotate(-90deg)'

    triangle_1_small.style.top = '309px'
    triangle_1_small.style.left = '190px'
    triangle_1_small.style.transform = 'rotate(135deg)'

    triangle_2_small.style.top = '225px'
    triangle_2_small.style.left = '276px'
    triangle_2_small.style.transform = 'rotate(45deg)'

    parallelepiped.style.top = '339px'
    parallelepiped.style.left = '156px'
    parallelepiped.style.transform = 'rotate(0deg) skew(-45deg)'

    figures.square = {
      top: 267,
      left: 233,
      rotation_angle: 45,
    }


    figures.triangle_1_big = {
      top: 238,
      left: 75,
      rotation_angle: -135,
    }

    figures.triangle_2_big = {
      top: 154,
      left: 160,
      rotation_angle: -45,
    }

    figures.triangle_1_medium = {
      top: 297,
      left: 221,
      rotation_angle: -90,
    }

    figures.triangle_1_small = {
      top: 309,
      left: 190,
      rotation_angle: 135,
    }

    figures.triangle_2_small = {
      top: 225,
      left: 276,
      rotation_angle: 45,
    }


    figures.parallelepiped = {
      top: 339,
      left: 156,
      rotation_angle: -45,
    }

    square.style.width = '60px'
    square.style.height = '60px'

    triangle_1_big.style.width = '119px'
    triangle_1_big.style.height = '119px'

    triangle_2_big.style.width = '119px'
    triangle_2_big.style.height = '119px'

    triangle_1_medium.style.width = '85px'
    triangle_1_medium.style.height = '85px'

    triangle_1_small.style.width = '60px'
    triangle_1_small.style.height = '60px'

    triangle_2_small.style.width = '60px'
    triangle_2_small.style.height = '60px'

    parallelepiped.style.width = '85px'
    parallelepiped.style.height = '43px'

  }


  square.style.width = '60px'
  square.style.height = '60px'

  triangle_1_big.style.width = '119px'
  triangle_1_big.style.height = '119px'

  triangle_2_big.style.width = '119px'
  triangle_2_big.style.height = '119px'

  triangle_1_medium.style.width = '85px'
  triangle_1_medium.style.height = '85px'

  triangle_1_small.style.width = '60px'
  triangle_1_small.style.height = '60px'

  triangle_2_small.style.width = '60px'
  triangle_2_small.style.height = '60px'

  parallelepiped.style.width = '85px'
  parallelepiped.style.height = '43px'

})


const scale_figures_1x = function () {

  const square_top = parseInt(getComputedStyle(square).top)

  if (square_top === 267) {

    square.style.top = '257px'
    square.style.left = '225px'
    square.style.transform = 'rotate(45deg)'

    triangle_1_big.style.top = '223px'
    triangle_1_big.style.left = '40px'
    triangle_1_big.style.transform = 'rotate(-135deg)'

    triangle_2_big.style.top = '123px'
    triangle_2_big.style.left = '139px'
    triangle_2_big.style.transform = 'rotate(-45deg)'

    triangle_1_medium.style.top = '293px'
    triangle_1_medium.style.left = '210px'
    triangle_1_medium.style.transform = 'rotate(-90deg)'

    triangle_1_small.style.top = '307px'
    triangle_1_small.style.left = '175px'
    triangle_1_small.style.transform = 'rotate(135deg)'

    triangle_2_small.style.top = '207px'
    triangle_2_small.style.left = '275px'
    triangle_2_small.style.transform = 'rotate(45deg)'

    parallelepiped.style.top = '343px'
    parallelepiped.style.left = '135px'
    parallelepiped.style.transform = 'rotate(0deg) skew(-45deg)'

    figures.square = {
      top: 257,
      left: 225,
      rotation_angle: 45,
    }


    figures.triangle_1_big = {
      top: 223,
      left: 40,
      rotation_angle: -135,
    }

    figures.triangle_2_big = {
      top: 123,
      left: 139,
      rotation_angle: -45,
    }

    figures.triangle_1_medium = {
      top: 293,
      left: 210,
      rotation_angle: -90,
    }

    figures.triangle_1_small = {
      top: 307,
      left: 175,
      rotation_angle: 135,
    }

    figures.triangle_2_small = {
      top: 207,
      left: 275,
      rotation_angle: 45,
    }


    figures.parallelepiped = {
      top: 343,
      left: 135,
      rotation_angle: -45,
    }

  }

  square.style.width = '70px'
  square.style.height = '70px'

  triangle_1_big.style.width = '140px'
  triangle_1_big.style.height = '140px'

  triangle_2_big.style.width = '140px'
  triangle_2_big.style.height = '140px'

  triangle_1_medium.style.width = '100px'
  triangle_1_medium.style.height = '100px'

  triangle_1_small.style.width = '70px'
  triangle_1_small.style.height = '70px'

  triangle_2_small.style.width = '70px'
  triangle_2_small.style.height = '70px'

  parallelepiped.style.width = '100px'
  parallelepiped.style.height = '50px'

}


btn_1x.addEventListener('click', function () {

  scale_figures_1x()

})





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

  console.log(temp_shape_obj);


  // save_obj.style.display = 'block'
  // save_obj.textContent = JSON.stringify(temp_shape_obj, null, 2);



  // console.log(temp_shape_obj);


})



// Функция создания фигуры основными танами или танами шаблона
const build_shape = function () {

  // если фигуры находятся в масштабе 0.85x то увеличчием фигуры до 1х автоматически, так как все формы у нас в масштабе 1х
  scale_figures_1x()

  // передаем в функцию параметр чтобы понимать из каких именно фигур строить форму (основных игровых или template)

  // 1. забираем название фигуры, которую хотим построить из селектора со списком фигур
  const shape = shape_selector.value

  // 2. проходимся циклом по объекту в котормо содержатся координаты всех доступных фигур, чтобы найти объект с координатами нужной фигуры
  for (const [form, figures_param] of Object.entries(shapes)) {

    // 3. form - это ключи итерируемого объекта, то есть названия фигур, как только ключ (form) совпадает с выбранным из селектора (shape) мы забираем объект (figures_param) с координатами нужного form пок аждой фигуре и переходим к нему (шаг 4)
    if (form === shape) {

      // 4. итерируем по выбранной форме все фигуры и даем каждой фигруе вытянутое из объекта расположение
      for (const figure of Object.entries(figures_param)) {

        const figure_target = figure[0]

        const top = figure[1].top
        const left = figure[1].left
        const rotation_angle = figure[1].rotation_angle

        const skew = figure[1].skew

        document.querySelector(`.${figure_target}`).style.top = top + 'px'
        document.querySelector(`.${figure_target}`).style.left = left + 'px'

        // skew есть только у параллепипеда, поэтому у всех остальных фигур он undefined, чтобы избежать ошибок проверяем есть ли параметр skew и есль есть то знанчит это паралепипед и намного по другому названчаем ему стили
        if (skew) {
          document.querySelector(`.${figure_target}`).style.transform = 'rotate(' + rotation_angle + 'deg)' + ' skew(' + skew + 'deg)'
        } else {
          document.querySelector(`.${figure_target}`).style.transform = 'rotate(' + rotation_angle + 'deg)'
        }

        // обновляем текущие координаты фигур
        figures[figure_target] = {
          top: top,
          left: left,
          rotation_angle: rotation_angle,
        }

      }

    }

  }

}




// Создание выбранного в селекторе фигуры
shape_selector.addEventListener('input', function () {

  build_shape()

})




// Кнопка reset - возврат фигур в первоначальнео положение 
btn_reset.addEventListener('click', function () {


  // display_template_figures('none')


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



})





// ? DECORATIONS - border

// функция выделения бордером текущей активнйо фигуры
const highlight_active_figure = function (active_figure) {

  // убираем класс active_border со всех фигур и ставим z-index = 0
  for (const element of figures_all.entries()) {
    document.querySelector(`.${element[1].classList[1]}`).classList.remove('active_border');
    document.querySelector(`.${element[1].classList[1]}`).style.zIndex = '2'
  }

  // добавляем класс active_border к текущей фигуре, на которую кликнули
  document.querySelector(`.${active_figure}`).classList.add('active_border');

  // ставим z-index к текущей фигуре = 3, на которую кликнули, она выходит на первый план 
  document.querySelector(`.${active_figure}`).style.zIndex = '3'

}


// Добавление бордера к выбранной фигуре
figures_all.forEach(function (figure) {


  figure.addEventListener('click', function (event) {

    if (checkbox_multimovements.checked) {

      // console.log('checked');

      active_figures_movements.push(this.classList[1])
      // console.log(active_figures_movements);

      // добавляем класс active_border к текущей фигуре, на которую кликнули
      document.querySelector(`.${this.classList[1]}`).classList.add('active_border');

    } else {

      active_figure = this.classList[1]

      highlight_active_figure(active_figure)

    }

    event.stopPropagation();

  })

})





// ? BTN's menu open/close

btn_menu_close.addEventListener('click', function () {
  // menu_container.classList.add('menu_hidden')
  menu_container.style.left = '-400px'
})


btn_menu_open.addEventListener('click', function () {
  // menu_container.classList.remove('menu_hidden')
  menu_container.style.left = '6%'
})




// ? BTN's BACKGROUND preview open/close

btn_background_container_close.addEventListener('click', function () {
  // backgrounds_container.classList.add('menu_hidden')
  backgrounds_container.style.left = '-400px'
})

btn_background_container_open.addEventListener('click', function () {
  // backgrounds_container.classList.remove('menu_hidden')
  backgrounds_container.style.left = '6%'
})







// ? MOVING PLAYGROUND CONTAINER UP ON CLICK

container_playground.addEventListener('click', function () {
  container_playground.classList.toggle('move_top_70px')
})




// ? ADD CUSTOM BACKGROUND
input_bg_url.addEventListener('change', function () {

  const url = input_bg_url.value

  const opacity = Number(slider.value)


  container_playground.style.background = `linear-gradient(rgba(28, 52, 88, ${opacity}), rgba(28, 52, 88, ${opacity})), url('${url}')`

  container_playground.style.backgroundSize = 'cover'
  container_playground.style.backgroundPosition = 'bottom'

  current_img_url = url

  input_bg_url.value = ''

})




// ? GENERATE RANDOM SHAPE
btn_gen_rand_shape.addEventListener('click', function () {

  const arr_keys = []

  for (const key of Object.keys(shapes)) {
    arr_keys.push(key)
  }

  const random_number = Math.floor(Math.random() * (arr_keys.length - 1 + 1)) + 0

  btn_gen_rand_shape.textContent = arr_keys[random_number]

})


