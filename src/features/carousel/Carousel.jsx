import { useState } from "react";
import "./style/carousel.css";
import { useEffect } from "react";

export default function Carousel({ imageCarousel }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 1800);
  });

  const slideRight = () => {
    if (current === imageCarousel.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };
  const slideLeft = () => {
    if (current === 0) {
      setCurrent(imageCarousel.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <>
      <main className="xl:w-[800px] flex justify-center md:mt-16 xl:mt-0">
        <div
          className="carousel "
          onMouseEnter={() => {
            setAutoPlay(false);
            clearTimeout(timeOut);
          }}
          onMouseLeave={() => {
            setAutoPlay(true);
          }}
        >
          <div className="carousal_wrapper xs:flex xs:m-auto xs:w-60  xs:h-72 sm:w-[420px]  sm:h-  md:w-[520px]  md:h-72 lg:w-full lg:h-full xl:w-full xl:h-full">
            <div className="">
              {imageCarousel.map((imageCarousels, index) => {
                return (
                  <div
                    key={index}
                    className={
                      index == current
                        ? "carousel_card carousel_card-active"
                        : "carousel_card"
                    }
                  >
                    <img className="card_image  " src={imageCarousels.image} />
                  </div>
                );
              })}
            </div>

            <div id="arrowLeft" onClick={slideLeft}>
              &lsaquo;
            </div>
            <div id="arrowRight" onClick={slideRight}>
              &rsaquo;
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
