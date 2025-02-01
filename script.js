const navHandler = () => {
    // Toggle visibility of the mobile menu and items
    document.getElementById('overlay-mobile').classList.toggle('overlay-mobile-active');
    document.getElementById('mobile-menu').classList.toggle('mobile-menu');
    document.getElementById('mobile-item1').classList.toggle('mobile-item');
    document.getElementById('mobile-item2').classList.toggle('mobile-item');
    document.getElementById('mobile-item3').classList.toggle('mobile-item');
    document.getElementById('mobile-item4').classList.toggle('mobile-item');
    document.getElementById('mobile-item5').classList.toggle('mobile-item');
  };
  
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal', // Ensure this is set to horizontal
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next', // Swiper will handle this
      prevEl: '.swiper-button-prev', // Swiper will handle this
    },
    pagination: false,
    scrollbar: false,
  });