import React from 'react';
import {combineReducers, createStore} from 'redux';
import passTitleReducer from './../Reducers/reducer';

export const store = createStore(
    combineReducers({
        passTitleReducer
    })
);
