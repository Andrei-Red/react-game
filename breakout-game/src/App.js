import { BrowserRouter } from 'react-router-dom';
import {Sidebar} from './pages/Sidebar/Sidebar';
import './App.css'
import { Routes } from './Routes';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Hello</h1>
        <Sidebar />
        <Routes />
      </div>
    </BrowserRouter>

  );
}

export default App;
