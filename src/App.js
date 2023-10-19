import MainContainer from './layout/MainLayout';
import { Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import Offer from './pages/Offer';
import Procedure from './pages/Procedure';
import Application from './pages/Application';
import Gallery from './pages/Gallery';
import Phones from './pages/Phones';
import Documents from './pages/Documents';
import BenefitsScope from './pages/BenefitsScope';
import Contact from './pages/Contact';

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
        <Route path='/phones' element={<Phones/>}/>
        <Route path='/documents' element={<Documents/>}/>
        <Route path='/benefits' element={<BenefitsScope/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </MainContainer>
  );
}

export default App;
