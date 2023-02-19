import styled from 'styled-components';

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
`;

export default function Header() {
  return <HeaderStyles></HeaderStyles>;
}
