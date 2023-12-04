import MapContainer from "../../../features/map/components/MapContainer";
import { FiMapPin } from "react-icons/fi";
import { FaPhone } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import { GoLinkExternal } from "react-icons/go";
export default function Map() {
  const { t } = useTranslation();
  return (
    <>
      <main>
        <div className="text-[#2D2D2D] mt-[90px] pt-12 bg-[#2D2D2D]">d</div>
        <div className="bg-[#2D2D2D] flex flex-col gap-2 items-center">
          <p className=" text-white mt-[-20px] tracking-wider font-extrabold    text-[48px] ">
            {t("ContactUsTitle")}
          </p>
          <hr className="w-[78%]  border border-white " />
          <p className="text-white tracking-widest xl:pb-16 xl:pt-4">
            {t("BusinessHr")}
          </p>
        </div>
        <div className=" bg-[url('/src/assets/blackwave.svg')] bg-no-repeat h-[600px] bg-center mt-[-40px] "></div>
      </main>

      <main className="tracking-widest flex justify-center  mt-[-600px]">
        <div className="flex justify-center w-full h-full bg-[#2D2D2D] xl:pt-[0px] xl:mt-[30px] xl:pb-[80px]">
          <MapContainer />

          <div className="flex flex-col   text-white  bg-black p-9 ">
            <main className="flex gap-6">
              <FiMapPin className="text-lg mt-5" />
              <div className="mt-5 text-[16px]">
                {t("Address")}
                <br />
                {t("Address2")} <br />
                {t("Address3")}
              </div>
            </main>
            <main className="flex gap-6 ">
              <FaPhone className="text-lg mt-5" />
              <p className="mt-5 text-[16px]">02-898-2250, 081-692-2780</p>
            </main>
            <main className="flex items-end gap-6">
              <GrMail className="text-lg mt-6" />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=modernrubber1@hotmail.com"
                className="mt-5 text-[16px] "
              >
                modernrubber1@hotmail.com
              </a>
            </main>

            <main className="mt-10 flex flex-col items-center">
              <div className="   w-28">
                <img src="https://qr-official.line.me/gs/M_754kyrxu_BW.png?oat_content=qr" />
              </div>
              <div className="flex gap-1    rounded-md">
                <a
                  className="mt-3 text-[16px] tracking-wider underline ml-[-12px]"
                  href="https://lin.ee/c866PiB"
                >
                  @modernrubber1
                </a>
                <GoLinkExternal className="w-3 mt-3 " />
              </div>
            </main>
          </div>
        </div>
      </main>
    </>
  );
}
