import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import CheckOut from "./pages/CheckOut"
import ProductList from "./pages/ProductList";
import { Provider } from "react-redux";
import store from "./store/store";


function App() {

  return (
    <>
    
  <Provider store={store}>
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products"element={<ProductList/>} />
          <Route path="/checkout" element={<CheckOut />} /> 
      </Routes>
    </BrowserRouter>
    </Provider>
    
    </>
  )
}

export default App
