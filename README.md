# dom-event-simulate

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/dom-event-simulate.svg?style=flat-square
[npm-url]: https://npmjs.org/package/dom-event-simulate
[travis-image]: https://img.shields.io/travis/macacajs/dom-event-simulate.svg?style=flat-square
[travis-url]: https://travis-ci.org/macacajs/dom-event-simulate
[coveralls-image]: https://img.shields.io/coveralls/macacajs/dom-event-simulate.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/macacajs/dom-event-simulate?branch=master
[node-image]: https://img.shields.io/badge/node.js-%3E=_8-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/dom-event-simulate.svg?style=flat-square
[download-url]: https://npmjs.org/package/dom-event-simulate

> dom event simulate

## Installment

```bash
$ npm i dom-event-simulate --save-dev
```

## Usage

```javascript
const { domEvent } = require('dom-event-simulate');

domEvent.domEvent(element, 'keydown', {
  keyCode: 50,
  key: '@',
});
```

## Support Events

| type | name | args |
| --- | --- | --- |
| mouse events | click | |
| mouse events | dblclick | |
| mouse events | mouseover | |
| mouse events | mouseout | |
| mouse events | mouseenter | |
| mouse events | mouseleave | |
| mouse events | mousedown | |
| mouse events | mouseup | |
| mouse events | mousemove | |
| key events | keydown | |
| key events | keyup | |
| key events | keypress | |
| ui events | submit | |
| ui events | blur | |
| ui events | change | |
| ui events | focus | |
| ui events | resize | |
| ui events | scroll | |
| ui events | select | |
| bubble events | scroll | |
| bubble events | resize | |
| bubble events | reset | |
| bubble events | change | |
| bubble events | select | |
| bubble events | error | |
| bubble events | abort | |
| touch events | touchstart | |
| touch events | touchmove | |
| touch events | touchend | |
| touch events | touchcancel | |
| gesture events | gesturestart | |
| gesture events | gesturechange | |
| gesture events | gestureend | |

## License

The MIT License (MIT)
