import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "../../sections/works/tabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "./../../../assets/img/proj-1.png";
import timerImg from "./../../../assets/img/proj-2.png";
import { Container } from "../../../components/Container";

const worksItem = ["All", "landing page", "React", "spa"];

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItems={worksItem} />
        <FlexWrapper
          justify={"space-between"}
          align={"flex-start"}
          wrap={"wrap"}
        >
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
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim  justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt."
            }
          />
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  ${FlexWrapper} {
    gap: 30px;
  }
`;
