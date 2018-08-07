## [17.0.1](https://github.com/scherermichael/semvertest/compare/v17.0.0...v17.0.1) (2018-08-07)


### Bug Fixes

* Update README.md ([bff3bab](https://github.com/scherermichael/semvertest/commit/bff3bab))

# [17.0.0](https://github.com/scherermichael/semvertest/compare/v16.0.0...v17.0.0) (2018-08-07)


### Bug Fixes

* Update README.md ([7a31f58](https://github.com/scherermichael/semvertest/commit/7a31f58))


### BREAKING CHANGES

* Test

# [16.0.0](https://github.com/scherermichael/semvertest/compare/v15.0.0...v16.0.0) (2018-08-05)


### Features

* Update README.md ([1b4c10f](https://github.com/scherermichael/semvertest/commit/1b4c10f))


### BREAKING CHANGES

* Test1

2nd paragraph of Test1
* Test 2

2nd paragraph of Test2

# [15.0.0](https://github.com/scherermichael/semvertest/compare/v14.0.0...v15.0.0) (2018-08-05)


### Bug Fixes

* Update README.md ([d83ad38](https://github.com/scherermichael/semvertest/commit/d83ad38))


### BREAKING CHANGES

* Isolate scope bindings definition has changed and
the inject option for the directive controller injection was removed.

To migrate the code follow the example below:

Before:

```
scope: {
  myAttr: 'attribute',
  myBind: 'bind',
  myExpression: 'expression',
  myEval: 'evaluate',
  myAccessor: 'accessor'
}
```

After:

```
scope: {
  myAttr: '@',
  myBind: '@',
  myExpression: '&',
  // myEval - usually not useful, but in cases where the expression is assignable, you can use '='
  myAccessor: '=' // in directive's template change myAccessor() to myAccessor
}
```

The removed `inject` wasn't generaly useful for directives so there should be no code using it.

# [14.0.0](https://github.com/scherermichael/semvertest/compare/v13.0.0...v14.0.0) (2018-08-05)


### Features

* Update README.md ([412328e](https://github.com/scherermichael/semvertest/commit/412328e))


### BREAKING CHANGES

* This is a breaking test.

# [13.0.0](https://github.com/scherermichael/semvertest/compare/v12.0.0...v13.0.0) (2018-08-05)


### Features

* Update README.md ([f4ed825](https://github.com/scherermichael/semvertest/commit/f4ed825))


### BREAKING CHANGES

* This is a breaking change.

Another paragraph.

# [12.0.0](https://github.com/scherermichael/semvertest/compare/v11.0.0...v12.0.0) (2018-08-05)


### Features

* Update README.md ([e54bd41](https://github.com/scherermichael/semvertest/commit/e54bd41))


### BREAKING CHANGES

* It breaks everything.

# [11.0.0](https://github.com/scherermichael/semvertest/compare/v10.2.1...v11.0.0) (2018-08-05)


### Bug Fixes

* Update README.md ([cbccedc](https://github.com/scherermichael/semvertest/commit/cbccedc))


### BREAKING CHANGES

* Test

## [10.2.1](https://github.com/scherermichael/semvertest/compare/v10.2.0...v10.2.1) (2018-08-04)


### Bug Fixes

* Update README.md ([5b68ac6](https://github.com/scherermichael/semvertest/commit/5b68ac6))

## [10.2.0](https://github.com/scherermichael/semvertest/compare/v10.1.1...v10.2.0) (2018-08-04)


### Features

* Build changelog. ([5ee83e6](https://github.com/scherermichael/semvertest/commit/5ee83e6))
