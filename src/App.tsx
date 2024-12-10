import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

const App = () => (
  <>
    <Router>
      <div className="fade-in h-screen">
        <div className="p-4 lg:p-10 min-h-full bg-base-300">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-box">
            <div className="col-span-1">
              <Sidebar/>
            </div>
            <div className="lg:col-span-2 col-span-1">
              <div className="grid grid-cols-1 gap-6">
                <Navbar/>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/:slug" element={<Detail />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              
              
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </Router>
  </>
);

export default App;
