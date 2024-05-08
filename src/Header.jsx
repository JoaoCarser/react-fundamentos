import React, {useContext} from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import Title from "./components/Title";
import { ThemeContext } from "./context/ThemeContext";


function Header(props) {

  const {onToggleTheme} = useContext(ThemeContext);

  return (
    <>
      <Title>{props.title}</Title>
      <Button onClick={onToggleTheme}>Mudar tema</Button>
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
