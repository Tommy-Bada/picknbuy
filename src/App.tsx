import { useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import ProductInfo from "./pages/productInfo";

function App() {
  const element = useRoutes([
    {
      path: "/",
      // element: isLoggedIn ? <Navigate to="/dashboard" /> : <Home />,
      element: <Home />,
    },
    {
      path: "/product",
      // element: isLoggedIn ? <Navigate to="/dashboard" /> : <Home />,
      element: <ProductInfo />,
    },
  ]);

  return element;
}

export default App;
