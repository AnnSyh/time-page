$.fn.SnakeParallax = function (a) { this.ready(function () { $('[snake-parallax="hero"]').css({ "background-repeat": "no-repeat", "background-size": "cover", overflow: "hidden", width: "100%", height: "100vh", position: "relative" }), $("head").append($("<style>body,html{width:100%;height:100%;}</style>")); var e = $.extend({ backgroundPosition: "center top", backgroundImage: "" }, a); return $('[snake-parallax="hero"]').css({ backgroundPosition: e.backgroundPosition, backgroundImage: e.backgroundImage }) }), this.scroll(function () { var a = $(document).scrollTop().valueOf() / 2; $('[snake-parallax="hero"]').css({ height: "calc(100vh - " + Math.round(a) + "px)" }) }) };
