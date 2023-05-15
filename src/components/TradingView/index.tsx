import { useEffect, useRef } from 'react';
import './index.css';
import {
    widget,
    ChartingLibraryWidgetOptions,
    LanguageCode,
    ResolutionString,
} from '../../charting_library';
import * as React from 'react';
import { flatten } from 'utils/utils';
import { useMarket } from 'utils/markets';

export interface ChartContainerProps {
    symbol: ChartingLibraryWidgetOptions['symbol'];
    interval: ChartingLibraryWidgetOptions['interval'];

    // BEWARE: no trailing slash is expected in feed URL
    datafeedUrl: string;
    libraryPath: ChartingLibraryWidgetOptions['library_path'];
    chartsStorageUrl: ChartingLibraryWidgetOptions['charts_storage_url'];
    chartsStorageApiVersion: ChartingLibraryWidgetOptions['charts_storage_api_version'];
    clientId: ChartingLibraryWidgetOptions['client_id'];
    userId: ChartingLibraryWidgetOptions['user_id'];
    fullscreen: ChartingLibraryWidgetOptions['fullscreen'];
    autosize: ChartingLibraryWidgetOptions['autosize'];
    studiesOverrides: ChartingLibraryWidgetOptions['studies_overrides'];
    container: ChartingLibraryWidgetOptions['container'];
    theme: string;
    containerId: ChartingLibraryWidgetOptions['container_id'];
}

export const TVChartContainer = () => {
    const chartContainerRef =
        useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;

    const defaultProps: Omit<ChartContainerProps, 'container'> = {
        symbol: 'AAPL',
        interval: 'D' as ResolutionString,
        datafeedUrl: 'https://demo_feed.tradingview.com',
        libraryPath: '/charting_library/',
        chartsStorageUrl: 'https://saveload.tradingview.com',
        chartsStorageApiVersion: '1.1',
        clientId: 'tradingview.com',
        userId: 'public_user_id',
        fullscreen: false,
        autosize: true,
        studiesOverrides: {},
        theme: 'Dark',
        containerId: 'tv_chart_container',
    };

    const chartProperties = JSON.parse(
        localStorage.getItem('chartproperties') || '{}',
    );
    const { marketName } = useMarket();

    useEffect(() => {
        const savedProperties = flatten(chartProperties, {
            restrictTo: [
                'scalesProperties',
                'paneProperties',
                'tradingProperties',
            ],
        });

        const widgetOptions: ChartingLibraryWidgetOptions = {
            symbol: defaultProps.symbol as string,
            // BEWARE: no trailing slash is expected in feed URL
            // tslint:disable-next-line:no-any
            datafeed: new (window as any).Datafeeds.UDFCompatibleDatafeed(
                defaultProps.datafeedUrl,
            ),
            interval:
                defaultProps.interval as ChartingLibraryWidgetOptions['interval'],
            container: chartContainerRef.current,
            library_path: defaultProps.libraryPath as string,

            locale: 'en',
            disabled_features: ['use_localstorage_for_settings'],
            enabled_features: ['study_templates'],
            charts_storage_url: defaultProps.chartsStorageUrl,
            charts_storage_api_version: defaultProps.chartsStorageApiVersion,
            client_id: defaultProps.clientId,
            user_id: defaultProps.userId,
            fullscreen: defaultProps.fullscreen,
            autosize: defaultProps.autosize,
            studies_overrides: defaultProps.studiesOverrides,
            theme: defaultProps.theme === 'Dark' ? 'Dark' : 'Light',
            overrides: {
                ...savedProperties,
                'mainSeriesProperties.candleStyle.upColor': '#41C77A',
                'mainSeriesProperties.candleStyle.downColor': '#F23B69',
                // 'mainSeriesProperties.candleStyle.borderColor': '#378658',
                'mainSeriesProperties.candleStyle.borderUpColor': '#41C77A',
                'mainSeriesProperties.candleStyle.borderDownColor': '#F23B69',
                'mainSeriesProperties.candleStyle.wickUpColor': '#41C77A',
                'mainSeriesProperties.candleStyle.wickDownColor': '#F23B69',
            },
        };

        const tvWidget = new widget(widgetOptions);

        tvWidget.onChartReady(() => {
            tvWidget.headerReady().then(() => {
                const button = tvWidget.createButton();
                button.setAttribute(
                    'title',
                    'Click to show a notification popup',
                );
                button.classList.add('apply-common-tooltip');
                button.addEventListener('click', () =>
                    tvWidget.showNoticeDialog({
                        title: 'Notification',
                        body: 'TradingView Charting Library API works correctly',
                        callback: () => {
                            console.log('Noticed!');
                        },
                    }),
                );
                button.innerHTML = 'Check API';
            });
        });

        return () => {
            tvWidget.remove();
        };
    });

    return (
        <div
            style={{ height: window.innerWidth < 1000 ? '50vh' : 540 }}
            id={defaultProps.containerId}
            ref={chartContainerRef}
            className={'TVChartContainer'}
        />
    );
};
