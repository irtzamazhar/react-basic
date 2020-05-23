import React from 'react';
import './App.css';
import Avatar from './Components/Avatar';
import About from './Components/About';
import Contact from './Components/Contact';
import Menu from './Components/Menu';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
  	<BrowserRouter>
	    <div>
	      <Menu />
	      <Switch>
		      <Route path="/" exact component={Avatar}/>
		      <Route path="/about" component={About}/>
		      <Route path="/contact" component={Contact}/>
	      </Switch>
	    </div>
    </BrowserRouter>
  );
}

export default App;
