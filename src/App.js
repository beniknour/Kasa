import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from "./pages/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from './pages/About/About';
import FicheLogement from './pages/FicheLogement/FicheLogement';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Apropos' element={<About />}/>
            <Route path="*" element={<Error />} />
            <Route path="/logement/:id" element={<FicheLogement />} />
          </Routes>


        </main>
        
        
        <Footer />
      </Router>

    </div>
  );
}

export default App;

