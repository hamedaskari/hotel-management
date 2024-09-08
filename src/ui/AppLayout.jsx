import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";
import { useState } from "react";
import { BiArrowFromLeft, BiArrowFromRight, BiMenu } from "react-icons/bi";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  @media screen and (max-width: 950px) {
    display: flex;
    flex-direction: column;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow-y: scroll;
  @media screen and (max-width: 1200px) {
    padding: 2rem 1.8rem 4.4rem;
  }
`;
const BtnMenu = styled.button`
  position: absolute;
  width: 4rem;
  height: 4rem;
  top: 1rem;
  z-index: 999;
  border: 1px solid #efefef;
  border-radius: 5px;
  @media screen and (min-width: 950px) {
    display: none;
  }
`;
const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  function handleSideBar() {
    setIsSideBarOpen((cur) => !cur);
  }
  return (
    <StyledAppLayout>
      <Header />
      <BtnMenu onClick={handleSideBar}>
        {isSideBarOpen ? (
          <BiArrowFromLeft color="black" />
        ) : (
          <BiMenu color="black" />
        )}
      </BtnMenu>
      <Sidebar isSideBarOpen={isSideBarOpen} />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
