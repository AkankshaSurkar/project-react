import ShoesList from "./components/Contact";
import CartView from "./components/Cart";
import React,{useState} from "react"
import './App.css';


function App() {
  const [shoes, setShoes] = useState([]);

  const [showCart, setShowCart] = useState(false);

  const handleViewCart = () => {
    const shoe = {
    };
    setShowCart(true);
    setShoes([...shoes, shoe]);
  };

  
    
  

  return (
    <div>
      <ShoesList/>
      {/* ... existing code ... */}
      <button onClick={handleViewCart}>View Cart</button>
      {showCart && <CartView shoes={shoes} />}
    </div>
  );
};



export default App;
