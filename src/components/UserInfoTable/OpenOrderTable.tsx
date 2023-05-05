import React, { useState } from 'react';
import DataTable from '../layout/DataTable';

import styled from 'styled-components';
import { Button, Col, Row, Tag } from 'antd';
import { cancelOrder } from '../../utils/send';
import { useWallet } from '@solana/wallet-adapter-react';
import { useConnectionConfig, useSendConnection } from '../../utils/connection';
import { notify } from '../../utils/notifications';
import { DeleteOutlined } from '@ant-design/icons';
import { OrderWithMarketAndMarketName } from '../../utils/types';
import { BaseSignerWalletAdapter } from '@solana/wallet-adapter-base';

const CancelButton = styled(Button)`
  color: rgba(241, 241, 242, 1);
  // border: 1px solid rgba(194, 0, 251, 0.1);
  border: 1px solid #C200FB;
  border-radius: 4px;
  width: 65px;
  height: 24px;
  font-size: 10;
  padding: 0;
  margin: 0;
`;

export default function OpenOrderTable({
  openOrders,
  onCancelSuccess,
  pageSize,
  loading,
  marketFilter,
}: {
  openOrders: OrderWithMarketAndMarketName[] | null | undefined;
  onCancelSuccess?: () => void;
  pageSize?: number;
  loading?: boolean;
  marketFilter?: boolean;
}) {
  let { wallet , publicKey} = useWallet();
  let connection = useSendConnection();

  const [cancelId, setCancelId] = useState(null);
  const { priorityFee, computeUnits } = useConnectionConfig();

  async function cancel(order) {
    setCancelId(order?.orderId);
    try {
      if (!wallet || !publicKey) {
        return null;
      }

      await cancelOrder({
        order,
        market: order.market,
        connection,
        wallet: wallet.adapter as BaseSignerWalletAdapter,
        userPublicKey: publicKey,
        priorityFee,
        computeUnits,
      });
    } catch (e: any) {
      notify({
        message: 'Error cancelling order',
        description: e.message,
        type: 'error',
      });
      return;
    } finally {
      setCancelId(null);
    }
    onCancelSuccess && onCancelSuccess();
  }

  const dataSource = (openOrders || []).map((order) => ({
    ...order,
    key: order.orderId,
  }));

  return (
    <Row>
      <Col span={24}>
        <Row style={{ fontSize: 14, color: 'rgba(241, 241, 242, 0.5)', paddingBottom: 16 }}>
          <Col span={5} style={{ textAlign: 'left' }}>Market</Col>
          <Col span={5} style={{ textAlign: 'right' }}>Side</Col>
          <Col span={5} style={{ textAlign: 'right' }}>Size</Col>
          <Col span={5} style={{ textAlign: 'right' }}>Price</Col>
          <Col span={4} style={{ textAlign: 'right' }}> </Col>
        </Row>
        <div style={{ height: 350, overflowX: 'hidden' }}>
          {dataSource.map(({marketName, side, size, price, orderId }, i) => (
            <Row key={i} style={{ fontSize: 14, color: 'rgba(241, 241, 242, 1)', paddingBottom: 16 }}>
              <Col span={5} style={{ textAlign: 'left' }}>{marketName}</Col>
              <Col span={5} style={{ textAlign: 'right', color: 'rgba(90, 196, 190, 1)' }}>{side}</Col>
              <Col span={5} style={{ textAlign: 'right', color: 'rgba(90, 196, 190, 1)' }}>{size}</Col>
              <Col span={5} style={{ textAlign: 'right' }}>{price}</Col>
              <Col span={4} style={{ textAlign: 'right' }}>
                <CancelButton
                  onClick={() => cancel(dataSource[i])}
                  loading={cancelId + '' === orderId + ''}
                >
                  Cancel
                </CancelButton>
              </Col>
            </Row>
          ))}
        </div>
        {/*<DataTable*/}
        {/*  emptyLabel="No open orders"*/}
        {/*  dataSource={dataSource}*/}
        {/*  columns={columns}*/}
        {/*  pagination={true}*/}
        {/*  pageSize={pageSize ? pageSize : 5}*/}
        {/*  loading={loading !== undefined && loading}*/}
        {/*/>*/}
      </Col>
    </Row>
  );
}
