import { Route, Routes, Navigate, BrowserRouter} from "react-router-dom"
import { PrimeReactProvider } from 'primereact/api';
import { Home } from "./pages/Home"




function App() {
  return (
    <BrowserRouter>

      <PrimeReactProvider >
        <Routes>
          <Route path="*" element={<Navigate to="/home" replace={true} />} />
          <Route
            path="/home"
            element={
              <Home />
            }
          />
        </Routes>
      </PrimeReactProvider>
    </BrowserRouter>
  )
}

export default App
