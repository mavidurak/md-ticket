import styled from "styled-components";

const Container = styled.div`
  display: inline-flex;
  gap: 5px;
`;

export default function GoodPhoneInput({ state, setState }) {
  console.log("GOOD!");
  return (
    <Container>
      <input
        type="text"
        placeholder="212"
        style={{ width: "50px" }}
        maxLength="3"
        value={state.area}
        onChange={(event) => setState({ ...state, area: event.target.value })}
      />
      <input
        type="text"
        placeholder="4448877"
        maxLength="7"
        value={state.phone}
        onChange={(event) => setState({ ...state, phone: event.target.value })}
      />
      {JSON.stringify(state)}
    </Container>
  );
}
