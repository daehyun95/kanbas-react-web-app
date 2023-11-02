import { useSelector, useDispatch } from "react-redux";
import React, {useState} from "react";
import { setMessage } from "./helloReducer";

function HelloRedux() {
  const { message } = useSelector((state) => state.helloReducer);
  return (
    <div>
      <h1>Hello Redux</h1>
      <button onClick={()=>setMessage("Hello Redux")}>setMessage</button>
      <h2>{message}</h2>
    </div>
  );
}
export default HelloRedux;