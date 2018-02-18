'use strict';

const SuperMath = class {
  /* eslint-disable class-methods-use-this */
  add (first, second) {
    return first + second;
  }

  subtract (minuend, subtrahend) {
    return minuend - subtrahend;
  }
  /* eslint-enable class-methods-use-this */
};

module.exports = SuperMath;
