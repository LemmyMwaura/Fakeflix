import { useDispatch, useSelector } from "react-redux/es/exports"
import { toggleModal } from "../features/modalSlice"

const Modal = () => {
  const movie = useSelector((state) => state.modal.movie)
  const dispatch = useDispatch()
  const baseURL = "https://image.tmdb.org/t/p/original/"

  const truncate = (str, maxLength) => {
    if (str?.length > maxLength) {
      return str.substring(0, maxLength) + "..."
    }
    return str
  }

  return (
    <div>
      <div className="modal">
        <div
          className={`modal-banner`}
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage: `url(${baseURL}${movie.backdrop_path})`,
          }}
        >
          <div className='modal-fade-bottom'></div>
        </div>
        <div className="modal-movie-details">
          <div className="modal-movie-name">
            {movie?.name || movie?.title || movie?.original_name}
          </div>
          <div className="modal-movie-desc">
            {truncate(`${movie?.overview}`, 250)}
          </div>
          <div className="modal-footer">
            <h4>More Info</h4>
            <div className="language">
              <span>Original Language:</span>
              <span>{movie.original_language}</span>
            </div>
            <div className="release">
              <span>Release Date :</span>
              <span>{Date(movie.first_air_date)}</span>
            </div>
            <div className="rating">
              <span>Rating:</span>
              <span>{movie.vote_average}</span>
            </div>
            <div className="age-rating">
              <span>Age-Rating:</span>
              <span>{movie.adult ?  'Not Available' : 'Not Available'}</span>
            </div>
            <div className="category">
              <span>Category:</span>
              <span>{movie.media_type ? movie.media_type : 'Not Available'}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay" onClick={() => dispatch(toggleModal())}></div>
    </div>
  )
}

export default Modal
