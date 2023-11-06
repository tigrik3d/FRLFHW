 const swiper1 = new Swiper('.swiper1', {
// Optional parameters
direction: 'horizontal',
 	loop: true,
 	// slidesPerView: 2,
 
 	// If we need pagination
 	pagination: {
 		el: '.swiper-pagination',
 		clickable:true,
	 },
	  
 
// Navigation arrows
 	// navigation: {
 	//   nextEl: '.swiper-button-next',
 	//   prevEl: '.swiper-button-prev',
 	// },

 	autoplay: {
 		delay:2000,
	 }
	 
 
 });
 
 const swiper2 = new Swiper('.swiper2', {
	// Опции вашего второго Swiper
	 direction: 'horizontal',
	 centeredSlides: true, // Центрирование активного слайда
    spaceBetween: 5, // Расстояние между слайдами
	loop: true,
	slidesPerView: 1.6,
	//  spaceBetween: 20,
	//  initialSlide: 2,
	//  centeredSlides: true,
	pagination: {
		 el: '.swiper-pagination',
		 clickable: true,
	},
	// autoplay: {
	// 	 delay: 2000,
	// },
});
