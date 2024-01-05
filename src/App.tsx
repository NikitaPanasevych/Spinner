import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import { prices } from './data';
import { Price } from './models/price.model';

function App() {
	const [result, setResult] = useState('');
	const [spin, setSpin] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setSpin('');
		switch (result) {
			case prices[0].value:
				setSpin('NoLuck');
				break;
			case prices[1].value:
				setSpin('X2');
				break;
			case prices[2].value:
				setSpin('small__win');
				break;
			case prices[3].value:
				setSpin('medium__win');
				break;
			case prices[4].value:
				setSpin('big__win');
				break;
			case prices[5].value:
				setSpin('jackpot');
				break;
			default:
				setSpin('');
		}
	}, [result]);

	const handleSpin = (chances: Price[]) => {
		const k = Math.random();
		for (let x = 0; x < prices.length; x++) {
			if (chances[x].probability < k) {
				setResult(prices[x].value);

				break;
			}
		}
		setLoading(true);
		setTimeout(() => {
			alert('Restart game!');
			window.location.reload(false);
		}, 6000);
	};

	return (
		<main>
			<div className={styles.arrow}></div>
			<ul className={`${styles.circle} ${styles[spin]}`}>
				{prices.map((elem: Price, index) => (
					<li key={index} className={styles.circle__element}>
						<div className={styles.circle__element__title}>{elem.value}</div>
					</li>
				))}
			</ul>
			<button disabled={loading} onClick={() => handleSpin(prices)}>
				test your luck
			</button>
		</main>
	);
}

export default App;
