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
      className="w-[490px]"
    />
  );
}
