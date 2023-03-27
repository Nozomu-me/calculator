import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

export default function App() {
  const [res, setRes] = useState(0);
  const [nbrs, setNumber] = useState([]);
  const [op, setOp] = useState(null);
  const [display, setDisplay] = useState(0)
  let numbers = Array.from({length: 9}, (_, i) => i + 1);

  function getNumber(e) {
    setNumber((prev) => {
      return [...prev, e.target.innerText];
    });
  }
  function handleAdd(e) {
    if (res === 0) {
      let result = +nbrs.join("");
      setRes(result);
      setOp("+");
    } 
    else {
      if (op === "+") {
        setRes((prev) => (prev += +nbrs.join("")));
      }
      if (op === "-") setRes((prev) => (prev -= +nbrs.join("")));
      if (op === "/") setRes((prev) => (prev /= +nbrs.join("")));
      if (op === "*") setRes((prev) => (prev *= +nbrs.join("")));

      setOp("+");
    }
    setNumber([]);
  }

  function handleMinus(e) {
    if (res === 0) {
      let result = +nbrs.join("");
      setRes(result);
      setOp("-");
    } 
    else {
      if (op === "+") {
        setRes((prev) => (prev += +nbrs.join("")));
      }
      if (op === "-") setRes((prev) => (prev -= +nbrs.join("")));
      if (op === "/") setRes((prev) => (prev /= +nbrs.join("")));
      if (op === "*") setRes((prev) => (prev *= +nbrs.join("")));

      setOp("-");
    }
    setNumber([]);
  }

  function handleDiv(e) {
    if (res === 0) {
      let result = +nbrs.join("");
      setRes(result);
      setOp("/");
    } 
    else {
      if (op === "+") {
        setRes((prev) => (prev += +nbrs.join("")));
      }
      if (op === "-") setRes((prev) => (prev -= +nbrs.join("")));
      if (op === "/") setRes((prev) => (prev /= +nbrs.join("")));
      if (op === "*") setRes((prev) => (prev *= +nbrs.join("")));

      setOp("/");
    }
    setNumber([]);
  }

  function handleMult(e) {
    if (res === 0) {
      let result = +nbrs.join("");
      setRes(result);
      setOp("*");
    } 
    else {
      if (op === "+") {
        setRes((prev) => (prev += +nbrs.join("")));
      }
      if (op === "-") setRes((prev) => (prev -= +nbrs.join("")));
      if (op === "/") setRes((prev) => (prev /= +nbrs.join("")));
      if (op === "*") setRes((prev) => (prev *= +nbrs.join("")));
      setOp("*");
    }
    setNumber([]);
  }

  function handleEq(e) {
    if (op === "+") {
      setRes((prev) => {
        return prev + (+nbrs.join(''))
      });
    }
    if (op === "-") {
      setRes((prev) => {
        return prev - (+nbrs.join(''))
      });
    }
    if (op === "/") {
      setRes((prev) => {
        return prev / (+nbrs.join(''))
      });
    }
    if (op === "*") {
      setRes((prev) => {
        return prev * (+nbrs.join(''))
      });
    }
    setOp('=')
    setNumber([]);
  }
  useEffect(() => {
    if(op == '=' && nbrs.length === 0)
    {
      console.log(res);
      setDisplay(res)
      console.log('dis = ',display);
      // setOp(null)
      setRes(0);
    }
    else{
      console.log("hna")
      if(nbrs.length > 0)
        setDisplay(+nbrs.join(""))
      else {
        setDisplay(res)
      }
    }
  },[nbrs,op])
  return (
    <div className='container'>
      <div className='calc'>
        {/* <label>
          result : */}
          <input type='text' value={display} />
        {/* </label> */}
        {/* <div> */}
          <div  className="calc-container">
            <div className='numbers'>
              {numbers.map((el) => {
                return (
                  <button className="nbrs" key={el} onClick={(e) => getNumber(e)}>
                    {el}
                  </button>
                );
              })}
            </div>
            <div className='ops1'>
              <button className="op" onClick={(e) => handleAdd(e)}>
                +
              </button>
              <button className="op" onClick={(e) => handleMinus(e)}>
                -
              </button>
              <button className="op" onClick={(e) => handleDiv(e)}>
                /
              </button>
              <button className="op" onClick={(e) => handleMult(e)}>
                *
              </button>
            </div>
            <div className='ops2'>
              <button className="nbrs"  onClick={(e) => getNumber(e)}>
                    0
                  </button>
              <button className="ac">
                AC
              </button>
              <button className="op" onClick={(e) => handleEq(e)}>
                =
              </button>
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}
