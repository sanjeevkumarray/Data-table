import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../components/Table";
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/data") // Backend API
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Data Table</h2>
      <Table data={data} />
    </div>
  );
}

export default Home;
