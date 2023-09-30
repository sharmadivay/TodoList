import Footer from "./myComponents/Footer";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./myComponents/List";

function App() {
  // to edit

  return (
    <Router>
      <div className="App">
        {/* <Header handleSearchTodo={setSearchTodo} /> */}
        <Routes>
          <Route path="/" element={<List />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
