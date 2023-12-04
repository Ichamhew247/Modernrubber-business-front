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
        <div className="text-[#2D2D2D] xs:mt-[180px] sm:mt-[180px] md:mt-[200px] lg:mt-[200px] xl:mt-[90px] pt-12 bg-[#2D2D2D]">
          d
        </div>
        <div className="bg-[#2D2D2D] flex flex-col gap-2 items-center">
          <p
            className=" text-white mt-[-20px] tracking-wider font-extrabold
            xs:text-[34px] sm:text-[46px] md:text-[46px] lg:text-[48px] xl:text-[48px] "
          >
            {t("ContactUsTitle")}
          </p>
          <hr className="w-[78%]  border border-white " />
          <p
            className="text-white tracking-widest 
            xs:text-[12px] xs:pt-2
            md:text-[14px]
          lg:pt-3 xl:pb-16 
           lg:text-[16px] 
           xl:text-[18px] xl:pt-4 "
          >
            {t("BusinessHr")}
          </p>
        </div>
        <div className=" bg-[url('/src/assets/blackwave.svg')] bg-no-repeat h-[600px] bg-center mt-[-40px] "></div>
      </main>

      <main className="tracking-widest flex justify-center  mt-[-600px]">
        <div
          className=" flex  
          xl:flex-row 
          lg:flex-row 
          md:flex-row   
          sm:flex-row 
          xs:flex-col xs:items-center
          justify-center 
          w-full h-full bg-[#2D2D2D]
          xs:pt-[60px] xs:mt-[40px] xs:pb-[180px]  
        sm:pt-[60px] sm:mt-[40px] sm:pb-[180px] 
        md:pt-[60px] md:mt-[40px] md:pb-[180px] 
        lg:pt-[60px] lg:mt-[40px] lg:pb-[180px] 
        xl:pt-[0px] xl:mt-[30px] xl:pb-[80px]"
        >
          <MapContainer />
          <div className="flex flex-col text-white bg-black xs:w-[320px] sm:w-56 md:w-64 md:h-[400px] lg:w-fit lg:h-[500px] xl:w-fit xs:p-2 sm:p-4 md:p-4 lg:p-4 xl:p-9 ">
            <main className="flex xs:gap-4 sm:gap-4 md:gap-6 lg:gap-6 xl:gap-6">
              <FiMapPin className="text-lg mt-5" />
              <div className="mt-5  xs:text-[10px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]">
                {t("Address")}
                <br />
                {t("Address2")} <br />
                {t("Address3")}
              </div>
            </main>
            <main className="flex xs:gap-4 sm:gap-4 md:gap-6 lg:gap-6 xl:gap-5">
              <FaPhone className="text-lg mt-5" />
              <p className="mt-5 xs:text-[10px] md:text-[12px] sm:text-[12px] lg:text-[14px] xl:text-[16px]">
                02-898-2250, 081-692-2780
              </p>
            </main>
            <main className="flex w-fit items-end xs:gap-4 sm:gap-4 md:gap-6 lg:gap-6 xl:gap-5">
              <GrMail className="text-lg mt-6" />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=modernrubber1@hotmail.com"
                className="mt-5  xs:text-[10px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] "
              >
                modernrubber1@hotmail.com
              </a>
            </main>

            <main
              className="mt-10 
            flex flex-col items-center           
             "
            >
              <div className=" xs:w-16 sm:w-16 md:w-16 lg:w-28 xl:w-28">
                <img src="https://qr-official.line.me/gs/M_754kyrxu_BW.png?oat_content=qr" />
              </div>
              <div className="flex gap-1    rounded-md">
                <a
                  className="mt-3 xs:text-[12px] sm:text-[12px] md:text-[14px]  xl:text-[16px] tracking-wider underline ml-[-12px]"
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
