$.fn.SnakeParallax = function (a) {
  // console.log('a = ',a);
  this.ready(function () {
    $('[snake-parallax="hero"]').css({
      "background-repeat": "no-repeat",
      "background-size": "cover",
      "background-color": "#fff",
      overflow: "hidden",
      width: "100%",
      height: "100vh",
      position: "relative"
    });
    $('[snake-parallax="hero-1"]').css({
      "background-repeat": "no-repeat",
      "background-size": "cover",
      "background-color": "#fff",
      overflow: "hidden",
      width: "100%",
      height: "100vh",
      position: "relative"
    });
    var e = $.extend({ backgroundPosition: "center top", backgroundImage: "" }, a);
    return (
      $('[snake-parallax="hero"]').css({
        backgroundPosition: e.backgroundPosition,
        backgroundImage: e.backgroundImage
      }),
      $('[snake-parallax="hero-1"]').css({
        backgroundPosition: e.backgroundPosition,
        backgroundImage: e.backgroundImage
      })
    )
  }),
    this.scroll(function () {
      var a = $(document).scrollTop().valueOf() / 1.5;

      // console.log(' Math.round(a)  = ', Math.round(a) );

      $('[snake-parallax="hero"]').css({
        // minHeight: "405px", 
        height: "calc(120vh - " + Math.round(a) + "px)"
      })
      $('[snake-parallax="hero-1"]').css({
        height: "calc(120vh - " + Math.round(a) + "px)"
      })
    })
};