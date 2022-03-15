import styled from "styled-components";
import { GRAY_300, MD_400, MD_900 } from "../colors";

const Container = styled.a`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
  padding: 8px 10px;
  color: ${GRAY_300};
  text-decoration: none;
  border-radius: 3px;
  background: ${({ active }) => (active ? MD_900 : `unset`)};
  font-size: 15px;
  font-weight: 500;

  &:hover {
    background: ${MD_900};
  }
`;

const Icon = styled.div``;

const Title = styled.div`
  flex-grow: 4;
`;

const Count = styled.div`
  background: ${MD_400};
  border-radius: 20px;
  padding: 2px;
  text-align: center;
  min-width: 20px;
  height: 20px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;

export default function SidebarMenu({
  icon,
  title,
  count = null,
  active,
  ...props
}) {
  return (
    <Container active={active} {...props}>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
      <Count>6</Count>
    </Container>
  );
}
