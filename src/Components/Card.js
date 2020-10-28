import React from 'react';

const Card = (props) => {
    const { handleClick, content, id } = props;
    return (
        <div onClick={handleClick}>
            <p id={id}>{content}</p>
        </div>
    );
};

export default Card;