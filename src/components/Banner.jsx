import { useRef } from "react"
import { useQuery } from "react-query"
import axios from "../utils/Axios"
import requests from "../utils/Requests"

export default function Banner() {
  const movie = useRef(null)
  const { fetchNetflixOriginals } = requests

  const { data: request, isLoading } = useQuery("banner-movie", () =>
    axios.get(fetchNetflixOriginals)
  )

  if (!isLoading) {
    movie.current =
      request?.data?.results[
        Math.floor(Math.random() * request?.data?.results.length - 1)
      ]
  }

  console.log(movie.current)

  const truncate = (str, maxLength) => {
    if (str?.length > maxLength) {
      return str.substring(0, maxLength) + "..."
    }
    return str
  }

  return (
    <div
      className="home-banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${
          movie.current?.backdrop_path || ""
        })`,
      }}
    >
      <div className="banner-details">
        <h1 className="banner-title">
          {movie.current?.name ||
            movie.current?.title ||
            movie.current?.original_name}
        </h1>
        <p className="banner-description">
          {truncate(`${movie.current?.overview}`, 180)}
        </p>
        <div className="banner-buttons">
          <button className="btn btn-primary">Play</button>
          <button className="btn btn-sec">More Info</button>
        </div>
      </div>
      <div className="banner-fade-bottom"></div>
    </div>
  )
}
