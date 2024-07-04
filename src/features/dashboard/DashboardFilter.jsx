import Filter from "../../ui/Filter";

function DashboardFilter() {
  return (
    <Filter
      filterField="last"
      options={[
        { value: "7", label: "این هفته" },
        { value: "30", label: "ماه قبل" },
        { value: "90", label: "سه ماه گذشته" },
      ]}
    />
  );
}

export default DashboardFilter;
