import React from "react";
import HeaderButton from "./headerButton/headerButton";
import {
  HomeRounded,
  InfoOutlined,
  WorkOutline,
  InsertEmoticon,
} from "@material-ui/icons";
import "./header.css";

export default function Header() {
  const items = [
    {
      title: "Home",
      icon: <HomeRounded />,
    },
    {
      title: "Info",
      icon: <InfoOutlined />,
    },
    {
      title: "Work",
      icon: <WorkOutline />,
    },
    {
      title: "Fun",
      icon: <InsertEmoticon />,
    },
  ];
  return (
    <div className="headerWrap">
      {items.map((item) => (
        <HeaderButton title={item.title} icon={item.icon} />
      ))}
    </div>
  );
}
