(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [5009],
  {
    50411: (e) => {
      e.exports = {
        container: 'container-M2Pby5d6',
        list: 'list-M2Pby5d6',
        overlayScrollWrap: 'overlayScrollWrap-M2Pby5d6',
        scroll: 'scroll-M2Pby5d6',
      };
    },
    63216: (e) => {
      e.exports = { container: 'container-BoAY_ptP', title: 'title-BoAY_ptP' };
    },
    90585: (e) => {
      e.exports = {
        container: 'container-nVh4c_cg',
        inputContainer: 'inputContainer-nVh4c_cg',
        withCancel: 'withCancel-nVh4c_cg',
        input: 'input-nVh4c_cg',
        icon: 'icon-nVh4c_cg',
        cancel: 'cancel-nVh4c_cg',
      };
    },
    48110: (e) => {
      e.exports = {
        container: 'container-EqXpAF5F',
        labelWrap: 'labelWrap-EqXpAF5F',
        icon: 'icon-EqXpAF5F',
        text: 'text-EqXpAF5F',
      };
    },
    70815: (e) => {
      e.exports = { sortButton: 'sortButton-FIPRqrMd', icon: 'icon-FIPRqrMd' };
    },
    83307: (e) => {
      e.exports = { highlighted: 'highlighted-sanWmRqQ' };
    },
    55498: (e) => {
      e.exports = {
        'tablet-small-breakpoint': 'screen and (max-width: 430px)',
        item: 'item-RhC5uhZw',
        hovered: 'hovered-RhC5uhZw',
        isDisabled: 'isDisabled-RhC5uhZw',
        isActive: 'isActive-RhC5uhZw',
        shortcut: 'shortcut-RhC5uhZw',
        toolbox: 'toolbox-RhC5uhZw',
        withIcon: 'withIcon-RhC5uhZw',
        icon: 'icon-RhC5uhZw',
        labelRow: 'labelRow-RhC5uhZw',
        label: 'label-RhC5uhZw',
        showOnHover: 'showOnHover-RhC5uhZw',
      };
    },
    90186: (e, t, n) => {
      'use strict';
      function a(e) {
        return r(e, i);
      }
      function o(e) {
        return r(e, l);
      }
      function r(e, t) {
        const n = Object.entries(e).filter(t),
          a = {};
        for (const [e, t] of n) a[e] = t;
        return a;
      }
      function i(e) {
        const [t, n] = e;
        return 0 === t.indexOf('data-') && 'string' == typeof n;
      }
      function l(e) {
        return 0 === e[0].indexOf('aria-');
      }
      n.d(t, {
        filterDataProps: () => a,
        filterAriaProps: () => o,
        filterProps: () => r,
        isDataAttribute: () => i,
        isAriaAttribute: () => l,
      });
    },
    39640: (e, t, n) => {
      'use strict';
      function a(e, t, n, a, o) {
        function r(o) {
          if (e > o.timeStamp) return;
          const r = o.target;
          void 0 !== n &&
            null !== t &&
            null !== r &&
            r.ownerDocument === a &&
            (t.contains(r) || n(o));
        }
        return (
          o.click && a.addEventListener('click', r, !1),
          o.mouseDown && a.addEventListener('mousedown', r, !1),
          o.touchEnd && a.addEventListener('touchend', r, !1),
          o.touchStart && a.addEventListener('touchstart', r, !1),
          () => {
            a.removeEventListener('click', r, !1),
              a.removeEventListener('mousedown', r, !1),
              a.removeEventListener('touchend', r, !1),
              a.removeEventListener('touchstart', r, !1);
          }
        );
      }
      n.d(t, { addOutsideEventListener: () => a });
    },
    69654: (e, t, n) => {
      'use strict';
      n.d(t, { DialogSearch: () => u });
      var a = n(50959),
        o = n(97754),
        r = n.n(o),
        i = n(44352),
        l = n(9745),
        s = n(69859),
        c = n(90585);
      function u(e) {
        const {
          children: t,
          renderInput: o,
          onCancel: u,
          containerClassName: d,
          ...h
        } = e;
        return a.createElement(
          'div',
          { className: r()(c.container, d) },
          a.createElement(
            'div',
            { className: r()(c.inputContainer, u && c.withCancel) },
            o || a.createElement(m, { ...h }),
          ),
          t,
          a.createElement(l.Icon, { className: c.icon, icon: s }),
          u &&
            a.createElement(
              'div',
              { className: c.cancel, onClick: u },
              i.t(null, void 0, n(20036)),
            ),
        );
      }
      function m(e) {
        const {
          className: t,
          reference: n,
          value: o,
          onChange: i,
          onFocus: l,
          onBlur: s,
          onKeyDown: u,
          onSelect: m,
          placeholder: d,
          ...h
        } = e;
        return a.createElement('input', {
          ...h,
          ref: n,
          type: 'text',
          className: r()(t, c.input),
          autoComplete: 'off',
          'data-role': 'search',
          placeholder: d,
          value: o,
          onChange: i,
          onFocus: l,
          onBlur: s,
          onSelect: m,
          onKeyDown: u,
        });
      }
    },
    19785: (e, t, n) => {
      'use strict';
      n.d(t, {
        rankedSearch: () => o,
        createRegExpList: () => r,
        getHighlightedChars: () => i,
      });
      var a = n(65665);
      function o(e) {
        const {
          data: t,
          rules: n,
          queryString: o,
          isPreventedFromFiltering: r,
          primaryKey: i,
          secondaryKey: l = i,
          optionalPrimaryKey: s,
          tertiaryKey: c,
        } = e;
        return t
          .map((e) => {
            const t = s && e[s] ? e[s] : e[i],
              r = e[l],
              u = c && e[c];
            let m,
              d = 0;
            return (
              n.forEach((e) => {
                var n, i, l, s, c;
                const { re: h, fullMatch: y } = e;
                if (
                  ((h.lastIndex = 0),
                  (0, a.isString)(t) &&
                    t &&
                    t.toLowerCase() === o.toLowerCase())
                )
                  return (
                    (d = 4),
                    void (m =
                      null === (n = t.match(y)) || void 0 === n
                        ? void 0
                        : n.index)
                  );
                if ((0, a.isString)(t) && y.test(t))
                  return (
                    (d = 3),
                    void (m =
                      null === (i = t.match(y)) || void 0 === i
                        ? void 0
                        : i.index)
                  );
                if ((0, a.isString)(r) && y.test(r))
                  return (
                    (d = 2),
                    void (m =
                      null === (l = r.match(y)) || void 0 === l
                        ? void 0
                        : l.index)
                  );
                if ((0, a.isString)(r) && h.test(r))
                  return (
                    (d = 2),
                    void (m =
                      null === (s = r.match(h)) || void 0 === s
                        ? void 0
                        : s.index)
                  );
                if (Array.isArray(u))
                  for (const e of u)
                    if (y.test(e))
                      return (
                        (d = 1),
                        void (m =
                          null === (c = e.match(y)) || void 0 === c
                            ? void 0
                            : c.index)
                      );
              }),
              { matchPriority: d, matchIndex: m, item: e }
            );
          })
          .filter((e) => r || e.matchPriority)
          .sort((e, t) => {
            if (e.matchPriority < t.matchPriority) return 1;
            if (e.matchPriority > t.matchPriority) return -1;
            if (e.matchPriority === t.matchPriority) {
              if (void 0 === e.matchIndex || void 0 === t.matchIndex) return 0;
              if (e.matchIndex > t.matchIndex) return 1;
              if (e.matchIndex < t.matchIndex) return -1;
            }
            return 0;
          })
          .map(({ item: e }) => e);
      }
      function r(e, t) {
        const n = [],
          a = e.toLowerCase(),
          o =
            e
              .split('')
              .map((e, t) => `(${0 !== t ? `[/\\s-]${l(e)}` : l(e)})`)
              .join('(.*?)') + '(.*)';
        return (
          n.push({
            fullMatch: new RegExp(`(${l(e)})`, 'i'),
            re: new RegExp(`^${o}`, 'i'),
            reserveRe: new RegExp(o, 'i'),
            fuzzyHighlight: !0,
          }),
          t &&
            t.hasOwnProperty(a) &&
            n.push({ fullMatch: t[a], re: t[a], fuzzyHighlight: !1 }),
          n
        );
      }
      function i(e, t, n) {
        const a = [];
        return e && n
          ? (n.forEach((e) => {
              const { fullMatch: n, re: o, reserveRe: r } = e;
              (n.lastIndex = 0), (o.lastIndex = 0);
              const i = n.exec(t),
                l = i || o.exec(t) || (r && r.exec(t));
              if (((e.fuzzyHighlight = !i), l))
                if (e.fuzzyHighlight) {
                  let e = l.index;
                  for (let t = 1; t < l.length; t++) {
                    const n = l[t],
                      o = l[t].length;
                    if (t % 2) {
                      const t =
                        n.startsWith(' ') ||
                        n.startsWith('/') ||
                        n.startsWith('-');
                      a[t ? e + 1 : e] = !0;
                    }
                    e += o;
                  }
                } else
                  for (let e = 0; e < l[0].length; e++) a[l.index + e] = !0;
            }),
            a)
          : a;
      }
      function l(e) {
        return e.replace(/[!-/[-^{-}]/g, '\\$&');
      }
    },
    24637: (e, t, n) => {
      'use strict';
      n.d(t, { HighlightedText: () => l });
      var a = n(50959),
        o = n(97754),
        r = n(19785),
        i = n(83307);
      function l(e) {
        const { queryString: t, rules: n, text: l, className: s } = e,
          c = (0, a.useMemo)(
            () => (0, r.getHighlightedChars)(t, l, n),
            [t, n, l],
          );
        return a.createElement(
          a.Fragment,
          null,
          c.length
            ? l
                .split('')
                .map((e, t) =>
                  a.createElement(
                    a.Fragment,
                    { key: t },
                    c[t]
                      ? a.createElement(
                          'span',
                          { className: o(i.highlighted, s) },
                          e,
                        )
                      : a.createElement('span', null, e),
                  ),
                )
            : l,
        );
      }
    },
    16396: (e, t, n) => {
      'use strict';
      n.d(t, {
        DEFAULT_POPUP_MENU_ITEM_THEME: () => c,
        PopupMenuItem: () => m,
      });
      var a = n(50959),
        o = n(97754),
        r = n(59064),
        i = n(51768),
        l = n(90186),
        s = n(55498);
      const c = s;
      function u(e) {
        e.stopPropagation();
      }
      function m(e) {
        const {
            id: t,
            role: n,
            'aria-label': c,
            'aria-selected': m,
            'aria-checked': d,
            className: h,
            title: y,
            labelRowClassName: f,
            labelClassName: g,
            shortcut: p,
            forceShowShortcuts: _,
            icon: v,
            isActive: b,
            isDisabled: w,
            isHovered: C,
            appearAsDisabled: D,
            label: k,
            link: E,
            showToolboxOnHover: L,
            target: S,
            rel: A,
            toolbox: x,
            reference: N,
            onMouseOut: z,
            onMouseOver: M,
            onKeyDown: T,
            suppressToolboxClick: I = !0,
            theme: F = s,
            tabIndex: Z,
            tagName: R,
            renderComponent: P,
          } = e,
          O = (0, l.filterDataProps)(e),
          B = (0, a.useRef)(null),
          H = (0, a.useMemo)(
            () =>
              (function (e) {
                function t(t) {
                  const { reference: n, ...o } = t,
                    r = null != e ? e : o.href ? 'a' : 'div',
                    i =
                      'a' === r
                        ? o
                        : (function (e) {
                            const {
                              download: t,
                              href: n,
                              hrefLang: a,
                              media: o,
                              ping: r,
                              rel: i,
                              target: l,
                              type: s,
                              referrerPolicy: c,
                              ...u
                            } = e;
                            return u;
                          })(o);
                  return a.createElement(r, { ...i, ref: n });
                }
                return (t.displayName = `DefaultComponent(${e})`), t;
              })(R),
            [R],
          ),
          W = null != P ? P : H;
        return a.createElement(
          W,
          {
            ...O,
            id: t,
            role: n,
            'aria-label': c,
            'aria-selected': m,
            'aria-checked': d,
            className: o(h, F.item, v && F.withIcon, {
              [F.isActive]: b,
              [F.isDisabled]: w || D,
              [F.hovered]: C,
            }),
            title: y,
            href: E,
            target: S,
            rel: A,
            reference: function (e) {
              (B.current = e), 'function' == typeof N && N(e);
              'object' == typeof N && (N.current = e);
            },
            onClick: function (t) {
              const {
                dontClosePopup: n,
                onClick: a,
                onClickArg: o,
                trackEventObject: l,
              } = e;
              if (w) return;
              l && (0, i.trackEvent)(l.category, l.event, l.label);
              a && a(o, t);
              n || (0, r.globalCloseMenu)();
            },
            onContextMenu: function (t) {
              const { trackEventObject: n, trackRightClick: a } = e;
              n &&
                a &&
                (0, i.trackEvent)(n.category, n.event, `${n.label}_rightClick`);
            },
            onMouseUp: function (t) {
              const { trackEventObject: n, trackMouseWheelClick: a } = e;
              if (1 === t.button && E && n) {
                let e = n.label;
                a && (e += '_mouseWheelClick'),
                  (0, i.trackEvent)(n.category, n.event, e);
              }
            },
            onMouseOver: M,
            onMouseOut: z,
            onKeyDown: T,
            tabIndex: Z,
          },
          void 0 !== v &&
            a.createElement('span', {
              className: F.icon,
              dangerouslySetInnerHTML: { __html: v },
            }),
          a.createElement(
            'span',
            { className: o(F.labelRow, f) },
            a.createElement('span', { className: o(F.label, g) }, k),
          ),
          (void 0 !== p || _) &&
            a.createElement(
              'span',
              { className: F.shortcut },
              (j = p) && j.split('+').join(' + '),
            ),
          void 0 !== x &&
            a.createElement(
              'span',
              {
                onClick: I ? u : void 0,
                className: o(F.toolbox, { [F.showOnHover]: L }),
              },
              x,
            ),
        );
        var j;
      }
    },
    50628: (e, t, n) => {
      'use strict';
      n.d(t, { PopupMenu: () => u });
      var a = n(50959),
        o = n(962),
        r = n(62942),
        i = n(65718),
        l = n(27317),
        s = n(29197),
        c = n(58095);
      function u(e) {
        const {
            controller: t,
            children: n,
            isOpened: u,
            closeOnClickOutside: m = !0,
            doNotCloseOn: d,
            onClickOutside: h,
            onClose: y,
            onKeyboardClose: f,
            'data-name': g = 'popup-menu-container',
            ...p
          } = e,
          _ = (0, a.useContext)(s.CloseDelegateContext),
          v = (0, c.useOutsideEvent)({
            handler: function (e) {
              h && h(e);
              if (!m) return;
              const t = (0, r.default)(d) ? d() : d;
              if (t && e.target instanceof Node) {
                const n = o.findDOMNode(t);
                if (n instanceof Node && n.contains(e.target)) return;
              }
              y();
            },
            mouseDown: !0,
            touchStart: !0,
          });
        return u
          ? a.createElement(
              i.Portal,
              {
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                pointerEvents: 'none',
              },
              a.createElement(
                'span',
                { ref: v, style: { pointerEvents: 'auto' } },
                a.createElement(
                  l.Menu,
                  {
                    ...p,
                    onClose: y,
                    onKeyboardClose: f,
                    onScroll: function (t) {
                      const { onScroll: n } = e;
                      n && n(t);
                    },
                    customCloseDelegate: _,
                    ref: t,
                    'data-name': g,
                  },
                  n,
                ),
              ),
            )
          : null;
      }
    },
    62094: (e) => {
      e.exports = {
        highlight: 'highlight-ng6ukD8E',
        active: 'active-ng6ukD8E',
      };
    },
    51939: (e) => {
      e.exports = {
        dialog: 'dialog-Ot86R_eC',
        contentList: 'contentList-Ot86R_eC',
        contentHeader: 'contentHeader-Ot86R_eC',
      };
    },
    39313: (e, t, n) => {
      'use strict';
      n.d(t, {
        VerticalAttachEdge: () => a,
        HorizontalAttachEdge: () => o,
        VerticalDropDirection: () => r,
        HorizontalDropDirection: () => i,
        getPopupPositioner: () => c,
      });
      var a,
        o,
        r,
        i,
        l = n(50151);
      !(function (e) {
        (e[(e.Top = 0)] = 'Top'), (e[(e.Bottom = 1)] = 'Bottom');
      })(a || (a = {})),
        (function (e) {
          (e[(e.Left = 0)] = 'Left'), (e[(e.Right = 1)] = 'Right');
        })(o || (o = {})),
        (function (e) {
          (e[(e.FromTopToBottom = 0)] = 'FromTopToBottom'),
            (e[(e.FromBottomToTop = 1)] = 'FromBottomToTop');
        })(r || (r = {})),
        (function (e) {
          (e[(e.FromLeftToRight = 0)] = 'FromLeftToRight'),
            (e[(e.FromRightToLeft = 1)] = 'FromRightToLeft');
        })(i || (i = {}));
      const s = {
        verticalAttachEdge: a.Bottom,
        horizontalAttachEdge: o.Left,
        verticalDropDirection: r.FromTopToBottom,
        horizontalDropDirection: i.FromLeftToRight,
        verticalMargin: 0,
        horizontalMargin: 0,
        matchButtonAndListboxWidths: !1,
      };
      function c(e, t) {
        return (n, c) => {
          const u = (0, l.ensureNotNull)(e).getBoundingClientRect(),
            {
              verticalAttachEdge: m = s.verticalAttachEdge,
              verticalDropDirection: d = s.verticalDropDirection,
              horizontalAttachEdge: h = s.horizontalAttachEdge,
              horizontalDropDirection: y = s.horizontalDropDirection,
              horizontalMargin: f = s.horizontalMargin,
              verticalMargin: g = s.verticalMargin,
              matchButtonAndListboxWidths: p = s.matchButtonAndListboxWidths,
            } = t,
            _ = m === a.Top ? -1 * g : g,
            v = h === o.Right ? u.right : u.left,
            b = m === a.Top ? u.top : u.bottom,
            w = {
              x: v - (y === i.FromRightToLeft ? n : 0) + f,
              y: b - (d === r.FromBottomToTop ? c : 0) + _,
            };
          return p && (w.overrideWidth = u.width), w;
        };
      }
    },
    69883: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { LoadChartDialogRenderer: () => re });
      var a = n(50959),
        o = n(962),
        r = n(97754),
        i = n.n(r),
        l = n(50151),
        s = n(44352),
        c = n(56840),
        u = n(49483),
        m = n(75208),
        d = n(50628),
        h = n(39313),
        y = n(9745),
        f = n(44563),
        g = n(645),
        p = n(70815);
      function _(e) {
        const { sortDirection: t, children: n, ...o } = e,
          i = (0, a.useRef)(null),
          [l, s] = (0, a.useState)(!1);
        return a.createElement(
          'div',
          {
            ...o,
            ref: i,
            className: r(
              p.sortButton,
              'apply-common-tooltip',
              'common-tooltip-vertical',
            ),
            onClick: function () {
              s(!l);
            },
          },
          a.createElement(y.Icon, { className: p.icon, icon: 0 === t ? f : g }),
          a.createElement(
            d.PopupMenu,
            {
              doNotCloseOn: i.current,
              isOpened: l,
              onClose: () => {
                s(!1);
              },
              position: (0, h.getPopupPositioner)(i.current, {
                verticalMargin: -35,
                verticalAttachEdge: 0,
              }),
            },
            n,
          ),
        );
      }
      var v = n(16396),
        b = n(48110);
      function w(e) {
        const {
            label: t,
            listSortField: n,
            itemSortField: o,
            listSortDirection: i,
            itemSortDirection: l,
            onClick: s,
            className: c,
            ...u
          } = e,
          m = o === n && l === i;
        return a.createElement(v.PopupMenuItem, {
          ...u,
          className: r(b.container, c),
          label: a.createElement(
            'div',
            { className: b.labelWrap },
            a.createElement(y.Icon, {
              className: b.icon,
              icon: 0 === l ? f : g,
            }),
            a.createElement('span', { className: b.text }, t),
          ),
          isActive: m,
          onClick: function () {
            s(o, l);
          },
          'data-active': m.toString(),
          'data-sort-field': o,
          'data-sort-direction': 0 === l ? 'asc' : 'desc',
        });
      }
      var C = n(69654),
        D = n(63216);
      function k(e) {
        const { children: t, className: n } = e;
        return a.createElement('div', { className: i()(D.container, n) }, t);
      }
      function E(e) {
        const { title: t } = e;
        return a.createElement('div', { className: D.title }, t);
      }
      var L = n(50335);
      var S = n(20037),
        A = n(80142),
        x = n(898),
        N = n(33127);
      var z = n(3085),
        M = n(50411);
      function T(e) {
        const {
            className: t,
            onScroll: n,
            onTouchStart: o,
            reference: r,
            children: l,
            scrollbar: s,
            ...c
          } = e,
          [m, d] = (0, x.useDimensions)(),
          [h, y, f, g] = (0, N.useOverlayScroll)();
        return (
          (0, a.useEffect)(() => {
            const e = () => {};
            return u.isFF
              ? (document.addEventListener('wheel', () => e),
                () => {
                  document.removeEventListener('wheel', e);
                })
              : e;
          }, []),
          a.createElement(
            'div',
            {
              ...('overlay' === s && y),
              className: i()(M.container, t),
              onTouchStart: o,
              onScrollCapture: n,
              ref: m,
            },
            'overlay' === s &&
              a.createElement(z.OverlayScrollContainer, {
                ...h,
                className: M.overlayScrollWrap,
              }),
            a.createElement(S.FixedSizeList, {
              ref: r,
              className: i()('native' === s ? M.scroll : M.list),
              outerRef: 'overlay' === s ? f : void 0,
              onItemsRendered: g,
              layout: 'vertical',
              width: '100%',
              height: (null == d ? void 0 : d.height) || 0,
              children: l,
              direction: (0, A.isRtl)() ? 'rtl' : 'ltr',
              ...c,
            }),
          )
        );
      }
      var I = n(84015);
      var F = n(2484),
        Z = n(64530),
        R = n(92133),
        P = n(50655),
        O = n(3615);
      var B = n(86985),
        H = n(78831),
        W = n(24637),
        j = n(19785),
        q = n(62094);
      const Y = new B.DateFormatter('dd-MM-yyyy'),
        U = new H.TimeFormatter(H.hourMinuteFormat),
        V = F.enabled('items_favoriting');
      function K(e) {
        const {
            chart: t,
            chartWidgetCollection: o,
            trackEvent: r,
            localFavorites: l,
            setLocalFavorites: c,
            onClose: u,
            searchString: m,
            onClickRemove: d,
            onRemoveCanceled: h,
            isSelected: y,
          } = e,
          [f, g] = (0, a.useState)(() => t.active()),
          [p, _] = (0, a.useState)(!1),
          v = t.url
            ? (function (e) {
                const t = e.chartId ? `/chart/${e.chartId}/` : '/chart/',
                  n = new URL(t, location.href);
                return (
                  e.symbol && n.searchParams.append('symbol', e.symbol),
                  e.interval && n.searchParams.append('interval', e.interval),
                  e.style && n.searchParams.append('style', e.style),
                  (0, I.urlWithMobileAppParams)(n.href)
                );
              })({ chartId: t.url })
            : void 0,
          b = (0, a.useContext)(P.SlotContext),
          w = (0, a.useMemo)(() => new Date(1e3 * t.modified), [t]),
          C = (0, a.useMemo)(() => (0, j.createRegExpList)(m), [m]),
          D = i()(q.highlight, f && q.active);
        return (
          (0, a.useEffect)(
            () => (
              o && o.metaInfo.id.subscribe(E),
              () => {
                o && o.metaInfo.id.unsubscribe(E);
              }
            ),
            [],
          ),
          a.createElement(Z.DialogContentItem, {
            url: v,
            title: a.createElement(W.HighlightedText, {
              className: D,
              queryString: m,
              rules: C,
              text: t.title,
            }),
            subtitle: a.createElement(
              a.Fragment,
              null,
              a.createElement(W.HighlightedText, {
                className: D,
                queryString: m,
                rules: C,
                text: t.description,
              }),
              ' ',
              '(',
              Y.format(w).replace(/-/g, '.'),
              ' ',
              U.formatLocal(w),
              ')',
            ),
            onClick: function (e) {
              0;
              t.openAction(), !1;
            },
            onClickFavorite: function () {
              0;
              const e = { ...l };
              e[t.id] ? delete e[t.id] : (e[t.id] = !0);
              t.favoriteAction(e).then(() => {
                0;
              });
            },
            showFavorite: V,
            onClickRemove: async function () {
              if (p) return;
              _(!0);
              const e = await (async function (e) {
                return s.t(null, { replace: { name: e.title } }, n(69368));
              })(t);
              _(!1),
                (function (e, t, n, a) {
                  (0, O.showConfirm)(
                    {
                      text: e,
                      onConfirm: ({ dialogClose: e }) => {
                        t(), e();
                      },
                      onClose: () => {
                        n();
                      },
                    },
                    a,
                  );
                })(e, k, h, b);
            },
            isFavorite: Boolean(l[t.id]),
            isActive: f,
            isSelected: y,
            'data-name': 'load-chart-dialog-item',
          })
        );
        function k() {
          t.deleteAction().then(() => d(t.id));
        }
        function E(e) {
          g(t.id === e);
        }
      }
      var $ = n(59064),
        X = n(68335);
      var G = n(51939);
      const J = { sortField: 'modified', sortDirection: 1 },
        Q = (function (e) {
          const { paddingTop: t = 0, paddingBottom: n = 0 } = e;
          return (0, a.forwardRef)(({ style: e, ...o }, r) => {
            const { height: i = 0 } = e;
            return a.createElement('div', {
              ref: r,
              style: {
                ...e,
                height: `${((0, L.isNumber)(i) ? i : parseFloat(i)) + t + n}px`,
              },
              ...o,
            });
          });
        })({ paddingBottom: 6 });
      function ee(e) {
        let t;
        try {
          t = (0, R.getTranslatedResolution)(e);
        } catch (n) {
          t = e;
        }
        return t;
      }
      const te = F.enabled('items_favoriting'),
        ne = s.t(null, void 0, n(75789));
      function ae(e) {
        const {
            charts: t,
            onClose: o,
            favoriteChartsService: r,
            chartWidgetCollection: d,
          } = e,
          [h, y] = (0, a.useState)(''),
          [f, g] = (0, a.useState)(h),
          [p, v] = (0, a.useState)([]),
          b = (0, a.useRef)(null),
          [D, L] = (0, a.useState)(function () {
            if (r) return r.get();
            const e = {};
            return (
              t
                .filter((e) => e.favorite)
                .forEach((t) => {
                  e[t.id] = !0;
                }),
              e
            );
          }),
          [S, A] = (0, a.useState)(() =>
            c.getJSON('loadChartDialog.viewState', J),
          ),
          x = (0, a.useRef)(null),
          N = (0, a.useRef)(null),
          z = (0, a.useMemo)(
            () =>
              t.map((e) => ({
                ...e,
                description: `${e.symbol}, ${ee(e.interval)}`,
              })),
            [t],
          );
        (0, a.useEffect)(() => {
          u.CheckMobile.any() || (0, l.ensureNotNull)(x.current).focus();
        }, []);
        const M = (0, a.useRef)();
        (0, a.useEffect)(
          () => (
            (M.current = setTimeout(() => {
              y(f);
            }, 300)),
            () => {
              clearTimeout(M.current);
            }
          ),
          [f],
        ),
          (0, a.useEffect)(
            () => (
              null == r || r.getOnChange().subscribe(null, q),
              () => {
                null == r || r.getOnChange().unsubscribe(null, q);
              }
            ),
            [],
          );
        const I = (0, a.useCallback)(() => !0, []),
          F = (0, a.useMemo)(() => {
            return (0, j.rankedSearch)({
              data: z
                .filter((e) => !p.includes(e.id))
                .sort(
                  ((e = S.sortDirection),
                  (t, n) => {
                    if (D[t.id] && !D[n.id]) return -1;
                    if (!D[t.id] && D[n.id]) return 1;
                    const a = 0 === e ? 1 : -1;
                    return 'modified' === S.sortField
                      ? a * (t.modified - n.modified)
                      : a * t.title.localeCompare(n.title);
                  }),
                ),
              rules: (0, j.createRegExpList)(h),
              queryString: h,
              primaryKey: 'title',
              secondaryKey: 'description',
            });
            var e;
          }, [h, S, p, D]),
          {
            selectedItemIndex: Z,
            setSelectedItemIndex: R,
            handleKeyboardSelection: P,
          } = (function (e, t, n) {
            const [o, r] = (0, a.useState)(-1);
            return (
              (0, a.useEffect)(() => {
                var e;
                -1 !== o &&
                  (null === (e = n.current) ||
                    void 0 === e ||
                    e.scrollToItem(o));
              }, [o]),
              {
                selectedItemIndex: o,
                setSelectedItemIndex: r,
                handleKeyboardSelection: function (n) {
                  switch ((0, X.hashFromEvent)(n)) {
                    case 40:
                      if (o === e - 1) return;
                      r(o + 1);
                      break;
                    case 38:
                      if (0 === o) return;
                      if (-1 === o) return void r(o + 1);
                      r(o - 1);
                      break;
                    case 13:
                      t(n);
                  }
                },
              }
            );
          })(
            F.length,
            function (e) {
              const t = F[Z];
              if (-1 === Z || !t) return;
              0;
              t.openAction(), !1;
            },
            N,
          );
        return a.createElement(m.AdaptivePopupDialog, {
          ref: b,
          onClose: o,
          onClickOutside: o,
          onKeyDown: P,
          isOpened: !0,
          className: G.dialog,
          title: ne,
          dataName: 'load-layout-dialog',
          render: function () {
            return a.createElement(
              a.Fragment,
              null,
              a.createElement(C.DialogSearch, {
                reference: x,
                onChange: B,
                placeholder: s.t(null, void 0, n(52298)),
              }),
              a.createElement(
                k,
                { className: i()(!te && G.contentHeader) },
                a.createElement(E, { title: s.t(null, void 0, n(25653)) }),
                a.createElement(
                  _,
                  {
                    sortDirection: S.sortDirection,
                    title: s.t(null, void 0, n(41583)),
                    'data-name': 'load-chart-dialog-sort-button',
                  },
                  a.createElement(w, {
                    label: s.t(null, void 0, n(63479)),
                    listSortField: S.sortField,
                    itemSortField: 'title',
                    listSortDirection: S.sortDirection,
                    itemSortDirection: 0,
                    onClick: U,
                    'data-name': 'load-chart-dialog-sort-menu-item',
                  }),
                  a.createElement(w, {
                    label: s.t(null, void 0, n(96189)),
                    listSortField: S.sortField,
                    itemSortField: 'title',
                    listSortDirection: S.sortDirection,
                    itemSortDirection: 1,
                    onClick: U,
                    'data-name': 'load-chart-dialog-sort-menu-item',
                  }),
                  a.createElement(w, {
                    label: s.t(null, void 0, n(38212)),
                    listSortField: S.sortField,
                    itemSortField: 'modified',
                    listSortDirection: S.sortDirection,
                    itemSortDirection: 0,
                    onClick: U,
                    'data-name': 'load-chart-dialog-sort-menu-item',
                  }),
                  a.createElement(w, {
                    label: s.t(null, void 0, n(63037)),
                    listSortField: S.sortField,
                    itemSortField: 'modified',
                    listSortDirection: S.sortDirection,
                    itemSortDirection: 1,
                    onClick: U,
                    'data-name': 'load-chart-dialog-sort-menu-item',
                  }),
                ),
              ),
              a.createElement(T, {
                scrollbar: 'native',
                reference: N,
                itemCount: F.length,
                itemSize: 52,
                className: G.contentList,
                onScroll: O,
                innerElementType: Q,
                itemKey: (e) => (D[F[e].id] ? 'f_' : '') + F[e].id,
                children: ({ style: e, index: t }) =>
                  a.createElement(
                    'div',
                    { style: e },
                    a.createElement(K, {
                      chart: F[t],
                      onClose: o,
                      chartWidgetCollection: d,
                      trackEvent: H,
                      onRemoveCanceled: Y,
                      localFavorites: D,
                      setLocalFavorites: L,
                      searchString: h,
                      onClickRemove: W,
                      isSelected: t === Z,
                    }),
                  ),
              }),
            );
          },
          forceCloseOnEsc: I,
        });
        function O() {
          $.globalCloseDelegate.fire();
        }
        function B(e) {
          const t = e.currentTarget.value;
          g(t), R(-1);
        }
        function H(e) {
          0;
        }
        function W(e) {
          v([e, ...p]);
        }
        function q(e) {
          L(e);
        }
        function Y() {
          (0, l.ensureNotNull)(b.current).focus();
        }
        function U(e, t) {
          const n = { sortField: e, sortDirection: t };
          A(n),
            c.setValue('loadChartDialog.viewState', JSON.stringify(n), {
              forceFlush: !0,
            }),
            H();
        }
      }
      var oe = n(88279);
      class re extends oe.DialogRenderer {
        constructor(e) {
          super(), (this._options = e);
        }
        show() {
          o.render(
            a.createElement(ae, {
              ...this._options,
              onClose: () => this.hide(),
            }),
            this._container,
          ),
            this._setVisibility(!0);
        }
        hide() {
          o.unmountComponentAtNode(this._container), this._setVisibility(!1);
        }
      }
    },
    645: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 18.5h-3M21.5 13.5h-5M23.5 8.5h-7M8.5 7v13.5M4.5 16.5l4 4 4-4"/></svg>';
    },
    44563: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 18.5h-3M21.5 13.5h-5M23.5 8.5h-7M8.5 20.5V7M12.5 11l-4-4-4 4"/></svg>';
    },
    69859: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path stroke="currentColor" d="M12.4 12.5a7 7 0 1 0-4.9 2 7 7 0 0 0 4.9-2zm0 0l5.101 5"/></svg>';
    },
    20036: (e) => {
      e.exports = {
        ar: ['إلغاء'],
        ca_ES: ['Cancel·la'],
        cs: ['Zrušit'],
        de: ['Abbrechen'],
        el: ['Άκυρο'],
        en: 'Cancel',
        es: ['Cancelar'],
        fa: ['لغو'],
        fr: ['Annuler'],
        he_IL: ['ביטול'],
        hu_HU: ['Törlés'],
        id_ID: ['Batal'],
        it: ['Annulla'],
        ja: ['キャンセル'],
        ko: ['취소'],
        ms_MY: ['Batal'],
        nl_NL: ['Annuleren'],
        pl: ['Anuluj'],
        pt: ['Cancelar'],
        ro: 'Cancel',
        ru: ['Отмена'],
        sv: ['Avbryt'],
        th: ['ยกเลิก'],
        tr: ['İptal'],
        vi: ['Hủy bỏ'],
        zh: ['取消'],
        zh_TW: ['取消'],
      };
    },
    15795: (e) => {
      e.exports = {
        ar: ['جميع تنسيقاتي'],
        ca_ES: 'All my layouts',
        cs: 'All my layouts',
        de: ['Alle meine Layouts'],
        el: 'All my layouts',
        en: 'All my layouts',
        es: ['Todos mis diseños'],
        fa: 'All my layouts',
        fr: ['Toutes mes mises en page'],
        he_IL: ['כל הפריסות שלי'],
        hu_HU: 'All my layouts',
        id_ID: ['Seluruh layout saya'],
        it: ['Tutti i miei layout'],
        ja: ['すべてのレイアウト'],
        ko: ['내 모든 레이아웃'],
        ms_MY: ['Semua susun atur saya'],
        nl_NL: 'All my layouts',
        pl: ['Wszystkie moje układy'],
        pt: ['Todos os meus layouts'],
        ro: 'All my layouts',
        ru: ['Все мои графики'],
        sv: ['Alla mina layouter'],
        th: ['เค้าโครงทั้งหมดของฉัน'],
        tr: ['Tüm yerleşimlerim'],
        vi: ['Tất cả bố cục của tôi'],
        zh: ['所有我的布局'],
        zh_TW: ['我的所有版面'],
      };
    },
    69368: (e) => {
      e.exports = {
        ar: ['هل تريد فعلا مسح تصميم مخطط الرسم البيانى‎ ‎{name}‎؟'],
        ca_ES: ["De debò que voleu eliminar el disseny del gràfic '{name}'?"],
        cs: "Do you really want to delete Chart Layout '{name}' ?",
        de: ["Möchten Sie das Chartlayout '{name}' wirklich löschen?"],
        el: "Do you really want to delete Chart Layout '{name}' ?",
        en: "Do you really want to delete Chart Layout '{name}' ?",
        es: [
          "¿Está seguro de que desea eliminar el Diseño del gráfico '{name}'?",
        ],
        fa: "Do you really want to delete Chart Layout '{name}' ?",
        fr: [
          "Voulez-vous vraiment supprimer la configuration du graphique '{name}' ?",
        ],
        he_IL: ["האם אתה באמת רוצה למחוק פריסת גרף '{name}'?"],
        hu_HU: ['Biztos, hogy törölni akarod ezt a chart elrendezést: {name}?'],
        id_ID: ["Apakah benar anda ingin menghapus Layout Chart '{name}' ?"],
        it: ["Cancellare la configurazione '{name}' ?"],
        ja: ["本当にチャートレイアウト '{name}' を削除しますか？"],
        ko: ["정말로 차트 레이아웃 '{name}' 을 지우시겠습니까?"],
        ms_MY: ["Anda benar-benar ingin memadam Susunatur Carta '{name}' ?"],
        nl_NL: "Do you really want to delete Chart Layout '{name}' ?",
        pl: ["Czy na pewno chcesz usunąć układ graficzny '{name}'?"],
        pt: ["Você quer realmente deletar o leiaute do gráfico '{name}'?"],
        ro: "Do you really want to delete Chart Layout '{name}' ?",
        ru: ['Вы действительно хотите удалить сохранённый график "{name}"?'],
        sv: ["Vill du verkligen ta bort diagramlayout '{name}' ?"],
        th: ["คุณต้องการลบชาทส์ '{name}' จริง ๆ หรือไม?"],
        tr: [
          "'{name}' isimli Grafik Yerleşimini silmek istediğinizden emin misiniz?",
        ],
        vi: ['Bạn có thực sự muốn xóa Bố cục Biểu đồ {name}?'],
        zh: ["确定删除图表布局'{name}' ?"],
        zh_TW: ['確定刪除圖表版面「{name}」？'],
      };
    },
    58013: (e) => {
      e.exports = {
        ar: [
          'هل تريد حقًا حذف تنسيق ارسم البياني "{name}" الذي يحتوي على ‎{n_drawings_on_n_symbols}‎؟',
        ],
        ca_ES: [
          "De debò que voleu eliminar el disseny del gràfic '{name}' que conté {n_drawings_on_n_symbols}?",
        ],
        cs: "Do you really want to delete Chart Layout '{name}' that contains {n_drawings_on_n_symbols}?",
        de: [
          "Möchten Sie wirklich das Chart-Layout '{name}' löschen, das {n_drawings_on_n_symbols} enthält?",
        ],
        el: "Do you really want to delete Chart Layout '{name}' that contains {n_drawings_on_n_symbols}?",
        en: "Do you really want to delete Chart Layout '{name}' that contains {n_drawings_on_n_symbols}?",
        es: [
          "¿Realmente quiere eliminar el diseño del gráfico '{name}' que contiene {n_drawings_on_n_symbols}?",
        ],
        fa: "Do you really want to delete Chart Layout '{name}' that contains {n_drawings_on_n_symbols}?",
        fr: [
          'Voulez-vous vraiment supprimer le modèle de graphique " {name} " qui contient {n_drawings_on_n_symbols}?',
        ],
        he_IL: [
          "האם אתה באמת רוצה למחוק את פריסת הגרף '{name}' שמכילה {n_drawings_on_n_symbols}?",
        ],
        hu_HU:
          "Do you really want to delete Chart Layout '{name}' that contains {n_drawings_on_n_symbols}?",
        id_ID: [
          "Apakah Anda benar-benar ingin menghapus Layout Chart '{name}' yang berisi {n_drawings_on_n_symbols}?",
        ],
        it: [
          "Vuoi davvero eliminare il salvataggio '{name}' che contiene {n_drawings_on_n_symbols}?",
        ],
        ja: [
          '本当に{n_drawings_on_n_symbols}を含むチャートレイアウト「{name}」を削除しますか？',
        ],
        ko: [
          "{n_drawings_on_n_symbols}이 포함된 차트 레이아웃 '{name}'을 삭제하시겠습니까?",
        ],
        ms_MY: [
          "Adakah anda pasti untuk padamkan Susun Atur Carta '{name}' yang mengandungi {n_drawings_on_n_symbols}?",
        ],
        nl_NL:
          "Do you really want to delete Chart Layout '{name}' that contains {n_drawings_on_n_symbols}?",
        pl: [
          "Czy na pewno chcesz usunąć układ wykresu '{name}', który zawiera {n_drawings_on_n_symbols}?",
        ],
        pt: [
          "Você realmente quer deletar o Layout do Gráfico '{name}' que contém {n_drawings_on_n_symbols}?",
        ],
        ro: "Do you really want to delete Chart Layout '{name}' that contains {n_drawings_on_n_symbols}?",
        ru: [
          'Вы действительно хотите удалить график "{name}", который содержит {n_drawings_on_n_symbols}?',
        ],
        sv: [
          "Ska du verkligen radera diagramlayout '{name}' som innehåller {n_drawings_on_n_symbols}?",
        ],
        th: [
          "คุณต้องการลบเลยเอาต์ชาร์ต '{name}' ที่มี {n_drawings_on_n_symbols} หรือไม่?",
        ],
        tr: [
          "{n_drawings_on_n_symbols} içeren Grafik Düzenini '{name}' gerçekten silmek istiyor musunuz?",
        ],
        vi: [
          "Bạn có thực sự muốn xóa Bố cục Biểu đồ '{name}' có chứa {n_drawings_on_n_symbols} không?",
        ],
        zh: ['您真的要删除包含{n_drawings_on_n_symbols}的图表布局“{name}”吗？'],
        zh_TW: [
          '您真的要刪除包含{n_drawings_on_n_symbols}的圖表版面“{name}”嗎？',
        ],
      };
    },
    38212: (e) => {
      e.exports = {
        ar: ['تاريخ التعديل (الأقدم أولاً)'],
        ca_ES: ['Data de modificació (la més antiga primer)'],
        cs: 'Date modified (oldest first)',
        de: ['Bearbeitungs-Datum (ältestes zuerst)'],
        el: 'Date modified (oldest first)',
        en: 'Date modified (oldest first)',
        es: ['Fecha de modificación (la más antigua primero)'],
        fa: 'Date modified (oldest first)',
        fr: ["Date de modification (la plus ancienne d'abord)"],
        he_IL: ['התאריך שונה (הישן ראשון)'],
        hu_HU: 'Date modified (oldest first)',
        id_ID: ['Tanggal modifikasi (dari yang terlama)'],
        it: ['Data ultima modifica (vecchi prima)'],
        ja: ['変更日 (古い順)'],
        ko: ['바뀐 날짜 (옛것부터)'],
        ms_MY: ['Tarikh diubah (lama dahulu)'],
        nl_NL: 'Date modified (oldest first)',
        pl: ['Data modyfikacji (od najstarszych)'],
        pt: ['Data da modificação (mais antiga primeiro)'],
        ro: 'Date modified (oldest first)',
        ru: ['Дата изменения (сначала старые)'],
        sv: ['Ändringsdatum (äldst först)'],
        th: ['วันที่แก้ไข (เก่าก่อน)'],
        tr: ['Değişim tarihine göre sırala (önce en eski)'],
        vi: ['Ngày chỉnh sửa (cũ lên trước)'],
        zh: ['修改日期(由旧到新)'],
        zh_TW: ['修改日期(舊到新)'],
      };
    },
    63037: (e) => {
      e.exports = {
        ar: ['تاريخ التعديل (الأحدث أولاً)'],
        ca_ES: ['Data de modificació (la més nova primer)'],
        cs: 'Date modified (newest first)',
        de: ['Bearbeitungs-Datum (neuestes zuerst)'],
        el: 'Date modified (newest first)',
        en: 'Date modified (newest first)',
        es: ['Fecha de modificación (la más reciente primero)'],
        fa: 'Date modified (newest first)',
        fr: ["Date de modification (la plus récente d'abord)"],
        he_IL: ['התאריך שונה (החדש ראשון)'],
        hu_HU: 'Date modified (newest first)',
        id_ID: ['Tanggal modifikasi (dari yang terbaru)'],
        it: ['Data ultima modifica (recenti prima)'],
        ja: ['変更日 (新しい順)'],
        ko: ['바뀐 날짜 (새것부터)'],
        ms_MY: ['Tarikh diubah (terbaru dahulu)'],
        nl_NL: 'Date modified (newest first)',
        pl: ['Data modyfikacji (od najnowszych)'],
        pt: ['Data da modificação (mais recente primeiro)'],
        ro: 'Date modified (newest first)',
        ru: ['Дата изменения (сначала новые)'],
        sv: ['Ändringsdatum (nyast först)'],
        th: ['วันที่แก้ไข (ใหม่ก่อน)'],
        tr: ['Değişim tarihine göre sırala (önce en yeni)'],
        vi: ['Ngày chỉnh sửa (mới lên trước)'],
        zh: ['修改日期(由新到旧)'],
        zh_TW: ['修改日期(新到舊)'],
      };
    },
    75789: (e) => {
      e.exports = {
        ar: ['تحميل التنسيق'],
        ca_ES: ['Carrega disseny'],
        cs: 'Load layout',
        de: ['Layout öffnen'],
        el: 'Load layout',
        en: 'Load layout',
        es: ['Cargar diseño'],
        fa: 'Load layout',
        fr: ['Charger la mise en page'],
        he_IL: ['טען גרף'],
        hu_HU: 'Load layout',
        id_ID: ['Muat layout'],
        it: ['Carica layout'],
        ja: ['レイアウトの読み込み'],
        ko: ['레이아웃 불러오기'],
        ms_MY: ['Memuatkan susun atur'],
        nl_NL: 'Load layout',
        pl: ['Załaduj układ'],
        pt: ['Carregar layout'],
        ro: 'Load layout',
        ru: ['Загрузить график'],
        sv: ['Ladda layout'],
        th: ['โหลดเลย์เอาท์'],
        tr: ['Yerleşimi yükle'],
        vi: ['Tải bố cục'],
        zh: ['加载布局'],
        zh_TW: ['加載版面'],
      };
    },
    25653: (e) => {
      e.exports = {
        ar: ['اسم التنسيق'],
        ca_ES: ['Nom del disseny del gràfic'],
        cs: 'Layout name',
        de: ['Layout Name'],
        el: 'Layout name',
        en: 'Layout name',
        es: ['Nombre del diseño del gráfico'],
        fa: 'Layout name',
        fr: ['Nom de la mise en page'],
        he_IL: ['שם פריסת גרף'],
        hu_HU: 'Layout name',
        id_ID: ['Nama Layout'],
        it: ['Nome layout'],
        ja: ['レイアウト名'],
        ko: ['레이아웃 네임'],
        ms_MY: ['Aturan nama'],
        nl_NL: 'Layout name',
        pl: ['Nazwa układu'],
        pt: ['Nome do layout'],
        ro: 'Layout name',
        ru: ['Имя графика'],
        sv: ['Layoutnamn'],
        th: ['ชื่อเลย์เอาท์'],
        tr: ['Yerleşim adı'],
        vi: ['Tên bố cục'],
        zh: ['布局名称'],
        zh_TW: ['版面名稱'],
      };
    },
    63479: (e) => {
      e.exports = {
        ar: ['اسم التنسيق (A إلى Z)'],
        ca_ES: ['Nom de disseny (de la A a la Z)'],
        cs: 'Layout name (A to Z)',
        de: ['Layout Name (A bis Z)'],
        el: 'Layout name (A to Z)',
        en: 'Layout name (A to Z)',
        es: ['Nombre de diseño (de la A a la Z)'],
        fa: 'Layout name (A to Z)',
        fr: ['Nom de la mise en page (A à Z)'],
        he_IL: ["שם הפריסה (א' עד ת')"],
        hu_HU: 'Layout name (A to Z)',
        id_ID: ['Nama layout (A ke Z)'],
        it: ['Nome layout (A-Z)'],
        ja: ['レイアウト名 (AからZ)'],
        ko: ['레이아웃 이름 (A - Z)'],
        ms_MY: ['Nama susun atur (A hingga Z)'],
        nl_NL: 'Layout name (A to Z)',
        pl: ['Nazwa układu (A do Z)'],
        pt: ['Nome do layout (A a Z)'],
        ro: 'Layout name (A to Z)',
        ru: ['Название графиков (А → Я)'],
        sv: ['Layoutnamn (A till Z)'],
        th: ['ชื่อเลย์เอาท์ (A ไปยัง Z)'],
        tr: ["Yerleşim adı (A'dan Z'ye)"],
        vi: ['Tên bố cục (A đến Z)'],
        zh: ['布局名称(A到Z)'],
        zh_TW: ['版面名稱(A到Z)'],
      };
    },
    96189: (e) => {
      e.exports = {
        ar: ['اسم التنسيق (Z إلى A)'],
        ca_ES: ['Nom de disseny (de la Z a la A)'],
        cs: 'Layout name (Z to A)',
        de: ['Layout Name (Z-A)'],
        el: 'Layout name (Z to A)',
        en: 'Layout name (Z to A)',
        es: ['Nombre de diseño (de la Z a la A)'],
        fa: 'Layout name (Z to A)',
        fr: ['Nom de la mise en page (Z à A)'],
        he_IL: ["שם הפריסה (ת' עד א')"],
        hu_HU: 'Layout name (Z to A)',
        id_ID: ['Nama layout (Z ke A)'],
        it: ['Nome layout (Z-A)'],
        ja: ['レイアウト名 (ZからA)'],
        ko: ['레이아웃 이름 (Z - A)'],
        ms_MY: ['Nama susun atur (Z hingga A)'],
        nl_NL: 'Layout name (Z to A)',
        pl: ['Nazwa układu (Z do A)'],
        pt: ['Nome do layout (Z a A)'],
        ro: 'Layout name (Z to A)',
        ru: ['Название графиков (Я → А)'],
        sv: ['Layoutnamn (Z till A)'],
        th: ['ชื่อเลย์เอาท์ (Z ไปยัง A)'],
        tr: ["Yerleşim adı (Z'den A'ya)"],
        vi: ['Tên bố cục (Z đến A)'],
        zh: ['布局名称(Z到A)'],
        zh_TW: ['版面名稱(Z到A)'],
      };
    },
    41583: (e) => {
      e.exports = {
        ar: ['تصنيف حسب اسم التنسيق، وتاريخ التعديل'],
        ca_ES: ['Ordena per nom de disseny del gràfic, data de modificació'],
        cs: 'Sort by layout name, date changed',
        de: ['Nach Layout-Name sortieren, Änderungsdatum'],
        el: 'Sort by layout name, date changed',
        en: 'Sort by layout name, date changed',
        es: ['Ordenar por nombre de diseño del gráfico, fecha de modificación'],
        fa: 'Sort by layout name, date changed',
        fr: ['Trier par nom de mise en page, date modifiée'],
        he_IL: ['מיין לפי שם הפריסה layout , התאריך השתנה'],
        hu_HU: 'Sort by layout name, date changed',
        id_ID: ['Urut berdasarkan nama layout, tanggal perubahan'],
        it: ['Ordina in base a nome, data'],
        ja: ['レイアウト名や変更日で並び替え'],
        ko: ['레이아웃 네임, 바뀐 날짜로 소팅'],
        ms_MY: ['Susun mengikut aturan nama, perubahan tarikh'],
        nl_NL: 'Sort by layout name, date changed',
        pl: ['Sortuj według nazwy układu, data zmiany'],
        pt: ['Classificar por nome do layout, data de alteração'],
        ro: 'Sort by layout name, date changed',
        ru: ['Сортировать по имени, дате изменения'],
        sv: ['Sortera med layoutnamn, datum ändrat'],
        th: ['เรียงตามชื่อเลย์เอาท์, วันที่เปลี่ยนแปลง'],
        tr: ['Yerleşim adına, tarih değişikliğine göre sırala'],
        vi: ['Sắp xếp theo tên bố cục, ngày thay đổi'],
        zh: ['排序依布局名称、修改日期'],
        zh_TW: ['排序按版面名稱、修改日期'],
      };
    },
    52298: (e) => {
      e.exports = {
        ar: ['بحث'],
        ca_ES: ['Cercar'],
        cs: ['Hledat'],
        de: ['Suche'],
        el: ['Αναζήτησή'],
        en: 'Search',
        es: ['Buscar'],
        fa: ['جستجو'],
        fr: ['Chercher'],
        he_IL: ['חפש'],
        hu_HU: ['Keresés'],
        id_ID: ['Cari'],
        it: ['Cerca'],
        ja: ['検索'],
        ko: ['찾기'],
        ms_MY: ['Cari'],
        nl_NL: ['Zoeken'],
        pl: ['Szukaj'],
        pt: ['Pesquisar'],
        ro: 'Search',
        ru: ['Поиск'],
        sv: ['Sök'],
        th: ['ค้นหา'],
        tr: ['Ara'],
        vi: ['Tìm kiếm'],
        zh: ['搜索'],
        zh_TW: ['搜尋'],
      };
    },
    39966: (e) => {
      e.exports = {
        ar: [
          'على {amount} من الرموز',
          'على {amount} من الرموز',
          'على {amount} من الرموز',
          'على {amount} من الرموز',
          'على {amount} من الرموز',
          'على {amount} من الرموز',
        ],
        ca_ES: ['en {amount} símbol', 'en {amount} símbols'],
        cs: 'on {amount} symbol',
        de: ['auf {amount} Symbol', 'auf {amount} Symbolen'],
        el: 'on {amount} symbol',
        en: 'on {amount} symbol',
        es: ['en {amount} símbolo', 'en {amount} símbolos'],
        fa: ['on {amount} symbols'],
        fr: ['sur {amount} symbole', 'sur {amount} symbols'],
        he_IL: [
          'על סימול {amount}',
          'על סימולים {amount}',
          'על סימולים {amount}',
          'על סימולים {amount}',
        ],
        hu_HU: ['on {amount} symbols'],
        id_ID: ['pada {amount} simbol'],
        it: ['su {amount} simbolo', 'su {amount} simboli'],
        ja: ['（{amount}個のシンボル上に）'],
        ko: ['on {amount} 심볼'],
        ms_MY: ['pada simbol {amount}'],
        nl_NL: 'on {amount} symbol',
        pl: [
          'na {amount} symbolu',
          'na {amount} symbolach',
          'na {amount} symbolach',
          'na {amount} symbolach',
        ],
        pt: ['em {amount} símbolo', 'em {amount} símbolos'],
        ro: 'on {amount} symbol',
        ru: [
          'на {amount} инструменте',
          'на {amount} инструментах',
          'на {amount} инструментах',
          'на {amount} инструментах',
        ],
        sv: ['på {amount} symbol', 'på {amount} symboler'],
        th: ['บน {amount} สัญลักษณ์'],
        tr: ['{amount} sembolünde', '{amount} sembolünde'],
        vi: ['trên {amount} mã giao dịch'],
        zh: ['在{amount}个商品'],
        zh_TW: ['在{amount}商品'],
      };
    },
    93030: (e) => {
      e.exports = {
        ar: [
          '{amount} من الرسوم ',
          '{amount} من الرسوم ',
          '{amount} من الرسوم ',
          '{amount} من الرسوم ',
          '{amount} من الرسوم ',
          '{amount} من الرسوم ',
        ],
        ca_ES: ['{amount} dibuix', '{amount} dibuixos'],
        cs: '{amount} drawing',
        de: ['{amount} Zeichnung', '{amount} Zeichnungen'],
        el: '{amount} drawing',
        en: '{amount} drawing',
        es: ['{amount} dibujo', '{amount} dibujos'],
        fa: ['{amount} drawings'],
        fr: ['{amount} dessin', '{amount} dessins'],
        he_IL: [
          'שרטוט {amount}',
          'שרטוטים {amount}',
          'שרטוטים {amount}',
          'שרטוטים {amount}',
        ],
        hu_HU: ['{amount} drawings'],
        id_ID: ['{amount} gambar'],
        it: ['{amount} disegno', '{amount} disegni'],
        ja: ['{amount}個の描画'],
        ko: ['{amount} 드로잉'],
        ms_MY: ['{amount} lukisan'],
        nl_NL: '{amount} drawing',
        pl: [
          '{amount} rysunek',
          '{amount} rysunki',
          '{amount} rysunków',
          '{amount} rysunków',
        ],
        pt: ['{amount} desenho', '{amount} desenhos'],
        ro: '{amount} drawing',
        ru: [
          '{amount} объект рисования',
          '{amount} объекта рисования',
          '{amount} объектов рисования',
          '{amount} объектов рисования',
        ],
        sv: ['{amount} ritning', '{amount} ritningar'],
        th: ['{amount} การวาด'],
        tr: ['{amount} çizim', '{amount} çizim'],
        vi: ['{amount} bản vẽ'],
        zh: ['{amount}个绘图'],
        zh_TW: ['{amount}繪圖'],
      };
    },
  },
]);