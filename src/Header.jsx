import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <>
      <h1>{props.title}</h1>
      {props.children}
      
      <hr />
    </>
  );
}


Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Header.defaultProps = {
    title: `Carser's Blog`
}



export default Header;
