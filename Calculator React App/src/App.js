import React, { useState } from 'react';
import './App.css';

function App() {
	const [firstNumber, setFirstNumber] = useState(0);
	const [secondNumber, setSecondNumber] = useState(0);

	const [result, setResult] = useState(0);

	const add = () => {
		setResult(firstNumber + secondNumber);
	};

	const subtract = () => {
		setResult(firstNumber - secondNumber);
	};

	const multiply = () => {
		setResult(firstNumber * secondNumber);
	};

	const divide = () => {
		setResult(firstNumber / secondNumber);
	};

	return (
		<div className='app'>
			<div className='app__inputs'>
				<input
					value={firstNumber}
					onChange={(e) => setFirstNumber(Number(e.target.value))}
					className='app__input'
					type='number'
					placeholder='Enter The First Number'
				/>
				<input
					value={secondNumber}
					onChange={(e) => setSecondNumber(Number(e.target.value))}
					className='app__input'
					type='number'
					placeholder='Enter The Second Number'
				/>
			</div>

			<div className='app__btns'>
				<button onClick={add} className='app__btn'>
					Add
				</button>
				<button onClick={subtract} className='app__btn'>
					Subtract
				</button>

				<button onClick={multiply} className='app__btn'>
					Multiply
				</button>
				<button onClick={divide} className='app__btn'>
					Divide
				</button>
			</div>

			<p className='app__result'>Result: {result}</p>
		</div>
	);
}

export default App;
