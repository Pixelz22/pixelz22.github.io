import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Home() {
    return (
        <h1>Hello, world!</h1>
    );
}

function Other() {
    return (
        <p>Hello normal</p>
    );
}

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/portfolio">
                <Route index path="/" element={<Home />} />
                <Route path="/other" element={<Other />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
