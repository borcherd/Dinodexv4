import { PublicKey } from '@solana/web3.js';
import { MarketInfo } from '../utils/types';

export const TOKEN_MARKETS: MarketInfo[] = [
  {
    name: 'DINO/USDC',
    deprecated: false,
    address: new PublicKey('AC11orBo1k5PFPyhjTj9o4KjcwD9b95hauSRtExy8eKv'),
    programId: new PublicKey('9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin'),
  },
  {
    name: 'DINOEGG/USDC',
    programId: new PublicKey('9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin'),
    deprecated: false,
    address: new PublicKey('wtePW13tTkiuFH2R8qgGLVBdEqXUin61VhZpBWBZDVs'),
  },
];

export const NFT_MARKETS: MarketInfo[] = [
  {
    name: 'Blue DINOEGG NFT/USDC',
    deprecated: false,
    address: new PublicKey('EpjbSu54Lx5TpVKX4iMpDo6eMk2fK5GoiNbP7rLU9WbN'),
    programId: new PublicKey('9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin'),
  },
  {
    name: 'Green DINOEGG NFT/USDC',
    deprecated: false,
    address: new PublicKey('BUWb1mFVUGSCxjQtZZFpvsKHs8rTbckUL1BBXDuhboUi'),
    programId: new PublicKey('9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin'),
  },
  {
    name: 'Purple DINOEGG NFT/USDC',
    deprecated: false,
    address: new PublicKey('9ZCHG16nsSdNZZiafhrD3TdNsGsr315WrwgHmcLvgxcT'),
    programId: new PublicKey('9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin'),
  },
];
