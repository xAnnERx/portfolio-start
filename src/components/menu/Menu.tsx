import React from "react";
import styled from "styled-components";

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StuledMenu>
      <ul>
        {props.menuItems.map((item: string, index: number) => {
          return (
            <li key={index}>
              <a href="">{item}</a>
            </li>
          );
        })}
        ;
      </ul>
    </StuledMenu>
  );
};

const StuledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`;
