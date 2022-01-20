function Stop(props) {
  const stop = props.stop
  const stop_number = !stop ? "" : stop.stop_number

  return (
    <div>
      Stop: {stop_number}
    </div>
  )
}

export default Stop
