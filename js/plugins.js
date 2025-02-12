//First Effect
(function($) {
  var s,
    spanizeLetters = {
      settings: {
        letters: $('.effect'),
      },
      init: function() {
        s = this.settings;
        this.bindEvents();
      },
      bindEvents: function() {
        s.letters.html(function(i, el) {
          //spanizeLetters.joinChars();
          var spanizer = $.trim(el).split("");
          return '<span>' + spanizer.join('</span><span>') + '</span>';
        });
      },
    };
  spanizeLetters.init();
})(jQuery);

//Second Effect - Typing Effect
(function() {
  var app;

  $(document).ready(function() {
    return app.init();
  });

  app = {
    text: "Hello, I'm Sharif Khlief a front end developer based in Prague. I've always been drawn to the overlap between design and development. My skills are broad, I enjoy each aspect, and I love building a website from start to finish, I build rich web environments using the most sophisticated technologies available today for interactive and responsive websites, for clients all over the world.",
    index: 0,
    chars: 0,
    speed: 70,
    container: ".typing-effect .content",
    init: function() {
      this.chars = this.text.length;
      return this.write();
    },
    write: function() {
      $(this.container).append(this.text[this.index]);
      if (this.index < this.chars) {
        this.index++;
        return window.setTimeout(function() {
          return app.write();
        }, this.speed);
      }
    }
  };

}).call(this);

// Sticky Nav Bar
$(document).ready(function() {
  var stickyNavTop = $('#toggle').offset().top;
  var stickyNav = function() {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
      $('#toggle').addClass('sticky');
    } else {
      $('#toggle').removeClass('sticky');
    }
  };

  stickyNav();

  $(window).scroll(function() {
    stickyNav();
  });
});

// toggle Nav menu
$("#toggle").click(function() {
  $(this).toggleClass("on");
  $("nav").slideToggle(500);
});

$("nav ul li a").click(function() {
  if ($("#toggle").hasClass("on") === true) {
    $("nav").slideToggle(500);
    $("#toggle").removeClass("on");
  }
});

//Copyright
var currentYear = new Date().getFullYear();
document.getElementById("footer").innerHTML = '&copy; Copyright ' + currentYear + ' - SharifKhlief';
