// Call the main functions the page is loaded
window.onload = () => {
    getOriginals();
    getTrendingNow();
    getTopRated();
};

// ** Helper function that makes dynamic API calls **
async function fetchMovies(url, dom_element, path_type) {
    // Use Fetch with the url passed down
    const req = await fetch(url);
    const resp = await req.json();

    const dom = dom_element;
    const path = path_type;

    showMovies(resp, dom, path);
}

//  ** Function that displays the movies to the DOM **
showMovies = (movies, dom_element, path_type) => {
    // Create a variable that grabs id or class
    const moviesEl = document.querySelector(dom_element);

    // Loop through object

    movies.results.forEach((x) => {
        const img = document.createElement("img");

        img.setAttribute("data-id", x.id);

        img.src = `https://image.tmdb.org/t/p/original${x[path_type]}`;

        moviesEl.appendChild(img);
    });
};

// ** Function that fetches Netflix Originals **
function getOriginals() {
    const url =
        "https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213";
    const pathType = "poster_path";
    const dom_element = ".original__movies";

    fetchMovies(url, dom_element, pathType);
}
// ** Function that fetches Trending Movies **
function getTrendingNow() {
    const url =
        "https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045";
    const pathType = "backdrop_path";
    const dom_element = "#trending";

    fetchMovies(url, dom_element, pathType);
}
// ** Function that fetches Top Rated Movies **
function getTopRated() {
    const url =
        "https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1";
    const pathType = "backdrop_path";
    const dom_element = "#top_rated";

    fetchMovies(url, dom_element, pathType);
}

// ** BONUS **

// ** Fetches URL provided and returns response.json()
async function getMovieTrailer(id) {
    //URL: `https://api.themoviedb.org/3/movie/${id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`
}

// // ** Function that adds movie data to the DOM
// const setTrailer = trailers => {
//   // Set up iframe variable to hold id of the movieTrailer Element
//   const iframe
//   // Set up variable to select .movieNotFound element
//   const movieNotFound

//   // If there is a trailer add the src for it
//   if (trailers.length > 0) {
//     // add d-none class to movieNotFound and remove it from iframe

//     // add youtube link with trailers key to iframe.src
//   } else {
//     // Else remove d-none class to movieNotfound and ADD it to iframe

//   }
// }
