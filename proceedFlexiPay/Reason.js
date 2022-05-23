import Select from "react-select";

const options = [
  { value: "Eligible", label: "Eligible" },
  { value: "Error", label: "Error" },
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
