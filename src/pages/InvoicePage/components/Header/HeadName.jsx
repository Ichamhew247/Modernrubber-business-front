export default function HeadName({ name, address, email, companyTel }) {
  return (
    <>
      <main className="flex flex-col gap-4 text-center tracking-wide">
        <div className="text-2xl ">
          {name || "ห้างหุ้นส่วนจำกัดโมเดิร์นรับเบอร์ แอนด์ ซัพพลาย"}
        </div>

        <main className="flex flex-col  tracking-widest">
          <div>
            {address ||
              "507 ซอยเอกชัย 46 แขวงคลองบางพราน เขตบางบอน กรุงเทพ 10150 "}
          </div>
          <div className="flex text-center justify-center gap-4 tracking-widest">
            <div>{email || "modernrubber1@hotmail.com"}</div>
            <div>{companyTel || "Tel. 02-8982250"}</div>
          </div>
        </main>
      </main>
    </>
  );
}
