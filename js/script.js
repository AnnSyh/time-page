window.onload = function () {

  const arrowTop = document.querySelector(".arrow-top");
  console.log('arrowTop = ', arrowTop);

  document.querySelector(".arrow-top").addEventListener("click", function () {
    window.location.href = '#top';
  });

  // клик по стрелочке вверх
  arrowTop.addEventListener("click", function () {
    window.location.href = '#top';
  });

  window.addEventListener('scroll', function () {

    // стрелка вверх
    if (window.scrollY > 200) {
      arrowTop.classList.add('arrow-top__visible');
    } else {
      arrowTop.classList.remove('arrow-top__visible');
    }
  })


}

