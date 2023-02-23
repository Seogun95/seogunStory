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
import Cookies from 'js-cookie';

export default function SignupPage() {
  const [inputId, setinputId] = useState('');
  const [inputPw, setinputPw] = useState('');

  const [idMessage, setIdMessage] = useState('이메일을 입력해주세요');
  const [pwMessage, setPwMessage] = useState('비밀번호를 입력해주세요');

  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const getToken = Cookies.get('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (getToken) {
      navigate('/');
    }
  }, [navigate, getToken]);

  const loginBtnHandler = async (e) => {
    e.preventDefault();
    let now = new Date();
    const expiryDate = new Date(now.setMinutes(now.getMinutes() + 10));
    // const expiryDate = new Date(Date.now() + 10 * 60 * 1000);
    if (inputId !== '' && inputPw !== '') {
      try {
        const response = await jwtserver.post('/login', {
          id: inputId,
          password: inputPw,
        });
        const { token } = response.data;
        Cookies.set('token', token, { expires: expiryDate });
        navigate('/');
      } catch (error) {
        alert(`${error.response.data.message}`);
      }
    }
  };

  // id input change
  const idChangeHanlder = (e) => {
    setinputId(e.target.value);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(e.target.value)) {
      setIdMessage('이메일 형식으로 입력해주세요.');
      setIsId(false);
    } else {
      setIdMessage('');
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
      setPwMessage('');
      setIsPw(true);
    }
  };

  //스크롤 방지
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const moveRegistrationPg = () => {
    navigate('/signup');
  };

  return (
    <LoginWrapperBg>
      <img src={loginBg} alt=""></img>
      <LoginModalWrapper>
        <LoginModal>
          <h1>로그인</h1>
          <LoginInputContainer onSubmit={loginBtnHandler}>
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
            <Button large w={'100% !important'}>
              로그인
            </Button>
          </LoginInputContainer>

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
