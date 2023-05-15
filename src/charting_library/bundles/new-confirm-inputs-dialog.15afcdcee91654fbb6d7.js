(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [3030],
  {
    84519: (t) => {
      t.exports = {
        separator: 'separator-lnX63iy3',
        scrollable: 'scrollable-lnX63iy3',
      };
    },
    29638: (t, e, n) => {
      'use strict';
      n.r(e), n.d(e, { ConfirmInputsDialogRenderer: () => h });
      var i = n(962),
        o = n(50959),
        s = n(44352),
        l = n(50182),
        r = n(59064),
        u = n(86656),
        c = n(8069),
        a = n(26867),
        p = n.n(a),
        d = n(49483),
        m = n(84519);
      function f(t) {
        const {
            title: e,
            confirmInputs: i,
            inputsProperty: a,
            model: f,
            confirmInputsType: h,
            onCancel: y,
            onSubmit: C,
            onClose: S,
            onStudyInputChange: I,
          } = t,
          [b, _] = (0, o.useState)(!0),
          w = (0, o.useMemo)(function () {
            const t = new (p())();
            return {
              isInputsStudy: !0,
              symbolsResolved: () => t,
              resolvedSymbolInfoBySymbol: () => null,
              tempProperties: a,
            };
          }, []),
          g = (0, o.useRef)(null),
          [v, D] = (0, o.useState)(T());
        return (
          (0, o.useEffect)(() => {
            if (!d.CheckMobile.any() && b && 'symbol' === h && g.current) {
              const t = g.current.querySelector('input');
              t && t.focus();
            }
          }, [b]),
          o.createElement(l.AdaptiveConfirmDialog, {
            dataName: 'confirm-inputs-dialog',
            title: e,
            isOpened: b,
            onSubmit: function () {
              C(a.state().inputs), P();
            },
            onCancel: y,
            onClickOutside: P,
            onClose: P,
            render: () =>
              o.createElement(
                o.Fragment,
                null,
                o.createElement('div', { className: m.separator }),
                o.createElement(
                  u.TouchScrollContainer,
                  { className: m.scrollable, onScroll: E },
                  o.createElement(c.InputsTabContent, {
                    reference: g,
                    property: a,
                    model: f,
                    study: w,
                    inputs: i,
                    onStudyInputChange: k,
                  }),
                ),
              ),
            defaultActionOnClose: 'none',
            submitButtonText: s.t(null, void 0, n(73226)),
            submitButtonDisabled: v,
            submitOnEnterKey: !1,
          })
        );
        function E() {
          r.globalCloseDelegate.fire();
        }
        function P() {
          _(!1), S();
        }
        function T() {
          const { inputs: t } = a.state();
          for (const e of i)
            if ('symbol' === e.type && !e.optional && '' === t[e.id]) return !0;
          return !1;
        }
        function k(t, e) {
          null == I || I(t, e), D(T());
        }
      }
      class h {
        constructor(t, e, n, o, s, l, r, u) {
          (this._container = document.createElement('div')),
            (this._handleClose = () => {
              i.unmountComponentAtNode(this._container), this._onClose();
            }),
            (this._title = t),
            (this._confirmInputs = e),
            (this._model = s),
            (this._confirmInputsType = o),
            (this._onSubmit = l),
            (this._onClose = r),
            (this._onStudyInputChange = u),
            (this._inputsProperty = n);
        }
        show() {
          i.render(
            o.createElement(f, {
              title: this._title,
              confirmInputs: this._confirmInputs,
              inputsProperty: this._inputsProperty,
              model: this._model,
              confirmInputsType: this._confirmInputsType,
              onSubmit: this._onSubmit,
              onCancel: () => {},
              onClose: this._handleClose,
              onStudyInputChange: this._onStudyInputChange,
            }),
            this._container,
          );
        }
      }
    },
    73339: (t, e, n) => {
      'use strict';
      n.r(e), n.d(e, { selectInputValuesOnChart: () => u });
      var i = n(50151),
        o = n(7394),
        s = n(44352),
        l = n(67899),
        r = n(76076);
      o.colorsPalette['color-cold-gray-500'];
      async function u(t, e, o, u, c) {
        let a;
        const p = (0, l.getInputGroups)(e);
        t.model().model();
        for await (const t of p)
          await d(t).catch((t) => {
            throw new Error(t);
          });
        return { customSourceId: void 0, destPane: a };
        async function d(t) {
          if ((0, l.isGroup)(t))
            if ((0, l.isInputInlines)(t)) {
              const e = (function (t) {
                if (2 !== t.length || t[0].type === t[1].type) return null;
                return 'price' === t[0].type
                  ? { price: t[0], time: t[1] }
                  : { price: t[1], time: t[0] };
              })(t.children);
              if (e) {
                const { time: i, price: o } = e,
                  l = i.inline
                    ? s.t(
                        null,
                        {
                          replace: {
                            inputInline: i.inline,
                            studyShortDescription: u,
                          },
                        },
                        n(59877),
                      )
                    : s.t(
                        null,
                        { replace: { studyShortDescription: u } },
                        n(80481),
                      ),
                  r = h(t.id);
                await f(t, 'all', null != r ? r : l, i.id, o.id);
              } else for await (const e of t.children) await m(e);
            } else for await (const e of t.children) await d(e);
          else await m(t);
        }
        async function m(t) {
          const e = 'time' === t.type,
            i = e ? 'time' : 'price',
            o = (function () {
              if (t.inline) {
                const e = h(t.inline);
                if (e) return e;
              }
              if (t.tooltip) return t.tooltip;
              const i = t.name
                  ? s.t(
                      null,
                      {
                        replace: {
                          inputTitle: t.name,
                          studyShortDescription: u,
                        },
                      },
                      n(18571),
                    )
                  : s.t(
                      null,
                      { replace: { studyShortDescription: u } },
                      n(42917),
                    ),
                o = t.name
                  ? s.t(
                      null,
                      {
                        replace: {
                          inputTitle: t.name,
                          studyShortDescription: u,
                        },
                      },
                      n(58552),
                    )
                  : s.t(
                      null,
                      { replace: { studyShortDescription: u } },
                      n(6083),
                    );
              return e ? i : o;
            })(),
            l = e ? t.id : void 0,
            r = e ? void 0 : t.id;
          await f(t, i, o, l, r);
        }
        async function f(e, n, s, l, u) {
          const c = await t.requestSelectPoint(
            {
              pointType: n,
              pane: a,
              lineColor: void 0,
              selectPointMode: r.SelectPointMode.Study,
            },
            s,
          );
          void 0 === a && (a = c.pane);
          const p = o.childs().inputs;
          p &&
            (l &&
              (0, i.ensureDefined)(p.child(l)).setValue(
                1e3 * (c.point.time || 0),
              ),
            u && (0, i.ensureDefined)(p.child(u)).setValue(c.point.price));
        }
        function h(t) {
          let e;
          return (
            c
              .filter((e) => e.inline === t)
              .forEach((t) => {
                t.tooltip && (e = t.tooltip);
              }),
            e
          );
        }
      }
    },
  },
]);