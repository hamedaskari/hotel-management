import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "همه" },
          { value: "no-discount", label: "بدون تخفیف" },
          { value: "with-discount", label: "با تخفیف" },
        ]}
      />

      <SortBy
        options={[
          // { value: "name-asc", label: "مرتب براساس نام (A-Z)" },
          // { value: "name-desc", label: "مرتب براساس نام (Z-A)" },
          { value: "regularPrice-asc", label: "مرتب براساس قیمت (از کم)" },
          {
            value: "regularPrice-desc",
            label: "مرتب براساس قیمت (از زیاد)",
          },
          { value: "maxCapacity-asc", label: "مرتب براساس ظرفیت (از کم)" },
          { value: "maxCapacity-desc", label: "مرتب براساس ظرفیت (از زیاد)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
