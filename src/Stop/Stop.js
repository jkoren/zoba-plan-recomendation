import "./Stop.css"

function Stop(props) {
  const stop = props.stop
  const stop_number = !stop ? "" : stop.stop_number
  const longitude = !stop ? "" : stop.longitude
  const latitude = !stop ? "" : stop.latitude
  const action = !stop ? "" : stop.action
  const numVehicles = !stop ? "" : stop.vehicles
  const vehicle_id = !stop || stop.vehicle_id === null ? "" : stop.vehicle_id
  const mapURL = `http://maps.google.com/maps?z=15&t=m&q=loc:+${latitude}+${longitude}`
  const panoramaURL = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${latitude},${longitude}`

  const setLongitude = props.setLongitude
  const setLatitude = props.setLatitude

  const handleClick = () => {
    setLongitude(longitude)
    setLatitude(latitude)
  }

  return (
    <tr title="stop-row">
      <td>{stop_number}</td>
      <td>{action}</td>
      <td>{numVehicles}</td>
      <td>{vehicle_id}</td>
      <td>{latitude}</td>
      <td>{longitude}</td>
      <td><button onClick={handleClick}>Map</button></td>
      <td><a href={panoramaURL} target="_blank" rel="noreferrer">panorama</a></td>
    </tr>
  )
}

export default Stop
