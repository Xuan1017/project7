/* ----------------------------------- */
/* ------ Custom ------ */
/* ----------------------------------- */

// -- Detect Browser
// 偵測瀏覽器加入對應 js 文件
function isMobile() {
  try {
    document.createEvent('TouchEvent')
    return true;
  } catch (e) {
    return false;
  }
}
if (!isMobile()) {
  let explorer = navigator.userAgent
  if (explorer.indexOf('Firefox') > -1 || explorer.indexOf('Chrome') > -1) {
    $('body').append('<script async src="js/smooth-scrolling-chrome.js"></script>')
  }
}
// --
// -- 
$(document).ready(function() {
  const pathname = location.pathname;
  console.log(pathname);
  $('a').each(function () {
    let aHref = $(this).attr('href');
    if (pathname.indexOf(aHref) > -1) {
      $(this).addClass('is-active');
    }
  })
})
// --
// -- 在分頁中'navbar'統一置頂
if (!$('body').hasClass('is-home')) {
  $('.c-navbar').addClass('is-fixed');
}
// -- 
// -- 畫面向下移動時，選單置頂
$(window).scroll(function() {
  if ($('body').hasClass('is-home')) {
    if (this.scrollY > $('.l-header').outerHeight() / 2) {
      $('.c-navbar').addClass('is-fixed');
    } else {
      $('.c-navbar').removeClass('is-fixed');
    }
  }

  const newsTop = $('.l-news').offset().top - 60;
  const newsBottom = newsTop + $('.l-news').outerHeight() / 1.6;
  if (this.scrollY > newsTop && this.scrollY < newsBottom) {
    $('body').addClass('is-news-active');
  } else {
    $('body').removeClass('is-news-active');
  }
});


let isOpened = false;
function handleBurger() {
  if (isOpened === false) {
    $('.o-burger').addClass('is-opened');
    $('.c-navbar').addClass('is-opened');
    setTimeout(function () {
      $('.c-navbar__body').css({
        overflow: 'auto',
      })
    }, 1000)
    isOpened = true;
  } else if (isOpened === true) {
    $('.o-burger').removeClass('is-opened');
    $('.c-navbar').removeClass('is-opened');
    setTimeout(function () {
      $('.c-navbar__body').css({
        overflow: 'hidden',
      })
    }, 1000)
    isOpened = false;
  }
}
// --
// --gotop
let isGotop = false;
$('.o-gotop').click(function() {
  if (!isGotop) {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
    isGotop = true;

    setTimeout(function() {
      // 重新開啟按鈕
      isGotop = false;
    }, 1000)
  }
})

/* ----------------------------------- */
/* ------ Plugin ------ */
/* ----------------------------------- */
const scene = document.querySelectorAll('.js-parallax');
scene.forEach(function(el) {
  new Parallax(el, {
    // 滑鼠相對於指定元素（預設為可視區）
    relativeInput: true,
    // 滑鼠進入元素內才生效
    hoverOnly: true
  });
})
// const parallaxInstance = new Parallax(scene, {
//   // 滑鼠相對於指定元素（預設為可視區）
//   relativeInput: true,
//   // 滑鼠進入元素內才生效
//   hoverOnly: true
// });

const headerSwiper = new Swiper('.l-header__swiper', {
  effect: 'fade',
  loop: true,
  // 緩慢施放
  longSwipesRatio: 0.1,
  speed: 1600,
	// autoplay: true,
	autoplay: {
    delay: 3000,
    // 防止手動切換後，autoplay 無效
    disableOnInteraction: false
  }
})

const newsSwiper = new Swiper('.l-news__swiper', {
  loop: true,
  longSwipesRatio: 0.1,
  slidesPerView: 1,
  spaceBetween: 4,
  speed: 1600,
	// autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false
  // }
  breakpoints: {
    1366: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    }
  },
  navigation: {
    nextEl: '.l-news__btn-swiper.--next',
    prevEl: '.l-news__btn-swiper.--prev',
  },
})

