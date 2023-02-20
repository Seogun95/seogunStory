import React from 'react';
import styled from 'styled-components';
import imgUpload from '../style/img/uploadImg.png';
import { FaPlus } from 'react-icons/fa';
import useInputOnChange from '../hooks/useInputOnChange';
import { useDispatch } from 'react-redux';
import { __getPostList } from '../redux/modules/postListSlice';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { __editPostList } from '../redux/modules/editPostListSlice';

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
  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    margin: 0.2rem;
    font-size: 1rem;
    border: none;
    margin-bottom: 1rem;
    background-color: #f2f2f2;
    border-radius: 5px;
    resize: none;
    &:focus {
      background-color: #fff;
      box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.2),
        0px 0px 3px rgba(0, 0, 0, 0.2);
    }
  }
  textarea {
    min-height: 200px;
  }
`;

function EditPost({ post, setState }) {
  const [newTitle, , newTitleHanlder] = useInputOnChange(post.title);
  const [newContent, , newContentHanlder] = useInputOnChange(post.contetnt);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editPostHandler = async (e) => {
    e.preventDefault();
    await dispatch(
      __editPostList({ id: post.id, title: newTitle, content: newContent })
    );
    navigate(`/${post.id}`);
    dispatch(__getPostList());
    setState();
  };

  return (
    <>
      <ModalContainer>
        <ImgUploadContainer>
          <img src={imgUpload} alt="이미지업로드" />
        </ImgUploadContainer>
        <AddPostInputContainer onSubmit={editPostHandler}>
          <input
            value={newTitle}
            onChange={newTitleHanlder}
            placeholder={'제목을 입력해주세요'}
          />
          <textarea
            value={newContent}
            onChange={newContentHanlder}
            placeholder={'포스터의 글을 입력해주세요'}
          />
          <Button custom>
            <FaPlus />
          </Button>
        </AddPostInputContainer>
      </ModalContainer>
    </>
  );
}

export default EditPost;
