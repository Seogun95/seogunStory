import React, { useEffect, useState } from 'react';
import loginBg from '../style/img/loginBg.jpg';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import Input from '../common/Input';
import {
  LoginWrapperBg,
  LoginModalWrapper,
  LoginModal,
  LoginInputContainer,
  LoginGoToSignup,
  LoginAlertSpan,
} from '../style/styled';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';
import { jwtserver } from '../util/api';

export default function SignupPage() {
  const [inputId, setinputId] = useState('');
  const [inputPw, setinputPw] = useState('');
  // const [inputPwCheck, setinputPwCheck] = useState('');
  // 오류 메세지
  const [idMessage, setIdMessage] = useState('이메일을 입력해주세요');
  const [pwMessage, setPwMessage] = useState('비밀번호를 입력해주세요');

  // 유효성 검사 둘다 true 일시 버튼 클릭 가넝
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);

  // id input change
  const idChangeHanlder = (e) => {
    setinputId(e.target.value);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(e.target.value)) {
      setIdMessage('이메일 형식으로 입력해주세요.');
      setIsId(false);
    } else {
      setIdMessage('사용 가능한 이메일 입니다.');
      setIsId(true);
    }
  };
  // pw input change
  const pwChangeHandler = (e) => {
    setinputPw(e.target.value);
    const pwRegex = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

    if (!pwRegex.test(e.target.value)) {
      setPwMessage(
        '영문과 숫자 조합의 8-20자의 비밀번호를 설정해주세요. 특수문자(!@#$%^&*)도 반드시 사용해야 합니다.'
      );
      setIsPw(false);
    } else {
      setPwMessage('사용 가능한 비밀번호 입니다.');
      setIsPw(true);
    }
  };

  // 회원가입
  const joinHandler = async () => {
    if (isId === true && isPw === true) {
      try {
        await jwtserver.post('/register', {
          id: inputId,
          password: inputPw,
        });
        alert('회원가입 성공 !!');
        moveRegistrationPg();
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  //스크롤 방지
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
            <Input
              text={'이메일'}
              value={inputId}
              onChange={idChangeHanlder}
              type={'email'}
            >
              <FaUserAlt />
            </Input>
            <LoginAlertSpan isIdOrPw={isId}>{idMessage}</LoginAlertSpan>
            <Input
              text={'비밀번호'}
              value={inputPw}
              onChange={pwChangeHandler}
              type={'password'}
            >
              <FaLock />
            </Input>
            <LoginAlertSpan isIdOrPw={isPw} height={'50px'}>
              {pwMessage}
            </LoginAlertSpan>
            {/* <LoginLabel>
              <LoginInsideLabel>비밀번호 확인</LoginInsideLabel>
              <LoginInput value="inputPwCheck" onChange={() => {}}></LoginInput>
            </LoginLabel> */}
          </LoginInputContainer>
          <Button onClick={joinHandler} large w={'100% !important'}>
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
