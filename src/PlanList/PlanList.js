import logo from '../logo.svg';
import '../Plan/Plan'
import Plan from '../Plan/Plan';
import './PlanList.css';

function PlanList() {

  // this doesn't really go here - just for testing
  Plan(56072)
  
  const tripPlans = [56072, 53402, 54920, 55866]
 
  const tripPlansElements = tripPlans.map((tripPlan, index) => (
    <li key={index}>
      {tripPlan}
    </li>
  ))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ol>
          {tripPlansElements}
        </ol>
      </header>
    </div>
  );
}

export default PlanList;
