import React, { useState } from 'react';
import styled from 'styled-components';
import imgUpload from '../style/img/upload.svg';
import { FaPlus } from 'react-icons/fa';
import useInputOnChange from '../hooks/useInputOnChange';
import useInputAutoFoucs from '../hooks/useInputAutoFocus';
import { useDispatch } from 'react-redux';
import { __addPostList } from '../redux/modules/addPostListSlice';
import { __getPostList } from '../redux/modules/postListSlice';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import imageCompression from 'browser-image-compression';

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
    object-fit: cover;
    border-radius: ${(props) => props.theme.BR.normal};
    filter: drop-shadow(0px 0px 5px black);
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
function AddPost({ setState }) {
  const [{ title, content, date }, inputHandler] = useInputOnChange({
    title: '',
    content: '',
    date: new Intl.DateTimeFormat('kr').format(new Date()),
  });

  //  viewUrl: imageFile.viewUrl,

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputFoucsRef = useInputAutoFoucs();

  //이미지 추가 관련 로직
  const [imageFile, setImageFile] = useState({
    imageFile: '',
    viewUrl: '',
  });

  const onChangeUploadHandler = async (e) => {
    e.preventDefault();

    const imageFile = e.target.files?.[0];
    console.log('Before Compression: ', imageFile.size);
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(imageFile, options);
      console.log('After Compression: ', compressedFile.size);
      const fileReader = new FileReader();
      console.log(compressedFile);
      fileReader.readAsDataURL(compressedFile);

      fileReader.onload = () => {
        setImageFile({
          viewUrl: String(fileReader.result),
        });
      };
    } catch (error) {
      console.log(error);
    }
  };

  const posts = { title, content, date, viewUrl: imageFile.viewUrl };
  // 추가버튼 클릭시
  const createPostHandler = async (e) => {
    e.preventDefault();
    if (title !== '') {
      await dispatch(__addPostList(posts));
      dispatch(__getPostList());
      navigate('/');
      setState();
    }
  };

  return (
    <>
      <ModalContainer>
        {/* 이미지 */}

        {imageFile.imageFile !== '' ? (
          <label htmlFor="imgUpload">
            <ImgUploadContainer>
              <img src={imageFile.viewUrl} alt="이미지업로드" />
            </ImgUploadContainer>
          </label>
        ) : (
          <label htmlFor="imgUpload">
            <ImgUploadContainer>
              <img src={imgUpload} alt="이미지업로드" />
            </ImgUploadContainer>
          </label>
        )}

        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={onChangeUploadHandler}
          id="imgUpload"
        />

        {/* 추가 */}
        <AddPostInputContainer onSubmit={createPostHandler}>
          <input
            ref={inputFoucsRef}
            value={title}
            name="title"
            onChange={inputHandler}
            maxLength="41"
            placeholder={'제목을 입력해주세요'}
          />
          <textarea
            value={content}
            name="content"
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

export default AddPost;
