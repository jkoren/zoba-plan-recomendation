import "./Stop.css"

function Stop(props) {
  const stop = props.stop
  const stop_number = !stop ? "" : stop.stop_number
  const longitude = !stop ? "" : stop.longitude
  const latitude = !stop ? "" : stop.latitude
  const action = !stop ? "" : stop.action
  const numVehicles = !stop ? "" : stop.vehicles
  const vehicle_id = !stop || stop.vehicle_id === null ? "" : "v:"+ stop.vehicle_id

  return (
    <tr>
      <td>{stop_number}</td>
      <td>{action}</td>
      <td>{numVehicles}</td>
      <td>{vehicle_id}</td>
      <td>{longitude}</td>
      <td>{latitude}</td>
    </tr>
  )
}

export default Stop
