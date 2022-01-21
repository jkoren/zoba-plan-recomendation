import React, { useState } from 'react'
import logo from '../logo.svg';
import '../Plan/Plan'
import Plan from '../Plan/Plan';
import './PlanList.css';

function PlanList() {
  const tripPlans = [
    [56072,"Small Midday Rebalance"], 
    [53402, "Small Midday Rebalance"],
    [54920, "Small Midday Rebalance"] , 
    [55866, "Small Midday Rebalance"]
  ]
  const [planNum, setPlanNum] = useState(tripPlans[0])

  const handleChange = e => {
    const { value } = e.target
    const planNum = value.substring(0,5)
    console.log(planNum)
    setPlanNum(planNum)
  }

  const tripPlansOptions = tripPlans.map((tripPlan, index) => (
    <option key={index} defaultValue={tripPlan[0]}> {tripPlan[0]} {tripPlan[1]}  </option>
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
