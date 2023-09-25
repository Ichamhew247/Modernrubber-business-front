export default function DatesTableInput({ dateTable, setDateTable }) {
  return (
    <>
      <div>
        <input
          type="date"
          name="dateTable"
          id="day"
          placeholder="day"
          // autoComplete="off"
          value={dateTable}
          onChange={(e) => setDateTable(e.target.value)}
        />
      </div>
    </>
  );
}
