import React from "react";
import PropTypes from "prop-types";

export function Squad({ turn, setTurn, board, setBoard, a, i }) {
	return (
		<div className="ficha">
			<h1 className="suit">{board[a][i]}</h1>
		</div>
	);
}

Squad.propTypes = {
	turn: PropTypes.string,
	setTurn: PropTypes.func,
	board: PropTypes.array,
	setBoard: PropTypes.func,
	a: PropTypes.number,
	i: PropTypes.number
};
