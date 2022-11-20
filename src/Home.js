import * as React from 'react';

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
      <font size="7">Stake Index</font>
      <br></br>
      <br></br>
      <Button class="bt1" onClick={OpenJoinPage}>Join The List</Button>
      &nbsp;&nbsp;
      <Button class="bt2" onClick={OpenStakeListPage}>View Stake List</Button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h4>The Stake Index is a simple list that allows validators and
        delegators to find reliable re-staking servises that they 
        require.
      </h4>
      <h4>It also supplies re-staking businesses with the ability to
        apply to join the list, allowing for busnisses to have an 
        easier way of announcing their own pools to the world!
      </h4>
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
