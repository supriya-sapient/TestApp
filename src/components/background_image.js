import styled from 'react-emotion';
import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'emotion';
const BackgroundImage = styled('img')`
  background-image: url('${props => props.src}');
  background-size: ${props => props.size};
  background-position: ${props => props.position};
  height: auto;
`;

const background = css`
  position: absolute;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  height: 350px;
  border: 1px solid #ccc;
  z-index: -1;
  top: 10px;
`;
/* Props Check */
BackgroundImage.propTypes = {
  /**
   * Picture URL
   */
  src: PropTypes.string,
  /**
   * Image Width
   */
  width: PropTypes.number,
  /**
   * Image Size
   */
  size: PropTypes.number,
  /**
   * Image position
   */
  position: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

/* Deafult Props */
BackgroundImage.defaultProps = {
  src:
    'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20',
  children: null,
};

const BgImage = ({ children, ...props }) => (
  <BackgroundImage className={background} {...props}>{children}</BackgroundImage>
);

BgImage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
BgImage.defaultProps = {
  children: null,
};
export default BgImage;
