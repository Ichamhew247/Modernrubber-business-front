import CircleImage from "./banner/components/CircleImage";
import Content from "./banner/components/Content";
import Logo from "./banner/components/Logo";
import { useTranslation } from "react-i18next";
export default function Banner() {
  const { t } = useTranslation();
  return (
    <>
      <div className="mt-[100px] ">
        <main className=" text-white mt-8">
          <main className="bg-[url('/src/assets/wave.svg')] bg-no-repeat h-[600px] bg-center  ">
            <Logo />
            <div className=" mt-[-500px]  flex flex-col gap-4 text-center ">
              <Content />
            </div>
          </main>

          <main>
            <div className="z-10 mt-[-240px] flex  justify-center gap-14">
              <CircleImage
                number="1"
                title={t("Custom-made products")}
                src="/src/assets/imageProduct/1.1.png"
              />
              <CircleImage
                number="2"
                title={t("Manufactured by expert")}
                src="/src/assets/imageProduct/3.1.png"
              />
              <CircleImage
                number="3"
                title={t("Guaranteed quality")}
                src="/src/assets/imageProduct/4.1.png"
              />
            </div>
          </main>
        </main>
      </div>
    </>
  );
}
