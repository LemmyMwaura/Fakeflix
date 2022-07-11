import { useSelector, useDispatch } from "react-redux"

//Components
import Banner from "../components/Banner"
import RowList from "../components/RowList"
import Modal from "../components/Modal"
import Footer from "../Layout/Footer"

//utils
import requests from "../utils/Requests"

export default function HomeScreen() {
  const showModal = useSelector((state) => state.modal.isOpen)
  const { fetchNetflixOriginals } = requests

  return (
    <div>
      {showModal && <Modal />}
      <Banner link={fetchNetflixOriginals} />
      <RowList />
      <Footer />
    </div>
  )
}
