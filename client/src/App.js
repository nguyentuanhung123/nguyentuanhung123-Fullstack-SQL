import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home.js';
import View from './pages/View';

function App() {
  return (
    <div className="App">
      <ToastContainer position="top-center" />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='addContact' element={<AddEdit />}></Route>
        <Route path="/update/:id" element={<AddEdit />}></Route>
        <Route path="/view/:id" element={<View />}></Route>
      </Routes>
    </div>
  );
}

export default App;
