# simple moveable

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/EdgeTranslate/simple-moveable/blob/master/LICENSE.MIT)
[![Version](https://img.shields.io/github/release/EdgeTranslate/simple-moveable.svg?label=version)](https://github.com/EdgeTranslate/simple-moveable/releases)
[![Build Status](https://travis-ci.org/EdgeTranslate/simple-moveable.svg?branch=master)](https://travis-ci.org/EdgeTranslate/simple-moveable)


View this page in other languages:

* [简体中文](./docs/README_CN.md)

* [繁體中文](./docs/README_TW.md)


## Installation

### npm
```
npm install --save simple-moveable
```

## How to use
```js
import moveable from "simple-moveable";

const moveableElement = new moveable(element,{
	resizable: true,
	draggable: true,
	directions: [s, se, e, ne, n, nw, w, sw,],
	/* set threshold value to increase the resize area */
	// threshold: { s: 5, se: 5, e: 5, ne: 5, n: 5, nw: 5, w: 5, sw: 5 },
	// threshold: { edge:5, corner:5 },
	threshold: 10,
	/**
	 * set thresholdPosition to decide where the resizable area is
	 * "in": the activated resizable area is within the target element
	 * "center": the activated resizable area is half within the target element and half out of the it
	 * "out": the activated resizable area is out of the target element
	 * a number(0~1): a ratio which determines the how much the the activated resizable area beyond the element
	 */
	// thresholdPosition: "in",
	// thresholdPosition: "center",
	// thresholdPosition: "out",
	thresholdPosition: 0.9
})
let startTranslate = [0, 0];
/* draggable events*/
moveableElement
.on("dragStart", ({ set }) => {
	set(startTranslate);
})
.on("drag", ({ target, translate }) => {
	startTranslate = translate;
	target.style.transform = `translate(${translate[0]}px,${translate[1]}px)`;
}).on("dragEnd",({ translate }) => {
	startTranslate = translate;
})
.on("resizeStart", ({ set }) => {
	set(startTranslate);
})
.on("resize", ({ target, width, height, translate, inputEvent }) => {
	target.style.width = `${width}px`;
	target.style.height = `${height}px`;
	target.style.transform = `translate(${translate[0]}px, ${translate[1]}px)`;
})
.on("resizeEnd", ({ translate, width, height, inputEvent, target }) => {
	startTranslate = translate;
	target.style.transform = `translate(${translate[0]}px, ${translate[1]}px)`;
});
```

## Contact Us

E-mails: [Mark Fenng](mailto:f18846188605@gmail.com)