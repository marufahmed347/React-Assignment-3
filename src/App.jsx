import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './components/all-pages/page1/Page-1';
import Page2 from './components/all-pages/page2/Page-2';
import Page3 from './components/all-pages/page3/Page-3';

function App() {

  return (
    <>
      <div className='max-w-[1440px] mx-auto'>
      <Router>
      <Routes>
        <Route path="/" element={<Page1/>} />
        <Route path="/page2" element={<Page2/>} />
        <Route path="/page3" element={<Page3/>} />
      </Routes>
    </Router>
    </div>
    </>
  )
}

export default App
