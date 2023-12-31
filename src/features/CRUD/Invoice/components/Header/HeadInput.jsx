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
  const handleInputChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    if (fieldName === "name") {
      setName(fieldValue);
    } else if (fieldName === "address") {
      setAddress(fieldValue);
    } else if (fieldName === "email") {
      setEmail(fieldValue);
    } else if (fieldName === "companyTel") {
      setCompanyTel(fieldValue);
    } else if (fieldName === "descript") {
      setDescript(fieldValue);
    }
  };

  return (
    <>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="ห้างหุ้นส่วนจำกัด โมเดิร์นรับเบอร์ แอนด์ ซัพพลาย"
        value={name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="address"
        id="address"
        placeholder="507 ซอยเอกชัย 46 แขวงคลองบางพราน เขตบางบอน กรุงเทพ 10150"
        value={address}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="modernrubber1@hotmail.com"
        value={email}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="companyTel"
        id="companyTel"
        placeholder="02-8982250"
        value={companyTel}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="descript"
        id="descript"
        placeholder="ได้รับบิลไว้ตรวจสอบและพร้อมจะชำระเงินให้ตามรายการข้างล่างนี้"
        value={descript}
        onChange={handleInputChange}
      />
    </>
  );
}
