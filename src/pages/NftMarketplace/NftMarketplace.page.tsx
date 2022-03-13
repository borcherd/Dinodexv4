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
  getNftPageUrl,
} from '../../utils/markets';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import CustomMarketDialog from '../../components/CustomMarketDialog';
import DeprecatedMarketsInstructions from '../../components/DeprecatedMarketsInstructions';
import LinkAddress from '../../components/LinkAddress';
import { MarketInfo } from '../../utils/types';
import Orderbook from '../../components/Orderbook';
import StandaloneBalancesDisplay from '../../components/StandaloneBalancesDisplay';
import { TVChartContainer } from '../../components/TradingView';
import TradeForm from '../../components/TradeForm';
import TradesTable from '../../components/TradesTable';
import UserInfoTable from '../../components/UserInfoTable';
import { notify } from '../../utils/notifications';
import styled from 'styled-components';
import * as _consts from './NftMarketplace.consts';
import { nanoid } from 'nanoid';

const { Option, OptGroup } = Select;

const Wrapper = styled.div`
  background: rgb(28, 28, 28);
  background: radial-gradient(
    circle,
    rgba(28, 28, 28, 1) 0%,
    rgba(6, 6, 6, 1) 50%,
    rgba(48, 24, 50, 1) 100%
  );
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 16px;
  .borderNone .ant-select-selector {
    border: none !important;
  }
`;

export default function NftPage() {
  const marketAddress = 'AC11orBo1k5PFPyhjTj9o4KjcwD9b95hauSRtExy8eKv'; // page needs to support multiple markets so new marketprovider needs to be build
  useEffect(() => {
    if (marketAddress) {
      localStorage.setItem('marketAddress', JSON.stringify(marketAddress));
    }
  }, [marketAddress]);
  const history = useHistory();
  function setMarketAddress(address) {
    //vreemde format van market uithalen
  }

  return (
    <Wrapper>
      <Row
        style={{
          minHeight: '500px',
          flexWrap: 'nowrap',
        }}
      >
        {_consts.EGG_MARKETPLACES.map((value, idx) => {
          return (
            <Col
              key={idx}
              flex="33%"
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                minWidth: '280px',
                padding: '3%',
              }}
            >
              <MarketProvider
                marketAddress={value.market}
                setMarketAddress={setMarketAddress}
              >
                <NftPageInner imageSrc={value.eggAsset} />
              </MarketProvider>
            </Col>
          );
        })}
      </Row>
    </Wrapper>
  );
}

function NftPageInner({ imageSrc }) {
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

  const width = dimensions?.width;

  const componentProps = {
    imageSrc: imageSrc,
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

  return <>{component}</>;
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

const RenderNormal = ({ imageSrc, onChangeOrderRef, onPrice, onSize }) => {
  return (
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
          alignItems: 'center',
        }}
      >
        <label>egg</label>
        <img src={imageSrc} style={{ height: '250px', width: '250px' }} />
        <TradeForm setChangeOrderRef={onChangeOrderRef} />
        <Orderbook smallScreen={false} onPrice={onPrice} onSize={onSize} />
      </Col>
    </Row>
  );
};

const RenderSmaller = ({ imageSrc, onChangeOrderRef, onPrice, onSize }) => {
  return (
    <>
      <Row>
        <Col span={24}>
          <img src={imageSrc} height="200px" width="200px" />
          <TradeForm setChangeOrderRef={onChangeOrderRef} />
          <Orderbook smallScreen={false} onPrice={onPrice} onSize={onSize} />
        </Col>
      </Row>
    </>
  );
};
