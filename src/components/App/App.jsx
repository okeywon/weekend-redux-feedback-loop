import React from 'react';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import ThankYou from '../ThankYou/ThankYou';
import Admin from '../Admin/Admin';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    displayFeedback();
  }, []);

  const displayFeedback = () => {
    axios({
      method: 'GET',
      url: '/api/feedback'
    })
    .then(res => {
      dispatch({
        type: 'SET_FEEDBACK',
        payload: res.data
      });
    })
    .catch(err => {
      console.log('error in GET', err);
    });
  }

  return (
    <div className='App'>
      <Router>
        <Route exact path="/">
          <header className='App-header'>
            <h1 className='App-title'>Feedback!</h1>
            <h4>Don't forget it!</h4>
          </header>
          <Feeling/>
        </Route>
        <Route exact path="/understanding">
          <Understanding/>
        </Route>
        <Route exact path="/supported">
          <Supported/>
        </Route>
        <Route exact path="/comments">
          <Comments/>
        </Route>
        <Route exact path="/thankYou">
          <ThankYou/>
        </Route>
        <Route exact path="/admin">
          <Admin/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
