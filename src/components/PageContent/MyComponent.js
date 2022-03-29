import styled from "styled-components";

const Parent = styled.div`
  background: yellow;
  padding: 20px;
`;

const Content = styled.div`
  background: purple;
  color: white;
  border: 10px solid red;
  width: 100%;
`;

export default function MyComponent({ initialValue }) {
  return (
    <>
      <Parent>
        <Content>
          <div>MyContent</div>
        </Content>
      </Parent>
    </>
  );
}
