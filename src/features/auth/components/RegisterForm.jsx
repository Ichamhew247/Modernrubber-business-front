import { useState } from "react";
import { useDispatch } from "react-redux";
import LoginContainer from "../../auth/components/LoginContainer";
import validateRegister from "../../auth/validators/validate-register";
import InputErrormessage from "../../auth/components/InputErrormessage";
import { toast } from "react-toastify";
import { registerAsync } from "../../auth/slice/auth-slice";
import LoginInput from "./LoginInput";
import { useTranslation } from "react-i18next";
const initialInput = {
  fullName: "",
  userName: "",
  password: "",
  confirmPassword: "",
};
export default function RegisterForm({ onSuccess }) {
  const { t } = useTranslation();
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
          <LoginInput
            placeholder={t("Full Name")}
            name="fullName"
            value={input.fullName}
            onChange={handleChangeInput}
            isInvalid={error.fullName}
          />
          {error.fullName && <InputErrormessage message={error.fullName} />}
        </div>
        <div>
          <LoginInput
            placeholder={t("userName")}
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
            placeholder={t("Password")}
            name="password"
            value={input.password}
            onChange={handleChangeInput}
            isInvalid={error.password}
          />
          {error.password && <InputErrormessage message={error.password} />}
        </div>
        <div>
          <LoginInput
            type="password"
            placeholder={t("Confirm password")}
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={handleChangeInput}
            isInvalid={error.confirmPassword}
          />
          {error.confirmPassword && (
            <InputErrormessage message={error.confirmPassword} />
          )}
        </div>
        <button className="text-center rounded-sm bg-[#2D2D2D] hover:bg-black p-2 text-white transition-all duration-300">
          {t("Sign up")}
        </button>
      </form>
      <div className="flex py-4  justify-center   no-underline text-[#7E7E7E] ">
        <div className="flex gap-4 items-center">
          <div> {t("alreadyhaveuser")}</div>
          <div>
            <LoginContainer />
          </div>
        </div>
      </div>
    </>
  );
}
