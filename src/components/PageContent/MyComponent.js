import { useEffect, useState } from "react";

// UI = f(props + state)
/**
 * MEMORY:
 *
 * STATA-0: 101
 */
/*

          A
   B      C          D 
B1 B2   C1 C2    D1     D2
   ad          button  email


*/

export default function MyComponent({ initialValue }) {
  const [state, setState] = useState(initialValue);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   console.log("Data geliyor");
  //   fetch("https://api.ikinciel.dev/api/places").then(async (response) => {
  //     const { data } = await response.json();
  //     console.log("Data geldi");
  //     setData(data);
  //   });
  // }, []);

  console.log("RENDER");

  return (
    <div style={{ padding: "10px" }}>
      <div>Value: {state}</div>
      <button onClick={() => setState(state + 1)}>Arttır</button>
    </div>
  );
}
