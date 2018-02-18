'use strict';

const MyMath = class {
  /* eslint-disable class-methods-use-this */
  subtract (minuend, subtrahend) {
    return minuend - subtrahend;
  }
  /* eslint-enable class-methods-use-this */
};

module.exports = MyMath;
