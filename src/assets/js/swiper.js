  // Swiper

import Swiper from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css/bundle';


  const swiper = new Swiper(".mySwiper", {
    modules: [Navigation, Pagination],
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  breakpoints: {
      // When the viewport is 640px or larger
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // When the viewport is 1024px or larger
      1024: {
        slidesPerView: 1,
        spaceBetween: 30,
      }
    }
  });




var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  
  spaceBetween: 2,
  centeredSlides: true,
  pagination: {
    el: ".mySwiper2 .swiper-pagination",
    clickable: true,
  },
  loop: false,
  on: {
    slideChange: function () {
      updateActiveTab(swiper2.realIndex);
    },
  },

 breakpoints: {
    // When the viewport is 640px or larger
    640: {
      slidesPerView: 1,
      spaceBetween: 1,
    },
    // When the viewport is 1024px or larger
    1024: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});


// Select all tab buttons
const tabButtons = document.querySelectorAll(".tab-buttons");
const menuTab = document.querySelector(".menu-tab"); // The tab container

// Add event listeners for clicks on tabs
tabButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    swiper2.slideTo(index);
    updateActiveTab(index);

    // Scroll the menu-tab to bring the clicked tab into view
    menuTab.scrollTo({
      left: button.offsetLeft - menuTab.offsetLeft, // Move tab toward left
      behavior: "smooth",
    });


  });
});

// Function to update the active tab style
function updateActiveTab(activeIndex) {
  tabButtons.forEach((button, index) => {
    button.classList.toggle("active", index === activeIndex);
  });
}


// Swiper para sección de comentarios
  const swiperReviews = new Swiper(".mySwiperReviews", {
    modules: [Navigation, Pagination],
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".mySwiperReviews .swiper-pagination",
      clickable: true,
    },
  breakpoints: {
  
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    
      1024: {
        slidesPerView: 1,
        spaceBetween: 30,
      }
    }
  });





