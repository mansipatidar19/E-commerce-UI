// Initialization of swiper is done using Swiper constructor
var swiper = new Swiper(".mySwiper", {

  // Slides Per View
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      // Intercation disability 
      disableOnInteraction: false,
    },

    // Responsiveness of the swiper
    breakpoints: {

      // For mobiles
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },

      // For tablets
      750: {
        slidesPerView: 2,
        spaceBetween: 35,
      },

      // For laptops
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });