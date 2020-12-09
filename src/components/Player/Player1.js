import { connect } from 'react-redux';
import Player from './Player';

const mapStateToProps = ({ player1, winner, serving }) => ({
        playerScore: player1,
        winner: winner,
        playerText: "Player 1",
        serving: serving === 1,
});

export default connect(mapStateToProps)(Player);

// serving={ serving }
// playerText={ "Player 1" }
// playerScore={ player1 }
// winner={ winner }
// playerReducer={ player1Reducer }

// unsure whether I should be using prop names or the values being passed in?