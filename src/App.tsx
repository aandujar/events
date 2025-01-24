import { Route, Routes } from 'react-router-dom'
import LoginRegister from './views/LoginRegister'
import EventsPage from './views/EventsPage'
import EventDetail from './views/EventDetail'
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react'


function App() {
  const navigate = useNavigate();
  const location = useLocation();
    const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if(localStorage.getItem("eventsUser")){
      if(location.pathname === "/"){
          navigate('/event'); 
        }
      setTimeout(() => setLoading(false), 2000);
    } else {
      if(location.pathname !== "/") {
        navigate('/');
      }
      setLoading(false)
    }
  }, []);

  return (
    <> {  loading ?
      <div className="loading-bars">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> :
    <div className="app">
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/event" element={<EventsPage />} />
        <Route path="/event/:id" element={<EventDetail />} />
      </Routes>
    </div>
      }
      </>
  )
}

export default App
