import { connect } from 'react-redux';
import Button from './Button';
import { infoReceived } from "../../data/actions";

const mapDispatchToProps = ( dispatch ) => ({
        infoReceived: () => dispatch(infoReceived())
});

export default connect(null, mapDispatchToProps)(Button);