export const MARKET_SELECT = 'MARKET_SELECT';

export const marketSelectAction = market => ({
    type: MARKET_SELECT,
    payload: market,
    meta: []
});
