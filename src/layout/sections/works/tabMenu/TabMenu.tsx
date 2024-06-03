import React from "react";
import styled from "styled-components";
import { Link } from "../../../../components/Link";

export type TabsStstusType = "all" | "landing" | "react" | "spa";

type TabMenuPropsType = {
  tabsItems: Array<{
    status: TabsStstusType;
    title: string;
  }>;
  changeFilterStatus: (value: TabsStstusType) => void;
  currentFilterStatus: string;
};

export const TabMenu: React.FC<TabMenuPropsType> = (props) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.tabsItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link
                active={props.currentFilterStatus === item.status}
                as={"button"}
                onClick={() => {
                  props.changeFilterStatus(item.status);
                }}
              >
                {item.title}
              </Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    /* gap: 20px; */
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    border: 1px solid black;
    margin: 0 auto 40px;
  }
`;

const ListItem = styled.li``;
