import styled from "@emotion/styled";
import Slider from "react-slick";

export const Wrapper = styled.div`
  height: 400px;
  width: 90%;
  margin: auto;
`;

export const SliderItem = styled.img`
  height: 350px;
  width: 60%;

  margin: auto;
`;

export const StyledSlider = styled(Slider)`
  .slick-prev {
  }
  .slick-next {
  }
`;
