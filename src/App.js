import Navbar from './componentes/section/Navbar';
import Search from './componentes/section/Search';
import Footer from './componentes/section/Footer';
import IptSearch from './componentes/section/IptSearch';
import Space from './componentes/section/Space';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Search></Search>
      <IptSearch/>
      <Space/> 
      <Footer/>
    </div>
  );
}

export default App;
