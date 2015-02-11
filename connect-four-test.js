module('Setup')

test('init adds the proper number of empty divs', function (assert) {
  $(init);
  assert.strictEqual($('#connect-four').find('.empty').length, 42, 'Divs are correctly placed')
});

module('Hovering')

test('hovering over top-row class changes color', function (assert) {
  $(init);
  var hoveredItem = $('#connect-four').find('.top-row').mouseenter();
  assert.ok((hoveredItem).hasClass('red'), 'Div changes class when hovered over')
});

test('leaving top-row div item changes color back to empty', function (assert) {
  $(init);
  var hoveredItem = $('#connect-four').find('.top-row').mouseenter();
  hoveredItem.mouseleave();
  assert.ok(!(hoveredItem).hasClass('red'), 'Div changes back to empty');
})
