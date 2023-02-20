import styled from 'styled-components';

const FooterWrapper = styled.footer`
  ${(props) => props.theme.FlexRow};
  background-color: ${(props) => props.theme.CL.dark_1};
  width: calc(100% - 18rem);
  margin-left: 18rem;
  height: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
`;

const Copyright = styled.p`
  font-size: 14px;
  color: #999;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Copyright>&copy; 2023 서근개발노트. All rights reserved.</Copyright>
    </FooterWrapper>
  );
}
