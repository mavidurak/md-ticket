import styled from "styled-components";
import Button from ".";

const StyledButton = styled(Button)`
  background: red;
  color: white;
`;

export default function RedButton({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
