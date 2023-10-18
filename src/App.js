import MainContainer from './layout/MainLayout';
import { Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import Offer from './pages/Offer';
import Procedure from './pages/Procedure';
import Application from './pages/Application';
import Gallery from './pages/Gallery';

function App() {
  return (
    <MainContainer>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/offer' element={<Offer/>}/>
        <Route path='/procedure' element={<Procedure/>}/>
        <Route path='/application' element={<Application/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
      </Routes>
      <Footer/>
    </MainContainer>
  );
}

export default App;
