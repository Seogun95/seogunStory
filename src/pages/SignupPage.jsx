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

export default function SignupPage() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const navigate = useNavigate();

  const moveRegistrationPg = () => {
    navigate(-1);
  };

  return (
    <LoginWrapperBg>
      <img src={loginBg} alt=""></img>
      <LoginModalWrapper>
        <LoginModal>
          <h1>회원가입</h1>
          <LoginInputContainer>
            <LoginLabel>
              <LoginInsideLabel>아이디</LoginInsideLabel>
              <LoginInput value="" onChange={() => {}}></LoginInput>
            </LoginLabel>
            <LoginLabel>
              <LoginInsideLabel>비밀번호</LoginInsideLabel>
              <LoginInput value="" onChange={() => {}}></LoginInput>
            </LoginLabel>
            <LoginLabel>
              <LoginInsideLabel>비밀번호 확인</LoginInsideLabel>
              <LoginInput value="" onChange={() => {}}></LoginInput>
            </LoginLabel>
          </LoginInputContainer>
          <Button large w={'100% !important'}>
            회원가입
          </Button>
          <LoginGoToSignup>
            <span>로그인 페이지로 돌아갈까요? </span>
            <Button
              onClick={moveRegistrationPg}
              color={'white'}
              size={'1.2rem'}
            >
              돌아가기
            </Button>
          </LoginGoToSignup>
        </LoginModal>
      </LoginModalWrapper>
    </LoginWrapperBg>
  );
}
