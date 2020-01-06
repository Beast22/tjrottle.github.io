


var oSliders = {

	slideCont: document.querySelector('.slide_up_container'),

	slides: document.querySelectorAll('.slide'),

	slideIndex: 0,

	h: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,

	init: function(){

		var p = document.getElementById('page'),

			slides = document.querySelectorAll('.slide'),

			currentSlide = document.querySelector('.active'),

	    	nextSlide = currentSlide.nextElementSibling,

	    	previousSlide = currentSlide.previousElementSibling;

	    	p.style.paddingTop = oSliders.h - 130 + 'px';

	    	p.addEventListener('mousewheel', oSliders.mThrottle(oSliders.searchActiveClass, 1000));

	    	oSliders.slideCont.style.top = "0px";

			oSliders.getDocH();
	},

	getDocH: function(){

		var db=document.body;

		return(db.scrollHeight>db.offsetHeight)?db.scrollHeight:db.offsetHeight;

		console.log((db.scrollHeight>db.offsetHeight)?db.scrollHeight:db.offsetHeight);
	},

	mThrottle: function(fn, wait){

		var slidesArray = Array.from(this.slides);

		  var time = Date.now();

		  return function(...args) {

		    if ((time + wait - Date.now()) < 0) {

		      fn(...args);

		      time = Date.now();

		    }
		  }
	},

	searchActiveClass: function(e){

		var slides = document.querySelectorAll('.slide'),

			slidesArray = Array.from(slides),

			dots = document.querySelectorAll('.dot'),

			dotsArray = Array.from(dots);

		if(e.deltaY < 0) {

			// slide up

			if(oSliders.slideIndex > 0){


				if(document.querySelector('body').classList.contains(flow)){
					
					document.querySelector('body').classList.remove('flow');

					oSliders.slideCont.style.top = "0px";
				}	

				slidesArray[oSliders.slideIndex].classList.remove('active');

				slidesArray[oSliders.slideIndex].previousElementSibling.classList.add('active');

				slidesArray[oSliders.slideIndex].previousElementSibling.classList.remove('old');

				dotsArray[oSliders.slideIndex].classList.remove('active');

				dotsArray[oSliders.slideIndex].previousElementSibling.classList.add('active');				

				oSliders.slideIndex--;
			}

			console.log(oSliders.slideIndex);

			console.log('up');

		} else {

			// last slide down

			if (oSliders.slideIndex == slidesArray.length - 1){

				oSliders.slideCont.style.top = '-' + oSliders.h + 'px';

				oSliders.slideCont.style.overflow = 'visible';

				console.log('last');

				oSliders.bodyFlow();

				return false;
			} 


			  	slidesArray[oSliders.slideIndex].classList.remove('active');

			  	slidesArray[oSliders.slideIndex].classList.add('old');			  	

			  	slidesArray[oSliders.slideIndex].nextElementSibling.classList.add('active');

			  	dotsArray[oSliders.slideIndex].classList.remove('active');

			  	dotsArray[oSliders.slideIndex].nextElementSibling.classList.add('active');

			  	oSliders.slideIndex++;

		  	console.log('down');

		  	console.log(oSliders.slideIndex);

		  }
		  
		return false;

	},

	bodyFlow: function(){
		console.log('bodyFlow');
		document.querySelector('body').classList.add('flow');

	}
}


document.addEventListener("DOMContentLoaded", oSliders.init);




// var r = document.querySelector('.cont');

// r.addEventListener('mousewheel', throttle(mouse, 1000));

// console.log(Array.from(document.querySelectorAll('.cont div'))[0]);


// var index = 0;

// function mouse(e){

// 	if(e.deltaY < 0) {



// 	} else {
		
// 		index++;

// 		var q = Array.from(document.querySelectorAll('.cont div'));

// 		q[index].classList.remove('active');

// 		q[index].classList.add('old');
// 	}

// }

//  function debounce (func, wait, immediate) {

// 		var timeout;

// 		return function() {

// 			var context = this, args = arguments;

// 			var later = function() {

// 				timeout = null;

// 				if (!immediate) func.apply(context, args);
// 			};

// 			var callNow = immediate && !timeout;

// 			clearTimeout(timeout);

// 			timeout = setTimeout(later, wait);

// 			if (callNow) func.apply(context, args);
// 		};

// 	}


// function throttle(cb, timeout) {

//   let lastCall = 0;

//   return function() {
//     if (new Date() - lastCall > timeout) {
//       lastCall = new Date();

//       cb(...args);
//     }
//   }
// }