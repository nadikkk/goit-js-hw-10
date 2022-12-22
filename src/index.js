import './css/styles.css';
// import API from "./fetchCountries";
const DEBOUNCE_DELAY = 300;
const nameCountry = 'peru';
// function fetchCountries(name) {
	
// }
fetch('https://restcountries.com/v3.1/name/${nameCountry}')
.then(res => 	res.json())
.then(r => console.log(r))
 console.log('https://restcountries.com/v3.1/name/${nameCountry}');
 console.log(typeof nameCountry, nameCountry, '${nameCountry}');