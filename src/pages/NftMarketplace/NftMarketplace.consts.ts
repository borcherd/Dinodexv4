import * as models from 'models';
import * as consts from 'consts';
import * as assets from 'assets';

export const EGG_MARKETPLACES: models.IEggMarketplace[] = [
  {
    eggAsset: assets.BLUE_DINO_EGG,
    mint: consts.CUSTOM_TOKENS.EGG1.mintAddress,
    market: 'EpjbSu54Lx5TpVKX4iMpDo6eMk2fK5GoiNbP7rLU9WbN',
  },
  {
    eggAsset: assets.GREEN_DINO_EGG,
    mint: consts.CUSTOM_TOKENS.EGG2.mintAddress,
    market: 'BUWb1mFVUGSCxjQtZZFpvsKHs8rTbckUL1BBXDuhboUi',
  },
  {
    eggAsset: assets.PURPLE_DINO_EGG,
    mint: consts.CUSTOM_TOKENS.EGG3.mintAddress,
    market: '9ZCHG16nsSdNZZiafhrD3TdNsGsr315WrwgHmcLvgxcT',
  },
];
