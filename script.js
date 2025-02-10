const navHandler = () => {
  const overlayMobile = document.getElementById('overlay-mobile');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileItems = document.querySelectorAll('.item-mobile');

  overlayMobile.classList.toggle('overlay-mobile-active');
  mobileMenu.classList.toggle('mobile-menu');
  mobileItems.forEach((item) => {
    item.classList.toggle('mobile-item');
  });
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

  const { animate, hover, press} = window.Motion; 

  hover(".nav-item-desktop", (element) => {
    animate(element, { scale: 1.3 }, { type: "spring" })

    return () => animate(element, { scale: 1 }, { type: "spring" })
})

press(".item-mobile", (element) => {
  animate(element, { scale: 0.8 }, { type: "spring", stiffness: 1000 })

  return () =>
      animate(element, { scale: 1 }, { type: "spring", stiffness: 500 })
})