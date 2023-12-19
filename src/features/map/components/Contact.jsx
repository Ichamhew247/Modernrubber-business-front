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
        <div
          className="flex flex-col items-center bg-black 
        xs:py-8 sm:py-10 md:py-10  lg:py-10  xl:py-10 "
        >
          <div
            className="font-bold 
          xs:w-[300px] sm:w-[500px] md:w-[570px] lg:w-[570px] xl:w-fit 
          xs:text-[12px] sm:text-[14px] md:text-[14px]  lg:text-[16px] xl:text-[18px] 
           text-white tracking-widest"
          >
            {t("ContactInbox")}
          </div>
          <form
            className="flex 
            xl:flex-row 
            lg:flex-row 
            md:flex-row 
            sm:flex-row 
            xs:flex-col items-baseline gap-4 mt-4 "
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
            <button
              className="rounded hover:bg-zinc-800
             text-white hover:text-white border-2 
             border-[#3E3E3E] hover:border-[#3E3E3E]
              xl:py-2  xl:w-28 
              lg:py-2  lg:w-28 
              md:py-2  md:w-28 
              sm:py-1  sm:w-28 
              xs:py-1  xs:w-[300px]
              xs:m-auto
              transition-all duration-300"
            >
              {t("Send")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
