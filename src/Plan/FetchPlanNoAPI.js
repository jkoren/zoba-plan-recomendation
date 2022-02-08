import {responses} from "./MockAPIResponses"

const FetchPlanNoAPI = (planId) => {
  // mockResponses = ["56702", "53402", "54920", "55866"]
    return responses[planId]
}

export default FetchPlanNoAPI