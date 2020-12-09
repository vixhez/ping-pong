const Winner = ({ winner }) => winner !== null ? (
    <h2 className="alert alert-success">Player { winner } wins!</h2>
) : null;

export default Winner;