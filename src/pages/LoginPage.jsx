import React, { useEffect } from 'react';
import loginBg from '../style/img/loginBg.jpg';
import {
  LoginWrapperBg,
  LoginModalWrapper,
  LoginModal,
  LoginInputContainer,
  LoginLabel,
  LoginInput,
  LoginInsideLabel,
  LoginGoToSignup,
} from '../style/styled';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const navigate = useNavigate();

  const moveRegistrationPg = () => {
    navigate('/signup');
  };

  return (
    <LoginWrapperBg>
      <img src={loginBg} alt=""></img>
      <LoginModalWrapper>
        <LoginModal>
          <h1>로그인</h1>
          <LoginInputContainer>
            <LoginLabel>
              <LoginInsideLabel>아이디</LoginInsideLabel>
              <LoginInput value="" onChange={() => {}}></LoginInput>
            </LoginLabel>
            <LoginLabel>
              <LoginInsideLabel>비밀번호</LoginInsideLabel>
              <LoginInput value="" onChange={() => {}}></LoginInput>
            </LoginLabel>
          </LoginInputContainer>
          <Button large w={'100% !important'}>
            로그인
          </Button>
          <LoginGoToSignup>
            <span>서근스토리 회원이 아니신가요? </span>
            <Button
              onClick={moveRegistrationPg}
              color={'white'}
              size={'1.2rem'}
            >
              가입하기
            </Button>
          </LoginGoToSignup>
        </LoginModal>
      </LoginModalWrapper>
    </LoginWrapperBg>
  );
}
