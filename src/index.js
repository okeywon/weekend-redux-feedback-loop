import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const feedbackList = (state = [], action) => {
    switch(action.type){
        case 'SET_FEEDBACK':
            return action.payload;
    }
    return state;
}

const feeling = (state = [], action) => {
    switch(action.type){
        case 'ADD_FEELING':
            return [...state, action.payload]
    }
    return state;
}

const understanding = (state = [], action) => {
    switch(action.type){
        case 'ADD_UNDERSTANDING':
            return [...state, action.payload]
    }
    return state;
}

const supported = (state = [], action) => {
    switch(action.type){
        case 'ADD_SUPPORTED':
            return [...state, action.payload]
    }
    return state;
}

const comments = (state = [], action) => {
    switch(action.type){
        case 'ADD_COMMENTS':
            return [...state, action.payload]
    }
    return state;
}

const thankYou = (state = [], action) => {
    switch(action.type){
        case 'ADD_THANK_YOU':
            return [...state, action.payload]
    }
    return state;
}

const feedbackStore = createStore(
    combineReducers({
        feedbackList,
        feeling,
        understanding,
        supported,
        comments,
        thankYou,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={feedbackStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
