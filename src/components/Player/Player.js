const Player = ({ serving, playerText, playerScore, winner, playerReducer }) => (
    <div className="col-md-6 mt-4">
        <div className={ (serving ? "card text-center bg-dark text-white" : "card text-center") }>
            <h5 className="card-header">{ playerText }</h5>
            <div className="card-body">
                <p className="card-text display-1">{ playerScore }</p>
            </div>
            <div className="card-footer">
            { winner === null ? (
                  <div className="card-footer">
                      <button className="btn btn-primary form-control" onClick={ playerReducer }>+</button>
                  </div>
              ) : null }
            </div>
        </div>
    </div>
);

export default Player;

// why do brackets work here to wrap the render stuff but not curly braces