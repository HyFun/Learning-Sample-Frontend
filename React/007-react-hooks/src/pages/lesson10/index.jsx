import React from "react";
import useRequest from "./useRequest";

export default function App() {
  const { loading, setLoading, data } = useRequest();
  return (
    <div>
      <h3>课时10：useRequest使用</h3>
      <button onClick={()=>{setLoading(true)}}>刷新</button>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <>
          <h4>{data.data[0].name}</h4>
          <img src={data.data[0].poster} alt="" />
          <p>{data.data[0].description}</p>
        </>
      )}
    </div>
  );
}
