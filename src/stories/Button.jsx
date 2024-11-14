import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import kakaologin from './assets/kakaologin.svg';
import googlelogin from './assets/googlelogin.svg';

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
    if (type === 'kakao') {
      return <img src={kakaologin} alt={label} style={{ width: '100%', height: 'auto' }} />;
    } else if (type === 'google') {
      return <img src={googlelogin} alt={label} style={{ width: '100%', height: 'auto' }} />;
    } else {
      return label;
    }
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
