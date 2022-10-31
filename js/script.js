window.onload = function () {

  //стрелка в верх
  const arrowTop = document.querySelector(".arrow-top");
  const top = document.querySelector('#top');
  console.log('top = ', top);

  function scrollTo(element) {
    window.scroll({
      left: 0,
      top: element.offsetTop,
      behavior: 'smooth'
    })
  }
  // клик по стрелочке вверх
  arrowTop.addEventListener('click', () => {
    scrollTo(top);
    topLineStartingPoint.classList.remove('page-header-fixed');
  })
  // /стрелка в верх

  const startingPoint = document.querySelector('#section2');
  const newVector = document.querySelector('#section3');
  const culturalCode = document.querySelector('#section4');
  const screenLink = document.querySelector('.first-screen__link');

  const topLineStartingPoint = document.querySelector('.report-top-line--starting-point');
  const topLineNewVector = document.querySelector('.report-top-line--new-vector');
  const topLineCulturalCode = document.querySelector('.report-top-line--cultural-code');

  // клик по стрелочке 'СМОТРЕТЬ ОТЧЕТ'
  screenLink.addEventListener('click', () => {
    scrollTo(startingPoint); //прокрутка до пункта нач точка
    // фиксация соот заголовка вверху стр
    console.log('topLineStartingPoint = ', topLineStartingPoint);
    topLineStartingPoint.classList.add('page-header-fixed');
  })

  //показываем/скрываем стрелку при прокрутке экрана на 200 вниз
  window.addEventListener('scroll', function () {
    if (window.scrollY > 200) { // стрелка вверх
      arrowTop.classList.add('arrow-top__visible');
    } else {
      arrowTop.classList.remove('arrow-top__visible');
    }
  })

  //включаем анимацию счетчиков при прокрутке экрана до соот сетчика
  const pageCounts = document.querySelectorAll(".number-js");

  pageCounts.forEach(item => {

    var numberTop = item.getBoundingClientRect().top
    var start = +item.innerHTML, end = +item.dataset.max;

    window.addEventListener('scroll', function onScroll() {
      if (window.pageYOffset > numberTop - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll);
        var interval = setInterval(function () {
          item.innerHTML = ++start;
          if (start == end) {
            clearInterval(interval);
          }
        });
        // }, 50); // скорость прокрутки
      }
    });

  })
  //анимация счетчиков
  // $(".report-count-js").each(function () {
  //   var tcount = $(this).data("count");
  //   $(this).animateNumber({
  //     number: tcount,
  //     easing: 'easeInQuad',
  //   },
  //     1000);
  // });

  //перeход по страницам
  //прокрутка до след пункта + фиксация соот пункта вверху стр 

  const sections = document.querySelectorAll("section[id]");

  function navHighlighter() {

    // Get current scroll position
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
      const sectionId = current.getAttribute("id");

      /*
      - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
      - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
      */
      if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight
      ) {
        document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");

        if (sectionId == 'section2') {
          document.querySelector('.report-top-line--section1').classList.add("active-prev")

          document.querySelector('.report-top-line--section2').classList.remove("active-prev");
          document.querySelector('.report-top-line--section3').classList.remove("active-prev");
          document.querySelector('.report-top-line--section4').classList.remove("active-prev");

        } else if (sectionId == 'section3') {
          document.querySelector('.report-top-line--section1').classList.add("active-prev")
          document.querySelector('.report-top-line--section2').classList.add("active-prev")

          document.querySelector('.report-top-line--section3').classList.remove("active-prev");
          document.querySelector('.report-top-line--section4').classList.remove("active-prev");

        } else if (sectionId == 'section4') {
          document.querySelector('.report-top-line--section1').classList.add("active-prev")
          document.querySelector('.report-top-line--section2').classList.add("active-prev")
          document.querySelector('.report-top-line--section3').classList.add("active-prev")

          document.querySelector('.report-top-line--section4').classList.remove("active-prev");
        }

      } else {
        document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");

        // document.querySelector('.report-top-line--section1').classList.remove("active-prev");
        // document.querySelector('.report-top-line--section2').classList.remove("active-prev");
      }

    });
  }

  // window.addEventListener("scroll", navHighlighter);

  // //Parallax
  // document.addEventListener('DOMContentLoaded', function() {
  //   initializeParallax(document.querySelector('.viewport'));
  // });


}

