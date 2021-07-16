import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import Streamlist from './streams/StreamList';
import StreamShow from './streams/StreamShow';


const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Streamlist} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/edit" exact component={StreamEdit} />
        <Route path="/streams/delete" exact component={StreamDelete} />
        <Route path="/streams/show" exact component={StreamShow} />
      </Router>
    </div>
  )
}
export default App;