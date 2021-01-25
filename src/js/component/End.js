import React from "react";
import PropTypes from "prop-types";

function End({ turn }) {
	return (
		<div>
			<h1 className="end">{turn} Es el Ganador</h1>
		</div>
	);
}
End.propTypes = {
	turn: PropTypes.string,
	setTurn: PropTypes.func,
	board: PropTypes.array,
	setBoard: PropTypes.func,
	turnGame: PropTypes.func,
	changeBoard: PropTypes.func
};

export default End;
