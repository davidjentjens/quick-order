import Home from "./pages/Menu";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from "./providers/CartContext";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;