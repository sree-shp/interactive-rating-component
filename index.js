var rating = 0;

$(".star-button").click(function () {
  if ($(".star-button").hasClass("star-button-selected") === true) {
    $(".star-button").removeClass("star-button-selected");
  }
  $(this).toggleClass("star-button-selected");
  rating = $(this).val();
});

$(".submit").click(function () {
  $(".selected-rating-number").append(rating);
  $("#rating-card").addClass("hidden");
  $("#thank-you-card").removeClass("hidden");
});
