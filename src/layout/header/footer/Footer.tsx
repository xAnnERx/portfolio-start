import React from "react";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./Footer_Styles";

const socialItemsData = [
  {
    iconId: "instagram",
  },
  {
    iconId: "telegram",
  },
  {
    iconId: "vk",
  },
  {
    iconId: "linkidin",
  },
];

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <FlexWrapper direction={"column"} align={"center"}>
        <S.Name>Anna</S.Name>
        <S.SocialList>
          {socialItemsData.map((s, index) => {
            return (
              <S.SocialItem key={index}>
                <S.SocialLink>
                  <Icon
                    height={"21px"}
                    width={"21px"}
                    viewBox={"0 0 21px 21px"}
                    iconId={s.iconId}
                  />
                </S.SocialLink>
              </S.SocialItem>
            );
          })}
        </S.SocialList>
        <S.Copyright>© 2023 Anna, All Rights Reserved.</S.Copyright>
      </FlexWrapper>
    </S.Footer>
  );
};
