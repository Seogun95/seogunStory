import React from 'react';
import styled from 'styled-components';
import editImg from '../style/img/pencil.svg';
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
  left: -4.375rem;
  top: 3.125rem;
  img {
    width: 200px;
    height: 200px;
  }
`;

const AddPostInputContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  left: 12.5rem;
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
  const [{ title, content }, inputHandler] = useInputOnChange({
    title: post.title,
    content: post.content,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editPostHandler = async (e) => {
    e.preventDefault();
    await dispatch(
      __editPostList({ id: post.id, title: title, content: content })
    );
    navigate(`/${post.id}`);
    dispatch(__getPostList());
    setState();
  };

  return (
    <>
      <ModalContainer>
        <ImgUploadContainer>
          <img src={editImg} alt="이미지업로드" />
        </ImgUploadContainer>
        <AddPostInputContainer onSubmit={editPostHandler}>
          <input
            value={title}
            name={'title'}
            onChange={inputHandler}
            placeholder={'제목을 입력해주세요'}
          />
          <textarea
            value={content}
            name={'content'}
            onChange={inputHandler}
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
