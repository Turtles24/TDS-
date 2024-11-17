import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import { ReactComponent as KakaoIcon } from './assets/kakaologin.svg';
import { ReactComponent as GoogleIcon } from './assets/googlelogin.svg';

export const Button = ({ type, backgroundColor, size, label, ...props }) => {
  // 버튼 유형에 따른 클래스 매핑
  const buttonTypes = {
    primary: 'button--primary',
    secondary: 'button--secondary',
    kakao: 'button--kakao',
    google: 'button--google',
  };

  const mode = type === 'primary' ? 'button--primary' : buttonTypes[type] || 'button--primary';

  // 버튼 내용 조건부 렌더링
  const renderButtonContent = () => {
    if (type === 'kakao' || type === 'google') {
      const iconClass = `button--${size}__icon`; // 크기에 따른 클래스 설정
      const Icon = type === 'kakao' ? KakaoIcon : GoogleIcon;

      return (
        <Icon
          className={iconClass}
          width="100%" // width와 height를 '100%'로 설정하여 부모에 맞게 크기 조정
          height="100%"
        />
      );
    }
    return label;
  };

  return (
    <button
      type="button"
      className={['button', `button--${size}`, mode].join(' ')}
      style={backgroundColor ? { backgroundColor } : {}}
      {...props}
    >
      {renderButtonContent()}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'kakao', 'google']),
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xl']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'primary',
  backgroundColor: null,
  size: 'medium',
  onClick: undefined,
};
