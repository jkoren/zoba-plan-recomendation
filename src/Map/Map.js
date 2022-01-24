function Map(props) {
  const APIkey = process.env.REACT_APP_GOOGLE_MAPS_EMBEDDED_API_KEY

  const mapURLzoom = `https://www.google.com/maps/embed/v1/view?key=${APIkey}&zoom=20&center=${props.latitude},${props.longitude}`

  const mapURLoverview = `https://www.google.com/maps/embed/v1/view?key=AIzaSyA7-ev5jIqziqi4gLLGEUQbPMr0AfyC4n0&zoom=17&center=${props.latitude},${props.longitude}`

  const mapComponent = props.latitude === undefined ? "" : 
    <>
      <iframe title="map" 
        src={mapURLoverview} 
        width="600" height="450"
        allowFullScreen="" 
        loading="lazy"
      />

      <iframe title="map" 
        src={mapURLzoom} 
        width="600" height="450"
        allowFullScreen="" 
        loading="lazy"
      />
      <p>Maps for {props.latitude}, {props.longitude}</p>
    </>

  return (
    <> 
      {mapComponent} 
    </>
  )
}

export default Map