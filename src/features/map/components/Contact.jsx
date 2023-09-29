import { useState } from "react";
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
      // toast.error("ไม่ได้รับข้อมูล กรุณากรอกข้อมูลให้ถูกต้อง");
    }
  };
  return (
    <div>
      <div>
        <div className="flex flex-col items-center bg-[#F5EEEA] py-10 m">
          <div className="font-bold text-lg">
            หากต้องการข้อมูลเพิ่มเติม สามารถกรอกอีเมลหรือเบอร์โทร
            เพื่อให้เราติดต่อกลับท่านได้
          </div>
          <form className="flex items-center gap-4" onSubmit={handleSubmitForm}>
            <div>
              <ContactInput
                placeholder="กรอกอีเมลหรือเบอร์โทรศัพท์"
                name="email"
                value={input.email}
                onChange={handleChangeInput}
                isInvalid={error.email}
              />
              {error.email && <InputErrormessage message={error.email} />}
            </div>
            <button className="text-xl bg-[#7E7E7E] hover:bg-[#595858] p-4 text-white w-28 h-12 flex items-center justify-center transition-all duration-300">
              ส่ง
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
