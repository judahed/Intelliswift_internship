// let data
import('./moviesPlay.js')
	.then(res => {
		console.log('data imported into data constant');
		data = res;
		run();
	});

function run() {
	const movies = data.movies;
	console.log('Number of movies: ' + movies.length);
	// Task 1
	const languageMap = new Map();
	movies.map(movie => {
		if (languageMap.has(movie.originalLanguage)) {
			languageMap.set(movie.originalLanguage, languageMap.get(movie.originalLanguage) + 1);
		} else {
			languageMap.set(movie.originalLanguage, 1);
		}
	});
	// Task 2
	for (let [language, count] of languageMap.entries()) {
		console.log(language + ': ' + count);
	}
	const languageNameMap = new Map();
	data.languages.map(language => {
		languageNameMap.set(language.iso_639_1, language);
	});
	
	for (let [languageCode, count] of languageMap.entries()) {
		const language = languageNameMap.get(languageCode);
		console.log(language.english_name + ' (' + language.name + '): ' + count);
	}
}
// Task 3
function showMessage(){
    const movieInfoDiv = document.getElementById('movieInformation');
    let outputHtmlSnippet1 = '';
    const movies = data.movies;
	outputHtmlSnippet1 += '<h3>Number of movies: ' + movies.length +'</h3>';
	outputHtmlSnippet1 += '<ol>'
	const languageMap = new Map();
	movies.map(movie => {
		if (languageMap.has(movie.originalLanguage)) {
			languageMap.set(movie.originalLanguage, languageMap.get(movie.originalLanguage) + 1);
		} else {
			languageMap.set(movie.originalLanguage, 1);
		}
	});
	for (let [language, count] of languageMap.entries()) {
		outputHtmlSnippet1 += '<li>'+ language + ': ' + count+'</li>';
	}
	const languageNameMap = new Map();
	data.languages.map(language => {
		languageNameMap.set(language.iso_639_1, language);
	});
	
	for (let [languageCode, count] of languageMap.entries()) {
		const language = languageNameMap.get(languageCode);
		outputHtmlSnippet1 += '<li>'+ language.english_name + ' (' + language.name + '): ' + count +'</li>';
	}
    outputHtmlSnippet1 += '</ol>';
    movieInfoDiv.innerHTML= outputHtmlSnippet1;
}
