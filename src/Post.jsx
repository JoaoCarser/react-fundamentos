import React from "react";
import PropTypes from "prop-types";

function Post(props){
    return(
        <>
            <article>
                <strong>{props.post.title}</strong> <br />
                <small>{props.post.subtitle}</small> <br />
                Média : {props.likes / 2} <br />
            </article>
            <br />
        </>
    )
}


// 'PROPTYPES' RESPONSAVEL PELA TIPAGEM DAS PROPRIEDADES
Post.propTypes = {
    likes: PropTypes.number.isRequired,
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
    }).isRequired,
}



export default Post;