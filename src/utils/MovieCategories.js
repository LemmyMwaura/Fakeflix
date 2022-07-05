import requests from "../utils/Requests"

const movieCategories = [
  {
    id:4,
    title: "Netflix Originals",
    isLargeRow: true,
    link: requests.fetchNetflixOriginals,
  },
  {
    id:1,
    title: "Actions Movies",
    isLargeRow: true,
    link: requests.fetchActionMovies,
  },
  {
    id:2,
    title: "Comedy Movies",
    link: requests.fetchComedyMovies,
  },
  {
    id:3,
    title: "Romance Movies",
    link: requests.fetchRomanceMovies,
  },
  {
    id:5,
    title: "Horror Movies",
    link: requests.fetchHorrorMovies,
  },
  {
    id:6,
    title: "Documentaries",
    link: requests.fetchDocumentaries,
  },
]

export default movieCategories
