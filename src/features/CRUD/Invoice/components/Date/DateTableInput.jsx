import { isValid, parse } from "date-fns";

function DateTableInput({ onDateChange, dateOutside, setDateOutside }) {
  const handleDateChange = (e) => {
    const dateValue = e.target.value;
    setDateOutside(dateValue);

    if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateValue)) {
      const parsedDate = parse(dateValue, "dd/MM/yyyy", new Date());
      if (isValid(parsedDate)) {
        onDateChange(parsedDate);
      } else {
        onDateChange(null);
      }
    } else {
      onDateChange(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="dd/mm/yyyy"
        value={dateOutside}
        onChange={handleDateChange}
      />
    </div>
  );
}

export default DateTableInput;
