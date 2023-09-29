export default function Signature() {
  return (
    <>
      <div className="flex flex-col m-11 gap-5 text-sm">
        <div className="flex justify-around ">
          <div>ผู้วางบิล..............................................</div>
          <div>ผู้รับวางบิล............................................</div>
        </div>

        <div className="flex justify-around">
          <div>วันที่.....................................................</div>
          <div>นัดชำระวันที่..........................................</div>
        </div>
      </div>
    </>
  );
}
