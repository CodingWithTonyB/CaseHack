import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StakeList from './StakeList'
import Join from './Join'

const Home = () => {

  return (
    <div>
    <div class="text-center h-screen">
      <br></br>
      <br></br>
      <font size="7" class='my-text-big'>Stake Index</font>
      <br></br>
      <br></br>
        <br></br>
        <h4 class='my-text-smaller-padding'>Stake Index is a directory that helps validators and
            delegators find reliable re-staking services.
        </h4>
        <br></br>
        <h4 class='my-text-smaller-padding'>It also provides re-staking businesses with an option to
            apply to join the existing list, allowing for businesses to have an
            easier way of announcing their own pools to the world!
        </h4>
        <br></br>
        <br></br>
        <Link to='/StakeList'>
          <Button class="bt2">View Stake List</Button>
        </Link>
        &nbsp;&nbsp;
        <Link to='Join'>
          <Button class="bt1">Join the List</Button>
        </Link>
    </div>
    </div>
  );
};

const Button = ({ onClick, children }) => {
  return (
    <button type="button" class="btn btn-light" onClick={onClick}>
      {children}
    </button>
  );
};

export default Home;
