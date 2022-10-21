import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Signup from './pages/signup'; 
import FindAccount from './pages/find-account';
import FindPassword from './pages/find-password';
import Courses from './pages/courses';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/find-account" element={<FindAccount/>}/>
          <Route path="/find-password" element={<FindPassword/>}/>
          <Route path="/courses" element={<Courses/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
