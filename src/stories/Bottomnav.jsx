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

  return (
    <div className="bottom-nav">
 <div
  className={`nav-item ${active === "home" ? "active" : ""}`}
  onClick={() => setActive("home")}
>
  <HomeIcon className="icon" />
  <span>홈</span>
</div>
<div
  className={`nav-item ${active === "chat" ? "active" : ""}`}
  onClick={() => setActive("chat")}
>
  <ChatIcon className="icon" />
  <span>채팅</span>
</div>
<div
  className={`nav-item ${active === "mypage" ? "active" : ""}`}
  onClick={() => setActive("mypage")}
>
  <MyPageIcon className="icon" />
  <span>마이페이지</span>
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
