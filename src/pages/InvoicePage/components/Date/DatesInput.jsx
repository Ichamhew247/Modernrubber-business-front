// DatesInput.js
// import { useState } from "react";
import { isValid, parse } from "date-fns";

function DatesInput({ onDateChange, inputValueMew, setInputValueMew }) {
  // const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (e) => {
    const dateValue = e.target.value;
    setInputValueMew(dateValue);

    // Check if the entered date is in the "dd/mm/yyyy" format
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateValue)) {
      const parsedDate = parse(dateValue, "dd/MM/yyyy", new Date());
      if (isValid(parsedDate)) {
        // Call the onDateChange function and pass the parsed date
        onDateChange(parsedDate);
      } else {
        // Call the onDateChange function with null to indicate an invalid date
        onDateChange(null);
      }
    } else {
      // Call the onDateChange function with null for invalid input format
      onDateChange(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="dd/mm/yyyy"
        value={inputValueMew}
        onChange={handleDateChange}
      />
    </div>
  );
}

export default DatesInput;
// // DatesInput.js
// import { useState } from "react";
// import { format, isValid, parse } from "date-fns";

// function DatesInput({ onDateChange }) {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [inputValue, setInputValue] = useState("");

//   const handleDateChange = (e) => {
//     const dateValue = e.target.value;
//     setInputValue(dateValue);

//     // Check if the entered date is in the "dd/mm/yyyy" format
//     if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateValue)) {
//       const parsedDate = parse(dateValue, "dd/MM/yyyy", new Date());
//       if (isValid(parsedDate)) {
//         setSelectedDate(parsedDate);
//         // Call the onDateChange function and pass the parsed date
//         onDateChange(parsedDate);
//       } else {
//         setSelectedDate(null);
//         // Call the onDateChange function with null to indicate an invalid date
//         onDateChange(null);
//       }
//     } else {
//       setSelectedDate(null);
//       // Call the onDateChange function with null for invalid input format
//       onDateChange(null);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="dd/mm/yyyy"
//         value={inputValue}
//         onChange={handleDateChange}
//       />
//       {selectedDate && (
//         <div>Formatted Date: {format(selectedDate, "dd/MM/yyyy")}</div>
//       )}
//     </div>
//   );
// }

// export default DatesInput;
