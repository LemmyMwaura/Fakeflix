import { useQuery } from "react-query"
import axios from "../utils/Axios"

export default function Row({ title, fetchUrl, isLargeRow = false }) {
  const baseURL = "https://image.tmdb.org/t/p/original/"
  const { data: request, isLoading } = useQuery(title, () =>
    axios.get(fetchUrl)
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="movie-category">
      <h1 className="category-title">{title}</h1>
      <div className="movies-container">
        {request?.data?.results?.map((movie, index) => {
          return (
            movie.poster_path && movie.backdrop_path && (
              <div key={index} className="movie">
                <img
                  className={`movie-image ${
                    isLargeRow && " movie-image-large"
                  }`}
                  src={`${baseURL}${
                    isLargeRow ? movie.poster_path : movie.poster_path
                  }`}
                  alt={`${movie.title || movie.name}'s image`}
                />
              </div>
            )
          )
        })}
      </div>
    </div>
  )
}
