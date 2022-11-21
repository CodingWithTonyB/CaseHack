
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
  
import Home from "./Home";
import Join from "./Join";
import StakeList from "./StakeList";
  
function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Join" element={<Join/>} />
          <Route path="/StakeList" element={<StakeList/>} />
        </Routes>
      </Router>
    </>
  );
}
  
export default App;