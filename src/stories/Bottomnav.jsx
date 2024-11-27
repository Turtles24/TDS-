import React, { useState } from "react";
import PropTypes from "prop-types";
import "./bottomnav.css";

/** Bottom navigation component for user interaction */
export const BottomNav = ({ buttonnum, label, icon, ...props }) => {
  const [active, setActive] = useState(0); // active index를 상태로 사용

  return (
    <div className="bottom-nav" {...props}>
      {Array.from({ length: buttonnum }, (_, index) => (
        <div
          key={`button-${index}`}
          className={`nav-item ${active === index ? "active" : ""}`}
          onClick={() => setActive(index)}
        >
          {icon[index] ? (
            React.createElement(icon[index], {
              color: active === index ? "#000000" : "#AEAEB2", // 색상 전달
            })
          ) : (
            <div className="default-icon" style={{ color: active === index ? "#000000" : "#AEAEB2" }}>
              🔲
            </div>
          )}
          <span>{label[index] || `Button ${index + 1}`}</span>
        </div>
      ))}
      <div
        className="active-indicator"
        style={{
          width: `${100 / buttonnum}%`,
          left: `${(100 / buttonnum) * active}%`,
        }}
      ></div>
    </div>
  );
};

BottomNav.propTypes = {
  /** Number of buttons in the navigation */
  buttonnum: PropTypes.number.isRequired,

  /** Labels for each button */
  label: PropTypes.arrayOf(PropTypes.string),

  /** Icons for each button (can be null or a React component) */
  icon: PropTypes.arrayOf(PropTypes.elementType),

  /** Optional additional props for the container */
  props: PropTypes.object,
};

BottomNav.defaultProps = {
  buttonnum: 3,
  label: ["Home", "Chat", "Profile"], // 기본 라벨
  icon: [null, null, null], // 기본 아이콘 (없음)
};
