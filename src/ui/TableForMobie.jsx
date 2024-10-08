import { createContext, useContext } from "react";
import styled from "styled-components";

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);
  font-family: "Vazir";
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;

  overflow: hidden;
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  @media only screen and (max-width: 950px) {
    padding: 1.6rem 0.4rem;
    column-gap: 1.4rem;
    grid-template-columns: 0.8fr 1.5fr 2.2fr 1.5fr 1.5fr 0fr;
  }
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const TableMoobileContext = createContext();

function TableForMobile({ columns, children }) {
  return (
    <TableMoobileContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableMoobileContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableMoobileContext);
  return (
    <StyledHeader role="row" columns={columns} as="header">
      {children}
    </StyledHeader>
  );
}
function Row({ children }) {
  const { columns } = useContext(TableMoobileContext);
  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  );
}

function Body({ data, render }) {
  if (!data.length)
    return <Empty>در این لحظه هیچ داده ای برای نمایش وجود ندارد</Empty>;

  return <StyledBody>{data.map(render)}</StyledBody>;
}

TableForMobile.Header = Header;
TableForMobile.Body = Body;
TableForMobile.Row = Row;
TableForMobile.Footer = Footer;

export default TableForMobile;
