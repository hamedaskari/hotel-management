import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  transition: 0.5s;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  @media screen and (max-width: 950px) {
    /* display: none; */
    position: absolute;
    transform: ${(props) =>
      props.className === "sideBarOpen"
        ? "translate(0px, 0px)"
        : "translate(400px, 0px)"};
    height: 100%;
    z-index: 100;
    box-shadow: 1rem 2rem 2rem;
  }
`;

function Sidebar({ isSideBarOpen }) {
  return (
    <StyledSidebar
      className={`${isSideBarOpen ? "sideBarOpen" : "sidebarClose"}`}
    >
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
