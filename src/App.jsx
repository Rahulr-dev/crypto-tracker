import { useState } from "react";
import CryptoSearch from "./components/CryptoSearch";
import RecentSearches from "./components/RecentSearches";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";  // Importing custom CSS
import { Row, Col } from "react-bootstrap";

const App = () => {

  const [recentSearches, setRecentSearches] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleRecentSearchSelect = (searchText) => {
    setSearchText(searchText); // Update the searchText
  };

  const handleRefresh = () => {
    setSearchText(); // Update the searchText
  };


  const handleRecentsearch = (searchText) => {
    // Ensure unique entries and limit to 10 items
    const updatedSearches = [
      searchText,
      ...recentSearches.filter((search) => search !== searchText),
    ].slice(0, 10);
  
    setRecentSearches(updatedSearches);
  };
  

  return (
    <div className="container d-flex flex-column align-items-center  min-vh-100">
      <h1 className="text-center mb-4">Cryptocurrency Price Tracker</h1>
      <Row className="m-0 p-0 w-100">
      <Col sm={8}>
      <CryptoSearch  onSearch={handleRecentsearch} searchText={searchText} onRefresh={handleRefresh}/>

      </Col>
      <Col sm={4}>

      <RecentSearches searches={recentSearches} onClick={handleRecentSearchSelect} />
      </Col>
      </Row>
      
      
    </div>
  );
};

export default App;
