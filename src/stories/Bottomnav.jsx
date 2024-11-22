import React, { useState } from "react";
import "./bottomnav.css";
import { ReactComponent as ChatIcon } from "./assets/Chat.svg";
import { ReactComponent as HomeIcon } from "./assets/Home.svg";
import { ReactComponent as MyPageIcon } from "./assets/MyPage.svg";

const BottomNav = () => {
  const [active, setActive] = useState("home");

  // 각 아이콘의 위치를 지정 (left 기준, % 단위)
  const getIndicatorPosition = () => {
    switch (active) {
      case "home":
        return "0%"; // 첫 번째 아이콘 (왼쪽)
      case "chat":
        return "33.33%"; // 두 번째 아이콘 (가운데)
      case "mypage":
        return "66.66%"; // 세 번째 아이콘 (오른쪽)
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

      {/* 이동하는 막대 (애니메이션 효과 포함) */}
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
