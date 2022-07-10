import { fetchMoviesQuery } from "../hooks/useQueryHook"
import { useDispatch } from "react-redux"

//swiper
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import "swiper/css"
import "swiper/css/navigation"

//Modal
import { toggleModal, setMovie } from "../features/modalSlice"

export default function Row({ title, fetchUrl, isLargeRow = false }) {
  const dispatch = useDispatch()
  const baseURL = "https://image.tmdb.org/t/p/original/"

  const { data: request, isLoading } = fetchMoviesQuery(
    title,
    fetchUrl,
    false,
    15000
  )

  const movieData = (movie) => {
    dispatch(setMovie(movie))
    dispatch(toggleModal())
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="movie-category">
      <h1 className="category-title">{title}</h1>
      <Swiper
        className="movies-container mySwiper"
        slidesPerView={isLargeRow ? 5 : 5}
        spaceBetween={0}
        slidesPerGroup={2}
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >
        {request?.data?.results?.map((movie, index) => {
          return (
            movie.poster_path &&
            movie.backdrop_path && (
              <SwiperSlide
                key={index}
                className="movie"
                onClick={() => movieData(movie)}
              >
                <img
                  className={`movie-image ${
                    isLargeRow && " movie-image-large"
                  }`}
                  src={`${baseURL}${
                    isLargeRow ? movie.poster_path : movie.poster_path
                  }`}
                  alt={`${movie.title || movie.name}'s image`}
                />
              </SwiperSlide>
            )
          )
        })}
      </Swiper>
    </div>
  )
}
