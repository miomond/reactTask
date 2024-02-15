import React, { useState } from "react";
import "./Right.css";
import heads from "../assets/king.jpg" 
import tails from "../assets/write.jpg" 
import Button from '@mui/material/Button';



function Right (){
    const [count,setCount] = useState(0) ;
    const [flage,setFlage] = useState(false);

    let [head,setHead] = useState(0)
    let [tail,setTail] = useState(0)
    function counter() {
        setFlage(!flage);
        setCount(count + 1);
        if (flage) {
            setHead(head + 1);
        }else {
          setTail(tail + 1);
        }
                
    }
    return (
        <div className="right"   >
            
            {flage ? <img src={heads} width={30} alt="heads" /> : <img src={tails} width={30} alt="tails" />}
             <Button variant="contained" onClick={counter}  > Hello world</Button>
             <p> counter {count}</p>
             <p> head counter {head}</p>
             <p> tail counter {tail}</p>
        </div>
    )

}
export default Right;