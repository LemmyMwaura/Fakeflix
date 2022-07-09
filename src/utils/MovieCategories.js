import requests from "../utils/Requests"

const movieCategories = [
  {
    id: 1,
    title: "Netflix Originals",
    isLargeRow: true,
    link: requests.fetchNetflixOriginals,
  },
  {
    id: 2,
    title: "Trending Movies",
    link: requests.fetchTrending,
  },
  {
    id: 3,
    title: "Top Rated Movies",
    link: requests.fetchTopRated,
  },
  {
    id: 4,
    title: "Actions Movies",
    link: requests.fetchActionMovies,
  },
  {
    id: 5,
    title: "Comedy Movies",
    link: requests.fetchComedyMovies,
  },
  {
    id: 6,
    title: "Romance Movies",
    link: requests.fetchRomanceMovies,
  },
  {
    id: 8,
    title: "Documentaries",
    link: requests.fetchDocumentaries,
  },
  {
    id: 7,
    title: "Horror Movies",
    link: requests.fetchHorrorMovies,
  },
  {
    id: 9,
    title: "TV Series/Sitcoms",
    link: requests.fetchTV,
  },
]

export default movieCategories
