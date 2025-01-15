import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/page";
import Create from "./pages/createProduct/page";
import { Header } from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createProduct" element={<Create />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
