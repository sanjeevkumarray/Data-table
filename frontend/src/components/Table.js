import React from "react";
import "./Table.css";
const Table = () => {
  const data = [
    {
      category: "Blind",
      participants: 5,
      completed: 1,
      terminated: 4,
      accuracy: "34.5%, n=1",
      time: "1199 sec, n=1",
    },
    {
      category: "Low Vision",
      participants: 5,
      completed: 2,
      terminated: 3,
      accuracy: "98.3%, n=2 (97.7%, n=3)",
      time: "1716 sec, n=3 (1934 sec, n=2)",
    },
    {
      category: "Dexterity",
      participants: 5,
      completed: 4,
      terminated: 1,
      accuracy: "98.3%, n=4",
      time: "1672.1 sec, n=4",
    },
    {
      category: "Mobility",
      participants: 3,
      completed: 3,
      terminated: 0,
      accuracy: "95.4%, n=3",
      time: "1416 sec, n=3",
    },
  ];

  return (
    <div className="table-container">
      <h4 className="table-title">Example table</h4>
      <p>This is an example of a data table.</p>
      <table className="custom-table">
        <thead>
          <tr>
            <th rowSpan="2">Disability Category</th>
            <th rowSpan="2">Participants</th>
            <th rowSpan="2">Ballots Completed</th>
            <th rowSpan="2">Ballots Incomplete/ Terminated</th>
            <th colSpan="2">Results</th>
          </tr>
          <tr>
            <th>Accuracy</th>
            <th>Time to complete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.category}</td>
              <td>{row.participants}</td>
              <td>{row.completed}</td>
              <td>{row.terminated}</td>
              <td>{row.accuracy}</td>
              <td>{row.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
