import './App.css';
import Header from "./components/Header";
import Player1 from "./components/Player/Player1";
import Player2 from "./components/Player/Player2";
import Winner from "./components/Winner";
import Reset from "./components/Reset";

const App = ({ player1Reducer, player2Reducer, scoreReset }) => (
<div>
    <Header />
    
    <div className="row mb-4">
      <Player1
          playerReducer={ player1Reducer }
      />

      <Player2
          playerReducer={ player2Reducer }
      />
    </div>

    <Winner />

      <hr />

    <Reset
        scoreReset={ scoreReset }
    />

  </div>
);

export default App;
