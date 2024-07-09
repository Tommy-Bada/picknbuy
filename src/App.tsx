import { useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import ProductInfo from "./pages/productInfo";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";

function App() {
  const element = useRoutes([
    {
      path: "/",
      // element: isLoggedIn ? <Navigate to="/dashboard" /> : <Home />,
      element: <Home />,
    },
    {
      path: "/product",
      element: <ProductInfo />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
  ]);

  return element;
}

export default App;
