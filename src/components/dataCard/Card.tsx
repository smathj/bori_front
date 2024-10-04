import React from 'react';

const Card = (props) => {

    console.log('Card 컴포넌트 ...');

    const {num} = props
    return (
        <div className={'card'}>
            <div>
                <img src={'/public/vite.svg'} alt={'준비중'}/>
            </div>
            <div>
                <div>카드{num+1}</div>
                <div>{num+1}</div>
            </div>
        </div>
    );
};

export default Card;
