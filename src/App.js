// https://geo.ipify.org/api/v2/country,city?apiKey=at_Q0IFJ9OzFG4wO9oY19PRxDZS2MzwR&ipAddress=8.8.8.8
import { MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet'
import "leaflet/dist/leaflet.css"

function App() {
  return (
    <div className="App">
      
      <span>
        <span className='first-part'>
          <p className='heading'>
            IP Address Tracker
          </p>

          <span>
            <form className='input-form'>
              <input name='input' className="search-box" type="text" placeholder="Search for any IP address or domain" required/>
              <button type="submit" className='submit-btn'><svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/></svg></button>
            </form>
          </span>

        </span>

      

      <span className='details'>
            <span className='details-innerspan'>
              <p className='properties'>IP Address</p>
              <p className='black-bold'>1921239443.34343</p>
            </span>

            <span className='details-innerspan'>
              <p className='properties'>Location</p>
              <p className='black-bold'>new york</p>
            </span>

            <span className='details-innerspan'>
              <p className='properties'>Timezone UTC</p>
              <p className='black-bold'>UTC- 500</p>
            </span>

            <span className='details-innerspan'>
              <p className='properties'>ISP</p>
              <p className='black-bold'>ower name</p>
            </span>
          </span>
      </span>
      <span>
          <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} 
          style={{height:"65vh" ,width:"100%", position:"relative",top:"-9rem"}}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
      </span>
    </div>
  );
}

export default App;
