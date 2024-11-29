import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <AppRoutes />
      </Router>
    </CartProvider>
  );
};

export default App;
