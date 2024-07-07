import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

import { useBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import styled from "styled-components";

const TableContainer = styled.div`
  min-height: 100vh;
  height: full;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const StyledTable = styled.table`
  &.table {
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }
`;

const StyledRow = styled.tr`
  &.row {
    background: #222e3a/6%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    border-radius: ${(props) => (props.isFirst ? "8px 0 0 0" : "0")};
  }
`;

const StyledCell = styled.td`
  border: 1px solid #eaeaea;
  background-color: var(--color-grey-50);

  padding: 10px;
  cursor: pointer;
  &:hover {
    background: #222e3a/6%;
  }
`;

const MobileTable = styled(StyledTable)`
  display: none;
  @media only screen and (max-width: 950px) {
    display: inline;
  }
`;

const DesktopTable = styled(StyledTable)`
  @media only screen and (max-width: 950px) {
    display: none;
  }
`;
function BookingTable() {
  const { bookings, isLoading, count } = useBookings();

  if (isLoading) return <Spinner />;

  if (!bookings.length) return <Empty resourceName="رزروی" />;

  return (
    <>
      <DesktopTable>
        <Menus>
          <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
            <Table.Header>
              <div>اتاق</div>
              <div>مهمان</div>
              <div>تاریخ</div>
              <div>اطلاعات</div>
              <div>قیمت</div>
              <div></div>
            </Table.Header>

            <Table.Body
              data={bookings}
              render={(booking) => (
                <BookingRow key={booking.id} booking={booking} />
              )}
            />

            <Table.Footer>
              <Pagination count={count} />
            </Table.Footer>
          </Table>
        </Menus>
      </DesktopTable>
      <MobileTable>
        <TableContainer>
          <div>
            <div>
              <div>
                <StyledTable className="table">
                  <thead>
                    {bookings.map((data, index) => (
                      <StyledRow
                        className="row"
                        isFirst={index === 0}
                        key={index}
                      >
                        <StyledCell>نام اتاق</StyledCell>
                        <StyledCell>مهمان</StyledCell>
                        <StyledCell>وضعیت</StyledCell>
                        <StyledCell>قیمت</StyledCell>
                        <StyledCell>تاریخ ورود</StyledCell>
                        <StyledCell>تاریخ خروج</StyledCell>
                      </StyledRow>
                    ))}
                  </thead>
                  <tbody>
                    {bookings.map((data, index) => (
                      <StyledRow className="row" key={index}>
                        <StyledCell>{data.cabins.name}</StyledCell>
                        <StyledCell>{data.guests.fullName}</StyledCell>
                        <StyledCell>{data.status}</StyledCell>
                        <StyledCell>{data.totalPrice}</StyledCell>
                        <StyledCell>{data.startDate}</StyledCell>
                        <StyledCell>{data.endDate}</StyledCell>
                      </StyledRow>
                    ))}
                  </tbody>
                </StyledTable>
              </div>
            </div>
          </div>
        </TableContainer>
      </MobileTable>
    </>
  );
}

export default BookingTable;
