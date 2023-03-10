import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { __deletePostList } from '../redux/modules/deletePostListSlice';
import { __getPostList } from '../redux/modules/postListSlice';
import Button from '../common/Button';
import Modal from '../components/Modal';
import EditPost from '../components/EditPost';
import styled from 'styled-components';
import useScrollToTop from '../hooks/useScrollToTop';
import useAuthorization from '../hooks/useAuthorization';

const DetailTitleWrapper = styled.div`
  position: relative;
  ${(props) => props.theme.FlexCol}
  min-height: 350px;
  z-index: 0;
`;
const DetailImg = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    width: 100%;
    background: radial-gradient(
      50% 60% at 50% 50%,
      rgb(37 37 37 / 50%) 0,
      #1e1e1e 100%
    );
    backdrop-filter: blur(3px);
  }

  img {
    width: 100%;
    height: 100%;
    opacity: 1;
    object-fit: cover;
  }
`;
const DetailTitleContainer = styled.div`
  padding: 20px;
  margin: 4rem 0 1rem;
  h1 {
    max-width: 600px;
    white-space: normal;
    text-align: center;
    text-shadow: -1px -1px 10px #000, 1px -1px 5px #000, -1px 1px 5px #000,
      1px 1px 5px #000;
  }
`;
const DetailTitle = styled.div`
  position: relative;
`;
const DetailTitleMeta = styled.div`
  ${(props) => props.theme.FlexRow}
  > span {
    margin-right: 1rem;
  }
`;

const DetailContentContainer = styled.div`
  min-height: calc(100vh - 350px);
  padding: 2rem;
  p {
    font-size: ${(props) => props.theme.FS.l};
  }
`;

function DetailPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const post = useSelector((state) => state.postList.postList);
  const postLists = post.find((item) => item.id === Number(id));
  const navigate = useNavigate();
  useAuthorization();

  const deleteBtnHandler = async (id) => {
    const confirmResult = window.confirm('????????? ?????????????????????????');
    if (confirmResult) {
      await dispatch(__deletePostList(id));
      navigate('/');
    }
  };

  useEffect(() => {
    dispatch(__getPostList());
  }, [dispatch]);

  // scroll to top ???
  const topRef = useScrollToTop();

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <>
      {/*????????? ????????? ??????*/}
      {post.length !== 0 && (
        <div ref={topRef}>
          <DetailTitleWrapper>
            <DetailTitleContainer>
              <DetailTitle>
                <h1>
                  {postLists.title.length > 40
                    ? `${postLists.title.slice(0, 40)}...`
                    : postLists.title}
                </h1>
              </DetailTitle>
            </DetailTitleContainer>
            <DetailTitleMeta>
              <span>by. ??????</span>
              <span>{postLists.date}</span>
              <Button meta onClick={() => deleteBtnHandler(postLists.id)}>
                ??????
              </Button>
              <Button meta onClick={toggleModal}>
                ??????
              </Button>
            </DetailTitleMeta>

            <DetailImg>
              <img src={postLists.viewUrl} alt="" />
            </DetailImg>
          </DetailTitleWrapper>
          <DetailContentContainer>
            <p>{postLists.content}</p>
          </DetailContentContainer>

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
