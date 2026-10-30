
import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "./Context";

function Home() {
  const { show } = useContext(userContext);

  return (
    <div>
      <h1>Products</h1>

      {show.map((value) => (
        <div key={value.id}>
          <h3>{value.title}</h3>
          <img src={value.thumbnail} width="100" />
          <p>Price: {value.price}</p>

          <Link to={`/Dash/${value.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
