
import { useContext } from "react";
import { userContext } from "./Context";

function Cart() {
  const { cart } = useContext(userContext);

  return (
    <div>
      <h1>My Cart</h1>

      {cart.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.thumbnail} width="100" />
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>
              Total: ${item.price * item.quantity}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
