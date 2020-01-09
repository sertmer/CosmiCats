import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import Header from '../Header/Header';
import Login from '../Login/Login';
import './App.scss';
import { Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <Route path='/' render={ () => 
          <Header />
        }
      />
      <Route exact path='/' render={() =>
          <LandingPage />
        }
      />
      <Route path='/login' render={() =>
          <Login />
        }
      />
    </main>
  );
}

export default App;