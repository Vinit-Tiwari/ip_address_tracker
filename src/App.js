// https://geo.ipify.org/api/v2/country,city?apiKey=at_Q0IFJ9OzFG4wO9oY19PRxDZS2MzwR&ipAddress=8.8.8.8
import './index.css';


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

        <span>
          <span>
            <p>IP Address</p>
          </span>

          <span>
            <p>Location</p>
          </span>

          <span>
            <p>Timezone UTC</p>
          </span>

          <span>
            <p>ISP</p>
          </span>
        </span>
      </span>

    </div>
  );
}

export default App;
