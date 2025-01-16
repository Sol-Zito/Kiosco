import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/page";
import Create from "./pages/createProduct/page";
import { Header } from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Update from "./pages/updateProduct/[id]";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createProduct" element={<Create />} />
        <Route path="/updateProduct/:id" element={<Update />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
