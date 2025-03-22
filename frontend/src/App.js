import React from "react";
import Table from "./components/Table";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-center">Disability Data Table</h1>
        <Table />
      </div>
    </div>
  );
}

export default App;
