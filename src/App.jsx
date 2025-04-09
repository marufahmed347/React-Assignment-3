import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Page1 from './components/all-pages/page1/Page-1';
import Navbar from './components/Navbar';
import Page2 from './components/all-pages/page2/Page-2';
import Page3 from './components/all-pages/page3/Page-3';

function App() {

  return (
    <>
      <div className='max-w-[1440px] mx-auto'>
      <Router>
        <Navbar/>
        {/* <Page1/> */}
        {/* <Page2/> */}
        <Page3/>
        

        <Routes>
          
          <Route  />
          <Route  />
          <Route  />
          <Route  />
          
          

          

        </Routes>

      </Router>
    </div>
    </>
  )
}

export default App
