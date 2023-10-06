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
      toast.error("กรุณากรอกข้อมูลให้ถูกต้อง");
    }
  };
  return (
    <div>
      <div>
        <div className="flex flex-col items-center bg-[#3a3022]    py-10 m">
          <div className="font-bold text-lg text-white tracking-wider">
            หากต้องการข้อมูลเพิ่มเติม สามารถกรอกอีเมลหรือเบอร์โทร
            เพื่อให้เราติดต่อกลับท่านได้
          </div>
          <form
            className="flex items-baseline gap-4 mt-4 "
            onSubmit={handleSubmitForm}
          >
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
            <button className="rounded text-base  border-white hover:bg-zinc-800 text-white hover:text-white border-2 hover:border-zinc-800 p-4  w-28 h-10 flex items-center justify-center transition-all duration-300">
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
