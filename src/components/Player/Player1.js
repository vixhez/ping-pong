import { connect } from 'react-redux';
import Player from './Player';
import { player1Scored } from "../../data/actions";

const mapStateToProps = ({ player1, winner, serving, player1Name }) => ({
        playerScore: player1,
        winner: winner,
        playerText: player1Name,
        serving: serving === 1,
});

const mapDispatchToProps = ( dispatch ) => ({
        playerReducer: () => dispatch(player1Scored()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);