import React, { useState, useEffect } from 'react';
import { Card } from '..';
import { fetchData } from '../../api';

import styles from './Cards.module.css';

const Cards = () => {

	const [people, setPeople] = useState([]);

	useEffect(() => {
		const fetchAPI = async () => {
			const data = await fetchData();
			setPeople(data)
		}
		
		fetchAPI();
	}, [])

	const handleSwipe = (direction, name) => {
			
	}

	const outOfFrame = (name) => {

	}

	return (
		<div className={styles.cards}>
			<div className={styles.container}>
				{people.map((person) => (
					<Card 
						person={person}
						handleSwipe={handleSwipe}
						outOfFrame={outOfFrame}
					/>
				))}
			</div>
		</div>
	)
}

export default Cards
