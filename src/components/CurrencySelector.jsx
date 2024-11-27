// import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const CurrencySelector = ({ currentCurrency, onCurrencyChange }) => {
  const handleCurrencyChange = (e) => {
    const newCurrency = e.target.value;
    onCurrencyChange(newCurrency);
  };

  return (
    <div >
      <Form.Control as="select" value={currentCurrency} onChange={handleCurrencyChange} className="custom-select">
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="gbp">GBP</option>
        <option value="inr">INR</option>
        <option value="chf">CHF</option>
      </Form.Control>
    </div>
  );
};

CurrencySelector.propTypes = {
  currentCurrency: PropTypes.string.isRequired,  // Ensure this is always a string
  onCurrencyChange: PropTypes.func.isRequired,
};

export default CurrencySelector;
