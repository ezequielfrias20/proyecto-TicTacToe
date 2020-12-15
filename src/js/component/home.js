import React, { useState, useEffect } from "react";
import { Board } from "./Board";
export function Home() {
	const [players, setPlayers] = useState([
		{
			name: "",
			suit: "x"
		},
		{
			name: "",
			suit: "o"
		}
	]);

	const [status, setStatus] = useState("init");

	const [turn, setTurn] = useState(null);
	const [board, setBoard] = useState([
		[null, null, null],
		[null, null, null],
		[null, null, null]
	]);

	const TurnGame = turn => {
		if (turn == "x") {
			return "❌";
		} else if (turn == "o") {
			return "⭕";
		} else {
			return " ";
		}
	};

	const changeBoard = (rowIndex, colIndex) => {
		var newBoard = board.map((row, indexRow) => {
			return board.map((col, indexCol) => {
				return rowIndex == indexRow && colIndex == indexCol
					? turn
					: board[indexRow][indexCol];
			});
		});
		setBoard(newBoard);
	};

	useEffect(
		() => {
			if (
				(board[0][0] == board[0][1] &&
					board[0][0] == board[0][2] &&
					board[0][1] == board[0][2] &&
					board[0][0] != null) ||
				(board[1][0] == board[1][1] &&
					board[1][0] == board[1][2] &&
					board[1][1] == board[1][2] &&
					board[1][0] != null) ||
				(board[2][0] == board[2][1] &&
					board[2][0] == board[2][2] &&
					board[2][1] == board[2][2] &&
					board[2][0] != null) ||
				(board[0][0] == board[1][0] &&
					board[0][0] == board[2][0] &&
					board[1][0] == board[2][0] &&
					board[0][0] != null) ||
				(board[0][1] == board[1][1] &&
					board[0][1] == board[2][1] &&
					board[1][1] == board[2][1] &&
					board[0][1] != null) ||
				(board[0][2] == board[1][2] &&
					board[0][2] == board[2][2] &&
					board[1][2] == board[2][2] &&
					board[0][2] != null)
			) {
				setStatus("init");
				setBoard([
					[null, null, null],
					[null, null, null],
					[null, null, null]
				]);
			}
			if (turn == null) {
				setTurn("x");
			} else if (turn == "x") {
				setTurn("o");
			} else {
				setTurn("x");
			}
		},
		[board]
	);

	return status == "init" ? (
		<div className="container ">
			<div className="row">
				<div className="col-sm-12">
					<h1 className="d-flex justify-content-center">
						{"Tic Tac Toe in Reacts.js"}
					</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-12 ">
					<h3 className="d-flex justify-content-center">
						{"Pick a weapon"}
					</h3>
				</div>
			</div>
			<button
				type="button"
				className="btn btn-success"
				onClick={e => {
					setStatus("playing");
				}}>
				Iniciar Partida
			</button>
		</div>
	) : (
		<div className="container ">
			<div className="row">
				<div className="col-sm-12">
					<h1 className="d-flex justify-content-center">
						{"Tic Tac Toe in Reacts.js"}
					</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-12 ">
					<h3 className="d-flex justify-content-center">{"hola"}</h3>
				</div>
			</div>
			<Board
				turn={turn}
				setTurn={setTurn}
				board={board}
				setBoard={setBoard}
				turnGame={TurnGame}
				changeBoard={changeBoard}
			/>
			<button
				type="button"
				className="btn btn-warning"
				onClick={e => {
					setStatus("init");
				}}>
				Terminar partida
			</button>
		</div>
	);
}
