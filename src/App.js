import Footer from "./myComponents/Footer";
import React ,{useState}from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./myComponents/List";
import Header from "./myComponents/Header"
import About from "./About"
function App() {
    const [searchTodo, setSearchTodo] = useState("");
    
  return (
    <Router>
      <div className="App">
        <Header handleSearchTodo={setSearchTodo}  />
        <Routes>
          <Route path="/" element={<List searchTodo={searchTodo} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
