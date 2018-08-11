import React from 'react';
import ReactDOM from 'react-dom';

// my components
import SearchBar from './components/search_bar';

const YOUTUBE_API_KEY = 'AIzaSyB1ACzPBlhVNVlHxFZgPiJHo4Q9riuV9PI';
// Make first component
const App = () => {
  return <div>
    <SearchBar />
      hello
    </div>;
}

// render it
ReactDOM.render(<App />, document.querySelector('.container'));
