const create_color_schema_boxes = function () {

  for (let i = 0; i < color_schema.square.background.length; i++) {
    const schema_box = document.createElement('div');
    schema_box.classList.add('schema_box');
    schema_box.classList.add(`schema_box_${i + 1}`);
    schema_box.setAttribute('value', `${i}`);
    colors_container.appendChild(schema_box);
  }

}


create_color_schema_boxes()


const btns_colors_schema = document.querySelectorAll('.schema_box')

const schema_boxes = document.querySelectorAll('.schema_box')



const add_colors_to_schema_boxes = function () {

  for (let i = 0; i < schema_boxes.length; i++) {

    for (let y = 1; y < 5; y++) {

      const schema_box_part = document.createElement('div');
      schema_box_part.classList.add('schema_box_part');
      schema_box_part.classList.add(`schema_box_${i + 1}_part_${y}`);

      if (y === 1) {
        schema_box_part.style.background = color_schema.square.background[i]
      } else if (y === 2) {
        schema_box_part.style.background = color_schema.triangle_1_big.background[i]
      } else if (y === 3) {
        schema_box_part.style.background = color_schema.triangle_2_big.background[i]
      } else if (y === 4) {
        schema_box_part.style.background = color_schema.triangle_1_medium.background[i]
      }

      document.querySelector(`.schema_box_${i + 1}`).appendChild(schema_box_part)

    }

  }

}


add_colors_to_schema_boxes()


// Изменение цветовой схемы фигур
btns_colors_schema.forEach(function (element) {

  element.addEventListener('click', function () {

    for (const [key, value] of Object.entries(color_schema)) {

      document.querySelector(`.${key}`).style.background = `${value.background[element.getAttribute('value')]}`

    }
  })

})


