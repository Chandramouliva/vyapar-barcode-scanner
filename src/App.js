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
          <div style={{float: "left"}} ></div>
          <div style={{float: "right"}}>
            <div>
              <button style={{"color": "red"}} onClick = {handleScanner}>{startScan ? "Stop Scan" : "Start Scan" }</button>
            </div>
            <div style={{width: "20px !important", height: "20px !important"}}>
              {startScan ? <Barscan/> : <div>Yes its working</div>}
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;