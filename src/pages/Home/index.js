import { useState } from "react";
import BadPhoneInput from "./BadPhoneInput";
import GoodPhoneInput from "./GoodPhoneInput";

export default function HomePage() {
  const [state, setState] = useState({
    good: {
      area: "212",
      phone: "1112233",
    },
    bad: "212-1112233",
  });

  const handleClick = () => {
    setState({
      good: {
        area: "999",
        phone: "8887766",
      },
      bad: "9998887766",
    });
  };

  return (
    <>
      <h1>
        HomePage: {state.area}-{state.phone}
      </h1>
      Good:
      <GoodPhoneInput
        state={state.good}
        setState={(value) => setState({ ...state, good: value })}
      />
      <br />
      Bad:
      <BadPhoneInput
        value={state.bad}
        onChange={(value) => setState({ ...state, bad: value })}
      />
      <br />
      <button type="button" onClick={handleClick}>
        Set new phone
      </button>
    </>
  );
}
