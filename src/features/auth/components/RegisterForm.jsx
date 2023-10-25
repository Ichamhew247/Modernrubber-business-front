import { useState } from "react";
import { useDispatch } from "react-redux";
import LoginContainer from "../../auth/components/LoginContainer";
import RegisterInput from "./RegisterInput";
import validateRegister from "../../auth/validators/validate-register";
import InputErrormessage from "../../auth/components/InputErrormessage";
import { toast } from "react-toastify";
import { registerAsync } from "../../auth/slice/auth-slice";
const initialInput = {
  fullName: "",
  userName: "",
  password: "",
  confirmPassword: "",
};
export default function RegisterForm({ onSuccess }) {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: " " });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateRegister(input);
      if (result) {
        return setError(result);
      }
      setError({});
      await dispatch(registerAsync(input)).unwrap();
      toast.success("Register successfull");
      onSuccess();
    } catch (err) {
      toast.info(err.response.data.message);
    }
  };
  return (
    <>
      <form className="flex flex-col gap-4 mb-5" onSubmit={handleSubmitForm}>
        <div>
          <RegisterInput
            placeholder="ชื่อ-นามสกุล"
            name="fullName"
            value={input.fullName}
            onChange={handleChangeInput}
            isInvalid={error.fullName}
          />
          {error.fullName && <InputErrormessage message={error.fullName} />}
        </div>
        <div>
          <RegisterInput
            placeholder="ชื่อผู้ใช้"
            name="userName"
            value={input.userName}
            onChange={handleChangeInput}
            isInvalid={error.userName}
          />
          {error.userName && <InputErrormessage message={error.userName} />}
        </div>
        <div>
          <RegisterInput
            type="password"
            placeholder="รหัสผ่าน"
            name="password"
            value={input.password}
            onChange={handleChangeInput}
            isInvalid={error.password}
          />
          {error.password && <InputErrormessage message={error.password} />}
        </div>
        <div>
          <RegisterInput
            type="password"
            placeholder="ยืนยันรหัสผ่าน"
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={handleChangeInput}
            isInvalid={error.confirmPassword}
          />
          {error.confirmPassword && (
            <InputErrormessage message={error.confirmPassword} />
          )}
        </div>
        <button className="text-center rounded-full p-2 bg-[#6ABD65] text-white transition-all duration-300">
          Sign up
        </button>
      </form>
      <div className="flex py-4  justify-center   no-underline text-[#7E7E7E] ">
        <div className="flex gap-4 items-center">
          <div>มีผู้ใช้แล้ว ? </div>
          <div>
            <LoginContainer />
          </div>
        </div>
      </div>
    </>
  );
}
