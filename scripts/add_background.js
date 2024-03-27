const bg_urls = ['https://i.pinimg.com/564x/35/1b/20/351b20af9ae9ae3c12f3a368e9fea86f.jpg', 'https://i.pinimg.com/564x/4f/d3/f6/4fd3f654957c43516af0489b1b24c6f9.jpg', 'https://i.pinimg.com/736x/05/40/68/0540689a3e3a27af6af916b4daedb029.jpg', 'https://i.pinimg.com/564x/88/52/bb/8852bbf7d85eb002ff4f19dc1d7635cf.jpg', 'https://i.pinimg.com/564x/48/bc/c6/48bcc643d3c04dad93873dfa8954da76.jpg', 'https://i.pinimg.com/564x/71/34/6d/71346da0d332c24ff7c9c9aad33336f3.jpg', 'https://i.pinimg.com/736x/ae/c7/da/aec7da997905efe58a3b7c54176b0183.jpg', 'https://i.pinimg.com/736x/6c/de/d4/6cded44e8672826f5dc67601bc82d06d.jpg', 'https://i.pinimg.com/736x/a0/1c/af/a01cafbe10454b9b12cb8c8aafc9402f.jpg', 'https://i.pinimg.com/736x/71/4f/d5/714fd53e121806e7883bab775444b56a.jpg', 'https://i.pinimg.com/736x/fc/89/59/fc89596fccddf6e0b60bf46026461045.jpg', 'https://i.pinimg.com/736x/c3/bf/c6/c3bfc688e10fba96c05c3ca7de9118b6.jpg']


let current_img_url


const add_background_from_arr = function () {

  bg_urls.forEach(function (url, idx) {

    if ((idx + 1) % 2 === 0) {

      const html = `
       <div class="bg_preview">
        <img src="${url}" class="preview_img" alt="" id="${idx}">
       </div>
      `

      left_bg_preview_box.insertAdjacentHTML("beforeend", html)


    } else {

      const html = `
      <div class="bg_preview">
       <img src="${url}" class="preview_img" alt="" id="${idx}">
      </div>
     `

      right_bg_preview_box.insertAdjacentHTML("beforeend", html)

    }


  })

}


add_background_from_arr()

const all_preview_imgs = document.querySelectorAll('.preview_img')


const set_background = function () {

  all_preview_imgs.forEach(function (el) {

    el.addEventListener('click', function () {

      const img_name = background_selector.value
      const opacity = Number(slider.value)


      container_playground.style.background = `linear-gradient(rgba(28, 52, 88, ${opacity}), rgba(28, 52, 88, ${opacity})), url('${bg_urls[el.id]}')`

      container_playground.style.backgroundSize = 'cover'
      container_playground.style.backgroundPosition = 'bottom'

      current_img_url = bg_urls[el.id]

    })

  })

}

set_background()






background_selector.addEventListener('input', function () {

  const img_name = background_selector.value
  const opacity = Number(slider.value)


  container_playground.style.background = `linear-gradient(rgba(28, 52, 88, ${opacity}), rgba(28, 52, 88, ${opacity})), url('images/background/${img_name}.jpg')`

  container_playground.style.backgroundSize = 'cover'
  container_playground.style.backgroundPosition = 'bottom'


})





slider.addEventListener('input', function (event) {
  // Получаем значение ползунка


  const img_name = background_selector.value
  const opacity = Number(event.target.value)


  container_playground.style.background = `linear-gradient(rgba(28, 52, 88, ${opacity}), rgba(28, 52, 88, ${opacity})), url('${current_img_url}')`

  container_playground.style.backgroundSize = 'cover'
  container_playground.style.backgroundPosition = 'bottom'

});