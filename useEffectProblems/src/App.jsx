import { useState, useEffect } from "react";
import "./App.css";
import Theme from "./assets/Theme";
import CountDown from "./assets/CountDown";
import { ProductDetails } from "./assets/AbortController";
function StockTicker({ symbol }) {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const socket = {
      intervalId: setInterval(() => {
        let price =(Math.random() * 90+20).toFixed(2);
        setPrice(price);
        console.log(`price for [${symbol}]is : ${price}`)
      }, 2000),
      close() {
        clearInterval(this.intervalId);
      },
    };

    return () => {
      socket.close();
    };
  }, [symbol]);

  return <h1>{symbol}: ${price}</h1>;
}


// Throttle utility function
function throttle(fn, delay) {
  let lastCall = 0;
  let timeoutId;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall < delay) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        lastCall = Date.now();
        fn(...args);
      }, delay - (now - lastCall));
    } else {
      lastCall = now;
      fn(...args);
    }
  };
}

function NoteApp() {
  const [count, setCount] = useState("");

  useEffect(() => {
    document.title = count;
  }, [count]);

  // Define throttled handler inside useEffect ONCE
  useEffect(() => {
    const inputEl = document.getElementById("title-input");
    
    function handleChange(e) {
      setCount(e.target.value);
    }

    const throttled = throttle(handleChange, 2000);

    // Attach throttled handler manually
    if (inputEl) {
      inputEl.addEventListener("input", throttled);
    }

    return () => {
      if (inputEl) {
        inputEl.removeEventListener("input", throttled);
      }
    };
  }, []);

  return <input id="title-input" type="text" placeholder="Enter Title" />;
}



function PaymentMethod({ mode }) {
  let [status  , setStatus]= useState("Processing")
  // 🧠 Trigger save effect only when mode switches Cash → Card
useEffect(()=>{
switch (mode) {
  case 'cash':
    setStatus("Saving")
    break;
case 'card':
  setStatus("Processing")
    break;
}
},[mode])


return(
  <>
  <div className="statsus">
    {status}
  </div>
  </>
)
}

function App() {
  
  const [symbol, setSymbol]=useState("TSLA")
  const [paymentmode , setMode]= useState('card')
 let [id , setID]= useState("p001")
  return (
    <>

<CountDown/>
<span className="status" onClick={()=>{
if(paymentmode==='card'){
    setMode("cash")
  } else {
    setMode('card')
  }

}}> <PaymentMethod mode={paymentmode}  />
</span>
      <ProductDetails id={id}/>

      <MouseTracker /> 
      <Theme/>
        <div style={{ padding: "2rem" }}>
      <button onClick={() => setSymbol("AAPL")}>AAPL</button>
      <button onClick={() => setSymbol("GOOG")}>GOOG</button>
      <button onClick={() => setSymbol("TSLA")}>TSLA</button>
      <StockTicker symbol={symbol} />
    </div>
    </>
  );
}

function MouseTracker() {
  // 🧠 Track and log the mouse position on first mouse move only
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hasTracked, setHasTracked] = useState(false);


  useEffect(() => {
    function handleChange(e) {
      let posX = e.clientX;
      let posY = e.clientY;
        setPosition({ x: posX, y: posY });
        console.log("Position was set");
      
    }
    window.addEventListener("mousemove", handleChange, {once:true});

   
  }, []);

  return (
    <>
      <div style={{ height: 600 }}>Move your mouse</div>
      <p>
        x:{position.x} y:{position.y}
      </p>
    </>
  );
}

export default App;
