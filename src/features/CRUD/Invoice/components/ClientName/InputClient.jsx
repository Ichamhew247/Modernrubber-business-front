// import React from "react";

export default function InputClient({
  client,
  setClient,
  // descript,
  // setDescript,
}) {
  return (
    <>
      <input
        type="client"
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
