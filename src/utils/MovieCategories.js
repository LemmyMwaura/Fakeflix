import requests from "../utils/Requests"

const movieCategories = [
  {
    id:1,
    title: "Actions Movies",
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
    id:4,
    title: "Sci-Fi Movies",
    link: requests.fetchSciFiMovies,
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
