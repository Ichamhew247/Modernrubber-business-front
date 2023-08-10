import CircleImage from "../features/banner/components/CircleImage";
import Content from "../features/banner/components/Content";
import Logo from "../features/banner/components/Logo";

export default function Banner() {
  return (
    <>
      <div className="z-10 mt-[86px]">
        <main className=" text-white mt-8">
          <main className=" bg-[url('/src/assets/wave.svg')] bg-no-repeat h-[600px] bg-center  ">
            <Logo />
            <div className="  mt-[-500px]  flex flex-col gap-4 text-center ">
              <Content />
            </div>
          </main>

          <main>
            <div className="mt-[-340px] flex  justify-center gap-14">
              <CircleImage
                number="1"
                title="สินค้าสั่งผลิต"
                src="/src/assets/blackthing.jpg"
              />
              <CircleImage
                number="2"
                title="ผลิตโดยช่างผู้เชี่ยวชาญ"
                src="/src/assets/redthing.jpg"
              />
              <CircleImage
                number="3"
                title="รับประกันคุณภาพ"
                src="/src/assets/graything.jpg"
              />
            </div>
          </main>
        </main>
      </div>
    </>
  );
}
