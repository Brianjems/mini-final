// MOVIE API

const API_KEY = 'api_key=4ff6328b5e6a25877144d90b2a3967a9';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';


const TV_API_URL = BASE_URL + '/tv/popular?' + API_KEY; // tentative
const MOVIE_API_URL = BASE_URL + '/movie/top_rated?' + API_KEY; //tentative

const main = document.getElementById('movies-container');

const tv_series = document.getElementById('TV-container'); //tentative
const movie_page = document.getElementById('top-movies');



function getMovies(url){
    fetch(url).then(res => res.json()).then(data => {
        console.log( data.results);
        showMovies(data.results);
    })
}


function getTvseries(Tvurl){                            //all of this section is tentaive
    fetch(Tvurl).then(res => res.json()).then(data =>{
        console.log(data.results);
        showTvseries(data.results);
    })
}

function getTopmovies(topMovieurl){                        //all of this section is tentaive
    fetch(topMovieurl).then(res => res.json()).then(data =>{
        console.log(data.results);
        showTopmovies(data.results);
    })
}

// dito papasok yung API 

getMovies(API_URL);

getTvseries(TV_API_URL); //tentative

getTopmovies(MOVIE_API_URL); //tentative


    function showMovies(data){  
        main.innerHTML = '';

        data.forEach(movie => {
            const {title,poster_path,vote_average,overview} = movie;

            const movieElement = document.createElement('div');
            
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
            <div class="box">
                        <img src="${IMG_URL + poster_path}" alt="${title}">
                        <div class="movie-info">
                            <h5>${title}<span class="ratings">${vote_average}</span></h5>
                            <p class="overview">"${overview}"</p>
                    </div>

            `

            main.appendChild(movieElement);
        })
    }


    function showTvseries(data){                        //this section is tentative 
        tv_series.innerHTML = '';

        data.forEach(tv => {
            const {name,poster_path,vote_average,overview} = tv;

            const tvElement = document.createElement('div');

            tvElement.classList.add('tv');
            tvElement.innerHTML = `
            <div class="box">
                    <img src="${IMG_URL + poster_path}" alt="${name}">
                    <div class="movie-info">
                        <h5>${name}<span class="ratings">${vote_average}</span></h5>
                        <p class="tv-overview">"${overview}"</p>
                </div>
            </div>
            `

            tv_series.appendChild(tvElement);
        })
    }


    function showTopmovies(data){
        movie_page.innerHTML = '';

        data.forEach(topMovie => {
            const {title,poster_path,vote_average,overview} = topMovie;

            const topMovieElement = document.createElement('div');

            topMovieElement.classList.add('topMovie');
            topMovieElement.innerHTML = `
            <div class="box">
                        <img src="${IMG_URL + poster_path}" alt="${title}">
                        <div class="movie-info">
                            <h5>${title}<span class="ratings">${vote_average}</span></h5>
                            <p class="overview">"${overview}"</p>
                    </div>
            </div>
            `
            movie_page.appendChild(topMovieElement);
        })
    }
