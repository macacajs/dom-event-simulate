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

> simulate user interaction with DOM events.

<!-- GITCONTRIBUTOR_START -->

## Contributors

|[<img src="https://avatars1.githubusercontent.com/u/1011681?v=4" width="100px;"/><br/><sub><b>xudafeng</b></sub>](https://github.com/xudafeng)<br/>|[<img src="https://avatars3.githubusercontent.com/u/1209810?v=4" width="100px;"/><br/><sub><b>paradite</b></sub>](https://github.com/paradite)<br/>|
| :---: | :---: |


This project follows the git-contributor [spec](https://github.com/xudafeng/git-contributor), auto updated at `Wed Mar 06 2019 22:19:21 GMT+0800`.

<!-- GITCONTRIBUTOR_END -->

## Installment

```bash
$ npm i dom-event-simulate --save-dev
```

## CDN

```
https://unpkg.com/dom-event-simulate@latest/lib/dom-event-simulate.js
```

## Usage

```javascript
const { domEvent } = require('dom-event-simulate');
// input @
domEvent.domEvent(element, 'keydown', {
  keyCode: 50,
  key: '@',
});
// start a drag
domEvent.domEvent(dom, 'mousedown', {
  clientX: point.x,
  clientY: point.y,
});
domEvent.domEvent(dom, 'mousemove', {
  clientX: point.x + 10,
  clientY: point.y + 10,
});
domEvent.domEvent(dom, 'mouseup', {
  clientX: point.x + 10,
  clientY: point.y + 10,
});
```

```javascript
var element = document.querySelector('#input');

element.addEventListener('change', function(e) {
  console.log(e.target.files);
}, false);

domEvent(element, 'change', {
  data: {
    target: {
      files: [
        {
          file: 'file1.png',
        },
        {
          file: 'file2.jpg',
        }
      ],
    },
  }
});
```

## Use with macaca-wd

see: https://macacajs.github.io/macaca-wd/#domEvent

## Support Events

| type | name | args |
| --- | --- | --- |
| mouseEvents | click | |
| mouseEvents | dblclick | |
| mouseEvents | mouseover | |
| mouseEvents | mouseout | |
| mouseEvents | mouseenter | |
| mouseEvents | mouseleave | |
| mouseEvents | mousedown | |
| mouseEvents | mouseup | |
| mouseEvents | mousemove | |
| mouseEvents | dragstart | |
| mouseEvents | dragover | |
| mouseEvents | drop | |
| keyboardEvent | keydown | |
| keyboardEvent | keyup | |
| keyboardEvent | keypress | |
| UIEvents | submit | |
| UIEvents | blur | |
| UIEvents | change | |
| UIEvents | focus | |
| UIEvents | resize | |
| UIEvents | scroll | |
| UIEvents | select | |
| bubbleEvents | scroll | |
| bubbleEvents | resize | |
| bubbleEvents | reset | |
| bubbleEvents | change | |
| bubbleEvents | select | |
| bubbleEvents | error | |
| bubbleEvents | abort | |
| TouchEvent | touchstart | |
| TouchEvent | touchmove | |
| TouchEvent | touchend | |
| TouchEvent | touchcancel | |
| GestureEvent | gesturestart | |
| GestureEvent | gesturechange | |
| GestureEvent | gestureend | |

## License

The MIT License (MIT)
