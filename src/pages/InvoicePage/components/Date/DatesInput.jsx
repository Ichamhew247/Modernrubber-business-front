export default function DatesInput({ day, setDay }) {
  return (
    <>
      <div>
        <input
          type="date"
          name="day"
          id="day"
          placeholder="day"
          // autoComplete="off"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
    </>
  );
}
