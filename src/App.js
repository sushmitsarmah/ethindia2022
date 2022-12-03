import './App.css';
import Navbar from './components/Navbar';

import {
    RouterProvider,
} from "react-router-dom";

import Router from './Router';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
