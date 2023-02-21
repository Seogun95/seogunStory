import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { __deletePostList } from '../redux/modules/deletePostListSlice';
import { __getPostList } from '../redux/modules/postListSlice';
import Button from '../common/Button';
import Modal from '../components/Modal';
import EditPost from '../components/EditPost';
import styled from 'styled-components';

const DetailTitleWrapper = styled.div`
  ${(props) => props.theme.FlexRow}
  min-height: 250px;
  background-color: ${(props) => props.theme.CL.dark_3};
`;

const DetailTitleContainer = styled.div`
  padding: 20px;
  margin: 3rem 0 1rem;
  h1 {
    max-width: 600px;
    white-space: normal;
  }
`;

function DetailPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const post = useSelector((state) => state.postList.postList);
  const postLists = post.find((item) => item.id === Number(id));

  const navigate = useNavigate();

  const deleteBtnHandler = async (id) => {
    await dispatch(__deletePostList(id));
    navigate('/');
  };

  useEffect(() => {
    dispatch(__getPostList());
  }, [dispatch]);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <>
      {/*조건부 렌더링 구문*/}
      {post.length !== 0 && (
        <div>
          <DetailTitleWrapper>
            <DetailTitleContainer>
              <h1>{postLists.title}</h1>
            </DetailTitleContainer>
          </DetailTitleWrapper>
          <p>{postLists.content}</p>
          <button onClick={() => deleteBtnHandler(postLists.id)}>삭제</button>
          <Button large onClick={toggleModal}>
            수정
          </Button>
          {showModal === true && (
            <Modal state={showModal} setState={setShowModal}>
              <EditPost post={postLists} setState={toggleModal} />
            </Modal>
          )}
        </div>
      )}
    </>
  );
}

export default DetailPage;
