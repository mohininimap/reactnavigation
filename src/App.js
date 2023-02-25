import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header/Header";
import Page404 from './components/Page404';
import User from "./components/User";
import Filter from './components/Filter';
function App(){
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="/home" element={<Home/>}>  </Route>
      <Route path="/about" element={<About/>}>  </Route>
      <Route path="/filter" element={<Filter/>}></Route>
      <Route path="/user/:name" element={<User/>}/>
      {/* <Route path="/*" element={<Page404/>}>  </Route> */}

      </Routes>
        </Router>
      );
}
 


export default App;
