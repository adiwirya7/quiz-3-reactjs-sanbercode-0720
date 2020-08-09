import React from 'react';
import Routes from '../src/Routes'
import { BrowserRouter as Router } from "react-router-dom";
import '../src/css/style.css';
import { UserProvider } from './UserContext';

function App() {
  return (
    <UserProvider>
    <Router>
      <Routes/>
    </Router>  
    </UserProvider>
  );
}

export default App;
