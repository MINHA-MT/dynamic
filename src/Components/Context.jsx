
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const userContext = createContext();

function Context({ children }) {
  const [show, setShow] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setShow(res.data))
      .catch((err) => console.log(err));
  }, []);

  function addToCart(product) {
    const existing = cart.find(
      (item) => item.id === product.id
    );

    if (existing) {
      setCart(cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  return (
    <userContext.Provider
      value={{ show, cart, addToCart }}
    >
      {children}
    </userContext.Provider>
  );
}

export default Context;
