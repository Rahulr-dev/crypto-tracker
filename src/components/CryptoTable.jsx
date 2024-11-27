// import React from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";

const CryptoTable = ({ cryptos, currencySymbol }) => {

  // Helper function to determine price change color
  const priceChangeColor = (priceChange) => {
    return priceChange < 0 ? "text-danger" : "text-success";
  };

  // Safe toFixed function to ensure we're dealing with valid numbers
  const safeToFixed = (value, decimals = 2) => {
    return value !== undefined && value !== null && !isNaN(value)
      ? value.toFixed(decimals)
      : "-";  // Return a dash if the value is invalid
  };

  return (
    <Table striped bordered hover className="mt-2">
      <thead>
        <tr>
          <th>#</th>
          <th>Coin</th>
          <th>Price</th>
          <th>1h</th>
          <th>24h</th>
          <th>7d</th>
          <th>Market Cap</th>
        </tr>
      </thead>
      <tbody>
        {cryptos.map((crypto) => (
          <tr
            key={crypto.id}
            className="cursor-pointer"
            style={{ cursor: "pointer" }}
          >
            <td>{crypto.market_cap_rank}</td>
            <td>
              <img
                src={crypto.image}
                alt={crypto.name}
                style={{ width: "30px", marginRight: "10px" }}
              />
              {crypto.name} ({crypto.symbol.toUpperCase()})
            </td>
            <td>{currencySymbol}{safeToFixed(crypto.current_price)}</td>
            <td className={priceChangeColor(crypto.price_change_percentage_24h)}>
              {safeToFixed(crypto.price_change_percentage_24h)}%
            </td>
            <td className={priceChangeColor(crypto.price_change_24h)}>
              {currencySymbol}{safeToFixed(crypto.price_change_24h)}
            </td>
            <td className={priceChangeColor(crypto.price_change_percentage_24h)}>
              {safeToFixed(crypto.price_change_percentage_24h)}%
            </td>
            <td>{currencySymbol}{safeToFixed(crypto.market_cap, 0)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

CryptoTable.propTypes = {
  cryptos: PropTypes.array.isRequired,
  currencySymbol: PropTypes.string.isRequired,
};

export default CryptoTable;
