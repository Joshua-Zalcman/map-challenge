import { useState, useEffect } from 'react';
import MapChart from './components/Mapchart';
//map in here
const Main = () => {
	const [selectCountry, setSelectCountry] = useState('');
	const [countryToMatch, setCountryToMatch] = useState('France');

	return (
		<div>
			<h2>Find {countryToMatch} on the map!</h2>
			<MapChart setSelectCountry={setSelectCountry} />
			<p>{selectCountry === countryToMatch ? 'Correct' : 'Wrong'}</p>
		</div>
	);
};

export default Main;
