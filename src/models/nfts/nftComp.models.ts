import { PublicKey } from '@solana/web3.js';

export type IEggRarities = 'GREEN' | 'BLUE' | 'PURPLE';

export type IEggMarketplace = {
  eggAsset: string;
  mint: string;
  market: string;
};
