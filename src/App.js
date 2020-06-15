// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { faCopyright} from '@fortawesome/free-solid-svg-icons';

import MainPage from './components/MainPage';

library.add(fab, faCommentAlt, faCopyright);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route exact path = '/' component={ MainPage } />
        </div>
      </Router>
    );
  }
}

export default App;