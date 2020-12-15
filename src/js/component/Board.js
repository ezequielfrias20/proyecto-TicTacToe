import React from "react";
import PropTypes from "prop-types";

export function Board({
	turn,
	setTurn,
	board,
	setBoard,
	turnGame,
	changeBoard
}) {
	return (
		<>
			<div className="centrado">
				<div className="board">
					{board.map((squad1, rowIndex) => {
						return board[rowIndex].map((squad2, colIndex) => {
							return (
								<div
									key={colIndex}
									className="ficha"
									onClick={e => {
										changeBoard(rowIndex, colIndex);
									}}>
									<h1 className="suit">{turnGame(squad2)}</h1>
								</div>
							);
						});
					})}
				</div>
			</div>
		</>
	);
}

Board.propTypes = {
	turn: PropTypes.string,
	setTurn: PropTypes.func,
	board: PropTypes.array,
	setBoard: PropTypes.func,
	turnGame: PropTypes.func,
	changeBoard: PropTypes.func
};
