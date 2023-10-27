import Home from "./pages/Menu";
import AdminMenu from "./pages/AdminMenu";
import { BrowserRouter as Router, Route, Routes, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CartProvider } from "./providers/CartContext";
import { ToastContainer } from 'react-toastify';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import OrderDetails from "./pages/OrderDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/order-details",
    element: <OrderDetails />
  },
  {
    path: "/admin/",
    element: <AdminMenu />
  }
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </CartProvider>
  );
}

export default App;