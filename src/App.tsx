import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components/common";
import { Home } from "./pages";
import "./App.css";
import Details from "./pages/Details";

export interface ICategory {
  id: string | string[];
  name: string;
  image_path: string;
}

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <div className="h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
