import LoginContainer from "./LoginContainer";
import RegisterInput from "./RegisterInput";

export default function RegisterForm() {
  return (
    <>
      <form className="flex flex-col gap-4 mb-5">
        <RegisterInput placeholder="ชื่อ-นามสกุล" />
        <RegisterInput placeholder="ชื่อผู้ใช้" />
        <RegisterInput placeholder="อีเมล" />
        <RegisterInput placeholder="รหัสผ่าน" />
        <RegisterInput placeholder="ยืนยันรหัสผ่าน" />
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
