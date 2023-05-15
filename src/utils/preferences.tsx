import React, { useContext } from 'react';
import { sleep, useLocalStorageState } from './utils';
import { useInterval } from './useInterval';
import { useConnection } from './connection';
import {
    getCachedMarket,
    getCachedOpenOrderAccounts,
    getSelectedTokenAccountForMint,
    useCurrentlyAutoSettling,
    useMarketInfos,
    useTokenAccounts,
} from './markets';
import { settleFunds } from './send';
import { PreferencesContextValues } from './types';
import { getAssociatedTokenAddress } from '@openbook-dex/associated-token';
import { useWallet } from '@solana/wallet-adapter-react';
import { BaseSignerWalletAdapter } from '@solana/wallet-adapter-base';

const PreferencesContext = React.createContext<PreferencesContextValues | null>(
    null,
);

export function PreferencesProvider({ children }) {
    const [autoSettleEnabled, setAutoSettleEnabled] = useLocalStorageState(
        'autoSettleEnabled',
        true,
    );

    const [tokenAccounts] = useTokenAccounts();
    const { connected, wallet, publicKey } = useWallet();
    const marketInfoList = useMarketInfos();
    const [currentlyAutoSettling, setCurrentlyAutoSettling] =
        useCurrentlyAutoSettling();
    const connection = useConnection();

    useInterval(() => {
        const autoSettle = async () => {
            if (!wallet || !publicKey) {
                return;
            }
            setCurrentlyAutoSettling(true);
            for (const marketInfo of marketInfoList) {
                try {
                    console.log(
                        `Autosettling ${
                            marketInfo.name
                        } ${marketInfo.address.toString()}`,
                    );
                    const market = await getCachedMarket(
                        connection,
                        marketInfo.address,
                        marketInfo.programId,
                    );
                    const openOrderAccounts = await getCachedOpenOrderAccounts(
                        connection,
                        market,
                        publicKey,
                    );
                    // settle funds into selected token wallets
                    const [baseAssocTokenAddress, quoteAssocTokenAddress] =
                        await Promise.all([
                            getAssociatedTokenAddress(
                                publicKey,
                                market.baseMintAddress,
                            ),
                            getAssociatedTokenAddress(
                                publicKey,
                                market.quoteMintAddress,
                            ),
                        ]);
                    const baseCurrencyAccount = getSelectedTokenAccountForMint(
                        tokenAccounts,
                        market.baseMintAddress,
                        baseAssocTokenAddress,
                    );
                    const quoteCurrencyAccount = getSelectedTokenAccountForMint(
                        tokenAccounts,
                        market.quoteMintAddress,
                        quoteAssocTokenAddress,
                    );
                    const openOrders = openOrderAccounts.find((oo) =>
                        oo.market.equals(marketInfo.address),
                    );
                    if (
                        baseCurrencyAccount &&
                        quoteCurrencyAccount &&
                        openOrders
                    ) {
                        await settleFunds({
                            market,
                            openOrders,
                            connection,
                            wallet: wallet.adapter as BaseSignerWalletAdapter,
                            baseCurrencyAccount,
                            quoteCurrencyAccount,
                            userPublicKey: publicKey,
                        });
                        await sleep(1000);
                    }
                } catch (e) {
                    //@ts-ignore
                    console.log('Error auto settling funds: ' + e.message);
                }
            }
            setCurrentlyAutoSettling(false);
        };
        connected &&
            autoSettleEnabled &&
            !currentlyAutoSettling &&
            autoSettle();
    }, 60000);

    return (
        <PreferencesContext.Provider
            value={{
                autoSettleEnabled,
                setAutoSettleEnabled,
            }}>
            {children}
        </PreferencesContext.Provider>
    );
}

export function usePreferences() {
    const context = useContext(PreferencesContext);
    if (!context) {
        throw new Error('Missing preferences context');
    }
    return {
        autoSettleEnabled: context.autoSettleEnabled,
        setAutoSettleEnabled: context.setAutoSettleEnabled,
    };
}
