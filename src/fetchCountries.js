const filter = `?fields=name,capital,population,flags,languages`;
function fetchCountries(nameCountry) {
	return fetch(`https://restcountries.com/v3.1/name/${nameCountry}${filter}`)
	.then(response => response.json());
}
export {fetchCountries};


