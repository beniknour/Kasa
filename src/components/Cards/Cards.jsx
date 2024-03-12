import React from 'react';
import Card from "../../components/Cards/Card";
import { Link } from 'react-router-dom';
import './Cards.scss';
const Cards = ({ data }) => {
  return (
    <div className="cardsContainer">
      {data.map((item) => (
        <Link key={item.id} to={`/logement/${item.id}`}>
          <Card cover={item.cover} title={item.title} />
        </Link>
      ))}
    </div>
  );
};

export default Cards;
