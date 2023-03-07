


// =========swiper class======================
let  swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return index < 2 ? '<span class="' + className + '"></span>' : '';
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  // ============video section===================

const playVid = document.querySelector('.play-vid');
const xMark = document.querySelector('.fa-circle-xmark');
playVid.addEventListener('click', function() {
  xMark.style.display = 'block';
});
let videoWindow = videoWindow ;
function openWindow(){
  videoWindow = window.open("/img/video-tech.mp4", "", "width= 400px,height= 200px left=170px top=280px ")
}
