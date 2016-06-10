$('.snowglobe').mouseenter(function() {
  // snowflakes to jump up
  $('.flake')
  for (var circle of $(".flake")){
    $(circle).attr('cy', 50  );
  }
});


$('.snowglobe').mouseleave(function() {
  // snowflakes fall down
})