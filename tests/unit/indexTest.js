'use strict';

const assert = require('assertthat');

const subtract = require('../../..lib');

suite('subtract', () => {
  test('subtracts two numbers', done => {
    assert.that(subtract(10, 9)).is.equalTo(1);
    done();
  });
});
