(function(e){"use strict";var t="ScrollIt",n="1.0.3";var r={upKey:38,downKey:40,easing:"linear",scrollTime:600,activeClass:"active",onPageChange:null,topOffset:0};e.scrollIt=function(t){var n=e.extend(r,t),i=0,s=e("[data-scroll-index]:last").attr("data-scroll-index");var o=function(t){if(t<0||t>s)return;var r=e("[data-scroll-index="+t+"]").offset().top+n.topOffset+1;e("html,body").animate({scrollTop:r,easing:n.easing},n.scrollTime)};var u=function(t){var n=e(t.target).closest("[data-scroll-nav]").attr("data-scroll-nav")||e(t.target).closest("[data-scroll-goto]").attr("data-scroll-goto");o(parseInt(n))};var a=function(t){var r=t.which;if(e("html,body").is(":animated")&&(r==n.upKey||r==n.downKey)){return false}if(r==n.upKey&&i>0){o(parseInt(i)-1);return false}else if(r==n.downKey&&i<s){o(parseInt(i)+1);return false}return true};var f=function(t){if(n.onPageChange&&t&&i!=t)n.onPageChange(t);i=t;e("[data-scroll-nav]").removeClass(n.activeClass);e("[data-scroll-nav="+t+"]").addClass(n.activeClass)};var l=function(){var t=e(window).scrollTop();var r=e("[data-scroll-index]").filter(function(r,i){return t>=e(i).offset().top+n.topOffset&&t<e(i).offset().top+n.topOffset+e(i).outerHeight()});var i=r.first().attr("data-scroll-index");f(i)};e(window).on("scroll",l).scroll();e(window).on("keydown",a);e("body").on("click","[data-scroll-nav], [data-scroll-goto]",function(e){e.preventDefault();u(e)})}})(jQuery)
$(document).ready(function () {
  // All Functions
  BLG_PreLoader();
  BLG_Header();
  BLG_ScrollIt();


  $("button.navbar-toggler").on('click', function(){
        $("div#fixedNavbar").toggleClass("show");
 })
        

  function BLG_PreLoader() {
    "use-scrict";

    // Variables
    let preloaderWrap = $("#preloader-wrap");
    let loaderInner = preloaderWrap.find(".preloader-inner");

    $(window).ready(function () {
      loaderInner.fadeOut();
      preloaderWrap.delay(350).fadeOut("slow");
    });
  }

  function BLG_Header() {
    "use-strict";

    // Variables
    let header = $(".header");
    let logoTransparent = $(".logo-transparent");
    let scrollTopBtn = $(".scroll-top-btn");
    let logoNormal = $(".logo-normal");
    let windowWidth = $(window).innerWidth();
    let scrollTop = $(window).scrollTop();
    let $dropdown = $(".dropdown");
    let $dropdownToggle = $(".dropdown-toggle");
    let $dropdownMenu = $(".dropdown-menu");
    let showClass = "show";

// //     $("body").scrollspy({ target: "#fixedNavbar" });
//     var scrollSpy = new bootstrap.ScrollSpy(document.body, {
//         target: '#fixedNavbar'
//       })

    $(".menu-link").on("click", function () {
      $("#fixedNavbar").collapse("hide");
    });

    // When Window On Scroll
    $(window).on("scroll", function () {
      let scrollTop = $(this).scrollTop();

      if (scrollTop > 85) {
        logoTransparent.hide();
        logoNormal.show();
        header.addClass("header-shrink");
        scrollTopBtn.addClass("active");
      } else {
        logoTransparent.show();
        logoNormal.hide();
        header.removeClass("header-shrink");
        scrollTopBtn.removeClass("active");
      }
    });

    // The same process is done without page scroll to prevent errors.
    if (scrollTop > 85) {
      logoTransparent.hide();
      logoNormal.show();
      header.addClass("header-shrink");
      scrollTopBtn.addClass("active");
    } else {
      logoTransparent.show();
      logoNormal.hide();
      header.removeClass("header-shrink");
      scrollTopBtn.removeClass("active");
    }

    // Window On Resize Hover Dropdown
    $(window).on("resize", function () {
      let windowWidth = $(this).innerWidth();

      if (windowWidth > 991) {
        $dropdown.hover(
          function () {
            let hasShowClass = $(this).hasClass(showClass);
            if (hasShowClass !== true) {
              $(this).addClass(showClass);
              $(this).find($dropdownToggle).attr("aria-expanded", "true");
              $(this).find($dropdownMenu).addClass(showClass);
            }
          },
          function () {
            $(this).removeClass(showClass);
            $(this).find($dropdownToggle).attr("aria-expanded", "false");
            $(this).find($dropdownMenu).removeClass(showClass);
          }
        );
      } else {
        $dropdown.off("mouseenter mouseleave");
        header.find(".main-menu").collapse("hide");
      }
    });
    // The same process is done without page scroll to prevent errors.
    if (windowWidth > 991) {
      $dropdown.hover(
        function () {
          const $this = $(this);

          var hasShowClass = $this.hasClass(showClass);

          if (hasShowClass !== true) {
            $this.addClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "true");
            $this.find($dropdownMenu).addClass(showClass);
          }
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  }
  function BLG_ScrollIt() {
    "use-strict";

    $.scrollIt({
      upKey: 38, // key code to navigate to the next section
      downKey: 40, // key code to navigate to the previous section
      easing: "linear", // the easing function for animation
      scrollTime: 600, // how long (in ms) the animation takes
      activeClass: "active", // class given to the active nav element
      onPageChange: null, // function(pageIndex) that is called when page is changed
      topOffset: 0, // offste (in px) for fixed top navigation
    });
  }
});
