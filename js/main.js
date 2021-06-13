// *****************************************************************************
// *****************************************************************************
//  Movie Data in from API- Some of the arrays are not used because I was not able to implement some of them.
// *****************************************************************************

// let multiSearchArr = [];
let languagesArr = [];
let genreArr = [];
let getTrendingAllArr = [];
// let movieGenreArr = [];
let discoverMoviesArr = [];
let discoverTvArr = [];
// let latestMoviesArr = [];
// let latestTvArr = [];
let popularMoviesArr = [];
let popularTvArr = [];
let upcomingMoviesArr = [];
// let upcomingTvArr = [];
let topRatedMoviesArr = [];
let topRatedTvArr = [];

// *****************************************************************************
// *****************************************************************************
//  API Key
// *****************************************************************************

const apiKey = "a010ea3d5b7aea32344c53a5c01fb208";

// *****************************************************************************
// *****************************************************************************
//  API Path Snippets (URLs)
// *****************************************************************************

// Search multiple models in a single request. Multi search currently supports searching for movies, tv shows and people in a single request.

// let homeQuery;
// let homeSearch = `&query=${homeQuery}`;
// let multiSearchURL = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US${homeSearch}&page=1&include_adult=false`;

// Get the list of languages used throughout TMDB.
const languagesURL = `https://api.themoviedb.org/3/configuration/languages?api_key=${apiKey}`;

// Get trending items 
// All - Movies and Tv for the ady
const trendingAllURL = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`;

// Get Poster Image
const imgURL = "https://image.tmdb.org/t/p/w200";
// typical build: imgURL + obj.poster_path;

// Get the list of official genres for movies.
const movieGenreURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`

// Discover Movies
const discoverMoviesURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`

// Discover TV
const discoverTvURL = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`

// Latest Movies
// const latestMoviesURL = `https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}&language=en-US`

// Latest Tv
// const latestTvURL = `https://api.themoviedb.org/3/tv/latest?api_key=${apiKey}&language=en-US`

// Popular Movies
const popularMoviesURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`

// Popular Tv
const popularTvURL = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`

// Upcoming Movies
const upcomingMoviesURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;

// Upcoming TV
// no upcoming section for TV

// Top Rated Movies
const topRatedMoviesURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

// Top Rated Tv
const topRatedTvURL = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`;

// *****************************************************************************
// *****************************************************************************

// getLanguages(languagesURL)

// async function getLanguages(url) {
//     const res = await fetch(url);
//     const data = await res.json();

//     console.log(data);
//     languagesArr = data;

//     for (let i = 0; i < languagesArr.length; i++) {
//         // New option
//         const languagesOption = `<option value="${i}" class="dropdownOption">${languagesArr[i].english_name}</option>`;
//         languages.innerHTML += languagesOption;
//     }
// }

// *****************************************************************************

// getMovieGenre(movieGenreURL)

// async function getMovieGenre(url) {
//     const res = await fetch(url);
//     const data = await res.json();

//     console.log(data.genres);
//     getMovieGenreArr = data.genres;
// }

// *****************************************************************************
// *****************************************************************************
//  All time trending
// *****************************************************************************

getTrendingAll(trendingAllURL)

async function getTrendingAll(url) {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.results);
    getTrendingAllArr = data.results;

}

trending.addEventListener('click', () => {
    movieCardsContainer.innerHTML = "";
    tvCardsContainer.innerHTML = "";

    popular.style.color = "#504caf";
    popular.style.background = "#eee";
    discover.style.color = "#504caf";
    discover.style.background = "#eee";
    topRated.style.color = "#504caf";
    topRated.style.background = "#eee";
    trending.style.color = "#eee";
    trending.style.background = "#504caf";
    upcoming.style.color = "#504caf";
    upcoming.style.background = "#eee";

    // Movie Section

    for (let i = 0; i < getTrendingAllArr.length; i++) {
        // I wanted to incorporate name of the language and their Genres but this function did not work as I had hoped. I'm not sure what went wrong here... I wanted to use this function to extract the full name of the language from languagesArr.

        // languageName = () => {
        //     for (let j = 0; j < languagesArr.length; j++) {
        //         console.log(getTrendingAllArr[i].original_language);
        //         console.log(languagesArr[j].iso_639_1)
        //         if ((getTrendingAllArr[i].original_language) !== (languagesArr[j].iso_639_1)) {
        //             console.log(languagesArr[j].english_name);
        //         }
        //         break;
        //     }
        // };
        // console.log(languageName());

        // Movie Section
        if (getTrendingAllArr[i].media_type == "movie") {
            // console.log("Movie: " + getTrendingAllArr[i].title);

            let cardContent = `<div class="card">
            <div class="cardContent">
                <div class="cardFace cardFront">
                    <div class="imgBox">
                        <img src="${imgURL + getTrendingAllArr[i].poster_path}"
                            alt="${getTrendingAllArr[i].title}">
                    </div>
                    <h3 class="cardTitle">
                    ${getTrendingAllArr[i].title}
                    </h3>
                </div>

                <div class="cardFace cardBack">
                    <h3 class="cardTitle">
                    ${getTrendingAllArr[i].title}
                    </h3>
                    <div class="topBack">
                        <div class="media">${getTrendingAllArr[i].media_type.charAt(0).toUpperCase() + getTrendingAllArr[i].media_type.slice(1)}</div>
                        <div class="date">Release date: ${getTrendingAllArr[i].release_date}</div>
                    </div>
                    <div class="description">
                        ${getTrendingAllArr[i].overview}
                    </div>
                    <div class="bottomBack">
                        <div class="rating">Rating: ${getTrendingAllArr[i].vote_average}</div>
                    </div>
                </div>
            </div>    </div>`

            movieCardsContainer.innerHTML += cardContent;
        }

        // Tv section
        if (getTrendingAllArr[i].media_type == "tv") {
            // console.log("Tv: " + getTrendingAllArr[i].name);

            let cardContent = `<div class="card">
            <div class="cardContent">
                <div class="cardFace cardFront">
                    <div class="imgBox">
                        <img src="${imgURL + getTrendingAllArr[i].poster_path}"
                            alt="${getTrendingAllArr[i].name}">
                    </div>
                    <h3 class="cardTitle">
                    ${getTrendingAllArr[i].name}
                    </h3>
                </div>

                <div class="cardFace cardBack">
                    <h3 class="cardTitle">
                    ${getTrendingAllArr[i].name}
                    </h3>
                    <div class="topBack">
                        <div class="media">${getTrendingAllArr[i].media_type.charAt(0).toUpperCase() + getTrendingAllArr[i].media_type.slice(1)}</div>
                        <div class="date">Release date: ${getTrendingAllArr[i].first_air_date}</div>
                    </div>
                    <div class="description">
                        ${getTrendingAllArr[i].overview}
                    </div>
                    <div class="bottomBack">
                        <div class="rating">Rating: ${getTrendingAllArr[i].vote_average}</div>
                    </div>
                </div>
            </div>    </div>`

            tvCardsContainer.innerHTML += cardContent;
        }
    }

})

//Search movie and tv with multi-search
// multiSearch(multiSearchURL)

// async function getMultiSearch(url) {
//     const res = await fetch(url);
//     const data = await res.json();

//     console.log(data.results);
//     multiSearchArr = data.results;

//     mainBtn.addEventListener('click', () => {
//         if (searchItem.value !== "") {
//             searchItem.value = homeQuery;
//         }
//     });
// }

// *****************************************************************************
// *****************************************************************************
// Discover Movies & TV
// *****************************************************************************

discoverMovies(discoverMoviesURL)

async function discoverMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.results);
    discoverMoviesArr = data.results;
}

discoverTv(discoverTvURL)

async function discoverTv(url) {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.results);
    discoverTvArr = data.results;
}

discover.addEventListener('click', () => {
    movieCardsContainer.innerHTML = "";
    tvCardsContainer.innerHTML = "";

    popular.style.color = "#504caf";
    popular.style.background = "#eee";
    discover.style.color = "#eee";
    discover.style.background = "#504caf";
    topRated.style.color = "#504caf";
    topRated.style.background = "#eee";
    trending.style.color = "#504caf";
    trending.style.background = "#eee";
    upcoming.style.color = "#504caf";
    upcoming.style.background = "#eee";

    // Movie Section
    for (let i = 0; i < discoverMoviesArr.length; i++) {

        let cardContent = `<div class="card">
            <div class="cardContent">
                <div class="cardFace cardFront">
                    <div class="imgBox">
                        <img src="${imgURL + discoverMoviesArr[i].poster_path}"
                            alt="${discoverMoviesArr[i].title}">
                    </div>
                    <h3 class="cardTitle">
                    ${discoverMoviesArr[i].title}
                    </h3>
                </div>

                <div class="cardFace cardBack">
                    <h3 class="cardTitle">
                    ${discoverMoviesArr[i].title}
                    </h3>
                    <div class="topBack">
                        <div class="media">Movie</div>
                        <div class="date">Release date: ${discoverMoviesArr[i].release_date}</div>
                    </div>
                    <div class="description">
                        ${discoverMoviesArr[i].overview}
                    </div>
                    <div class="bottomBack">
                        <div class="rating">Rating: ${discoverMoviesArr[i].vote_average}</div>
                    </div>
                </div>
            </div>    </div>`

        movieCardsContainer.innerHTML += cardContent;
    };
    // Tv section
    for (let i = 0; i < discoverTvArr.length; i++) {
        console.log("Tv: " + discoverTvArr[i].name);
        let cardContent = `<div class="card">
            <div class="cardContent">
                <div class="cardFace cardFront">
                    <div class="imgBox">
                        <img src="${imgURL + discoverTvArr[i].poster_path}"
                            alt="${discoverTvArr[i].name}">
                    </div>
                    <h3 class="cardTitle">
                    ${discoverTvArr[i].name}
                    </h3>
                </div>

                <div class="cardFace cardBack">
                    <h3 class="cardTitle">
                    ${discoverTvArr[i].name}
                    </h3>
                    <div class="topBack">
                        <div class="media">Tv</div>
                        <div class="date">Release date: ${discoverTvArr[i].first_air_date}</div>
                    </div>
                    <div class="description">
                        ${discoverTvArr[i].overview}
                    </div>
                    <div class="bottomBack">
                        <div class="rating">Rating: ${discoverTvArr[i].vote_average}</div>
                    </div>
                </div>
            </div>    </div>`

        tvCardsContainer.innerHTML += cardContent
    }
});

// *****************************************************************************
// *****************************************************************************
// Popular Movies and Tv
// *****************************************************************************

popularMovies(popularMoviesURL)

async function popularMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.results);
    popularMoviesArr = data.results;
}

popularTv(popularTvURL)

async function popularTv(url) {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.results);
    popularTvArr = data.results;
}

popular.addEventListener('click', () => {
    movieCardsContainer.innerHTML = "";
    tvCardsContainer.innerHTML = "";

    popular.style.color = "#eee";
    popular.style.background = "#504caf";
    discover.style.color = "#504caf";
    discover.style.background = "#eee";
    topRated.style.color = "#504caf";
    topRated.style.background = "#eee";
    trending.style.color = "#504caf";
    trending.style.background = "#eee";
    upcoming.style.color = "#504caf";
    upcoming.style.background = "#eee";
    // Movie Section
    for (let i = 0; i < popularMoviesArr.length; i++) {

        let cardContent = `<div class="card">
            <div class="cardContent">
                <div class="cardFace cardFront">
                    <div class="imgBox">
                        <img src="${imgURL + popularMoviesArr[i].poster_path}"
                            alt="${popularMoviesArr[i].title}">
                    </div>
                    <h3 class="cardTitle">
                    ${popularMoviesArr[i].title}
                    </h3>
                </div>

                <div class="cardFace cardBack">
                    <h3 class="cardTitle">
                    ${popularMoviesArr[i].title}
                    </h3>
                    <div class="topBack">
                        <div class="media">Movie</div>
                        <div class="date">Release date: ${popularMoviesArr[i].release_date}</div>
                    </div>
                    <div class="description">
                        ${popularMoviesArr[i].overview}
                    </div>
                    <div class="bottomBack">
                        <div class="rating">Rating: ${popularMoviesArr[i].vote_average}</div>
                    </div>
                </div>
            </div>    </div>`

        movieCardsContainer.innerHTML += cardContent;
    };

    // Tv section
    for (let i = 0; i < popularTvArr.length; i++) {
        console.log("Tv: " + popularTvArr[i].name);
        let cardContent = `<div class="card">
            <div class="cardContent">
                <div class="cardFace cardFront">
                    <div class="imgBox">
                        <img src="${imgURL + popularTvArr[i].poster_path}"
                            alt="${popularTvArr[i].name}">
                    </div>
                    <h3 class="cardTitle">
                    ${popularTvArr[i].name}
                    </h3>
                </div>

                <div class="cardFace cardBack">
                    <h3 class="cardTitle">
                    ${popularTvArr[i].name}
                    </h3>
                    <div class="topBack">
                        <div class="media">Tv</div>
                        <div class="date">Release date: ${popularTvArr[i].first_air_date}</div>
                    </div>
                    <div class="description">
                        ${popularTvArr[i].overview}
                    </div>
                    <div class="bottomBack">
                        <div class="rating">Rating: ${popularTvArr[i].vote_average}</div>
                    </div>
                </div>
            </div>    </div>`

        tvCardsContainer.innerHTML += cardContent
    }
});

// *****************************************************************************
// *****************************************************************************
// Top-Rated Movies and Tv
// *****************************************************************************

topRatedMovies(topRatedMoviesURL)

async function topRatedMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.results);
    topRatedMoviesArr = data.results;
}

topRatedTv(topRatedTvURL)

async function topRatedTv(url) {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.results);
    topRatedTvArr = data.results;
}

topRated.addEventListener('click', () => {
    movieCardsContainer.innerHTML = "";
    tvCardsContainer.innerHTML = "";

    popular.style.color = "#504caf";
    popular.style.background = "#eee";
    discover.style.color = "#504caf";
    discover.style.background = "#eee";
    topRated.style.color = "#eee";
    topRated.style.background = "#504caf";
    trending.style.color = "#504caf";
    trending.style.background = "#eee";
    upcoming.style.color = "#504caf";
    upcoming.style.background = "#eee";
    // Movie Section
    for (let i = 0; i < topRatedMoviesArr.length; i++) {

        let cardContent = `<div class="card">
            <div class="cardContent">
                <div class="cardFace cardFront">
                    <div class="imgBox">
                        <img src="${imgURL + topRatedMoviesArr[i].poster_path}"
                            alt="${topRatedMoviesArr[i].title}">
                    </div>
                    <h3 class="cardTitle">
                    ${topRatedMoviesArr[i].title}
                    </h3>
                </div>

                <div class="cardFace cardBack">
                    <h3 class="cardTitle">
                    ${topRatedMoviesArr[i].title}
                    </h3>
                    <div class="topBack">
                        <div class="media">Movie</div>
                        <div class="date">Release date: ${topRatedMoviesArr[i].release_date}</div>
                    </div>
                    <div class="description">
                        ${topRatedMoviesArr[i].overview}
                    </div>
                    <div class="bottomBack">
                        <div class="rating">Rating: ${topRatedMoviesArr[i].vote_average}</div>
                    </div>
                </div>
            </div>    </div>`

        movieCardsContainer.innerHTML += cardContent;
    };

    // Tv section
    for (let i = 0; i < topRatedTvArr.length; i++) {
        console.log("Tv: " + topRatedTvArr[i].name);
        let cardContent = `<div class="card">
            <div class="cardContent">
                <div class="cardFace cardFront">
                    <div class="imgBox">
                        <img src="${imgURL + topRatedTvArr[i].poster_path}"
                            alt="${topRatedTvArr[i].name}">
                    </div>
                    <h3 class="cardTitle">
                    ${topRatedTvArr[i].name}
                    </h3>
                </div>

                <div class="cardFace cardBack">
                    <h3 class="cardTitle">
                    ${topRatedTvArr[i].name}
                    </h3>
                    <div class="topBack">
                        <div class="media">Tv</div>
                        <div class="date">Release date: ${topRatedTvArr[i].first_air_date}</div>
                    </div>
                    <div class="description">
                        ${topRatedTvArr[i].overview}
                    </div>
                    <div class="bottomBack">
                        <div class="rating">Rating: ${topRatedTvArr[i].vote_average}</div>
                    </div>
                </div>
            </div>    </div>`

        tvCardsContainer.innerHTML += cardContent
    }
});

// *****************************************************************************
// *****************************************************************************
// Upcoming Movies and Tv
// *****************************************************************************

upcomingMovies(upcomingMoviesURL)

async function upcomingMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.results);
    upcomingMoviesArr = data.results;
}

upcoming.addEventListener('click', () => {
    movieCardsContainer.innerHTML = "";
    tvCardsContainer.innerHTML = "";

    popular.style.color = "#504caf";
    popular.style.background = "#eee";
    discover.style.color = "#504caf";
    discover.style.background = "#eee";
    topRated.style.color = "#504caf";
    topRated.style.background = "#eee";
    trending.style.color = "#504caf";
    trending.style.background = "#eee";
    upcoming.style.color = "#eee";
    upcoming.style.background = "#504caf";

    // Movie Section
    for (let i = 0; i < upcomingMoviesArr.length; i++) {

        let cardContent = `<div class="card">
            <div class="cardContent">
                <div class="cardFace cardFront">
                    <div class="imgBox">
                        <img src="${imgURL + upcomingMoviesArr[i].poster_path}"
                            alt="${upcomingMoviesArr[i].title}">
                    </div>
                    <h3 class="cardTitle">
                    ${upcomingMoviesArr[i].title}
                    </h3>
                </div>

                <div class="cardFace cardBack">
                    <h3 class="cardTitle">
                    ${upcomingMoviesArr[i].title}
                    </h3>
                    <div class="topBack">
                        <div class="media">Movie</div>
                        <div class="date">Release date: ${upcomingMoviesArr[i].release_date}</div>
                    </div>
                    <div class="description">
                        ${upcomingMoviesArr[i].overview}
                    </div>
                    <div class="bottomBack">
                        <div class="rating">Rating: ${upcomingMoviesArr[i].vote_average}</div>
                    </div>
                </div>
            </div>    </div>`

        movieCardsContainer.innerHTML += cardContent;
    };

    // Tv section

});
// *****************************************************************************
// *****************************************************************************