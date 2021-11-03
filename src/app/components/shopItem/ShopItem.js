import React from 'react';
import './ShopItem.css';

export default class ShopItem extends React.Component {
    constructor(props) {
        super(props);
        this.item = props.item;
    }

    render() {
        const { brand, currency, description, descriptionFull, price, title } = this.item;
        return (
            <div className="main-content">
                <h2 className='brand'>{brand}</h2>
                <h1 className='title'>{title}</h1>
                <h3 className='description-short'>{description}</h3>
    
                <div className="description-full">{descriptionFull}</div>
                <div className="highlight-window mobile">
                    <div className="highlight-overlay"></div>
                </div>
    
                <div className="divider"></div>
                <div className="purchase-info">
                    <div className="price">{`${currency} ${price}.00`}</div>
                    <button className='cartButton'>Добавить в корзину</button>
                </div>
            </div>
        )
    }
}