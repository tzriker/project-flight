import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { GlobalStateProvider } from './context/GlobalFlightData'


const App = () => {

  return (
    <GlobalStateProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </GlobalStateProvider>
  )
}
export default App
