import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { useBalances, useOpenOrders } from '../../utils/markets';
import FloatingElement from '../layout/FloatingElement';
import BalancesTable from './BalancesTable';
import FeesTable from './FeesTable';
import FillsTable from './FillsTable';
import OpenOrderTable from './OpenOrderTable';

export default function Index({ smallScreen, market }) {
  const [activeKeyStr, setActiveKeyStr] = useState('orders');
  if (smallScreen) {
    return (
      <FloatingElement style={{ flex: 1, paddingTop: 4 }}>
        <Row>
          <Col
            span={24 / 3}
            onClick={() => setActiveKeyStr('orders')}
            style={{
              width: '50%',
              textAlign: 'center',
              border: 'transparent',
              borderBottom:
                activeKeyStr === 'orders' ? '2px solid #D44EB7' : '',
              background: 'transparent',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: 600,
              color:
                activeKeyStr === 'orders'
                  ? '#F1F1F2'
                  : 'rgba(241, 241, 242, 0.5)',
              padding: '12px 0 12px',
              cursor: 'pointer',
            }}
          >
            Open Orders
          </Col>
          <Col
            span={24 / 3}
            onClick={() => setActiveKeyStr('fills')}
            style={{
              width: '50%',
              textAlign: 'center',
              border: 'transparent',
              borderBottom: activeKeyStr === 'fills' ? '2px solid #D44EB7' : '',
              background: 'transparent',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: 600,
              color:
                activeKeyStr === 'fills'
                  ? '#F1F1F2'
                  : 'rgba(241, 241, 242, 0.5)',
              padding: '12px 0 12px',
              cursor: 'pointer',
            }}
          >
            Recent Trade History
          </Col>
          <Col
            span={24 / 3}
            onClick={() => setActiveKeyStr('balances')}
            style={{
              width: '50%',
              textAlign: 'center',
              border: 'transparent',
              borderBottom:
                activeKeyStr === 'balances' ? '2px solid #D44EB7' : '',
              background: 'transparent',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: 600,
              color:
                activeKeyStr === 'balances'
                  ? '#F1F1F2'
                  : 'rgba(241, 241, 242, 0.5)',
              padding: '12px 0 12px',
              cursor: 'pointer',
            }}
          >
            Balances
          </Col>
        </Row>
        <div
          style={{
            border: '1px solid #1C274F',
            minHeight: 50,
            borderBottom: '',
            padding: 16,
          }}
        >
          {activeKeyStr && activeKeyStr === 'orders' ? <OpenOrdersTab /> : null}
          {activeKeyStr && activeKeyStr === 'fills' ? <FillsTable /> : null}
          {activeKeyStr && activeKeyStr === 'balances' ? <BalancesTab /> : null}
          {activeKeyStr && activeKeyStr === 'fees' ? <FeesTable /> : null}
        </div>
      </FloatingElement>
    );
  } else {
    return (
      <FloatingElement style={{ flex: 1, paddingTop: 4 }}>
        <Row>
          <Col
            span={24 / 3}
            onClick={() => setActiveKeyStr('orders')}
            style={{
              height: 42,
              width: '50%',
              textAlign: 'center',
              border: 'transparent',
              borderBottom:
                activeKeyStr === 'orders' ? '2px solid #D44EB7' : '',
              background: 'transparent',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: 600,
              color:
                activeKeyStr === 'orders'
                  ? '#F1F1F2'
                  : 'rgba(241, 241, 242, 0.5)',
              padding: '12px 0 12px',
              cursor: 'pointer',
            }}
          >
            Open Orders
          </Col>
          <Col
            span={24 / 3}
            onClick={() => setActiveKeyStr('fills')}
            style={{
              height: 42,
              width: '50%',
              textAlign: 'center',
              border: 'transparent',
              borderBottom: activeKeyStr === 'fills' ? '2px solid #D44EB7' : '',
              background: 'transparent',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: 600,
              color:
                activeKeyStr === 'fills'
                  ? '#F1F1F2'
                  : 'rgba(241, 241, 242, 0.5)',
              padding: '12px 0 12px',
              cursor: 'pointer',
            }}
          >
            Recent Trade History
          </Col>
          <Col
            span={24 / 3}
            onClick={() => setActiveKeyStr('balances')}
            style={{
              height: 42,
              width: '50%',
              textAlign: 'center',
              border: 'transparent',
              borderBottom:
                activeKeyStr === 'balances' ? '2px solid #D44EB7' : '',
              background: 'transparent',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: 600,
              color:
                activeKeyStr === 'balances'
                  ? '#F1F1F2'
                  : 'rgba(241, 241, 242, 0.5)',
              padding: '12px 0 12px',
              cursor: 'pointer',
            }}
          >
            Balances
          </Col>
        </Row>
        <div
          style={{
            border: '1px solid #1C274F',
            height: 400,
            borderBottom: '',
            padding: 16,
          }}
        >
          {activeKeyStr && activeKeyStr === 'orders' ? <OpenOrdersTab /> : null}
          {activeKeyStr && activeKeyStr === 'fills' ? <FillsTable /> : null}
          {activeKeyStr && activeKeyStr === 'balances' ? <BalancesTab /> : null}
          {activeKeyStr && activeKeyStr === 'fees' ? <FeesTable /> : null}
        </div>
      </FloatingElement>
    );
  }
}

const OpenOrdersTab = () => {
  const openOrders = useOpenOrders();

  return <OpenOrderTable openOrders={openOrders} />;
};

const BalancesTab = () => {
  const balances = useBalances();

  return <BalancesTable balances={balances} />;
};
