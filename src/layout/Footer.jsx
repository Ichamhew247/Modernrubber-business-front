import { FaPhone } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import { GoLinkExternal } from "react-icons/go";
import logowhite from "../assets/logowhite.png";
import { SiGooglemaps } from "react-icons/si";
export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex  gap-[91px]  w-full h-[160px]  bg-[#2C2C2C] text-white  ">
        <div className="ml-[170px]   ">
          <img className="w-52 pt-4" src={logowhite} />
        </div>
        <main className="ADDRESS flex gap-4  ">
          <div>
            <SiGooglemaps className="text-xl  mt-6" />
          </div>
          <div className="flex flex-col gap-4 mt-5 text-xs">
            <div className="flex flex-col gap-1">
              <p>{t("Address")}</p>
              <p>{t("Address2")}</p>
              <p>{t("Address3")}</p>
            </div>
            <div className="flex gap-1 hover:bg-[#3E3E3E]  rounded-sm w-24">
              <a
                className=" text-xs tracking-wider  hover:no-underline underline  "
                role="button"
                href="https://maps.app.goo.gl/inzhk4uhWzrDpqWd6?g_st=il"
                target="_blank"
                rel="noreferrer"
              >
                {t("View Map")}
              </a>
              <GoLinkExternal className="w-2 mt-[-3px]  " />
            </div>
          </div>
        </main>

        <main className="CALL gap-7 flex flex-col text-xs ">
          <div className="flex gap-4">
            <FaPhone className="text-base mt-6" />
            <div className="flex flex-col gap-2">
              <p className="mt-5">081-692-278-0 ,</p>
              <p>02-898-225-0</p>
            </div>
          </div>
          <main className="flex flex-col gap-1 ">
            <div className="flex gap-4  ">
              <div className="mt-[8px]">
                <GrMail className="text-base mt-[-8px] " />
              </div>
              <p className="mt-[-4px]">modernrubber1@hotmail.com</p>
            </div>
            <div className="flex gap-1 ml-8  rounded-sm w-20 hover:bg-[#3E3E3E]">
              <a
                className="  text-xs tracking-wider underline  "
                target="_blank"
                rel="noreferrer"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=modernrubber1@hotmail.com"
              >
                {t("Send email")}
              </a>
              <GoLinkExternal className="w-2 mt-[-4px] " />
            </div>
          </main>
        </main>

        <main className="   mt-5  ">
          <div className="bg-slate-200 text-xs w-14 ml-4 mb-2">
            <img src="https://qr-official.line.me/gs/M_754kyrxu_BW.png?oat_content=qr" />
          </div>
          <div className="flex gap-1  hover:bg-[#3E3E3E] rounded-md">
            <a
              className="text-xs tracking-wider underline ml-[-12px]"
              href="https://lin.ee/c866PiB"
            >
              @modernrubber1
            </a>
            <GoLinkExternal className="w-2 mt-[-4px] " />
          </div>
        </main>
      </div>
    </>
  );
}
