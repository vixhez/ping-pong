import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from "./store";

const render = () => {
  const state = store.getState();
  
  ReactDOM.render(
    <React.StrictMode>
      <App
        player1={ state.player1 }
        player2={ state.player2 }
        player1Reducer={ () => store.dispatch({ type: "PLAYER_1_SCORED" }) }
        player2Reducer={ () => store.dispatch({ type: "PLAYER_2_SCORED" }) }
        scoreReset={ () => store.dispatch({ type: "SCORE_RESET" }) }
        serving={ state.serving }
        winner={ state.winner }
        />
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
