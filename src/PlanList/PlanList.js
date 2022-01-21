import React, { useState } from 'react'
import logo from '../logo.svg';
import '../Plan/Plan'
import Plan from '../Plan/Plan';
import './PlanList.css';

function PlanList() {
  const tripPlans = [56072, 53402, 54920, 55866]
  const [planNum, setPlanNum] = useState(tripPlans[0])

  const handleChange = e => {
    const { value } = e.target
    setPlanNum(value)
  }

  const tripPlansOptions = tripPlans.map((tripPlan, index) => (
    <option key={index} defaultValue={tripPlan}> {tripPlan}  </option>
  ))
 
  return (
  <>
    <img src={logo} className="App-logo" alt="logo" />
    <div className="App">
        <select onChange={handleChange} value={planNum} >
          {tripPlansOptions}
        </select>
        <Plan
          planId={planNum}
        />
    </div>
  </>
  );
}

export default PlanList;
