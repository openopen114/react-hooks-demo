import React, { Component, useState } from 'react';
import { SearchArea } from './components/SearchArea.js'


 
class App extends Component {  
  render() { 
    return (
      <div className="App"> 
        <h1>React Hooks</h1>
        <p>API : https://www.icndb.com/api/</p>
        <SearchArea />
      </div>
    );
  }
}

export default App;
 
