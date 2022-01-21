import logo from '../logo.svg';
import '../Plan/Plan'
import Plan from '../Plan/Plan';
import './PlanList.css';

function PlanList() {
  const tripPlans = [56072, 53402, 54920, 55866]
  
  const tripPlansElements = tripPlans.map((tripPlan, index) => (
    <li key={index}>
      {tripPlan}
    </li>
  ))
  
  return (
  <>
    <img src={logo} className="App-logo" alt="logo" />
    <div className="App">
      <header className="App-header">
        <ol>
          {tripPlansElements}
        </ol>
        <Plan
          planId = "53402"
        />
      </header>
    </div>
  </>
  );
}

export default PlanList;
