import styled from 'styled-components';
import { useState, useEffect } from 'react';

const HeaderStyles = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.CL.dark_1};
  height: 3.125rem;
  display: flex;
  align-items: center;
  padding-left: 20px;
  color: white;
  position: fixed;
  top: 0;
  z-index: 99999;
  transition: transform 0.3s ease-in-out;
  transform: translateY(0);
  &.hide {
    transform: translateY(-100%);
  }
`;

const Logo = styled.p`
  height: 2rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
`;

export default function Header() {
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHide(currentScrollPos > prevScrollPos && currentScrollPos > 0);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderStyles className={isHide ? 'hide' : ''}>
      <Logo>서근 스토리</Logo>
    </HeaderStyles>
  );
}
