import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUserAlt, FaPlus } from 'react-icons/fa';
import Button from './Button';
import Modal from '../components/Modal';
import logo from '../style/img/seogun.png';
import AddPost from '../components/AddPost';

const SidebarWrapper = styled.aside`
  background-color: ${(props) => props.theme.CL.dark_3};
  box-shadow: 4px 0px 5px 0px rgb(0 0 0 / 76%);
  width: 18rem;
  height: calc(100vh - 3.125rem);
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 1;
`;

const SidebarContent = styled.div`
  ${(props) => props.theme.FlexCol}
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  margin: 1rem 0;
  gap: 2rem;
`;

const ImgContainer = styled.div`
  position: relative;
  ${(props) => props.theme.FlexRow}
  width: 13.75rem;
  height: 14.375rem;
  border-radius: ${(props) => props.theme.BR.round};
  overflow: hidden;
  backdrop-filter: contrast(0.5);
  img {
    width: 100%;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    background: #000000d1;
    width: 100%;
    height: 20%;
    transition: 0.2s ease;
  }
  &:hover {
    &:before {
      background: #000000ea;
    }
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  * {
    color: white;
  }
`;

const SidebarContainer = styled.div`
  position: relative;
  ${(props) => props.theme.FlexRow};
  justify-content: center;
  margin-top: ${(props) => props.margin};
  p {
    color: white;
  }
`;

const Overlay = styled.div`
  ${(props) => props.theme.FlexRow};
  position: absolute;
  top: -20px;
  left: 0;
  padding: 3px 1rem;
  border-radius: 0.25rem;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  color: white;
  font-size: 0.8rem;
`;

export default function Sidebar() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <SidebarWrapper>
      <SidebarContent>
        <ImgContainer>
          <img src={logo} alt="프로필" />
          <IconWrapper>
            <FaUserAlt />
          </IconWrapper>
        </ImgContainer>
        <SidebarContainer>
          <p>HELLO, 서근!</p>
        </SidebarContainer>
        <SidebarContainer margin={'2rem'}>
          <Button large onClick={toggleModal}>
            <FaPlus />
            <Overlay>포스팅 하기</Overlay>
          </Button>
          <Modal state={showModal} setState={setShowModal}>
            <AddPost setState={toggleModal} />
          </Modal>
        </SidebarContainer>
      </SidebarContent>
    </SidebarWrapper>
  );
}
