
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, {useEffect, useState, useRef, useLayoutEffect} from "react";

const tableHeaders = ["Name of the Pool", "ETH Staked", "Number of Node Operators", "APR %", "Link to Website"];
 const array = [["Rocket Pool", "307,040", "1,739", "4.64", "https://rocketpool.net/#header"],
     ["StakeWise", "67,488.70", "2,099", "5.28", "https://app.stakewise.io/"]]

// const array = [["A", "1", "2", "0.5", "asdfghjk"],
//     ["1", "5", "0", "0.7", "asdfghjk"],
//         ["D", "3", "3", "0.1", "asdfghjk"],
//             ["E", "2", "4", "0.9", "asdfghjk"],
//                 ["C", "4", "5", "0.8", "asdfghjk"]]

function StakeList() {

const [arrowState, setArrowState] = useState("glyphicon glyphicon-triangle-top");
const [data, setData] = useState(array);

const sort = (index) => {
  if (arrowState === "glyphicon glyphicon-triangle-bottom"){
      console.log(index);
      array.sort((a,b) => a[index].localeCompare(b[index].toUpperCase()));
    setArrowState("glyphicon glyphicon-triangle-top")
  }
  else{
      console.log(index);
      array.sort((a,b) => a[index].localeCompare(b[index].toUpperCase()));
      array.reverse();
    setArrowState("glyphicon glyphicon-triangle-bottom")
  }
}

const makeArrow = (index) => {
    if (index !== 4) {
        return <span id={index} className={arrowState} onClick={() => sort(index)}></span>
    }
}

    return (
    <div className="App">
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"></link>
        <br></br>
        <h2 class="text-center">Stake List</h2>
        <br></br>
      <div class= "text-center">
      <button class="btn btn-primary" type="submit">Home</button>
      &nbsp;
      <button class="btn btn-secondary" type="submit">Join</button>
      </div>
        <br></br>
        <br></br>
      <div class = "table">
      <table class="table table-striped table-bordered">
        <thead class="table-dark">
          <tr>
          {tableHeaders.map((header, index) => (
            <th class = "th-sm" scope = "col" key={index}>{header}
                {makeArrow(index)}
                </th>
          ))}
          </tr>

        </thead>
        <tbody>
          {data.map(e => (<tr>{e.map((e, index) => index === 0 ? (<td scope="row"><b>{e}</b></td>): 
          (index === 4? 
          (<td scope="row"><a href={e}>{e}</a></td>)
          : (<td scope="row">{e}</td>)))}</tr>)
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default StakeList;