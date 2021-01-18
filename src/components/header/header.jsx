import React from "react";
import HeaderButton from "./headerButton/headerButton";
import "./header.css";

export default function Header() {
  const items = [
    {
      title: "Home",
    },
    {
      title: "Info",
    },
    {
      title: "Work",
    },
    {
      title: "Fun",
    },
  ];
  return (
    <div className="headerWrap">
      {items.map((item) => (
        <HeaderButton title={item.title} />
      ))}
    </div>
  );
}
