import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import useOutsideClick from '../hooks/useOutsideClick';

const ModalWrapper = styled.div`
  ${(props) => props.theme.FlexRow};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #000000ca;
  backdrop-filter: blur(1px);
  /* display: ${(props) => (props.show ? 'block' : 'none')}; */
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.show ? '1' : '0')};
  transition: visibility 0.2s ease-in-out, opacity 0.2s ease-in-out;
`;

const ModalContent = styled.div`
  background-color: #1f1f1f;
  margin: auto; /* 추가 */
  padding: 20px;
  width: 40%;
  min-height: 300px;
  border-radius: 1rem;
  filter: drop-shadow(2px 14px 30px rgba(0, 0, 0, 80%));
  & {
    color: white;
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: 0.3s ease all;
  &:hover {
    opacity: 0.8;
  }
`;

function Modal(props) {
  const modalRef = useRef(null);

  const toggleModal = () => {
    props.setState((prevShowModal) => !prevShowModal);
  };

  useOutsideClick(modalRef, () => {
    props.setState(false);
  });

  useEffect(() => {
    document.body.style.overflow = props.state ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [props.state]);

  return (
    <>
      <ModalWrapper show={props.state}>
        <ModalContent ref={modalRef}>
          <CloseButton onClick={toggleModal}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
          {props.children}
        </ModalContent>
      </ModalWrapper>
    </>
  );
}

export default Modal;
