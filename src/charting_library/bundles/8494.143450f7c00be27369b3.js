(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [8494],
  {
    59142: function (e, t) {
      var n, o, r;
      (o = [t]),
        (n = function (e) {
          'use strict';
          function t(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
            return Array.from(e);
          }
          Object.defineProperty(e, '__esModule', { value: !0 });
          var n = !1;
          if ('undefined' != typeof window) {
            var o = {
              get passive() {
                n = !0;
              },
            };
            window.addEventListener('testPassive', null, o),
              window.removeEventListener('testPassive', null, o);
          }
          var r =
              'undefined' != typeof window &&
              window.navigator &&
              window.navigator.platform &&
              /iP(ad|hone|od)/.test(window.navigator.platform),
            s = [],
            a = !1,
            l = -1,
            i = void 0,
            c = void 0,
            u = function (e) {
              return s.some(function (t) {
                return !(
                  !t.options.allowTouchMove || !t.options.allowTouchMove(e)
                );
              });
            },
            d = function (e) {
              var t = e || window.event;
              return (
                !!u(t.target) ||
                1 < t.touches.length ||
                (t.preventDefault && t.preventDefault(), !1)
              );
            },
            p = function () {
              setTimeout(function () {
                void 0 !== c &&
                  ((document.body.style.paddingRight = c), (c = void 0)),
                  void 0 !== i &&
                    ((document.body.style.overflow = i), (i = void 0));
              });
            };
          (e.disableBodyScroll = function (e, o) {
            if (r) {
              if (!e)
                return void console.error(
                  'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.',
                );
              if (
                e &&
                !s.some(function (t) {
                  return t.targetElement === e;
                })
              ) {
                var p = { targetElement: e, options: o || {} };
                (s = [].concat(t(s), [p])),
                  (e.ontouchstart = function (e) {
                    1 === e.targetTouches.length &&
                      (l = e.targetTouches[0].clientY);
                  }),
                  (e.ontouchmove = function (t) {
                    var n, o, r, s;
                    1 === t.targetTouches.length &&
                      ((o = e),
                      (s = (n = t).targetTouches[0].clientY - l),
                      !u(n.target) &&
                        ((o && 0 === o.scrollTop && 0 < s) ||
                        ((r = o) &&
                          r.scrollHeight - r.scrollTop <= r.clientHeight &&
                          s < 0)
                          ? d(n)
                          : n.stopPropagation()));
                  }),
                  a ||
                    (document.addEventListener(
                      'touchmove',
                      d,
                      n ? { passive: !1 } : void 0,
                    ),
                    (a = !0));
              }
            } else {
              (m = o),
                setTimeout(function () {
                  if (void 0 === c) {
                    var e = !!m && !0 === m.reserveScrollBarGap,
                      t =
                        window.innerWidth -
                        document.documentElement.clientWidth;
                    e &&
                      0 < t &&
                      ((c = document.body.style.paddingRight),
                      (document.body.style.paddingRight = t + 'px'));
                  }
                  void 0 === i &&
                    ((i = document.body.style.overflow),
                    (document.body.style.overflow = 'hidden'));
                });
              var h = { targetElement: e, options: o || {} };
              s = [].concat(t(s), [h]);
            }
            var m;
          }),
            (e.clearAllBodyScrollLocks = function () {
              r
                ? (s.forEach(function (e) {
                    (e.targetElement.ontouchstart = null),
                      (e.targetElement.ontouchmove = null);
                  }),
                  a &&
                    (document.removeEventListener(
                      'touchmove',
                      d,
                      n ? { passive: !1 } : void 0,
                    ),
                    (a = !1)),
                  (s = []),
                  (l = -1))
                : (p(), (s = []));
            }),
            (e.enableBodyScroll = function (e) {
              if (r) {
                if (!e)
                  return void console.error(
                    'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.',
                  );
                (e.ontouchstart = null),
                  (e.ontouchmove = null),
                  (s = s.filter(function (t) {
                    return t.targetElement !== e;
                  })),
                  a &&
                    0 === s.length &&
                    (document.removeEventListener(
                      'touchmove',
                      d,
                      n ? { passive: !1 } : void 0,
                    ),
                    (a = !1));
              } else
                1 === s.length && s[0].targetElement === e
                  ? (p(), (s = []))
                  : (s = s.filter(function (t) {
                      return t.targetElement !== e;
                    }));
            });
        }),
        void 0 === (r = 'function' == typeof n ? n.apply(t, o) : n) ||
          (e.exports = r);
    },
    46587: (e) => {
      e.exports = {
        wrapper: 'wrapper-bUw_gKIQ',
        input: 'input-bUw_gKIQ',
        box: 'box-bUw_gKIQ',
        icon: 'icon-bUw_gKIQ',
        noOutline: 'noOutline-bUw_gKIQ',
        'intent-danger': 'intent-danger-bUw_gKIQ',
        check: 'check-bUw_gKIQ',
        dot: 'dot-bUw_gKIQ',
      };
    },
    94090: (e) => {
      e.exports = {
        checkbox: 'checkbox-pJWVW1z6',
        reverse: 'reverse-pJWVW1z6',
        label: 'label-pJWVW1z6',
        baseline: 'baseline-pJWVW1z6',
      };
    },
    35267: (e) => {
      e.exports = {
        'textarea-container': 'textarea-container-BQ5l96SC',
        'change-highlight': 'change-highlight-BQ5l96SC',
        focused: 'focused-BQ5l96SC',
        'resize-vertical': 'resize-vertical-BQ5l96SC',
        'resize-horizontal': 'resize-horizontal-BQ5l96SC',
        'resize-both': 'resize-both-BQ5l96SC',
        textarea: 'textarea-BQ5l96SC',
      };
    },
    37469: (e) => {
      e.exports = {
        radio: 'radio-KZcDDz7S',
        input: 'input-KZcDDz7S',
        box: 'box-KZcDDz7S',
        reverse: 'reverse-KZcDDz7S',
        label: 'label-KZcDDz7S',
        wrapper: 'wrapper-KZcDDz7S',
        noOutline: 'noOutline-KZcDDz7S',
      };
    },
    25140: (e) => {
      e.exports = {
        wrap: 'wrap-AfdFYQAU',
        thicknessItem: 'thicknessItem-AfdFYQAU',
        checked: 'checked-AfdFYQAU',
        radio: 'radio-AfdFYQAU',
        bar: 'bar-AfdFYQAU',
      };
    },
    24530: (e) => {
      e.exports = { innerLabel: 'innerLabel-ycB0ofZi' };
    },
    7856: (e) => {
      e.exports = {
        controlWrapper: 'controlWrapper-I6SkDSuu',
        hidden: 'hidden-I6SkDSuu',
        control: 'control-I6SkDSuu',
        controlIncrease: 'controlIncrease-I6SkDSuu',
        controlDecrease: 'controlDecrease-I6SkDSuu',
        controlIcon: 'controlIcon-I6SkDSuu',
        title: 'title-I6SkDSuu',
      };
    },
    81427: (e) => {
      e.exports = {
        wrap: 'wrap-jVaj_zta',
        icon: 'icon-jVaj_zta',
        text: 'text-jVaj_zta',
        disabled: 'disabled-jVaj_zta',
      };
    },
    24830: (e) => {
      e.exports = {
        colorPickerWrap: 'colorPickerWrap-KAmze9Wr',
        focused: 'focused-KAmze9Wr',
        readonly: 'readonly-KAmze9Wr',
        disabled: 'disabled-KAmze9Wr',
        'size-small': 'size-small-KAmze9Wr',
        'size-medium': 'size-medium-KAmze9Wr',
        'size-large': 'size-large-KAmze9Wr',
        'font-size-small': 'font-size-small-KAmze9Wr',
        'font-size-medium': 'font-size-medium-KAmze9Wr',
        'font-size-large': 'font-size-large-KAmze9Wr',
        'border-none': 'border-none-KAmze9Wr',
        shadow: 'shadow-KAmze9Wr',
        'border-thin': 'border-thin-KAmze9Wr',
        'border-thick': 'border-thick-KAmze9Wr',
        'intent-default': 'intent-default-KAmze9Wr',
        'intent-success': 'intent-success-KAmze9Wr',
        'intent-warning': 'intent-warning-KAmze9Wr',
        'intent-danger': 'intent-danger-KAmze9Wr',
        'intent-primary': 'intent-primary-KAmze9Wr',
        'corner-top-left': 'corner-top-left-KAmze9Wr',
        'corner-top-right': 'corner-top-right-KAmze9Wr',
        'corner-bottom-right': 'corner-bottom-right-KAmze9Wr',
        'corner-bottom-left': 'corner-bottom-left-KAmze9Wr',
        colorPicker: 'colorPicker-KAmze9Wr',
        swatch: 'swatch-KAmze9Wr',
        placeholderContainer: 'placeholderContainer-KAmze9Wr',
        placeholder: 'placeholder-KAmze9Wr',
        mixedColor: 'mixedColor-KAmze9Wr',
        white: 'white-KAmze9Wr',
        opacitySwatch: 'opacitySwatch-KAmze9Wr',
        colorLine: 'colorLine-KAmze9Wr',
        multiWidth: 'multiWidth-KAmze9Wr',
        line: 'line-KAmze9Wr',
        thicknessContainer: 'thicknessContainer-KAmze9Wr',
        thicknessTitle: 'thicknessTitle-KAmze9Wr',
      };
    },
    81851: (e) => {
      e.exports = {
        thicknessContainer: 'thicknessContainer-NsJBpy5c',
        thicknessTitle: 'thicknessTitle-NsJBpy5c',
      };
    },
    51567: (e) => {
      e.exports = {
        hasTooltip: 'hasTooltip-_jOPqs8j',
        uppercase: 'uppercase-_jOPqs8j',
      };
    },
    7697: (e) => {
      e.exports = { wrap: 'wrap-CcYH2FIb' };
    },
    6815: (e) => {
      e.exports = { checkbox: 'checkbox-mzBlcrjf', title: 'title-mzBlcrjf' };
    },
    9896: (e) => {
      e.exports = { hintButton: 'hintButton-BoIR13Nf' };
    },
    93925: (e) => {
      e.exports = { titleWrap: 'titleWrap-IQolwY3b', title: 'title-IQolwY3b' };
    },
    80072: (e) => {
      e.exports = {
        container: 'container-gKn55QI9',
        sectionTitle: 'sectionTitle-gKn55QI9',
        separator: 'separator-gKn55QI9',
        customButton: 'customButton-gKn55QI9',
      };
    },
    66454: (e) => {
      e.exports = {
        container: 'container-jgT5uU0F',
        form: 'form-jgT5uU0F',
        swatch: 'swatch-jgT5uU0F',
        inputWrap: 'inputWrap-jgT5uU0F',
        inputHash: 'inputHash-jgT5uU0F',
        input: 'input-jgT5uU0F',
        buttonWrap: 'buttonWrap-jgT5uU0F',
        hueSaturationWrap: 'hueSaturationWrap-jgT5uU0F',
        saturation: 'saturation-jgT5uU0F',
        hue: 'hue-jgT5uU0F',
      };
    },
    92155: (e) => {
      e.exports = {
        hue: 'hue-iMmREGnj',
        pointer: 'pointer-iMmREGnj',
        pointerContainer: 'pointerContainer-iMmREGnj',
      };
    },
    1034: (e) => {
      e.exports = {
        opacity: 'opacity-uujjxY8O',
        opacitySlider: 'opacitySlider-uujjxY8O',
        opacitySliderGradient: 'opacitySliderGradient-uujjxY8O',
        pointer: 'pointer-uujjxY8O',
        dragged: 'dragged-uujjxY8O',
        opacityPointerWrap: 'opacityPointerWrap-uujjxY8O',
        opacityInputWrap: 'opacityInputWrap-uujjxY8O',
        opacityInput: 'opacityInput-uujjxY8O',
        opacityInputPercent: 'opacityInputPercent-uujjxY8O',
      };
    },
    53766: (e) => {
      e.exports = {
        saturation: 'saturation-S_CtZIbU',
        pointer: 'pointer-S_CtZIbU',
      };
    },
    61561: (e) => {
      e.exports = {
        swatches: 'swatches-pNRFZrPx',
        swatch: 'swatch-pNRFZrPx',
        hover: 'hover-pNRFZrPx',
        empty: 'empty-pNRFZrPx',
        white: 'white-pNRFZrPx',
        selected: 'selected-pNRFZrPx',
        contextItem: 'contextItem-pNRFZrPx',
      };
    },
    24009: (e) => {
      e.exports = {
        button: 'button-nCHoYtuE',
        'button-children': 'button-children-nCHoYtuE',
        hiddenArrow: 'hiddenArrow-nCHoYtuE',
        invisibleFocusHandler: 'invisibleFocusHandler-nCHoYtuE',
      };
    },
    94727: (e) => {
      e.exports = {
        button: 'button-allnSfnt',
        disabled: 'disabled-allnSfnt',
        hidden: 'hidden-allnSfnt',
        icon: 'icon-allnSfnt',
        dropped: 'dropped-allnSfnt',
      };
    },
    39033: (e) => {
      e.exports = { placeholder: 'placeholder-y_q0hyRC' };
    },
    70673: (e, t, n) => {
      'use strict';
      n.d(t, { CheckboxInput: () => c });
      var o = n(50959),
        r = n(97754),
        s = n(9745),
        a = n(65890),
        l = n(46587),
        i = n.n(l);
      function c(e) {
        const t = r(i().box, i()[`intent-${e.intent}`], {
            [i().check]: !Boolean(e.indeterminate),
            [i().dot]: Boolean(e.indeterminate),
            [i().noOutline]: -1 === e.tabIndex,
          }),
          n = r(i().wrapper, e.className);
        return o.createElement(
          'span',
          { className: n, title: e.title, style: e.style },
          o.createElement('input', {
            id: e.id,
            tabIndex: e.tabIndex,
            className: i().input,
            type: 'checkbox',
            name: e.name,
            checked: e.checked,
            disabled: e.disabled,
            value: e.value,
            autoFocus: e.autoFocus,
            role: e.role,
            onChange: function () {
              e.onChange && e.onChange(e.value);
            },
            ref: e.reference,
            'aria-required': e['aria-required'],
          }),
          o.createElement(
            'span',
            { className: t },
            o.createElement(s.Icon, { icon: a, className: i().icon }),
          ),
        );
      }
    },
    15294: (e, t, n) => {
      'use strict';
      n.d(t, { Checkbox: () => c });
      var o = n(50959),
        r = n(97754),
        s = n(54349),
        a = n(70673),
        l = n(94090),
        i = n.n(l);
      class c extends o.PureComponent {
        render() {
          const { inputClassName: e, labelClassName: t, ...n } = this.props,
            s = r(this.props.className, i().checkbox, {
              [i().reverse]: Boolean(this.props.labelPositionReverse),
              [i().baseline]: Boolean(this.props.labelAlignBaseline),
            }),
            l = r(i().label, t, { [i().disabled]: this.props.disabled });
          let c = null;
          return (
            this.props.label &&
              (c = o.createElement(
                'span',
                { className: l, title: this.props.title },
                this.props.label,
              )),
            o.createElement(
              'label',
              { className: s },
              o.createElement(a.CheckboxInput, { ...n, className: e }),
              c,
            )
          );
        }
      }
      c.defaultProps = { value: 'on' };
      (0, s.makeSwitchGroupItem)(c);
    },
    2568: (e, t, n) => {
      'use strict';
      n.d(t, { Textarea: () => C });
      var o,
        r = n(50959),
        s = n(97754),
        a = n(38528),
        l = n(29202),
        i = n(48027),
        c = n(45812),
        u = n(47201),
        d = n(48907),
        p = n(67029),
        h = n(78274),
        m = n(35267),
        g = n.n(m);
      !(function (e) {
        (e.None = 'none'),
          (e.Vertical = 'vertical'),
          (e.Horizontal = 'horizontal'),
          (e.Both = 'both');
      })(o || (o = {}));
      const v = r.forwardRef((e, t) => {
        const {
            id: n,
            title: o,
            tabIndex: a,
            containerTabIndex: l,
            role: i,
            inputClassName: c,
            autoComplete: u,
            autoFocus: d,
            cols: m,
            disabled: v,
            isFocused: b,
            form: f,
            maxLength: C,
            minLength: y,
            name: S,
            placeholder: E,
            readonly: x,
            required: _,
            rows: w,
            value: N,
            defaultValue: T,
            wrap: I,
            containerReference: k,
            onChange: P,
            onSelect: R,
            onFocus: B,
            onContainerFocus: M,
            onBlur: O,
            'aria-describedby': D,
            'aria-required': A,
            'aria-invalid': V,
            ...F
          } = e,
          z = {
            id: n,
            title: o,
            tabIndex: a,
            role: i,
            autoComplete: u,
            autoFocus: d,
            cols: m,
            disabled: v,
            form: f,
            maxLength: C,
            minLength: y,
            name: S,
            placeholder: E,
            readOnly: x,
            required: _,
            rows: w,
            value: N,
            defaultValue: T,
            wrap: I,
            onChange: P,
            onSelect: R,
            onFocus: B,
            onBlur: O,
            'aria-describedby': D,
            'aria-required': A,
            'aria-invalid': V,
          };
        return r.createElement(p.ControlSkeleton, {
          ...F,
          tabIndex: l,
          disabled: v,
          readonly: x,
          isFocused: b,
          ref: k,
          onFocus: M,
          middleSlot: r.createElement(
            h.MiddleSlot,
            null,
            r.createElement('textarea', {
              ...z,
              className: s(g().textarea, c),
              ref: t,
            }),
          ),
        });
      });
      v.displayName = 'TextareaView';
      const b = (e, t, n) => (t ? void 0 : e ? -1 : n),
        f = (e, t, n) => (t ? void 0 : e ? n : -1),
        C = r.forwardRef((e, t) => {
          e = (0, i.useControl)(e);
          const {
              className: n,
              disabled: p,
              autoSelectOnFocus: h,
              tabIndex: m = 0,
              borderStyle: C,
              highlight: y,
              resize: S,
              containerReference: E = null,
              onFocus: x,
              onBlur: _,
              ...w
            } = e,
            N = (0, r.useRef)(null),
            T = (0, r.useRef)(null),
            {
              isMouseDown: I,
              handleMouseDown: k,
              handleMouseUp: P,
            } = (0, c.useIsMouseDown)(),
            [R, B] = (0, l.useFocus)(),
            M = (0, u.createSafeMulticastEventHandler)(
              B.onFocus,
              function (e) {
                h && !I.current && (0, d.selectAllContent)(e.currentTarget);
              },
              x,
            ),
            O = (0, u.createSafeMulticastEventHandler)(B.onBlur, _),
            D = void 0 !== S && S !== o.None,
            A = null != C ? C : D ? (y ? 'thick' : 'thin') : void 0,
            V = null != y ? y : !D && void 0;
          return r.createElement(v, {
            ...w,
            className: s(
              g()['textarea-container'],
              D && g()['change-highlight'],
              S && S !== o.None && g()[`resize-${S}`],
              R && g().focused,
              n,
            ),
            disabled: p,
            isFocused: R,
            containerTabIndex: b(R, p, m),
            tabIndex: f(R, p, m),
            borderStyle: A,
            highlight: V,
            onContainerFocus: function (e) {
              T.current === e.target && null !== N.current && N.current.focus();
            },
            onFocus: M,
            onBlur: O,
            onMouseDown: k,
            onMouseUp: P,
            ref: function (e) {
              (N.current = e),
                'function' == typeof t ? t(e) : t && (t.current = e);
            },
            containerReference: (0, a.useMergedRefs)([E, T]),
          });
        });
      C.displayName = 'Textarea';
    },
    66686: (e, t, n) => {
      'use strict';
      n.d(t, {
        useKeyboardActionHandler: () => a,
        useComposedKeyboardActionHandlers: () => l,
        useKeyboardEventHandler: () => i,
        useKeyboardToggle: () => c,
        useKeyboardClose: () => u,
        useKeyboardOpen: () => d,
      });
      var o = n(50959),
        r = n(3343);
      const s = () => !0;
      function a(e, t, n = s) {
        return (0, o.useCallback)(
          (o) => {
            const r = e.map((e) => ('function' == typeof e ? e() : e));
            return !(!n(o) || !r.includes(o)) && (t(o), !0);
          },
          [...e, t, n],
        );
      }
      function l(...e) {
        return (0, o.useCallback)(
          (t) => {
            for (const n of e) if (n(t)) return !0;
            return !1;
          },
          [...e],
        );
      }
      function i(e, t = !0) {
        const n = l(...e);
        return (0, o.useCallback)(
          (e) => {
            n((0, r.hashFromEvent)(e)) && t && e.preventDefault();
          },
          [n],
        );
      }
      function c(e, t = !0) {
        return a([13, 32], e, function (e) {
          if (13 === e) return t;
          return !0;
        });
      }
      function u(e, t) {
        return a(
          [9, (0, o.useCallback)(() => r.Modifiers.Shift + 9, []), 27],
          t,
          (0, o.useCallback)(() => e, [e]),
        );
      }
      function d(e, t) {
        return a(
          [40, 38],
          t,
          (0, o.useCallback)(() => !e, [e]),
        );
      }
    },
    9147: (e, t, n) => {
      'use strict';
      n.d(t, { useControlDisclosure: () => c });
      var o = n(50959),
        r = n(50151),
        s = n(54717),
        a = n(29202),
        l = n(47201),
        i = n(22064);
      function c(e) {
        const { intent: t, highlight: n, ...c } = e,
          { isFocused: u, ...d } = (function (e) {
            const {
                id: t,
                listboxId: n,
                disabled: c,
                buttonTabIndex: u = 0,
                onFocus: d,
                onBlur: p,
                onClick: h,
              } = e,
              [m, g] = (0, o.useState)(!1),
              [v, b] = (0, a.useFocus)(),
              f = v || m,
              C = (null != n ? n : void 0 !== t)
                ? (0, i.createDomId)(t, 'listbox')
                : void 0,
              y = (0, o.useRef)(null),
              S = (0, o.useCallback)(
                (e) => {
                  var t;
                  return null === (t = y.current) || void 0 === t
                    ? void 0
                    : t.focus(e);
                },
                [y],
              ),
              E = (0, o.useRef)(null),
              x = (0, o.useCallback)(
                () => (0, r.ensureNotNull)(E.current).focus(),
                [E],
              ),
              _ = (0, o.useCallback)(() => g(!0), [g]),
              w = (0, o.useCallback)(
                (e = !1) => {
                  g(!1);
                  const { activeElement: t } = document;
                  (t && (0, s.isTextEditingField)(t)) ||
                    S({ preventScroll: e });
                },
                [g, S],
              ),
              N = (0, o.useCallback)(() => {
                m ? w() : _();
              }, [m, w, _]),
              T = c ? [] : [d, b.onFocus],
              I = c ? [] : [p, b.onBlur],
              k = c ? [] : [h, N],
              P = (0, l.createSafeMulticastEventHandler)(...T),
              R = (0, l.createSafeMulticastEventHandler)(...I),
              B = (0, l.createSafeMulticastEventHandler)(...k);
            return {
              listboxId: C,
              isOpened: m,
              isFocused: f,
              buttonTabIndex: c ? -1 : u,
              listboxTabIndex: -1,
              open: _,
              close: w,
              toggle: N,
              onOpen: x,
              buttonFocusBindings: { onFocus: P, onBlur: R },
              onButtonClick: B,
              buttonRef: y,
              listboxRef: E,
              buttonAria: {
                'aria-controls': m ? C : void 0,
                'aria-expanded': m,
                'aria-disabled': c,
              },
            };
          })(c);
        return {
          ...d,
          isFocused: u,
          highlight: null != n ? n : u,
          intent: null != t ? t : u ? 'primary' : 'default',
        };
      }
    },
    54349: (e, t, n) => {
      'use strict';
      n.d(t, { SwitchGroup: () => s, makeSwitchGroupItem: () => a });
      var o = n(50959),
        r = n(19036);
      class s extends o.PureComponent {
        constructor() {
          super(...arguments),
            (this._subscriptions = new Set()),
            (this._getName = () => this.props.name),
            (this._getValues = () => this.props.values),
            (this._getOnChange = () => this.props.onChange),
            (this._subscribe = (e) => {
              this._subscriptions.add(e);
            }),
            (this._unsubscribe = (e) => {
              this._subscriptions.delete(e);
            });
        }
        getChildContext() {
          return {
            switchGroupContext: {
              getName: this._getName,
              getValues: this._getValues,
              getOnChange: this._getOnChange,
              subscribe: this._subscribe,
              unsubscribe: this._unsubscribe,
            },
          };
        }
        render() {
          return this.props.children;
        }
        componentDidUpdate(e) {
          this._notify(this._getUpdates(this.props.values, e.values));
        }
        _notify(e) {
          this._subscriptions.forEach((t) => t(e));
        }
        _getUpdates(e, t) {
          return [...t, ...e].filter((n) =>
            t.includes(n) ? !e.includes(n) : e.includes(n),
          );
        }
      }
      function a(e) {
        var t;
        return (
          (t = class extends o.PureComponent {
            constructor() {
              super(...arguments),
                (this._onChange = (e) => {
                  this.context.switchGroupContext.getOnChange()(e);
                }),
                (this._onUpdate = (e) => {
                  e.includes(this.props.value) && this.forceUpdate();
                });
            }
            componentDidMount() {
              this.context.switchGroupContext.subscribe(this._onUpdate);
            }
            render() {
              return o.createElement(e, {
                ...this.props,
                name: this._getName(),
                onChange: this._onChange,
                checked: this._isChecked(),
              });
            }
            componentWillUnmount() {
              this.context.switchGroupContext.unsubscribe(this._onUpdate);
            }
            _getName() {
              return this.context.switchGroupContext.getName();
            }
            _isChecked() {
              return this.context.switchGroupContext
                .getValues()
                .includes(this.props.value);
            }
          }),
          (t.contextTypes = { switchGroupContext: r.any.isRequired }),
          t
        );
      }
      s.childContextTypes = { switchGroupContext: r.any.isRequired };
    },
    22064: (e, t, n) => {
      'use strict';
      n.d(t, { createDomId: () => i, joinDomIds: () => c });
      const o = /\s/g;
      function r(e) {
        return 'string' == typeof e;
      }
      function s(e) {
        switch (typeof e) {
          case 'string':
            return e;
          case 'number':
          case 'bigint':
            return e.toString(10);
          case 'boolean':
          case 'symbol':
            return e.toString();
          default:
            return null;
        }
      }
      function a(e) {
        return e.trim().length > 0;
      }
      function l(e) {
        return e.replace(o, '-');
      }
      function i(...e) {
        const t = e.map(s).filter(r).filter(a).map(l);
        return (t.length > 0 && t[0].startsWith('id_') ? t : ['id', ...t]).join(
          '_',
        );
      }
      function c(...e) {
        return e.map(s).filter(r).filter(a).join(' ');
      }
    },
    92399: (e, t, n) => {
      'use strict';
      n.d(t, { NumberInputView: () => I });
      var o = n(50959),
        r = n(32563),
        s = n(97754),
        a = n(67029),
        l = n(78274),
        i = n(86623),
        c = n(84275),
        u = n(1405),
        d = n(24530);
      const p = {
          large: a.InputClasses.FontSizeLarge,
          medium: a.InputClasses.FontSizeMedium,
        },
        h = {
          attachment: u.anchors.top.attachment,
          targetAttachment: u.anchors.top.targetAttachment,
          attachmentOffsetY: -4,
        };
      function m(e) {
        const {
            className: t,
            inputClassName: n,
            stretch: r = !0,
            errorMessage: a,
            fontSizeStyle: u = 'large',
            endSlot: m,
            button: g,
            error: v,
            warning: b,
            innerLabel: f,
            inputReference: C,
            children: y,
            ...S
          } = e,
          E = v && void 0 !== a ? [a] : void 0,
          x = b && void 0 !== a ? [a] : void 0,
          _ = s(d.inputContainer, p[u], t),
          w = f
            ? o.createElement(
                l.StartSlot,
                { className: d.innerLabel, interactive: !1 },
                f,
              )
            : void 0,
          N = m || g || y ? o.createElement(l.EndSlot, null, m, g, y) : void 0;
        return o.createElement(i.FormInput, {
          ...S,
          className: _,
          inputClassName: n,
          errors: E,
          warnings: x,
          hasErrors: v,
          hasWarnings: b,
          messagesPosition: c.MessagesPosition.Attached,
          customErrorsAttachment: h,
          messagesRoot: 'document',
          inheritMessagesWidthFromTarget: !0,
          disableMessagesRtlStyles: !0,
          iconHidden: !0,
          stretch: r,
          reference: C,
          startSlot: w,
          endSlot: N,
        });
      }
      var g = n(38528),
        v = n(44352),
        b = n(9745),
        f = n(33933),
        C = n(43313),
        y = n(7856);
      function S(e) {
        const t = s(y.control, y.controlIncrease),
          r = s(y.control, y.controlDecrease);
        return o.createElement(
          o.Fragment,
          null,
          void 0 !== e.title &&
            o.createElement('div', { className: y.title }, e.title),
          o.createElement(
            'div',
            { className: y.controlWrapper },
            (e.defaultButtonsVisible || e.title) &&
              o.createElement(
                o.Fragment,
                null,
                o.createElement(
                  'button',
                  {
                    type: 'button',
                    tabIndex: -1,
                    'aria-label': v.t(null, void 0, n(46812)),
                    className: t,
                    onClick: e.increaseValue,
                    onMouseDown: f.preventDefault,
                  },
                  o.createElement(b.Icon, {
                    icon: C,
                    className: y.controlIcon,
                  }),
                ),
                o.createElement(
                  'button',
                  {
                    type: 'button',
                    tabIndex: -1,
                    'aria-label': v.t(null, void 0, n(56095)),
                    className: r,
                    onClick: e.decreaseValue,
                    onMouseDown: f.preventDefault,
                  },
                  o.createElement(b.Icon, {
                    icon: C,
                    className: y.controlIcon,
                  }),
                ),
              ),
          ),
        );
      }
      var E = n(70412),
        x = n(29202),
        _ = n(47201),
        w = n(68335);
      const N = [38],
        T = [40];
      function I(e) {
        const [t, n] = (0, E.useHover)(),
          [s, a] = (0, x.useFocus)(),
          l = (0, o.useRef)(null),
          i = (0, _.createSafeMulticastEventHandler)(a.onFocus, e.onFocus),
          c = (0, _.createSafeMulticastEventHandler)(a.onBlur, e.onBlur),
          u = (0, o.useCallback)(
            (t) => {
              !e.disabled &&
                s &&
                (t.preventDefault(),
                t.deltaY < 0
                  ? e.onValueByStepChange(1)
                  : e.onValueByStepChange(-1));
            },
            [s, e.disabled, e.onValueByStepChange],
          );
        return o.createElement(m, {
          ...n,
          id: e.id,
          name: e.name,
          pattern: e.pattern,
          borderStyle: e.borderStyle,
          fontSizeStyle: e.fontSizeStyle,
          value: e.value,
          className: e.className,
          inputClassName: e.inputClassName,
          button: (function () {
            const {
                button: n,
                forceShowControls: a,
                disabled: l,
                title: i,
              } = e,
              c = !l && !r.mobiletouch && (a || s || t);
            return l
              ? void 0
              : o.createElement(
                  o.Fragment,
                  null,
                  null != n
                    ? n
                    : o.createElement(S, {
                        increaseValue: d,
                        decreaseValue: p,
                        defaultButtonsVisible: c,
                        title: i,
                      }),
                );
          })(),
          disabled: e.disabled,
          placeholder: e.placeholder,
          innerLabel: e.innerLabel,
          endSlot: e.endSlot,
          containerReference: (0, g.useMergedRefs)([l, e.containerReference]),
          inputReference: e.inputReference,
          inputMode: e.inputMode,
          type: e.type,
          warning: e.warning,
          error: e.error,
          errorMessage: e.errorMessage,
          onClick: e.onClick,
          onFocus: i,
          onBlur: c,
          onChange: e.onValueChange,
          onKeyDown: function (t) {
            if (e.disabled || 0 !== (0, w.modifiersFromEvent)(t.nativeEvent))
              return;
            let n = N,
              o = T;
            e.controlDecKeyCodes && (o = o.concat(e.controlDecKeyCodes));
            e.controlIncKeyCodes && (n = n.concat(e.controlIncKeyCodes));
            (o.includes(t.keyCode) || n.includes(t.keyCode)) &&
              (t.preventDefault(),
              e.onValueByStepChange(o.includes(t.keyCode) ? -1 : 1));
            e.onKeyDown && e.onKeyDown(t);
          },
          onWheelNoPassive: u,
          stretch: e.stretch,
          intent: e.intent,
          highlight: e.highlight,
          highlightRemoveRoundBorder: e.highlightRemoveRoundBorder,
          autoSelectOnFocus: e.autoSelectOnFocus,
          'data-property-id': e['data-name'],
        });
        function d() {
          var t;
          e.disabled ||
            (null === (t = l.current) || void 0 === t || t.focus(),
            e.onValueByStepChange(1));
        }
        function p() {
          var t;
          e.disabled ||
            (null === (t = l.current) || void 0 === t || t.focus(),
            e.onValueByStepChange(-1));
        }
      }
    },
    58593: (e, t, n) => {
      'use strict';
      n.d(t, { ColorSelect: () => w });
      var o = n(50959),
        r = n(97754),
        s = n.n(r),
        a = n(50151),
        l = n(68335),
        i = n(50628),
        c = n(29202),
        u = n(27797),
        d = n(64706);
      function p(e) {
        const {
            button: t,
            children: n,
            className: r,
            onPopupClose: s,
            ...p
          } = e,
          [h, m] = (0, o.useState)(!1),
          [g, v] = (0, o.useState)(!1),
          [b, f] = (0, c.useFocus)(),
          C = (0, o.useRef)(null);
        return o.createElement(
          'div',
          { className: r },
          o.createElement(
            'div',
            {
              tabIndex: e.disabled ? void 0 : -1,
              ref: C,
              onClick: y,
              onFocus: f.onFocus,
              onBlur: f.onBlur,
              onKeyDown: S,
            },
            'function' == typeof t ? t(g, b) : t,
          ),
          o.createElement(
            i.PopupMenu,
            {
              isOpened: g,
              onClose: E,
              position: function () {
                const e = (0, a.ensureNotNull)(
                  C.current,
                ).getBoundingClientRect();
                return { x: e.left, y: e.top + e.height };
              },
              doNotCloseOn: C.current,
              onKeyDown: S,
            },
            o.createElement(d.MenuContext.Consumer, null, (e) =>
              o.createElement(u.ColorPicker, {
                ...p,
                onToggleCustom: m,
                menu: e,
              }),
            ),
            !h && n,
          ),
        );
        function y() {
          e.disabled || (v((e) => !e), m(!1));
        }
        function S(e) {
          if (27 === (0, l.hashFromEvent)(e)) g && (e.preventDefault(), E());
        }
        function E() {
          y(), (0, a.ensureNotNull)(C.current).focus(), s && s();
        }
      }
      var h = n(56512),
        m = n(38031),
        g = n(6914),
        v = n(44352),
        b = n(54349),
        f = n(25140);
      const C = (0, b.makeSwitchGroupItem)(
        class extends o.PureComponent {
          constructor() {
            super(...arguments),
              (this._onChange = () => {
                this.props.onChange && this.props.onChange(this.props.value);
              });
          }
          render() {
            const { name: e, checked: t, value: n } = this.props,
              s = r(f.thicknessItem, { [f.checked]: t }),
              a = r(f.bar, { [f.checked]: t }),
              l = {
                borderTopWidth: parseInt(n),
              };
            return o.createElement(
              'div',
              { className: s },
              o.createElement('input', {
                type: 'radio',
                className: f.radio,
                name: e,
                value: n,
                onChange: this._onChange,
                checked: t,
              }),
              o.createElement('div', { className: a, style: l }, ' '),
            );
          }
        },
      );
      function y(e) {
        const { name: t, values: n, selectedValues: r, onChange: s } = e,
          a = n.map((e, t) =>
            o.createElement(C, { key: t, value: e.toString() }),
          ),
          l = r.map((e) => e.toString());
        return o.createElement(
          'div',
          { className: f.wrap },
          o.createElement(
            b.SwitchGroup,
            {
              name: t,
              onChange: (e) => {
                s(parseInt(e));
              },
              values: l,
            },
            a,
          ),
        );
      }
      var S = n(81851);
      const E = v.t(null, void 0, n(60142));
      function x(e) {
        const { value: t, items: n, onChange: r } = e;
        return o.createElement(
          'div',
          { className: S.thicknessContainer },
          o.createElement('div', { className: S.thicknessTitle }, E),
          o.createElement(y, {
            name: 'color_picker_thickness_select',
            onChange: r,
            values: n,
            selectedValues: 'mixed' === t ? [] : [t],
          }),
        );
      }
      var _ = n(24830);
      function w(e) {
        const {
            className: t,
            selectOpacity: n = void 0 !== e.opacity,
            thickness: r,
            color: a,
            disabled: l,
            opacity: i = 1,
            onColorChange: c,
            onOpacityChange: u,
            onThicknessChange: d,
            thicknessItems: m,
            onPopupClose: g,
          } = e,
          [v, b, f] = (0, h.useCustomColors)();
        return o.createElement(
          p,
          {
            className: t,
            disabled: l,
            color: 'mixed' !== a ? a : null,
            selectOpacity: n,
            opacity: i,
            selectCustom: !0,
            customColors: v,
            onColorChange: c,
            onOpacityChange: a ? u : void 0,
            onAddColor: b,
            onRemoveCustomColor: f,
            button: function (e, t) {
              const n = e || t,
                c = n ? 'primary' : 'default';
              return o.createElement(
                'div',
                {
                  className: s()(
                    _.colorPickerWrap,
                    _[`intent-${c}`],
                    _['border-thin'],
                    _['size-medium'],
                    n && _.highlight,
                    n && _.focused,
                    l && _.disabled,
                  ),
                  'data-role': 'button',
                  'data-name': r
                    ? 'color-with-thickness-select'
                    : 'color-select',
                },
                o.createElement(
                  'div',
                  { className: s()(_.colorPicker, l && _.disabled) },
                  a && 'mixed' !== a
                    ? (function () {
                        const e = N(a, i),
                          t = i >= 0.95 && T(a);
                        return o.createElement(
                          'div',
                          { className: _.opacitySwatch },
                          o.createElement('div', {
                            style: { backgroundColor: e },
                            className: s()(_.swatch, t && _.white),
                          }),
                        );
                      })()
                    : o.createElement(
                        'div',
                        { className: _.placeholderContainer },
                        o.createElement('div', {
                          className:
                            'mixed' === a ? _.mixedColor : _.placeholder,
                        }),
                      ),
                  r &&
                    (function () {
                      const e = a && 'mixed' !== a ? N(a, i) : void 0;
                      if ('mixed' === r)
                        return o.createElement(
                          'div',
                          { className: _.multiWidth },
                          o.createElement('div', {
                            style: { backgroundColor: e },
                            className: _.line,
                          }),
                          o.createElement('div', {
                            style: { backgroundColor: e },
                            className: _.line,
                          }),
                          o.createElement('div', {
                            style: { backgroundColor: e },
                            className: _.line,
                          }),
                        );
                      return o.createElement('span', {
                        className: s()(_.colorLine, T(a) && _.white),
                        style: { height: r, backgroundColor: e },
                      });
                    })(),
                ),
                n && o.createElement('span', { className: _.shadow }),
              );
            },
            onPopupClose: g,
          },
          r &&
            m &&
            o.createElement(x, {
              value: r,
              items: m,
              onChange: function (e) {
                d && d(e);
              },
            }),
        );
      }
      function N(e, t) {
        return e
          ? (0, m.generateColor)(e, (0, m.alphaToTransparency)(t))
          : '#000000';
      }
      function T(e) {
        return !!e && e.toLowerCase() === g.white;
      }
    },
    48897: (e, t, n) => {
      'use strict';
      n.d(t, { SymbolInputsButton: () => w });
      var o = n(50959),
        r = n(97754),
        s = n.n(r),
        a = n(44352),
        l = n(50151),
        i = n(50655),
        c = n(95711),
        u = n(2484),
        d = n(36780),
        p = n(82501),
        h = n(1861),
        m = n(9745),
        g = n(93929),
        v = n(81427);
      function b(e) {
        const {
          value: t,
          onClick: n,
          className: s,
          startSlot: a,
          disabled: l = !1,
        } = e;
        return o.createElement(
          'div',
          {
            className: r(v.wrap, l && v.disabled, s),
            onClick: n,
            'data-name': 'edit-button',
          },
          o.createElement(
            'div',
            { className: r(v.text, 'apply-overflow-tooltip') },
            void 0 !== a && a,
            o.createElement('span', null, t),
          ),
          o.createElement(m.Icon, { icon: g, className: v.icon }),
        );
      }
      var f = n(31356),
        C = n(78260),
        y = n(7785),
        S = n(15983),
        E = n(82708),
        x = n(51567);
      function _(e) {
        const { symbol: t, onSymbolChanged: r, disabled: l, className: d } = e,
          [m, g] = (0, o.useState)(t),
          v = (0, o.useContext)(i.SlotContext),
          f = (0, o.useContext)(c.PopupContext);
        return o.createElement(b, {
          value: m,
          onClick: function () {
            const e = (function (e) {
                const t = (0, y.tokenize)(e);
                return (0, S.isSpread)(t);
              })(m)
                ? m
                : (0, E.safeShortName)(m),
              t = (0, p.getSymbolSearchCompleteOverrideFunction)();
            (0, h.showSymbolSearchItemsDialog)({
              onSearchComplete: (e) => {
                t(e[0].symbol, e[0].result).then((e) => {
                  r(e.symbol), g(e.name);
                });
              },
              dialogTitle: a.t(null, void 0, n(23398)),
              defaultValue: e,
              manager: v,
              onClose: () => {
                f && f.focus();
              },
              showSpreadActions:
                u.enabled('show_spread_operators') &&
                u.enabled('studies_symbol_search_spread_operators'),
            });
          },
          disabled: l,
          className: s()(
            d,
            u.enabled('uppercase_instrument_names') && x.uppercase,
          ),
        });
      }
      function w(e) {
        if ('definition' in e) {
          const {
              propType: t,
              properties: n,
              id: r,
              title: s = '',
              solutionId: a,
            } = e.definition,
            i = n[t],
            c = i.value() || '',
            u = (e) => {
              i.setValue(e);
            };
          return o.createElement(
            f.CommonSection,
            { id: r, title: s, solutionId: a },
            o.createElement(
              C.CellWrap,
              null,
              o.createElement(_, {
                symbol: (0, l.ensureDefined)(c),
                onSymbolChanged: u,
              }),
            ),
          );
        }
        {
          const {
              study: t,
              value: n,
              input: { id: r, name: a },
              onChange: i,
              disabled: c,
              hasTooltip: u,
            } = e,
            p = (e) => {
              const n = (0, d.getInternalSymbolName)(e, t);
              i(n, r, a);
            };
          return o.createElement(_, {
            symbol: (0, l.ensureDefined)(n),
            onSymbolChanged: p,
            disabled: c,
            className: s()(u && x.hasTooltip),
          });
        }
      }
    },
    1861: (e, t, n) => {
      'use strict';
      n.d(t, { showSymbolSearchItemsDialog: () => i });
      var o = n(50959),
        r = n(962),
        s = n(50655),
        a = n(51826),
        l = n(98925);
      function i(e) {
        const {
          initialMode: t = 'symbolSearch',
          autofocus: n = !0,
          defaultValue: i,
          showSpreadActions: c,
          selectSearchOnInit: u,
          onSearchComplete: d,
          dialogTitle: p,
          placeholder: h,
          fullscreen: m,
          initialScreen: g,
          wrapper: v,
          dialog: b,
          contentItem: f,
          onClose: C,
          footer: y,
          symbolTypes: S,
          searchInput: E,
          emptyState: x,
          hideMarkedListFlag: _,
          dialogWidth: w = 'auto',
          manager: N,
        } = e;
        if (
          a.dialogsOpenerManager.isOpened('SymbolSearch') ||
          a.dialogsOpenerManager.isOpened('ChangeIntervalDialog')
        )
          return;
        const T = document.createElement('div'),
          I = o.createElement(
            s.SlotContext.Provider,
            { value: null != N ? N : null },
            o.createElement(l.SymbolSearchItemsDialog, {
              onClose: k,
              initialMode: t,
              defaultValue: i,
              showSpreadActions: c,
              hideMarkedListFlag: _,
              selectSearchOnInit: u,
              onSearchComplete: d,
              dialogTitle: p,
              placeholder: h,
              fullscreen: m,
              initialScreen: g,
              wrapper: v,
              dialog: b,
              contentItem: f,
              footer: y,
              symbolTypes: S,
              searchInput: E,
              emptyState: x,
              autofocus: n,
              dialogWidth: w,
            }),
          );
        function k() {
          r.unmountComponentAtNode(T),
            a.dialogsOpenerManager.setAsClosed('SymbolSearch'),
            C && C();
        }
        return (
          r.render(I, T),
          a.dialogsOpenerManager.setAsOpened('SymbolSearch'),
          { close: k }
        );
      }
    },
    73146: (e, t, n) => {
      'use strict';
      n.d(t, { createAdapter: () => s });
      var o = n(6250),
        r = n(89215);
      function s(e) {
        if ((0, o.isLineTool)(e))
          return {
            isPine: () => !1,
            isStandardPine: () => !1,
            canOverrideMinTick: () => !1,
            resolvedSymbolInfoBySymbol: () => {
              throw new TypeError('Only study is supported.');
            },
            symbolsResolved: () => {
              throw new TypeError('Only study is supported.');
            },
            parentSources: () => {
              throw new TypeError('Only study is supported.');
            },
            getAllChildren: () => [],
            sourceId: () => {
              throw new TypeError('Only study is supported.');
            },
            inputs: () => ({}),
            parentSourceForInput: () => {
              throw new TypeError('Only study is supported.');
            },
          };
        if ((0, r.isStudy)(e)) return e;
        if ('isInputsStudy' in e) return e;
        throw new TypeError('Unsupported source type.');
      }
    },
    45560: (e, t, n) => {
      'use strict';
      n.d(t, { useDefinitionProperty: () => s });
      var o = n(50959),
        r = n(71953);
      const s = (e) => {
        const t = 'property' in e ? e.property : void 0,
          n = 'defaultValue' in e ? e.defaultValue : e.property.value(),
          [s, a] = (0, o.useState)(t ? t.value() : n);
        (0, o.useEffect)(() => {
          if (t) {
            const n = {};
            return (
              a(t.value()),
              t.subscribe(n, (t) => {
                const n = t.value();
                e.handler && e.handler(n), a(n);
              }),
              () => t.unsubscribeAll(n)
            );
          }
          return () => {};
        }, [t]);
        return [
          s,
          (e) => {
            if (void 0 !== t) {
              const n = t.value();
              r.logger.logNormal(
                `Changing property value from "${n}" to "${e}"`,
              ),
                t.setValue(e);
            }
          },
        ];
      };
    },
    78260: (e, t, n) => {
      'use strict';
      n.d(t, { CellWrap: () => l });
      var o = n(50959),
        r = n(97754),
        s = n.n(r),
        a = n(7697);
      function l(e) {
        return o.createElement(
          'div',
          { className: s()(a.wrap, e.className) },
          e.children,
        );
      }
    },
    53424: (e, t, n) => {
      'use strict';
      n.d(t, { CheckableTitle: () => c });
      var o = n(50959),
        r = n(15294),
        s = n(45560);
      function a(e) {
        const { property: t, ...n } = e,
          [a, l] = (0, s.useDefinitionProperty)({ property: t }),
          i = 'mixed' === a;
        return o.createElement(r.Checkbox, {
          ...n,
          name: 'toggle-enabled',
          checked: i || a,
          indeterminate: i,
          onChange: function () {
            l('mixed' === a || !a);
          },
        });
      }
      var l = n(78260),
        i = n(6815);
      function c(e) {
        const { property: t, disabled: n, title: r, className: s, name: c } = e,
          u = o.createElement('span', { className: i.title }, r);
        return o.createElement(
          l.CellWrap,
          { className: s },
          t
            ? o.createElement(a, {
                name: c,
                className: i.checkbox,
                property: t,
                disabled: n,
                label: u,
                labelAlignBaseline: !0,
              })
            : u,
        );
      }
    },
    31356: (e, t, n) => {
      'use strict';
      n.d(t, { CommonSection: () => a });
      var o = n(50959),
        r = n(40296),
        s = n(53424);
      n(9896);
      function a(e) {
        const {
          id: t,
          offset: n,
          disabled: a,
          checked: l,
          title: i,
          children: c,
          solutionId: u,
        } = e;
        return o.createElement(
          r.PropertyTable.Row,
          null,
          o.createElement(
            r.PropertyTable.Cell,
            {
              placement: 'first',
              verticalAlign: 'adaptive',
              offset: n,
              'data-section-name': t,
              colSpan: Boolean(c) ? void 0 : 2,
              checkableTitle: !0,
            },
            o.createElement(s.CheckableTitle, {
              name: `is-enabled-${t}`,
              title: i,
              disabled: a,
              property: l,
            }),
            u && !Boolean(c) && !1,
          ),
          Boolean(c) &&
            o.createElement(
              r.PropertyTable.Cell,
              { placement: 'last', 'data-section-name': t },
              c,
              u && !1,
            ),
        );
      }
    },
    86067: (e, t, n) => {
      'use strict';
      n.d(t, { GroupTitleSection: () => l });
      var o = n(50959),
        r = n(40296),
        s = n(53424),
        a = n(93925);
      function l(e) {
        return o.createElement(
          r.PropertyTable.Row,
          null,
          o.createElement(
            r.PropertyTable.Cell,
            {
              className: a.titleWrap,
              placement: 'first',
              verticalAlign: 'adaptive',
              colSpan: 2,
              'data-section-name': e.name,
              checkableTitle: !0,
            },
            o.createElement(s.CheckableTitle, {
              title: e.title,
              name: `is-enabled-${e.name}`,
              className: a.title,
            }),
          ),
        );
      }
    },
    71953: (e, t, n) => {
      'use strict';
      n.d(t, { logger: () => o });
      const o = (0, n(98351).getLogger)('Platform.GUI.PropertyDefinitionTrace');
    },
    27797: (e, t, n) => {
      'use strict';
      n.d(t, {
        ColorPicker: () => M,
      });
      var o = n(50959),
        r = n(97754),
        s = n.n(r),
        a = n(44352),
        l = n(24377),
        i = n(50151),
        c = n(49483),
        u = n(50628),
        d = n(16396);
      const p = o.createContext(void 0);
      var h = n(6914),
        m = n(35149),
        g = n(61561);
      function v(e) {
        const { index: t, color: s, selected: l, onSelect: v } = e,
          [b, f] = (0, o.useState)(!1),
          C = (0, o.useContext)(p),
          y = (0, o.useRef)(null),
          S = Boolean(C) && !c.CheckMobile.any();
        return o.createElement(
          o.Fragment,
          null,
          o.createElement('div', {
            ref: y,
            style: s ? { color: s } : void 0,
            className: r(
              g.swatch,
              b && g.hover,
              l && g.selected,
              !s && g.empty,
              String(s).toLowerCase() === h.white && g.white,
            ),
            onClick: function () {
              v(s);
            },
            onContextMenu: S ? E : void 0,
          }),
          S &&
            o.createElement(
              u.PopupMenu,
              {
                isOpened: b,
                onClose: E,
                position: function () {
                  const e = (0, i.ensureNotNull)(
                    y.current,
                  ).getBoundingClientRect();
                  return { x: e.left, y: e.top + e.height + 4 };
                },
                onClickOutside: E,
              },
              o.createElement(d.PopupMenuItem, {
                className: g.contextItem,
                label: a.t(null, void 0, n(54336)),
                icon: m,
                onClick: function () {
                  E(), (0, i.ensureDefined)(C)(t);
                },
                dontClosePopup: !0,
              }),
            ),
        );
        function E() {
          f(!b);
        }
      }
      class b extends o.PureComponent {
        constructor() {
          super(...arguments),
            (this._onSelect = (e) => {
              const { onSelect: t } = this.props;
              t && t(e);
            });
        }
        render() {
          const { colors: e, color: t, children: n } = this.props;
          if (!e) return null;
          const r = t ? (0, l.parseRgb)(String(t)) : void 0;
          return o.createElement(
            'div',
            { className: g.swatches },
            e.map((e, t) =>
              o.createElement(v, {
                key: String(e) + t,
                index: t,
                color: e,
                selected:
                  r && (0, l.areEqualRgb)(r, (0, l.parseRgb)(String(e))),
                onSelect: this._onSelect,
              }),
            ),
            n,
          );
        }
      }
      var f = n(54368),
        C = n(94720);
      function y(e) {
        const t = `Invalid RGB color: ${e}`;
        if (null === e) throw new Error(t);
        const n = e.match(/^#?([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i);
        if (null === n) throw new Error(t);
        const [, o, r, s] = n;
        if (!o || !r || !s) throw new Error(t);
        const a = parseInt(o, 16) / 255,
          l = parseInt(r, 16) / 255,
          i = parseInt(s, 16) / 255,
          c = Math.max(a, l, i),
          u = Math.min(a, l, i);
        let d;
        const p = c,
          h = c - u,
          m = 0 === c ? 0 : h / c;
        if (c === u) d = 0;
        else {
          switch (c) {
            case a:
              d = (l - i) / h + (l < i ? 6 : 0);
              break;
            case l:
              d = (i - a) / h + 2;
              break;
            case i:
              d = (a - l) / h + 4;
              break;
            default:
              d = 0;
          }
          d /= 6;
        }
        return { h: d, s: m, v: p };
      }
      var S = n(43370),
        E = n(53766);
      class x extends o.PureComponent {
        constructor() {
          super(...arguments),
            (this._container = null),
            (this._refContainer = (e) => {
              this._container = e;
            }),
            (this._handlePosition = (e) => {
              const {
                hsv: { h: t },
                onChange: n,
              } = this.props;
              if (!n) return;
              const o = (0, i.ensureNotNull)(
                  this._container,
                ).getBoundingClientRect(),
                r = e.clientX - o.left,
                s = e.clientY - o.top;
              let a = r / o.width;
              a < 0 ? (a = 0) : a > 1 && (a = 1);
              let l = 1 - s / o.height;
              l < 0 ? (l = 0) : l > 1 && (l = 1), n({ h: t, s: a, v: l });
            }),
            (this._mouseDown = (e) => {
              window.addEventListener('mouseup', this._mouseUp),
                window.addEventListener('mousemove', this._mouseMove);
            }),
            (this._mouseUp = (e) => {
              window.removeEventListener('mousemove', this._mouseMove),
                window.removeEventListener('mouseup', this._mouseUp),
                this._handlePosition(e);
            }),
            (this._mouseMove = (0, S.default)(this._handlePosition, 100)),
            (this._handleTouch = (e) => {
              this._handlePosition(e.nativeEvent.touches[0]);
            });
        }
        render() {
          const {
              className: e,
              hsv: { h: t, s: n, v: r },
            } = this.props,
            a = `hsl(${360 * t}, 100%, 50%)`;
          return o.createElement(
            'div',
            {
              className: s()(E.saturation, e),
              style: { backgroundColor: a },
              ref: this._refContainer,
              onMouseDown: this._mouseDown,
              onTouchStart: this._handleTouch,
              onTouchMove: this._handleTouch,
            },
            o.createElement('div', {
              className: E.pointer,
              style: { left: 100 * n + '%', top: 100 * (1 - r) + '%' },
            }),
          );
        }
      }
      var _ = n(92155);
      class w extends o.PureComponent {
        constructor() {
          super(...arguments),
            (this._container = null),
            (this._refContainer = (e) => {
              this._container = e;
            }),
            (this._handlePosition = (e) => {
              const {
                hsv: { s: t, v: n },
                onChange: o,
              } = this.props;
              if (!o) return;
              const r = (0, i.ensureNotNull)(
                this._container,
              ).getBoundingClientRect();
              let s = (e.clientY - r.top) / r.height;
              s < 0 ? (s = 0) : s > 1 && (s = 1), o({ h: s, s: t, v: n });
            }),
            (this._mouseDown = (e) => {
              window.addEventListener('mouseup', this._mouseUp),
                window.addEventListener('mousemove', this._mouseMove);
            }),
            (this._mouseUp = (e) => {
              window.removeEventListener('mousemove', this._mouseMove),
                window.removeEventListener('mouseup', this._mouseUp),
                this._handlePosition(e);
            }),
            (this._mouseMove = (0, S.default)(this._handlePosition, 100)),
            (this._handleTouch = (e) => {
              this._handlePosition(e.nativeEvent.touches[0]);
            });
        }
        render() {
          const {
            className: e,
            hsv: { h: t },
          } = this.props;
          return o.createElement(
            'div',
            { className: s()(_.hue, e) },
            o.createElement(
              'div',
              {
                className: _.pointerContainer,
                ref: this._refContainer,
                onMouseDown: this._mouseDown,
                onTouchStart: this._handleTouch,
                onTouchMove: this._handleTouch,
              },
              o.createElement('div', {
                className: _.pointer,
                style: { top: 100 * t + '%' },
              }),
            ),
          );
        }
      }
      var N = n(66454);
      const T = '#000000',
        I = a.t(null, { context: 'Color Picker' }, n(40276));
      class k extends o.PureComponent {
        constructor(e) {
          super(e),
            (this._handleHSV = (e) => {
              const t =
                (function (e) {
                  const { h: t, s: n, v: o } = e;
                  let r, s, a;
                  const l = Math.floor(6 * t),
                    i = 6 * t - l,
                    c = o * (1 - n),
                    u = o * (1 - i * n),
                    d = o * (1 - (1 - i) * n);
                  switch (l % 6) {
                    case 0:
                      (r = o), (s = d), (a = c);
                      break;
                    case 1:
                      (r = u), (s = o), (a = c);
                      break;
                    case 2:
                      (r = c), (s = o), (a = d);
                      break;
                    case 3:
                      (r = c), (s = u), (a = o);
                      break;
                    case 4:
                      (r = d), (s = c), (a = o);
                      break;
                    case 5:
                      (r = o), (s = c), (a = u);
                      break;
                    default:
                      (r = 0), (s = 0), (a = 0);
                  }
                  return (
                    '#' +
                    [255 * r, 255 * s, 255 * a]
                      .map((e) =>
                        ('0' + Math.round(e).toString(16)).replace(
                          /.+?([a-f0-9]{2})$/i,
                          '$1',
                        ),
                      )
                      .join('')
                  );
                })(e) || T;
              this.setState({
                color: t,
                inputColor: t.replace(/^#/, ''),
                hsv: e,
              }),
                this.props.onSelect(t);
            }),
            (this._handleInput = (e) => {
              const t = e.currentTarget.value;
              try {
                const e = y(t),
                  n = `#${t}`;
                this.setState({ color: n, inputColor: t, hsv: e }),
                  this.props.onSelect(n);
              } catch (e) {
                this.setState({ inputColor: t });
              }
            }),
            (this._handleAddColor = () => this.props.onAdd(this.state.color));
          const t = e.color || T;
          this.state = { color: t, inputColor: t.replace(/^#/, ''), hsv: y(t) };
        }
        render() {
          const { color: e, hsv: t, inputColor: n } = this.state;
          return o.createElement(
            'div',
            { className: N.container },
            o.createElement(
              'div',
              { className: N.form },
              o.createElement('div', {
                className: N.swatch,
                style: { backgroundColor: e },
              }),
              o.createElement(
                'div',
                { className: N.inputWrap },
                o.createElement('span', { className: N.inputHash }, '#'),
                o.createElement('input', {
                  type: 'text',
                  className: N.input,
                  value: n,
                  onChange: this._handleInput,
                }),
              ),
              o.createElement(
                'div',
                { className: N.buttonWrap },
                o.createElement(
                  C.Button,
                  { size: 's', onClick: this._handleAddColor },
                  I,
                ),
              ),
            ),
            o.createElement(
              'div',
              { className: N.hueSaturationWrap },
              o.createElement(x, {
                className: N.saturation,
                hsv: t,
                onChange: this._handleHSV,
              }),
              o.createElement(w, {
                className: N.hue,
                hsv: t,
                onChange: this._handleHSV,
              }),
            ),
          );
        }
      }
      var P = n(80072);
      const R = a.t(null, { context: 'Color Picker' }, n(53585)),
        B = a.t(null, { context: 'Color Picker' }, n(81865));
      class M extends o.PureComponent {
        constructor(e) {
          super(e),
            (this._handleAddColor = (e) => {
              this.setState({ isCustom: !1 }), this._onToggleCustom(!1);
              const { onAddColor: t } = this.props;
              t && t(e);
            }),
            (this._handleSelectColor = (e) => {
              const { onColorChange: t } = this.props,
                { isCustom: n } = this.state;
              t && t(e, n);
            }),
            (this._handleCustomClick = () => {
              this.setState({ isCustom: !0 }), this._onToggleCustom(!0);
            }),
            (this._handleOpacity = (e) => {
              const { onOpacityChange: t } = this.props;
              t && t(e);
            }),
            (this.state = { isCustom: !1 });
        }
        componentDidUpdate(e, t) {
          e.selectOpacity !== this.props.selectOpacity &&
            this.props.menu &&
            this.props.menu.update();
        }
        render() {
          const {
              color: e,
              opacity: t,
              selectCustom: n,
              selectOpacity: r,
              customColors: a,
              onRemoveCustomColor: l,
            } = this.props,
            { isCustom: i } = this.state,
            c = 'number' == typeof t ? t : 1;
          return i
            ? o.createElement(k, {
                color: e,
                onSelect: this._handleSelectColor,
                onAdd: this._handleAddColor,
              })
            : o.createElement(
                'div',
                { className: P.container },
                o.createElement(b, {
                  colors: h.basic,
                  color: e,
                  onSelect: this._handleSelectColor,
                }),
                o.createElement(b, {
                  colors: h.extended,
                  color: e,
                  onSelect: this._handleSelectColor,
                }),
                o.createElement('div', { className: P.separator }),
                o.createElement(
                  p.Provider,
                  { value: l },
                  o.createElement(
                    b,
                    { colors: a, color: e, onSelect: this._handleSelectColor },
                    n &&
                      o.createElement('div', {
                        className: s()(P.customButton, 'apply-common-tooltip'),
                        onClick: this._handleCustomClick,
                        title: R,
                      }),
                  ),
                ),
                r &&
                  o.createElement(
                    o.Fragment,
                    null,
                    o.createElement('div', { className: P.sectionTitle }, B),
                    o.createElement(f.Opacity, {
                      color: e,
                      opacity: c,
                      onChange: this._handleOpacity,
                    }),
                  ),
              );
        }
        _onToggleCustom(e) {
          const { onToggleCustom: t } = this.props;
          t && t(e);
        }
      }
    },
    54368: (e, t, n) => {
      'use strict';
      n.d(t, { Opacity: () => i });
      var o = n(50959),
        r = n(97754),
        s = n(50151),
        a = n(91031),
        l = n(1034);
      class i extends o.PureComponent {
        constructor(e) {
          super(e),
            (this._container = null),
            (this._pointer = null),
            (this._raf = null),
            (this._refContainer = (e) => {
              this._container = e;
            }),
            (this._refPointer = (e) => {
              this._pointer = e;
            }),
            (this._handlePosition = (e) => {
              null === this._raf &&
                (this._raf = requestAnimationFrame(() => {
                  const t = (0, s.ensureNotNull)(this._container),
                    n = (0, s.ensureNotNull)(this._pointer),
                    o = t.getBoundingClientRect(),
                    r = n.offsetWidth,
                    l = e.clientX - r / 2 - o.left,
                    i = (0, a.clamp)(l / (o.width - r), 0, 1);
                  this.setState({
                    inputOpacity: Math.round(100 * i).toString(),
                  }),
                    this.props.onChange(i),
                    (this._raf = null);
                }));
            }),
            (this._onSliderClick = (e) => {
              this._handlePosition(e.nativeEvent), this._dragSubscribe();
            }),
            (this._mouseUp = (e) => {
              this.setState({ isPointerDragged: !1 }),
                this._dragUnsubscribe(),
                this._handlePosition(e);
            }),
            (this._mouseMove = (e) => {
              this.setState({ isPointerDragged: !0 }), this._handlePosition(e);
            }),
            (this._onTouchStart = (e) => {
              this._handlePosition(e.nativeEvent.touches[0]);
            }),
            (this._handleTouch = (e) => {
              this.setState({ isPointerDragged: !0 }),
                this._handlePosition(e.nativeEvent.touches[0]);
            }),
            (this._handleTouchEnd = () => {
              this.setState({ isPointerDragged: !1 });
            }),
            (this._handleInput = (e) => {
              const t = e.currentTarget.value,
                n = Number(t) / 100;
              this.setState({ inputOpacity: t }),
                Number.isNaN(n) || n > 1 || this.props.onChange(n);
            }),
            (this.state = {
              inputOpacity: Math.round(100 * e.opacity).toString(),
              isPointerDragged: !1,
            });
        }
        componentWillUnmount() {
          null !== this._raf &&
            (cancelAnimationFrame(this._raf), (this._raf = null)),
            this._dragUnsubscribe();
        }
        render() {
          const { color: e, opacity: t, hideInput: n } = this.props,
            { inputOpacity: s, isPointerDragged: a } = this.state,
            i = { color: e || void 0 };
          return o.createElement(
            'div',
            { className: l.opacity },
            o.createElement(
              'div',
              {
                className: l.opacitySlider,
                style: i,
                ref: this._refContainer,
                onMouseDown: this._onSliderClick,
                onTouchStart: this._onTouchStart,
                onTouchMove: this._handleTouch,
                onTouchEnd: this._handleTouchEnd,
              },
              o.createElement('div', {
                className: l.opacitySliderGradient,
                style: {
                  backgroundImage: `linear-gradient(90deg, transparent, ${e})`,
                },
              }),
              o.createElement(
                'div',
                { className: l.opacityPointerWrap },
                o.createElement('div', {
                  className: r(l.pointer, a && l.dragged),
                  style: { left: 100 * t + '%' },
                  ref: this._refPointer,
                }),
              ),
            ),
            !n &&
              o.createElement(
                'div',
                { className: l.opacityInputWrap },
                o.createElement('input', {
                  type: 'text',
                  className: l.opacityInput,
                  value: s,
                  onChange: this._handleInput,
                }),
                o.createElement(
                  'span',
                  { className: l.opacityInputPercent },
                  '%',
                ),
              ),
          );
        }
        _dragSubscribe() {
          const e = (0, s.ensureNotNull)(this._container).ownerDocument;
          e &&
            (e.addEventListener('mouseup', this._mouseUp),
            e.addEventListener('mousemove', this._mouseMove));
        }
        _dragUnsubscribe() {
          const e = (0, s.ensureNotNull)(this._container).ownerDocument;
          e &&
            (e.removeEventListener('mousemove', this._mouseMove),
            e.removeEventListener('mouseup', this._mouseUp));
        }
      }
    },
    6914: (e, t, n) => {
      'use strict';
      n.d(t, { white: () => r, basic: () => l, extended: () => c });
      var o = n(7394);
      const r = o.colorsPalette['color-white'],
        s = [
          'ripe-red',
          'tan-orange',
          'banana-yellow',
          'iguana-green',
          'minty-green',
          'sky-blue',
          'tv-blue',
          'deep-blue',
          'grapes-purple',
          'berry-pink',
        ],
        a = [200, 300, 400, 500, 600, 700, 800, 900].map(
          (e) => `color-cold-gray-${e}`,
        );
      a.unshift('color-white'),
        a.push('color-black'),
        s.forEach((e) => {
          a.push(`color-${e}-500`);
        });
      const l = a.map((e) => o.colorsPalette[e]),
        i = [];
      [100, 200, 300, 400, 700, 900].forEach((e) => {
        s.forEach((t) => {
          i.push(`color-${t}-${e}`);
        });
      });
      const c = i.map((e) => o.colorsPalette[e]);
    },
    46059: (e, t, n) => {
      'use strict';
      n.d(t, { ControlDisclosureView: () => E });
      var o = n(50959),
        r = n(97754),
        s = n.n(r),
        a = n(38528),
        l = n(67029),
        i = n(78274),
        c = n(50628),
        u = n(50151);
      const d = { x: 0, y: 0 };
      function p(e, t, n) {
        return (0, o.useCallback)(
          () =>
            (function (e, t, { x: n = d.x, y: o = d.y } = d) {
              const r = (0, u.ensureNotNull)(e).getBoundingClientRect(),
                s = {
                  x: r.left + n,
                  y: r.top + r.height + o,
                  indentFromWindow: { top: 4, bottom: 4, left: 4, right: 4 },
                };
              return t && (s.overrideWidth = r.width), s;
            })(e.current, t, n),
          [e, t],
        );
      }
      const h = JSON.parse('{"size-header-height":"64px"}'),
        m = parseInt(h['size-header-height']);
      function g(e) {
        const {
            button: t,
            popupChildren: n,
            buttonRef: r,
            listboxId: s,
            listboxClassName: a,
            listboxTabIndex: l,
            matchButtonAndListboxWidths: i,
            isOpened: u,
            scrollWrapReference: d,
            listboxReference: h,
            onClose: g,
            onOpen: v,
            onListboxFocus: b,
            onListboxBlur: f,
            onListboxKeyDown: C,
            listboxAria: y,
            repositionOnScroll: S = !0,
            closeOnHeaderOverlap: E = !1,
            popupPositionCorrection: x = { x: 0, y: 0 },
            popupPosition: _,
          } = e,
          w = p(r, i, x),
          N = E ? m : 0;
        return o.createElement(
          o.Fragment,
          null,
          t,
          o.createElement(
            c.PopupMenu,
            {
              ...y,
              id: s,
              className: a,
              tabIndex: l,
              isOpened: u,
              position: _ || w,
              repositionOnScroll: S,
              onClose: g,
              onOpen: v,
              doNotCloseOn: r.current,
              reference: h,
              scrollWrapReference: d,
              onFocus: b,
              onBlur: f,
              onKeyDown: C,
              closeOnScrollOutsideOffset: N,
            },
            n,
          ),
        );
      }
      var v = n(9745),
        b = n(64912),
        f = n(94727);
      function C(e) {
        const { isDropped: t } = e;
        return o.createElement(v.Icon, {
          className: s()(f.icon, t && f.dropped),
          icon: b,
        });
      }
      function y(e) {
        const { className: t, disabled: n, isDropped: r } = e;
        return o.createElement(
          'span',
          { className: s()(f.button, n && f.disabled, t) },
          o.createElement(C, { isDropped: r }),
        );
      }
      var S = n(24009);
      const E = o.forwardRef((e, t) => {
        const {
            listboxId: n,
            className: r,
            listboxClassName: c,
            listboxTabIndex: u,
            hideArrowButton: d,
            matchButtonAndListboxWidths: p,
            popupPosition: h,
            disabled: m,
            isOpened: v,
            scrollWrapReference: b,
            repositionOnScroll: f,
            closeOnHeaderOverlap: C,
            listboxReference: E,
            size: x = 'medium',
            onClose: _,
            onOpen: w,
            onListboxFocus: N,
            onListboxBlur: T,
            onListboxKeyDown: I,
            buttonChildren: k,
            children: P,
            caretClassName: R,
            listboxAria: B,
            ...M
          } = e,
          O = (0, o.useRef)(null),
          D =
            !d &&
            o.createElement(
              i.EndSlot,
              null,
              o.createElement(y, { isDropped: v, disabled: m, className: R }),
            );
        return o.createElement(g, {
          buttonRef: O,
          listboxId: n,
          listboxClassName: c,
          listboxTabIndex: u,
          isOpened: v,
          onClose: _,
          onOpen: w,
          listboxReference: E,
          scrollWrapReference: b,
          onListboxFocus: N,
          onListboxBlur: T,
          onListboxKeyDown: I,
          listboxAria: B,
          matchButtonAndListboxWidths: p,
          popupPosition: h,
          button: o.createElement(l.ControlSkeleton, {
            ...M,
            'data-role': 'listbox',
            disabled: m,
            className: s()(S.button, r),
            size: x,
            ref: (0, a.useMergedRefs)([O, t]),
            middleSlot: o.createElement(
              i.MiddleSlot,
              null,
              o.createElement(
                'span',
                { className: s()(S['button-children'], d && S.hiddenArrow) },
                k,
              ),
            ),
            endSlot: D,
          }),
          popupChildren: P,
          repositionOnScroll: f,
          closeOnHeaderOverlap: C,
        });
      });
      E.displayName = 'ControlDisclosureView';
    },
    26597: (e, t, n) => {
      'use strict';
      n.d(t, {
        useKeyboardActionHandler: () => o.useKeyboardActionHandler,
        useKeyboardClose: () => o.useKeyboardClose,
        useKeyboardEventHandler: () => o.useKeyboardEventHandler,
        useKeyboardOpen: () => o.useKeyboardOpen,
        useKeyboardToggle: () => o.useKeyboardToggle,
      });
      var o = n(66686);
    },
    56512: (e, t, n) => {
      'use strict';
      n.d(t, { useCustomColors: () => i });
      var o = n(50959),
        r = n(56840),
        s = n(76422);
      function a(e, t) {
        (0, o.useEffect)(
          () => (
            s.subscribe(e, t, null),
            () => {
              s.unsubscribe(e, t, null);
            }
          ),
          [e, t],
        );
      }
      var l = n(24377);
      function i() {
        const [e, t] = (0, o.useState)(
          (0, r.getJSON)('pickerCustomColors', []),
        );
        a('add_new_custom_color', (n) => t(c(n, e))),
          a('remove_custom_color', (n) => t(u(n, e)));
        const n = (0, o.useCallback)(
            (t) => {
              const n = t ? (0, l.parseRgb)(t) : null;
              e.some(
                (e) =>
                  null !== e &&
                  null !== n &&
                  (0, l.areEqualRgb)((0, l.parseRgb)(e), n),
              ) ||
                (s.emit('add_new_custom_color', t),
                (0, r.setJSON)('pickerCustomColors', c(t, e)));
            },
            [e],
          ),
          i = (0, o.useCallback)(
            (t) => {
              (t >= 0 || t < e.length) &&
                (s.emit('remove_custom_color', t),
                (0, r.setJSON)('pickerCustomColors', u(t, e)));
            },
            [e],
          );
        return [e, n, i];
      }
      function c(e, t) {
        const n = t.slice();
        return n.push(e), n.length > 29 && n.shift(), n;
      }
      function u(e, t) {
        return t.filter((t, n) => e !== n);
      }
    },
    75690: (e, t, n) => {
      'use strict';
      n.d(t, { Select: () => T });
      var o = n(50959),
        r = n(22064),
        s = n(38528),
        a = n(50151),
        l = n(74991);
      const i = { duration: 200, additionalScroll: 0 },
        c = {
          vertical: {
            scrollSize: 'scrollHeight',
            clientSize: 'clientHeight',
            start: 'top',
            end: 'bottom',
            size: 'height',
          },
          horizontal: {
            scrollSize: 'scrollWidth',
            clientSize: 'clientWidth',
            start: 'left',
            end: 'right',
            size: 'width',
          },
        };
      function u(e, t) {
        const n = c[e];
        return t[n.scrollSize] > t[n.clientSize];
      }
      function d(e, t, n, o, r, s) {
        const a = (function (e, t, n, o = 0) {
          const r = c[e];
          return {
            start: -1 * o,
            middle:
              -1 * (Math.floor(n[r.size] / 2) - Math.floor(t[r.size] / 2)),
            end: -1 * (n[r.size] - t[r.size]) + o,
          };
        })(e, o, r, s.additionalScroll);
        let i = 0;
        if (
          (function (e, t, n) {
            const o = c[e];
            return (
              t[o.start] < n[o.start] - n[o.size] / 2 ||
              t[o.end] > n[o.end] + n[o.size] / 2
            );
          })(e, o, r)
        )
          i = a.middle;
        else {
          const t = (function (e, t, n, o = 0) {
              const r = c[e],
                s = t[r.start] + Math.floor(t[r.size] / 2),
                a = n[r.start] + Math.floor(n[r.size] / 2);
              return {
                start: t[r.start] - n[r.start] - o,
                middle: s - a,
                end: t[r.end] - n[r.end] + o,
              };
            })(e, o, r, s.additionalScroll),
            n = (function (e) {
              const { start: t, middle: n, end: o } = e,
                r = new Map([
                  [Math.abs(t), { key: 'start', value: Math.sign(t) }],
                  [Math.abs(n), { key: 'middle', value: Math.sign(n) }],
                  [Math.abs(o), { key: 'end', value: Math.sign(o) }],
                ]),
                s = Math.min(...r.keys());
              return r.get(s);
            })(t);
          i = void 0 !== n ? a[n.key] : 0;
        }
        return (function (e) {
          const {
            additionalScroll: t = 0,
            duration: n = l.dur,
            func: o = l.easingFunc.easeInOutCubic,
            onScrollEnd: r,
            target: s,
            wrap: a,
            direction: i = 'vertical',
          } = e;
          let { targetRect: c, wrapRect: u } = e;
          (c = null != c ? c : s.getBoundingClientRect()),
            (u = null != u ? u : a.getBoundingClientRect());
          const d = ('vertical' === i ? c.top - u.top : c.left - u.left) + t,
            p = 'vertical' === i ? 'scrollTop' : 'scrollLeft',
            h = a ? a[p] : 0;
          let m,
            g = 0;
          return (
            (g = window.requestAnimationFrame(function e(t) {
              let s;
              if ((m ? (s = t - m) : ((s = 0), (m = t)), s >= n))
                return (a[p] = h + d), void (r && r());
              const l = h + d * o(s / n);
              (a[p] = Math.floor(l)), (g = window.requestAnimationFrame(e));
            })),
            function () {
              window.cancelAnimationFrame(g), r && r();
            }
          );
        })({
          ...s,
          target: t,
          targetRect: o,
          wrap: n,
          wrapRect: r,
          additionalScroll: i,
          direction: e,
        });
      }
      class p {
        constructor(e = null) {
          (this._container = null),
            (this._lastScrolledElement = null),
            (this._stopVerticalScroll = null),
            (this._stopHorizontalScroll = null),
            (this._container = e);
        }
        scrollTo(e, t = i) {
          if (
            null !== this._container &&
            null !== e &&
            !(function (e, t) {
              const n = e.getBoundingClientRect(),
                o = t.getBoundingClientRect();
              return (
                n.top >= o.top &&
                n.bottom <= o.bottom &&
                n.left >= o.left &&
                n.right <= o.right
              );
            })(e, this._container)
          ) {
            const n = e.getBoundingClientRect(),
              o = this._container.getBoundingClientRect();
            this.stopScroll(),
              u('vertical', this._container) &&
                (this._stopVerticalScroll = d(
                  'vertical',
                  e,
                  this._container,
                  n,
                  o,
                  this._modifyOptions('vertical', t),
                )),
              u('horizontal', this._container) &&
                (this._stopHorizontalScroll = d(
                  'horizontal',
                  e,
                  this._container,
                  n,
                  o,
                  this._modifyOptions('horizontal', t),
                ));
          }
          this._lastScrolledElement = e;
        }
        scrollToLastElement(e) {
          this.scrollTo(this._lastScrolledElement, e);
        }
        stopScroll() {
          null !== this._stopVerticalScroll && this._stopVerticalScroll(),
            null !== this._stopHorizontalScroll && this._stopHorizontalScroll();
        }
        getContainer() {
          return this._container;
        }
        setContainer(e) {
          var t;
          (this._container = e),
            (null === (t = this._container) || void 0 === t
              ? void 0
              : t.contains(this._lastScrolledElement)) ||
              (this._lastScrolledElement = null);
        }
        destroy() {
          this.stopScroll(),
            (this._container = null),
            (this._lastScrolledElement = null);
        }
        _handleScrollEnd(e) {
          'vertical' === e
            ? (this._stopVerticalScroll = null)
            : (this._stopHorizontalScroll = null);
        }
        _modifyOptions(e, t) {
          return Object.assign({}, t, {
            onScrollEnd: () => {
              this._handleScrollEnd(e),
                void 0 !== t.onScrollEnd && t.onScrollEnd();
            },
          });
        }
      }
      function h(e = {}) {
        const { activeItem: t, getKey: n, ...r } = e,
          s = (0, o.useRef)(null),
          l = (0, o.useRef)(new Map()),
          i = (function (e) {
            const t = (0, o.useRef)(null);
            return (
              (0, o.useEffect)(
                () => (
                  (t.current = new p(e)),
                  () => (0, a.ensureNotNull)(t.current).destroy()
                ),
                [],
              ),
              t
            );
          })(s.current),
          c = (0, o.useCallback)(() => {
            null !== i.current &&
              null !== s.current &&
              i.current.getContainer() !== s.current &&
              i.current.setContainer(s.current);
          }, [i, s]),
          u = (0, o.useCallback)(
            (e) => {
              s.current = e;
            },
            [s],
          ),
          d = (0, o.useCallback)(
            (e, t) => {
              const o = n ? n(e) : e;
              t ? l.current.set(o, t) : l.current.delete(o);
            },
            [l, n],
          ),
          h = (0, o.useCallback)(
            (e, t) => {
              if (!e) return;
              const o = n ? n(e) : e,
                r = l.current.get(o);
              r && (c(), (0, a.ensureNotNull)(i.current).scrollTo(r, t));
            },
            [l, i, n],
          );
        return (0, o.useEffect)(() => h(t, r), [h, t]), [u, d, h];
      }
      var m = n(16396),
        g = n(4889),
        v = n(43370);
      var b = n(66686);
      function f(e, t) {
        return e >= 0 ? e % t : (t - (Math.abs(e) % t)) % t;
      }
      var C = n(26597),
        y = n(46059),
        S = n(9147),
        E = n(80142),
        x = n(39033);
      function _(e) {
        return !e.readonly;
      }
      function w(e, t) {
        var n;
        return null !== (n = null == t ? void 0 : t.id) && void 0 !== n
          ? n
          : (0, r.createDomId)(e, 'item', null == t ? void 0 : t.value);
      }
      function N(e) {
        var t, n;
        const { selectedItem: r, placeholder: s } = e;
        if (!r) return o.createElement('span', { className: x.placeholder }, s);
        const a =
          null !==
            (n =
              null !== (t = r.selectedContent) && void 0 !== t
                ? t
                : r.content) && void 0 !== n
            ? n
            : r.value;
        return o.createElement('span', null, a);
      }
      const T = o.forwardRef((e, t) => {
        const {
          id: n,
          menuClassName: a,
          menuItemClassName: l,
          tabIndex: i,
          disabled: c,
          highlight: u,
          intent: d,
          hideArrowButton: p,
          placeholder: x,
          addPlaceholderToItems: T = !0,
          value: I,
          'aria-labelledby': k,
          onFocus: P,
          onBlur: R,
          onClick: B,
          onChange: M,
          onKeyDown: O,
          repositionOnScroll: D = !0,
          openMenuOnEnter: A = !0,
          ...V
        } = e;
        let { items: F } = e;
        if (x && T) {
          F = [
            {
              value: void 0,
              content: x,
              id: (0, r.createDomId)(n, 'placeholder'),
            },
            ...F,
          ];
        }
        const {
            listboxId: z,
            isOpened: W,
            isFocused: K,
            buttonTabIndex: L,
            listboxTabIndex: j,
            highlight: H,
            intent: U,
            open: Y,
            onOpen: G,
            close: $,
            toggle: Q,
            buttonFocusBindings: q,
            onButtonClick: Z,
            buttonRef: X,
            listboxRef: J,
            buttonAria: ee,
          } = (0, S.useControlDisclosure)({
            id: n,
            disabled: c,
            buttonTabIndex: i,
            intent: d,
            highlight: u,
            onFocus: P,
            onBlur: R,
            onClick: B,
          }),
          te = F.filter(_),
          ne = te.find((e) => e.value === I),
          [oe, re, se] = h({ activeItem: ne }),
          ae = (0, r.joinDomIds)(k, n),
          le = ae.length > 0 ? ae : void 0,
          ie = (0, o.useMemo)(
            () => ({
              role: 'listbox',
              'aria-labelledby': k,
              'aria-activedescendant': w(n, ne),
            }),
            [k, ne],
          ),
          ce = (0, o.useCallback)((e) => e.value === I, [I]),
          ue = (0, o.useCallback)((e) => M && M(e.value), [M]),
          de = (function (e, t, n, r, s, a = {}, l) {
            const i = (0, o.useCallback)(
                (e) => {
                  const o = t.findIndex(n);
                  if (o === t.length - 1 && !s)
                    return void (
                      (null == l ? void 0 : l.onFailNext) && l.onFailNext(e)
                    );
                  const a = f(o + 1, t.length);
                  r && r(t[a], 'next');
                },
                [t, n, r, s],
              ),
              c = (0, o.useCallback)(
                (e) => {
                  const o = t.findIndex(n);
                  if (0 === o && !s)
                    return void (
                      (null == l ? void 0 : l.onFailPrev) && l.onFailPrev(e)
                    );
                  const a = f(o - 1, t.length);
                  r && r(t[a], 'previous');
                },
                [t, n, r, s],
              ),
              u = (0, o.useCallback)(() => {
                r && r(t[0], 'first');
              }, [r, t]),
              d = (0, o.useCallback)(() => {
                r && r(t[t.length - 1], 'last');
              }, [r, t]),
              p = (0, o.useMemo)(
                () =>
                  ((e) => ({
                    next: [40, () => (e() ? 37 : 39)],
                    previous: [38, () => (e() ? 39 : 37)],
                    first: [33, 36],
                    last: [34, 35],
                  }))(e),
                [e],
              ),
              {
                next: h = p.next,
                previous: m = p.previous,
                first: g = p.first,
                last: v = p.last,
              } = a;
            return (0, b.useComposedKeyboardActionHandlers)(
              (0, b.useKeyboardActionHandler)(h, i),
              (0, b.useKeyboardActionHandler)(m, c),
              (0, b.useKeyboardActionHandler)(g, u),
              (0, b.useKeyboardActionHandler)(v, d),
            );
          })(E.isRtl, te, ce, ue, !1, { next: [40], previous: [38] }),
          pe = (0, C.useKeyboardToggle)(Q, W || A),
          he = (0, C.useKeyboardClose)(W, $),
          me = (0, C.useKeyboardOpen)(W, Y),
          ge = (0, C.useKeyboardEventHandler)([pe, he, me]),
          ve = (0, C.useKeyboardEventHandler)([de, pe, he]),
          be = (function (e) {
            const t = (0, o.useRef)(''),
              n = (0, o.useMemo)(
                () =>
                  (0, g.default)(() => {
                    t.current = '';
                  }, 500),
                [],
              ),
              r = (0, o.useMemo)(() => (0, v.default)(e, 200), [e]);
            return (0, o.useCallback)(
              (e) => {
                e.key.length > 0 &&
                  e.key.length < 3 &&
                  ((t.current += e.key), r(t.current, e), n());
              },
              [n, r],
            );
          })((t, n) => {
            const o = (function (e, t, n) {
              return e.find((e) => {
                var o;
                const r = t.toLowerCase();
                return (
                  !e.readonly &&
                  (n
                    ? n(e).toLowerCase().startsWith(r)
                    : !e.readonly &&
                      (('string' == typeof e.content &&
                        e.content.toLowerCase().startsWith(r)) ||
                        ('string' == typeof e.textContent &&
                          e.textContent.toLowerCase().startsWith(r)) ||
                        String(null !== (o = e.value) && void 0 !== o ? o : '')
                          .toLowerCase()
                          .startsWith(r)))
                );
              });
            })(te, t, e.getSearchKey);
            void 0 !== o && M && (n.stopPropagation(), W || Y(), M(o.value));
          });
        return o.createElement(
          y.ControlDisclosureView,
          {
            ...V,
            ...ee,
            ...q,
            id: n,
            role: 'button',
            tabIndex: L,
            'aria-owns': ee['aria-controls'],
            'aria-haspopup': 'listbox',
            'aria-labelledby': le,
            disabled: c,
            hideArrowButton: p,
            isFocused: K,
            isOpened: W,
            highlight: H,
            intent: U,
            ref: (0, s.useMergedRefs)([X, t]),
            onClick: Z,
            onOpen: function () {
              se(ne, { duration: 0 }), G();
            },
            onClose: $,
            onKeyDown: function (e) {
              ge(e), O && O(e);
              e.defaultPrevented || be(e);
            },
            listboxId: z,
            listboxTabIndex: j,
            listboxClassName: a,
            listboxAria: ie,
            listboxReference: J,
            scrollWrapReference: oe,
            onListboxKeyDown: function (e) {
              ve(e), e.defaultPrevented || be(e);
            },
            buttonChildren: o.createElement(N, {
              selectedItem: ne,
              placeholder: x,
            }),
            repositionOnScroll: D,
          },
          F.map((e, t) => {
            var r;
            if (e.readonly)
              return o.createElement(
                o.Fragment,
                { key: `readonly_item_${t}` },
                e.content,
              );
            const s = w(n, e);
            return o.createElement(m.PopupMenuItem, {
              key: s,
              id: s,
              className: l,
              role: 'option',
              'aria-selected': I === e.value,
              isActive: I === e.value,
              label: null !== (r = e.content) && void 0 !== r ? r : e.value,
              onClick: fe,
              onClickArg: e.value,
              isDisabled: e.disabled,
              reference: (t) => re(e, t),
            });
          }),
        );
        function fe(e) {
          M && M(e);
        }
      });
      T.displayName = 'Select';
    },
    86656: (e, t, n) => {
      'use strict';
      n.d(t, { TouchScrollContainer: () => l });
      var o = n(50959),
        r = n(59142),
        s = n(50151),
        a = n(49483);
      const l = (0, o.forwardRef)((e, t) => {
        const { children: n, ...s } = e,
          l = (0, o.useRef)(null);
        return (
          (0, o.useImperativeHandle)(t, () => l.current),
          (0, o.useLayoutEffect)(() => {
            if (a.CheckMobile.iOS())
              return (
                null !== l.current &&
                  (0, r.disableBodyScroll)(l.current, { allowTouchMove: i(l) }),
                () => {
                  null !== l.current && (0, r.enableBodyScroll)(l.current);
                }
              );
          }, []),
          o.createElement('div', { ref: l, ...s }, n)
        );
      });
      function i(e) {
        return (t) => {
          const n = (0, s.ensureNotNull)(e.current),
            o = document.activeElement;
          return (
            !n.contains(t) || (null !== o && n.contains(o) && o.contains(t))
          );
        };
      }
    },
    6132: (e, t, n) => {
      'use strict';
      var o = n(22134);
      function r() {}
      function s() {}
      (s.resetWarningCache = r),
        (e.exports = function () {
          function e(e, t, n, r, s, a) {
            if (a !== o) {
              var l = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
              );
              throw ((l.name = 'Invariant Violation'), l);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: s,
            resetWarningCache: r,
          };
          return (n.PropTypes = n), n;
        });
    },
    19036: (e, t, n) => {
      e.exports = n(6132)();
    },
    22134: (e) => {
      'use strict';
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    83852: (e) => {
      e.exports = {
        titleWrap: 'titleWrap-_6CD9pJu',
        groupFooter: 'groupFooter-_6CD9pJu',
      };
    },
    51424: (e) => {
      e.exports = { inlineRow: 'inlineRow-hi3GkxTA' };
    },
    32850: (e) => {
      e.exports = { icon: 'icon-siMviKkC' };
    },
    55386: (e) => {
      e.exports = {
        input: 'input-dV7I8XN5',
        symbol: 'symbol-dV7I8XN5',
        checkbox: 'checkbox-dV7I8XN5',
        label: 'label-dV7I8XN5',
        dropdownMenu: 'dropdownMenu-dV7I8XN5',
        sessionStart: 'sessionStart-dV7I8XN5',
        sessionEnd: 'sessionEnd-dV7I8XN5',
        sessionInputContainer: 'sessionInputContainer-dV7I8XN5',
        sessionDash: 'sessionDash-dV7I8XN5',
        inputGroup: 'inputGroup-dV7I8XN5',
        textarea: 'textarea-dV7I8XN5',
        inlineGroup: 'inlineGroup-dV7I8XN5',
        hasTooltip: 'hasTooltip-dV7I8XN5',
      };
    },
    20374: (e) => {
      e.exports = {
        content: 'content-mTbR5jYu',
        cell: 'cell-mTbR5jYu',
        inner: 'inner-mTbR5jYu',
        first: 'first-mTbR5jYu',
        inlineCell: 'inlineCell-mTbR5jYu',
        fill: 'fill-mTbR5jYu',
        top: 'top-mTbR5jYu',
        topCenter: 'topCenter-mTbR5jYu',
        offset: 'offset-mTbR5jYu',
        inlineRow: 'inlineRow-mTbR5jYu',
        grouped: 'grouped-mTbR5jYu',
        separator: 'separator-mTbR5jYu',
        groupSeparator: 'groupSeparator-mTbR5jYu',
        big: 'big-mTbR5jYu',
        adaptive: 'adaptive-mTbR5jYu',
        checkableTitle: 'checkableTitle-mTbR5jYu',
      };
    },
    36341: (e) => {
      e.exports = {
        wrap: 'wrap-BE2IgHEr',
        labelWrap: 'labelWrap-BE2IgHEr',
        label: 'label-BE2IgHEr',
        hasTooltip: 'hasTooltip-BE2IgHEr',
      };
    },
    66291: (e, t, n) => {
      'use strict';
      n.d(t, { splitThousands: () => r });
      var o = n(50335);
      function r(e, t = '&nbsp;') {
        let n = e + '';
        -1 !== n.indexOf('e') &&
          (n = (function (e) {
            return (0, o.fixComputationError)(e)
              .toFixed(10)
              .replace(/\.?0+$/, '');
          })(Number(e)));
        const r = n.split('.');
        return (
          r[0].replace(/\B(?=(\d{3})+(?!\d))/g, t) + (r[1] ? '.' + r[1] : '')
        );
      }
    },
    99212: (e, t, n) => {
      'use strict';
      n.d(t, { bind: () => a, setter: () => l });
      var o = n(50959),
        r = n(62762),
        s = n(27365);
      function a(e) {
        var t;
        return (
          (t = class extends o.PureComponent {
            constructor() {
              super(...arguments),
                (this._onChange = (e, t, n) => {
                  const { setValue: o } = this.context,
                    { onChange: r } = this.props;
                  l(o, r)(e, t, n);
                });
            }
            render() {
              const { input: t } = this.props,
                { values: n, model: r } = this.context;
              return o.createElement(e, {
                ...this.props,
                value: n[t.id],
                tzName: (0, s.getTimezoneName)(r),
                onChange: this._onChange,
              });
            }
          }),
          (t.contextType = r.PropertyContext),
          t
        );
      }
      function l(e, t) {
        return (n, o, r) => {
          e(o, n, r), t && t(n, o, r);
        };
      }
    },
    62762: (e, t, n) => {
      'use strict';
      n.d(t, { PropertyContext: () => c, PropertyContainer: () => u });
      var o = n(50959),
        r = n(50151),
        s = n(44352),
        a = n(47539);
      const l = (0, n(98351).getLogger)(
          'Platform.GUI.StudyInputPropertyContainer',
        ),
        i = new a.TranslatedString(
          'change {propertyName} property',
          s.t(null, void 0, n(18567)),
        ),
        c = o.createContext(null);
      class u extends o.PureComponent {
        constructor(e) {
          super(e),
            (this._setValue = (e, t, o) => {
              const { property: c, model: u } = this.props,
                d = (0, r.ensureDefined)(c.child(e));
              l.logNormal(
                `Changing property "${e}" value from "${c.value()}" to "${t}"`,
              );
              const p = new a.TranslatedString(
                o,
                (function (e) {
                  return s.t(e, { context: 'input' }, n(88601));
                })(o),
              );
              u.setProperty(d, t, i.format({ propertyName: p }));
            });
          const { property: t } = e,
            o = {};
          t.childNames().forEach((e) => {
            const n = (0, r.ensureDefined)(t.child(e));
            o.hasOwnProperty(e) || (o[e] = n.value());
          }),
            (this.state = o);
        }
        componentDidMount() {
          const { property: e, onStudyInputChange: t } = this.props;
          e.childNames().forEach((n) => {
            (0, r.ensureDefined)(e.child(n)).subscribe(this, (e) => {
              const o = e.value();
              l.logNormal(`Property "${n}" updated to value "${o}"`),
                this.setState({ [n]: o }),
                null == t || t(o, n);
            });
          });
        }
        componentWillUnmount() {
          const { property: e } = this.props;
          e.childNames().forEach((t) => {
            (0, r.ensureDefined)(e.child(t)).unsubscribeAll(this);
          });
        }
        render() {
          const { study: e, model: t, children: n } = this.props,
            r = {
              study: e,
              model: t,
              values: this.state,
              setValue: this._setValue,
            };
          return o.createElement(c.Provider, { value: r }, n);
        }
      }
    },
    19243: (e, t, n) => {
      'use strict';
      n.d(t, { ModelContext: () => r, bindModel: () => s });
      var o = n(50959);
      const r = o.createContext(null);
      function s(e, t) {
        return o.createElement(r.Consumer, null, (n) =>
          n ? o.createElement(e, { ...Object.assign({ model: n }, t) }) : null,
        );
      }
    },
    56857: (e, t, n) => {
      'use strict';
      n.d(t, {
        StylePropertyContext: () => s,
        StylePropertyContainer: () => a,
        bindPropertyContext: () => l,
      });
      var o = n(50959),
        r = n(19243);
      const s = o.createContext(null);
      class a extends o.PureComponent {
        constructor() {
          super(...arguments),
            (this._setValue = (e, t, n) => {
              const { model: o } = this.props;
              o.setProperty(e, t, n);
            });
        }
        componentDidMount() {
          const { property: e } = this.props;
          e.subscribe(this, () => this.forceUpdate());
        }
        componentWillUnmount() {
          const { property: e } = this.props;
          e.unsubscribeAll(this);
        }
        render() {
          const e = { setValue: this._setValue };
          return o.createElement(s.Provider, { value: e }, this.props.children);
        }
      }
      function l(e, t) {
        return (0, r.bindModel)(
          ({ model: n }) =>
            o.createElement(
              a,
              { model: n, property: t.property },
              o.createElement(e, { ...t }),
            ),
          t,
        );
      }
    },
    52889: (e, t, n) => {
      'use strict';
      n.d(t, { InputTooltip: () => h });
      var o = n(50959),
        r = n(97754),
        s = n.n(r),
        a = n(9745),
        l = n(38780),
        i = n(32563),
        c = n(32850),
        u = n(85508);
      function d() {
        document.removeEventListener('scroll', d),
          document.removeEventListener('touchstart', d),
          (0, l.hide)();
      }
      function p(e) {
        i.mobiletouch &&
          ((0, l.showOnElement)(e.currentTarget, { tooltipDelay: 0 }),
          document.addEventListener('scroll', d),
          document.addEventListener('touchstart', d));
      }
      function h(e) {
        const { className: t, title: n } = e;
        return o.createElement(a.Icon, {
          icon: u,
          className: s()(t, 'apply-common-tooltip', c.icon),
          title: n,
          onClick: p,
        });
      }
    },
    67899: (e, t, n) => {
      'use strict';
      n.d(t, {
        isGroup: () => r,
        isInputInlines: () => s,
        getInputGroups: () => a,
      });
      var o = n(50151);
      function r(e) {
        return e.hasOwnProperty('groupType');
      }
      function s(e) {
        return r(e) && 'inline' === e.groupType;
      }
      function a(e) {
        const t = [],
          n = new Map(),
          r = new Map();
        return (
          r.set(void 0, new Map()),
          e.forEach((e) => {
            const { group: s, inline: a } = e;
            if (void 0 !== s || void 0 !== a)
              if (void 0 !== s)
                if (void 0 !== a)
                  if (n.has(s)) {
                    const t = (0, o.ensureDefined)(n.get(s));
                    let i;
                    r.has(t)
                      ? (i = (0, o.ensureDefined)(r.get(t)))
                      : ((i = new Map()), r.set(t, i)),
                      l(e, 'inline', a, i, t.children);
                  } else {
                    const o = { id: a, groupType: 'inline', children: [e] },
                      l = { id: s, groupType: 'group', children: [o] },
                      i = new Map();
                    i.set(a, o), r.set(l, i), n.set(s, l), t.push(l);
                  }
                else l(e, 'group', s, n, t);
              else {
                const n = (0, o.ensureDefined)(r.get(void 0));
                l(e, 'inline', (0, o.ensureDefined)(a), n, t);
              }
            else t.push(e);
          }),
          t
        );
      }
      function l(e, t, n, r, s) {
        if (r.has(n)) (0, o.ensureDefined)(r.get(n)).children.push(e);
        else {
          const o = { id: n, groupType: t, children: [e] };
          r.set(n, o), s.push(o);
        }
      }
    },
    98111: (e, t, n) => {
      'use strict';
      n.d(t, { InputRow: () => $ });
      var o = n(44352),
        r = n(50959),
        s = n(50151),
        a = n(8890),
        l = n(3927),
        i = n(50866),
        c = n(72126),
        u = n(97754),
        d = n.n(u),
        p = n(31261),
        h = n(99212),
        m = n(71163),
        g = n(55386);
      class v extends r.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = (e) => {
              const {
                input: { id: t, name: n },
                onChange: o,
              } = this.props;
              o(e.currentTarget.value, t, n);
            });
        }
        render() {
          const {
            input: { defval: e },
            value: t,
            disabled: n,
            onBlur: o,
            onKeyDown: s,
            hasTooltip: a,
          } = this.props;
          return r.createElement(p.InputControl, {
            className: d()(g.input, a && g.hasTooltip),
            value: void 0 === t ? e : t,
            onChange: this._onChange,
            onBlur: o,
            onKeyDown: s,
            disabled: n,
          });
        }
      }
      const b = (0, m.debounced)(v),
        f = (0, h.bind)(b);
      var C = n(36780),
        y = n(40296);
      function S(e) {
        const { className: t } = e,
          n = (0, r.useContext)(y.PropertyTable.InlineRowContext);
        return r.createElement(
          'div',
          { className: u(g.inputGroup, n && g.inlineGroup, t) },
          e.children,
        );
      }
      var E = n(36565);
      function x(e = '') {
        const [, t = '', n = '', o = '', r = ''] = Array.from(
          e.match(/^(\d\d)(\d\d)-(\d\d)(\d\d)/) || [],
        );
        return [`${t}:${n}`, `${o}:${r}`];
      }
      class _ extends r.PureComponent {
        constructor(e) {
          super(e),
            (this._onStartPick = (e) => {
              this.setState({ startTime: e }, this._onChange);
            }),
            (this._onEndPick = (e) => {
              this.setState({ endTime: e }, this._onChange);
            }),
            (this._onChange = () => {
              const {
                  input: { id: e, name: t },
                  onChange: n,
                } = this.props,
                { startTime: o, endTime: r } = this.state;
              n(o.replace(':', '') + '-' + r.replace(':', ''), e, t);
            });
          const t = e.value || e.input.defval,
            [n, o] = x(t);
          this.state = { prevValue: t, startTime: n, endTime: o };
        }
        render() {
          const { startTime: e, endTime: t } = this.state,
            { hasTooltip: n, disabled: o } = this.props;
          return r.createElement(
            S,
            { className: d()(n && g.hasTooltip) },
            r.createElement(
              'div',
              { className: g.sessionStart },
              r.createElement(E.TimeInput, {
                className: d()(g.input, g.sessionInputContainer),
                name: 'start',
                value: (0, s.ensureDefined)(e),
                onChange: this._onStartPick,
                disabled: o,
              }),
              r.createElement('span', { className: g.sessionDash }, ' — '),
            ),
            r.createElement(
              'div',
              { className: g.sessionEnd },
              r.createElement(E.TimeInput, {
                className: d()(g.input, g.sessionInputContainer),
                name: 'end',
                value: (0, s.ensureDefined)(t),
                onChange: this._onEndPick,
                disabled: o,
              }),
            ),
          );
        }
        static getDerivedStateFromProps(e, t) {
          if (e.value === t.prevValue) return t;
          const [n, o] = x(e.value);
          return { prevValue: e.value, startTime: n, endTime: o };
        }
      }
      const w = (0, h.bind)(_);
      var N = n(2484),
        T = n(58403),
        I = n(62762),
        k = n(75690);
      class P extends r.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = (e) => {
              const {
                input: { id: t, name: n },
                onChange: o,
              } = this.props;
              o(e, t, n);
            });
        }
        render() {
          const {
              input: { id: e, defval: t, options: s, optionsTitles: a },
              value: l,
              disabled: i,
              hasTooltip: c,
            } = this.props,
            u = s.map((e) => {
              const t = a && a[e] ? a[e] : e;
              return {
                value: e,
                content: o.t(t, { context: 'input' }, n(88601)),
              };
            }),
            p = void 0 !== l && s.includes(l) ? l : t;
          return r.createElement(k.Select, {
            id: e,
            className: d()(g.input, c && g.hasTooltip),
            menuClassName: g.dropdownMenu,
            value: p,
            items: u,
            onChange: this._onChange,
            disabled: i,
          });
        }
      }
      const R = (0, h.bind)(P);
      var B = n(73146),
        M = n(89215);
      const O = {
        open: o.t(null, void 0, n(38466)),
        high: o.t(null, void 0, n(39337)),
        low: o.t(null, void 0, n(3919)),
        close: o.t(null, void 0, n(36962)),
        hl2: o.t(null, void 0, n(91815)),
        hlc3: o.t(null, void 0, n(40771)),
        ohlc4: o.t(null, void 0, n(12504)),
        hlcc4: o.t(null, void 0, n(9523)),
      };
      class D extends r.PureComponent {
        render() {
          const { input: e } = this.props,
            { study: t, model: n } = this.context;
          let o = { ...O };
          delete o.hlcc4;
          const l = (0, B.createAdapter)(t);
          if (t && this._isStudy(t) && t.isChildStudy()) {
            const t = (0, a.getInputValue)(l.inputs()[e.id]),
              n = l.parentSourceForInput(t);
            if ((0, M.isStudy)(n)) {
              const t = n.title(),
                r = T.StudyMetaInfo.getChildSourceInputTitles(
                  e,
                  n.metaInfo(),
                  t,
                );
              o = { ...o, ...r };
            }
          }
          if (
            N.enabled('study_on_study') &&
            t &&
            this._isStudy(t) &&
            (t.isChildStudy() || T.StudyMetaInfo.canBeChild(t.metaInfo()))
          ) {
            const e = [t, ...l.getAllChildren()];
            n.model()
              .allStudies()
              .filter((t) => t.canHaveChildren() && !e.includes(t))
              .forEach((e) => {
                const t = e.title(!0, void 0, !0),
                  n = e.id(),
                  r = e.metaInfo(),
                  a = r.styles,
                  l = r.plots || [];
                if (1 === l.length) o[n + '$0'] = t;
                else if (l.length > 1) {
                  const e = l.reduce((e, o, r) => {
                    if (!T.StudyMetaInfo.canPlotBeSourceOfChildStudy(o.type))
                      return e;
                    let l;
                    try {
                      l = (0, s.ensureDefined)(
                        (0, s.ensureDefined)(a)[o.id],
                      ).title;
                    } catch (e) {
                      l = o.id;
                    }
                    return { ...e, [`${n}$${r}`]: `${t}: ${l}` };
                  }, {});
                  o = { ...o, ...e };
                }
              });
          }
          const i = {
            ...e,
            type: 'text',
            options: Object.keys(o),
            optionsTitles: o,
          };
          return r.createElement(R, { ...this.props, input: i });
        }
        _isStudy(e) {
          return !e.hasOwnProperty('isInputsStudy');
        }
      }
      D.contextType = I.PropertyContext;
      var A = n(578),
        V = n(92133);
      const F = void 0,
        z = [
          '1',
          '3',
          '5',
          '15',
          '30',
          '45',
          '60',
          '120',
          '180',
          '240',
          '1D',
          '1W',
          '1M',
          '3M',
          '6M',
          '12M',
        ],
        W = ['1S', '5S', '10S', '15S', '30S'];
      class K extends r.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = (e) => {
              const {
                input: { id: t, name: n },
                onChange: o,
              } = this.props;
              o(e, t, n);
            });
        }
        render() {
          const { input: e, value: t, disabled: s, hasTooltip: a } = this.props,
            l = A.Interval.parse(void 0 === t ? e.defval : t),
            i = l.isValid() ? l.value() : t,
            c = F ? F.get().filter((e) => !A.Interval.parse(e).isRange()) : [],
            u = (0, V.mergeResolutions)(
              z,
              (0, V.isSecondsEnabled)() ? W : [],
              c,
            );
          return (
            u.unshift(''),
            r.createElement(k.Select, {
              id: e.id,
              className: d()(g.input, g.resolution, a && g.hasTooltip),
              menuClassName: d()(g.dropdownMenu, g.resolution),
              items:
                ((p = u),
                p.map((e) => ({
                  value: e,
                  content:
                    '' === e
                      ? o.t(null, void 0, n(94551))
                      : (0, V.getTranslatedResolutionModel)(e).hint,
                }))),
              value: i,
              onChange: this._onChange,
              disabled: s,
            })
          );
          var p;
        }
      }
      const L = (0, h.bind)(K);
      var j = n(14448),
        H = n(56857);
      class U extends r.PureComponent {
        render() {
          return r.createElement(I.PropertyContext.Consumer, null, (e) =>
            e ? this._getColorInputWithContext(e) : null,
          );
        }
        _getColorInputWithContext(e) {
          var t;
          const {
              input: { id: n },
              disabled: o,
              hasTooltip: s,
            } = this.props,
            { model: a, study: l } = e;
          if ('properties' in l || 'tempProperties' in l) {
            const e =
              'properties' in l
                ? l.properties().inputs[n]
                : null === (t = l.tempProperties) || void 0 === t
                ? void 0
                : t.inputs.child(n);
            return r.createElement(
              H.StylePropertyContainer,
              { model: a, property: e },
              r.createElement(j.ColorWithThicknessSelect, {
                className: d()(s && g.hasTooltip),
                color: e,
                disabled: o,
              }),
            );
          }
          return null;
        }
      }
      class Y extends r.PureComponent {
        render() {
          const {
            input: e,
            disabled: t,
            onChange: n,
            tzName: o,
            hasTooltip: s,
          } = this.props;
          if ((0, a.isStudyInputOptionsInfo)(e))
            return r.createElement(R, {
              input: e,
              disabled: t,
              onChange: n,
              hasTooltip: s,
            });
          switch (e.type) {
            case 'integer':
              return r.createElement(l.IntegerInput, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: s,
              });
            case 'float':
            case 'price':
              return r.createElement(i.FloatInput, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: s,
              });
            case 'bool':
              return r.createElement(c.BoolInput, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: s,
              });
            case 'text':
              return r.createElement(f, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: s,
              });
            case 'symbol':
              return r.createElement(C.SymbolInput, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: s,
              });
            case 'session':
              return r.createElement(w, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: s,
              });
            case 'source':
              return r.createElement(D, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: s,
              });
            case 'resolution':
              return r.createElement(L, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: s,
              });
            case 'time':
            default:
              return null;
            case 'color':
              return r.createElement(U, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: s,
              });
          }
        }
      }
      var G = n(52889);
      class $ extends r.PureComponent {
        render() {
          const {
            label: e,
            children: t,
            input: a,
            disabled: l,
            onChange: i,
            labelAlign: c,
            grouped: u,
            tooltip: d,
            offset: p,
          } = this.props;
          return r.createElement(
            y.PropertyTable.Row,
            null,
            r.createElement(
              y.PropertyTable.Cell,
              { placement: 'first', verticalAlign: c, grouped: u, offset: p },
              void 0 !== e
                ? e
                : o.t(
                    (0, s.ensureDefined)(a).name,
                    { context: 'input' },
                    n(88601),
                  ),
            ),
            r.createElement(
              y.PropertyTable.Cell,
              { placement: 'last', grouped: u },
              t ||
                r.createElement(Y, {
                  input: (0, s.ensureDefined)(a),
                  onChange: i,
                  disabled: l,
                  hasTooltip: Boolean(d),
                }),
              d && r.createElement(G.InputTooltip, { title: d }),
            ),
          );
        }
      }
    },
    8069: (e, t, n) => {
      'use strict';
      n.d(t, { InputsTabContent: () => z });
      var o,
        r = n(50959),
        s = n(44352),
        a = n(62762),
        l = n(40296),
        i = n(54349),
        c = n(97754),
        u = n.n(c),
        d = n(37469),
        p = n.n(d);
      const h = (0, i.makeSwitchGroupItem)(
        (((o = class extends r.PureComponent {
          constructor() {
            super(...arguments),
              (this._onChange = () => {
                this.props.onChange && this.props.onChange(this.props.value);
              });
          }
          render() {
            const e = c(this.props.className, p().radio, {
                [p().reverse]: Boolean(this.props.labelPositionReverse),
              }),
              t = c(p().label, { [p().disabled]: this.props.disabled }),
              n = c(p().box, { [p().noOutline]: -1 === this.props.tabIndex });
            let o = null;
            return (
              this.props.label &&
                (o = r.createElement(
                  'span',
                  { className: t },
                  this.props.label,
                )),
              r.createElement(
                'label',
                { className: e },
                r.createElement(
                  'span',
                  { className: p().wrapper, title: this.props.title },
                  r.createElement('input', {
                    id: this.props.id,
                    tabIndex: this.props.tabIndex,
                    autoFocus: this.props.autoFocus,
                    role: this.props.role,
                    className: p().input,
                    type: 'radio',
                    name: this.props.name,
                    checked: this.props.checked,
                    disabled: this.props.disabled,
                    value: this.props.value,
                    onChange: this._onChange,
                    ref: this.props.reference,
                  }),
                  r.createElement('span', { className: n }),
                ),
                o,
              )
            );
          }
        }).defaultProps = { value: 'on' }),
        o),
      );
      var m = n(50151),
        g = n(36780),
        v = n(99212),
        b = n(52889),
        f = n(55386);
      function C(e) {
        const {
            children: t,
            input: o,
            disabled: c,
            onChange: u,
            grouped: d,
            tooltip: p,
          } = e,
          C = (0, r.useContext)(a.PropertyContext),
          { values: y, setValue: S } = (0, m.ensureNotNull)(C),
          E = y[o.id],
          [x, _] = (0, r.useState)(E ? 'another-symbol' : 'main-symbol'),
          [w, N] = (0, r.useState)(E);
        return (
          (0, r.useEffect)(() => {
            E && N(E);
          }, [E]),
          r.createElement(
            i.SwitchGroup,
            {
              name: `symbol-source-${o.id}`,
              values: [x],
              onChange: function (e) {
                _(e),
                  'main-symbol' === e
                    ? (0, v.setter)(S)('', o.id, o.name)
                    : 'another-symbol' === e &&
                      w &&
                      (0, v.setter)(S, u)(w, o.id, o.name);
              },
            },
            r.createElement(
              l.PropertyTable.Row,
              null,
              r.createElement(
                l.PropertyTable.Cell,
                { colSpan: 2, placement: 'first', grouped: d },
                r.createElement(h, {
                  value: 'main-symbol',
                  className: f.checkbox,
                  disabled: c,
                  label: r.createElement(
                    'span',
                    { className: f.label },
                    s.t(null, { context: 'input' }, n(88046)),
                  ),
                }),
              ),
            ),
            r.createElement(
              l.PropertyTable.Row,
              null,
              r.createElement(
                l.PropertyTable.Cell,
                { placement: 'first', grouped: d },
                r.createElement(h, {
                  value: 'another-symbol',
                  className: f.checkbox,
                  disabled: c,
                  label: r.createElement(
                    'span',
                    { className: f.label },
                    s.t(null, { context: 'input' }, n(73755)),
                  ),
                }),
              ),
              r.createElement(
                l.PropertyTable.Cell,
                { placement: 'last', grouped: d },
                t ||
                  r.createElement(g.SymbolInput, {
                    input: (0, m.ensureDefined)(o),
                    onChange: u,
                    disabled: c || 'main-symbol' === x,
                    hasTooltip: Boolean(p),
                  }),
                p && r.createElement(b.InputTooltip, { title: p }),
              ),
            ),
          )
        );
      }
      var y = n(72126);
      class S extends r.PureComponent {
        render() {
          const { label: e, input: t, tooltip: n } = this.props;
          return r.createElement(
            l.PropertyTable.Row,
            null,
            r.createElement(
              l.PropertyTable.Cell,
              { placement: 'first', colSpan: 2 },
              r.createElement(y.BoolInput, {
                label: e,
                input: t,
                hasTooltip: Boolean(n),
              }),
              n && r.createElement(b.InputTooltip, { title: n }),
            ),
          );
        }
      }
      var E = n(98111),
        x = n(2568),
        _ = n(67029),
        w = n(71163);
      class N extends r.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = (e) => {
              const {
                input: { id: t, name: n },
                onChange: o,
              } = this.props;
              o(e.currentTarget.value, t, n);
            });
        }
        render() {
          const {
            input: { defval: e },
            value: t,
            disabled: n,
            onBlur: o,
            onKeyDown: s,
          } = this.props;
          return r.createElement(x.Textarea, {
            className: u()(f.input, f.textarea, _.InputClasses.FontSizeMedium),
            value: void 0 === t ? e : t,
            onChange: this._onChange,
            onBlur: o,
            onKeyDown: s,
            disabled: n,
          });
        }
      }
      const T = (0, w.debounced)(N),
        I = (0, v.bind)(T);
      var k = n(36341);
      function P(e) {
        const { input: t, label: n, tooltip: o } = e;
        return r.createElement(
          l.PropertyTable.Row,
          null,
          r.createElement(
            l.PropertyTable.Cell,
            { placement: 'first', colSpan: 2, className: k.wrap },
            r.createElement(
              'div',
              { className: k.labelWrap },
              r.createElement(
                'span',
                { className: u()(k.label, o && k.hasTooltip) },
                n,
              ),
              o && r.createElement(b.InputTooltip, { title: o }),
            ),
            r.createElement(I, { input: t }),
          ),
        );
      }
      function R(e) {
        const { input: t, tooltip: o } = e;
        return 'symbol' === t.type && t.optional
          ? r.createElement(C, { input: t, tooltip: o })
          : 'bool' === t.type
          ? r.createElement(S, {
              label: s.t(t.name, { context: 'input' }, n(88601)),
              input: t,
              tooltip: o,
            })
          : 'text_area' === t.type
          ? r.createElement(P, {
              label: s.t(t.name, { context: 'input' }, n(88601)),
              input: t,
              tooltip: o,
            })
          : r.createElement(E.InputRow, {
              labelAlign: (function (e) {
                switch (e) {
                  case 'session':
                    return 'adaptive';
                  case 'time':
                    return 'topCenter';
                  default:
                    return;
                }
              })(t.type),
              input: t,
              tooltip: o,
            });
      }
      var B = n(86067),
        M = n(51424);
      function O(e) {
        const { content: t } = e;
        let n;
        return r.createElement(
          l.PropertyTable.InlineRowContext.Provider,
          { value: !0 },
          r.createElement(
            'div',
            { className: M.inlineRow },
            t.children.map(
              (e, o) => (
                void 0 !== e.tooltip && (n = e.tooltip),
                r.createElement(R, {
                  key: e.id,
                  input: e,
                  tooltip: o === t.children.length - 1 ? n : void 0,
                })
              ),
            ),
          ),
        );
      }
      var D = n(67899),
        A = n(83852);
      function V(e) {
        const { content: t } = e;
        return (0, D.isGroup)(t)
          ? (0, D.isInputInlines)(t)
            ? r.createElement(O, { content: t })
            : r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  'div',
                  { className: A.titleWrap },
                  r.createElement(B.GroupTitleSection, {
                    title: s.t(t.id, { context: 'input' }, n(88601)),
                    name: t.id,
                  }),
                ),
                t.children.map((e) =>
                  (0, D.isGroup)(e)
                    ? r.createElement(O, { key: e.id, content: e })
                    : r.createElement(R, {
                        key: e.id,
                        input: e,
                        tooltip: e.tooltip,
                      }),
                ),
                r.createElement('div', { className: A.groupFooter }),
              )
          : r.createElement(R, { input: t, tooltip: t.tooltip });
      }
      const F = { offset: s.t(null, void 0, n(89298)) };
      class z extends r.PureComponent {
        render() {
          const {
              reference: e,
              inputs: t,
              property: n,
              study: o,
              model: s,
              onStudyInputChange: a,
              className: i,
            } = this.props,
            { offset: c, offsets: u } = n;
          return r.createElement(
            l.PropertyTable,
            { reference: e, className: i },
            r.createElement(W, {
              study: o,
              model: s,
              property: n.inputs,
              inputs: t,
              onStudyInputChange: a,
            }),
            c && this._createOffsetSection(c),
            u &&
              u.childNames().map((e) => {
                const t = u.childs()[e];
                return this._createOffsetSection(t);
              }),
          );
        }
        _createOffsetSection(e) {
          const t = e.childs();
          return r.createElement(W, {
            key: `offset_${t.title.value()}`,
            study: this.props.study,
            model: this.props.model,
            inputs: [K(t)],
            property: e,
          });
        }
      }
      function W(e) {
        const {
            study: t,
            model: n,
            inputs: o,
            property: s,
            onStudyInputChange: l,
          } = e,
          i = o,
          c = (0, r.useMemo)(() => (0, D.getInputGroups)(i), [i]);
        return r.createElement(
          a.PropertyContainer,
          { property: s, study: t, model: n, onStudyInputChange: l },
          !1,
          c.map((e) => r.createElement(V, { key: e.id, content: e })),
        );
      }
      function K(e) {
        return {
          id: 'val',
          name: e.title.value() || F.offset,
          defval: e.val.value(),
          type: 'integer',
          min: e.min.value(),
          max: e.max.value(),
        };
      }
    },
    72126: (e, t, n) => {
      'use strict';
      n.d(t, { BoolInputComponent: () => c, BoolInput: () => u });
      var o = n(50959),
        r = n(15294),
        s = n(97754),
        a = n.n(s),
        l = n(99212),
        i = n(55386);
      class c extends o.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = () => {
              const {
                input: { id: e, name: t },
                value: n,
                onChange: o,
              } = this.props;
              o(!n, e, t);
            });
        }
        render() {
          const {
              input: { defval: e },
              value: t,
              disabled: n,
              label: s,
              hasTooltip: l,
            } = this.props,
            c = void 0 === t ? e : t;
          return o.createElement(r.Checkbox, {
            className: a()(i.checkbox, l && i.hasTooltip),
            disabled: n,
            checked: c,
            onChange: this._onChange,
            label: o.createElement('span', { className: i.label }, s),
            labelAlignBaseline: !0,
          });
        }
      }
      const u = (0, l.bind)(c);
    },
    71163: (e, t, n) => {
      'use strict';
      n.d(t, { debounced: () => s });
      var o = n(50959);
      const r = { blur: 0, commit: 0, change: 1 / 0 };
      function s(e, t = r) {
        return class extends o.PureComponent {
          constructor(e) {
            super(e),
              (this._onChange = (e, n, o) => {
                const r = t.change;
                r
                  ? (clearTimeout(this._timeout),
                    this.setState({ value: e }, () => {
                      r !== 1 / 0 &&
                        (this._timeout = setTimeout(() => this._flush(), r));
                    }))
                  : this._flush(e);
              }),
              (this._onBlur = () => {
                this._debounce(t.blur);
                const { onBlur: e } = this.props;
                e && e();
              }),
              (this._onKeyDown = (e) => {
                13 === e.keyCode && this._debounce(t.commit);
              }),
              (this.state = { prevValue: e.value, value: e.value });
          }
          componentWillUnmount() {
            this._flush();
          }
          render() {
            const { value: t } = this.state;
            return o.createElement(e, {
              ...this.props,
              value: t,
              onChange: this._onChange,
              onBlur: this._onBlur,
              onKeyDown: this._onKeyDown,
            });
          }
          static getDerivedStateFromProps(e, t) {
            return e.value === t.prevValue
              ? t
              : { prevValue: e.value, value: e.value };
          }
          _debounce(e) {
            e
              ? (clearTimeout(this._timeout),
                e !== 1 / 0 &&
                  (this._timeout = setTimeout(() => this._flush(), e)))
              : this.setState((e) => {
                  this._flush(e.value);
                });
          }
          _flush(e) {
            const {
                input: { id: t, name: n },
                onChange: o,
              } = this.props,
              { prevValue: r, value: s } = this.state;
            clearTimeout(this._timeout);
            const a = void 0 !== e ? e : s;
            void 0 !== a && a !== r && o(a, t, n);
          }
        };
      }
    },
    50866: (e, t, n) => {
      'use strict';
      n.d(t, { FloatInputComponent: () => d, FloatInput: () => p });
      var o = n(50959),
        r = n(97754),
        s = n.n(r),
        a = n(94956),
        l = n(99212),
        i = n(71163),
        c = n(55386);
      class u extends o.PureComponent {
        render() {
          const { hasTooltip: e } = this.props;
          return o.createElement(a.NumericInput, {
            ...this.props,
            className: s()(c.input, e && c.hasTooltip),
            stretch: !1,
          });
        }
      }
      const d = (0, i.debounced)(u, { change: 1 / 0, commit: 0, blur: 0 }),
        p = (0, l.bind)(d);
    },
    3927: (e, t, n) => {
      'use strict';
      n.d(t, { IntegerInputComponent: () => d, IntegerInput: () => p });
      var o = n(50959),
        r = n(97754),
        s = n.n(r),
        a = n(99212),
        l = n(71163),
        i = n(94956),
        c = n(55386);
      class u extends o.PureComponent {
        render() {
          const { hasTooltip: e } = this.props;
          return o.createElement(i.NumericInput, {
            ...this.props,
            mode: 'integer',
            className: s()(c.input, e && c.hasTooltip),
            stretch: !1,
          });
        }
      }
      const d = (0, l.debounced)(u, { change: 1 / 0, commit: 0, blur: 0 }),
        p = (0, a.bind)(d);
    },
    94956: (e, t, n) => {
      'use strict';
      n.d(t, { NumericInput: () => y });
      var o = n(50959),
        r = n(50151),
        s = n(44352),
        a = n(60521),
        l = n(49483),
        i = n(92399),
        c = n(66291),
        u = n(80142);
      var d = n(34657),
        p = n(91031);
      const h = s.t(null, void 0, n(35563)),
        m = new (class {
          constructor(e = ' ') {
            this._divider = e;
          }
          format(e) {
            const t = (0, c.splitThousands)(e, this._divider);
            return (0, u.isRtl)() ? (0, u.startWithLTR)(t) : t;
          }
          parse(e) {
            const t = (0, u.stripLTRMarks)(e).split(this._divider).join(''),
              n = Number(t);
            return isNaN(n) || /e/i.test(t)
              ? { res: !1 }
              : { res: !0, value: n, suggest: this.format(n) };
          }
        })(),
        g = /^-?[0-9]*$/,
        v = 9e15;
      class b extends o.PureComponent {
        constructor(e) {
          super(e),
            (this._onFocus = (e) => {
              this.setState({ focused: !0 }),
                this.props.onFocus && this.props.onFocus(e);
            }),
            (this._onBlur = (e) => {
              this.setState({ focused: !1 }),
                !1 !== this.props.shouldApplyValueOnBlur &&
                  (this.setState({
                    displayValue: f(this.props, this.props.value),
                  }),
                  this.props.errorHandler && this.props.errorHandler(!1)),
                this.props.onBlur && this.props.onBlur(e);
            }),
            (this._onValueChange = (e) => {
              const t = e.target.value;
              if (
                (void 0 !== this.props.onEmptyString &&
                  '' === t &&
                  this.props.onEmptyString(),
                'integer' === this.props.mode && !g.test(t))
              )
                return;
              const n = C(t, this.props.formatter),
                o = n.res
                  ? this._checkValueBoundaries(n.value)
                  : { isPassed: !1, msg: void 0 },
                r = n.res && !o.isPassed,
                s = n.res && n.suggest && !this.state.focused ? n.suggest : t,
                a = r && o.msg ? o.msg : h;
              this.setState({ displayValue: s, errorMsg: a }),
                n.res &&
                  o.isPassed &&
                  this.props.onValueChange(n.value, 'input'),
                this.props.errorHandler && this.props.errorHandler(!n.res || r);
            }),
            (this._onValueByStepChange = (e) => {
              const {
                  roundByStep: t = !0,
                  step: n = 1,
                  uiStep: o,
                  min: r = n,
                  formatter: s,
                } = this.props,
                l = C(this.state.displayValue, s),
                i = null != o ? o : n;
              let c = n;
              if (l.res) {
                const o = new a.Big(l.value),
                  s = o.minus(r).mod(n);
                let u = o.plus(e * i);
                !s.eq(0) && t && (u = u.plus((e > 0 ? 0 : 1) * i).minus(s)),
                  (c = u.toNumber());
              }
              const { isPassed: u, clampedValue: d } =
                this._checkValueBoundaries(c);
              (c = u ? c : d),
                this.setState({ displayValue: f(this.props, c) }),
                this.props.onValueChange(c, 'step'),
                this.props.errorHandler && this.props.errorHandler(!1);
            });
          const { value: t } = e;
          this.state = {
            value: t,
            displayValue: f(e, t),
            focused: !1,
            errorMsg: h,
          };
        }
        render() {
          var e;
          return o.createElement(i.NumberInputView, {
            id: this.props.id,
            inputMode:
              null !== (e = this.props.inputMode) && void 0 !== e
                ? e
                : l.CheckMobile.iOS()
                ? void 0
                : 'numeric',
            borderStyle: this.props.borderStyle,
            fontSizeStyle: this.props.fontSizeStyle,
            value: this.state.displayValue,
            forceShowControls: this.props.forceShowControls,
            className: this.props.className,
            inputClassName: this.props.inputClassName,
            button: this.props.button,
            placeholder: this.props.placeholder,
            innerLabel: this.props.innerLabel,
            endSlot: this.props.endSlot,
            disabled: this.props.disabled,
            warning: this.props.warning,
            error: this.props.error,
            errorMessage: this.props.errorMessage || this.state.errorMsg,
            onValueChange: this._onValueChange,
            onValueByStepChange: this._onValueByStepChange,
            containerReference: this.props.containerReference,
            inputReference: this.props.inputReference,
            onClick: this.props.onClick,
            onFocus: this._onFocus,
            onBlur: this._onBlur,
            onKeyDown: this.props.onKeyDown,
            controlDecKeyCodes: this.props.controlDecKeyCodes,
            controlIncKeyCodes: this.props.controlIncKeyCodes,
            title: this.props.title,
            intent: this.props.intent,
            highlight: this.props.highlight,
            highlightRemoveRoundBorder: this.props.highlightRemoveRoundBorder,
            stretch: this.props.stretch,
            autoSelectOnFocus: !l.CheckMobile.any(),
          });
        }
        getClampedValue() {
          const { min: e = -1 / 0, max: t = v } = this.props,
            n = C(this.state.displayValue, this.props.formatter);
          return n.res ? (0, p.clamp)(n.value, e, t) : null;
        }
        static getDerivedStateFromProps(e, t) {
          const { alwaysUpdateValueFromProps: n, value: o } = e;
          return (t.focused && !n) || t.value === o
            ? null
            : { value: o, displayValue: f(e, o) };
        }
        _checkValueBoundaries(e) {
          var t, o, r, a;
          const { min: l = -1 / 0, max: i = v } = this.props,
            c = (function (e, t, n) {
              const o = e >= t,
                r = e <= n;
              return {
                passMin: o,
                passMax: r,
                pass: o && r,
                clamped: (0, p.clamp)(e, t, n),
              };
            })(e, l, i);
          let u;
          return (
            c.passMax ||
              (u =
                null !==
                  (o =
                    null === (t = this.props.boundariesErrorMessages) ||
                    void 0 === t
                      ? void 0
                      : t.greaterThanMax) && void 0 !== o
                  ? o
                  : s.t(null, { replace: { max: String(i) } }, n(2607))),
            c.passMin ||
              (u =
                null !==
                  (a =
                    null === (r = this.props.boundariesErrorMessages) ||
                    void 0 === r
                      ? void 0
                      : r.lessThanMin) && void 0 !== a
                  ? a
                  : s.t(null, { replace: { min: String(l) } }, n(53669))),
            { isPassed: c.pass, msg: u, clampedValue: c.clamped }
          );
        }
      }
      function f(e, t) {
        const { useFormatter: n = !0, formatter: o, mode: r } = e;
        return n && 'integer' !== r
          ? (function (e, t = m) {
              return null !== e ? t.format(e) : '';
            })(t, o)
          : (function (e) {
              if (null === e) return '';
              return d.NumericFormatter.formatNoE(e);
            })(t);
      }
      function C(e, t = m) {
        return t.parse
          ? t.parse(e)
          : { res: !1, error: 'Formatter does not support parse' };
      }
      class y extends o.PureComponent {
        constructor() {
          super(...arguments),
            (this._container = null),
            (this._handleContainerRef = (e) => (this._container = e)),
            (this._onChange = (e, t) => {
              const {
                input: { id: n, name: o },
                onChange: r,
                onBlur: s,
              } = this.props;
              r(e, n, o), 'step' === t && s && s();
            }),
            (this._onBlur = (e) => {
              const { onBlur: t } = this.props;
              if (t) {
                const n = (0, r.ensureNotNull)(this._container);
                n.contains(document.activeElement) ||
                  n.contains(e.relatedTarget) ||
                  t();
              }
            });
        }
        render() {
          const {
            input: { defval: e, min: t, max: n, step: r },
            value: s,
            disabled: a,
            onKeyDown: l,
            className: i,
            mode: c,
            stretch: u,
          } = this.props;
          return o.createElement(b, {
            className: i,
            value: Number(void 0 === s ? e : s),
            min: t,
            max: n,
            step: r,
            mode: c,
            onBlur: this._onBlur,
            onValueChange: this._onChange,
            onKeyDown: l,
            disabled: a,
            containerReference: this._handleContainerRef,
            fontSizeStyle: 'medium',
            roundByStep: !1,
            stretch: u,
          });
        }
      }
    },
    36780: (e, t, n) => {
      'use strict';
      n.d(t, { getInternalSymbolName: () => c, SymbolInput: () => d });
      var o = n(50959),
        r = n(50151),
        s = n(62762),
        a = n(99212),
        l = n(73146),
        i = n(48897);
      function c(e, t) {
        const n = (0, l.createAdapter)(t).resolvedSymbolInfoBySymbol(e);
        return n && (n.ticker || n.full_name) ? n.ticker || n.full_name : e;
      }
      function u(e, t) {
        const n = (0, l.createAdapter)(t).resolvedSymbolInfoBySymbol(e);
        return null === n ? e : n.name;
      }
      const d = (0, a.bind)(function (e) {
        const t = (0, o.useContext)(s.PropertyContext),
          { study: n } = (0, r.ensureNotNull)(t),
          {
            input: { defval: a },
            value: l,
          } = e;
        return o.createElement(i.SymbolInputsButton, {
          ...e,
          value: u(l || a || '', n),
          study: n,
        });
      });
    },
    14448: (e, t, n) => {
      'use strict';
      n.d(t, { ColorWithThicknessSelect: () => v });
      var o = n(50959),
        r = n(24377),
        s = n(44352),
        a = n(47539),
        l = n(38031),
        i = n(56857),
        c = n(58593),
        u = n(37350),
        d = n(51768);
      const p = new a.TranslatedString(
          'change thickness',
          s.t(null, void 0, n(95657)),
        ),
        h = new a.TranslatedString('change color', s.t(null, void 0, n(13066))),
        m = new a.TranslatedString(
          'change opacity',
          s.t(null, void 0, n(17023)),
        ),
        g = [1, 2, 3, 4];
      class v extends o.PureComponent {
        constructor() {
          super(...arguments),
            (this._trackEventLabel = null),
            (this._getTransparencyValue = () => {
              const { transparency: e } = this.props;
              return e ? e.value() : 0;
            }),
            (this._getOpacityValue = () => {
              const { color: e } = this.props,
                t = (0, u.getPropertyValue)(e);
              if (t)
                return (0, l.isHexColor)(t)
                  ? (0, l.transparencyToAlpha)(this._getTransparencyValue())
                  : (0, r.parseRgba)(t)[3];
            }),
            (this._getColorValueInHex = () => {
              const { color: e } = this.props,
                t = (0, u.getPropertyValue)(e);
              return t
                ? (0, l.isHexColor)(t)
                  ? t
                  : (0, r.rgbToHexString)((0, r.parseRgb)(t))
                : null;
            }),
            (this._onThicknessChange = (e) => {
              const { thickness: t } = this.props;
              void 0 !== t && this._setProperty(t, e, p);
            }),
            (this._onColorChange = (e) => {
              const { color: t, isPaletteColor: n } = this.props,
                o = (0, u.getPropertyValue)(t);
              let s = 0;
              o &&
                (s = (0, l.isHexColor)(o)
                  ? this._getTransparencyValue()
                  : (0, l.alphaToTransparency)((0, r.parseRgba)(o)[3])),
                this._setProperty(t, (0, l.generateColor)(String(e), s, !0), h),
                (this._trackEventLabel =
                  'Plot color > ' + (n ? 'Palette' : 'Single'));
            }),
            (this._onOpacityChange = (e) => {
              const { color: t } = this.props,
                n = (0, u.getPropertyValue)(t);
              this._setProperty(
                t,
                (0, l.generateColor)(n, (0, l.alphaToTransparency)(e), !0),
                m,
              );
            }),
            (this._onPopupClose = () => {
              this._trackEventLabel &&
                ((0, d.trackEvent)(
                  'GUI',
                  'Study settings',
                  this._trackEventLabel,
                ),
                (this._trackEventLabel = null));
            });
        }
        componentWillUnmount() {
          this._onPopupClose();
        }
        render() {
          const {
            selectOpacity: e = !0,
            disabled: t,
            className: n,
          } = this.props;
          return o.createElement(c.ColorSelect, {
            className: n,
            disabled: t,
            color: this._getColorValueInHex(),
            selectOpacity: e,
            opacity: this._getOpacityValue(),
            thickness: this._getThicknessValue(),
            thicknessItems: g,
            onColorChange: this._onColorChange,
            onOpacityChange: this._onOpacityChange,
            onThicknessChange: this._onThicknessChange,
            onPopupClose: this._onPopupClose,
          });
        }
        _getThicknessValue() {
          const { thickness: e } = this.props;
          return e ? (0, u.getPropertyValue)(e) : void 0;
        }
        _setProperty(e, t, n) {
          const { setValue: o } = this.context;
          (0, u.setPropertyValue)(e, (e) => o(e, t, n));
        }
      }
      v.contextType = i.StylePropertyContext;
    },
    40296: (e, t, n) => {
      'use strict';
      n.d(t, { PropertyTable: () => i });
      var o = n(50959),
        r = n(97754),
        s = n(90186),
        a = n(20374);
      const l = o.createContext(!1);
      class i extends o.PureComponent {
        render() {
          return o.createElement(
            'div',
            {
              ref: this.props.reference,
              className: r(a.content, this.props.className),
            },
            this.props.children,
          );
        }
      }
      (i.InlineRowContext = l),
        (i.Row = function (e) {
          const { children: t } = e;
          return (0, o.useContext)(l)
            ? o.createElement('span', { className: a.inlineRow }, t)
            : o.createElement(o.Fragment, null, t);
        }),
        (i.Cell = function (e) {
          const t = (0, o.useContext)(l),
            n = r(
              a.cell,
              e.offset && a.offset,
              e.grouped && a.grouped,
              t && a.inlineCell,
              'top' === e.verticalAlign && a.top,
              'topCenter' === e.verticalAlign && a.topCenter,
              'adaptive' === e.verticalAlign && a.adaptive,
              e.checkableTitle && a.checkableTitle,
              2 === e.colSpan && a.fill,
              'first' === e.placement && 2 !== e.colSpan && a.first,
              'last' === e.placement && 2 !== e.colSpan && a.last,
            ),
            i = (0, s.filterDataProps)(e);
          return o.createElement(
            'div',
            { ...i, className: n },
            o.createElement(
              'div',
              { className: r(a.inner, e.className) },
              e.children,
            ),
          );
        }),
        (i.Separator = function (e) {
          return o.createElement(
            i.Row,
            null,
            o.createElement('div', {
              className: r(a.cell, a.separator, a.fill),
            }),
          );
        }),
        (i.GroupSeparator = function (e) {
          const t = e.size || 0;
          return o.createElement(
            i.Row,
            null,
            o.createElement('div', {
              className: r(a.cell, a.groupSeparator, a.fill, 1 === t && a.big),
            }),
          );
        });
    },
    37350: (e, t, n) => {
      'use strict';
      function o(e) {
        return Array.isArray(e) ? e[0].value() : e.value();
      }
      function r(e, t) {
        if (Array.isArray(e)) for (const n of e) t(n);
        else t(e);
      }
      n.d(t, { getPropertyValue: () => o, setPropertyValue: () => r });
    },
    65890: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11" height="9" fill="none"><path stroke-width="2" d="M0.999878 4L3.99988 7L9.99988 1"/></svg>';
    },
    64912: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 7" width="11" height="7" fill="none"><path stroke="currentColor" stroke-width="1.3" d="M.5 1.5l5 4 5-4"/></svg>';
    },
    93929: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M13.5 7l1.65-1.65a.5.5 0 0 0 0-.7l-1.8-1.8a.5.5 0 0 0-.7 0L11 4.5M13.5 7L11 4.5M13.5 7l-8.35 8.35a.5.5 0 0 1-.36.15H2.5v-2.3a.5.5 0 0 1 .15-.35L11 4.5"/></svg>';
    },
    85508: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 8.5h1.5V14"/><circle fill="currentColor" cx="9" cy="5" r="1"/><path stroke="currentColor" d="M16.5 9a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z"/></svg>';
    },
  },
]);