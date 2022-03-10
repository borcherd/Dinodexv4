import { Button, Col, Popover, Row, Select, Typography } from 'antd';
import {
  DeleteOutlined,
  InfoCircleOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import {
  MarketProvider,
  getMarketInfos,
  getTradePageUrl,
  useMarket,
  useMarketsList,
  useUnmigratedDeprecatedMarkets,
} from '../utils/markets';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import CustomMarketDialog from '../components/CustomMarketDialog';
import DeprecatedMarketsInstructions from '../components/DeprecatedMarketsInstructions';
import LinkAddress from '../components/LinkAddress';
import { MarketInfo } from '../utils/types';
import Orderbook from '../components/Orderbook';
import StandaloneBalancesDisplay from '../components/StandaloneBalancesDisplay';
import { TVChartContainer } from '../components/TradingView';
import TradeForm from '../components/TradeForm';
import TradesTable from '../components/TradesTable';
import UserInfoTable from '../components/UserInfoTable';
import { notify } from '../utils/notifications';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

const { Option, OptGroup } = Select;

const Wrapper = styled.div`
background: rgb(28,28,28);
background: radial-gradient(circle, rgba(28,28,28,1) 0%, rgba(6,6,6,1) 50%, rgba(48,24,50,1) 100%); 
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 16px;
  .borderNone .ant-select-selector {
    border: none !important;
  };
`;

export default function NftPage() {
  const { marketAddress } = useParams();
  useEffect(() => {
    if (marketAddress) {
      localStorage.setItem('marketAddress', JSON.stringify(marketAddress));
    }
  }, [marketAddress]);
  const history = useHistory();
  function setMarketAddress(address) {
    history.push(getTradePageUrl(address));
  }

  return (
    <MarketProvider
      marketAddress={marketAddress}
      setMarketAddress={setMarketAddress}
    >
      <TradePageInner />
    </MarketProvider>
  );
}

function TradePageInner() {
  const {
    market,
    marketName,
    customMarkets,
    setCustomMarkets,
    setMarketAddress,
  } = useMarket();
  // const markets = useMarketsList();
  const [handleDeprecated, setHandleDeprecated] = useState(false);
  const [addMarketVisible, setAddMarketVisible] = useState(false);
  const deprecatedMarkets = useUnmigratedDeprecatedMarkets();
  // const [dimensions, setDimensions] = useState({
  const [dimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    document.title = marketName ? `${marketName} — DinoDex` : 'Dino';
  }, [marketName]);

  const changeOrderRef =
    useRef<({ size, price }: { size?: number; price?: number }) => void>();

  // useEffect(() => {
  //   const handleResize = () => {
  //     setDimensions({
  //       height: window.innerHeight,
  //       width: window.innerWidth,
  //     });
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  const width = dimensions?.width;

  const componentProps = {
    onChangeOrderRef: (ref) => (changeOrderRef.current = ref),
    onPrice: useCallback(
      (price) => changeOrderRef.current && changeOrderRef.current({ price }),
      [],
    ),
    onSize: useCallback(
      (size) => changeOrderRef.current && changeOrderRef.current({ size }),
      [],
    ),
  };
  const component = (() => {
    if (handleDeprecated) {
      return (
        <DeprecatedMarketsPage
          switchToLiveMarkets={() => setHandleDeprecated(false)}
        />
      );
    } else if (width < 1000) {
      return <RenderSmaller {...componentProps} />;
    } else {
      return <RenderNormal {...componentProps} />;
    }
  })();

  const onAddCustomMarket = (customMarket) => {
    const marketInfo = getMarketInfos(customMarkets).some(
      (m) => m.address.toBase58() === customMarket.address,
    );
    if (marketInfo) {
      notify({
        message: `A market with the given ID already exists`,
        type: 'error',
      });
      return;
    }
    const newCustomMarkets = [...customMarkets, customMarket];
    setCustomMarkets(newCustomMarkets);
    setMarketAddress(customMarket.address);
  };

  const onDeleteCustomMarket = (address) => {
    const newCustomMarkets = customMarkets.filter((m) => m.address !== address);
    setCustomMarkets(newCustomMarkets);
  };
  // const [newMarKets] = useState(markets);

  return (
    <>
      <CustomMarketDialog
        visible={addMarketVisible}
        onClose={() => setAddMarketVisible(false)}
        onAddCustomMarket={onAddCustomMarket}
      />
      <Wrapper>
        <Row
          align="middle"
          style={{ paddingLeft: 5, paddingRight: 5, height: 64 }}
          gutter={16}
        >
          <Col>
            <MarketSelector
              markets={useMarketsList()}
              setHandleDeprecated={setHandleDeprecated}
              placeholder={'Select market'}
              customMarkets={customMarkets}
              onDeleteCustomMarket={onDeleteCustomMarket}
            />
          </Col>
          
          {deprecatedMarkets && deprecatedMarkets.length > 0 && (
            <React.Fragment>
              <Col>
                <Typography>
                  You have unsettled funds on old markets! Please go through
                  them to claim your funds.
                </Typography>
              </Col>
              <Col>
                <Button onClick={() => setHandleDeprecated(!handleDeprecated)}>
                  {handleDeprecated ? 'View new markets' : 'Handle old markets'}
                </Button>
              </Col>
            </React.Fragment>
          )}
        </Row>
        {component}
      </Wrapper>
    </>
  );
}

function MarketSelector({
  markets,
  placeholder,
  setHandleDeprecated,
  customMarkets,
  onDeleteCustomMarket,
}) {
  const { market, setMarketAddress } = useMarket();

  const onSetMarketAddress = (marketAddress) => {
    setHandleDeprecated(false);
    setMarketAddress(marketAddress);
  };

  const selectedMarket = getMarketInfos(customMarkets)
    .find(
      (proposedMarket) =>
        market?.address && proposedMarket.address.equals(market.address),
    )
    ?.address?.toBase58();

  const uniqueArray = (arr) => {
    let addList: string[] = [];
    let reList: MarketInfo[] = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (addList.indexOf(arr[index].address.toBase58()) === -1) {
        reList.push(arr[index]);
        addList.push(arr[index].address.toBase58());
      }
    }
    return reList;
  };

  return (
    <Select
      showSearch
      size={'large'}
      bordered={false}
      style={{ width: 360, border: 1 }}
      placeholder={placeholder || 'Select a market'}
      optionFilterProp="name"
      onSelect={onSetMarketAddress}
      listHeight={400}
      value={selectedMarket}
      filterOption={(input, option) =>
        option?.name?.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {customMarkets && customMarkets.length > 0 && (
        <OptGroup label="Custom">
          {customMarkets.map(({ address, name }, i) => (
            <Option
              value={address}
              key={nanoid()}
              name={name}
              style={{
                padding: '10px',
                // @ts-ignore
                backgroundColor: i % 2 === 0 ? 'rgb(39, 44, 61)' : null,
              }}
            >
              <Row>
                <Col flex="auto">{name}</Col>
                {selectedMarket !== address && (
                  <Col>
                    <DeleteOutlined
                      onClick={(e) => {
                        e.stopPropagation();
                        e.nativeEvent.stopImmediatePropagation();
                        onDeleteCustomMarket && onDeleteCustomMarket(address);
                      }}
                    />
                  </Col>
                )}
              </Row>
            </Option>
          ))}
        </OptGroup>
      )}
      <OptGroup label="Markets">
        {uniqueArray(markets).map(({ address, name, deprecated }, i) => (
          <Option
            value={address.toBase58()}
            key={nanoid()}
            name={name}
            style={{
              padding: '10px',
              // @ts-ignore
              backgroundColor: i % 2 === 0 ? 'rgb(39, 44, 61)' : null,
            }}
          >
            {name} {deprecated ? ' (Deprecated)' : null}
          </Option>
        ))}
      </OptGroup>
    </Select>
  );
}

const DeprecatedMarketsPage = ({ switchToLiveMarkets }) => {
  return (
    <>
      <Row>
        <Col flex="auto">
          <DeprecatedMarketsInstructions
            switchToLiveMarkets={switchToLiveMarkets}
          />
        </Col>
      </Row>
    </>
  );
};

const RenderNormal = ({ onChangeOrderRef, onPrice, onSize }) => {
  return (
    <div>
      <Row
        style={{
          minHeight: '500px',
          flexWrap: 'nowrap',
        }}
      >
        <Col
          flex="33%"
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            minWidth: '280px',
            padding: '3%',
          }}
        >
          <img src={require('../assets/blue_dino_egg2.png')} />
          <TradeForm setChangeOrderRef={onChangeOrderRef} />
          <Orderbook smallScreen={false} onPrice={onPrice} onSize={onSize} />
        </Col>

        <Col
          flex="33%"
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            minWidth: '280px',
            padding: '3%',
          }}
        >
          <img src={require('./../assets/green_dino_egg2.png')} />
          <TradeForm setChangeOrderRef={onChangeOrderRef} />
          <Orderbook smallScreen={false} onPrice={onPrice} onSize={onSize} />
        </Col>

        <Col
          flex="33%"
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            minWidth: '280px',
            padding: '3%',
          }}
        >
          <img src={require('../assets/purple_dino_egg2.png')} />
          <TradeForm setChangeOrderRef={onChangeOrderRef} />
          <Orderbook smallScreen={false} onPrice={onPrice} onSize={onSize} />
        </Col>
      </Row>

      <Row
        style={{
          minHeight: '150px',
          flexWrap: 'nowrap',
        }}
      >
        <Col
          flex="99%"
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            minWidth: '280px',
            padding: '3%',
          }}
        >
          <UserInfoTable smallScreen={false} />
        </Col>
      </Row>
    </div>
  );
};

const RenderSmaller = ({ onChangeOrderRef, onPrice, onSize }) => {
  return (
    <>
      <Row>
        <Col span={24} >
          <img src={require('../assets/blue_dino_egg2.png')} height='200px' width='200px' />
          <TradeForm setChangeOrderRef={onChangeOrderRef} />
          <Orderbook smallScreen={false} onPrice={onPrice} onSize={onSize} />
        </Col>

        <Col span={24}>
          <img src={require('../assets/green_dino_egg2.png')} height='200px' width='200px' />
          <TradeForm setChangeOrderRef={onChangeOrderRef} />
          <Orderbook smallScreen={false} onPrice={onPrice} onSize={onSize} />
        </Col>

        <Col span={24} >
          <img src={require('../assets/purple_dino_egg2.png')} height='200px' width='200px'  />
          <TradeForm setChangeOrderRef={onChangeOrderRef} />
          <Orderbook smallScreen={false} onPrice={onPrice} onSize={onSize} />
        </Col>

        
      </Row>
    </>
  );
};
