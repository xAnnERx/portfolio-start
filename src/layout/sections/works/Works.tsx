import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "./../../../assets/img/proj-1.png";
import timerImg from "./../../../assets/img/proj-2.png";

const worksItem = ["All", "landing page", "React", "spa"];

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My Works</SectionTitle>
      <Menu menuItems={worksItem} />
      <FlexWrapper justify="space-around">
        <Work
          title={"Social Network"}
          src={socialImg}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          }
        />
        <Work
          title={"Timer"}
          src={timerImg}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          }
        />
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #deefff;
`;
