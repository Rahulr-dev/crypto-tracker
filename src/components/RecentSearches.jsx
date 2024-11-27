// import React from "react";
import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";

const RecentSearches = ({ searches, onClick }) => {
  return (
    <div>
      <h5>Recent Searches</h5>
      <ListGroup>
        {searches.map((crypto, index) => (
          <ListGroup.Item key={index} onClick={() => onClick(crypto)}>
            {crypto}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

RecentSearches.propTypes = {
  searches: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RecentSearches;
