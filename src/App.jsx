import { Route, Routes } from "react-router-dom";
import './App.css'
import HomePage from "./Pages/HomePage";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'
import Sportsconnect from "./Pages/Sportsconnect";
import Bomberland from "./Pages/Bomberland";
import Bonapp from "./Pages/Bonapp";
import Voyage from "./Pages/Voyage";
import Cbpexp from "./Pages/Cbpexp";
import Limra from "./Pages/Limra";
import Letudiant from "./Pages/Letudiant";

function App() {

  return (
<>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sportsconnect" element={<Sportsconnect />} />
          <Route path="/bomberland" element={<Bomberland />} />
          <Route path="/bonapp" element={<Bonapp />} />
          <Route path="/voyages" element={<Voyage />} />
          <Route path="/cbp" element={<Cbpexp />} />
          <Route path="/limra" element={<Limra />} />
          <Route path="/letudiant" element={<Letudiant />} />
          <Route path="*" element={<h2>Error page</h2>} />
        </Routes>
        <Footer />

      </div>
    </>
  )
}

export default App
