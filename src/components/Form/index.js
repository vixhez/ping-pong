import { connect } from 'react-redux';
import Form from './Form';
import { saveForm } from "../../data/actions";

const mapStateToProps = ({ info, player1Name, player2Name, winScore, alternate }) => ({
        info,
        player1Name,
        player2Name,
        winScore,
        alternate
});

const mapDispatchToProps = dispatch => {
    return {
        saveForm: data => dispatch(saveForm(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);