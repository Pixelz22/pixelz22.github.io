import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
    return (
        <h1>Hello, world!</h1>
    );
}

function Other(props) {
    return (
        <p>Hello normal</p>
    );
}

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/other" element={<Other />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
