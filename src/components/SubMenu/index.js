import styled from "styled-components";
import { GRAY_300 } from "../colors";

const Link = styled.a`
  display: block;
  margin-bottom: 2px;
  padding: 8px 0px;
  color: ${GRAY_300};
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

export default function SubMenuX({ children, ...props }) {
  return <Link {...props}>{children}</Link>;
}
