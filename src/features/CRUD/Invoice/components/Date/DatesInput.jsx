import { isValid, parse } from "date-fns";

function DatesInput({ onDateChange, dateInside, setDateInside }) {
  const handleDateChange = (e) => {
    const dateValue = e.target.value;
    setDateInside(dateValue);

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
        value={dateInside}
        onChange={handleDateChange}
      />
    </div>
  );
}

export default DatesInput;
