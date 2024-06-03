import React from "react";
import { S } from "./../HeaderMenu_Styles";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"];

export const Menu: React.FC = () => {
  return (
    <ul>
      {items.map((item: string, index: number) => {
        return (
          <S.MenuItem key={index}>
            <S.Link href="">
              {item}
              <S.Mask>
                <span>{item}</span>
              </S.Mask>
              <S.Mask>
                <span>{item}</span>
              </S.Mask>
            </S.Link>
          </S.MenuItem>
        );
      })}
    </ul>
  );
};
