import LoginInput from "./LoginInput";
import RegisterContainer from "./RegisterContainer";

export default function LoginForm() {
  return (
    <>
      <div className="z-50">
        <form className=" flex flex-col gap-4 mb-5">
          <LoginInput placeholder="ชื่อผู้ใช้" />
          <LoginInput placeholder="รหัสผ่าน" />
          <button className="text-center rounded-full bg-[#6ABD65] text-white ">
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
