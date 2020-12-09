import { connect } from 'react-redux';
import Player from './Player';
import { player1Scored } from "../../data/actions";

const mapStateToProps = ({ player1, winner, serving }) => ({
        playerScore: player1,
        winner: winner,
        playerText: "Player 1",
        serving: serving === 1,
});

const mapDispatchToProps = ( dispatch ) => ({
        playerReducer: () => dispatch(player1Scored()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);

// serving={ serving }
// playerText={ "Player 1" }
// playerScore={ player1 }
// winner={ winner }
// playerReducer={ player1Reducer }

// unsure whether I should be using prop names or the values being passed in?