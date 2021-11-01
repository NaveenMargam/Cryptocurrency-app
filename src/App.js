import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Main from "./pages/Main"
import Coin from "./pages/Coin"

function App() {
  
  return (
    <div className="App">
      <Router>
        <Route path='/' exact render={(props)=><Main />}></Route>
        <Route path='/coin/:id' exact render={(props)=><Coin />}></Route>
      </Router>
      
    </div>
  );
}

export default App;
