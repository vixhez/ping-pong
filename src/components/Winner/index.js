import { connect } from 'react-redux';
import Winner from './Winner';

const mapStateToProps = ({ winner }) => ({
        winner,
});

export default connect(mapStateToProps)(Winner);