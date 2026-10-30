
import { Routes, Route } from "react-router-dom";
import Context from "./Components/Context";
import Home from "./Components/Home";
import Dash from "./Components/Dash";
import Cart from "./Components/Cart";

function App() {
  return (
    <Context>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dash/:id" element={<Dash />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Context>
  );
}

export default App;
