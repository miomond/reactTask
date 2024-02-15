import "./Left.css";
import heads from "../assets/king.jpg";
import tails from "../assets/write.jpg";
import Button from "@mui/material/Button";
import { useState } from "react";

function Left() {
  const [count, setCount] = useState(0);
  const [flage, setFlage] = useState(false);

  let [head, setHead] = useState(0);
  let [tail, setTail] = useState(0);
  function counter() {
    setFlage(!flage);
    
    setCount(count + Math.floor(Math.random() * 2));
    
    if (count % 2 == 0) {
      setHead(head + 1);
      setFlage(true)
    } else {
      setTail(tail + 1);
      setFlage(false)
    }
  }

  return (
    <div className="left">
     {flage ? <img src={heads} width={150} alt="heads" /> : <img src={tails} width={150} alt="tails" />}
             <Button variant="contained" onClick={counter}  > Hello world</Button>
             <p> counter {count}</p>
             <p> counter for head {head}</p>
             <p> counter for tail{tail}</p>
    </div>
  );
}
export default Left;
