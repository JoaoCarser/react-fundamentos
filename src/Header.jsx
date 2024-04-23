import React, {useContext} from "react";
import PropTypes from "prop-types";
import Button from "./Button";

import { ThemeContext } from "./ThemeContext";


function Header(props) {

  const {onToggleTheme} = useContext(ThemeContext);


  return (
    <>
      <h1>{props.title}</h1>
      {props.children}
      <Button onClick={onToggleTheme}>Mudar tema</Button>
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
