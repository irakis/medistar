import MainContainer from './layout/MainLayout';
import { Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';

function App() {
  return (
    <MainContainer>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </MainContainer>
  );
}

export default App;
