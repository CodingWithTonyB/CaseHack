import * as React from 'react';
import StakeList from "./StakeList";

const Home = () => {

  const OpenJoinPage = () => {
    alert("(Opens Join.js)");
  };

  const OpenStakeListPage = () => {
    alert('(Opens StakeList.js)');
  };

  return (
    <div class="text-center">
      <br></br>
        <br></br>
      <font size="7">Stake Index</font>
      <br></br>
      <br></br>
        <br></br>
        <h4>Stake Index is a directory that helps validators and
            delegators find reliable re-staking services.
        </h4>
        <br></br>
        <h4>It also provides re-staking businesses with an option to
            apply to join the existing list, allowing for businesses to have an
            easier way of announcing their own pools to the world!
        </h4>
        <br></br>
        <br></br>
        <Button class="bt2" onClick={OpenStakeListPage}>View Stake List</Button>
      &nbsp;&nbsp;
        <Button class="bt1" onClick={OpenJoinPage}>Join the List</Button>

    </div>
  );
};

const Button = ({ onClick, children }) => {
  return (
    <button type="button" class="btn btn-dark" onClick={onClick}>
      {children}
    </button>
  );
};

export default Home;
