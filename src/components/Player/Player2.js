import { connect } from 'react-redux';
import Player from './Player';

const mapStateToProps = ({ player2, winner, serving }) => ({
        playerScore: player2,
        winner: winner,
        playerText: "Player 2",
        serving: serving === 2,
});

export default connect(mapStateToProps)(Player);