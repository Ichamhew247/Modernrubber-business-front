// import validateRegister from "../../../validators/validate-register";
import { useState } from "react";
import LoginContainer from "./LoginContainer";
import RegisterInput from "./RegisterInput";
import validateRegister from "../../../validators/validate-register";
import InputErrormessage from "./InputErrormessage";
const initialInput = {
  fullName: "",
  userName: "",
  password: "",
  confirmPassword: "",
};
export default function RegisterForm() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    emailOrMobile: "",
    password: "",
    confirmPassword: "",
  });
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const result = validateRegister(input);
    console.dir(result);
    if (result) {
      return setError(result);
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
        <button className="text-center rounded-full bg-[#6ABD65] text-white ">
          Sign up
        </button>
      </form>
      <div className="flex gap-4 no-underline text-[#7E7E7E] justify-center">
        <div>มีผู้ใช้แล้ว ? </div>
        <div>
          <LoginContainer />
        </div>
      </div>
    </>
  );
}
