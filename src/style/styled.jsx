import styled from 'styled-components';

export const LoginWrapperBg = styled.div`
  position: relative;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
    opacity: 0.5;
  }
`;

export const LoginModalWrapper = styled.div`
  ${(props) => props.theme.FlexRow}
  position: fixed;
  inset: 0;
  z-index: 100;
`;

export const LoginModal = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  ${(props) => props.theme.DarkBlur}
  padding: 3rem;
  border-radius: 1rem;
  width: 500px;
  height: 600px;
`;

export const LoginInputContainer = styled.form`
  ${(props) => props.theme.FlexCol}
  align-items: flex-start;
  margin: 1rem 0;
`;

export const LoginLabel = styled.label`
  width: 100%;
  position: relative;
  margin: 0.2rem;
`;

export const LoginInput = styled.input`
  width: 100%;
  border-radius: 0.5rem;
  height: 3.125rem;
  line-height: 4.375rem;
  padding: 16px 35px 0;
`;

export const LoginInsideLabel = styled.label`
  position: absolute;
  font-size: 11px;
  top: 4px;
  left: 1rem;
  transform: translateY(0);
  color: black;
`;
export const LoginInputIcon = styled.span`
  position: absolute;
  top: 70%;
  left: 10px;
  transform: translateY(-50%);
  color: #aeaeae;
`;
export const LoginGoToSignup = styled.div`
  ${(props) => props.theme.FlexRow}
  justify-content: flex-end;
  span {
    opacity: 0.6;
  }
`;

export const LoginAlertSpan = styled.div`
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem 0.5rem;
  height: ${(props) => props.height};
  color: ${(props) => (props.isIdOrPw ? 'springgreen' : 'tomato')};
`;
