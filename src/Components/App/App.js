import React from 'react';
import Header from '../../Containers/Header/Header';
import LandingPage from '../../Containers/LandingPage/LandingPage';
import Login from '../../Containers/Login/Login';
import ResearchContainer from '../../Containers/ResearchContainer/ResearchContainer';
import EvidenceContainer from '../../Containers/EvidenceContainer/EvidenceContainer';
import NoURLMAtch from '../NoURLMatch/NoURLMatch'
import './App.scss';
import { Route, Switch } from 'react-router-dom';

export const App = () => {
  return (
    <main>
      <Route path='/' component={Header}/>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/login' component={Login}/>
        <Route exact path='/research' component={ResearchContainer} />
        <Route exact path='/evidence' component={EvidenceContainer}/>
        <Route component={NoURLMAtch} />
      </Switch>
    </main>
  );
}

export default App;