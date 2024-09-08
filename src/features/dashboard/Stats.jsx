import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1.
  // const numBookings = bookings.length;

  // // 2.
  // const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // // 3.
  // const checkins = confirmedStays.length;

  // 4.
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="رزرو ها"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={10}
      />
      <Stat
        title="فروش"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(2500000)}
      />
      <Stat
        title="ورودی ها"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={5}
      />
      <Stat
        title="نرخ رزرو"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;
