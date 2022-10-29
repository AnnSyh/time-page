window.onload = function () {

  //перход по страницам
  // window.slide = new SlideNav({
  //   changeHash: true
  // });

//стрелка в верх
  const arrowTop = document.querySelector(".arrow-top");
  const top = document.querySelector('#top');
  console.log('top = ',top);

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

    if (window.scrollY > 0) {
      console.log('scroll start!');

      //надо проверить текущую точку нахождения
      //и куда скролят вверх/низ
      // в зависимости от этих 2-х параметров 
      // делать scrollTo(до ближайшей к текущей сверху/снизу точки); 

    }

    if (window.scrollY > 200) { // стрелка вверх
      arrowTop.classList.add('arrow-top__visible');
    } else {
      arrowTop.classList.remove('arrow-top__visible');
      //убираем загловки с верха стр
      // topLineStartingPoint.classList.remove('page-header-fixed');
      // topLineNewVector.classList.remove('page-header-fixed');
      // topLineCulturalCode.classList.remove('page-header-fixed');
    }
  })

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
      ){
        document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
      } else {
        document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
      }
    });
  }
  




  window.addEventListener("scroll", navHighlighter);


}

