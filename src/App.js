import React, {useState, useEffect} from "react"
import './App.css';
import Quagga from "quagga"
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Barscan from './Components/BarcodeScanner'

function App() {
  const [startScan, setStartScan] = useState(false)

  const handleScanner = () => {
    setStartScan(!startScan)
  }

  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <div>
            <div>
              <button style={{"color": "red", fontSize:"20px"}} onClick = {handleScanner}>{startScan ? "Stop Scan" : "Start Scan" }</button>
            </div>
            <div style={{diplsay: "flex", alignSelf:"center"}}>
              {startScan ? <Barscan/> : <div>Yes its working</div>}
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;