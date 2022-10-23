// https://geo.ipify.org/api/v2/country,city?apiKey=at_Q0IFJ9OzFG4wO9oY19PRxDZS2MzwR&ipAddress=8.8.8.8

function App() {
  return (
    <div className="App">
      
        <span>

    <span>
      <p>
        IP Address Tracker
      </p>

      <span>
        <input className="serch-box" type="text" placeholder="Search for any IP address or domain" required/>
        <button type="submit"></button>
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
