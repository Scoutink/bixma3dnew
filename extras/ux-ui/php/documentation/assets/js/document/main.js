(function ($) {
  'use strict';
  $('.mode').on('click', function () {
    $('.mode i').toggleClass('fa-moon-o').toggleClass('fa-lightbulb-o');
    $('body').toggleClass('dark-only');
  });

  // font size
  $('.decrease').on('click', function () {
    $('.content').addClass('font-decrease').removeClass('font-increase');
  });

  $('.increase').on('click', function () {
    $('.content').addClass('font-increase').removeClass('font-decrease');
  });

  $('.reset').on('click', function () {
    $('.content').removeClass('font-decrease').removeClass('font-increase');
  });

  $('.toggle-sidebar').on('click', function () {
    $('.left-sidebar').toggleClass('open');
    $('.sidebar-overlay').addClass('show');
  });

  $('.sidebar-close').on('click', function () {
    $('.left-sidebar').removeClass('open');
  });

  $('.search-full').keyup(function (e) {
    var query = e.target.value,
      searchResult = [],
      resultsToShow = ``;
    if (query != '') {
      $(document)
        .find('a')
        .not('#suggestionLink')
        .each(function () {
          if ($(this).attr('href').includes(query) || $(this).text().toLowerCase().includes(query.toLowerCase())) {
            var objTopush = {
              name: $(this).attr('href').includes('#') ? 'This Page' + '>>' + $(this).text() : $(this).text(),
              href: $(this).attr('href'),
            };
            if ($(this).attr('href') != 'javascript:void(0)')
              // searchResult.push($(this).attr("href"));
              searchResult.push(objTopush);
          }
        });
    }
    // searchResult = [...new Set(searchResult)];
    // searchResult = [...new Set(searchResult.map(JSON.stringify))].map(
    //   JSON.parse
    // );
    var copySearchResult = JSON.parse(JSON.stringify(searchResult));
    var newSearchResult = [];
    copySearchResult.map((item) => {
      var notPresent = true;
      newSearchResult.every((newItem) => {
        if (newItem.href == item.href) {
          notPresent = false;
        }
        return notPresent;
      });
      if (notPresent) {
        newSearchResult.push(item);
      }
    });
    newSearchResult.forEach((item) => {
      resultsToShow =
        resultsToShow +
        `
		<div class="suggetion-item">
		<p >
			<span class="cursor_pointer" >
				<a id="suggestionLink" href="${item.href}">${item.name}</a>
			</span>
		</p>
	</div>
		`;
    });
    $('.suggetion-box').empty();
    $('.suggetion-box').append(resultsToShow);
    if (searchResult.length > 0) {
      $('.suggetion-box').removeClass('d-none');
      $('.suggetion-box').addClass('d-block');
    } else {
      $('.suggetion-box').addClass('d-none');
      $('.suggetion-box').removeClass('d-block');
    }
    if (e.keyCode == 27) {
      $('.suggetion-box').addClass('d-none');
      $('.suggetion-box').removeClass('d-block');
    }
  });

  // $(".nav-sidebar .nav-item").on("click", function () {
  // 	// $('.nav-sidebar .nav-item').removeClass("active");
  // 	$(this).toggleClass("active");
  // 	});

  // jQuery('.title').removeClass('active');
  // jQuery('.title').on('click', function () {
  //   jQuery('.dropdown-nav').slideUp('normal');
  //   if (jQuery(this).next().is(':hidden') == true) {
  //     jQuery(this).addClass('active');
  //     jQuery(this).next().slideDown('normal');
  // 	}
  // });
  // jQuery('.dropdown-nav').hide();

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 600) {
      $('.tap-top').fadeIn();
    } else {
      $('.tap-top').fadeOut();
    }
  });
  $('.tap-top').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      600,
    );
    return false;
  });
})(jQuery);

// sidebar active
var current = window.location.pathname;
$('.nav-sidebar >li .nav-link').filter(function () {
  var link = $(this).attr('href');
  if (link) {
    if (current.indexOf(link) != -1) {
      $(this).parents().children('ul').css('display', 'block');
      $(this).parents().children('.title').addClass('active');
      $(this).addClass('active');
      return false;
    }
  }
});

// $('.left-sidebar').animate({
// 	scrollTop: $('a.nav-link.active').offset().top - 200
// }, 1000);
