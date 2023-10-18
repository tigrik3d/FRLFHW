 const swiper = new Swiper('.slider1', {
// 	// Optional parameters
direction: 'horizontal',
 	loop: true,
// 	// slidesPerView: 2,
 
// 	// If we need pagination
 	pagination: {
 		el: '.swiper-pagination',
 		clickable:true,
	 },
	  
 
// 	// Navigation arrows
// 	// navigation: {
// 	//   nextEl: '.swiper-button-next',
// 	//   prevEl: '.swiper-button-prev',
// 	// },

 	autoplay: {
 		delay:2000,
	 }
	 
 
 });

 // Инициализация первого слайдера
// var slider1 = new Swiper('.slider1', {
// 	direction: 'horizontal',
// 	loop: true,
// 	slidesPerView: 2,
// 	pagination: {
// 	  el: '.swiper-pagination',
// 	  clickable: true,
// 	},
// 	autoplay: {
// 	  delay: 2000,
// 	},
//  });
 
 // Инициализация второго слайдера
 var slider2 = new Swiper('.slider2', {
	direction: 'horizontal',
	loop: true,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	 },
	 centeredSlides: true, // Центрировать активный слайд
	 spaceBetween: 14, // Убрать промежутки между слайдами

	// autoplay: {
	//   delay: 5000,
	//  },
	 
 });
 
 // Создание медиа-запроса для второго слайдера
 const mediaQuery = window.matchMedia("(max-width: 760px)");
 
 // Функция для обработки изменений состояния медиа-запроса
 function handleMediaChange(event) {
	if (event.matches) {
	  // Сработает, если ширина экрана <= 510px
	  slider2.params.slidesPerView = 2;
	  slider2.params.centeredSlides = true;
	} else {
	  // Сработает, если ширина экрана > 510px
	  slider2.params.slidesPerView = 1;
	  slider2.params.centeredSlides = false;
	}
 
	// Обновление второго Swiper слайдера
	slider2.update();
 }
 
 // Добавление слушателя на изменения состояния медиа-запроса
 mediaQuery.addListener(handleMediaChange);
 
 // Вызов функции обработки для начальной проверки
 handleMediaChange(mediaQuery);