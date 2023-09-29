export default function ClientName({ client, descript }) {
  return (
    <>
      <div className=" text-base">{client || "-"}</div>
      <div className="text-sm">
        {descript ||
          "ได้รับบิลไว้ตรวจสอบและพร้อมจะชำระเงินให้ตามรายการข้างล่างนี้"}
      </div>
    </>
  );
}
