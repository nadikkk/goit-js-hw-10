import './css/styles.css';
import {fetchCountries} from "./fetchCountries";
import debounce from "lodash.debounce";
import Notiflix from 'notiflix';
const DEBOUNCE_DELAY = 300;

const inputCoutry = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
inputCoutry.addEventListener('input', debounce(onInputCoutry, DEBOUNCE_DELAY));

function onInputCoutry(e) {
	const nameCountry = e.target.value.trim();
	if (nameCountry==="") {
		countryList.innerHTML = '';
      countryInfo.innerHTML = '';
		return
	}
	
	fetchCountries(nameCountry)
	.then(createCountryList)
   .catch((error) => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
      countryList.innerHTML = '';
      countryInfo.innerHTML = '';
    });
	
};
function createCountryList(arreyCountry) {
	if (arreyCountry.length > 10) {
		Notiflix.Notify.success('Too many matches found. Please enter a more specific name.');
	} if (arreyCountry.length<=10) {
	 	renderCountriesNoMoreTen(arreyCountry);
		renderCountry(arreyCountry);
	}
	};
function renderCountriesNoMoreTen(arreyCountry) {
	const markup = arreyCountry.map(({name, flags}) => {
		return `<li>
		<img src="${flags.svg}" alt="flag" width="40"/>
		<p>${name.official}</p>
	   </li>`;
	}).join("");
	countryList.innerHTML = markup;
};
function renderCountry(arreyCountry) {
	if (arreyCountry.length!==1) {
		countryInfo.innerHTML = '';
		return}
	const markup = arreyCountry.map(({capital,population,languages}) => {
		return `<p>Capital: ${capital }</p>
		<p>Population: ${population }</p>
		<p>Languages: ${Object.values(languages)}</p>`;
	}).join("");
	countryInfo.innerHTML = markup;
}