var createBoard = function () {
  for(var i=0; i < 42; i++) {
    if(i % 7 === 0) {
      $("<br>").appendTo('#connect-four')
      $("<div class='empty'></div>").appendTo('#connect-four')
    } else {
      $("<div class='empty'></div>").appendTo('#connect-four')
    }

  }
}

var init = function () {
  createBoard();
};
