export default function HeadNameInput({
  name,
  setName,
  address,
  setAddress,
  email,
  setEmail,
  companyTel,
  setCompanyTel,
  descript,
  setDescript,
}) {
  return (
    <>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="ห้างหุ้นส่วนจำกัด โมเดิร์นรับเบอร์ แอนด์ ซัพพลาย"
        autoComplete="off"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="address"
        id="address"
        placeholder="507 ซอยเอกชัย 46 แขวงคลองบางพราน เขตบางบอน กรุงเทพ 10150"
        autoComplete="off"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="modernrubber1@hotmail.com"
        autoComplete="off"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        name="companyTel"
        id="companyTel"
        placeholder="02-8982250"
        autoComplete="off"
        value={companyTel}
        onChange={(e) => setCompanyTel(e.target.value)}
      />
      <input
        type="client"
        name="descript"
        id="descript"
        placeholder="ได้รับบิลไว้ตรวจสอบและพร้อมจะชำระเงินให้ตามรายการข้างล่างนี้"
        autoComplete="off"
        value={descript}
        onChange={(e) => setDescript(e.target.value)}
      />
    </>
  );
}
