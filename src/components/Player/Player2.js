import { connect } from 'react-redux';
import Player from './Player';
import { player2Scored } from "../../data/actions";

const mapStateToProps = ({ player2, winner, serving }) => ({
        playerScore: player2,
        winner: winner,
        playerText: "Player 2",
        serving: serving === 2,
});

const mapDispatchToProps = ( dispatch ) => ({
        playerReducer: () => dispatch(player2Scored()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);