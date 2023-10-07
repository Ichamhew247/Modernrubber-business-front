export default function InputClient({ client, setClient }) {
  const handleInputChange = (e) => {
    setClient(e.target.value);
  };

  return (
    <input
      type="text"
      name="client"
      placeholder="กรอกชื่อบริษัทลูกค้า"
      autoComplete="off"
      value={client}
      onChange={handleInputChange}
      className="w-[490px]"
    />
  );
}
