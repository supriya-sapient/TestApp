import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';
import appCss, { width } from '../../src/appCss';

import Button from './Button';

const campaign = css`
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const buttonTypeA = css`

`;
const buttonTypeB = css`
    
`;
const headTypeA = css`
    color: #fff;
    font-size: 5rem;
    text-align: center;
`;
const headTypeB = css`
    color: #fff;
    text-align: center;
`;

const Campaign = () => (
  <div className={[campaign, width].join(' ')}>
   <Button className={buttonTypeA}>Academy Exclusive</Button>
   <h2 className={headTypeB}>Wenzel Campaign Collection</h2>
   <div></div>
   <h1 className={headTypeA}>Find Your Wildernest</h1>
   <Button className={buttonTypeB}>Shop Now</Button>
  </div>
);

Campaign.propTypes = {
 
};
Campaign.defaultProps = {
 
};

export default Campaign;
