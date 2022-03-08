import { StyledButton } from "./styles";

export default function Button({
  children,
  type = "button",
  onClick,
  ...props
}) {
  const handleClick = () => {
    console.log("Click event is sending to server");
    onClick();
  };

  return (
    <StyledButton type={type} onClick={handleClick} {...props}>
      {children}
    </StyledButton>
  );
}
