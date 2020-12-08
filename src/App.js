import './App.css';

const App = ({ 
            player1,
            player2,
            player1Reducer,
            player2Reducer,
            scoreReset,
            serving,
            winner,
          }) => (
  <>
      {/* header */}
      <header className="jumbotron mt-4 mb-0">
          <h1>PongPing</h1>
      </header>

      {/* scores */}
      <div className="row mb-4">
          <div className="col-md-6 mt-4">
              <div className={ (serving === 1 ? "card text-center bg-dark text-white" : "card text-center") }>
                  <h5 className="card-header">Player 1</h5>
                  <div className="card-body">
                      <p className="card-text display-1">{ player1 }</p>
                  </div>
                  <div className="card-footer">
                  { winner === null ? (
                        <div className="card-footer">
                            <button className="btn btn-primary form-control" onClick={ player1Reducer }>+</button>
                        </div>
                    ) : null }
                  </div>
              </div>
          </div>

          <div className="col-md-6 mt-4">
              <div className={ (serving === 2 ? "card text-center bg-dark text-white" : "card text-center") }>
                  <h5 className="card-header">Player 2</h5>
                  <div className="card-body">
                      <p className="card-text display-1">{ player2 }</p>
                  </div>
                  <div className="card-footer">
                  { winner === null ? (
                        <div className="card-footer">
                            <button className="btn btn-primary form-control" onClick={ player2Reducer }>-</button>
                        </div>
                    ) : null }
                  </div>
              </div>
          </div>
      </div>

      { /* winner message */}
      { winner === 1 || winner === 2 ? (
          <h2 className="alert alert-success">Player { winner } wins!</h2>
      ) : null }

      <hr />

      { /* reset button */}
      <button className="btn btn-danger"
              onClick={ scoreReset }>Reset</button>
  </>
);

export default App;

// { winner === null ? "" : "Player" } { winner === 1 ? "1 wins!" : "2 wins!" }