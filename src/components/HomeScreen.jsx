import Banner from "./Banner"
import RowList from "./RowList"

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
