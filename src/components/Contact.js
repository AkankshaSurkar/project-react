
import React, { useState } from "react";

const ShoesList = () => {
  const [shoes, setShoes] = useState([]);
  const [shoesname, setShoesName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantityAvailable, setQuantityAvailable] = useState("");
  const [large, setLarge] = useState("");
  const [Mediam, setMediam] = useState("");
  const [small, setSmall] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "shoesname") {
      setShoesName(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "price") {
      setPrice(value);
    } else if (name === "quantityAvailable") {
      setQuantityAvailable(value);
    } else if (name === "large") {
      setLarge(value);
    } else if (name === "Mediam") {
      setMediam(value);
    } else if (name === "small") {
      setSmall(value);
    }
  };

  const handleAddToCart = () => {
    const shoe = {
      shoesname,
      description,
      price,
      quantityAvailable,
      large,
      Mediam,
      small,
    };
    setShoes([...shoes, shoe]);
    // Reset form fields after adding to cart
    setShoesName("");
    setDescription("");
    setPrice("");
    setQuantityAvailable("");
    setLarge("");
    setMediam("");
    setSmall("");
  };

  return (

    <div>
      <h1>Shoes Shop</h1>
      <label htmlFor="shoe">ShoesName</label>
      <input
        type="text"
        name="shoesname"
        value={shoesname}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        value={description}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="price">Price</label>
      <input
        type="number"
        name="price"
        value={price}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="quantity">Quantity Available </label>
      <br />
      <label htmlFor="large">Large:</label>{" "}
      <input
        type="number"
        name="large"
        value={large}
        onChange={handleInputChange}
      />
      <label htmlFor="Mediam">Mediam:</label>{" "}
      <input
        type="number"
        name="mediam"
        value={Mediam}
        onChange={handleInputChange}
      />
      <label htmlFor="small">Small:</label>{" "}
      <input
        type="number"
        name="small"
        value={small}
        onChange={handleInputChange}
      />
      <br />
      <button onClick={handleAddToCart}>Add to Cart</button>
      <div>

          <ul>
            {shoes.map((shoe, index) => (
              <li key={index}>
                <p>Shoes Name: {shoe.shoesname}</p>
                <p>Description: {shoe.description}</p>
                <p>Price: {shoe.price}</p>
                <p>
                  Quantity Available:  </p><p>Large: {shoe.large}</p>
                  <p>Mediam: {shoe.Mediam}</p>
                  <p>Small: {shoe.small}</p>
              
              </li>
            ))}
          </ul>
        
      </div>
    </div>
  );
};

export default ShoesList;
