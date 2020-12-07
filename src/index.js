import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useReducer } from 'react';
import { createStore } from "redux";

const initialState = {
  player1: 0,
  player2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "PLAYER_1_SCORED": return {
      ...state,
      player1: state.player1 + 1
    };
    case "PLAYER_2_SCORED": return {
      ...state,
      player2: state.player2 + 1
    };
    default: return state;
  }
}

const store = createStore(reducer, initialState);

const render = () => {
  const state = store.getState();
  
  ReactDOM.render(
    <React.StrictMode>
      <App
        player1={ state.player1 }
        player2={ state.player2 }
        player1Scores={ () => store.dispatch({ type: "PLAYER_1_SCORED" }) }
        player2Scores={ () => store.dispatch({ type: "PLAYER_2_SCORED" })} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
