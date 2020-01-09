import React from 'react';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import Login from '../../Containers/Login/Login';
import ResearchContainer from '../ResearchContainer/ResearchContainer';
import './App.scss';
import { Route } from 'react-router-dom';

export const App = () => {
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
      <Route exact path='/research' render={() => 
          <ResearchContainer />
        }
      />
    </main>
  );
}

export default App;