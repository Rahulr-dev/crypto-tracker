import axios from 'axios';

const BASE_URL = "https://api.coingecko.com/api/v3";

export const fetchTopCryptos = async (currency = "usd") => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=1&sparkline=false`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    return data.map(crypto => ({
      id: crypto.id,
      name: crypto.name,
      symbol: crypto.symbol,
      image: crypto.image,
      current_price: crypto.current_price,
      market_cap: crypto.market_cap,
      market_cap_rank: crypto.market_cap_rank,
      total_volume: crypto.total_volume,
      high_24h: crypto.high_24h,
      low_24h: crypto.low_24h,
      price_change_24h: crypto.price_change_24h,
      price_change_percentage_24h: crypto.price_change_percentage_24h,
      market_cap_change_24h: crypto.market_cap_change_24h,
      market_cap_change_percentage_24h: crypto.market_cap_change_percentage_24h,
      circulating_supply: crypto.circulating_supply,
      total_supply: crypto.total_supply,
      max_supply: crypto.max_supply,
      ath: crypto.ath,
      ath_change_percentage: crypto.ath_change_percentage,
      ath_date: crypto.ath_date,
      atl: crypto.atl,
      atl_change_percentage: crypto.atl_change_percentage,
      atl_date: crypto.atl_date,
      roi: crypto.roi,
      last_updated: crypto.last_updated
    }));
  };

export const fetchCryptoDetails = async (id, currency = "usd") => {
  const { data } = await axios.get(`${BASE_URL}/simple/price`, {
    params: { ids: id, vs_currencies: currency }
  });
  return data;
};
