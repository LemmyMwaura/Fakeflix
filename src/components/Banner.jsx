import { useRef } from "react"
import { useQuery } from "react-query"

//utils
import axios from "../utils/Axios"
import requests from "../utils/Requests"

//icons
import { GrPlayFill } from "react-icons/gr"
import { BiInfoCircle } from "react-icons/bi"

export default function Banner({ link }) {
  const movie = useRef(null)
  const { fetchNetflixOriginals } = requests

  const { data: request, isLoading } = useQuery("banner-movie", () =>
    axios.get(link)
  )

  if (!isLoading) {
    const getMovie = () => {
      return request?.data?.results[
        Math.floor(Math.random() * request?.data?.results.length - 1)
      ]
    }

    movie.current = getMovie()
    
    if (movie.current?.backdrop_path == null) {
      movie.current = getMovie()
    }
  }

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
        <div className="banner-description">
          {truncate(`${movie.current?.overview}`, 180)}
        </div>
        <div className="banner-buttons">
          <button className="btn btn-primary">
            <GrPlayFill />
            <span>Play</span>
          </button>
          <button className="btn btn-sec">
            <BiInfoCircle className="tooltip-info" />
            <span>More Info</span>
          </button>
        </div>
      </div>
      <div className="banner-fade-bottom"></div>
    </div>
  )
}
