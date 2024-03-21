background_selector.addEventListener('input', function () {

  const img_name = background_selector.value
  const opacity = 0.5


  container_playground.style.background = `linear-gradient(rgba(28, 52, 88, ${opacity}), rgba(28, 52, 88, ${opacity})), url('images/background/${img_name}.jpg')`

  container_playground.style.backgroundSize = 'cover'
  container_playground.style.backgroundPosition = 'bottom'


})


// input_opacity.addEventListener('input', function () {

//   const img_name = background_selector.value
//   const opacity = Number(input_opacity.value)

//   console.log(img_name);

//   container_playground.style.background = `linear-gradient(rgba(28, 52, 88, ${opacity}), rgba(28, 52, 88, ${opacity})), url('images/background/${img_name}.jpg')`

//   container_playground.style.backgroundSize = 'cover'
//   container_playground.style.backgroundPosition = 'bottom'


// })



slider.addEventListener('input', function (event) {
  // Получаем значение ползунка


  const img_name = background_selector.value
  const opacity = Number(event.target.value)


  container_playground.style.background = `linear-gradient(rgba(28, 52, 88, ${opacity}), rgba(28, 52, 88, ${opacity})), url('images/background/${img_name}.jpg')`

  container_playground.style.backgroundSize = 'cover'
  container_playground.style.backgroundPosition = 'bottom'

});