import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
// import registerServiceWorker from './registerServiceWorker';

const feedbackList = (state = [], action) => {
    switch(action.type){
        case 'SET_FEEDBACK':
            // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>.', action.payload);
            return action.payload;
    }
    return state;
}

const feeling = (state = [], action) => {
    switch(action.type){
        case 'ADD_FEELING':
            return action.payload;
    }
    return state;
}

const understanding = (state = [], action) => {
    switch(action.type){
        case 'ADD_UNDERSTANDING':
            return action.payload;
    }
    return state;
}

const support = (state = [], action) => {
    switch(action.type){
        case 'ADD_SUPPORT':
            return action.payload;
    }
    return state;
}

const comments = (state = [], action) => {
    switch(action.type){
        case 'ADD_COMMENTS':
            return action.payload;
    }
    return state;
}

const thankYou = (state = [], action) => {
    switch(action.type){
        case 'ADD_THANK_YOU':
            return action.payload
    }
    return state;
}

const admin = (state = [], action) => {
    switch(action.type){
        case 'ADD_ADMIN':
            return [...state, action.payload]
    }
    return state;
}

const feedbackStore = createStore(
    combineReducers({
        feedbackList,
        feeling,
        understanding,
        support,
        comments,
        thankYou,
        admin,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={feedbackStore}><App /></Provider>, document.getElementById('root'));
// registerServiceWorker();
