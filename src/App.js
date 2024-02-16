import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from "./pages/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <main>
          <Routes>

            <Route path="*" element={<Error />} />
          </Routes>


        </main>
        
        
        <Footer />
      </Router>

    </div>
  );
}

export default App;

