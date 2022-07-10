import { QueryClientProvider, QueryClient } from "react-query"
import { useEffect } from "react"
import { onAuthStateChanged, auth } from "./Auth/firebaseConfig"
import { useNavigate } from "react-router-dom"
//redux
import { useDispatch } from "react-redux"
import { userLogIn, userLogOut } from "./features/userSlice"

//components
import Header from "./Layout/Header"
import "./App.css"

function App() {
  const queryClient = new QueryClient()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(userLogIn({
          uid:userAuth.uid,
          email:userAuth.email,
          name:userAuth.displayName,
        }))
        navigate('/browse')
      } else {
        dispatch(userLogOut())
        navigate('/')
      }
    })

    return unSubscribe
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
        <div className="app">
          <Header />
        </div>
    </QueryClientProvider>
  )
}

export default App
