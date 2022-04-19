import styled from "styled-components";
import { useSelector } from "react-redux";
import Logo from "../Logo";
import { MD_800 } from "../colors";
import SidebarMenu from "../SidebarMenu";
import MenuGroup from "../MenuGroup";
import { DashboardIcon } from "../icons";
import SubMenu from "../SubMenu";

const Container = styled.div`
  position: fixed;
  left: 0px;
  height: 100%;
  width: 250px;
  background: ${MD_800};
  color: white;
`;

const SidebarMenus = styled.div`
  padding: 20px;
`;

export default function Sidebar() {
  const auth = useSelector((state) => state.auth);
  console.log("Sidebar rendered!", auth);

  return (
    <Container>
      <Logo />
      <SidebarMenus>
        <SidebarMenu
          title="Dashboard"
          href="https://google.com"
          target="_blank"
          active={true}
          icon={<DashboardIcon />}
          count={6}
        />
        {[1, 2, 3].map((item) => (
          <MenuGroup key={item} title="Base">
            <SidebarMenu title="Blocks" icon={<DashboardIcon />} count={0}>
              <SubMenu>Styles</SubMenu>
              <SubMenu>Options</SubMenu>
              <SubMenu>Forms</SubMenu>
            </SidebarMenu>
            <SidebarMenu
              title="Widgets"
              href="https://google.com"
              target="_blank"
              icon={<DashboardIcon />}
            />
            <SidebarMenu
              title="Layout"
              href="https://google.com"
              target="_blank"
              icon={<DashboardIcon />}
            />
          </MenuGroup>
        ))}
      </SidebarMenus>
    </Container>
  );
}
