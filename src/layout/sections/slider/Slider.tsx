import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../../../styles/slider.css";
import { S } from "./Slider_Styles";
import { Icon } from "../../../components/icon/Icon";

type SlidePropsType = {
  text: string;
  userName: string;
};

const Slide = (props: SlidePropsType) => {
  return (
    <S.Slide>
      <S.Text>{props.text}</S.Text>
      <S.Name>@{props.userName}</S.Name>
    </S.Slide>
  );
};

const items = [
  <Slide
    userName={"ivan ivanov"}
    text={
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    }
  />,
  <Slide
    userName={"peter petrov"}
    text={
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    }
  />,
  <Slide
    userName={"igor igorev"}
    text={
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    }
  />,
];

export const Slider = () => (
  <S.Slider>
    <AliceCarousel
      mouseTracking
      items={items}
      renderPrevButton={() => {
        return <Icon iconId={"code"} />;
      }}
    />
  </S.Slider>
);
