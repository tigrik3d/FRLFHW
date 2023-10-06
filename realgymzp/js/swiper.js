const swiper = new Swiper('.swiper', {
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


// let sliderIndex = 0;
// showSlides();

// function showSlides() {
//     let slides = document.querySelectorAll('.staff__column');
    
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = 'none';
//     }
    
//     sliderIndex++;
    
//     if (sliderIndex > slides.length) {
//         sliderIndex = 1;
//     }
    
//     slides[sliderIndex - 1].style.display = 'block';
    
//     setTimeout(showSlides, 3000); // Изменяйте время, чтобы настроить скорость смены слайдов
// }

