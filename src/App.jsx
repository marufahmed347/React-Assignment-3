import './App.css'
import Page1 from './components/all-pages/page1/page-1'
import Page2 from './components/all-pages/page2/Page-2'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div className='max-w-[1440px] mx-auto'>
        <Navbar/>
        {/* <Page1/> */}
        <Page2/>
      </div>
    </>
  )
}

export default App
