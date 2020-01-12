import React from 'react';
import Header from '../../Containers/Header/Header';
import LandingPage from '../../Containers/LandingPage/LandingPage';
import Login from '../../Containers/Login/Login';
import ResearchContainer from '../../Containers/ResearchContainer/ResearchContainer';
import EvidenceContainer from '../EvidenceContainer/EvidenceContainer'
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
      <Route exact path='/evidence' render={() => 
        <EvidenceContainer />
        }
      />
    </main>
  );
}

export default App;