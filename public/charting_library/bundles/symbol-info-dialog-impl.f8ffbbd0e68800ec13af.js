(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [9374],
  {
    97754: (e, t) => {
      var r;
      !(function () {
        'use strict';
        var n = {}.hasOwnProperty;
        function o() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var r = arguments[t];
            if (r) {
              var i = typeof r;
              if ('string' === i || 'number' === i) e.push(r);
              else if (Array.isArray(r) && r.length) {
                var a = o.apply(null, r);
                a && e.push(a);
              } else if ('object' === i)
                for (var s in r) n.call(r, s) && r[s] && e.push(s);
            }
          }
          return e.join(' ');
        }
        e.exports
          ? ((o.default = o), (e.exports = o))
          : void 0 ===
              (r = function () {
                return o;
              }.apply(t, [])) || (e.exports = r);
      })();
    },
    61228: (e) => {
      e.exports = { body: 'body-PkVsoG0q' };
    },
    85535: (e) => {
      e.exports = { header: 'header-L3BebqJ1', close: 'close-L3BebqJ1' };
    },
    66340: (e) => {
      e.exports = { message: 'message-GTDWHWgI', error: 'error-GTDWHWgI' };
    },
    3028: (e) => {
      e.exports = { footer: 'footer-KnygFiHk' };
    },
    9745: (e, t, r) => {
      'use strict';
      r.d(t, { Icon: () => o });
      var n = r(50959);
      const o = n.forwardRef((e, t) => {
        const { icon: r = '', ...o } = e;
        return n.createElement('span', {
          ...o,
          ref: t,
          dangerouslySetInnerHTML: { __html: r },
        });
      });
    },
    90186: (e, t, r) => {
      'use strict';
      function n(e) {
        return i(e, a);
      }
      function o(e) {
        return i(e, s);
      }
      function i(e, t) {
        const r = Object.entries(e).filter(t),
          n = {};
        for (const [e, t] of r) n[e] = t;
        return n;
      }
      function a(e) {
        const [t, r] = e;
        return 0 === t.indexOf('data-') && 'string' == typeof r;
      }
      function s(e) {
        return 0 === e[0].indexOf('aria-');
      }
      r.d(t, {
        filterDataProps: () => n,
        filterAriaProps: () => o,
        filterProps: () => i,
        isDataAttribute: () => a,
        isAriaAttribute: () => s,
      });
    },
    39640: (e, t, r) => {
      'use strict';
      function n(e, t, r, n, o) {
        function i(o) {
          if (e > o.timeStamp) return;
          const i = o.target;
          void 0 !== r &&
            null !== t &&
            null !== i &&
            i.ownerDocument === n &&
            (t.contains(i) || r(o));
        }
        return (
          o.click && n.addEventListener('click', i, !1),
          o.mouseDown && n.addEventListener('mousedown', i, !1),
          o.touchEnd && n.addEventListener('touchend', i, !1),
          o.touchStart && n.addEventListener('touchstart', i, !1),
          () => {
            n.removeEventListener('click', i, !1),
              n.removeEventListener('mousedown', i, !1),
              n.removeEventListener('touchend', i, !1),
              n.removeEventListener('touchstart', i, !1);
          }
        );
      }
      r.d(t, { addOutsideEventListener: () => n });
    },
    967: (e, t, r) => {
      'use strict';
      r.d(t, { weekDaysShortNames: () => i, weekDaysMiniNames: () => a });
      var n = r(44352),
        o = r(84917);
      o.Months.JANUARY,
        n.t(null, void 0, r(26910)),
        o.Months.FEBRUARY,
        n.t(null, void 0, r(16467)),
        o.Months.MARCH,
        n.t(null, void 0, r(84675)),
        o.Months.APRIL,
        n.t(null, void 0, r(97637)),
        o.Months.MAY,
        n.t(null, void 0, r(68327)),
        o.Months.JUNE,
        n.t(null, void 0, r(49385)),
        o.Months.JULY,
        n.t(null, void 0, r(23230)),
        o.Months.AUGUST,
        n.t(null, void 0, r(86797)),
        o.Months.SEPTEMBER,
        n.t(null, void 0, r(61132)),
        o.Months.OCTOBER,
        n.t(null, void 0, r(90784)),
        o.Months.NOVEMBER,
        n.t(null, void 0, r(71194)),
        o.Months.DECEMBER,
        n.t(null, void 0, r(55669)),
        o.Months.JANUARY,
        n.t(null, void 0, r(95425)),
        o.Months.FEBRUARY,
        n.t(null, void 0, r(35050)),
        o.Months.MARCH,
        n.t(null, void 0, r(51369)),
        o.Months.APRIL,
        n.t(null, void 0, r(42762)),
        o.Months.MAY,
        n.t(null, { context: 'short' }, r(27991)),
        o.Months.JUNE,
        n.t(null, void 0, r(15224)),
        o.Months.JULY,
        n.t(null, void 0, r(6215)),
        o.Months.AUGUST,
        n.t(null, void 0, r(38465)),
        o.Months.SEPTEMBER,
        n.t(null, void 0, r(57902)),
        o.Months.OCTOBER,
        n.t(null, void 0, r(73546)),
        o.Months.NOVEMBER,
        n.t(null, void 0, r(71230)),
        o.Months.DECEMBER,
        n.t(null, void 0, r(92203)),
        o.WeekDays.SUNDAY,
        n.t(null, void 0, r(72149)),
        o.WeekDays.MONDAY,
        n.t(null, void 0, r(61199)),
        o.WeekDays.TUESDAY,
        n.t(null, void 0, r(44979)),
        o.WeekDays.WEDNESDAY,
        n.t(null, void 0, r(7147)),
        o.WeekDays.THURSDAY,
        n.t(null, void 0, r(7951)),
        o.WeekDays.FRIDAY,
        n.t(null, void 0, r(72970)),
        o.WeekDays.SATURDAY,
        n.t(null, void 0, r(1144));
      const i = {
          [o.WeekDays.SUNDAY]: n.t(null, void 0, r(86577)),
          [o.WeekDays.MONDAY]: n.t(null, void 0, r(83085)),
          [o.WeekDays.TUESDAY]: n.t(null, void 0, r(94316)),
          [o.WeekDays.WEDNESDAY]: n.t(null, void 0, r(75094)),
          [o.WeekDays.THURSDAY]: n.t(null, void 0, r(9787)),
          [o.WeekDays.FRIDAY]: n.t(null, void 0, r(564)),
          [o.WeekDays.SATURDAY]: n.t(null, void 0, r(36835)),
        },
        a = {
          [o.WeekDays.SUNDAY]: n.t(null, { context: 'day_of_week' }, r(85954)),
          [o.WeekDays.MONDAY]: n.t(null, { context: 'day_of_week' }, r(11268)),
          [o.WeekDays.TUESDAY]: n.t(null, { context: 'day_of_week' }, r(31533)),
          [o.WeekDays.WEDNESDAY]: n.t(
            null,
            { context: 'day_of_week' },
            r(26230),
          ),
          [o.WeekDays.THURSDAY]: n.t(
            null,
            { context: 'day_of_week' },
            r(24793),
          ),
          [o.WeekDays.FRIDAY]: n.t(null, { context: 'day_of_week' }, r(19801)),
          [o.WeekDays.SATURDAY]: n.t(
            null,
            { context: 'day_of_week' },
            r(63331),
          ),
        };
    },
    99054: (e, t, r) => {
      'use strict';
      r.d(t, { setFixedBodyState: () => l });
      const n = (() => {
        let e;
        return () => {
          var t;
          if (void 0 === e) {
            const r = document.createElement('div'),
              n = r.style;
            (n.visibility = 'hidden'),
              (n.width = '100px'),
              (n.msOverflowStyle = 'scrollbar'),
              document.body.appendChild(r);
            const o = r.offsetWidth;
            r.style.overflow = 'scroll';
            const i = document.createElement('div');
            (i.style.width = '100%'), r.appendChild(i);
            const a = i.offsetWidth;
            null === (t = r.parentNode) || void 0 === t || t.removeChild(r),
              (e = o - a);
          }
          return e;
        };
      })();
      function o(e, t, r) {
        null !== e && e.style.setProperty(t, r);
      }
      function i(e, t) {
        return getComputedStyle(e, null).getPropertyValue(t);
      }
      function a(e, t) {
        return parseInt(i(e, t));
      }
      let s = 0,
        u = !1;
      function l(e) {
        const { body: t } = document,
          r = t.querySelector('.widgetbar-wrap');
        if (e && 1 == ++s) {
          const e = i(t, 'overflow'),
            s = a(t, 'padding-right');
          'hidden' !== e.toLowerCase() &&
            t.scrollHeight > t.offsetHeight &&
            (o(r, 'right', `${n()}px`),
            (t.style.paddingRight = `${s + n()}px`),
            (u = !0)),
            t.classList.add('i-no-scroll');
        } else if (
          !e &&
          s > 0 &&
          0 == --s &&
          (t.classList.remove('i-no-scroll'), u)
        ) {
          o(r, 'right', '0px');
          let e = 0;
          0,
            t.scrollHeight <= t.clientHeight && (e -= n()),
            (t.style.paddingRight = (e < 0 ? 0 : e) + 'px'),
            (u = !1);
        }
      }
    },
    58095: (e, t, r) => {
      'use strict';
      r.d(t, { useOutsideEvent: () => i });
      var n = r(50959),
        o = r(39640);
      function i(e) {
        const {
            click: t,
            mouseDown: r,
            touchEnd: i,
            touchStart: a,
            handler: s,
            reference: u,
            ownerDocument: l = document,
          } = e,
          c = (0, n.useRef)(null),
          d = (0, n.useRef)(new CustomEvent('timestamp').timeStamp);
        return (
          (0, n.useLayoutEffect)(() => {
            const e = { click: t, mouseDown: r, touchEnd: i, touchStart: a },
              n = u ? u.current : c.current;
            return (0, o.addOutsideEventListener)(d.current, n, s, l, e);
          }, [t, r, i, a, s]),
          u || c
        );
      }
    },
    9481: (e, t, r) => {
      'use strict';
      r.d(t, { KeyboardDocumentListener: () => o });
      var n = r(50959);
      class o extends n.PureComponent {
        constructor() {
          super(...arguments),
            (this._handleKeyDown = (e) => {
              e.keyCode === this.props.keyCode && this.props.handler(e);
            });
        }
        componentDidMount() {
          document.addEventListener(
            this.props.eventType || 'keydown',
            this._handleKeyDown,
            !1,
          );
        }
        componentWillUnmount() {
          document.removeEventListener(
            this.props.eventType || 'keydown',
            this._handleKeyDown,
            !1,
          );
        }
        render() {
          return null;
        }
      }
    },
    88216: (e, t, r) => {
      'use strict';
      r.d(t, { OverlapManager: () => i, getRootOverlapManager: () => s });
      var n = r(50151);
      class o {
        constructor() {
          this._storage = [];
        }
        add(e) {
          this._storage.push(e);
        }
        remove(e) {
          this._storage = this._storage.filter((t) => e !== t);
        }
        has(e) {
          return this._storage.includes(e);
        }
        getItems() {
          return this._storage;
        }
      }
      class i {
        constructor(e = document) {
          (this._storage = new o()),
            (this._windows = new Map()),
            (this._index = 0),
            (this._document = e),
            (this._container = e.createDocumentFragment());
        }
        setContainer(e) {
          const t = this._container,
            r = null === e ? this._document.createDocumentFragment() : e;
          !(function (e, t) {
            Array.from(e.childNodes).forEach((e) => {
              e.nodeType === Node.ELEMENT_NODE && t.appendChild(e);
            });
          })(t, r),
            (this._container = r);
        }
        registerWindow(e) {
          this._storage.has(e) || this._storage.add(e);
        }
        ensureWindow(e, t = { position: 'fixed', direction: 'normal' }) {
          const r = this._windows.get(e);
          if (void 0 !== r) return r;
          this.registerWindow(e);
          const n = this._document.createElement('div');
          if (
            ((n.style.position = t.position),
            (n.style.zIndex = this._index.toString()),
            (n.dataset.id = e),
            void 0 !== t.index)
          ) {
            const e = this._container.childNodes.length;
            if (t.index >= e) this._container.appendChild(n);
            else if (t.index <= 0)
              this._container.insertBefore(n, this._container.firstChild);
            else {
              const e = this._container.childNodes[t.index];
              this._container.insertBefore(n, e);
            }
          } else
            'reverse' === t.direction
              ? this._container.insertBefore(n, this._container.firstChild)
              : this._container.appendChild(n);
          return this._windows.set(e, n), ++this._index, n;
        }
        unregisterWindow(e) {
          this._storage.remove(e);
          const t = this._windows.get(e);
          void 0 !== t &&
            (null !== t.parentElement && t.parentElement.removeChild(t),
            this._windows.delete(e));
        }
        getZindex(e) {
          const t = this.ensureWindow(e);
          return parseInt(t.style.zIndex || '0');
        }
        moveToTop(e) {
          if (this.getZindex(e) !== this._index) {
            this.ensureWindow(e).style.zIndex = (++this._index).toString();
          }
        }
        removeWindow(e) {
          this.unregisterWindow(e);
        }
      }
      const a = new WeakMap();
      function s(e = document) {
        const t = e.getElementById('overlap-manager-root');
        if (null !== t) return (0, n.ensureDefined)(a.get(t));
        {
          const t = new i(e),
            r = (function (e) {
              const t = e.createElement('div');
              return (
                (t.style.position = 'absolute'),
                (t.style.zIndex = (150).toString()),
                (t.style.top = '0px'),
                (t.style.left = '0px'),
                (t.id = 'overlap-manager-root'),
                t
              );
            })(e);
          return a.set(r, t), t.setContainer(r), e.body.appendChild(r), t;
        }
      }
    },
    65718: (e, t, r) => {
      'use strict';
      r.d(t, { Portal: () => u, PortalContext: () => l });
      var n = r(50959),
        o = r(962),
        i = r(68671),
        a = r(88216),
        s = r(50655);
      class u extends n.PureComponent {
        constructor() {
          super(...arguments), (this._uuid = (0, i.guid)());
        }
        componentWillUnmount() {
          this._manager().removeWindow(this._uuid);
        }
        render() {
          const e = this._manager().ensureWindow(
            this._uuid,
            this.props.layerOptions,
          );
          return (
            (e.style.top = this.props.top || ''),
            (e.style.bottom = this.props.bottom || ''),
            (e.style.left = this.props.left || ''),
            (e.style.right = this.props.right || ''),
            (e.style.pointerEvents = this.props.pointerEvents || ''),
            o.createPortal(
              n.createElement(l.Provider, { value: this }, this.props.children),
              e,
            )
          );
        }
        moveToTop() {
          this._manager().moveToTop(this._uuid);
        }
        _manager() {
          return null === this.context
            ? (0, a.getRootOverlapManager)()
            : this.context;
        }
      }
      u.contextType = s.SlotContext;
      const l = n.createContext(null);
    },
    50655: (e, t, r) => {
      'use strict';
      r.d(t, { Slot: () => o, SlotContext: () => i });
      var n = r(50959);
      class o extends n.Component {
        shouldComponentUpdate() {
          return !1;
        }
        render() {
          return n.createElement('div', {
            style: { position: 'fixed', zIndex: 150, left: 0, top: 0 },
            ref: this.props.reference,
          });
        }
      }
      const i = n.createContext(null);
    },
    95257: (e, t) => {
      'use strict';
      var r = Symbol.for('react.element'),
        n = Symbol.for('react.portal'),
        o = Symbol.for('react.fragment'),
        i = Symbol.for('react.strict_mode'),
        a = Symbol.for('react.profiler'),
        s = Symbol.for('react.provider'),
        u = Symbol.for('react.context'),
        l = Symbol.for('react.forward_ref'),
        c = Symbol.for('react.suspense'),
        d = Symbol.for('react.memo'),
        h = Symbol.for('react.lazy'),
        p = Symbol.iterator;
      var _ = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        m = Object.assign,
        f = {};
      function v(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = f),
          (this.updater = r || _);
      }
      function y() {}
      function S(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = f),
          (this.updater = r || _);
      }
      (v.prototype.isReactComponent = {}),
        (v.prototype.setState = function (e, t) {
          if ('object' != typeof e && 'function' != typeof e && null != e)
            throw Error(
              'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
            );
          this.updater.enqueueSetState(this, e, t, 'setState');
        }),
        (v.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
        }),
        (y.prototype = v.prototype);
      var b = (S.prototype = new y());
      (b.constructor = S), m(b, v.prototype), (b.isPureReactComponent = !0);
      var g = Array.isArray,
        k = Object.prototype.hasOwnProperty,
        D = { current: null },
        T = { key: !0, ref: !0, __self: !0, __source: !0 };
      function M(e, t, n) {
        var o,
          i = {},
          a = null,
          s = null;
        if (null != t)
          for (o in (void 0 !== t.ref && (s = t.ref),
          void 0 !== t.key && (a = '' + t.key),
          t))
            k.call(t, o) && !T.hasOwnProperty(o) && (i[o] = t[o]);
        var u = arguments.length - 2;
        if (1 === u) i.children = n;
        else if (1 < u) {
          for (var l = Array(u), c = 0; c < u; c++) l[c] = arguments[c + 2];
          i.children = l;
        }
        if (e && e.defaultProps)
          for (o in (u = e.defaultProps)) void 0 === i[o] && (i[o] = u[o]);
        return {
          $$typeof: r,
          type: e,
          key: a,
          ref: s,
          props: i,
          _owner: D.current,
        };
      }
      function z(e) {
        return 'object' == typeof e && null !== e && e.$$typeof === r;
      }
      var E = /\/+/g;
      function I(e, t) {
        return 'object' == typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { '=': '=0', ':': '=2' };
              return (
                '$' +
                e.replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })('' + e.key)
          : t.toString(36);
      }
      function x(e, t, o, i, a) {
        var s = typeof e;
        ('undefined' !== s && 'boolean' !== s) || (e = null);
        var u = !1;
        if (null === e) u = !0;
        else
          switch (s) {
            case 'string':
            case 'number':
              u = !0;
              break;
            case 'object':
              switch (e.$$typeof) {
                case r:
                case n:
                  u = !0;
              }
          }
        if (u)
          return (
            (a = a((u = e))),
            (e = '' === i ? '.' + I(u, 0) : i),
            g(a)
              ? ((o = ''),
                null != e && (o = e.replace(E, '$&/') + '/'),
                x(a, t, o, '', function (e) {
                  return e;
                }))
              : null != a &&
                (z(a) &&
                  (a = (function (e, t) {
                    return {
                      $$typeof: r,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    a,
                    o +
                      (!a.key || (u && u.key === a.key)
                        ? ''
                        : ('' + a.key).replace(E, '$&/') + '/') +
                      e,
                  )),
                t.push(a)),
            1
          );
        if (((u = 0), (i = '' === i ? '.' : i + ':'), g(e)))
          for (var l = 0; l < e.length; l++) {
            var c = i + I((s = e[l]), l);
            u += x(s, t, o, c, a);
          }
        else if (
          ((c = (function (e) {
            return null === e || 'object' != typeof e
              ? null
              : 'function' == typeof (e = (p && e[p]) || e['@@iterator'])
              ? e
              : null;
          })(e)),
          'function' == typeof c)
        )
          for (e = c.call(e), l = 0; !(s = e.next()).done; )
            u += x((s = s.value), t, o, (c = i + I(s, l++)), a);
        else if ('object' === s)
          throw (
            ((t = String(e)),
            Error(
              'Objects are not valid as a React child (found: ' +
                ('[object Object]' === t
                  ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                  : t) +
                '). If you meant to render a collection of children, use an array instead.',
            ))
          );
        return u;
      }
      function L(e, t, r) {
        if (null == e) return e;
        var n = [],
          o = 0;
        return (
          x(e, n, '', '', function (e) {
            return t.call(r, e, o++);
          }),
          n
        );
      }
      function N(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()).then(
            function (t) {
              (0 !== e._status && -1 !== e._status) ||
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (0 !== e._status && -1 !== e._status) ||
                ((e._status = 2), (e._result = t));
            },
          ),
            -1 === e._status && ((e._status = 0), (e._result = t));
        }
        if (1 === e._status) return e._result.default;
        throw e._result;
      }
      var W = { current: null },
        U = { transition: null },
        C = {
          ReactCurrentDispatcher: W,
          ReactCurrentBatchConfig: U,
          ReactCurrentOwner: D,
        };
      (t.Children = {
        map: L,
        forEach: function (e, t, r) {
          L(
            e,
            function () {
              t.apply(this, arguments);
            },
            r,
          );
        },
        count: function (e) {
          var t = 0;
          return (
            L(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            L(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!z(e))
            throw Error(
              'React.Children.only expected to receive a single React element child.',
            );
          return e;
        },
      }),
        (t.Component = v),
        (t.Fragment = o),
        (t.Profiler = a),
        (t.PureComponent = S),
        (t.StrictMode = i),
        (t.Suspense = c),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = C),
        (t.cloneElement = function (e, t, n) {
          if (null == e)
            throw Error(
              'React.cloneElement(...): The argument must be a React element, but you passed ' +
                e +
                '.',
            );
          var o = m({}, e.props),
            i = e.key,
            a = e.ref,
            s = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((a = t.ref), (s = D.current)),
              void 0 !== t.key && (i = '' + t.key),
              e.type && e.type.defaultProps)
            )
              var u = e.type.defaultProps;
            for (l in t)
              k.call(t, l) &&
                !T.hasOwnProperty(l) &&
                (o[l] = void 0 === t[l] && void 0 !== u ? u[l] : t[l]);
          }
          var l = arguments.length - 2;
          if (1 === l) o.children = n;
          else if (1 < l) {
            u = Array(l);
            for (var c = 0; c < l; c++) u[c] = arguments[c + 2];
            o.children = u;
          }
          return {
            $$typeof: r,
            type: e.type,
            key: i,
            ref: a,
            props: o,
            _owner: s,
          };
        }),
        (t.createContext = function (e) {
          return (
            ((e = {
              $$typeof: u,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
              _defaultValue: null,
              _globalName: null,
            }).Provider = { $$typeof: s, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = M),
        (t.createFactory = function (e) {
          var t = M.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: l, render: e };
        }),
        (t.isValidElement = z),
        (t.lazy = function (e) {
          return {
            $$typeof: h,
            _payload: { _status: -1, _result: e },
            _init: N,
          };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
        }),
        (t.startTransition = function (e) {
          var t = U.transition;
          U.transition = {};
          try {
            e();
          } finally {
            U.transition = t;
          }
        }),
        (t.unstable_act = function () {
          throw Error(
            'act(...) is not supported in production builds of React.',
          );
        }),
        (t.useCallback = function (e, t) {
          return W.current.useCallback(e, t);
        }),
        (t.useContext = function (e) {
          return W.current.useContext(e);
        }),
        (t.useDebugValue = function () {}),
        (t.useDeferredValue = function (e) {
          return W.current.useDeferredValue(e);
        }),
        (t.useEffect = function (e, t) {
          return W.current.useEffect(e, t);
        }),
        (t.useId = function () {
          return W.current.useId();
        }),
        (t.useImperativeHandle = function (e, t, r) {
          return W.current.useImperativeHandle(e, t, r);
        }),
        (t.useInsertionEffect = function (e, t) {
          return W.current.useInsertionEffect(e, t);
        }),
        (t.useLayoutEffect = function (e, t) {
          return W.current.useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return W.current.useMemo(e, t);
        }),
        (t.useReducer = function (e, t, r) {
          return W.current.useReducer(e, t, r);
        }),
        (t.useRef = function (e) {
          return W.current.useRef(e);
        }),
        (t.useState = function (e) {
          return W.current.useState(e);
        }),
        (t.useSyncExternalStore = function (e, t, r) {
          return W.current.useSyncExternalStore(e, t, r);
        }),
        (t.useTransition = function () {
          return W.current.useTransition();
        }),
        (t.version = '18.2.0');
    },
    50959: (e, t, r) => {
      'use strict';
      e.exports = r(95257);
    },
    82262: (e) => {
      e.exports = {
        popupDialog: 'popupDialog-A46xVgF2',
        content: 'content-A46xVgF2',
        row: 'row-A46xVgF2',
        column: 'column-A46xVgF2',
        title: 'title-A46xVgF2',
        value: 'value-A46xVgF2',
        columnTitle: 'columnTitle-A46xVgF2',
        columnValue: 'columnValue-A46xVgF2',
      };
    },
    16078: (e, t, r) => {
      'use strict';
      r.r(t), r.d(t, { showSymbolInfoDialog: () => Z });
      var n = r(962),
        o = r(50959),
        i = r(50151),
        a = r(967),
        s = r(82992),
        u = r(44352),
        l = r(68671),
        c = r(21945),
        d = r(32769),
        h = r.n(d),
        p = r(2484),
        _ = r(74599);
      function m(e, t) {
        const r = Math.floor(t / 1e4) % 1e4,
          n = (Math.floor(t / 100) % 100) - 1,
          o = t % 100;
        return e.format(new Date(Date.UTC(r, n, o)));
      }
      var f = r(1930),
        v = r(65312),
        y = r(36776),
        S = r(63016),
        b = r(97754),
        g = r(85535),
        k = r(8636),
        D = r(9745);
      function T(e) {
        const t = e.hideIcon
          ? null
          : o.createElement(D.Icon, {
              className: g.close,
              icon: k,
              onClick: e.onClose,
            });
        return o.createElement(
          'div',
          {
            className: b(g.header, e.className),
            'data-dragg-area': !0,
            ref: e.reference,
          },
          e.children,
          t,
        );
      }
      r(3028);
      var M = r(61228);
      function z(e) {
        return o.createElement(
          'div',
          { className: b(M.body, e.className), ref: e.reference },
          e.children,
        );
      }
      r(58095), r(66340);
      var E = r(9481),
        I = r(76422),
        x = r(52092),
        L = r(82262);
      class N extends o.PureComponent {
        constructor() {
          super(...arguments), (this._close = () => this.props.onClose());
        }
        componentDidMount() {
          I.subscribe(x.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this._close, null);
        }
        componentWillUnmount() {
          I.unsubscribe(x.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this._close, null);
        }
        render() {
          return o.createElement(
            S.PopupDialog,
            {
              className: L.popupDialog,
              isOpened: this.props.isOpened,
              onClickOutside: this.props.onClose,
            },
            o.createElement(
              T,
              { onClose: this.props.onClose },
              u.t(null, void 0, r(12014)),
            ),
            o.createElement(
              z,
              null,
              o.createElement(E.KeyboardDocumentListener, {
                keyCode: 27,
                handler: this.props.onClose,
              }),
              o.createElement(
                'div',
                { className: L.content, 'data-symbol-info-dialog-content': !0 },
                this._renderFields(),
              ),
            ),
          );
        }
        _renderFields() {
          return this.props.fields
            ? this.props.fields.map((e, t) =>
                o.createElement(
                  'div',
                  { key: e.propName + t.toString(), className: L.row },
                  o.createElement(
                    'div',
                    { className: b(L.column, L.columnTitle) },
                    o.createElement('span', { className: L.title }, e.title),
                  ),
                  o.createElement(
                    'div',
                    { className: b(L.column, L.columnValue) },
                    o.createElement(
                      'span',
                      { className: L.value },
                      (function (e) {
                        const t = e.value || e.defValue || '-';
                        if (e.setHtml)
                          return o.createElement('span', {
                            dangerouslySetInnerHTML: { __html: t },
                          });
                        return t;
                      })(e),
                    ),
                  ),
                ),
              )
            : [];
        }
      }
      var W = r(20364),
        U = r(21169),
        C = r(80142);
      function w(e) {
        for (; e > h().minutesPerDay; ) e -= h().minutesPerDay;
        const t = e % 60,
          r = (e - t) / 60,
          n =
            (0, _.numberToStringWithLeadingZero)(r, 2) +
            ':' +
            (0, _.numberToStringWithLeadingZero)(t, 2);
        return (0, C.isRtl)() ? (0, C.startWithLTR)(n) : n;
      }
      function A(e, t, r) {
        const { weekDays: n, closed: o } = r;
        return t.map((t) => {
          const r = e.filter((e) => e.dayOfWeek() === t),
            i = `${n[t]} `;
          if (0 === r.length) return `${i}${o}`;
          const a = r.map((e) => {
            const t = e.sessionStartDayOfWeek(),
              r = e.sessionStartDaysOffset(),
              o = (function (e, t) {
                let r = e + t;
                for (; r > h().SATURDAY; ) r -= h().SATURDAY;
                return r;
              })(t, r === e.sessionEndDaysOffset() ? 0 : r),
              i = t !== e.dayOfWeek() || o !== e.dayOfWeek(),
              a = i ? n[t] : '',
              s = i ? n[o] : '';
            return `${w(e.start())}${a}-${w(e.start() + e.length())}${s}`;
          });
          return `${i}${a.join(', ')}`;
        });
      }
      let Y = null;
      const j = [
          d.MONDAY,
          d.TUESDAY,
          d.WEDNESDAY,
          d.THURSDAY,
          d.FRIDAY,
          d.SATURDAY,
          d.SUNDAY,
        ],
        P = j.reduce((e, t) => ((e[t] = a.weekDaysMiniNames[t]), e), {});
      function H(e) {
        return (
          !(0, f.isEconomicSymbol)(e) &&
          !(function (e, t) {
            var r;
            return (
              t.indexOf(
                null !== (r = e.listed_exchange) && void 0 !== r ? r : '',
              ) >= 0
            );
          })(e, ['QUANDL', 'BSE_EOD', 'NSE_EOD', 'LSE_EOD'])
        );
      }
      function O(e) {
        var t;
        return (
          (null !== (t = e.minmove2) && void 0 !== t ? t : 0) > 0 &&
          !e.fractional &&
          0 !== e.pricescale
        );
      }
      function F(e) {
        return O(e) && void 0 !== e.pricescale
          ? new _.PriceFormatter(
              e.pricescale / (0, i.ensureDefined)(e.minmove2),
            ).format((0, i.ensureDefined)(e.minmove2) / e.pricescale)
          : null;
      }
      function R(e) {
        return void 0 === e.minmov || void 0 === e.pricescale
          ? null
          : (0, f.createSeriesFormatter)(e, 'default').format(
              e.minmov / e.pricescale,
            );
      }
      function J(e) {
        var t;
        return (0, c.marketType)(
          null !== (t = e.type) && void 0 !== t ? t : '',
          e.typespecs,
        );
      }
      function B(e) {
        return 'futures' === e.type && 'front_contract' in e;
      }
      function V(e) {
        return !(0, f.isEconomicSymbol)(e);
      }
      function $(e) {
        return 'expiration' in e;
      }
      function K(e) {
        var t, r, n;
        return null !==
          (n =
            null !==
              (r =
                null === (t = e.source2) || void 0 === t
                  ? void 0
                  : t.description) && void 0 !== r
              ? r
              : e.source) && void 0 !== n
          ? n
          : null;
      }
      function G(e) {
        return (0, f.isEconomicSymbol)(e) && Boolean(K(e));
      }
      function Z(e, t) {
        Q({ isOpened: !1, onClose: () => {}, fields: [] }),
          null === e && (e = s.linking.symbol.value()),
          (e += '');
        const o = t && t.symbolInfo,
          a = [
            {
              title: u.t(null, void 0, r(35383)),
              propName: (0, p.enabled)('charting_library_base')
                ? 'name'
                : 'pro_name',
            },
            { title: u.t(null, void 0, r(28174)), propName: 'description' },
            { title: u.t(null, void 0, r(90656)), propName: 'type', getter: J },
            {
              title: u.t(null, void 0, r(49263)),
              propName: 'expiration',
              visibility: $,
              formatter: m.bind(null, t.dateFormatter),
            },
            {
              title: u.t(null, void 0, r(22992)),
              propName: 'front_contract',
              visibility: B,
            },
            { title: u.t(null, void 0, r(64659)), propName: 'pointvalue' },
            {
              title: u.t(null, void 0, r(77295)),
              propName: 'exchange',
              visibility: V,
            },
            {
              title: u.t(null, void 0, r(91617)),
              propName: 'listed_exchange',
              visibility: V,
            },
            {
              title: u.t(null, void 0, r(46147)),
              propName: 'source',
              getter: K,
              visibility: G,
            },
            {
              title: u.t(null, void 0, r(50985)),
              propName: 'currency_code',
              getter: (e) => (0, f.symbolOriginalCurrency)(e, !0),
              visibility: (e) => Boolean((0, f.symbolOriginalCurrency)(e, !0)),
              formatter: (e) => (null != e ? e : ''),
              defValue: '',
            },
            {
              title: u.t(null, void 0, r(59607)),
              propName: 'value_unit_id',
              getter: (e) => t.unitDescription((0, f.measureUnitId)(e)),
              visibility: (e) =>
                Boolean((0, f.measureUnitId)(e)) &&
                (0, f.isMeasureUnitSymbol)(e) &&
                t.showUnit,
              formatter: (e) => (null != e ? e : ''),
              defValue: '',
            },
            {
              title: u.t(null, void 0, r(77534)),
              propName: 'unit_id',
              getter: (e) =>
                t.unitDescription((0, f.symbolOriginalUnit)(e, t.showUnit)),
              visibility: (e) =>
                Boolean((0, f.symbolOriginalUnit)(e, t.showUnit)) &&
                !(0, f.isMeasureUnitSymbol)(e),
              formatter: (e) => (null != e ? e : ''),
              defValue: '',
            },
            {
              title: u.t(null, void 0, r(45221)),
              propName: 'pip_size',
              getter: F,
              visibility: O,
            },
            {
              title: u.t(null, void 0, r(55209)),
              propName: 'tick_size',
              getter: R,
            },
            { title: u.t(null, void 0, r(31672)), propName: 'sector' },
            { title: u.t(null, void 0, r(91746)), propName: 'industry' },
            {
              title: u.t(null, void 0, r(87492)),
              propName: 'timezone',
              formatter: q,
              visibility: H,
            },
            {
              title: u.t(null, void 0, r(25866)),
              propName: 'session_display',
              altPropName: 'session',
              formatter: X,
              visibility: H,
              setHtml: !0,
            },
          ],
          c = (0, v.getAdditionalSymbolInfoFields)();
        if (c && c.length > 0)
          for (const e of c)
            a.push({ title: e.title, propName: e.propertyName });
        const d = o ? re(o, a) : 0,
          h = {
            isOpened: !0,
            onClose: () => {
              Q({ isOpened: !1, onClose: () => {}, fields: [] }),
                n.unmountComponentAtNode((0, i.ensureNotNull)(Y)),
                (Y = null);
            },
            fields: a,
          };
        if (d < a.length) {
          const t = 'symbolinfodialog.' + (0, l.guid)(),
            r = (0, y.getQuoteSessionInstance)('full');
          r.subscribe(t, e, (n, o) => {
            re(o.values, a), r.unsubscribe(t, (0, i.ensureNotNull)(e)), Q(h);
          });
        }
        Q(h);
      }
      function Q(e) {
        Y ||
          ((Y = document.createElement('div')), document.body.appendChild(Y)),
          n.render(o.createElement(N, e), Y);
      }
      function q(e) {
        const t = W.availableTimezones;
        for (let r = 0; r < t.length; r++) if (t[r].id === e) return t[r].title;
        return e;
      }
      function X(e) {
        const t = new U.SessionSpec('Etc/UTC', e),
          n = { weekDays: P, closed: u.t(null, void 0, r(25219)) };
        return A(t.entries(), j, n).join('<br>');
      }
      function ee(e) {
        var t;
        return null !== (t = null == e ? void 0 : e.toString()) && void 0 !== t
          ? t
          : '-';
      }
      function te(e, t) {
        (void 0 === e.value || t) && (e.value = t);
      }
      function re(e, t) {
        let r = 0;
        for (let n = 0; n < t.length; n++) {
          const o = t[n].getter;
          if (o) {
            const i = o(e);
            null !== i && te(t[n], i), r++;
            continue;
          }
          const i = t[n].propName,
            a = t[n].altPropName,
            s = i in e ? i : void 0 !== a && a in e ? a : void 0;
          if (void 0 !== s) {
            const o = e[s];
            te(t[n], (t[n].formatter || ee)(o)), r++;
          }
        }
        return (
          (r -= (function (e, t) {
            let r = 0;
            for (let n = 0; n < t.length; n++) {
              const o = t[n];
              void 0 === o.visibility ||
                o.visibility(e) ||
                (t.splice(n, 1), n--, r++);
            }
            return r;
          })(e, t)),
          r
        );
      }
    },
    21945: (e, t, r) => {
      'use strict';
      r.d(t, { marketType: () => s });
      var n = r(44352);
      const o = new Map([
        ['cfd', n.t(null, void 0, r(87592))],
        ['dr', n.t(null, void 0, r(1328))],
        ['index', n.t(null, void 0, r(12754))],
        ['forex', n.t(null, void 0, r(39512))],
        ['right', n.t(null, { context: 'symbol_type' }, r(9898))],
        ['bond', n.t(null, void 0, r(79852))],
        ['bitcoin', n.t(null, void 0, r(8448))],
        ['crypto', n.t(null, void 0, r(8448))],
        ['economic', n.t(null, void 0, r(88720))],
        ['indices', n.t(null, void 0, r(38071))],
        ['futures', n.t(null, void 0, r(81859))],
        ['stock', n.t(null, void 0, r(36931))],
      ]);
      r(93731);
      const i = new Map(),
        a = new Set([
          'cfd',
          'spreadbet',
          'defi',
          'sharia',
          'yield',
          'government',
          'corporate',
          'mutual',
          'money',
          'etf',
          'unit',
          'trust',
          'reit',
          'etn',
          'convertible',
          'closedend',
          'crypto',
          'oracle',
        ]);
      function s(e, t = [], r = !0) {
        const n = t.filter((e) => a.has(e)),
          s = `${e}_${n.sort().join('_')}`,
          u = i.get(s);
        if (void 0 !== u) return u;
        const l = r
            ? (function (e) {
                return o.get(e) || e;
              })(e)
            : e,
          c = Boolean(t.length) ? l + ` ${n.join(' ')}` : l;
        return i.set(s, c), c;
      }
    },
    8636: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="currentColor" d="M5.18 6.6L1.3 2.7.6 2 2 .59l.7.7 3.9 3.9 3.89-3.9.7-.7L12.61 2l-.71.7L8 6.6l3.89 3.89.7.7-1.4 1.42-.71-.71L6.58 8 2.72 11.9l-.71.7-1.41-1.4.7-.71 3.9-3.9z"/></svg>';
    },
    19801: (e) => {
      e.exports = {
        ar: ['الجمعة'],
        ca_ES: ['Dv'],
        cs: 'Fr',
        de: 'Fr',
        el: 'Fr',
        en: 'Fr',
        es: ['V'],
        fa: 'Fr',
        fr: ['Ven'],
        he_IL: ['שישי'],
        hu_HU: ['P'],
        id_ID: ['Jum'],
        it: ['Ven'],
        ja: ['金'],
        ko: ['금'],
        ms_MY: 'Fr',
        nl_NL: 'Fr',
        pl: ['Pt'],
        pt: ['Sexta'],
        ro: 'Fr',
        ru: ['Пт'],
        sv: 'Fr',
        th: 'Fr',
        tr: ['Cum'],
        vi: 'Fr',
        zh: ['周五'],
        zh_TW: ['周五'],
      };
    },
    11268: (e) => {
      e.exports = {
        ar: ['الاثنين'],
        ca_ES: ['Dl'],
        cs: 'Mo',
        de: 'Mo',
        el: 'Mo',
        en: 'Mo',
        es: ['L'],
        fa: 'Mo',
        fr: 'Mo',
        he_IL: ['שני'],
        hu_HU: ['H'],
        id_ID: ['Sen'],
        it: ['Lun'],
        ja: ['月'],
        ko: ['월'],
        ms_MY: 'Mo',
        nl_NL: 'Mo',
        pl: ['Pn'],
        pt: ['Seg'],
        ro: 'Mo',
        ru: ['Пн'],
        sv: 'Mo',
        th: ['โม'],
        tr: ['Pzt'],
        vi: 'Mo',
        zh: ['周一'],
        zh_TW: ['周一'],
      };
    },
    63331: (e) => {
      e.exports = {
        ar: ['السبت'],
        ca_ES: ['Ds'],
        cs: 'Sa',
        de: 'Sa',
        el: 'Sa',
        en: 'Sa',
        es: ['Sáb'],
        fa: 'Sa',
        fr: 'Sa',
        he_IL: ['שבת'],
        hu_HU: ['Szo'],
        id_ID: ['Sab'],
        it: ['Sab'],
        ja: ['土'],
        ko: ['토'],
        ms_MY: 'Sa',
        nl_NL: 'Sa',
        pl: ['Sob.'],
        pt: ['Sáb.'],
        ro: 'Sa',
        ru: ['Сб'],
        sv: 'Sa',
        th: 'Sa',
        tr: ['Cmt'],
        vi: 'Sa',
        zh: ['周六'],
        zh_TW: ['周六'],
      };
    },
    85954: (e) => {
      e.exports = {
        ar: ['الأحد'],
        ca_ES: ['Dg'],
        cs: 'Su',
        de: 'Su',
        el: 'Su',
        en: 'Su',
        es: ['Do'],
        fa: 'Su',
        fr: 'Su',
        he_IL: ['ראשון'],
        hu_HU: ['V'],
        id_ID: ['Min'],
        it: ['Dom'],
        ja: ['日'],
        ko: ['일'],
        ms_MY: 'Su',
        nl_NL: 'Su',
        pl: ['Nd.'],
        pt: ['Dom'],
        ro: 'Su',
        ru: ['Вс'],
        sv: 'Su',
        th: 'Su',
        tr: ['Paz'],
        vi: 'Su',
        zh: ['周日'],
        zh_TW: ['周日'],
      };
    },
    26230: (e) => {
      e.exports = {
        ar: ['الأربعاء'],
        ca_ES: ['Dc'],
        cs: 'We',
        de: 'We',
        el: 'We',
        en: 'We',
        es: ['X'],
        fa: 'We',
        fr: 'We',
        he_IL: 'We',
        hu_HU: ['Sze'],
        id_ID: ['Rab'],
        it: ['Mer'],
        ja: ['水'],
        ko: ['수'],
        ms_MY: 'We',
        nl_NL: 'We',
        pl: ['Śr'],
        pt: ['Quarta'],
        ro: 'We',
        ru: ['Ср'],
        sv: 'We',
        th: ['วันพุธ'],
        tr: ['Çar'],
        vi: ['T4'],
        zh: ['周三'],
        zh_TW: ['周三'],
      };
    },
    24793: (e) => {
      e.exports = {
        ar: ['الخميس'],
        ca_ES: ['Dj'],
        cs: 'Th',
        de: 'Th',
        el: 'Th',
        en: 'Th',
        es: ['Ju'],
        fa: 'Th',
        fr: 'Th',
        he_IL: ['חמישי'],
        hu_HU: ['Cs'],
        id_ID: ['Kam'],
        it: ['Gio'],
        ja: ['木'],
        ko: ['목'],
        ms_MY: 'Th',
        nl_NL: 'Th',
        pl: ['Czw.'],
        pt: ['Quinta'],
        ro: 'Th',
        ru: ['Чт'],
        sv: 'Th',
        th: 'Th',
        tr: ['Per'],
        vi: 'Th',
        zh: ['周四'],
        zh_TW: ['周四'],
      };
    },
    31533: (e) => {
      e.exports = {
        ar: ['الثلاثاء'],
        ca_ES: ['Ma'],
        cs: 'Tu',
        de: 'Tu',
        el: 'Tu',
        en: 'Tu',
        es: ['Ma'],
        fa: 'Tu',
        fr: 'Tu',
        he_IL: ['שלישי'],
        hu_HU: ['K'],
        id_ID: ['Sel'],
        it: ['Mar'],
        ja: ['火'],
        ko: ['화'],
        ms_MY: 'Tu',
        nl_NL: 'Tu',
        pl: ['Wt'],
        pt: ['Terça'],
        ro: 'Tu',
        ru: ['Вт'],
        sv: 'Tu',
        th: 'Tu',
        tr: ['Sal'],
        vi: ['Thứ 3'],
        zh: ['周二'],
        zh_TW: ['周二'],
      };
    },
    9898: (e) => {
      e.exports = {
        ar: ['حق'],
        ca_ES: ['Right (dret de subscripció)'],
        cs: 'Right',
        de: ['Rechter'],
        el: 'Right',
        en: 'Right',
        es: ['Right (derecho de suscripción)'],
        fa: 'Right',
        fr: ['De droite'],
        he_IL: ['זכות Right'],
        hu_HU: 'Right',
        id_ID: ['Kanan'],
        it: ['Diritto'],
        ja: ['ストックオプション'],
        ko: ['라이트'],
        ms_MY: ['Benar'],
        nl_NL: 'Right',
        pl: ['Prawo do udostępniania'],
        pt: ['Direita'],
        ro: 'Right',
        ru: ['Право на акцию'],
        sv: ['Höger'],
        th: ['สิทธิ'],
        tr: ['Sağ'],
        vi: ['Phải'],
        zh: ['认股权'],
        zh_TW: ['認股權'],
      };
    },
    25219: (e) => {
      e.exports = {
        ar: ['مُغلقة'],
        ca_ES: ['Tancat'],
        cs: 'Closed',
        de: ['Geschlossen'],
        el: 'Closed',
        en: 'Closed',
        es: ['Cerrado'],
        fa: 'Closed',
        fr: ['Fermé'],
        he_IL: ['סגור'],
        hu_HU: ['Záró'],
        id_ID: ['Telah Ditutup'],
        it: ['Chiuso'],
        ja: ['終了'],
        ko: ['장종료'],
        ms_MY: ['Ditutup'],
        nl_NL: 'Closed',
        pl: ['Zamknięte'],
        pt: ['Fechado'],
        ro: 'Closed',
        ru: ['Закрыт'],
        sv: ['Stängd'],
        th: ['ปิดแล้ว'],
        tr: ['Kapalı'],
        vi: ['Đóng'],
        zh: ['已关闭'],
        zh_TW: ['已關閉'],
      };
    },
    50985: (e) => {
      e.exports = {
        ar: ['عملة'],
        ca_ES: ['Divisa'],
        cs: ['Měna'],
        de: ['Währung'],
        el: 'Currency',
        en: 'Currency',
        es: ['Divisa'],
        fa: 'Currency',
        fr: ['Devise'],
        he_IL: ['מַטְבֵּעַ'],
        hu_HU: ['Valuta'],
        id_ID: ['Mata Uang'],
        it: ['Valuta'],
        ja: ['通貨'],
        ko: ['통화'],
        ms_MY: ['Mata wang'],
        nl_NL: 'Currency',
        pl: ['Waluta'],
        pt: ['Moeda'],
        ro: 'Currency',
        ru: ['Валюта'],
        sv: ['Valuta'],
        th: ['สกุลเงิน'],
        tr: ['Döviz'],
        vi: ['Tiền tệ'],
        zh: ['货币'],
        zh_TW: ['貨幣'],
      };
    },
    22992: (e) => {
      e.exports = {
        ar: ['العقد الحالي'],
        ca_ES: ['Contracte vigent'],
        cs: ['Current Contract'],
        de: ['Aktueller Kontrakt'],
        el: ['Current Contract'],
        en: 'Current contract',
        es: ['Contrato vigente'],
        fa: ['Current Contract'],
        fr: ['Contrat en cours'],
        he_IL: ['החוזה הנוכחי'],
        hu_HU: ['Current Contract'],
        id_ID: ['Kontrak Saat Ini'],
        it: ['Contratto corrente'],
        ja: ['現在のご契約'],
        ko: ['커런트 컨트랙트'],
        ms_MY: ['Kontrak Semasa'],
        nl_NL: ['Current Contract'],
        pl: ['Aktualny kontrakt'],
        pt: ['Contrato atual'],
        ro: ['Current Contract'],
        ru: ['Текущий контракт'],
        sv: ['Nuvarande kontrakt'],
        th: ['สัญญาปัจจุบัน'],
        tr: ['Mevcut Sözleşme'],
        vi: ['Hợp đồng hiện tại'],
        zh: ['当前合约'],
        zh_TW: ['Current Contract'],
      };
    },
    97637: (e) => {
      e.exports = {
        ar: ['أبريل'],
        ca_ES: ['Abril'],
        cs: 'April',
        de: 'April',
        el: 'April',
        en: 'April',
        es: ['Abril'],
        fa: ['آوریل'],
        fr: ['Avril'],
        he_IL: ['‏אפריל'],
        hu_HU: ['Április'],
        id_ID: 'April',
        it: ['Aprile'],
        ja: ['4月'],
        ko: ['4월'],
        ms_MY: 'April',
        nl_NL: 'April',
        pl: ['Kwiecień'],
        pt: ['Abril'],
        ro: 'April',
        ru: ['Апрель'],
        sv: 'April',
        th: ['เมษายน'],
        tr: ['Nisan'],
        vi: ['Tháng Tư'],
        zh: ['4月'],
        zh_TW: ['四月'],
      };
    },
    86797: (e) => {
      e.exports = {
        ar: ['أغسطس'],
        ca_ES: ['Agost'],
        cs: 'August',
        de: 'August',
        el: 'August',
        en: 'August',
        es: ['Agosto'],
        fa: ['آگوست'],
        fr: ['Août'],
        he_IL: ['‏אוגוסט'],
        hu_HU: ['Augusztus'],
        id_ID: ['Agustus'],
        it: ['Agosto'],
        ja: ['8月'],
        ko: ['8월'],
        ms_MY: ['Ogos'],
        nl_NL: 'August',
        pl: ['Sierpień'],
        pt: ['Agosto'],
        ro: 'August',
        ru: ['Август'],
        sv: ['Augusti'],
        th: ['สิงหาคม'],
        tr: ['Ağustos'],
        vi: ['Tháng Tám'],
        zh: ['8月'],
        zh_TW: ['八月'],
      };
    },
    79852: (e) => {
      e.exports = {
        ar: ['سند'],
        ca_ES: ['Bo'],
        cs: 'Bond',
        de: ['Anleihe'],
        el: 'Bond',
        en: 'Bond',
        es: ['Bono'],
        fa: 'Bond',
        fr: ['Obligation'],
        he_IL: ['אגרת חוב'],
        hu_HU: 'Bond',
        id_ID: ['Surat hutang'],
        it: ['Obbligazione'],
        ja: ['債券'],
        ko: ['채권'],
        ms_MY: ['Bon'],
        nl_NL: 'Bond',
        pl: ['Obligacja'],
        pt: ['Título'],
        ro: 'Bond',
        ru: ['Облигации'],
        sv: ['Obligation'],
        th: ['พันธบัตร'],
        tr: ['Tahvil'],
        vi: ['Trái phiếu'],
        zh: ['债券'],
        zh_TW: ['債券'],
      };
    },
    55669: (e) => {
      e.exports = {
        ar: ['ديسمبر'],
        ca_ES: ['Desembre'],
        cs: 'December',
        de: ['Dezember'],
        el: 'December',
        en: 'December',
        es: ['Diciembre'],
        fa: ['دسامبر'],
        fr: ['Décembre'],
        he_IL: ['דצמבר‏'],
        hu_HU: 'December',
        id_ID: ['Desember'],
        it: ['Dicembre'],
        ja: ['12月'],
        ko: ['12월'],
        ms_MY: ['Disember'],
        nl_NL: 'December',
        pl: ['Grudzień'],
        pt: ['Dezembro'],
        ro: 'December',
        ru: ['Декабрь'],
        sv: 'December',
        th: ['ธันวาคม'],
        tr: ['Aralık'],
        vi: ['Tháng Mười hai'],
        zh: ['12月'],
        zh_TW: ['十二月'],
      };
    },
    49263: (e) => {
      e.exports = {
        ar: ['تاريخ انتهاء الصلاحية'],
        ca_ES: ['Data de caducitat'],
        cs: 'Expiration date',
        de: ['Ablaufdatum'],
        el: 'Expiration date',
        en: 'Expiration date',
        es: ['Fecha de vencimiento'],
        fa: 'Expiration date',
        fr: ["Date d'expiration"],
        he_IL: ['תאריך תפוגה'],
        hu_HU: 'Expiration date',
        id_ID: ['Tanggal kadaluarsa'],
        it: ['Data di scadenza'],
        ja: ['有効期限'],
        ko: ['만기 날짜'],
        ms_MY: ['Tarikh tamat tempoh'],
        nl_NL: 'Expiration date',
        pl: ['Data ważności'],
        pt: ['Data de expiração'],
        ro: 'Expiration date',
        ru: ['Истечение срока'],
        sv: ['Utgångsdatum'],
        th: ['วันหมดอายุ'],
        tr: ['Son kullanma tarihi'],
        vi: ['Ngày hết hạn'],
        zh: ['到期日'],
        zh_TW: ['到期日'],
      };
    },
    16467: (e) => {
      e.exports = {
        ar: ['فبراير'],
        ca_ES: ['Febrer'],
        cs: 'February',
        de: ['Februar'],
        el: 'February',
        en: 'February',
        es: ['Febrero'],
        fa: 'February',
        fr: ['Février'],
        he_IL: ['פברואר‏'],
        hu_HU: ['Február'],
        id_ID: ['Februari'],
        it: ['Febbraio'],
        ja: ['2月'],
        ko: ['2월'],
        ms_MY: ['Februari'],
        nl_NL: 'February',
        pl: ['Luty'],
        pt: ['Fevereiro'],
        ro: 'February',
        ru: ['Февраль'],
        sv: ['Februari'],
        th: ['กุมภาพันธ์'],
        tr: ['Şubat'],
        vi: ['Tháng Hai'],
        zh: ['2月'],
        zh_TW: ['二月'],
      };
    },
    564: (e) => {
      e.exports = {
        ar: ['الجمعة'],
        ca_ES: ['Dv'],
        cs: 'Fri',
        de: ['Fr'],
        el: 'Fri',
        en: 'Fri',
        es: ['Vi'],
        fa: 'Fri',
        fr: ['Ven'],
        he_IL: ['שישי'],
        hu_HU: ['Pén'],
        id_ID: ['Jum'],
        it: ['Ven'],
        ja: ['金'],
        ko: ['금'],
        ms_MY: ['Jum'],
        nl_NL: 'Fri',
        pl: ['Pt'],
        pt: ['Sexta'],
        ro: 'Fri',
        ru: ['Пт'],
        sv: ['Fre'],
        th: ['ศุกร์'],
        tr: ['Cum'],
        vi: ['Thứ 6'],
        zh: ['周五'],
        zh_TW: ['周五'],
      };
    },
    72970: (e) => {
      e.exports = {
        ar: ['الجمعة'],
        ca_ES: ['Divendres'],
        cs: 'Friday',
        de: ['Freitag'],
        el: 'Friday',
        en: 'Friday',
        es: ['Viernes'],
        fa: 'Friday',
        fr: ['Vendredi'],
        he_IL: ['יום שישי'],
        hu_HU: ['Péntek'],
        id_ID: ['Jumat'],
        it: ['Venerdì'],
        ja: ['金曜日'],
        ko: ['금요일'],
        ms_MY: ['Jumaat'],
        nl_NL: 'Friday',
        pl: ['Piątek'],
        pt: ['Sexta'],
        ro: 'Friday',
        ru: ['Пятница'],
        sv: ['Fredag'],
        th: ['วันศุกร์'],
        tr: ['Cuma'],
        vi: ['Thứ Sáu'],
        zh: ['周五'],
        zh_TW: ['周五'],
      };
    },
    91746: (e) => {
      e.exports = {
        ar: ['صناعة'],
        ca_ES: ['Indústria'],
        cs: 'Industry',
        de: ['Branche'],
        el: 'Industry',
        en: 'Industry',
        es: ['Industria'],
        fa: ['صنعت'],
        fr: ['Industrie'],
        he_IL: ['תעשיה'],
        hu_HU: ['Iparág'],
        id_ID: ['Industri'],
        it: ['Industria'],
        ja: ['業種'],
        ko: ['산업'],
        ms_MY: ['Industri'],
        nl_NL: 'Industry',
        pl: ['Branża'],
        pt: ['Indústria'],
        ro: 'Industry',
        ru: ['Отрасль'],
        sv: ['Bransch'],
        th: ['อุตสาหกรรม'],
        tr: ['Endüstri'],
        vi: ['Công nghiệp'],
        zh: ['行业'],
        zh_TW: ['產業'],
      };
    },
    26910: (e) => {
      e.exports = {
        ar: ['يناير'],
        ca_ES: ['Gener'],
        cs: 'January',
        de: ['Januar'],
        el: 'January',
        en: 'January',
        es: ['Enero'],
        fa: 'January',
        fr: ['Janvier'],
        he_IL: ['ינואר‏'],
        hu_HU: ['Január'],
        id_ID: ['Januari'],
        it: ['Gennaio'],
        ja: ['1月'],
        ko: ['1월'],
        ms_MY: ['Januari'],
        nl_NL: 'January',
        pl: ['Styczeń'],
        pt: ['Janeiro'],
        ro: 'January',
        ru: ['Январь'],
        sv: ['Januari'],
        th: ['มกราคม'],
        tr: ['Ocak'],
        vi: ['Tháng Một'],
        zh: ['1月'],
        zh_TW: ['一月'],
      };
    },
    23230: (e) => {
      e.exports = {
        ar: ['يوليو'],
        ca_ES: ['Juliol'],
        cs: 'July',
        de: ['Juli'],
        el: 'July',
        en: 'July',
        es: ['Julio'],
        fa: 'July',
        fr: ['Juillet'],
        he_IL: ['יולי‏'],
        hu_HU: ['Július'],
        id_ID: ['Juli'],
        it: ['Luglio'],
        ja: ['7月'],
        ko: ['7월'],
        ms_MY: ['Julai'],
        nl_NL: 'July',
        pl: ['Lipiec'],
        pt: ['Julho'],
        ro: 'July',
        ru: ['Июль'],
        sv: ['Juli'],
        th: ['กรกฎาคม'],
        tr: ['Temmuz'],
        vi: ['Tháng Bảy'],
        zh: ['7月'],
        zh_TW: ['七月'],
      };
    },
    49385: (e) => {
      e.exports = {
        ar: ['يونيو'],
        ca_ES: ['Juny'],
        cs: 'June',
        de: ['Juni'],
        el: 'June',
        en: 'June',
        es: ['Junio'],
        fa: 'June',
        fr: ['Juin'],
        he_IL: ['יוני‏'],
        hu_HU: ['Június'],
        id_ID: ['Juni'],
        it: ['Giugno'],
        ja: ['6月'],
        ko: ['6월'],
        ms_MY: ['Jun'],
        nl_NL: 'June',
        pl: ['Czerwiec'],
        pt: ['Junho'],
        ro: 'June',
        ru: ['Июнь'],
        sv: ['Juni'],
        th: ['มิถุนายน'],
        tr: ['Haziran'],
        vi: ['Tháng Sáu'],
        zh: ['6月'],
        zh_TW: ['六月'],
      };
    },
    90784: (e) => {
      e.exports = {
        ar: ['أكتوبر'],
        ca_ES: ['Octubre'],
        cs: 'October',
        de: 'October',
        el: 'October',
        en: 'October',
        es: ['Octubre'],
        fa: 'October',
        fr: ['Octobre'],
        he_IL: ['אוקטובר‏'],
        hu_HU: ['Október'],
        id_ID: ['Oktober'],
        it: ['Ottobre'],
        ja: ['10月'],
        ko: ['10월'],
        ms_MY: ['Oktober'],
        nl_NL: 'October',
        pl: ['Październik'],
        pt: ['Outubro'],
        ro: 'October',
        ru: ['Октябрь'],
        sv: ['Oktober'],
        th: ['ตุลาคม'],
        tr: ['Ekim'],
        vi: ['Tháng Mười'],
        zh: ['10月'],
        zh_TW: ['十月'],
      };
    },
    91617: (e) => {
      e.exports = {
        ar: ['البورصة المدرجة'],
        ca_ES: ['Mercat cotitzat'],
        cs: ['Listed Exchange'],
        de: ['Gelistete Börse'],
        el: ['Listed Exchange'],
        en: 'Listed exchange',
        es: ['Mercado cotizado'],
        fa: ['Listed Exchange'],
        fr: ['Bourse agréée'],
        he_IL: ['בורסה רשומה'],
        hu_HU: ['Listázott Tőzsde'],
        id_ID: ['Bursa Terdaftar'],
        it: ['Quotato in borsa'],
        ja: ['上場取引所'],
        ko: ['상장 거래소'],
        ms_MY: ['Bursa Tersenarai'],
        nl_NL: ['Listed Exchange'],
        pl: ['Wymieniona Giełda'],
        pt: ['Bolsa listada'],
        ro: ['Listed Exchange'],
        ru: ['Зарегистрирован'],
        sv: ['Listad börs'],
        th: ['รายการตลาดหลักทรัพย์'],
        tr: ['Kayıtlı Borsa'],
        vi: ['Giao dịch đã thống kê'],
        zh: ['上市交易所'],
        zh_TW: ['列表交易所'],
      };
    },
    83085: (e) => {
      e.exports = {
        ar: ['يوم الاثنين'],
        ca_ES: ['Dl'],
        cs: 'Mon',
        de: 'Mon',
        el: 'Mon',
        en: 'Mon',
        es: ['Lu'],
        fa: 'Mon',
        fr: ['Lun'],
        he_IL: ['שני'],
        hu_HU: ['Hét'],
        id_ID: ['Sen'],
        it: ['Lun'],
        ja: ['月'],
        ko: ['월'],
        ms_MY: ['Isnin'],
        nl_NL: 'Mon',
        pl: ['Pon'],
        pt: ['Seg'],
        ro: 'Mon',
        ru: ['Пн'],
        sv: ['Mån'],
        th: ['จันทร์'],
        tr: ['Pzt'],
        vi: ['Thứ 2'],
        zh: ['周一'],
        zh_TW: ['周一'],
      };
    },
    61199: (e) => {
      e.exports = {
        ar: ['الاثنين'],
        ca_ES: ['Dilluns'],
        cs: 'Monday',
        de: ['Montag'],
        el: 'Monday',
        en: 'Monday',
        es: ['Lunes'],
        fa: 'Monday',
        fr: ['Lundi'],
        he_IL: ['יום שני'],
        hu_HU: ['Hétfő'],
        id_ID: ['Senin'],
        it: ['Lunedì'],
        ja: ['月曜日'],
        ko: ['월요일'],
        ms_MY: ['Isnin'],
        nl_NL: 'Monday',
        pl: ['Poniedziałek'],
        pt: ['Segunda'],
        ro: 'Monday',
        ru: ['Понедельник'],
        sv: ['Måndag'],
        th: ['วันจันทร์'],
        tr: ['Pazartesi'],
        vi: ['Thứ Hai'],
        zh: ['周一'],
        zh_TW: ['周一'],
      };
    },
    68327: (e) => {
      e.exports = {
        ar: ['مايو'],
        ca_ES: ['Maig'],
        cs: ['Květen'],
        de: ['Mai'],
        el: ['Μαι'],
        en: 'May',
        es: ['Mayo'],
        fa: ['می'],
        fr: ['Mai'],
        he_IL: ['מאי'],
        hu_HU: ['Május'],
        id_ID: ['Mei'],
        it: ['Maggio'],
        ja: ['5月'],
        ko: ['5월'],
        ms_MY: ['Mei'],
        nl_NL: ['Mei'],
        pl: ['Maj'],
        pt: ['Мaio'],
        ro: 'May',
        ru: ['Май'],
        sv: ['Maj'],
        th: ['พ.ค.'],
        tr: 'May',
        vi: ['Tháng Năm'],
        zh: ['5月'],
        zh_TW: ['五月'],
      };
    },
    84675: (e) => {
      e.exports = {
        ar: ['مارس'],
        ca_ES: ['Març'],
        cs: 'March',
        de: ['März'],
        el: 'March',
        en: 'March',
        es: ['Marzo'],
        fa: 'March',
        fr: ['Mars'],
        he_IL: ['מרץ‏'],
        hu_HU: ['Március'],
        id_ID: ['Maret'],
        it: ['Marzo'],
        ja: ['3月'],
        ko: ['3월'],
        ms_MY: ['Mac'],
        nl_NL: 'March',
        pl: ['Marzec'],
        pt: ['Março'],
        ro: 'March',
        ru: ['Март'],
        sv: ['Mars'],
        th: ['มีนาคม'],
        tr: ['Mart'],
        vi: ['Tháng Ba'],
        zh: ['3月'],
        zh_TW: ['三月'],
      };
    },
    59607: (e) => {
      e.exports = {
        ar: ['مقياس'],
        ca_ES: ['Mida'],
        cs: 'Measure',
        de: ['Messen'],
        el: 'Measure',
        en: 'Measure',
        es: ['Medida'],
        fa: 'Measure',
        fr: ['Mesure'],
        he_IL: ['מדידה'],
        hu_HU: 'Measure',
        id_ID: ['Mengukur'],
        it: ['Misura'],
        ja: ['ものさし'],
        ko: ['재기'],
        ms_MY: ['Langkah'],
        nl_NL: 'Measure',
        pl: ['Linijka'],
        pt: ['Medir'],
        ro: 'Measure',
        ru: ['Линейка'],
        sv: ['Mäta'],
        th: ['การวัด'],
        tr: ['Ölç'],
        vi: ['Đo lường'],
        zh: ['测量'],
        zh_TW: ['測量'],
      };
    },
    71194: (e) => {
      e.exports = {
        ar: ['نوفمبر'],
        ca_ES: ['Novembre'],
        cs: 'November',
        de: 'November',
        el: 'November',
        en: 'November',
        es: ['Noviembre'],
        fa: 'November',
        fr: ['Novembre'],
        he_IL: ['נובמבר‏'],
        hu_HU: 'November',
        id_ID: 'November',
        it: ['Novembre'],
        ja: ['11月'],
        ko: ['11월'],
        ms_MY: 'November',
        nl_NL: 'November',
        pl: ['Listopad'],
        pt: ['Novembro'],
        ro: 'November',
        ru: ['Ноябрь'],
        sv: 'November',
        th: ['พฤศจิกายน'],
        tr: ['Kasım'],
        vi: ['Tháng Mười một'],
        zh: ['11月'],
        zh_TW: ['十一月'],
      };
    },
    46147: (e) => {
      e.exports = {
        ar: ['مصدر'],
        ca_ES: ['Font'],
        cs: ['Zdroj'],
        de: ['Quelle'],
        el: 'Source',
        en: 'Source',
        es: ['Fuente'],
        fa: 'Source',
        fr: 'Source',
        he_IL: ['מקור'],
        hu_HU: ['Forrás'],
        id_ID: ['Sumber'],
        it: ['Sorgente'],
        ja: ['ソース'],
        ko: ['소스'],
        ms_MY: ['Sumber'],
        nl_NL: 'Source',
        pl: ['Źródło'],
        pt: ['Fonte'],
        ro: 'Source',
        ru: ['Источник'],
        sv: ['Källa'],
        th: ['จุดกำเนิด'],
        tr: ['Kaynak'],
        vi: ['Nguồn'],
        zh: ['来源'],
        zh_TW: ['來源'],
      };
    },
    36835: (e) => {
      e.exports = {
        ar: ['السبت'],
        ca_ES: ['Ds'],
        cs: 'Sat',
        de: ['Sa'],
        el: 'Sat',
        en: 'Sat',
        es: ['Sáb'],
        fa: 'Sat',
        fr: ['Sam'],
        he_IL: ['שבת'],
        hu_HU: ['Szom'],
        id_ID: ['Sab'],
        it: ['Sab'],
        ja: ['土'],
        ko: ['토'],
        ms_MY: ['Sabtu'],
        nl_NL: 'Sat',
        pl: ['Sob'],
        pt: ['Sáb.'],
        ro: 'Sat',
        ru: ['Сб'],
        sv: ['Lör'],
        th: ['เสาร์'],
        tr: ['Cmt'],
        vi: ['Thứ 7'],
        zh: ['周六'],
        zh_TW: ['周六'],
      };
    },
    1144: (e) => {
      e.exports = {
        ar: ['السبت'],
        ca_ES: ['Dissabte'],
        cs: 'Saturday',
        de: ['Samstag'],
        el: 'Saturday',
        en: 'Saturday',
        es: ['Sábado'],
        fa: 'Saturday',
        fr: ['Samedi'],
        he_IL: ['יום שבת'],
        hu_HU: ['Szombat'],
        id_ID: ['Sabtu'],
        it: ['Sabato'],
        ja: ['土曜日'],
        ko: ['토요일'],
        ms_MY: ['Sabtu'],
        nl_NL: 'Saturday',
        pl: ['Sobota'],
        pt: ['Sábado'],
        ro: 'Saturday',
        ru: ['Суббота'],
        sv: ['Lördag'],
        th: ['เสาร์'],
        tr: ['Cumartesi'],
        vi: ['Thứ Bảy'],
        zh: ['周六'],
        zh_TW: ['周六'],
      };
    },
    31672: (e) => {
      e.exports = {
        ar: ['قطاع'],
        ca_ES: 'Sector',
        cs: 'Sector',
        de: ['Sektor'],
        el: 'Sector',
        en: 'Sector',
        es: 'Sector',
        fa: 'Sector',
        fr: ['Secteur'],
        he_IL: ['סקטור'],
        hu_HU: ['Szektor'],
        id_ID: ['Sektor'],
        it: ['Settore'],
        ja: ['セクター'],
        ko: ['섹터'],
        ms_MY: ['Sektor'],
        nl_NL: 'Sector',
        pl: ['Sektor'],
        pt: ['Setor'],
        ro: 'Sector',
        ru: ['Сектор'],
        sv: ['Sektor'],
        th: ['ภาค'],
        tr: ['Sektör'],
        vi: ['Khu vực'],
        zh: ['板块'],
        zh_TW: ['部門'],
      };
    },
    61132: (e) => {
      e.exports = {
        ar: ['سبتمبر'],
        ca_ES: ['Setembre'],
        cs: 'September',
        de: 'September',
        el: 'September',
        en: 'September',
        es: ['Septiembre'],
        fa: 'September',
        fr: ['Septembre'],
        he_IL: ['ספטמבר‏'],
        hu_HU: ['Szeptember'],
        id_ID: 'September',
        it: ['Settembre'],
        ja: ['9月'],
        ko: ['9월'],
        ms_MY: 'September',
        nl_NL: 'September',
        pl: ['Wrzesień'],
        pt: ['Setembro'],
        ro: 'September',
        ru: ['Сентябрь'],
        sv: 'September',
        th: ['กันยายน'],
        tr: ['Eylül'],
        vi: ['Tháng Chín'],
        zh: ['9月'],
        zh_TW: ['九月'],
      };
    },
    86577: (e) => {
      e.exports = {
        ar: ['الأحد'],
        ca_ES: ['Dg'],
        cs: 'Sun',
        de: ['Son'],
        el: 'Sun',
        en: 'Sun',
        es: ['Do'],
        fa: 'Sun',
        fr: ['Dim'],
        he_IL: ['יום ראשון'],
        hu_HU: ['Vas'],
        id_ID: ['Min'],
        it: ['Dom'],
        ja: ['日'],
        ko: ['일'],
        ms_MY: ['Ahad'],
        nl_NL: 'Sun',
        pl: ['Niedz.'],
        pt: ['Dom'],
        ro: 'Sun',
        ru: ['Вс'],
        sv: ['Sön'],
        th: ['อาทิตย์'],
        tr: ['Paz'],
        vi: ['CN'],
        zh: ['周日'],
        zh_TW: ['周日'],
      };
    },
    72149: (e) => {
      e.exports = {
        ar: ['الأحد'],
        ca_ES: ['Diumenge'],
        cs: 'Sunday',
        de: ['Sonntag'],
        el: 'Sunday',
        en: 'Sunday',
        es: ['Domingo'],
        fa: 'Sunday',
        fr: ['Dimanche'],
        he_IL: ['יום ראשון'],
        hu_HU: ['Vasárnap'],
        id_ID: ['Minggu'],
        it: ['Domenica'],
        ja: ['日曜日'],
        ko: ['일요일'],
        ms_MY: ['Ahad'],
        nl_NL: 'Sunday',
        pl: ['Niedziela'],
        pt: ['Domingo'],
        ro: 'Sunday',
        ru: ['Воскресенье'],
        sv: ['Söndag'],
        th: ['อาทิตย์'],
        tr: ['Pazar'],
        vi: ['Chủ nhật'],
        zh: ['周日'],
        zh_TW: ['周日'],
      };
    },
    12014: (e) => {
      e.exports = {
        ar: ['معلومات الرمز'],
        ca_ES: ['Informació del símbol'],
        cs: 'Symbol Info',
        de: 'Symbol Info',
        el: 'Symbol Info',
        en: 'Symbol Info',
        es: ['Información del símbolo'],
        fa: 'Symbol Info',
        fr: ['Info du Symbole'],
        he_IL: ['מידע על הסימול'],
        hu_HU: ['Szimbólum Infó'],
        id_ID: ['Info Simbol'],
        it: ['Informazioni simbolo'],
        ja: ['シンボル情報'],
        ko: ['심볼 정보'],
        ms_MY: ['Maklumat Simbol'],
        nl_NL: 'Symbol Info',
        pl: ['Informacje o Symbolu'],
        pt: ['Informações do símbolo'],
        ro: 'Symbol Info',
        ru: ['Информация по инструменту'],
        sv: ['Symbolinformation'],
        th: ['ข้อมูลสัญลักษณ์'],
        tr: ['Sembol Bilgisi'],
        vi: ['Thông tin Mã giao dịch'],
        zh: ['商品信息'],
        zh_TW: ['商品資訊'],
      };
    },
    35383: (e) => {
      e.exports = {
        ar: ['اسم الرمز'],
        ca_ES: ['Nom del símbol'],
        cs: ['Symbol Name'],
        de: ['Symbolname'],
        el: ['Symbol Name'],
        en: 'Symbol name',
        es: ['Nombre del símbolo'],
        fa: ['Symbol Name'],
        fr: ['Nom du symbole'],
        he_IL: ['שם סימול'],
        hu_HU: ['Szimbólum Neve'],
        id_ID: ['Nama Simbol'],
        it: ['Nome simbolo'],
        ja: ['シンボル名'],
        ko: ['심볼 이름'],
        ms_MY: ['Nama Simbol'],
        nl_NL: ['Symbol Name'],
        pl: ['Nazwa Symbolu'],
        pt: ['Nome do símbolo'],
        ro: ['Symbol Name'],
        ru: ['Имя инструмента'],
        sv: ['Symbolnamn'],
        th: ['ชื่อสัญลักษณ์'],
        tr: ['Sembol Adı'],
        vi: ['Tên Mã giao dịch'],
        zh: ['商品名称'],
        zh_TW: ['商品名稱'],
      };
    },
    28174: (e) => {
      e.exports = {
        ar: ['وصف الرمز'],
        ca_ES: ['Descripció del símbol'],
        cs: ['Symbol Description'],
        de: ['Symbolbeschreibung'],
        el: ['Symbol Description'],
        en: 'Symbol description',
        es: ['Descripción del símbolo'],
        fa: ['Symbol Description'],
        fr: ['Description du symbole'],
        he_IL: ['תיאור הסימול'],
        hu_HU: ['Szimbólum Leírás'],
        id_ID: ['Deskripsi Simbol'],
        it: ['Descrizione simbolo'],
        ja: ['シンボル詳細'],
        ko: ['심볼 설명'],
        ms_MY: ['Huraian Simbol'],
        nl_NL: ['Symbol Description'],
        pl: ['Opis Symbolu'],
        pt: ['Descrição do símbolo'],
        ro: ['Symbol Description'],
        ru: ['Описание инструмента'],
        sv: ['Symbolbeskrivning'],
        th: ['คำอธิบายของสัญลักษณ์'],
        tr: ['Sembol Açıklaması'],
        vi: ['Mô tả Mã giao dịch'],
        zh: ['商品说明'],
        zh_TW: ['商品說明'],
      };
    },
    90656: (e) => {
      e.exports = {
        ar: ['نوع الرمز'],
        ca_ES: ['Tipus de símbol'],
        cs: ['Symbol Type'],
        de: ['Symboltyp'],
        el: ['Symbol Type'],
        en: 'Symbol type',
        es: ['Tipo de símbolo'],
        fa: ['Symbol Type'],
        fr: ['Type de symbole'],
        he_IL: ['סוג סימול'],
        hu_HU: ['Szimbólum Típusa'],
        id_ID: ['Tipe simbol'],
        it: ['Categoria simbolo'],
        ja: ['シンボルタイプ'],
        ko: ['심볼 타입'],
        ms_MY: ['Jenis Simbol'],
        nl_NL: ['Symbol Type'],
        pl: ['Typ Symbolu'],
        pt: ['Tipo do Símbolo'],
        ro: ['Symbol Type'],
        ru: ['Тип инструмента'],
        sv: ['Symbol typ'],
        th: ['ประเภทสัญลักษณ์'],
        tr: ['Sembol tipi'],
        vi: ['Loại Mã giao dịch'],
        zh: ['商品类型'],
        zh_TW: ['商品類型'],
      };
    },
    64659: (e) => {
      e.exports = {
        ar: ['قيمة النقطة'],
        ca_ES: ['Valor del punt'],
        cs: 'Point value',
        de: ['Punktwert'],
        el: 'Point value',
        en: 'Point value',
        es: ['Valor del punto'],
        fa: 'Point value',
        fr: ['Valeur du point'],
        he_IL: ['נקודת ערך Point value'],
        hu_HU: 'Point value',
        id_ID: ['Nilai poin'],
        it: ['Valore punto'],
        ja: ['ポイント値'],
        ko: ['포인트 밸류'],
        ms_MY: ['Nilai mata'],
        nl_NL: 'Point value',
        pl: ['Wartość punktu'],
        pt: ['Valor do ponto'],
        ro: 'Point value',
        ru: ['Значение пункта'],
        sv: ['Punktvärde'],
        th: ['มูลค่าของจุด'],
        tr: ['Nokta Değeri'],
        vi: ['Giá trị điểm'],
        zh: ['点值'],
        zh_TW: ['計點值'],
      };
    },
    45221: (e) => {
      e.exports = {
        ar: ['حجم النقطة'],
        ca_ES: ['Mida del Pip'],
        cs: ['Pip Size'],
        de: ['Pip-Größe'],
        el: ['Pip Size'],
        en: 'Pip size',
        es: ['Tamaño del Pip'],
        fa: ['Pip Size'],
        fr: ['Valeur du pip'],
        he_IL: ['גודל Pip'],
        hu_HU: ['Pip Méret'],
        id_ID: ['Ukuran Pip'],
        it: ['Dimensione Pip'],
        ja: ['Pipサイズ'],
        ko: ['핍사이즈'],
        ms_MY: ['Saiz Pip'],
        nl_NL: ['Pip Size'],
        pl: ['Rozmiar Pip'],
        pt: ['Tamanho do Pip'],
        ro: ['Pip Size'],
        ru: ['Объём пункта'],
        sv: ['Pipstorlek'],
        th: ['ขนาดของปิ้บ'],
        tr: ['Pip Miktarı'],
        vi: ['Cỡ Pip'],
        zh: ['点值大小'],
        zh_TW: ['Pip 大小'],
      };
    },
    75094: (e) => {
      e.exports = {
        ar: ['الأربعاء'],
        ca_ES: ['Dc'],
        cs: 'Wed',
        de: ['Mi'],
        el: 'Wed',
        en: 'Wed',
        es: ['Mi'],
        fa: 'Wed',
        fr: ['Mer'],
        he_IL: ['רביעי'],
        hu_HU: ['Szer'],
        id_ID: ['Rab'],
        it: ['Mer'],
        ja: ['水'],
        ko: ['수'],
        ms_MY: ['Rabu'],
        nl_NL: 'Wed',
        pl: ['Śr.'],
        pt: ['Quarta'],
        ro: 'Wed',
        ru: ['Ср'],
        sv: ['Ons'],
        th: ['พุธ'],
        tr: ['Çar'],
        vi: ['Thứ 4'],
        zh: ['周三'],
        zh_TW: ['周三'],
      };
    },
    7147: (e) => {
      e.exports = {
        ar: ['الأربعاء'],
        ca_ES: ['Dimecres'],
        cs: 'Wednesday',
        de: ['Mittwoch'],
        el: 'Wednesday',
        en: 'Wednesday',
        es: ['Miércoles'],
        fa: 'Wednesday',
        fr: ['Mercredi'],
        he_IL: ['יום רביעי'],
        hu_HU: ['Szerda'],
        id_ID: ['Rabu'],
        it: ['Mercoledì'],
        ja: ['水曜日'],
        ko: ['수요일'],
        ms_MY: ['Rabu'],
        nl_NL: 'Wednesday',
        pl: ['Środa'],
        pt: ['Quarta'],
        ro: 'Wednesday',
        ru: ['Среда'],
        sv: ['Onsdag'],
        th: ['พุธ'],
        tr: ['Çarşamba'],
        vi: ['Thứ tư'],
        zh: ['周三'],
        zh_TW: ['周三'],
      };
    },
    9787: (e) => {
      e.exports = {
        ar: ['الخميس'],
        ca_ES: ['Dj'],
        cs: 'Thu',
        de: ['Do'],
        el: 'Thu',
        en: 'Thu',
        es: ['Jue'],
        fa: 'Thu',
        fr: ['Jeu'],
        he_IL: ['חמישי'],
        hu_HU: ['Cs'],
        id_ID: ['Kamis'],
        it: ['Gio'],
        ja: ['木'],
        ko: ['목'],
        ms_MY: ['Khamis'],
        nl_NL: 'Thu',
        pl: ['Czw.'],
        pt: ['Qui'],
        ro: 'Thu',
        ru: ['Чт'],
        sv: ['Tor'],
        th: ['พฤหัสบดี'],
        tr: ['Per'],
        vi: ['Thứ 5'],
        zh: ['周四'],
        zh_TW: ['周四'],
      };
    },
    7951: (e) => {
      e.exports = {
        ar: ['الخميس'],
        ca_ES: ['Dijous'],
        cs: 'Thursday',
        de: ['Donnerstag'],
        el: 'Thursday',
        en: 'Thursday',
        es: ['Jueves'],
        fa: 'Thursday',
        fr: ['Jeudi'],
        he_IL: ['יום חמישי'],
        hu_HU: ['Csütörtök'],
        id_ID: ['Kamis'],
        it: ['Giovedì'],
        ja: ['木曜日'],
        ko: ['목요일'],
        ms_MY: ['Khamis'],
        nl_NL: 'Thursday',
        pl: ['Czwartek'],
        pt: ['Quinta'],
        ro: 'Thursday',
        ru: ['Четверг'],
        sv: ['Torsdag'],
        th: ['พฤหัสบดี'],
        tr: ['Perşembe'],
        vi: ['Thứ năm'],
        zh: ['周四'],
        zh_TW: ['周四'],
      };
    },
    55209: (e) => {
      e.exports = {
        ar: ['حجم التيك'],
        ca_ES: ['Mida del tick'],
        cs: 'Tick size',
        de: ['Tickgröße'],
        el: 'Tick size',
        en: 'Tick size',
        es: ['Tamaño del tick'],
        fa: 'Tick size',
        fr: ['Taille du tick'],
        he_IL: ['גודל Tick'],
        hu_HU: 'Tick size',
        id_ID: ['Ukuran tick'],
        it: ['Dimensione tick'],
        ja: ['ティックサイズ'],
        ko: ['틱 사이즈'],
        ms_MY: ['Saiz tick'],
        nl_NL: 'Tick size',
        pl: ['Rozmiar ticka'],
        pt: ['Tamanho do tick'],
        ro: 'Tick size',
        ru: ['Размер тика'],
        sv: ['Tickstorlek'],
        th: ['ขนาด Tick'],
        tr: ['fiyat adımı boyutu'],
        vi: ['Cỡ Tick'],
        zh: ['Tick大小'],
        zh_TW: ['Tick大小'],
      };
    },
    87492: (e) => {
      e.exports = {
        ar: ['توقيت'],
        ca_ES: ['Zona horària'],
        cs: ['Časové pásmo'],
        de: ['Zeitzone'],
        el: 'Timezone',
        en: 'Timezone',
        es: ['Zona horaria'],
        fa: 'Timezone',
        fr: ['Fuseau horaire'],
        he_IL: ['אזור זמן'],
        hu_HU: ['Időzóna'],
        id_ID: ['Zona waktu'],
        it: ['Fuso orario'],
        ja: ['タイムゾーン'],
        ko: ['타임존'],
        ms_MY: ['Zon Waktu'],
        nl_NL: 'Timezone',
        pl: ['Strefa czasowa'],
        pt: ['Fuso Horário'],
        ro: 'Timezone',
        ru: ['Часовой пояс'],
        sv: ['Tidszon'],
        th: ['เขตเวลา'],
        tr: ['Saat Dilimi'],
        vi: ['Múi giờ'],
        zh: ['时区'],
        zh_TW: ['時區'],
      };
    },
    94316: (e) => {
      e.exports = {
        ar: ['الثلاثاء'],
        ca_ES: ['Març'],
        cs: 'Tue',
        de: ['Die'],
        el: 'Tue',
        en: 'Tue',
        es: ['Mar'],
        fa: 'Tue',
        fr: ['Mar'],
        he_IL: ['שלישי'],
        hu_HU: ['Ke'],
        id_ID: ['Selasa'],
        it: ['Mar'],
        ja: ['火'],
        ko: ['화'],
        ms_MY: ['Selasa'],
        nl_NL: 'Tue',
        pl: ['Wt.'],
        pt: ['Terça'],
        ro: 'Tue',
        ru: ['Вт'],
        sv: ['Tis'],
        th: ['อังคาร'],
        tr: ['Sal'],
        vi: ['Thứ 3'],
        zh: ['周二'],
        zh_TW: ['周二'],
      };
    },
    44979: (e) => {
      e.exports = {
        ar: ['الثلاثاء'],
        ca_ES: ['Dimarts'],
        cs: 'Tuesday',
        de: ['Dienstag'],
        el: 'Tuesday',
        en: 'Tuesday',
        es: ['Martes'],
        fa: 'Tuesday',
        fr: ['Mardi'],
        he_IL: ['יום שלישי'],
        hu_HU: ['Kedd'],
        id_ID: ['Selasa'],
        it: ['Martedì'],
        ja: ['火曜日'],
        ko: ['화요일'],
        ms_MY: ['Selasa'],
        nl_NL: 'Tuesday',
        pl: ['Wtorek'],
        pt: ['Terça'],
        ro: 'Tuesday',
        ru: ['Вторник'],
        sv: ['Tisdag'],
        th: ['อังคาร'],
        tr: ['Salı'],
        vi: ['Thứ ba'],
        zh: ['周二'],
        zh_TW: ['周一'],
      };
    },
    77534: (e) => {
      e.exports = {
        ar: ['وحدة'],
        ca_ES: ['Unitat'],
        cs: 'Unit',
        de: ['Einheit'],
        el: 'Unit',
        en: 'Unit',
        es: ['Unidad'],
        fa: 'Unit',
        fr: ['Unité'],
        he_IL: ['יחידה'],
        hu_HU: 'Unit',
        id_ID: 'Unit',
        it: ['Unità'],
        ja: ['単位'],
        ko: ['유닛'],
        ms_MY: 'Unit',
        nl_NL: 'Unit',
        pl: ['Jednostka'],
        pt: ['Unidade'],
        ro: 'Unit',
        ru: ['Единица'],
        sv: ['Enhet'],
        th: ['หน่วย'],
        tr: ['Birim'],
        vi: ['Đơn vị'],
        zh: ['单位'],
        zh_TW: ['單位'],
      };
    },
    87592: (e) => {
      e.exports = {
        ar: ['عقود الفروقات'],
        ca_ES: 'cfd',
        cs: 'cfd',
        de: 'cfd',
        el: 'cfd',
        en: 'cfd',
        es: 'cfd',
        fa: 'cfd',
        fr: 'cfd',
        he_IL: ['חוזה הפרשים cfd'],
        hu_HU: 'cfd',
        id_ID: 'cfd',
        it: 'cfd',
        ja: ['CFD'],
        ko: ['씨에프디'],
        ms_MY: 'cfd',
        nl_NL: 'cfd',
        pl: 'cfd',
        pt: 'cfd',
        ro: 'cfd',
        ru: 'cfd',
        sv: 'cfd',
        th: 'cfd',
        tr: 'cfd',
        vi: 'cfd',
        zh: ['差价合约'],
        zh_TW: 'cfd',
      };
    },
    8448: (e) => {
      e.exports = {
        ar: ['العملات الرقمية'],
        ca_ES: ['cripto'],
        cs: 'crypto',
        de: 'crypto',
        el: 'crypto',
        en: 'crypto',
        es: ['cripto'],
        fa: 'crypto',
        fr: 'crypto',
        he_IL: ['קריפטו'],
        hu_HU: ['kripto'],
        id_ID: 'crypto',
        it: ['cripto'],
        ja: ['暗号'],
        ko: ['크립토'],
        ms_MY: ['kripto'],
        nl_NL: 'crypto',
        pl: ['krypto'],
        pt: ['Cripto'],
        ro: 'crypto',
        ru: ['криптовалюты'],
        sv: ['krypto'],
        th: ['คริปโต'],
        tr: ['kripto'],
        vi: ['tiền điện tử'],
        zh: ['加密'],
        zh_TW: 'crypto',
      };
    },
    1328: (e) => {
      e.exports = {
        ar: ['إيصال إيداع'],
        ca_ES: 'dr',
        cs: 'dr',
        de: 'dr',
        el: 'dr',
        en: 'dr',
        es: 'dr',
        fa: 'dr',
        fr: 'dr',
        he_IL: 'dr',
        hu_HU: 'dr',
        id_ID: 'dr',
        it: 'dr',
        ja: ['預託証券'],
        ko: 'dr',
        ms_MY: 'dr',
        nl_NL: 'dr',
        pl: ['Potwierdzenie wpłaty'],
        pt: 'dr',
        ro: 'dr',
        ru: ['Депоз. расписки'],
        sv: 'dr',
        th: 'dr',
        tr: 'dr',
        vi: 'dr',
        zh: 'dr',
        zh_TW: 'dr',
      };
    },
    88720: (e) => {
      e.exports = {
        ar: ['اقتصاد'],
        ca_ES: ['economia'],
        cs: 'economy',
        de: ['Wirtschaft'],
        el: 'economy',
        en: 'economy',
        es: ['economía'],
        fa: 'economy',
        fr: ['économie'],
        he_IL: ['כַּלְכָּלָה'],
        hu_HU: 'economy',
        id_ID: ['ekonomi'],
        it: ['economia'],
        ja: ['経済指標'],
        ko: ['경제'],
        ms_MY: ['ekonomi'],
        nl_NL: 'economy',
        pl: ['gospodarka'],
        pt: ['economia'],
        ro: 'economy',
        ru: ['экономические данные'],
        sv: ['ekonomi'],
        th: ['เศรษฐกิจ'],
        tr: ['ekonomi'],
        vi: ['kinh tế'],
        zh: ['经济'],
        zh_TW: ['經濟'],
      };
    },
    39512: (e) => {
      e.exports = {
        ar: ['فوركس'],
        ca_ES: ['Forex'],
        cs: 'forex',
        de: ['Devisen'],
        el: 'forex',
        en: 'forex',
        es: ['Forex'],
        fa: 'forex',
        fr: ['Forex'],
        he_IL: ['מט"ח'],
        hu_HU: 'forex',
        id_ID: 'forex',
        it: 'forex',
        ja: ['FX'],
        ko: ['외환'],
        ms_MY: 'forex',
        nl_NL: 'forex',
        pl: 'forex',
        pt: 'forex',
        ro: 'forex',
        ru: ['форекс'],
        sv: ['valutor'],
        th: ['ฟอเร็กซ์'],
        tr: ['döviz'],
        vi: 'forex',
        zh: ['外汇'],
        zh_TW: ['外匯'],
      };
    },
    81859: (e) => {
      e.exports = {
        ar: ['العقود الآجلة'],
        ca_ES: ['futurs'],
        cs: 'futures',
        de: ['Futures'],
        el: 'futures',
        en: 'futures',
        es: ['futuros'],
        fa: 'futures',
        fr: 'futures',
        he_IL: ['חוזים עתידיים'],
        hu_HU: 'futures',
        id_ID: ['kontrak berjangka'],
        it: ['future'],
        ja: ['先物'],
        ko: ['퓨쳐스'],
        ms_MY: ['pasaran hadapan'],
        nl_NL: 'futures',
        pl: ['Kontrakty terminowe'],
        pt: ['futuros'],
        ro: 'futures',
        ru: ['фьючерсы'],
        sv: ['terminer'],
        th: ['ฟิวเจอร์ส'],
        tr: ['vadeli'],
        vi: ['hợp đồng tương lai'],
        zh: ['期货'],
        zh_TW: ['期貨'],
      };
    },
    12754: (e) => {
      e.exports = {
        ar: ['مؤشر'],
        ca_ES: ['índex'],
        cs: 'index',
        de: ['Index'],
        el: 'index',
        en: 'index',
        es: ['índice'],
        fa: 'index',
        fr: ['indice'],
        he_IL: ['מדד'],
        hu_HU: 'index',
        id_ID: ['indeks'],
        it: ['indice'],
        ja: ['指数'],
        ko: ['인덱스'],
        ms_MY: ['indeks'],
        nl_NL: 'index',
        pl: ['indeks'],
        pt: ['índice'],
        ro: 'index',
        ru: ['индекс'],
        sv: 'index',
        th: ['ดัชนี'],
        tr: ['endeks'],
        vi: ['chỉ số'],
        zh: ['指数'],
        zh_TW: ['指數'],
      };
    },
    38071: (e) => {
      e.exports = {
        ar: ['المؤشرات'],
        ca_ES: 'indices',
        cs: 'indices',
        de: ['Indizes'],
        el: 'indices',
        en: 'indices',
        es: ['índices'],
        fa: 'indices',
        fr: 'indices',
        he_IL: ['מדדים'],
        hu_HU: 'indices',
        id_ID: ['indeks'],
        it: ['Indici'],
        ja: ['指数'],
        ko: ['지수'],
        ms_MY: ['indeks'],
        nl_NL: ['indexen'],
        pl: ['indeksy'],
        pt: ['índices'],
        ro: 'indices',
        ru: ['индексы'],
        sv: ['index'],
        th: ['ดัชนี'],
        tr: ['endeks'],
        vi: ['các chỉ báo'],
        zh: ['指数'],
        zh_TW: ['指數'],
      };
    },
    36931: (e) => {
      e.exports = {
        ar: ['سهم'],
        ca_ES: ['accions'],
        cs: 'stock',
        de: ['Aktie'],
        el: 'stock',
        en: 'stock',
        es: ['acciones'],
        fa: 'stock',
        fr: 'stock',
        he_IL: ['מניה'],
        hu_HU: 'stock',
        id_ID: ['saham'],
        it: ['azione'],
        ja: ['株式'],
        ko: ['스탁'],
        ms_MY: ['saham'],
        nl_NL: 'stock',
        pl: ['akcja'],
        pt: ['ação'],
        ro: 'stock',
        ru: ['акция'],
        sv: ['aktier'],
        th: ['หุ้น'],
        tr: ['hisse'],
        vi: ['cổ phiếu'],
        zh: ['股票'],
        zh_TW: ['股票'],
      };
    },
  },
]);