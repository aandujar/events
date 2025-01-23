import { Route, Routes } from 'react-router-dom'
import LoginRegister from './views/LoginRegister'
import EventsPage from './views/EventsPage'
import EventDetail from './views/EventDetail'
import { /*useNavigate,*/ useLocation } from "react-router-dom";
import { useEffect } from 'react'

function App() {
  //const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if(location.pathname === "/"){
    /// navigate('/event'); 
    }
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/event" element={<EventsPage />} />
        <Route path="/event/:id" element={<EventDetail />} />
      </Routes>
    </div>
  )
}

export default App
