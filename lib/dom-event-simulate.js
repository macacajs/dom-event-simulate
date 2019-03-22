;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    return define(['exports'], factory);
  } else if (typeof exports !== 'undefined') {
    return factory(exports);
  } else {
    factory(root['_macaca_simulate'] || (root['_macaca_simulate'] = {}));
  }
})(this, function(exports) {
  /**
   * @refer https://github.com/yui/yui3/tree/master/src/event-simulate
   */
  var parseUA = function(subUA) {
    var numberify = function(s) {
      var c = 0;
      return parseFloat(s.replace(/\./g, function() {
        return (c++ === 1) ? '' : '.';
      }));
    };

    var nav = win && win.navigator;

    var o = {

      /**
         * Internet Explorer version number or 0.  Example: 6
         * @property ie
         * @type float
         * @static
         */
      ie: 0,

      /**
         * Opera version number or 0.  Example: 9.2
         * @property opera
         * @type float
         * @static
         */
      opera: 0,

      /**
         * Gecko engine revision number.  Will evaluate to 1 if Gecko
         * is detected but the revision could not be found. Other browsers
         * will be 0.  Example: 1.8
         * <pre>
         * Firefox 1.0.0.4: 1.7.8   <-- Reports 1.7
         * Firefox 1.5.0.9: 1.8.0.9 <-- 1.8
         * Firefox 2.0.0.3: 1.8.1.3 <-- 1.81
         * Firefox 3.0   <-- 1.9
         * Firefox 3.5   <-- 1.91
         * </pre>
         * @property gecko
         * @type float
         * @static
         */
      gecko: 0,

      /**
         * AppleWebKit version.  KHTML browsers that are not WebKit browsers
         * will evaluate to 1, other browsers 0.  Example: 418.9
         * <pre>
         * Safari 1.3.2 (312.6): 312.8.1 <-- Reports 312.8 -- currently the
         *                                   latest available for Mac OSX 10.3.
         * Safari 2.0.2:         416     <-- hasOwnProperty introduced
         * Safari 2.0.4:         418     <-- preventDefault fixed
         * Safari 2.0.4 (419.3): 418.9.1 <-- One version of Safari may run
         *                                   different versions of webkit
         * Safari 2.0.4 (419.3): 419     <-- Tiger installations that have been
         *                                   updated, but not updated
         *                                   to the latest patch.
         * Webkit 212 nightly:   522+    <-- Safari 3.0 precursor (with native
         * SVG and many major issues fixed).
         * Safari 3.0.4 (523.12) 523.12  <-- First Tiger release - automatic
         * update from 2.x via the 10.4.11 OS patch.
         * Webkit nightly 1/2008:525+    <-- Supports DOMContentLoaded event.
         *                                   yahoo.com user agent hack removed.
         * </pre>
         * http://en.wikipedia.org/wiki/Safari_version_history
         * @property webkit
         * @type float
         * @static
         */
      webkit: 0,

      /**
         * Safari will be detected as webkit, but this property will also
         * be populated with the Safari version number
         * @property safari
         * @type float
         * @static
         */
      safari: 0,

      /**
         * Chrome will be detected as webkit, but this property will also
         * be populated with the Chrome version number
         * @property chrome
         * @type float
         * @static
         */
      chrome: 0,

      /**
         * The mobile property will be set to a string containing any relevant
         * user agent information when a modern mobile browser is detected.
         * Currently limited to Safari on the iPhone/iPod Touch, Nokia N-series
         * devices with the WebKit-based browser, and Opera Mini.
         * @property mobile
         * @type string
         * @default null
         * @static
         */
      mobile: null,

      /**
         * Adobe AIR version number or 0.  Only populated if webkit is detected.
         * Example: 1.0
         * @property air
         * @type float
         */
      air: 0,
      /**
         * PhantomJS version number or 0.  Only populated if webkit is detected.
         * Example: 1.0
         * @property phantomjs
         * @type float
         */
      phantomjs: 0,
      /**
         * Detects Apple iPad's OS version
         * @property ipad
         * @type float
         * @static
         */
      ipad: 0,
      /**
         * Detects Apple iPhone's OS version
         * @property iphone
         * @type float
         * @static
         */
      iphone: 0,
      /**
         * Detects Apples iPod's OS version
         * @property ipod
         * @type float
         * @static
         */
      ipod: 0,
      /**
         * General truthy check for iPad, iPhone or iPod
         * @property ios
         * @type Boolean
         * @default null
         * @static
         */
      ios: null,
      /**
         * Detects Googles Android OS version
         * @property android
         * @type float
         * @static
         */
      android: 0,
      /**
         * Detects Kindle Silk
         * @property silk
         * @type float
         * @static
         */
      silk: 0,
      /**
         * Detects Ubuntu version
         * @property ubuntu
         * @type float
         * @static
         */
      ubuntu: 0,
      /**
         * Detects Kindle Silk Acceleration
         * @property accel
         * @type Boolean
         * @static
         */
      accel: false,
      /**
         * Detects Palms WebOS version
         * @property webos
         * @type float
         * @static
         */
      webos: 0,

      /**
         * Google Caja version number or 0.
         * @property caja
         * @type float
         */
      caja: nav && nav.cajaVersion,

      /**
         * Set to true if the page appears to be in SSL
         * @property secure
         * @type boolean
         * @static
         */
      secure: false,

      /**
         * The operating system.
         *
         * Possible values are `windows`, `macintosh`, `android`, `symbos`, `linux`, `rhino` and `ios`.
         *
         * @property os
         * @type string
         * @default null
         * @static
         */
      os: null,

      /**
         * The Nodejs Version
         * @property nodejs
         * @type float
         * @default 0
         * @static
         */
      nodejs: 0,
      /**
         * Window8/IE10 Application host environment
         * @property winjs
         * @type Boolean
         * @static
         */
      winjs: !!((typeof Windows !== 'undefined') && Windows.System),
      /**
         * Are touch/msPointer events available on this device
         * @property touchEnabled
         * @type Boolean
         * @static
         */
      touchEnabled: false
    };

    var ua = subUA || nav && nav.userAgent;

    var loc = win && win.location;

    var href = loc && loc.href;

    var m;

    /**
     * The User Agent string that was parsed
     * @property userAgent
     * @type String
     * @static
     */
    o.userAgent = ua;

    o.secure = href && (href.toLowerCase().indexOf('https') === 0);

    if (ua) {

      if ((/windows|win32/i).test(ua)) {
        o.os = 'windows';
      } else if ((/macintosh|mac_powerpc/i).test(ua)) {
        o.os = 'macintosh';
      } else if ((/android/i).test(ua)) {
        o.os = 'android';
      } else if ((/symbos/i).test(ua)) {
        o.os = 'symbos';
      } else if ((/linux/i).test(ua)) {
        o.os = 'linux';
      } else if ((/rhino/i).test(ua)) {
        o.os = 'rhino';
      }

      // Modern KHTML browsers should qualify as Safari X-Grade
      if ((/KHTML/).test(ua)) {
        o.webkit = 1;
      }
      if ((/IEMobile|XBLWP7/).test(ua)) {
        o.mobile = 'windows';
      }
      if ((/Fennec/).test(ua)) {
        o.mobile = 'gecko';
      }
      // Modern WebKit browsers are at least X-Grade
      m = ua.match(/AppleWebKit\/([^\s]*)/);
      if (m && m[1]) {
        o.webkit = numberify(m[1]);
        o.safari = o.webkit;

        if (/PhantomJS/.test(ua)) {
          m = ua.match(/PhantomJS\/([^\s]*)/);
          if (m && m[1]) {
            o.phantomjs = numberify(m[1]);
          }
        }

        // Mobile browser check
        if (/ Mobile\//.test(ua) || (/iPad|iPod|iPhone/).test(ua)) {
          o.mobile = 'Apple'; // iPhone or iPod Touch

          m = ua.match(/OS ([^\s]*)/);
          if (m && m[1]) {
            m = numberify(m[1].replace('_', '.'));
          }
          o.ios = m;
          o.os = 'ios';
          o.ipad = o.ipod = o.iphone = 0;

          m = ua.match(/iPad|iPod|iPhone/);
          if (m && m[0]) {
            o[m[0].toLowerCase()] = o.ios;
          }
        } else {
          m = ua.match(/NokiaN[^\/]*|webOS\/\d\.\d/);
          if (m) {
            // Nokia N-series, webOS, ex: NokiaN95
            o.mobile = m[0];
          }
          if (/webOS/.test(ua)) {
            o.mobile = 'WebOS';
            m = ua.match(/webOS\/([^\s]*);/);
            if (m && m[1]) {
              o.webos = numberify(m[1]);
            }
          }
          if (/ Android/.test(ua)) {
            o.mobile = 'Android';
            m = ua.match(/Android ([^\s]*);/);
            if (m && m[1]) {
              o.android = numberify(m[1]);
            }

          }
          if (/Silk/.test(ua)) {
            m = ua.match(/Silk\/([^\s]*)/);
            if (m && m[1]) {
              o.silk = numberify(m[1]);
            }
            if (!o.android) {
              o.android = 2.34; // Hack for desktop mode in Kindle
              o.os = 'Android';
            }
            if (/Accelerated=true/.test(ua)) {
              o.accel = true;
            }
          }
        }

        m = ua.match(/OPR\/(\d+\.\d+)/);

        if (m && m[1]) {
          // Opera 15+ with Blink (pretends to be both Chrome and Safari)
          o.opera = numberify(m[1]);
        } else {
          m = ua.match(/(Chrome|CrMo|CriOS)\/([^\s]*)/);

          if (m && m[1] && m[2]) {
            o.chrome = numberify(m[2]); // Chrome
            o.safari = 0; // Reset safari back to 0
            if (m[1] === 'CrMo') {
              o.mobile = 'chrome';
            }
          } else {
            m = ua.match(/AdobeAIR\/([^\s]*)/);
            if (m) {
              o.air = m[0]; // Adobe AIR 1.0 or better
            }
          }
        }
      }

      m = ua.match(/Ubuntu\ (\d+\.\d+)/);
      if (m && m[1]) {

        o.os = 'linux';
        o.ubuntu = numberify(m[1]);

        m = ua.match(/\ WebKit\/([^\s]*)/);
        if (m && m[1]) {
          o.webkit = numberify(m[1]);
        }
        m = ua.match(/\ Chromium\/([^\s]*)/);
        if (m && m[1]) {
          o.chrome = numberify(m[1]);
        }
        if (/ Mobile$/.test(ua)) {
          o.mobile = 'Ubuntu';
        }
      }

      if (!o.webkit) { // not webkit
        // @todo check Opera/8.01 (J2ME/MIDP; Opera Mini/2.0.4509/1316; fi; U; ssr)
        if (/Opera/.test(ua)) {
          m = ua.match(/Opera[\s\/]([^\s]*)/);
          if (m && m[1]) {
            o.opera = numberify(m[1]);
          }
          m = ua.match(/Version\/([^\s]*)/);
          if (m && m[1]) {
            o.opera = numberify(m[1]); // opera 10+
          }

          if (/Opera Mobi/.test(ua)) {
            o.mobile = 'opera';
            m = ua.replace('Opera Mobi', '').match(/Opera ([^\s]*)/);
            if (m && m[1]) {
              o.opera = numberify(m[1]);
            }
          }
          m = ua.match(/Opera Mini[^;]*/);

          if (m) {
            o.mobile = m[0]; // ex: Opera Mini/2.0.4509/1316
          }
        } else { // not opera or webkit
          m = ua.match(/MSIE ([^;]*)|Trident.*; rv:([0-9.]+)/);

          if (m && (m[1] || m[2])) {
            o.ie = numberify(m[1] || m[2]);
          } else { // not opera, webkit, or ie
            m = ua.match(/Gecko\/([^\s]*)/);

            if (m) {
              o.gecko = 1; // Gecko detected, look for revision
              m = ua.match(/rv:([^\s\)]*)/);
              if (m && m[1]) {
                o.gecko = numberify(m[1]);
                if (/Mobile|Tablet/.test(ua)) {
                  o.mobile = 'ffos';
                }
              }
            }
          }
        }
      }
    }

    // Check for known properties to tell if touch events are enabled on this device or if
    // the number of MSPointer touchpoints on this device is greater than 0.
    if (win && nav && !(o.chrome && o.chrome < 6)) {
      o.touchEnabled = (('ontouchstart' in win) || (('msMaxTouchPoints' in nav) && (nav.msMaxTouchPoints > 0)));
    }

    // It was a parsed UA, do not assign the global value.
    if (!subUA) {

      if (typeof process === 'object') {

        if (process.versions && process.versions.node) {
          // NodeJS
          o.os = process.platform;
          o.nodejs = numberify(process.versions.node);
        }
      }

      UA = o;

    }

    return o;
  };

  var UA = parseUA();

  // shortcuts
  var toString = Object.prototype.toString;
  var isFunction = function (o) {
    return toString.call(o) === '[object Function]';
  };
  var isString = function (o) {
    return toString.call(o) === '[object String]';
  };
  var isBoolean = function (o) {
    return toString.call(o) === '[object Boolean]';
  };
  var isObject = function (o) {
    return o === Object(o);
  };
  var isNumber = function (o) {
    return toString.call(o) === '[object Number]';
  };
  var doc = document;
  var win = window;

  var mix = function (r, s) {
    for (var p in s) {
      r[p] = s[p];
    }
  };

  // mouse events supported
  var mouseEvents = {
    click: 1,
    dblclick: 1,
    mouseover: 1,
    mouseout: 1,
    mouseenter: 1,
    mouseleave: 1,
    mousedown: 1,
    mouseup: 1,
    mousemove: 1,
    contextmenu: 1,
    dragstart: 1,
    dragenter: 1,
    dragover: 1,
    dragleave: 1,
    drag: 1,
    drop: 1,
    dragend: 1
  };

  var msPointerEvents = {
    MSPointerOver: 1,
    MSPointerOut: 1,
    MSPointerDown: 1,
    MSPointerUp: 1,
    MSPointerMove: 1
  };

  // key events supported
  var keyEvents = {
    keydown: 1,
    keyup: 1,
    keypress: 1
  };

  // HTML events supported
  var uiEvents = {
    submit: 1,
    blur: 1,
    change: 1,
    focus: 1,
    resize: 1,
    scroll: 1,
    select: 1
  };

  // events that bubble by default
  var bubbleEvents = {
    scroll: 1,
    resize: 1,
    reset: 1,
    submit: 1,
    change: 1,
    select: 1,
    error: 1,
    abort: 1
  };

  // touch events supported
  var touchEvents = {
    touchstart: 1,
    touchmove: 1,
    touchend: 1,
    touchcancel: 1
  };

  var gestureEvents = {
    gesturestart: 1,
    gesturechange: 1,
    gestureend: 1
  };

  // all key and mouse events bubble
  mix(bubbleEvents, mouseEvents);
  mix(bubbleEvents, keyEvents);
  mix(bubbleEvents, touchEvents);

  /*
   * Simulates a key event using the given event information to populate
   * the generated event object. This method does browser-equalizing
   * calculations to account for differences in the DOM and IE event models
   * as well as different browser quirks. Note: keydown causes Safari 2.x to
   * crash.
   * @method simulateKeyEvent
   * @private
   * @static
   * @param {HTMLElement} target The target of the given event.
   * @param {String} type The type of event to fire. This can be any one of
   *      the following: keyup, keydown, and keypress.
   * @param {Boolean} bubbles (Optional) Indicates if the event can be
   *      bubbled up. DOM Level 3 specifies that all key events bubble by
   *      default. The default is true.
   * @param {Boolean} cancelable (Optional) Indicates if the event can be
   *      canceled using preventDefault(). DOM Level 3 specifies that all
   *      key events can be cancelled. The default
   *      is true.
   * @param {Window} view (Optional) The view containing the target. This is
   *      typically the window object. The default is window.
   * @param {Boolean} ctrlKey (Optional) Indicates if one of the CTRL keys
   *      is pressed while the event is firing. The default is false.
   * @param {Boolean} altKey (Optional) Indicates if one of the ALT keys
   *      is pressed while the event is firing. The default is false.
   * @param {Boolean} shiftKey (Optional) Indicates if one of the SHIFT keys
   *      is pressed while the event is firing. The default is false.
   * @param {Boolean} metaKey (Optional) Indicates if one of the META keys
   *      is pressed while the event is firing. The default is false.
   * @param {int} keyCode (Optional) The code for the key that is in use.
   *      The default is 0.
   * @param {int} charCode (Optional) The Unicode code for the character
   *      associated with the key being used. The default is 0.
   */
  function simulateKeyEvent(
    target /* :HTMLElement*/,
    type /* :String*/,
    bubbles /* :Boolean*/,
    cancelable /* :Boolean*/,
    view /* :Window*/,
    ctrlKey /* :Boolean*/,
    altKey /* :Boolean*/,
    shiftKey /* :Boolean*/,
    metaKey /* :Boolean*/,
    keyCode /* :int*/,
    charCode /* :int*/,
    which /* :int*/,
    key) /* :Void*/ {
    // check target
    if (!target) {
      throw 'simulateKeyEvent(): Invalid target.';
    }

    // check event type
    if (isString(type)) {
      type = type.toLowerCase();
      switch (type) {
      case 'textevent': // DOM Level 3
        type = 'keypress';
        break;
      case 'keyup':
      case 'keydown':
      case 'keypress':
        break;
      default:
        throw 'simulateKeyEvent(): Event type ' + type + ' not supported.';
      }
    } else {
      throw 'simulateKeyEvent(): Event type must be a string.';
    }

    // setup default values
    if (!isBoolean(bubbles)) {
      bubbles = true; // all key events bubble
    }
    if (!isBoolean(cancelable)) {
      cancelable = true; // all key events can be cancelled
    }
    if (!isObject(view)) {
      view = window; // view is typically window
    }
    if (!isBoolean(ctrlKey)) {
      ctrlKey = false;
    }
    if (!isBoolean(altKey)) {
      altKey = false;
    }
    if (!isBoolean(shiftKey)) {
      shiftKey = false;
    }
    if (!isBoolean(metaKey)) {
      metaKey = false;
    }
    if (!isNumber(keyCode)) {
      keyCode = 0;
    }
    if (!isNumber(charCode)) {
      charCode = 0;
    }

    // try to create a mouse event
    var customEvent /* :MouseEvent*/ = null;

    // check for DOM-compliant browsers first
    if (isFunction(doc.createEvent)) {

      try {
        if (which) {
          throw 'which not support';
        }
        // try to create key event
        customEvent = doc.createEvent('KeyboardEvent');

        /*
         * Interesting problem: Firefox implemented a non-standard
         * version of initKeyEvent() based on DOM Level 2 specs.
         * Key event was removed from DOM Level 2 and re-introduced
         * in DOM Level 3 with a different interface. Firefox is the
         * only browser with any implementation of Key Events, so for
         * now, assume it's Firefox if the above line doesn't error.
         */
        // @TODO: Decipher between Firefox's implementation and a correct one.
        customEvent.initKeyEvent(type, bubbles, cancelable, view, ctrlKey,
          altKey, shiftKey, metaKey, keyCode, charCode);

      } catch (ex /* :Error*/) {

        /*
         * If it got here, that means key events aren't officially supported.
         * Safari/WebKit is a real problem now. WebKit 522 won't let you
         * set keyCode, charCode, or other properties if you use a
         * UIEvent, so we first must try to create a generic event. The
         * fun part is that this will throw an error on Safari 2.x. The
         * end result is that we need another try...catch statement just to
         * deal with this mess.
         */
        try {

          // try to create generic event - will fail in Safari 2.x
          customEvent = doc.createEvent('Events');

        } catch (uierror /* :Error*/) {

          // the above failed, so create a UIEvent for Safari 2.x
          customEvent = doc.createEvent('UIEvents');
        } finally {
          customEvent.initEvent(type, bubbles, cancelable, window, 0);

          // initialize
          customEvent.which = which;
          customEvent.view = view;
          customEvent.altKey = altKey;
          customEvent.ctrlKey = ctrlKey;
          customEvent.shiftKey = shiftKey;
          customEvent.metaKey = metaKey;
          customEvent.keyCode = keyCode;
          customEvent.charCode = charCode;
          customEvent.key = key;
        }
      }
      // fire the event
      target.dispatchEvent(customEvent);

    } else if (isObject(doc.createEventObject)) { // IE

      // create an IE event object
      customEvent = doc.createEventObject();

      // assign available properties
      customEvent.bubbles = bubbles;
      customEvent.cancelable = cancelable;
      customEvent.view = view;
      customEvent.ctrlKey = ctrlKey;
      customEvent.altKey = altKey;
      customEvent.shiftKey = shiftKey;
      customEvent.metaKey = metaKey;

      /*
       * IE doesn't support charCode explicitly. CharCode should
       * take precedence over any keyCode value for accurate
       * representation.
       */
      customEvent.keyCode = (charCode > 0) ? charCode : keyCode;

      // fire the event
      target.fireEvent('on' + type, customEvent);

    } else {
      throw 'simulateKeyEvent(): No event simulation framework present.';
    }
  }

  /*
   * Simulates a mouse event using the given event information to populate
   * the generated event object. This method does browser-equalizing
   * calculations to account for differences in the DOM and IE event models
   * as well as different browser quirks.
   * @method simulateMouseEvent
   * @private
   * @static
   * @param {HTMLElement} target The target of the given event.
   * @param {String} type The type of event to fire. This can be any one of
   *      the following: click, dblclick, mousedown, mouseup, mouseout,
   *      mouseover, and mousemove.
   * @param {Boolean} bubbles (Optional) Indicates if the event can be
   *      bubbled up. DOM Level 2 specifies that all mouse events bubble by
   *      default. The default is true.
   * @param {Boolean} cancelable (Optional) Indicates if the event can be
   *      canceled using preventDefault(). DOM Level 2 specifies that all
   *      mouse events except mousemove can be cancelled. The default
   *      is true for all events except mousemove, for which the default
   *      is false.
   * @param {Window} view (Optional) The view containing the target. This is
   *      typically the window object. The default is window.
   * @param {int} detail (Optional) The number of times the mouse button has
   *      been used. The default value is 1.
   * @param {int} screenX (Optional) The x-coordinate on the screen at which
   *      point the event occured. The default is 0.
   * @param {int} screenY (Optional) The y-coordinate on the screen at which
   *      point the event occured. The default is 0.
   * @param {int} clientX (Optional) The x-coordinate on the client at which
   *      point the event occured. The default is 0.
   * @param {int} clientY (Optional) The y-coordinate on the client at which
   *      point the event occured. The default is 0.
   * @param {Boolean} ctrlKey (Optional) Indicates if one of the CTRL keys
   *      is pressed while the event is firing. The default is false.
   * @param {Boolean} altKey (Optional) Indicates if one of the ALT keys
   *      is pressed while the event is firing. The default is false.
   * @param {Boolean} shiftKey (Optional) Indicates if one of the SHIFT keys
   *      is pressed while the event is firing. The default is false.
   * @param {Boolean} metaKey (Optional) Indicates if one of the META keys
   *      is pressed while the event is firing. The default is false.
   * @param {int} button (Optional) The button being pressed while the event
   *      is executing. The value should be 0 for the primary mouse button
   *      (typically the left button), 1 for the terciary mouse button
   *      (typically the middle button), and 2 for the secondary mouse button
   *      (typically the right button). The default is 0.
   * @param {HTMLElement} relatedTarget (Optional) For mouseout events,
   *      this is the element that the mouse has moved to. For mouseover
   *      events, this is the element that the mouse has moved from. This
   *      argument is ignored for all other events. The default is null.
   */
  function simulateMouseEvent(
    target /* :HTMLElement*/,
    type /* :String*/,
    bubbles /* :Boolean*/,
    cancelable /* :Boolean*/,
    view /* :Window*/,
    detail /* :int*/,
    screenX /* :int*/,
    screenY /* :int*/,
    clientX /* :int*/,
    clientY /* :int*/,
    ctrlKey /* :Boolean*/,
    altKey /* :Boolean*/,
    shiftKey /* :Boolean*/,
    metaKey /* :Boolean*/,
    dataTransfer = { setDragImage() {} } /* :Object*/,
    button /* :int*/,
    relatedTarget /* :HTMLElement*/) /* :Void*/ {
    // check target
    if (!target) {
      throw 'simulateMouseEvent(): Invalid target.';
    }

    // check event type
    if (isString(type)) {

      // make sure it's a supported mouse event or an msPointerEvent.
      if (!mouseEvents[type.toLowerCase()] && !msPointerEvents[type]) {
        throw 'simulateMouseEvent(): Event type ' + type + ' not supported.';
      }
    } else {
      throw 'simulateMouseEvent(): Event type must be a string.';
    }

    // setup default values
    if (!isBoolean(bubbles)) {
      bubbles = true; // all mouse events bubble
    }
    if (!isBoolean(cancelable)) {
      cancelable = (type !== 'mousemove'); // mousemove is the only one that can't be cancelled
    }
    if (!isObject(view)) {
      view = window; // view is typically window
    }
    if (!isNumber(detail)) {
      detail = 1; // number of mouse clicks must be at least one
    }
    if (!isNumber(screenX)) {
      screenX = 0;
    }
    if (!isNumber(screenY)) {
      screenY = 0;
    }
    if (!isNumber(clientX)) {
      clientX = 0;
    }
    if (!isNumber(clientY)) {
      clientY = 0;
    }
    if (!isBoolean(ctrlKey)) {
      ctrlKey = false;
    }
    if (!isBoolean(altKey)) {
      altKey = false;
    }
    if (!isBoolean(shiftKey)) {
      shiftKey = false;
    }
    if (!isBoolean(metaKey)) {
      metaKey = false;
    }
    if (!isNumber(button)) {
      button = 0;
    }

    relatedTarget = relatedTarget || null;

    // try to create a mouse event
    var customEvent /* :MouseEvent*/ = null;

    // check for DOM-compliant browsers first
    if (isFunction(doc.createEvent)) {

      customEvent = doc.createEvent('MouseEvents');
      customEvent.dataTransfer = dataTransfer;

      // Safari 2.x (WebKit 418) still doesn't implement initMouseEvent()
      if (customEvent.initMouseEvent) {
        customEvent.initMouseEvent(type, bubbles, cancelable, view, detail,
          screenX, screenY, clientX, clientY,
          ctrlKey, altKey, shiftKey, metaKey,
          button, relatedTarget);
      } else { // Safari

        // the closest thing available in Safari 2.x is UIEvents
        customEvent = doc.createEvent('UIEvents');
        customEvent.initEvent(type, bubbles, cancelable);
        customEvent.view = view;
        customEvent.detail = detail;
        customEvent.screenX = screenX;
        customEvent.screenY = screenY;
        customEvent.clientX = clientX;
        customEvent.clientY = clientY;
        customEvent.ctrlKey = ctrlKey;
        customEvent.altKey = altKey;
        customEvent.metaKey = metaKey;
        customEvent.shiftKey = shiftKey;
        customEvent.button = button;
        customEvent.relatedTarget = relatedTarget;
      }

      /*
       * Check to see if relatedTarget has been assigned. Firefox
       * versions less than 2.0 don't allow it to be assigned via
       * initMouseEvent() and the property is readonly after event
       * creation, so in order to keep .relatedTarget
       * working, assign to the IE proprietary toElement property
       * for mouseout event and fromElement property for mouseover
       * event.
       */
      if (relatedTarget && !customEvent.relatedTarget) {
        if (type === 'mouseout') {
          customEvent.toElement = relatedTarget;
        } else if (type === 'mouseover') {
          customEvent.fromElement = relatedTarget;
        }
      }

      // fire the event
      target.dispatchEvent(customEvent);

    } else if (isObject(doc.createEventObject)) { // IE

      // create an IE event object
      customEvent = doc.createEventObject();

      // assign available properties
      customEvent.bubbles = bubbles;
      customEvent.cancelable = cancelable;
      customEvent.view = view;
      customEvent.detail = detail;
      customEvent.screenX = screenX;
      customEvent.screenY = screenY;
      customEvent.clientX = clientX;
      customEvent.clientY = clientY;
      customEvent.ctrlKey = ctrlKey;
      customEvent.altKey = altKey;
      customEvent.metaKey = metaKey;
      customEvent.shiftKey = shiftKey;

      // fix button property for IE's wacky implementation
      switch (button) {
      case 0:
        customEvent.button = 1;
        break;
      case 1:
        customEvent.button = 4;
        break;
      case 2:
        // leave as is
        break;
      default:
        customEvent.button = 0;
      }

      /*
       * Have to use relatedTarget because IE won't allow assignment
       * to toElement or fromElement on generic events. This keeps
       * .relatedTarget.
       */
      customEvent.relatedTarget = relatedTarget;

      // fire the event
      target.fireEvent('on' + type, customEvent);

    } else {
      throw 'simulateMouseEvent(): No event simulation framework present.';
    }
  }

  /*
   * Simulates a UI event using the given event information to populate
   * the generated event object. This method does browser-equalizing
   * calculations to account for differences in the DOM and IE event models
   * as well as different browser quirks.
   * @method simulateHTMLEvent
   * @private
   * @static
   * @param {HTMLElement} target The target of the given event.
   * @param {String} type The type of event to fire. This can be any one of
   *      the following: click, dblclick, mousedown, mouseup, mouseout,
   *      mouseover, and mousemove.
   * @param {Boolean} bubbles (Optional) Indicates if the event can be
   *      bubbled up. DOM Level 2 specifies that all mouse events bubble by
   *      default. The default is true.
   * @param {Boolean} cancelable (Optional) Indicates if the event can be
   *      canceled using preventDefault(). DOM Level 2 specifies that all
   *      mouse events except mousemove can be cancelled. The default
   *      is true for all events except mousemove, for which the default
   *      is false.
   * @param {Window} view (Optional) The view containing the target. This is
   *      typically the window object. The default is window.
   * @param {int} detail (Optional) The number of times the mouse button has
   *      been used. The default value is 1.
   */
  function simulateUIEvent(
    target /* :HTMLElement*/,
    type /* :String*/,
    bubbles /* :Boolean*/,
    cancelable /* :Boolean*/,
    view /* :Window*/,
    detail /* :int*/,
    data /* extra data */
  ) /* :Void*/ {

    // check target
    if (!target) {
      throw 'simulateUIEvent(): Invalid target.';
    }

    // check event type
    if (isString(type)) {
      type = type.toLowerCase();

      // make sure it's a supported mouse event
      if (!uiEvents[type]) {
        throw "simulateUIEvent(): Event type '" + type + "' not supported.";
      }
    } else {
      throw 'simulateUIEvent(): Event type must be a string.';
    }

    // try to create a mouse event
    var customEvent = null;

    // setup default values
    if (!isBoolean(bubbles)) {
      bubbles = (type in bubbleEvents); // not all events bubble
    }
    if (!isBoolean(cancelable)) {
      cancelable = (type === 'submit'); // submit is the only one that can be cancelled
    }
    if (!isObject(view)) {
      view = window; // view is typically window
    }
    if (!isNumber(detail)) {
      detail = 1; // usually not used but defaulted to this
    }

    // check for DOM-compliant browsers first
    if (isFunction(doc.createEvent)) {

      // just a generic UI Event object is needed
      customEvent = doc.createEvent('UIEvents');
      customEvent.initUIEvent(type, bubbles, cancelable, view, detail);
      if (
        target.constructor.name === 'HTMLInputElement' ||
        target.constructor.name === 'HTMLTextAreaElement'
      ) {
        for (var dataKey in data) {
          Object.defineProperty(customEvent, dataKey, {
            get() {
              return data[dataKey];
            }
          });
        }
      }
      // fire the event
      target.dispatchEvent(customEvent);

    } else if (isObject(doc.createEventObject)) { // IE

      // create an IE event object
      customEvent = doc.createEventObject();

      // assign available properties
      customEvent.bubbles = bubbles;
      customEvent.cancelable = cancelable;
      customEvent.view = view;
      customEvent.detail = detail;

      // fire the event
      target.fireEvent('on' + type, customEvent);

    } else {
      throw 'simulateUIEvent(): No event simulation framework present.';
    }
  }

  /*
   * (iOS only) This is for creating native DOM gesture events which only iOS
   * v2.0+ is supporting.
   *
   * @method simulateGestureEvent
   * @private
   * @param {HTMLElement} target The target of the given event.
   * @param {String} type The type of event to fire. This can be any one of
   *      the following: touchstart, touchmove, touchend, touchcancel.
   * @param {Boolean} bubbles (Optional) Indicates if the event can be
   *      bubbled up. DOM Level 2 specifies that all mouse events bubble by
   *      default. The default is true.
   * @param {Boolean} cancelable (Optional) Indicates if the event can be
   *      canceled using preventDefault(). DOM Level 2 specifies that all
   *      touch events except touchcancel can be cancelled. The default
   *      is true for all events except touchcancel, for which the default
   *      is false.
   * @param {Window} view (Optional) The view containing the target. This is
   *      typically the window object. The default is window.
   * @param {int} detail (Optional) Specifies some detail information about
   *      the event depending on the type of event.
   * @param {int} screenX (Optional) The x-coordinate on the screen at which
   *      point the event occured. The default is 0.
   * @param {int} screenY (Optional) The y-coordinate on the screen at which
   *      point the event occured. The default is 0.
   * @param {int} clientX (Optional) The x-coordinate on the client at which
   *      point the event occured. The default is 0.
   * @param {int} clientY (Optional) The y-coordinate on the client at which
   *      point the event occured. The default is 0.
   * @param {Boolean} ctrlKey (Optional) Indicates if one of the CTRL keys
   *      is pressed while the event is firing. The default is false.
   * @param {Boolean} altKey (Optional) Indicates if one of the ALT keys
   *      is pressed while the event is firing. The default is false.
   * @param {Boolean} shiftKey (Optional) Indicates if one of the SHIFT keys
   *      is pressed while the event is firing. The default is false.
   * @param {Boolean} metaKey (Optional) Indicates if one of the META keys
   *      is pressed while the event is firing. The default is false.
   * @param {float} scale (iOS v2+ only) The distance between two fingers
   *      since the start of an event as a multiplier of the initial distance.
   *      The default value is 1.0.
   * @param {float} rotation (iOS v2+ only) The delta rotation since the start
   *      of an event, in degrees, where clockwise is positive and
   *      counter-clockwise is negative. The default value is 0.0.
   */
  function simulateGestureEvent(target, type,
    bubbles, // boolean
    cancelable, // boolean
    view, // DOMWindow
    detail, // long
    screenX,
    screenY, // long
    clientX,
    clientY, // long
    ctrlKey,
    altKey,
    shiftKey,
    metaKey, // boolean
    scale, // float
    rotation // float
  ) {

    var customEvent;

    if (!UA.ios || UA.ios < 2.0) {
      throw 'simulateGestureEvent(): Native gesture DOM eventframe is not available in this platform.';
    }

    // check taget
    if (!target) {
      throw 'simulateGestureEvent(): Invalid target.';
    }

    // check event type
    if (isString(type)) {
      type = type.toLowerCase();

      // make sure it's a supported touch event
      if (!gestureEvents[type]) {
        throw "simulateTouchEvent(): Event type '" + type + "' not supported.";
      }
    } else {
      throw 'simulateGestureEvent(): Event type must be a string.';
    }

    // setup default values
    if (isBoolean(bubbles)) { bubbles = true; } // bubble by default
    if (isBoolean(cancelable)) { cancelable = true; }
    if (isObject(view)) { view = window; }
    if (isNumber(detail)) { detail = 2; } // usually not used.
    if (isNumber(screenX)) { screenX = 0; }
    if (isNumber(screenY)) { screenY = 0; }
    if (isNumber(clientX)) { clientX = 0; }
    if (isNumber(clientY)) { clientY = 0; }
    if (isBoolean(ctrlKey)) { ctrlKey = false; }
    if (isBoolean(altKey)) { altKey = false; }
    if (isBoolean(shiftKey)) { shiftKey = false; }
    if (isBoolean(metaKey)) { metaKey = false; }

    if (isNumber(scale)) { scale = 1.0; }
    if (isNumber(rotation)) { rotation = 0.0; }

    customEvent = doc.createEvent('GestureEvent');

    customEvent.initGestureEvent(
      type,
      bubbles,
      cancelable,
      view,
      detail,
      screenX,
      screenY,
      clientX,
      clientY,
      ctrlKey,
      altKey,
      shiftKey,
      metaKey,
      target,
      scale,
      rotation
    );

    target.dispatchEvent(customEvent);
  }

  /*
   * @method simulateTouchEvent
   * @private
   * @param {HTMLElement} target The target of the given event.
   * @param {String} type The type of event to fire. This can be any one of
   *      the following: touchstart, touchmove, touchend, touchcancel.
   * @param {Boolean} bubbles (Optional) Indicates if the event can be
   *      bubbled up. DOM Level 2 specifies that all mouse events bubble by
   *      default. The default is true.
   * @param {Boolean} cancelable (Optional) Indicates if the event can be
   *      canceled using preventDefault(). DOM Level 2 specifies that all
   *      touch events except touchcancel can be cancelled. The default
   *      is true for all events except touchcancel, for which the default
   *      is false.
   * @param {Window} view (Optional) The view containing the target. This is
   *      typically the window object. The default is window.
   * @param {int} detail (Optional) Specifies some detail information about
   *      the event depending on the type of event.
   * @param {int} screenX (Optional) The x-coordinate on the screen at which
   *      point the event occured. The default is 0.
   * @param {int} screenY (Optional) The y-coordinate on the screen at which
   *      point the event occured. The default is 0.
   * @param {int} clientX (Optional) The x-coordinate on the client at which
   *      point the event occured. The default is 0.
   * @param {int} clientY (Optional) The y-coordinate on the client at which
   *      point the event occured. The default is 0.
   * @param {TouchList} touches A collection of Touch objects representing
   *      all touches associated with this event.
   * @param {TouchList} targetTouches A collection of Touch objects
   *      representing all touches associated with this target.
   * @param {TouchList} changedTouches A collection of Touch objects
   *      representing all touches that changed in this event.
   * @param {float} scale (iOS v2+ only) The distance between two fingers
   *      since the start of an event as a multiplier of the initial distance.
   *      The default value is 1.0.
   * @param {float} rotation (iOS v2+ only) The delta rotation since the start
   *      of an event, in degrees, where clockwise is positive and
   *      counter-clockwise is negative. The default value is 0.0.
   */
  function simulateTouchEvent(target, type,
    bubbles, // boolean
    cancelable, // boolean
    view, // DOMWindow
    detail, // long
    screenX, screenY, // long
    clientX, clientY, // long
    touches, // TouchList
    targetTouches, // TouchList
    changedTouches, // TouchList
    scale, // float
    rotation // float
  ) {
    // check taget
    if (!target) {
      throw 'simulateTouchEvent(): Invalid target.';
    }

    // check event type
    if (isString(type)) {
      type = type.toLowerCase();

      // make sure it's a supported touch event
      if (!touchEvents[type]) {
        throw "simulateTouchEvent(): Event type '" + type + "' not supported.";
      }
    } else {
      throw 'simulateTouchEvent(): Event type must be a string.';
    }

    // setup default values
    if (!isBoolean(bubbles)) {
      bubbles = true;
    } // bubble by default.
    if (!isBoolean(cancelable)) {
      cancelable = (type !== 'touchcancel'); // touchcancel is not cancelled
    }
    if (!isObject(view)) { view = window; }
    if (!isNumber(detail)) { detail = 1; } // usually not used. defaulted to # of touch objects.
    if (!isNumber(screenX)) { screenX = 0; }
    if (!isNumber(screenY)) { screenY = 0; }
    if (!isNumber(clientX)) { clientX = 0; }
    if (!isNumber(clientY)) { clientY = 0; }

    var touch = new Touch({
      target: target,
      identifier: 1,
      screenX: screenX,
      screenY: screenY,
      clientX: clientX,
      clientY: clientY
    });

    var customEvent = new TouchEvent(type, {
      bubbles: bubbles,
      cancelable: cancelable,
      view: view,
      detail: detail,
      touches: touches || [touch],
      targetTouches: targetTouches || [touch],
      changedTouches: changedTouches || [touch]
    });

    target.dispatchEvent(customEvent);
  }

  /**
   * Simulates the event or gesture with the given name on a target.
   * @param {HTMLElement} target The DOM element that's the target of the event.
   * @param {String} type The type of event or name of the supported gesture to simulate
   *      (i.e., "click", "doubletap", "flick").
   * @param {Object} options (Optional) Extra options to copy onto the event object.
   *      For gestures, options are used to refine the gesture behavior.
   * @return {void}
   * @for Event
   * @method domEvent
   * @static
   */
  exports.domEvent = function(target, type, options) {
    if (target[0]) {
      target = target[0];
    }

    options = options || {};

    if (mouseEvents[type] || msPointerEvents[type]) {
      simulateMouseEvent(
        target,
        type,
        options.bubbles,
        options.cancelable,
        options.view,
        options.detail,
        options.screenX,
        options.screenY,
        options.clientX,
        options.clientY,
        options.ctrlKey,
        options.altKey,
        options.shiftKey,
        options.metaKey,
        options.dataTransfer,
        options.button,
        options.relatedTarget
      );
    } else if (keyEvents[type]) {
      simulateKeyEvent(
        target,
        type,
        options.bubbles,
        options.cancelable,
        options.view,
        options.ctrlKey,
        options.altKey,
        options.shiftKey,
        options.metaKey,
        options.keyCode,
        options.charCode,
        options.which,
        options.key);
    } else if (uiEvents[type]) {
      simulateUIEvent(
        target,
        type,
        options.bubbles,
        options.cancelable,
        options.view,
        options.detail,
        options.data || {}
      );
      // touch low-level event simulation
    } else if (touchEvents[type]) {
      if (window && window.TouchEvent) {
        simulateTouchEvent(
          target,
          type,
          options.bubbles,
          options.cancelable,
          options.view,
          options.detail,
          options.screenX,
          options.screenY,
          options.clientX,
          options.clientY,
          options.ctrlKey,
          options.altKey,
          options.shiftKey,
          options.metaKey,
          options.touches,
          options.targetTouches,
          options.changedTouches,
          options.scale,
          options.rotation
        );
      } else {
        throw 'simulate(): Event ' + type + ' can\'t be simulated. Use gesture-simulate module instead.';
      }

      // ios gesture low-level event simulation (iOS v2+ only)
    } else if (UA.ios && UA.ios >= 2.0 && gestureEvents[type]) {
      simulateGestureEvent(
        target, type,
        options.bubbles,
        options.cancelable,
        options.view,
        options.detail,
        options.screenX,
        options.screenY,
        options.clientX,
        options.clientY,
        options.ctrlKey,
        options.altKey,
        options.shiftKey,
        options.metaKey,
        options.scale,
        options.rotation);
      // anything else
    } else {
      throw "simulate(): Event '" + type + "' can't be simulated.";
    }
  };
});
