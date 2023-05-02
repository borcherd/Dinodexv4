import {  Col, Row } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import {
  useBalances,
  useMarket,
  useTokenAccounts
} from '../utils/markets';
import { Balances } from '../utils/types';
import { useWallet } from '../utils/wallet';
import DepositDialog from './DepositDialog';
import FloatingElement from './layout/FloatingElement';
import StandaloneTokenAccountsSelect from './StandaloneTokenAccountSelect';

const RowBox = styled(Row)`
  padding-bottom: 20px;
`;



export default function StandaloneBalancesDisplay() {
  const { baseCurrency, quoteCurrency, market } = useMarket();
  const balances = useBalances();
  const { wallet, connected } = useWallet();
  const [baseOrQuote, setBaseOrQuote] = useState('');
  const [tokenAccounts] = useTokenAccounts();
  const baseCurrencyBalances =
    balances && balances.find((b) => b.coin === baseCurrency);
  const quoteCurrencyBalances =
    balances && balances.find((b) => b.coin === quoteCurrency);
  

  const formattedBalances: [
    string | undefined,
    Balances | undefined,
    string,
    string | undefined,
  ][] = [
    [
      baseCurrency,
      baseCurrencyBalances,
      'base',
      market?.baseMintAddress.toBase58(),
    ],
    [
      quoteCurrency,
      quoteCurrencyBalances,
      'quote',
      market?.quoteMintAddress.toBase58(),
    ],
  ];
  return (
    //@ts-ignore
    <FloatingElement style={{ flex: 1, paddingTop: 9 }}>
      <div
        style={{
          width: '100%',
          borderBottom: '1px solid #1C274F',
          fontSize: 14,
          paddingBottom: 12,
        }}
      >
        Wallet Balance
      </div>
      <div style={{ paddingRight: 10 }}>
        <Row
          style={{
            marginTop: 16,
            color: 'rgba(241, 241, 242, 0.5)',
            fontSize: 12,
            textAlign: 'right',
          }}
        >
          <Col span={6} style={{ textAlign: 'left' }}>
            Asset
          </Col>
          <Col span={9}>Wallet balance</Col>
        </Row>
        {formattedBalances.map(
          ([currency, balances, baseOrQuote, mint], index) => (
            <React.Fragment key={index}>
              <Row
                style={{
                  marginTop: 16,
                  fontSize: 12,
                  color: 'rgba(241, 241, 242, 1)',
                  textAlign: 'right',
                  paddingBottom: 18,
                }}
              >
                <Col
                  span={6}
                  style={{
                    color: 'rgba(241, 241, 242, 0.5)',
                    textAlign: 'left',
                  }}
                >
                  {currency}
                </Col>
                <Col span={9}>{balances && balances.wallet}</Col>
                <Col span={6} style={{ paddingTop: 8 }}></Col>
                <Col span={9} style={{ paddingTop: 8 }}>

                </Col>
              </Row>

              {connected && (
                <RowBox
                  align="middle"
                  style={{
                    paddingBottom: 10,
                    borderBottom: '1px solid #1C274F',
                  }}
                >
                  <StandaloneTokenAccountsSelect
                    accounts={tokenAccounts
                      ?.filter(
                        (account) => account.effectiveMint.toBase58() === mint,
                      )
                      .sort((a, b) =>
                        a.pubkey.toString() === wallet?.publicKey.toString()
                          ? -1
                          : 1,
                      )}
                    mint={mint}
                    label
                  />
                </RowBox>
              )}
            </React.Fragment>
          ),
        )}
      </div>
      <DepositDialog
        baseOrQuote={baseOrQuote}
        onClose={() => setBaseOrQuote('')}
      />
    </FloatingElement>
  );
}
