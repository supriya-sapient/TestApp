import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import Button from './Button';
import Panel from './Panel';
import Rating from './Rating';
//import Carousel from './carousel';

const cardStyles = css`
  text-align: center;
  flex: 1;  
  background: #fff;
  padding: 1rem;
  margin: auto;
  width: 100%;
  height: 350px;
`;

const cardContainer = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: auto;
  
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
  }
`;

const Card = ({ cardData }) => (
  <div className={cardContainer}>
    {!!cardData &&
      cardData.map(({ image, heading, title, rating, description, index, cost }) => (
        <Panel className={cardStyles} key={index}>
          <img src={image} alt={heading} />
          <h2>{title}</h2>
          <Rating value={rating} />
          <p>{description}</p>
          <Button>Add to Cart</Button>
          <p>{cost}</p>
        </Panel>
      ))}
  </div>
);

Card.propTypes = {
  /**
   * Card Data
   */
  cardData: PropTypes.arrayOf(PropTypes.shape({})),
};
Card.defaultProps = {
  cardData: [],
};

export default Card;
