import { fetchMoviesQuery } from "../hooks/useQueryHook"
import { useRef } from "react"
import { useDispatch } from "react-redux"

//icons
import { GrPlayFill } from "react-icons/gr"
import { BiInfoCircle } from "react-icons/bi"

//modal
import { toggleModal, setMovie } from "../features/modalSlice"

export default function Banner({ link }) {
  const movie = useRef(null)
  const dispatch = useDispatch()
  const { data: request, isLoading } = fetchMoviesQuery(
    "banner-movie",
    link,
    10000
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

  const movieData = (movie) => {
    dispatch(setMovie(movie))
    dispatch(toggleModal())
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
          <button className="btn btn-sec"  onClick={() => movieData(movie.current)}>
            <BiInfoCircle className="tooltip-info" />
            <span>More Info</span>
          </button>
        </div>
      </div>
      <div className="banner-fade-bottom"></div>
    </div>
  )
}
