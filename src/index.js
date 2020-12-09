import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./data/store";
import { Provider } from 'react-redux';

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={ store }>
        <App
          player1Reducer={ () => store.dispatch({ type: "PLAYER_1_SCORED" }) }
          player2Reducer={ () => store.dispatch({ type: "PLAYER_2_SCORED" }) }
          scoreReset={ () => store.dispatch({ type: "SCORE_RESET" }) }
          />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
