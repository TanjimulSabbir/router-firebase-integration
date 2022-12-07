import './App.css';
import Home from "./components/Home/Home"
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Login from './components/Login/Login';
import Blog from './components/Blog/Blog';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/registration' element={<Registration></Registration>} />
        <Route path='/blog' element={<Blog></Blog>} />
      </Routes>
    </div>
  );
}

export default App;
