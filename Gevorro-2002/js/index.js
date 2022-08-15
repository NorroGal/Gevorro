








document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
      document.querySelector('#menu').classList.toggle('is-active')

      document.querySelector('#burger').classList.toggle('active')

      document.querySelector('.burger__line').classList.toggle('active')

      document.querySelector('body').classList.toggle('lock')
  })


  //Крестик к бургеру можно еще так добавить

  //   $('.burger__header').click(function (event) {
  //     $('.burger__header,.burger__line').toggleClass('active');
  //     $('body').toggleClass('lock');
  // });

  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: "auto",
    speed: 1300,
    pagination: {
      el: ".swiper-pagination",
    },  
    autoplay: {
      delay:1800,
      disableOnInteraction: false,
    },
  });

  const Porjectsswiper = new Swiper(".projects-swiper", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: "auto",
    speed: 800,
    // If we need pagination
    pagination: {
      el: ".projects-pagination",
      type: "fraction",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".projects-button-next",
      prevEl: ".projects-button-prev",
    },
    autoplay: {
      delay: 1800,
      disableOnInteraction: false,
    },
  });

    document.querySelectorAll('.section-work__step').forEach(function(tabsBtn) {
      tabsBtn.addEventListener('click', function(event) {
          const path = event.currentTarget.dataset.path;

        document.querySelectorAll('.section-work__connect').forEach(function(tabContent) {
          tabContent.classList.remove('section-work__connect-active')
        document.querySelector(`[data-target="${path}"]`).classList.add('section-work__connect-active')
        })
    })

      tabsBtn.addEventListener('click', function(event) {
        const tabi = event.currentTarget.dataset.tab;

        document.querySelectorAll('.section-work__step').forEach(function(tabContent) {
          tabContent.classList.remove('section-work__step-active')
        document.querySelector(`[data-path="${tabi}"]`).classList.add('section-work__step-active')
        })
      })



      //Можно и так без второго data-set в одной кнопке

      // tabsBtn.addEventListener('click', function(event) {
      //   const tabi = event.currentTarget.dataset.path;

      //   document.querySelectorAll('.section-work__step').forEach(function(tabContent) {
      //     tabContent.classList.remove('section-work__step-active')
      //   document.querySelector(`[data-path="${tabi}"]`).classList.add('section-work__step-active')
      //   })
      // })
  })

  $(function () {
    $("#accordion").accordion({
      active: false,   // аккордеон всегда закрыт при входе на сайт
      collapsible: true,   // закрытие и открытие аккорденона
      animate: 400,   // скорость анимации
      //event: "mouseover", // при hover:Наведение мышкой на аккордеон , 
    });
  });
})
