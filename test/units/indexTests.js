'use strict';

const assert = require('assertthat');

const HyperMath = require('../../lib');

suite('HyperMath', () => {
  test('is a function.', done => {
    assert.that(HyperMath).is.ofType('function');
    done();
  });

  suite('subtract', () => {
    let myMath;

    setup(() => {
      myMath = new HyperMath();
    });

    test('is a function.', done => {
      assert.that(myMath.subtract).is.ofType('function');
      done();
    });

    test('subtracts two numbers.', done => {
      assert.that(myMath.subtract(10, 9)).is.equalTo(1);
      done();
    });

    test('subtracts another two numbers.', done => {
      assert.that(myMath.subtract(1, 9)).is.equalTo(-8);
      done();
    });
  });
});
