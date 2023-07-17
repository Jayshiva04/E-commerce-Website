import React from 'react';
import Card from '../Reusable/Card';
import '../Reusable/Card.css'

const CardList = () => {
  const cardData = [
    {
      image: './image1.png',
      description: 'Lorem ipsum dolor, sit amet consectetur ',
      price: '€2.79',
      strikedprice: '€3.1',
    },
    {
      image: './image2.png',
      description: 'Lorem ipsum dolor, sit amet consectetur ',
      price: '€3.99',
      strikedprice: '€4.5',
    },
    
    {
      image: './image3.png',
      description: 'Lorem ipsum dolor, sit amet consectetur ',
      price: '€5.99',
      strikedprice: '€6.5',
    },
    {
      image: './image4.png',
      description: 'Lorem ipsum dolor, sit amet consectetur ',
      price: '€8.99',
      strikedprice: '€10.0',
    },
    {
      image: './image5.png',
      description: 'Lorem ipsum dolor, sit amet consectetur ',
      price: '€12.99',
      strikedprice: '€15.0',
    },
    {
      image: './image6.png',
      description: 'Lorem ipsum dolor, sit amet consectetur ',
      price: '€16.99',
      strikedprice: '€18.5',
    },
    {
      image: './image7.png',
      description: 'Lorem ipsum dolor, sit amet consectetur ',
      price: '€19.99',
      strikedprice: '€22.0',
    },
    {
      image: './image8.png',
      description: 'Lorem ipsum dolor, sit amet consectetur ',
      price: '€24.99',
      strikedprice: '€28.0',
    },
    {
      image: './image9.png',
      description: 'Lorem ipsum dolor, sit amet consectetur ',
      price: '€29.99',
      strikedprice: '€35.0',
    },
    {
      image: './image10.png',
      description: 'Lorem ipsum dolor, sit amet consectetur ',
      price: '€39.99',
      strikedprice: '€45.0',
    },
  ];

  return (
    <div className="Map">
      {cardData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          description={card.description}
          price={card.price}
          strikedprice={card.strikedprice}
        />
      ))}
    </div>
  );
};

export default CardList;


