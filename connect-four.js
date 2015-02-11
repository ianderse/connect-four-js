var createBoard = function () {
  for(var i=0; i < 42; i++) {
    if(i <= 6) {
      $("<div class='empty top-row'></div>").appendTo('#connect-four')
    } else if(i % 7 === 0) {
      $("<br>").appendTo('#connect-four')
      $("<div class='empty'></div>").appendTo('#connect-four')
    } else {
      $("<div class='empty'></div>").appendTo('#connect-four')
    }

  }
}

var bindHoverToTopRow = function () {
  $('.top-row').hover(function () {
    $(this).toggleClass('red');
  });
};

var init = function () {
  createBoard();
  bindHoverToTopRow();
};
