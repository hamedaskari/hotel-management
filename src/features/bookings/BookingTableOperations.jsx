import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "همه" },
          { value: "خارجشده", label: "خارج شده" },
          { value: "واردشده", label: "وارد شده" },
          { value: "تاییدنشده", label: "تایید نشده" },
        ]}
      />

      <SortBy
        options={[
          {
            value: "startDate-desc",
            label: "مرتب براساس تاریخ (از قدیم)",
          },
          {
            value: "startDate-asc",
            label: "مرتب براساس تاریخ (از جدید)",
          },
          {
            value: "totalPrice-desc",
            label: "مرتب براساس قیمت (از زیاد)",
          },
          { value: "totalPrice-asc", label: "مرتب براساس قیمت (از کم)" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
