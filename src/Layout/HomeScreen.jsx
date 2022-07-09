import Banner from "../components/Banner"
import RowList from "../components/RowList"

//utils
import requests from "../utils/Requests"

export default function HomeScreen() {
  const { fetchNetflixOriginals } = requests

  return (
    <div>
      <Banner link={fetchNetflixOriginals}/>
      <RowList />
    </div>
  )
}
