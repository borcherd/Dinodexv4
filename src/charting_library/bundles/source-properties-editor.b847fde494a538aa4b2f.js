(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [6780],
  {
    24959: (e) => {
      e.exports = {
        defaultsButtonText: 'defaultsButtonText-CXKzQOaV',
        defaultsButtonItem: 'defaultsButtonItem-CXKzQOaV',
        defaultsButtonIcon: 'defaultsButtonIcon-CXKzQOaV',
      };
    },
    10986: (e) => {
      e.exports = {
        themesButtonText: 'themesButtonText-ugYgmubN',
        themesButtonIcon: 'themesButtonIcon-ugYgmubN',
        defaultsButtonText: 'defaultsButtonText-ugYgmubN',
        defaultsButtonItem: 'defaultsButtonItem-ugYgmubN',
      };
    },
    14406: (e) => {
      e.exports = { scrollable: 'scrollable-LHNfmvz1' };
    },
    75949: (e) => {
      e.exports = {
        titleWrap: 'titleWrap-xqf2SSG7',
        ellipsis: 'ellipsis-xqf2SSG7',
        hideInput: 'hideInput-xqf2SSG7',
        hideText: 'hideText-xqf2SSG7',
        empty: 'empty-xqf2SSG7',
        hideEmpty: 'hideEmpty-xqf2SSG7',
        editIcon: 'editIcon-xqf2SSG7',
      };
    },
    15185: (e) => {
      e.exports = { slider: 'slider-n4RgAWzv', inner: 'inner-n4RgAWzv' };
    },
    57248: (e) => {
      e.exports = {
        scrollWrap: 'scrollWrap-Rf5MOAG5',
        tabsWrap: 'tabsWrap-Rf5MOAG5',
        tabs: 'tabs-Rf5MOAG5',
        withoutBorder: 'withoutBorder-Rf5MOAG5',
        tab: 'tab-Rf5MOAG5',
        withHover: 'withHover-Rf5MOAG5',
        headerBottomSeparator: 'headerBottomSeparator-Rf5MOAG5',
        fadeWithoutSlider: 'fadeWithoutSlider-Rf5MOAG5',
        withBadge: 'withBadge-Rf5MOAG5',
      };
    },
    39416: (e) => {
      e.exports = {
        wrap: 'wrap-qKQlcmkd',
        wrapWithArrowsOuting: 'wrapWithArrowsOuting-qKQlcmkd',
        wrapOverflow: 'wrapOverflow-qKQlcmkd',
        scrollWrap: 'scrollWrap-qKQlcmkd',
        noScrollBar: 'noScrollBar-qKQlcmkd',
        icon: 'icon-qKQlcmkd',
        scrollLeft: 'scrollLeft-qKQlcmkd',
        scrollRight: 'scrollRight-qKQlcmkd',
        isVisible: 'isVisible-qKQlcmkd',
        iconWrap: 'iconWrap-qKQlcmkd',
        fadeLeft: 'fadeLeft-qKQlcmkd',
        fadeRight: 'fadeRight-qKQlcmkd',
      };
    },
    86355: (e) => {
      e.exports = {
        tabs: 'tabs-g47ZTMzc',
        tab: 'tab-g47ZTMzc',
        noBorder: 'noBorder-g47ZTMzc',
        disabled: 'disabled-g47ZTMzc',
        active: 'active-g47ZTMzc',
        defaultCursor: 'defaultCursor-g47ZTMzc',
        slider: 'slider-g47ZTMzc',
        content: 'content-g47ZTMzc',
      };
    },
    45601: (e, t, i) => {
      'use strict';
      i.d(t, { Measure: () => n });
      var s = i(19566);
      function n(e) {
        const { children: t, onResize: i } = e;
        return t((0, s.useResizeObserver)(i || (() => {}), [null === i]));
      }
    },
    34290: (e, t, i) => {
      'use strict';
      i.d(t, { StudyDefaultsManager: () => m });
      var s = i(50959),
        n = i(97754),
        r = i.n(n),
        o = i(9745),
        a = i(44352),
        l = i(95276),
        c = i(16396),
        u = i(44996),
        d = i(24959);
      const h = {
        reset: a.t(null, void 0, i(79782)),
        saveAsDefault: a.t(null, void 0, i(18229)),
        defaults: a.t(null, void 0, i(98938)),
      };
      class m extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._handleResetToDefaults = () => {
              this.props.model.restorePropertiesForSource(this.props.source);
            }),
            (this._handleSaveAsDefaults = () => {
              this.props.source.properties().saveDefaults();
            });
        }
        render() {
          const { mode: e } = this.props;
          return s.createElement(
            l.ControlDisclosure,
            {
              id: 'study-defaults-manager',
              className: r()('normal' === e && d.defaultsButtonText),
              hideArrowButton: 'compact' === e,
              buttonChildren: this._getPlaceHolderItem('compact' === e),
            },
            s.createElement(c.PopupMenuItem, {
              className: d.defaultsButtonItem,
              isActive: !1,
              label: h.reset,
              onClick: this._handleResetToDefaults,
            }),
            s.createElement(c.PopupMenuItem, {
              className: d.defaultsButtonItem,
              isActive: !1,
              label: h.saveAsDefault,
              onClick: this._handleSaveAsDefaults,
            }),
          );
        }
        _getPlaceHolderItem(e) {
          return e
            ? s.createElement(o.Icon, {
                className: d.defaultsButtonIcon,
                icon: u,
              })
            : h.defaults;
        }
      }
    },
    48531: (e, t, i) => {
      'use strict';
      i.d(t, { FooterMenu: () => b });
      var s = i(50959),
        n = i(44352),
        r = i(9745),
        o = i(95276),
        a = i(90692),
        l = i(10986),
        c = i(44996);
      function u(e) {
        return e.isTabletWidth
          ? s.createElement(r.Icon, { className: l.themesButtonIcon, icon: c })
          : s.createElement(s.Fragment, null, n.t(null, void 0, i(19611)));
      }
      function d(e) {
        return s.createElement(
          a.MatchMedia,
          { rule: 'screen and (max-width: 768px)' },
          (t) =>
            s.createElement(
              o.ControlDisclosure,
              {
                className: !t && l.themesButtonText,
                hideArrowButton: t,
                buttonChildren: s.createElement(u, { isTabletWidth: t }),
              },
              e.children,
            ),
        );
      }
      var h = i(16396),
        m = i(96040),
        p = i(70412),
        g = i(32563);
      function f(e) {
        const { name: t, onRemove: i, onClick: n } = e,
          [r, o] = (0, p.useHover)(),
          a = s.useCallback(() => n(t), [n, t]),
          c = s.useCallback(() => {
            i && i(t);
          }, [i, t]);
        return s.createElement(
          'div',
          { ...o },
          s.createElement(h.PopupMenuItem, {
            className: l.defaultsButtonItem,
            isActive: !1,
            label: t,
            onClick: a,
            toolbox:
              i &&
              s.createElement(m.RemoveButton, {
                hidden: !g.mobiletouch && !r,
                onClick: c,
              }),
          }),
        );
      }
      function _(e) {
        return s.createElement(
          d,
          null,
          s.createElement(f, {
            onClick: function () {
              const { sources: t, chartUndoModel: i } = e;
              i.restoreLineToolsFactoryDefaults(t);
            },
            name: n.t(null, void 0, i(58102)),
          }),
        );
      }
      function b(e) {
        return s.createElement(_, { ...e });
      }
    },
    37289: (e, t, i) => {
      'use strict';
      i.d(t, { PropertiesEditorTab: () => c });
      var s = i(50959),
        n = i(66849);
      const r = {
          'Elliott Impulse Wave (12345)Degree': 'normal',
          'Elliott Triangle Wave (ABCDE)Degree': 'normal',
          'Elliott Triple Combo Wave (WXYXZ)Degree': 'normal',
          'Elliott Correction Wave (ABC)Degree': 'normal',
          'Elliott Double Combo Wave (WXY)Degree': 'normal',
          BarsPatternMode: 'normal',
          StudyInputSource: 'normal',
        },
        o = {
          TextText: 'big',
          AnchoredTextText: 'big',
          NoteText: 'big',
          AnchoredNoteText: 'big',
          CalloutText: 'big',
          BalloonText: 'big',
        };
      var a = i(40296),
        l = i(53942);
      function c(e) {
        const { page: t, pageRef: i, tableKey: c } = e;
        return s.createElement(
          n.ControlCustomHeightContext.Provider,
          { value: o },
          s.createElement(
            n.ControlCustomWidthContext.Provider,
            { value: r },
            t &&
              s.createElement(
                a.PropertyTable,
                { reference: i, key: c },
                t.definitions
                  .value()
                  .map((e) =>
                    s.createElement(l.Section, { key: e.id, definition: e }),
                  ),
              ),
          ),
        );
      }
    },
    75892: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { SourcePropertiesEditorRenderer: () => M });
      var s = i(50959),
        n = i(962),
        r = i(76422),
        o = i(50151),
        a = i(49483),
        l = i(56840),
        c = i.n(l),
        u = i(44352),
        d = i(50182),
        h = i(59064),
        m = i(31807),
        p = i(48531),
        g = i(37289),
        f = i(86656),
        _ = i(6250),
        b = i(34290),
        v = i(89215),
        S = i(46936),
        T = i(10971),
        C = i(68927),
        w = i(90692),
        E = i(47539),
        D = i(46627),
        I = i(68495),
        A = i(2484),
        R = i(14406);
      const y = new E.TranslatedString(
        'change {sourceTitle} title to {newSourceTitle}',
        u.t(null, void 0, i(40001)),
      );
      class P extends s.PureComponent {
        constructor(e) {
          super(e),
            (this._activePageRef = s.createRef()),
            (this._lineToolsAffectChartInvalidation =
              new D.FeatureToggleWatchedValue(
                'do_not_invalidate_chart_on_changing_line_tools',
                !1,
              )),
            (this._handleChangeMode = (e) => {
              this.setState({ isRenaming: e });
            }),
            (this._getTranslatedStringForSource = (e) =>
              new E.TranslatedString(e.name(), e.title())),
            (this._setTitle = (e) => {
              const { source: t, model: i } = this.props,
                s = y.format({
                  sourceTitle:
                    t.properties().title.value() ||
                    this._getTranslatedStringForSource(t),
                  newSourceTitle: e,
                });
              i.setProperty(
                t.properties().title,
                e,
                s,
                this._lineToolsAffectChartInvalidation.value(),
              );
            }),
            (this._getActionPageById = (e) => {
              if (!e) return;
              const { pages: t } = this.props;
              return t.find((t) => t.id.toLowerCase() === e.toLowerCase());
            }),
            (this._onChangeActivePageDefinitions = () => {
              this.setState({ tableKey: Date.now() }, () => {
                this._requestResize && this._requestResize();
              });
            }),
            (this._renderFooterLeft = () => {
              const { source: e, model: t } = this.props;
              return (0, _.isLineTool)(e)
                ? s.createElement(p.FooterMenu, {
                    sources: [e],
                    chartUndoModel: t,
                  })
                : s.createElement(
                    w.MatchMedia,
                    { rule: 'screen and (max-width: 430px)' },
                    (i) =>
                      (0, v.isStudy)(e) &&
                      s.createElement(b.StudyDefaultsManager, {
                        model: t,
                        source: e,
                        mode: i ? 'compact' : 'normal',
                      }),
                  );
            }),
            (this._subscribe = (e) => {
              e && e.definitions.subscribe(this._onChangeActivePageDefinitions);
            }),
            (this._unsubscribe = (e) => {
              e &&
                e.definitions.unsubscribe(this._onChangeActivePageDefinitions);
            }),
            (this._getActiveTabSettingsName = () => {
              const { source: e } = this.props;
              return e instanceof S.Series
                ? 'properties_dialog.active_tab.chart'
                : e instanceof T.LineDataSource
                ? 'properties_dialog.active_tab.drawing'
                : e instanceof C.Study
                ? 'properties_dialog.active_tab.study'
                : '';
            }),
            (this._handleSelectPage = (e) => {
              const { activePageId: t } = this.state,
                i = this._getActionPageById(t),
                s = this._getActionPageById(e),
                n = this._getActiveTabSettingsName();
              t !== e &&
                (this._unsubscribe(i),
                n && c().setValue(n, e),
                this._subscribe(s),
                this.setState({ activePageId: e, tableKey: Date.now() }, () => {
                  this._requestResize && this._requestResize(),
                    this._focusActivePageFirstTextInput();
                }));
            }),
            (this._handleScroll = () => {
              h.globalCloseDelegate.fire();
            }),
            (this._handleSubmit = () => {
              this.props.onSubmit(), this._closePopupDialog();
            }),
            (this._closePopupDialog = () => {
              window.lineToolPropertiesToolbar &&
                window.lineToolPropertiesToolbar.refresh(),
                this.props.onClose();
            });
          const { pages: t } = this.props;
          let i;
          if (this._getActionPageById(this.props.activePageId))
            i = (0, o.ensureDefined)(this.props.activePageId);
          else {
            const e = c().getValue(this._getActiveTabSettingsName(), ''),
              s = this._getActionPageById(e);
            i = s ? s.id : t[0].id;
          }
          (this.state = {
            activePageId: i,
            tableKey: Date.now(),
            isRenaming: !1,
          }),
            window.lineToolPropertiesToolbar &&
              window.lineToolPropertiesToolbar.hide();
        }
        componentDidMount() {
          const { activePageId: e } = this.state,
            t = this._getActionPageById(e);
          this._focusActivePageFirstTextInput(), this._subscribe(t);
        }
        componentWillUnmount() {
          const { activePageId: e } = this.props,
            t = this._getActionPageById(e);
          clearTimeout(this._timeout), this._unsubscribe(t);
        }
        render() {
          var e;
          const { onCancel: t, source: i } = this.props,
            { activePageId: n, isRenaming: r } = this.state,
            o =
              (null === (e = i.properties().title) || void 0 === e
                ? void 0
                : e.value()) || i.title(),
            a = s.createElement(I.Title, {
              isRenaming: r,
              onChangeMode: this._handleChangeMode,
              setTitle: this._setTitle,
              defaultTitle: o,
              canBeRenamed: (0, _.isLineTool)(i) && !A.enabled('widget'),
            });
          return s.createElement(d.AdaptiveConfirmDialog, {
            dataName: (0, v.isStudy)(i)
              ? 'indicator-properties-dialog'
              : 'source-properties-editor',
            dataDialogName: o,
            title: a,
            isOpened: !0,
            onSubmit: this._handleSubmit,
            onCancel: t,
            onClickOutside: this._handleSubmit,
            onClose: this._closePopupDialog,
            footerLeftRenderer: this._renderFooterLeft,
            render: this._renderChildren(n),
            submitOnEnterKey: !1,
            showCloseIcon: !r,
          });
        }
        _renderChildren(e) {
          return ({ requestResize: t }) => {
            this._requestResize = t;
            const { pages: i } = this.props,
              n = {
                allIds: i.map((e) => e.id),
                byId: i.reduce(
                  (e, t) => ({ ...e, [t.id]: { title: t.title } }),
                  {},
                ),
              },
              r = i.find((t) => t.id === e);
            return s.createElement(
              s.Fragment,
              null,
              s.createElement(m.DialogTabs, {
                activeTabId: e,
                onSelect: this._handleSelectPage,
                tabs: n,
              }),
              s.createElement(
                f.TouchScrollContainer,
                { className: R.scrollable, onScroll: this._handleScroll },
                s.createElement(g.PropertiesEditorTab, {
                  page: r,
                  pageRef: this._activePageRef,
                  tableKey: this.state.tableKey,
                }),
              ),
            );
          };
        }
        _focusActivePageFirstTextInput() {
          if (!a.CheckMobile.any() && this._activePageRef.current) {
            const e = this._activePageRef.current.querySelector(
              'input[type=text],textarea',
            );
            e &&
              (this._timeout = setTimeout(() => {
                e.focus();
              }, 0));
          }
        }
      }
      var B = i(88279);
      class M extends B.DialogRenderer {
        constructor(e) {
          super(),
            (this._timeout = null),
            (this._handleClose = () => {
              n.unmountComponentAtNode(this._container),
                this._setVisibility(!1),
                this._onClose && this._onClose(),
                this._subscription.unsubscribe(
                  this,
                  this._handleCollectionChanged,
                );
            }),
            (this._handleSubmit = () => {
              const e = this._source;
              (0, _.isLineTool)(e) &&
                e.hasAlert.value() &&
                setTimeout(() => {
                  e.areLocalAndServerAlertsMismatch() && e.synchronizeAlert(!0);
                });
            }),
            (this._handleCancel = () => {
              this._model.undoToCheckpoint(this._checkpoint);
            }),
            (this._propertyPages = e.propertyPages),
            (this._model = e.model),
            (this._activePageId = e.activePageId),
            (this._onClose = e.onClose),
            (this._source = e.source),
            (this._checkpoint = this._ensureCheckpoint(e.undoCheckPoint)),
            (this._subscription = this._model
              .model()
              .dataSourceCollectionChanged()),
            this._subscription.subscribe(this, this._handleCollectionChanged);
        }
        hide(e) {
          e ? this._handleCancel() : this._handleSubmit(), this._handleClose();
        }
        isVisible() {
          return this.visible().value();
        }
        show() {
          n.render(
            s.createElement(P, {
              source: this._source,
              onSubmit: this._handleSubmit,
              onClose: this._handleClose,
              onCancel: this._handleCancel,
              pages: this._propertyPages,
              model: this._model,
              activePageId: this._activePageId,
            }),
            this._container,
          ),
            this._setVisibility(!0),
            r.emit('drawings_settings_dialog', {
              objectType: 'drawing',
              scriptTitle: this._source.title(),
            });
        }
        _handleCollectionChanged() {
          null === this._timeout &&
            (this._timeout = setTimeout(() => {
              this._closeDialogIfSourceIsDeleted(), (this._timeout = null);
            }));
        }
        _closeDialogIfSourceIsDeleted() {
          null === this._model.model().dataSourceForId(this._source.id()) &&
            this._handleClose();
        }
        _ensureCheckpoint(e) {
          return void 0 === e && (e = this._model.createUndoCheckpoint()), e;
        }
      }
    },
    68495: (e, t, i) => {
      'use strict';
      i.d(t, { Title: () => h });
      var s = i(50959),
        n = i(97754),
        r = i(31261),
        o = i(9745),
        a = i(33933),
        l = i(68335),
        c = i(51768),
        u = i(33055),
        d = i(75949);
      function h(e) {
        const {
            isRenaming: t,
            onChangeMode: i,
            setTitle: h,
            defaultTitle: m,
            canBeRenamed: p,
          } = e,
          g = (0, s.useRef)(null),
          [f, _] = (0, s.useState)(m),
          [b, v] = (0, s.useState)(m);
        return (
          (0, s.useEffect)(() => {
            t &&
              g.current &&
              (g.current.focus(), g.current.setSelectionRange(0, f.length));
          }, [t]),
          s.createElement(
            s.Fragment,
            null,
            s.createElement(
              'div',
              { className: n(d.titleWrap, t && d.hideText) },
              s.createElement('span', { className: d.ellipsis }, ' ', b),
              p &&
                s.createElement(
                  s.Fragment,
                  null,
                  s.createElement(o.Icon, {
                    className: n(d.editIcon),
                    icon: u,
                    onClick: function () {
                      (0, c.trackEvent)('GUI', 'Rename', 'Drawing settings'),
                        _(b),
                        i(!0);
                    },
                    'data-name': 'edit',
                    'data-role': 'button',
                  }),
                  s.createElement('div', {
                    className: n(d.empty, !t && d.hideEmpty),
                  }),
                ),
            ),
            p &&
              s.createElement(
                'div',
                { className: n(!t && d.hideInput), 'data-disable-drag': !0 },
                s.createElement(r.InputControl, {
                  value: f,
                  onChange: function (e) {
                    _(e.currentTarget.value);
                  },
                  onBlur: S,
                  reference: g,
                  onClick: a.preventDefault,
                  onKeyDown: function (e) {
                    27 === (0, l.hashFromEvent)(e) &&
                      (e.preventDefault(), _(m), i(!1));
                    13 === (0, l.hashFromEvent)(e) && (e.preventDefault(), S());
                  },
                  'data-disable-drag': !0,
                  stretch: !0,
                }),
              ),
          )
        );
        function S() {
          '' !== f && (h(f), v(f)), i(!1);
        }
      }
    },
    66512: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { SourcesPropertiesEditorRenderer: () => f });
      var s = i(50959),
        n = i(962),
        r = i(88279),
        o = i(44352),
        a = i(31807),
        l = i(86656),
        c = i(50182),
        u = i(48531),
        d = i(37289),
        h = i(68495),
        m = i(2484);
      const p = o.t(null, void 0, i(37214));
      function g(e) {
        const {
            propertyPages: t,
            onSubmit: i,
            onCancel: n,
            onClose: r,
            title: o,
            activeTabId: g,
            sources: f,
            undoModel: _,
            renamable: b,
          } = e,
          v = g && t.filter((e) => e.id === g).length > 0 ? g : t[0].id,
          S = _.model().lineToolsGroupModel().groupForLineTool(f[0]),
          T = !!(
            b &&
            S &&
            o &&
            f.every((e) => {
              var t;
              return (
                (null == S ? void 0 : S.id) ===
                (null ===
                  (t = _.model().lineToolsGroupModel().groupForLineTool(e)) ||
                void 0 === t
                  ? void 0
                  : t.id)
              );
            })
          ),
          [C, w] = (0, s.useState)(v),
          [E, D] = (0, s.useState)(!1),
          [I, A] = (0, s.useState)(o || p),
          R = (0, s.useMemo)(
            () => ({
              allIds: t.map((e) => e.id),
              byId: t.reduce(
                (e, t) => ({ ...e, [t.id]: { title: t.title } }),
                {},
              ),
            }),
            [t],
          );
        const y = s.createElement(h.Title, {
          isRenaming: E,
          onChangeMode: function (e) {
            D(e);
          },
          setTitle: function (e) {
            S && (S.setName(e), A(e));
          },
          defaultTitle: I,
          canBeRenamed: T && !m.enabled('widget'),
        });
        return s.createElement(c.AdaptiveConfirmDialog, {
          dataName: 'sources-properties-editor',
          dataDialogName: I,
          title: y,
          isOpened: !0,
          onSubmit: i,
          onCancel: n,
          onClickOutside: r,
          onClose: r,
          footerLeftRenderer: function () {
            return s.createElement(u.FooterMenu, {
              sources: f,
              chartUndoModel: _,
            });
          },
          render: function () {
            const e = t.find((e) => e.id === C);
            return s.createElement(
              s.Fragment,
              null,
              s.createElement(a.DialogTabs, {
                activeTabId: C,
                onSelect: w,
                tabs: R,
              }),
              s.createElement(
                l.TouchScrollContainer,
                null,
                s.createElement(d.PropertiesEditorTab, {
                  page: e,
                  tableKey: C,
                }),
              ),
            );
          },
          submitOnEnterKey: !1,
          showCloseIcon: !E,
        });
      }
      class f extends r.DialogRenderer {
        constructor(e) {
          super(),
            (this._dataSourceChangedPromise = null),
            (this._submitHandler = () => {
              Promise.resolve().then(() => {
                this._sources.map((e) => {
                  e.areLocalAndServerAlertsMismatch() && e.synchronizeAlert(!0);
                });
              }),
                this._close();
            }),
            (this._cancelHandler = () => {
              this._undoModel.undoToCheckpoint(this._undoCheckpoint);
            }),
            (this._closeHandler = () => {
              this._close();
            }),
            (this._dataSourceCollectionChangedHandler = () => {
              null === this._dataSourceChangedPromise &&
                (this._dataSourceChangedPromise = Promise.resolve().then(() => {
                  const e = this._undoModel.model();
                  this._sources.find(
                    (t) => null === e.dataSourceForId(t.id()),
                  ) && this._close(),
                    (this._dataSourceChangedPromise = null);
                }));
            }),
            (this._sources = e.sources),
            (this._propertyPages = e.propertyPages),
            (this._undoModel = e.undoModel),
            (this._title = e.title),
            (this._activeTabId = e.activeTabId),
            (this._renamable = e.renamable),
            (this._undoCheckpoint = this._undoModel.createUndoCheckpoint()),
            this._undoModel
              .model()
              .dataSourceCollectionChanged()
              .subscribe(this, this._dataSourceCollectionChangedHandler);
        }
        destroy() {
          this._close();
        }
        show() {
          this._isVisible() || (this._mount(), this._setVisibility(!0));
        }
        hide() {
          this._isVisible() && (this._unmount(), this._setVisibility(!1));
        }
        _mount() {
          n.render(
            s.createElement(g, {
              propertyPages: this._propertyPages,
              sources: this._sources,
              undoModel: this._undoModel,
              onSubmit: this._submitHandler,
              onCancel: this._cancelHandler,
              onClose: this._closeHandler,
              title: this._title,
              activeTabId: this._activeTabId,
              renamable: this._renamable,
            }),
            this._container,
          );
        }
        _unmount() {
          n.unmountComponentAtNode(this._container);
        }
        _isVisible() {
          return this.visible().value();
        }
        _close() {
          this.hide(),
            this._undoModel
              .model()
              .dataSourceCollectionChanged()
              .unsubscribe(this, this._dataSourceCollectionChangedHandler);
        }
      }
    },
    31807: (e, t, i) => {
      'use strict';
      i.d(t, { DialogTabs: () => p });
      var s = i(50959),
        n = i(97754),
        r = i(64205),
        o = i(40173),
        a = i(15185);
      const l = (0, o.mergeThemes)(r.DEFAULT_SLIDER_THEME, a);
      var c = i(39440),
        u = i(32563),
        d = i(57248);
      const h = d,
        m = (0, r.factory)(function (e) {
          return s.createElement(
            'div',
            { className: l.slider, ref: e.reference },
            s.createElement('div', { className: l.inner }),
          );
        });
      class p extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._createClickHandler = (e) => () => {
              this.props.onSelect(e);
            });
        }
        render() {
          const {
              theme: e = h,
              hiddenBottomBorders: t,
              fadedSlider: i = !0,
              ScrollComponent: r = c.HorizontalScroll,
            } = this.props,
            o = this._generateDialogTabs();
          return s.createElement(
            'div',
            { className: n(e.scrollWrap) },
            !t &&
              s.createElement('div', { className: e.headerBottomSeparator }),
            s.createElement(
              r,
              {
                isVisibleFade: u.mobiletouch,
                isVisibleButtons: !u.mobiletouch,
                isVisibleScrollbar: !1,
                fadeClassName: n({ [e.fadeWithoutSlider]: !i }),
              },
              (i) =>
                s.createElement(
                  'div',
                  { className: e.tabsWrap, ref: i },
                  s.createElement(
                    m,
                    { className: n(e.tabs, t && e.withoutBorder) },
                    o,
                  ),
                ),
            ),
          );
        }
        _generateDialogTabs() {
          const { activeTabId: e, tabs: t, theme: i = h } = this.props;
          return t.allIds.map((o) => {
            const a = e === o,
              l = t.byId[o].withNotificationsBadge;
            return s.createElement(
              r.SliderItem,
              {
                key: o,
                value: o,
                className: n(i.tab, !a && i.withHover, l && d.withBadge),
                isActive: a,
                onClick: this._createClickHandler(o),
              },
              t.byId[o].title,
            );
          });
        }
      }
    },
    39440: (e, t, i) => {
      'use strict';
      i.d(t, { HorizontalScroll: () => v });
      var s = i(50959),
        n = i(97754),
        r = i(50151),
        o = i(9745),
        a = i(70439),
        l = i(41207),
        c = i(80142),
        u = i(45601),
        d = i(61380),
        h = i(39416);
      const m = {
        isVisibleScrollbar: !0,
        shouldMeasure: !0,
        hideButtonsFrom: 1,
      };
      function p(e) {
        return s.createElement('div', {
          className: n(h.fadeLeft, e.className, { [h.isVisible]: e.isVisible }),
        });
      }
      function g(e) {
        return s.createElement('div', {
          className: n(h.fadeRight, e.className, {
            [h.isVisible]: e.isVisible,
          }),
        });
      }
      function f(e) {
        return s.createElement(b, { ...e, className: h.scrollLeft });
      }
      function _(e) {
        return s.createElement(b, { ...e, className: h.scrollRight });
      }
      function b(e) {
        return s.createElement(
          'div',
          {
            className: n(e.className, { [h.isVisible]: e.isVisible }),
            onClick: e.onClick,
          },
          s.createElement(
            'div',
            { className: h.iconWrap },
            s.createElement(o.Icon, { icon: d, className: h.icon }),
          ),
        );
      }
      const v = (function (e = f, t = _, i = p, o = g) {
        var d;
        return (
          ((d = class extends s.PureComponent {
            constructor(e) {
              super(e),
                (this._scroll = s.createRef()),
                (this._handleScrollLeft = () => {
                  if (this.props.onScrollButtonClick)
                    return void this.props.onScrollButtonClick('left');
                  const e =
                    this.props.scrollStepSize || this.state.widthWrap - 50;
                  this.animateTo(Math.max(0, this.currentPosition() - e));
                }),
                (this._handleScrollRight = () => {
                  if (this.props.onScrollButtonClick)
                    return void this.props.onScrollButtonClick('right');
                  const e =
                    this.props.scrollStepSize || this.state.widthWrap - 50;
                  this.animateTo(
                    Math.min(
                      (this.state.widthContent || 0) -
                        (this.state.widthWrap || 0),
                      this.currentPosition() + e,
                    ),
                  );
                }),
                (this._handleResizeWrap = ([e]) => {
                  const t = e.target.getBoundingClientRect();
                  this.props.onMeasureWrap && this.props.onMeasureWrap(t),
                    this.setState({ widthWrap: t.width }),
                    this._checkButtonsVisibility();
                }),
                (this._handleResizeContent = ([e]) => {
                  const t = e.target.getBoundingClientRect();
                  this.props.onMeasureContent && this.props.onMeasureContent(t);
                  const {
                    shouldDecreaseWidthContent: i,
                    buttonsWidthIfDecreasedWidthContent: s,
                  } = this.props;
                  i && s
                    ? this.setState({ widthContent: t.width + 2 * s })
                    : this.setState({ widthContent: t.width });
                }),
                (this._handleScroll = () => {
                  const { onScroll: e } = this.props;
                  e &&
                    e(
                      this.currentPosition(),
                      this.isAtLeft(),
                      this.isAtRight(),
                    ),
                    this._checkButtonsVisibility();
                }),
                (this._checkButtonsVisibility = () => {
                  const { isVisibleLeftButton: e, isVisibleRightButton: t } =
                      this.state,
                    i = this.isAtLeft(),
                    s = this.isAtRight();
                  i || e
                    ? i && e && this.setState({ isVisibleLeftButton: !1 })
                    : this.setState({ isVisibleLeftButton: !0 }),
                    s || t
                      ? s && t && this.setState({ isVisibleRightButton: !1 })
                      : this.setState({ isVisibleRightButton: !0 });
                }),
                (this.state = {
                  widthContent: 0,
                  widthWrap: 0,
                  isVisibleRightButton: !1,
                  isVisibleLeftButton: !1,
                });
            }
            componentDidMount() {
              this._checkButtonsVisibility();
            }
            componentDidUpdate(e, t) {
              (t.widthWrap === this.state.widthWrap &&
                t.widthContent === this.state.widthContent) ||
                this._handleScroll();
            }
            currentPosition() {
              return this._scroll.current
                ? (0, c.isRtl)()
                  ? (0, c.getLTRScrollLeft)(this._scroll.current)
                  : this._scroll.current.scrollLeft
                : 0;
            }
            isAtLeft() {
              return (
                !this._isOverflowed() ||
                this.currentPosition() <=
                  (0, r.ensureDefined)(this.props.hideButtonsFrom)
              );
            }
            isAtRight() {
              return (
                !this._isOverflowed() ||
                this.currentPosition() + this.state.widthWrap >=
                  this.state.widthContent -
                    (0, r.ensureDefined)(this.props.hideButtonsFrom)
              );
            }
            animateTo(e, t = l.dur) {
              const i = this._scroll.current;
              i &&
                ((0, c.isRtl)() && (e = (0, c.getLTRScrollLeftOffset)(i, e)),
                t <= 0
                  ? (i.scrollLeft = Math.round(e))
                  : (0, a.doAnimate)({
                      onStep(e, t) {
                        i.scrollLeft = Math.round(t);
                      },
                      from: i.scrollLeft,
                      to: Math.round(e),
                      easing: l.easingFunc.easeInOutCubic,
                      duration: t,
                    }));
            }
            render() {
              const {
                  children: r,
                  isVisibleScrollbar: a,
                  isVisibleFade: l,
                  isVisibleButtons: c,
                  shouldMeasure: d,
                  shouldDecreaseWidthContent: m,
                  buttonsWidthIfDecreasedWidthContent: p,
                  onMouseOver: g,
                  onMouseOut: f,
                  scrollWrapClassName: _,
                  fadeClassName: b,
                } = this.props,
                { isVisibleRightButton: v, isVisibleLeftButton: S } =
                  this.state,
                T = m && p;
              return s.createElement(
                u.Measure,
                { onResize: d ? this._handleResizeWrap : null },
                (m) =>
                  s.createElement(
                    'div',
                    {
                      className: h.wrapOverflow,
                      onMouseOver: g,
                      onMouseOut: f,
                      ref: m,
                    },
                    s.createElement(
                      'div',
                      {
                        className: n(h.wrap, T ? h.wrapWithArrowsOuting : ''),
                      },
                      s.createElement(
                        'div',
                        {
                          className: n(h.scrollWrap, _, {
                            [h.noScrollBar]: !a,
                          }),
                          onScroll: this._handleScroll,
                          ref: this._scroll,
                        },
                        s.createElement(
                          u.Measure,
                          { onResize: d ? this._handleResizeContent : null },
                          r,
                        ),
                      ),
                      l && s.createElement(i, { isVisible: S, className: b }),
                      l && s.createElement(o, { isVisible: v, className: b }),
                      c &&
                        s.createElement(e, {
                          onClick: this._handleScrollLeft,
                          isVisible: S,
                        }),
                      c &&
                        s.createElement(t, {
                          onClick: this._handleScrollRight,
                          isVisible: v,
                        }),
                    ),
                  ),
              );
            }
            _isOverflowed() {
              const { widthContent: e, widthWrap: t } = this.state;
              return e > t;
            }
          }).defaultProps = m),
          d
        );
      })(f, _, p, g);
    },
    64205: (e, t, i) => {
      'use strict';
      i.d(t, {
        DEFAULT_SLIDER_THEME: () => a,
        SliderItem: () => l,
        factory: () => c,
      });
      var s = i(50959),
        n = i(97754),
        r = i(50151),
        o = i(86355);
      const a = o;
      function l(e) {
        const t = n(e.className, o.tab, {
          [o.active]: e.isActive,
          [o.disabled]: e.isDisabled,
          [o.defaultCursor]: !!e.shouldUseDefaultCursor,
          [o.noBorder]: !!e.noBorder,
        });
        return s.createElement(
          'div',
          {
            className: t,
            onClick: e.onClick,
            ref: e.reference,
            'data-type': 'tab-item',
            'data-value': e.value,
            'data-name': 'tab-item-' + e.value.toString().toLowerCase(),
          },
          e.children,
        );
      }
      function c(e) {
        return class extends s.PureComponent {
          constructor() {
            super(...arguments), (this.activeTab = { current: null });
          }
          componentDidUpdate() {
            ((0, r.ensureNotNull)(this._slider).style.transition =
              'transform 350ms'),
              this._componentDidUpdate();
          }
          componentDidMount() {
            this._componentDidUpdate();
          }
          render() {
            const { className: t } = this.props,
              i = this._generateTabs();
            return s.createElement(
              'div',
              { className: n(t, o.tabs), 'data-name': this.props['data-name'] },
              i,
              s.createElement(e, {
                reference: (e) => {
                  this._slider = e;
                },
              }),
            );
          }
          _generateTabs() {
            return (
              (this.activeTab.current = null),
              s.Children.map(this.props.children, (e) => {
                const t = e,
                  i = Boolean(t.props.isActive),
                  n = {
                    reference: (e) => {
                      i && (this.activeTab.current = e),
                        t.props.reference && t.props.reference(e);
                    },
                  };
                return s.cloneElement(t, n);
              })
            );
          }
          _componentDidUpdate() {
            const e = (0, r.ensureNotNull)(this._slider).style;
            if (this.activeTab.current) {
              const t = this.activeTab.current.offsetWidth,
                i = this.activeTab.current.offsetLeft;
              (e.transform = `translateX(${i}px)`),
                (e.width = `${t}px`),
                (e.opacity = '1');
            } else e.opacity = '0';
          }
        };
      }
      c(function (e) {
        return s.createElement('div', {
          className: o.slider,
          ref: e.reference,
        });
      });
    },
    61380: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10" width="20" height="10"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M2 1l8 8 8-8"/></svg>';
    },
    33055: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.086 6.207a2 2 0 0 1 2.828 0l1.879 1.879a2 2 0 0 1 0 2.828l-.94.94-9 9-1 1-.146.146H6v-4.707l.146-.146 1-1 9-9 .94-.94zm2.121.707a1 1 0 0 0-1.414 0l-.586.586 1.647 1.646 1.646 1.647.586-.586a1 1 0 0 0 0-1.414l-1.879-1.879zm.586 4.586L18.5 10.207 10.207 18.5l1.293 1.293 8.293-8.293zm-9 9l-1.647-1.646L7.5 17.207l-.5.5V21h3.293l.5-.5zm-2.586-4L9.5 17.793 17.793 9.5 16.5 8.207 8.207 16.5z"/></svg>';
    },
    58102: (e) => {
      e.exports = {
        ar: ['تطبيق الإعدادات الافتراضية'],
        ca_ES: ['Aplica configuració predeterminada'],
        cs: 'Apply Defaults',
        de: ['Voreinstellungen anwenden'],
        el: 'Apply Defaults',
        en: 'Apply Defaults',
        es: ['Aplicar configuración predeterminada'],
        fa: 'Apply Defaults',
        fr: ['Appliquer les paramètres par défaut'],
        he_IL: ['החל ברירת מחדל'],
        hu_HU: ['Alapértelmezett Alkalmazása'],
        id_ID: ['Terapkan Pengaturan Awal'],
        it: ['Applica predefiniti'],
        ja: ['デフォルトを適用'],
        ko: ['기본설정'],
        ms_MY: ['Guna Pakai Lalai'],
        nl_NL: 'Apply Defaults',
        pl: ['Zastosuj domyślne'],
        pt: ['Aplicar padrões'],
        ro: 'Apply Defaults',
        ru: ['Применить по умолчанию'],
        sv: ['Tillämpa standardinställningarna'],
        th: ['ตั้งให้เป็นค่าเบื้องต้น'],
        tr: ['Varsayılanları Uygula'],
        vi: ['Áp dụng Nhiều mặc định'],
        zh: ['应用默认'],
        zh_TW: ['套用預設值'],
      };
    },
    98938: (e) => {
      e.exports = {
        ar: ['الإعدادات الإفتراضية'],
        ca_ES: ['Predeterminats'],
        cs: ['Výchozí'],
        de: ['Standardeinstellungen'],
        el: ['Προεπιλογές'],
        en: 'Defaults',
        es: ['Predeterminados'],
        fa: ['پیش‌فرض‌ها'],
        fr: ['Configurations par Défaut'],
        he_IL: ['ברירות מחדל'],
        hu_HU: ['Alapértelmezettek'],
        id_ID: ['Bawaan'],
        it: ['Predefiniti'],
        ja: ['デフォルト'],
        ko: ['기본설정'],
        ms_MY: ['Lalai'],
        nl_NL: ['Standaard'],
        pl: ['Domyślne'],
        pt: ['Padrões'],
        ro: 'Defaults',
        ru: ['По умолчанию'],
        sv: ['Standardinställningar'],
        th: ['ค่าเริ่มต้น'],
        tr: ['Varsayılanlar'],
        vi: ['Các mặc định'],
        zh: ['系统预设'],
        zh_TW: ['預設值'],
      };
    },
    18229: (e) => {
      e.exports = {
        ar: ['حفظ كافتراضي'],
        ca_ES: ['Desa per defecte'],
        cs: ['Save As Default'],
        de: ['Als Standard speichern'],
        el: ['Save As Default'],
        en: 'Save as default',
        es: ['Guardar por defecto'],
        fa: ['Save As Default'],
        fr: ['Sauvegarder comme Paramètres par Défaut'],
        he_IL: ['שמור כברירת מחדל'],
        hu_HU: ['Mentés Alapértelmezettként'],
        id_ID: ['Simpan Sebagai Bawaan'],
        it: ['Salva come predefinito'],
        ja: ['デフォルトを保存'],
        ko: ['기본설정으로 사용'],
        ms_MY: ['Simpan Sebagai Lalai'],
        nl_NL: ['Save As Default'],
        pl: ['Zapisz jako domyślny'],
        pt: ['Salvar como padrão'],
        ro: ['Save As Default'],
        ru: ['Сделать по умолчанию'],
        sv: ['Spara som standard'],
        th: ['บันทึกเป็นค่าเริ่มต้น'],
        tr: ['Varsayılan olarak sakla'],
        vi: ['Lưu Mặc định'],
        zh: ['保存为默认'],
        zh_TW: ['存為系統預設'],
      };
    },
    37214: (e) => {
      e.exports = {
        ar: ['الرسومات المختارة'],
        ca_ES: ['Dibuixos seleccionats'],
        cs: 'Selected Drawings',
        de: ['Ausgewählte Zeichnungen'],
        el: 'Selected Drawings',
        en: 'Selected Drawings',
        es: ['Dibujos seleccionados'],
        fa: 'Selected Drawings',
        fr: ['Dessins sélectionnés'],
        he_IL: ['שרטוטים נבחרים'],
        hu_HU: 'Selected Drawings',
        id_ID: ['Gambar yang dipilih'],
        it: ['Disegni selezionati'],
        ja: ['選択中の描画'],
        ko: ['고른 드로잉'],
        ms_MY: ['Lukisan Dipilih'],
        nl_NL: 'Selected Drawings',
        pl: ['Wybrane Rysunki'],
        pt: ['Desenhos selecionados'],
        ro: 'Selected Drawings',
        ru: ['Выбранные инструменты рисования'],
        sv: ['Utvalda ritningar'],
        th: ['ภาพวาดที่เลือก'],
        tr: ['Seçilmiş Çizimler'],
        vi: ['Bản vẽ đã chọn'],
        zh: ['已选绘图'],
        zh_TW: ['選定的繪圖'],
      };
    },
    79782: (e) => {
      e.exports = {
        ar: ['إعادة ضبط الإعدادات'],
        ca_ES: ['Restablir configuració'],
        cs: 'Reset settings',
        de: ['Einstellungen zurücksetzen'],
        el: ['Reset Settings'],
        en: 'Reset settings',
        es: ['Restablecer configuración'],
        fa: 'Reset settings',
        fr: ['Réinitialiser les paramètres'],
        he_IL: ['אפס הגדרות'],
        hu_HU: ['Alapbeállítások Visszaállítása'],
        id_ID: ['Atur Ulang Pengaturan'],
        it: ['Ripristina impostazioni'],
        ja: ['設定をリセット'],
        ko: ['설정초기화'],
        ms_MY: ['Set semula tetapan'],
        nl_NL: 'Reset settings',
        pl: ['Resetuj ustawienia'],
        pt: ['Redefinir configurações'],
        ro: ['Reset Settings'],
        ru: ['Сбросить настройки'],
        sv: ['Återställ inställningar'],
        th: ['คืนค่าการตั้งค่า'],
        tr: ['Ayarları Sıfırla'],
        vi: ['Thiết lập lại Cài đặt'],
        zh: ['重置设置'],
        zh_TW: ['重設設定'],
      };
    },
    40001: (e) => {
      e.exports = {
        ar: ['غيّر عنوان {sourceTitle} إلى {newSourceTitle}'],
        ca_ES: ['canvia el títol {sourceTitle} per {newSourceTitle}'],
        cs: 'change {sourceTitle} title to {newSourceTitle}',
        de: ['{sourceTitle} zu {newSourceTitle} ändern'],
        el: 'change {sourceTitle} title to {newSourceTitle}',
        en: 'change {sourceTitle} title to {newSourceTitle}',
        es: ['cambiar el título {sourceTitle} por {newSourceTitle}'],
        fa: 'change {sourceTitle} title to {newSourceTitle}',
        fr: ['Remplacer le titre {sourceTitle} par {newSourceTitle}'],
        he_IL: ['שנה את {sourceTitle} כותרת ל- {newSourceTitle}'],
        hu_HU: 'change {sourceTitle} title to {newSourceTitle}',
        id_ID: ['Ubah judul {sourceTitle} menjadi {newSourceTitle}'],
        it: ['Cambia titolo da {sourceTitle} a {newSourceTitle}'],
        ja: ['{sourceTitle}のタイトルを{newSourceTitle}に変更'],
        ko: ['{sourceTitle} 타이틀을 {newSourceTitle} 으로 바꾸기'],
        ms_MY: ['Tukar tajuk {sourceTitle} kepada {newSourceTitle}'],
        nl_NL: 'change {sourceTitle} title to {newSourceTitle}',
        pl: ['Zmień tytuł {sourceTitle} na {newSourceTitle}.'],
        pt: ['Mudar {sourceTitle} título para {newSourceTitle}'],
        ro: ['Change {sourceTitle} title to {newSourceTitle}'],
        ru: ['изменение названия {sourceTitle} на {newSourceTitle}'],
        sv: ['Ändra {sourceTitle} titel till {newSourceTitle}'],
        th: ['เปลี่ยนชื่อ {sourceTitle} ไปเป็น {newSourceTitle}'],
        tr: ['{sourceTitle} başlığını {newSourceTitle} olarak değiştirin'],
        vi: ['Thay đổi {sourceTitle} tiêu đề sang {newSourceTitle}'],
        zh: ['将{sourceTitle}标题更改为{newSourceTitle}'],
        zh_TW: ['將{sourceTitle}標題更改為{newSourceTitle}'],
      };
    },
  },
]);