const Winner = ({ winner, playerName }) => winner !== null ? (
<h2 className="alert alert-success">{ playerName } wins! Well done, { playerName }!</h2>
) : null;

export default Winner;