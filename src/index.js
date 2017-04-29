import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyB6B7ILoFH7Xm1y0-w15jYFluzOm5PsabY';

// create a new component to produce html - React

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take component and show it on the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
