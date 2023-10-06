export default function InputClient({ client, setClient }) {
  return (
    <>
      <input
        type="text"
        name="client"
        id="client"
        placeholder="กรอกชื่อบริษัทลูกค้า"
        autoComplete="off"
        value={client}
        onChange={(e) => setClient(e.target.value)}
        className="w-[490px]"
      />
    </>
  );
}
