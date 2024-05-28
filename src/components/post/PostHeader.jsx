import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";
import Button from "../../Button";

function PostHeader(props) {
  return (
    <>
      <strong>
        {props.post.removed ? <s>{props.post.title}</s> : props.post.title}
      </strong>
      <Button 
      onClick={() => props.onRemove(props.post.id)}
      >
        Remover
      </Button>
    </>
  );
}

// 'PROPTYPES' RESPONSAVEL PELA TIPAGEM DAS PROPRIEDADES
PostHeader.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    removed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default PostHeader;
