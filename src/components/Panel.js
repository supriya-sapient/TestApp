
import React from 'react';

import PropTypes from 'prop-types';
import { css } from 'emotion';

const panelLayout = css`
text-align: center;
margin: 15px;
height: 350px;
width: 250px;
border: 1px solid #ccc;
`;

const Panel = ({ className, children }) => (
  <div className={panelLayout}>
    {children}
  </div>
);


Panel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};
Panel.defaultProps = {
  children: null,
  className: 'default',
};
export default Panel;
