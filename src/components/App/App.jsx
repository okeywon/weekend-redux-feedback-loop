import React from 'react';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import ThankYou from '../ThankYou/ThankYou';

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
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
        <table>
          <thead>
            <th>Feeling</th>
            <th>Understanding</th>
            <th>Support</th>
            <th>Comments</th>
            <th><button>Delete</button></th>
          </thead>
        </table>
      </header>
      </Router>
    </div>
  );
}

export default App;
