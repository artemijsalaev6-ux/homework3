export const productSlider = () => {
   new Swiper(".product__slider", {
      slidesPerView: "auto",
      centeredSlides: true,
      loop: true,
         mousewheel: {
         forceToAxis: true,
      },
      navigation: {
         prevEl: ".product-button-prew",
         nextEl: ".product-button-next",
      },
   });
}; 
