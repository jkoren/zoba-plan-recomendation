import mockMap from '../images/mockMap.png'

function Map(props) {
  const mapComponent = props.latitude === undefined ? "" : 
  <>
    <img src={mockMap} alt="mock map" width="500"/>
    <p>Map for {props.latitude}, {props.longitude}</p>
  </>

  return (
    <> 

      {mapComponent} 
    
    </>
  )
}

export default Map