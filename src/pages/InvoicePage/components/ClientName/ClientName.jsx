export default function ClientName({ client, descript }) {
  return (
    <>
      <div className="font-semibold text-base">
        {client || "*ชื่อบริษัทลูกค้า*"}
      </div>
      <div className="text-sm">
        {descript ||
          "ได้รับบิลไว้ตรวจสอบและพร้อมจะชำระเงินให้ตามรายการข้างล่างนี้"}
      </div>
    </>
  );
}
