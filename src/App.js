import React from 'react';
// import classNames from 'classnames/bind';
// import './App.css';

import Collection from './Collection';

class App extends React.Component{
  render(){
    return(

      <div className="App">
        <h1>Vancouver</h1>
        <h5>Where I grew up</h5>
        <Collection/>
      </div>
    )
  }
}

export default App;
