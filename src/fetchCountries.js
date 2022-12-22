const filter = `?fields=name,capital,population,flags,languages`;
function fetchCountries(nameCountry) {
	return fetch(`https://restcountries.com/v3.1/name/${nameCountry}${filter}`)
	.then(response => {
		if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
export {fetchCountries};


