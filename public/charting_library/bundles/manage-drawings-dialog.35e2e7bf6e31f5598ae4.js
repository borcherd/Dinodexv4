(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [1702],
  {
    84233: (e) => {
      e.exports = {
        dialog: 'dialog-li9trsGq',
        dialogWrapper: 'dialogWrapper-li9trsGq',
        wrap: 'wrap-li9trsGq',
      };
    },
    41662: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { ManageDrawingsDialogRenderer: () => p });
      var s = i(50959),
        a = i(962),
        r = i(44352),
        n = i(16216),
        l = i(90981),
        o = i(75208),
        d = i(23263),
        h = i(84233);
      class c extends s.PureComponent {
        constructor(e) {
          super(e),
            (this._dialogRef = s.createRef()),
            (this._renderChildren = (e) =>
              s.createElement(
                'div',
                { className: h.wrap },
                s.createElement(d.ManageDrawings, {
                  onInitialized: e.centerAndFit,
                  chartWidget: this._activeChartWidget,
                }),
              ));
          const t = (0, n.service)(l.CHART_WIDGET_COLLECTION_SERVICE);
          (this._activeChartWidget = t.activeChartWidget.value()),
            (this.state = { layoutName: t.metaInfo.name.value() });
        }
        render() {
          return s.createElement(o.AdaptivePopupDialog, {
            wrapperClassName: h.dialogWrapper,
            className: h.dialog,
            dataName: 'manage-drawings-dialog',
            isOpened: !0,
            onClickOutside: this.props.onClose,
            onClose: this.props.onClose,
            ref: this._dialogRef,
            render: this._renderChildren,
            showSeparator: !0,
            title: r.t(null, void 0, i(72357)),
            subtitle: this.state.layoutName,
          });
        }
      }
      class p {
        constructor(e) {
          (this._container = document.createElement('div')),
            (this._isVisible = !1),
            (this._handleClose = () => {
              this._onClose && this._onClose(),
                a.unmountComponentAtNode(this._container),
                (this._isVisible = !1);
            }),
            (this._onClose = e);
        }
        hide() {
          this._handleClose();
        }
        isVisible() {
          return this._isVisible;
        }
        show() {
          a.render(
            s.createElement(c, { onClose: this._handleClose }),
            this._container,
          ),
            (this._isVisible = !0);
        }
      }
    },
  },
]);