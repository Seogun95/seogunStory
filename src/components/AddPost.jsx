import React from 'react';
import styled from 'styled-components';
import imgUpload from '../style/img/uploadImg.png';
import useInputOnChange from '../hooks/useInputOnChange';
import useInputAutoFoucs from '../hooks/useInputAutoFocus';
import { useDispatch } from 'react-redux';
import { __addPostList } from '../redux/modules/addPostListSlice';
import { __getPostList } from '../redux/modules/postListSlice';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';

const ModalContainer = styled.div`
  position: relative;
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

const AddPostInputContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  left: 200px;
  width: calc(100% - 250px);
  input {
    width: 100%;
    padding: 0.5rem;
    margin: 0.2rem;
    font-size: 1rem;
    border: none;
    margin-bottom: 1rem;
    background-color: #f2f2f2;
    border-radius: 5px;
    box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.2);
    outline: none;
    transition: all 0.2s ease-in-out;

    &:focus {
      background-color: #fff;
      box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.2),
        0px 0px 3px rgba(0, 0, 0, 0.2);
    }
  }
`;
function AddPost({ setState }) {
  const [title, setTitleInput, titleInputHandler] = useInputOnChange('');
  const [content, setDescInput, descInputHandler] = useInputOnChange('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputFoucsRef = useInputAutoFoucs();

  // 추가버튼 클릭시
  const createPostHandler = async (e) => {
    e.preventDefault();
    if (title !== '') {
      await dispatch(__addPostList({ title, content }));
      dispatch(__getPostList());
      navigate('/');
      setTitleInput('');
      setDescInput('');
      setState();
    }
  };

  return (
    <>
      <ModalContainer>
        <ImgUploadContainer>
          <img src={imgUpload} alt="이미지업로드" />
        </ImgUploadContainer>
        <AddPostInputContainer onSubmit={createPostHandler}>
          <input
            ref={inputFoucsRef}
            value={title}
            onChange={titleInputHandler}
            placeholder={'제목을 입력해주세요'}
          />
          <input
            value={content}
            onChange={descInputHandler}
            placeholder={'포스터의 글을 입력해주세요'}
          />
          <Button custom>+</Button>
        </AddPostInputContainer>
      </ModalContainer>
    </>
  );
}

export default AddPost;
