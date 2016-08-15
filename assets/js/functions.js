$(function(){
  clientsBubbleClick();
  setInterval(function(){projectTada()}, 3000);
  socialsBGStuff();
  addActive();
  mobileNav();
});

function mobileNav() {
  $('.mobile-nav-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');

    if(status){
      $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open');
    } else {
      $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); 
    }
  });
}



function addActive() {
  $('a[href^="#"]').on('click', function(event){
    event.preventDefault;
    $(document).off("scroll");

    $('a').each(function (){
      $(this).removeClass('is-active');
      $('.fa-caret-left').remove();
    });
      $(this).addClass('is-active').append('<i class="fa fa-caret-left" aria-hidden="true"></i>');

      var target = this.hash,
          menu = target;

        $target = $(target);
        $('html, body').stop().animate({
          'scrollTop' : $target.offset().top+2
        }, 500, 'swing', function(){
          window.location.hash = target;
          $(document).on("scroll", onScroll);
        });
  });
}

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    var senseSpeed = 5;
    var previousScroll = 0;

    $('.to-sections a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));

        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.outerHeight()  > scrollPos) {
            $('ul.to-sections li a').removeClass("is-active");
            $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open');
            $('.fa-caret-left').remove();
            currLink.addClass("is-active");
            currLink.one().append('<i class="fa fa-caret-left" aria-hidden="true"></i>');
        }
        else{
            currLink.removeClass("is-active");
        }
    });
}

function socialsBGStuff() {

  $('.soc-link').hover(function() {
     //$(this).parent().parent().parent().parent().css('background-color', $(this).data('color'));
     $(this).parents().eq(4).css('background-color', $(this).data('color'));
  }, function() {
    $(this).parents().eq(4).css('background-color', $(this).parents().eq(4).data('orig-color'));
  });
}

function projectTada() {
  var randNum = Math.floor(Math.random() * $('.project-thumb').length) + 1;

  $('.project-thumb').eq(randNum).addClass('is-emph')
    .siblings().removeClass('is-emph');
}

$(window).scroll(function(){
  youtubeVidScroll();
  startClients();
  startProjects();
  onScroll();

});



function youtubeVidScroll() {
  var wScroll = $(window).scrollTop();

  $('.video-strip').css('background-position','center -'+ wScroll +'px');
}

function startClients() {

  var wScroll = $(window).scrollTop();

  if($('section.clients').offset().top - $(window).height()/2 < wScroll) {
    if($(window).width() > 640) {
      $('.faces').addClass('launched');
        if(!$('.face').hasClass('has-bubble-open')){
          setTimeout(function(){
            $('.face:nth-child(3)').addClass('has-bubble-open');
          }, 400);
        }
    } else {
      //clientsNarrowStart();

      //$('.faces').addClass('launched');
        if(!$('.face').hasClass('has-bubble-open')){
          setTimeout(function(){
            $('.face').first().addClass('has-bubble-open');
          }, 400);
        }

      // if($('.face').hasClass('has-bubble-open')){
      //   $(this).addClass('has-bubble-open')
      //     siblings().removeClass('has-bubble-open');
      // } else {
      //   //clientsNarrowStart();
      // }
    }
  }
}

function startProjects() {

  var wScroll = $(window).scrollTop();

  if($('section.projects').offset().top - $(window).height()/2 < wScroll) {
    $('.project-thumb').each(function(i){
      setTimeout(function() {
        $('.project-thumb').eq(i).addClass('is-visible');
      }, 100 * i);
    });

  }


}

function clientsBubbleClick() {
  $('.face').on('click',function() {
    var $this = $(this),
        faceTop = $this.position().top,
        vertMath =  -1 * (faceTop - 230),
        faceLeft = $this.position().left,
        horizMath =  0 - faceLeft;

    if($(window).width() > 640){
      $this.parent().css('top', + vertMath +'px');
    } else {
      if($this.hasClass('back-btn')){
        clientsNarrowStart();
      } else {
        $this.parent().css('left', + horizMath +'px');
      }
    }
    if(!$this.hasClass('back-btn')){
      $this.addClass('has-bubble-open')
        .siblings().removeClass('has-bubble-open');
    }
  });

}



function clientsNarrowStart() {
  $('.faces').css({
    'top': '230px',
    'left': '0px'
  });
  $('.face').first().addClass('has-bubble-open')
    .siblings().removeClass('has-bubble-open');
}


function clientsWideStart() {
  $('.faces').css({
    'top': '0px',
    'left': '0px'
  });
  $('.face:nth-child(3)').addClass('has-bubble-open')
    .siblings().removeClass('has-bubble-open');
}

$(window).resize(function(){

  if($(window).width() > 640) {
    clientsWideStart();
  } else {
    clientsNarrowStart();
  }
});
