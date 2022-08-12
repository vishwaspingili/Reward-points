import react, { useState, useEffect } from 'react';
import Dashboard from './Components/Dashboard';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/getProduct')
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch(err => {
            setProducts([]);
        });
}, []);

  return (
    <div className="App">
      <Dashboard products={products}/>
    </div>
  );
}

export default App;
