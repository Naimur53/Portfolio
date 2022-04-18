import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/pages/Home/Home';
import NavBar from './Components/pages/NavBar/NavBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setWindowLoad } from './MangeState/dataSlice';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Components/pages/Dashboard/Dashboard';
import UpBestProject from './Components/pages/Dashboard/Components/UpBestProject';
import AddProject from './Components/pages/Dashboard/Components/AddProject';
import AOS from 'aos';
import "aos/dist/aos.css";
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  const dispatch = useDispatch();
  window.onload = function () {
    dispatch(setWindowLoad(false))
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
  useEffect(() => {


  }, [])
  return (
    <div className="App">
      <ParallaxProvider>

        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path='/home' element={<Home />} />
            <Route path='/blog' element={<div >Coming soon</div>} />
            <Route path='/sadi732961' element={<Dashboard></Dashboard>} >
              <Route path='/sadi732961' element={<UpBestProject />}></Route>
              <Route path='/sadi732961/bestproject' element={<UpBestProject />}></Route>
              <Route path='/sadi732961/addproject' element={<AddProject />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ParallaxProvider>
    </div>
  );
}

export default App;
