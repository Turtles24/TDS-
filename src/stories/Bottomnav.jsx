import React, { useState } from "react";
import "./bottomnav.css";
import { ReactComponent as ChatIcon } from "./assets/Chat.svg";
import { ReactComponent as HomeIcon } from "./assets/Home.svg";
import { ReactComponent as MyPageIcon } from "./assets/MyPage.svg";

const BottomNav = () => {
  const [active, setActive] = useState("home");

  const getIndicatorPosition = () => {
    switch (active) {
      case "home":
        return "0%";
      case "chat":
        return "33.33%";
      case "mypage":
        return "66.66%";
      default:
        return "0%";
    }
  };

  const getIconColor = (tab) => (active === tab ? "#000000" : "#AEAEB2");

  return (
    <div className="bottom-nav">
      <div
        className="nav-item"
        onClick={() => setActive("home")}
      >
        <HomeIcon
          className="icon"
          fill={getIconColor("home")} /* fill 속성 전달 */
        />
        <span style={{ color: getIconColor("home") }}>홈</span>
      </div>
      <div
        className="nav-item"
        onClick={() => setActive("chat")}
      >
        <ChatIcon
          className="icon"
          fill={getIconColor("chat")} /* fill 속성 전달 */
        />
        <span style={{ color: getIconColor("chat") }}>채팅</span>
      </div>
      <div
        className="nav-item"
        onClick={() => setActive("mypage")}
      >
        <MyPageIcon
          className="icon"
          fill={getIconColor("mypage")} /* fill 속성 전달 */
        />
        <span style={{ color: getIconColor("mypage") }}>마이페이지</span>
      </div>
      <div
        className="active-indicator"
        style={{
          left: getIndicatorPosition(),
        }}
      ></div>
    </div>
  );
};

export default BottomNav;
