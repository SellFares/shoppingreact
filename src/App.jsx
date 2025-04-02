import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <nav className="navbar">
                    <div className="logo">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="Paradise Nursery" />
                        <div>
                            <h3>Paradise Nursery</h3>
                            <i>Where Green Meets Serenity</i>
                        </div>
                    </div>
                    <div className="nav-links">
                        <a href="/">Plants</a>
                        <a href="/cart">Cart</a>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/cart" element={<CartItem />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
