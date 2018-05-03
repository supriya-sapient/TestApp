
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import SearchBar from './components/card';
import BgImage from './components/background_image';
import Campaign from './components/campaign';
import CardGrid from './components/card_grid';
import { css } from 'emotion';
import appCss, { width } from './appCss';

const app = css`
  position: relative;
  width:100%;
`;
const descWrap = css`
  margin: 0 auto;
  display: block;
`;
class App extends Component {
  constructor(props){
    super(props);
    this.state = {        // will be using internal state later at the time of actions
      imageLoaded: false 
    }
  }
  
  render() {
    return (
      <div className={app}>
       
          <BgImage /> 
        <div className={[descWrap, width].join(' ')}>  
          <Campaign />
        </div>
         <CardGrid /> 
        <div>
         
        </div>
      </div>
    );
  }
}



export default App;
