import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCounters, decreaseCount, increaseCount, increase_wide, increment } from "../features/counter/counterSlice";
const Counter = () => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.counter.step);
  const step_wide = useSelector((state)=> state.counter.step_wide)
  const counters = useSelector((state)=> state.counter.counters)
  const [newItem, setNewItem] = useState(0)
 
  return (
    <div>
      <div className="row">
        <div className="col-6 offset-3">
          <h1 className="text-primary text-center">Homework 1</h1>
          <h1>Step: {step}m</h1>
          <button
            className="btn btn-success"
            onClick={() => dispatch(increment())}
          >
            Walk
          </button>
          <h1>Step Size: {step_wide}</h1>
          <button className="btn btn-warning" onClick={()=>dispatch(increase_wide())}>Increase step size</button>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-6 offset-3">
        <h1 className="text-primary text-center">Homework 2</h1>
          <button className="btn btn-info" onClick={()=>dispatch(addCounters(newItem))}>Add counter</button>
          {
            counters.map((item, index)=> {
              return <div key={index}>
                <button className="btn btn-danger m-2" onClick={()=>dispatch(decreaseCount(index))}>-</button>
                <span>{item}</span>
                <button className="btn btn-primary m-2" onClick={()=>dispatch(increaseCount(index))}>+</button>
              </div>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Counter;
