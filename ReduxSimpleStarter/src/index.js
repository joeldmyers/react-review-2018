import React from 'react';
import ReactDOM from 'react-dom';

// Make first component
const App = () => {
  return <div>hello</div>;
}

// render it
ReactDOM.render(<App />, document.querySelector('.container'));
