import { useState } from "react";
import "./style/carousel.css";
import { useEffect } from "react";

export default function Carousel({ mag }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 1500);
  });

  const slideRight = () => {
    if (current === mag.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };
  const slideLeft = () => {
    if (current === 0) {
      setCurrent(mag.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <>
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
        <div className="carousal_wrapper ">
          {mag.map((pppp, index) => {
            return (
              <div
                key={index}
                className={
                  index == current
                    ? "carousel_card carousel_card-active"
                    : "carousel_card"
                }
              >
                <img className="card_image" src={pppp.image} />

                <div className="card_overlay">
                  <div className="card_title ">{pppp.title}</div>
                </div>
              </div>
            );
          })}
          <div className="carousel_arrow_left" onClick={slideLeft}>
            &lsaquo;
          </div>
          <div className="carousel_arrow_right" onClick={slideRight}>
            &rsaquo;
          </div>
        </div>
      </div>
    </>
  );
}
