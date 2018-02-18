'use strict';

const assert = require('assertthat');

const SuperMath = require('../../..lib');

suite('SuperMath', () => {
  test('is a function.', done => {
    assert.that(SuperMath).is.ofType('function');
    done();
  });

  suite('subtract', () => {
    let myMath;

    setup(() => {
      myMath = new SuperMath();
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
