import axios from "../utils/Axios"
import { useQuery } from "react-query"

export const fetchMoviesQuery = (
  queryKey,
  link,
  interval = false,
  time = 5000
) => {
  return useQuery(queryKey, () => axios.get(link), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    cacheTime: time,
    refetchInterval: interval,
  })
}
