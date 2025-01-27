import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/page";
import Create from "./pages/createProduct/page";
import { Header } from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Update from "./pages/updateProduct/page";
import NotFound from "./pages/notFound/page";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createProduct" element={<Create />} />
        <Route path="/updateProduct/:id" element={<Update />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
