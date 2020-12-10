// import { connect } from 'react-redux';
// import Reset from './Reset';

// const mapStateToProps = ({ reset }) => ({
//         reset,
// });

// export default connect(mapStateToProps)(Reset);

// the above is prop drilling... to be avoided!


import { connect } from 'react-redux';
import Reset from './Reset';
import { scoreReset } from "../../data/actions";

const mapDispatchToProps = ( dispatch ) => ({
        scoreReset: () => dispatch(scoreReset())
});

export default connect(null, mapDispatchToProps)(Reset);