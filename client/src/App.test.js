// This is a test js file that was included when the react app was created

// importing the React dependency
import React from 'react';
// importing the ReactDOM dependency
import ReactDOM from 'react-dom';
// importing the acutal app file
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
