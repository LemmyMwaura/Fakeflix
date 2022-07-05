import { QueryClientProvider, QueryClient } from "react-query"
import Header from "./components/Header"
import "./App.css"

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Header />
      </div>
    </QueryClientProvider>
  )
}

export default App
