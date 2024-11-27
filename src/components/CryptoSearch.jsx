import { useState, useEffect, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { Form, InputGroup, Row, Col, Button, Alert, Spinner } from "react-bootstrap";
import CryptoTable from "./CryptoTable";
import CurrencySelector from "./CurrencySelector";
import RefreshButton from "./RefreshButton";
import { fetchTopCryptos } from "../utils/api";

const CryptoSearch = ({ onSearch, searchText, onRefresh }) => {
  const [localSearchText, setLocalSearchText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [cryptos, setCryptos] = useState([]);
  const [currency, setCurrency] = useState("usd");
  const [error, setError] = useState(null); // To store API error messages
  const [loading, setLoading] = useState(false); // To manage loading state

  const currencySymbols = {
    usd: "$",
    eur: "€",
    gbp: "£",
    inr: "₹",
    chf: "CHF",
  };

  const [currencySymbol, setCurrencySymbol] = useState(currencySymbols[currency]);

  // Fetch top cryptos and handle errors gracefully
  const loadCryptos = useCallback(async () => {
    try {
      setLoading(true);
      setError(null); // Clear previous error

      const response = await fetchTopCryptos(currency);
      setCryptos(response); // Set cryptos if the request succeeds
    } catch (err) {
      if (err.response && err.response.status === 429) {
        setError("Too many requests. Please wait a moment before trying again.");
      } else {
        setError("An error occurred while fetching cryptocurrencies.");
      }
    } finally {
      setLoading(false);
    }
  }, [currency]);

  useEffect(() => {
    loadCryptos(); // Load data when the component mounts or currency changes
  }, [loadCryptos]);

  useEffect(() => {
    if (searchText) {
      setSearchTerm(searchText);
      setLocalSearchText(searchText); // Sync input with the searchText prop
    }
  }, [searchText]);

  const filteredCryptos = useMemo(() => {
    return cryptos.filter((crypto) =>
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [cryptos, searchTerm]);

  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
    setCurrencySymbol(currencySymbols[newCurrency]);
  };

  const handleRefresh = () => {
    setSearchTerm("");
    setLocalSearchText(""); // Clear the search input
    loadCryptos(); // Fetch the latest data
    onRefresh();
  };

  const handleSearch = () => {
    onRefresh();
    setSearchTerm(localSearchText); // Update searchTerm based on input
    onSearch(localSearchText); // Notify parent component
  };

  return (
    <div>
      <Row className="align-items-center mb-3">
        <Col xs={12} sm={12} md={6} lg={6}>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Search Cryptocurrency"
              value={localSearchText}
              onChange={(e) => setLocalSearchText(e.target.value)}
            />
            <Button variant="primary" onClick={handleSearch}>
              Search
            </Button>
          </InputGroup>
        </Col>

        <Col xs={12} sm={12} md={3} lg={2} className="mt-2 mt-sm-2">
          <CurrencySelector
            currentCurrency={currency}
            onCurrencyChange={handleCurrencyChange}
          />
        </Col>

        <Col xs={12} sm={12} md={3} lg={2} className="mt-2 mt-sm-2">
          <RefreshButton onClick={handleRefresh} />
        </Col>
      </Row>

      {/* Show error message if there's an error */}
      {error && <Alert variant="danger">{error}</Alert>}

      {/* Show spinner while loading */}
      {loading && <Spinner animation="border" />}

      {/* Show the table only if there's no error and data is available */}
      {!error && !loading && filteredCryptos.length > 0 && (
        <CryptoTable
          cryptos={filteredCryptos}
          currencySymbol={currencySymbol}
        />
      )}

      {/* Show a fallback message if no cryptos match the search and no error */}
      {!error && !loading && filteredCryptos.length === 0 && (
        <p>No cryptocurrencies match your search.</p>
      )}
    </div>
  );
};

CryptoSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired,
  searchText: PropTypes.string,
};

export default CryptoSearch;
