import Home from "./pages/Menu";
import AdminMenu from "./pages/AdminMenu";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from "./providers/CartContext";
import { ToastContainer } from 'react-toastify';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import OrderDetails from "./pages/OrderDetails";

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/admin/" element={<AdminMenu />} />
        </Routes>
      </CartProvider>
      <ToastContainer />
    </Router>
  );
}

export default App;