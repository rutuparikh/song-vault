
import { Routes, Route } from 'react-router-dom';

import './tailwind.css';

import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home';
import Create from './pages/Create.tsx';


function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow w-screen">
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
      </Routes> 
      </main>
      <Footer />
      </div>
    </>
  )
}

export default App;
