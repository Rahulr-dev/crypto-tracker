// RefreshButton.jsx
// import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types"; // Import PropTypes

const RefreshButton = ({ onClick }) => {
  return (
    <Button variant="outline-secondary" onClick={onClick} className="ml-2 w-100">
      Refresh
    </Button>
  );
};

// Validate the props using PropTypes
RefreshButton.propTypes = {
  onClick: PropTypes.func.isRequired, // Ensures onClick is a required function
};

export default RefreshButton;
