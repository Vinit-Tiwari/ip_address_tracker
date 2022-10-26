// https://geo.ipify.org/api/v2/country,city?apiKey=at_Q0IFJ9OzFG4wO9oY19PRxDZS2MzwR&ipAddress=8.8.8.8
import { MapContainer, TileLayer} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { useState, useEffect } from 'react';
import MakerPosition from './MarkerPosition';

function App() {

  const [address, setAddress]=useState(null)
  const [ipAddress, setIPaddress]=useState("")

  useEffect(()=>{
    try{
      const getInitialData=async()=>{
        const res=await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_18cWRR3scEnk3zEoEm2h50szSr7wY&ipAddress=192.212.174.101`)
        const data=await res.json()
        setAddress(data);
      }
  
      getInitialData()
    }
    catch(error){
      console.trace(error);
    }
  },[])

 function getEnteredAddress(){
      const getInitialData=async()=>{
        const res=await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_18cWRR3scEnk3zEoEm2h50szSr7wY&ipAddress=${ipAddress}`)
        const data=await res.json()
        setAddress(data);
      } 
  
      getInitialData()
 }

 function handleSubmit(e){
    e.preventDefault()
    getEnteredAddress()
 }

  return (
    <div className="App">
      
      <span>
        <span className='first-part'>
          <p className='heading'>
            IP Address Tracker
          </p>

          <span>
            <form onSubmit={handleSubmit} className='input-form'>
              <span className='input-parent'>
                <input name='input' className="search-box" type="text" placeholder="Search for any IP address or domain" required value={ipAddress} onChange={(e) => {setIPaddress(e.target.value)}}/>
                <button type="submit" className='submit-btn'><svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/></svg></button>
              </span>
      
            </form>
          </span>

        </span>

      {address && <>
      
      <span className='details'>
            <span className='details-innerspan max-width'>
              <p className='properties'>IP Address</p>
              <p className='black-bold outputs'>{address.ip}</p>
            </span>

            <span className='details-innerspan max-width'>
              <p className='properties'>Location</p>
              <p className='black-bold outputs'>{address.location.city},{address.location.region}</p>
            </span>

            <span className='details-innerspan max-width'>
              <p className='properties'>Timezone</p>
              <p className='black-bold outputs'>UTC {address.location.timezone}</p>
            </span>

            <span className='details-innerspan max-width'>
              <p className='properties'>ISP</p>
              <p className='black-bold outputs'>{address.isp}</p>
            </span>
          </span>
      <span>
          <MapContainer center={[address.location.lat,address.location.lng]} zoom={13} scrollWheelZoom={true} 
          style={{height:"65vh" ,width:"100%", position:"relative"}}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            <MakerPosition address={address}/>
          </MapContainer>
      </span>
      </>}
      </span>

    </div>
  );
}

export default App;
