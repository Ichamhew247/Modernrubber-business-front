import { useState } from "react";
import { useTranslation } from "react-i18next";
import InputErrormessage from "../../../features/auth/components/InputErrormessage";
import ContactInput from "../../../features/contact/ContactInput";
import validateContact from "../../../features/auth/validators/validate-contact";
import { useDispatch } from "react-redux";
import { contactAsync } from "../../../features/contact/slice/contact-slice";
import { toast } from "react-toastify";
const initialInput = {
  email: "",
};
export default function Contact() {
  const { t } = useTranslation();
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateContact(input);
      if (result) {
        return setError(result);
      }
      toast.success("ได้รับข้อมูลแล้ว");
      setError({});
      await dispatch(contactAsync(input)).unwrap();
    } catch (err) {
      toast.error("กรุณากรอกข้อมูลให้ถูกต้อง");
    }
  };
  return (
    <div>
      <div>
        <div className="flex flex-col items-center bg-black    py-10 m">
          <div className="font-bold text-[16px]  text-white tracking-widest">
            {t("ContactInbox")}
          </div>
          <form
            className="flex items-baseline gap-4 mt-4 "
            onSubmit={handleSubmitForm}
          >
            <div className="text-[16px]">
              <ContactInput
                placeholder={t("placeholderContact")}
                name="email"
                value={input.email}
                onChange={handleChangeInput}
                isInvalid={error.email}
              />
              {error.email && <InputErrormessage message={error.email} />}
            </div>
            <button className="rounded   hover:bg-zinc-800 text-white hover:text-white border-2 border-[#3E3E3E] hover:border-[#3E3E3E] p-4  w-28 h-10 flex items-center justify-center transition-all duration-300">
              {t("Send")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
