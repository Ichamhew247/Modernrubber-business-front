import { useTranslation } from "react-i18next";
export default function InputClient({ client, setClient }) {
  const { t } = useTranslation();
  const handleInputChange = (e) => {
    setClient(e.target.value);
  };

  return (
    <input
      type="text"
      name="client"
      placeholder={t("Customer company name")}
      autoComplete="off"
      value={client}
      onChange={handleInputChange}
      className="
      xl:w-[510px]
      lg:w-[510px]
      sm:w-[334px]
      xs:w-[294px]
      "
    />
  );
}
