import { useState } from "react";
import { useDispatch } from "react-redux";
import LoginInput from "./LoginInput";
import RegisterContainer from "../../../features/auth/components/RegisterContainer";
import validateLogin from "../validators/validate-login";
import InputErrormessage from "./InputErrormessage";
import { login } from "../slice/auth-slice"; // Make sure the import path is correct
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export default function LoginForm({ onSuccess }) {
  const { t } = useTranslation();
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
      const role = await dispatch(login(input));
      console.log("Role:", role);
      toast.success(t("Login successful"));
      await onSuccess();
    } catch (err) {
      toast.info(err.response.data.message);
    }
  };

  return (
    <div
      className="z-50 
    xl:w-[574px]
    lg:w-[574px]
    sm:w-[574px]
    xs:w-[574px]
    "
    >
      <form className="flex flex-col gap-4 " onSubmit={handleSubmitForm}>
        <div>
          <LoginInput
            type="text"
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
        <button
          className="text-center rounded-md bg-[#2D2D2D] hover:bg-black 
        px-10 py-2  
        xl:w-full
        lg:w-full
        md:w-full
        sm:w-full
        xs:w-[306px]
        text-white transition-all duration-300"
        >
          {t("Sign In")}
        </button>
      </form>
      <div
        className="
      xl:w-full
      lg:w-full
      sm:w-full
      xs:w-[300px]
      flex p-4 gap-4 no-underline  text-[#3E3E3E] justify-center"
      >
        <div>{t("No user account?")}</div>
        <div>
          <RegisterContainer />
        </div>
      </div>
    </div>
  );
}
