import { connect } from 'react-redux';
import Winner from './Winner';

const mapStateToProps = (state) => ({
        winner: state.winner,
        playerName: state.winner === 1 ? state.player1Name : state.player2Name,
});

export default connect(mapStateToProps)(Winner);