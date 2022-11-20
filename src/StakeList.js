import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, {useEffect, useState, useRef} from "react";

const tableHeaders = ["Name of Your Pool", "Eth Staked", "Number of Node Operators", "APR%", "Link"];
function StakeList() {
const [data, setData] = useState([["Test", "Data1", "Data2", "Data3"], ["test3", "test4", "test5", "test6"]]);
//useEffect here
  return (
    <div className="App">
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"></link>
      <h2>Stake List</h2>
      <div class= "Join Us">
      <button class="btn btn-primary" type="submit">Home</button>
      <button class="btn btn-secondary" type="submit">Join</button>
      </div>
      <div class = "table">
      <table class="table table-striped table-bordered">
        <thead class="table-dark">
          <tr>
          {tableHeaders.map((header, index) => (
            <th class = "th-sm" scope = "col" key={index}>{header}<span class="glyphicon glyphicon-triangle-bottom"></span></th>
          ))}
          </tr>
        </thead>
        <tbody>
          {Array.from(data).map(e => (<tr>{e.map((e, index) => index == 0 ? (<td scope="row"><b>{e}</b></td>): (<td scope="row">{e}</td>))}</tr>)
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default StakeList;
