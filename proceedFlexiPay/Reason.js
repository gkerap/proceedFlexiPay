import Select from "react-select";

const options = [
  { value: "Eligible", label: "Eligible" },
  { value: "Error", label: "Error" },
  { value: "Not up to the guarantee", label: "Not up to the guarantee" },
  {
    value: "Employee already requested for thr month",
    label: "Employee already requested for thr month",
  },
  { value: "Missing Info", label: "Missing Info" },
];

const Reason = () => (
  <>
    <div className="py-4">
      <Select options={options} />
    </div>
  </>
);
export default Reason;
