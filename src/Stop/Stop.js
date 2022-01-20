function Stop(props) {
  const stop = props.stop
  const stop_number = !stop ? "" : stop.stop_number
  const action = !stop ? "" : stop.action
  const numVehicles = !stop ? "" : stop.vehicles
  const vehicle_id = !stop || stop.vehicle_id === null ? "" : stop.vehicle_id

  return (
    <>
    <div>
      Stop: {stop_number} - {action}: {numVehicles} {vehicle_id}
    </div>
    </>
  )
}

export default Stop
