import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Portfolio from "./components/Portfolio/Portfolio";

const App = (props) => {
  return <Portfolio />
}

ReactDOM.render(
  <App />,
  document.getElementById('portfolio-root')
);
