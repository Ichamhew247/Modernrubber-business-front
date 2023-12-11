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
      <div
        className="flex  xs:flex-col 
       md:flex-row lg:flex-row  
       xl:flex-row  xl:gap-[40px] xl:h-[160px]   
       md:justify-center lg:justify-center 
       sm:flex sm:flex-wraps  sm:gap-4 sm:h-full sm:justify-center 
        md:gap-8 lg:gap-24  
       xs:h-full  md:h-full
       lg:h-[160px]  w-full   
       bg-[#2C2C2C] text-white  "
      >
        <div>
          <img className=" xl:w-52 pt-4 hidden xl:block " src={logowhite} />
        </div>

        <div className="sm:flex sm:flex-row sm:justify-center sm:gap-10 ">
          <main className="ADDRESS xs:ml-4 flex gap-4  ">
            <div>
              <SiGooglemaps className="text-xl  mt-6" />
            </div>
            <div className="flex flex-col gap-4 mt-5 xs:text-[12px] sm:text-[10px] md:text-xs lg:text-xs xl:text-xs">
              <div className="flex flex-col gap-1">
                <p>{t("Address")}</p>
                <p>{t("Address2")}</p>
                <p>{t("Address3")}</p>
              </div>
              <div className="flex gap-1 hover:bg-[#3E3E3E] rounded-sm w-24 xs:text-[12px]  sm:text-[10px] md:text-xs lg:text-xs xl:text-xs">
                <a
                  className=" text-xs tracking-wider  hover:no-underline underline xs:text-[12px] sm:text-[10px] md:text-xs lg:text-xs xl:text-xs "
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

          <main className="CALL xs:ml-4 gap-7 flex flex-col text-xs ">
            <div className="flex gap-4">
              <FaPhone className="text-base mt-6" />
              <div className="flex flex-col gap-2 xs:text-[12px] sm:text-[10px] md:text-xs lg:text-xs xl:text-xs">
                <p className="mt-5">081-692-278-0 ,</p>
                <p>02-898-225-0</p>
              </div>
            </div>
            <main className="flex flex-col gap-1 ">
              <div className="flex gap-4  ">
                <div className="mt-[8px]">
                  <GrMail className="text-base mt-[-8px] " />
                </div>
                <p className="mt-[-4px] xs:text-[12px] sm:text-[10px] md:text-xs lg:text-xs xl:text-xs">
                  modernrubber1@hotmail.com
                </p>
              </div>
              <div className="flex gap-1 ml-8 xs:w-28 rounded-sm w-20 hover:bg-[#3E3E3E]">
                <a
                  className="  text-xs tracking-wider underline xs:text-[12px] sm:text-[10px] md:text-xs lg:text-xs xl:text-xs "
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
        </div>
        <main className="xs:ml-4 md:gap-1 md:flex md:flex-col mt-5 sm:flex sm:flex-row sm:justify-center sm:items-center sm:gap-0 ">
          <div className="bg-slate-200 xs:ml-7   text-xs w-14 xs:ml-8s xl:ml-[-20px]  md:ml-[-10px] lg:ml-[-40px] sm:ml-2 mb-2">
            <img src="https://qr-official.line.me/gs/M_754kyrxu_BW.png?oat_content=qr" />
          </div>
          <div className="flex gap-1  hover:bg-[#3E3E3E] rounded-md">
            <a
              className="text-xs tracking-wider underline xs:ml-[28px] md:ml-[2px]  xl:ml-[-12px] lg:ml-[-30px] xs:text-[12px] sm:text-[10px] md:text-xs lg:text-xs xl:text-xs"
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
