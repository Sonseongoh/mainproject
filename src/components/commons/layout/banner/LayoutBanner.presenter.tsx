import Slider from "react-slick";
import { SliderItem, Wrapper } from "./LayoutBanner.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props: any): JSX.Element {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "inline-block", background: "blue" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any): JSX.Element {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "inline-block", background: "blue" }}
      onClick={onClick}
    />
  );
}

export default function LayoutBannerUI(): JSX.Element {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Wrapper>
      <Slider {...setting}>
        <div>
          <SliderItem src="/images/layout/mint.jpg" />
        </div>
        <div>
          <SliderItem src="/images/layout/wdf.jpg" />
        </div>
        <div>
          <SliderItem src="/images/layout/rolling.png" />
        </div>
      </Slider>
    </Wrapper>
  );
}
