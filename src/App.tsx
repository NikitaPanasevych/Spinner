import { useState } from 'react';
import './App.scss';
import { prices } from './data';
import { Price } from './models/prices';

function App() {
	const [result, setResult] = useState('');

	const handleSpin = (chances: Price[]) => {
		const k = Math.random();
		for (let x = 0; x < prices.length; x++) {
			if (chances[x].probability < k) {
				setResult(prices[x].value);
				return;
			}
		}
	};

	return (
		<main>
			<ul className="circle">
				{prices.map((elem: Price, index) => (
					<li key={index} className="circle_element_title">
						<div className="circle__element__title">{elem.value}</div>
					</li>
				))}
			</ul>
			<span>{result}</span>
			<button onClick={() => handleSpin(prices)}>test your luck</button>
		</main>
	);
}

export default App;
