const bg_urls = [
  'https://i.pinimg.com/564x/35/1b/20/351b20af9ae9ae3c12f3a368e9fea86f.jpg',
  'https://i.pinimg.com/564x/4f/d3/f6/4fd3f654957c43516af0489b1b24c6f9.jpg',
  'https://i.pinimg.com/736x/05/40/68/0540689a3e3a27af6af916b4daedb029.jpg',
  'https://i.pinimg.com/564x/88/52/bb/8852bbf7d85eb002ff4f19dc1d7635cf.jpg',
  'https://i.pinimg.com/564x/48/bc/c6/48bcc643d3c04dad93873dfa8954da76.jpg',
  'https://i.pinimg.com/564x/71/34/6d/71346da0d332c24ff7c9c9aad33336f3.jpg',
  'https://i.pinimg.com/736x/ae/c7/da/aec7da997905efe58a3b7c54176b0183.jpg',
  'https://i.pinimg.com/736x/6c/de/d4/6cded44e8672826f5dc67601bc82d06d.jpg',
  'https://i.pinimg.com/736x/a0/1c/af/a01cafbe10454b9b12cb8c8aafc9402f.jpg',
  'https://i.pinimg.com/736x/71/4f/d5/714fd53e121806e7883bab775444b56a.jpg',
  'https://i.pinimg.com/736x/fc/89/59/fc89596fccddf6e0b60bf46026461045.jpg',
  'https://i.pinimg.com/736x/c3/bf/c6/c3bfc688e10fba96c05c3ca7de9118b6.jpg',
  'https://i.pinimg.com/564x/e7/8c/e1/e78ce1547f291de44ed99f21521d0592.jpg',
  'https://i.pinimg.com/564x/53/7b/41/537b411796887b5640ab6aed627a2bda.jpg',
  'https://i.pinimg.com/564x/3c/1e/d0/3c1ed07a3ba516d2dccf6250a3d02e4b.jpg',
  'https://i.pinimg.com/564x/0a/91/a9/0a91a92afe35ca2cbb5d076d3ac72b1c.jpg',
  'https://i.pinimg.com/564x/9d/1e/05/9d1e0506e39492fec35d29364fd32ce9.jpg',
  'https://i.pinimg.com/564x/e5/16/dd/e516ddbe7ff9e4beb6c1de36cac81304.jpg',
  'https://i.pinimg.com/564x/a7/11/c3/a711c3a9d60cf542132536f735610593.jpg',
  'https://i.pinimg.com/564x/e6/aa/b1/e6aab1c81b263da9cfff383241db961e.jpg',
  'https://i.pinimg.com/564x/1e/91/83/1e91832eda96e2045dfefa96080aeebd.jpg',
  'https://i.pinimg.com/564x/fa/a3/66/faa3663096d42ca7000d14e17286e803.jpg',
  'https://i.pinimg.com/564x/3e/bf/b9/3ebfb9a6de94e65f7381bd7cfef2cbe1.jpg',
  'https://i.pinimg.com/564x/46/42/25/464225e17b3964c543ee735c2ac59b30.jpg',
  'https://i.pinimg.com/564x/cb/49/65/cb4965148e3d6df64ab46e37894c0b77.jpg',
  'https://i.pinimg.com/564x/a3/68/1a/a3681ad1fa49ce41167c9e882dc30867.jpg',
  'https://i.pinimg.com/564x/27/88/d8/2788d8a20408d4b2687ec098ae86dcbe.jpg',
  'https://i.pinimg.com/736x/19/ef/49/19ef49bdb26c3c3c5780d28780e88bac.jpg',
  'https://i.pinimg.com/736x/cb/5b/8e/cb5b8ef4eb0af023a479c662c930cc95.jpg',
  'https://i.pinimg.com/564x/a4/e6/4b/a4e64b40a4f5fd121aa4af2d14ba8757.jpg',
  'https://i.pinimg.com/564x/5f/5c/a4/5f5ca42af37205249e72418e42e07018.jpg',
  'https://i.pinimg.com/564x/af/f5/6f/aff56f5238e2cf52177dbdf6bc1d3623.jpg',
  'https://i.pinimg.com/736x/6b/fc/af/6bfcaf795f27643cff6aff702dba66ca.jpg',
  'https://i.pinimg.com/564x/16/d0/27/16d0276508b4313fc3d24c7acde1419f.jpg',
  'https://i.pinimg.com/564x/db/dc/0c/dbdc0c4789f382eeb0f57a96c8b618bc.jpg',
  'https://i.pinimg.com/564x/36/ae/95/36ae95e58a804581f66346b74ea07ecd.jpg',
  'https://i.pinimg.com/564x/d1/ac/d5/d1acd525d19a4795abdc80dcb3fd73a7.jpg',
  'https://i.pinimg.com/564x/57/29/d3/5729d37fb208994cb8c3a1ec42a3a186.jpg',
  'https://i.pinimg.com/564x/d2/62/bf/d262bffb1ed0a607cf9617cfaf6113ed.jpg',
  'https://i.pinimg.com/564x/59/2f/07/592f07269e1a5e3afed4dfcdc0e71474.jpg',
  'https://i.pinimg.com/564x/f4/d0/9d/f4d09d0dbe7372fed3834f633f611106.jpg',
  'https://i.pinimg.com/564x/97/0b/a1/970ba14485ec04ea0746856d02289277.jpg',
  'https://i.pinimg.com/564x/e6/c6/af/e6c6af0054e2575a79007fae00d3fb57.jpg',
  'https://i.pinimg.com/564x/75/d1/17/75d117da42b190a4684bf64fe468715a.jpg',
  'https://i.pinimg.com/564x/53/4d/56/534d56552a817882d72e496480cf7c1f.jpg',
  'https://i.pinimg.com/564x/9e/ff/7a/9eff7ab9018710304b868b27ce52119f.jpg',
  'https://i.pinimg.com/564x/d8/07/41/d80741be6b997a4b6e413c3651a5d109.jpg',
  'https://i.pinimg.com/564x/7f/f4/fc/7ff4fc0d4f962fc79f2479279aea80b2.jpg',
  'https://i.pinimg.com/564x/9d/2d/13/9d2d13113388a6fcbd484a2fc1ffb8cf.jpg',
  'https://i.pinimg.com/564x/8d/01/86/8d01865dd664a5bfaa9da22355c2281e.jpg',
  'https://i.pinimg.com/736x/40/f0/a8/40f0a856feed333a909e55e24df29a6b.jpg'

]


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

      const opacity = Number(slider.value)


      container_playground.style.background = `linear-gradient(rgba(28, 52, 88, ${opacity}), rgba(28, 52, 88, ${opacity})), url('${bg_urls[el.id]}')`

      container_playground.style.backgroundSize = 'cover'
      container_playground.style.backgroundPosition = 'bottom'

      current_img_url = bg_urls[el.id]

    })

  })

}

set_background()






slider.addEventListener('input', function (event) {

  const opacity = Number(event.target.value)

  container_playground.style.background = `linear-gradient(rgba(28, 52, 88, ${opacity}), rgba(28, 52, 88, ${opacity})), url('${current_img_url}')`

  container_playground.style.backgroundSize = 'cover'
  container_playground.style.backgroundPosition = 'bottom'

});