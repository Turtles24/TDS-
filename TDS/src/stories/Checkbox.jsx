import React, { useState } from 'react';
import './checkbox.css';

const Checkbox = ({ type = 'square' }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // 체크 상태에 따라 클래스 추가
  const checkboxClass = `checkbox-container ${isChecked ? 'checked' : ''} ${type}`;

  return (
    <label className={checkboxClass}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className="checkmark"></span>
      {/* 체크 여부에 따라 레이블에 동적 스타일 적용 */}
      <span className={`label-text ${isChecked ? 'label-checked' : ''}`}>
        전체 동의하기
      </span>
    </label>
  );
};

export default Checkbox;
