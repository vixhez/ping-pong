import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = ({ info }) => ({
        info,
});

export default connect(mapStateToProps)(App);