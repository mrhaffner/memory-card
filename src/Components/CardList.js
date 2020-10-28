import React from 'react';
import Card from './Card'

const CardList = (props) => {
    const { handleClick, cards } = props;
    return (
        <div>
            {
                cards.map((x, i) => {
                    return (
                        <Card handleClick={handleClick} key={i} content={x} id={x} />
                    )
                })
            }
        </div>
    );
}

export default CardList;