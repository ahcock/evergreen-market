import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepages/homepage.component';
import './App.css';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop/hats" component={HatsPage} />
        <Route path="/toprics/:topicId" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
