import { QueryClientProvider, QueryClient } from "react-query"
import AuthProvider from "./components/Auth"
import Header from "./components/Header"
import "./App.css"

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="app">
          <Header />
        </div>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
