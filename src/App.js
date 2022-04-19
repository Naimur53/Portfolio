import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/pages/Home/Home';
import NavBar from './Components/pages/NavBar/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setWindowLoad } from './MangeState/dataSlice';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Components/pages/Dashboard/Dashboard';
import UpBestProject from './Components/pages/Dashboard/Components/UpBestProject';
import AddProject from './Components/pages/Dashboard/Components/AddProject';
import { allData } from '../src/MangeState/dataSlice'
import AOS from 'aos';
import "aos/dist/aos.css";

function App() {
  const dispatch = useDispatch();
  const { windowLoad } = useSelector(allData);
  const [look, setLook] = useState(true);
  useEffect(() => {
    // window.focus = function () { setLook(true) }
    var vis = (function () {
      var stateKey, eventKey, keys = {
        hidden: "visibilitychange",
        webkitHidden: "webkitvisibilitychange",
        mozHidden: "mozvisibilitychange",
        msHidden: "msvisibilitychange"
      };
      for (stateKey in keys) {
        if (stateKey in document) {
          eventKey = keys[stateKey];
          break;
        }
      }
      return function (c) {
        if (c) document.addEventListener(eventKey, c);
        return !document[stateKey];
      }
    })();
    vis(function () {
      document.title = vis() ? 'Visible' : 'Not visible';
      setLook(vis() ? true : false)
    });

  }, [])
  console.log(look);
  window.onload = function () {
    dispatch(setWindowLoad(false))
  }
  useEffect(() => {

    if (!windowLoad && look) {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }
  }, [windowLoad, look])
  return (
    <div className="App">

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
    </div>
  );
}

export default App;
