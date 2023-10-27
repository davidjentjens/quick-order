import Home from "./pages/Menu";
import { CartProvider } from "./providers/CartContext";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

export default App;
