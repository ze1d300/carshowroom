$('form[role="search"]').submit(function (e) {
  e.preventDefault();
  var searchQuery = $(this).find('input[type="search"]').val().toLowerCase();
  $(".card").each(function () {
    var cardText = $(this).find(".card-text").text().toLowerCase();
    var cardTitle = $(this).find(".card-title").text().toLowerCase();
    if (cardText.includes(searchQuery) || cardTitle.includes(searchQuery)) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});
