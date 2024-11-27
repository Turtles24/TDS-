import React from "react";
import { BottomNav } from "./Bottomnav.jsx";
import { Chat } from "./icons/Chat";
import { Home } from "./icons/Home";
import { MyPage } from "./icons/MyPage";

// Storybook 기본 설정
export default {
  title: "Components/BottomNav",
  component: BottomNav,
  tags: ["autodocs"],
  argTypes: {
    buttonnum: {
      control: { type: "number", min: 1, max: 5 },
      description: "버튼의 개수",
    },
    label: {
      control: { type: "object" },
      description: "버튼 제목",
    },
    icon: {
      control: { type: "object" },
      description: "버튼 아이콘 그림",
    },
  },
};

// 기본 스토리
export const Default = (args) => <BottomNav {...args} />;
Default.args = {
  buttonnum: 3,
  label: ["홈", "채팅", "마이페이지"],
  icon: [Home, Chat, MyPage],
};

// 버튼 개수를 동적으로 설정하는 스토리
// export const DynamicButtons = (args) => <BottomNav {...args} />;
// DynamicButtons.args = {
//   buttonnum: 4,
//   label: ["홈", "채팅", "마이페이지", "설정"],
//   icon: [Home, Chat, MyPage, null], // 마지막 버튼에 아이콘 없음
// };

// // 기본 아이콘과 텍스트를 사용하는 스토리
// export const EmptyIcons = (args) => <BottomNav {...args} />;
// EmptyIcons.args = {
//   buttonnum: 3,
//   label: ["기본1", "기본2", "기본3"],
//   icon: [null, null, null], // 모든 아이콘 비어 있음
// };
