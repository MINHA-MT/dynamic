
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { userContext } from "./Context";

function Dash() {
  const { id } = useParams();
  const { show, addToCart } = useContext(userContext);
  const navigate = useNavigate();

  const product = show.find(
    (value) => value.id === Number(id)
  );



  return (
    <div>
      <h1>{product.title}</h1>

      <img src={product.thumbnail} width="200" />

      <h3>Price: ${product.price}</h3>

      <p>{product.description}</p>

      <button onClick={() => {
        addToCart(product);
        alert("Product added to cart!");
      }}>
        Add to Cart
      </button>

      <button onClick={() => navigate("/cart")}>
        Go to Cart
      </button>
    </div>
  );
}

export default Dash;
