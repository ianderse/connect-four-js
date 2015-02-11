module('Setup')

test('init adds the proper number of empty divs', function (assert) {
  $(init)
  assert.strictEqual($('#connect-four').find('.empty').length, 42, 'Divs are correctly placed')
});
