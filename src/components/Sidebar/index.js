import styled from "styled-components";
import Logo from "../Logo";
import { MD_800 } from "../colors";
import SidebarMenu from "../SidebarMenu";
import { DashboardIcon } from "../icons";

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
        />
        <SidebarMenu
          title="Blocks"
          href="https://google.com"
          target="_blank"
          icon={<DashboardIcon />}
        />
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
      </SidebarMenus>
    </Container>
  );
}
