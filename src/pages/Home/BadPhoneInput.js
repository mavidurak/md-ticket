import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: inline-flex;
  gap: 5px;
`;

/*

## PhoneInput

1- PhoneInput diye bir şey var.
2- PhoneInput'u yükle
3- İlk render'a başla.
4- state'leri "incele"
4.1- ilk useState'e bak
4.2. bu state ilk kez mi inceleniyor.
4.3. default value'sunu set et;
4.3.1. value'yu parçala
5. DOM'u güncelle.


## 2. aşamadaki render
4- state'leri "incele"
4.1- ilk useState'e bak
4.2. bu state ilk kez mi inceleniyor?
5. DOM'u güncelle.


*/

export default function BadPhoneInput({ value = null, onChange }) {
  const [state, setState] = useState({
    area: value ? value.substr(0, 3) : "",
    phone: value ? value.substr(4) : "",
  });

  console.log("BAD");

  const handleChange = ({ event, key }) => {
    setState({
      ...state,
      [key]: event.target.value,
    });
  };

  useEffect(() => {
    onChange(`${state.area}-${state.phone}`);
  }, [state]);

  useEffect(() => {
    setState({
      area: value ? value.substr(0, 3) : "",
      phone: value ? value.substr(4) : "",
    });
  }, [value]);

  return (
    <Container>
      <input
        type="text"
        placeholder="212"
        style={{ width: "50px" }}
        maxLength="3"
        value={state.area}
        onChange={(event) => handleChange({ event, key: "area" })}
      />
      <input
        type="text"
        placeholder="4448877"
        maxLength="7"
        value={state.phone}
        onChange={(event) => handleChange({ event, key: "phone" })}
      />
      {JSON.stringify(state)}
    </Container>
  );
}
