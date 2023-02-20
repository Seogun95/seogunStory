import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import imgUpload from '../style/img/uploadImg.png';
import useInputOnChange from '../hooks/useInputOnChange';
import { useDispatch } from 'react-redux';
import { __addPostList } from '../redux/modules/addPostListSlice';
import { __getPostList } from '../redux/modules/postListSlice';

const ModalContainer = styled.form`
  position: relative;
  ${(props) => props.theme.FlexRow};
  margin: 1rem;
`;
const ImgUploadContainer = styled.div`
  position: absolute;
  left: -100px;
  top: 0;
  img {
    width: 250px;
    height: 250px;
  }
`;

const AddPostInputContainer = styled.div`
  ${(props) => props.theme.FlexCol};
  input {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: none;
    margin-bottom: 1rem;
  }
`;

function AddPost({ setState }) {
  const [title, setTitleInput, titleInputHandler] = useInputOnChange('');
  const [content, setDescInput, descInputHandler] = useInputOnChange('');

  const dispatch = useDispatch();

  // 추가버튼 클릭시
  const createPostHandler = async (e) => {
    e.preventDefault();
    if (title !== '') {
      await dispatch(__addPostList({ title, content }));
      dispatch(__getPostList());
      setTitleInput('');
      setDescInput('');
      setState();
    }
  };

  return (
    <>
      <ModalContainer onSubmit={createPostHandler}>
        <ImgUploadContainer>
          <img src={imgUpload} alt="이미지업로드" />
        </ImgUploadContainer>
        <AddPostInputContainer>
          <input value={title} onChange={titleInputHandler} />
          <input value={content} onChange={descInputHandler} />
          <button>추가하기</button>
        </AddPostInputContainer>
      </ModalContainer>
    </>
  );
}

export default AddPost;
