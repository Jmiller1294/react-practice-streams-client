import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const PageOne = () => {
  return <div>PageOne</div>
}

const PageTwo = () => {
  return <div>PageTwo</div>
}

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" exact component={PageTwo} />
      </Router>
    </div>
  )
}
export default App;