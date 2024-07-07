import styled from "styled-components";
import { Link } from "react-router-dom";

import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import CheckoutButton from "./CheckoutButton";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    border: 1px solid var(--color-grey-200);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;

  return (
    <StyledTodayItem>
      {status === "تاییدنشده" && <Tag type="green">تاییدنشده</Tag>}
      {status === "واردشده" && <Tag type="blue">واردشده</Tag>}

      <Flag
        src={` https://flagcdn.com/${guests.countryFlag.toLowerCase()}.svg `}
        alt={`پرچم ${guests.countryFlag}`}
      />
      <Guest>{guests.fullName}</Guest>
      <div>{numNights} شب</div>

      {status === "تاییدنشده" && (
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          وارد کردن
        </Button>
      )}
      {status === "واردشده" && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}

export default TodayItem;
