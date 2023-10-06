import { useState } from "react";
import { useDispatch } from "react-redux";
import LoginInput from "./LoginInput";
import RegisterContainer from "../../../features/auth/components/RegisterContainer";
import validateLogin from "../validators/validate-login";
import InputErrormessage from "./InputErrormessage";
import { login } from "../slice/auth-slice";
import { toast } from "react-toastify";

export default function LoginForm({ onSuccess }) {
  const [input, setInput] = useState({ userName: "", password: "" });
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: " " });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateLogin(input);
      if (result) {
        return setError(result);
      }
      setError({});
      await dispatch(login(input)).unwrap();
      toast.success("Login successfull");
      onSuccess();
    } catch (err) {
      toast.info(err.response.data.message);
    }
  };
  return (
    <>
      <div className="z-50">
        <form className=" flex flex-col gap-4 mb-5" onSubmit={handleSubmitForm}>
          <div>
            <LoginInput
              type="text"
              placeholder="ชื่อผู้ใช้"
              name="userName"
              value={input.userName}
              onChange={handleChangeInput}
              isInvalid={error.userName}
            />
            {error.userName && <InputErrormessage message={error.userName} />}
          </div>
          <div>
            <LoginInput
              type="password"
              placeholder="รหัสผ่าน"
              name="password"
              value={input.password}
              onChange={handleChangeInput}
              isInvalid={error.password}
            />
            {error.password && <InputErrormessage message={error.password} />}
          </div>
          <button className="text-center rounded-full bg-[#6ABD65] text-white transition-all duration-300">
            Sign in
          </button>
        </form>
        <div className="flex gap-4 no-underline text-[#7E7E7E] justify-center">
          <div>ยังไม่มีผู้ใช้ ? </div>
          <div>
            <RegisterContainer />
          </div>
        </div>
      </div>
    </>
  );
}
