import { Col, Row } from 'antd';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import DeprecatedMarketsInstructions from '../../components/DeprecatedMarketsInstructions';
import Orderbook from '../../components/Orderbook';
import TradeForm from '../../components/TradeForm';
import UserInfoTable from '../../components/UserInfoTable';
import { MarketProvider, useMarket } from '../../utils/markets';
import * as _consts from './NftMarketplace.consts';

const Wrapper = styled.div`
  background: rgb(28, 28, 28);
  background: radial-gradient(
    circle,
    rgba(28, 28, 28, 1) 0%,
    rgba(6, 6, 6, 1) 50%,
    rgba(48, 24, 50, 1) 100%
  );
  height: 100%;
  display: 100%;
  flex-direction: column;
  padding: 16px 16px;
  .borderNone .ant-select-selector {
    border: none !important;
  }
  align-items: center;
`;

export default function NftPage() {
  const [dimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const width = dimensions?.width;

  function setMarketAddress(address) {
    console.log(address);
  }

  if (width < 1000) {
    return (
      <Wrapper>
        {_consts.EGG_MARKETPLACES.map((value, idx) => {
          return (
            <Row
              style={{
                minHeight: '500px',
                flexWrap: 'nowrap',
              }}
            >
              <Col
                key={idx}
                flex="100%"
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  minWidth: '280px',
                  padding: '3%',
                  alignContent: 'center',
                }}
              >
                <MarketProvider
                  marketAddress={value.market}
                  setMarketAddress={setMarketAddress}
                >
                  <NftPageInner
                    imageSrc={value.eggAsset}
                    market={value.market}
                    small={true}
                  />
                </MarketProvider>
              </Col>
            </Row>
          );
        })}
      </Wrapper>
    );
  } else {
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
                  alignContent: 'center',
                }}
              >
                <MarketProvider
                  marketAddress={value.market}
                  setMarketAddress={setMarketAddress}
                >
                  <NftPageInner
                    imageSrc={value.eggAsset}
                    market={value.market}
                    small = {false}
                  />
                </MarketProvider>
              </Col>
            );
          })}
        </Row>
      </Wrapper>
    );
  }
}

function NftPageInner({ imageSrc, market, small }) {
  const { marketName, customMarkets, setCustomMarkets, setMarketAddress } =
    useMarket();
  // const markets = useMarketsList();
  const [handleDeprecated, setHandleDeprecated] = useState(false);
  // const [dimensions, setDimensions] = useState({
  

  useEffect(() => {
    document.title = marketName ? `SFT Marketplace — DinoDex` : 'Dino';
  }, [marketName]);

  const changeOrderRef =
    useRef<({ size, price }: { size?: number; price?: number }) => void>();


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
    market: market,
  };
  const component = (() => {
    if (handleDeprecated) {
      return (
        <DeprecatedMarketsPage
          switchToLiveMarkets={() => setHandleDeprecated(false)}
        />
      );
    } else if (small) {
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

const RenderNormal = ({
  imageSrc,
  onChangeOrderRef,
  onPrice,
  onSize,
  market,
}) => {
  return (
    <>
      <img
        src={imageSrc}
        style={{ height: '250px', width: '210PX', alignSelf: 'center' }}
      />
      <TradeForm setChangeOrderRef={onChangeOrderRef} />
      <Orderbook smallScreen={false} onPrice={onPrice} onSize={onSize} />
      <UserInfoTable smallScreen={true} market={market} />
    </>
  );
};

const RenderSmaller = ({
  imageSrc,
  onChangeOrderRef,
  onPrice,
  onSize,
  market,
}) => {
  return (
    <>
          <img src={imageSrc} style={{ height: '200px', width: '175px', alignSelf: 'center' }}/>
          <TradeForm setChangeOrderRef={onChangeOrderRef} />
          <Orderbook smallScreen={false} onPrice={onPrice} onSize={onSize} />
          <UserInfoTable smallScreen={true} market={market} />
    </>
  );
};
