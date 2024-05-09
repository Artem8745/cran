const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function () {
        return navigator.userAgent.match(/iphone|ipad|ipod/i)
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i)
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows())
    }
}

if (isMobile.any()) {
    document.body.classList.add('_touch')

    let menuArrows = document.querySelectorAll('.menu__arrow')
    if (menuArrows.length>0){
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener('click', function(e) {
                menuArrow.parentElement.classList.toggle('_active')
            })
            
        }
    }


}else {
    document.body.classList.add('_pc')
}



let menuArrows = document.querySelectorAll('.menu__arrow')
  if (menuArrows.length>0){
      for (let index = 0; index < menuArrows.length; index++) {
          const menuArrow = menuArrows[index];
          menuArrow.addEventListener('click', function(e) {
              menuArrow.parentElement.parentElement.classList.toggle('_active')
          })
          
      }
    }

window.addEventListener('scroll', e => {

    let scrollTop = this.scrollY

    if (scrollTop >= 10) {
        document.querySelector('.header').classList.add('_active')
    } else {
        document.querySelector('.header').classList.remove('_active')
    }
})


const headerButton = document.querySelector('.header__button_touch')

function menuToggleOff(){
    document.getElementById('menu__toggle').checked=false;
}

headerButton.addEventListener('click', e => {
    menuToggleOff()
})