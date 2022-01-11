let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


//###js for search bar start###//

window.onscroll =() =>{
    menu.classList.remove('fa-times');
    menu.classList.remove('active');
    
  }
  
  document.querySelector('#search-icon') .onclick =() => {
    document.querySelector('#search-form').classList.toggle('active');
  }
  document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
  }

//###js for search bar end###//

  //###js for slides start###//

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  //###js for slides end###//



  //   REVIEW SLIDE   //

    var swiper = new Swiper(".review-slider", {
      spaceBetween: 20,
      centeredSlides: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      loop:true,
      breakpoints: {
        0: {
            slidesPerView: 3,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });


    // js for navbar activeation

    let section = document.querySelectorAll('section');
      let navLinks = document.querySelectorAll('header .navbar a');
      
      window.onscroll = () => {
      
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
      
        section.forEach(sec => {
      
          let top = window.scrollY;
          let height = sec.offsetHeight;
          let offset = sec.offsetTop - 150;
          let id = sec.getAttribute('id');
      
          if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
              links.classList.remove('active');
              document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
            });
          };
      
        });
      
      }