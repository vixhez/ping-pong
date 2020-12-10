import { connect } from 'react-redux';
import Player from './Player';
import { player2Scored } from "../../data/actions";

const mapStateToProps = ({ player2, winner, serving, player2Name }) => ({
        playerScore: player2,
        winner: winner,
        playerText: player2Name,
        serving: serving === 2,
});

const mapDispatchToProps = ( dispatch ) => ({
        playerReducer: () => dispatch(player2Scored()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);