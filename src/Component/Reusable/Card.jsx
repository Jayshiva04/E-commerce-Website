import React from 'react';
import '../Reusable/Card.css';

const Card = (props) => {
  const { image, description, price, strikedprice } = props;
  console.log('Card Props:',props);
  return (
    <div>
    <div className="Collection">
    <div className="Collection_menu">
      <img src={image} alt={description} />
      <div className="Btn2">
        <button>-10%</button>
      </div>
      <div className="Btn3">
        <button>New</button>
      </div>
      <div className="Collection_heart">
        <p>{description}</p>
        <img src="./heart.png" alt="" />
      </div>
      <div className="Collection_content">
        <div className="Collection_page">
          <h3>{price}</h3>
          <h5>-</h5>
          <strike>
          <h4>{strikedprice}</h4></strike>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Card;

  

