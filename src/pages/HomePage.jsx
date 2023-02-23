import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { __getPostList } from '../redux/modules/postListSlice';
import { Link } from 'react-router-dom';
import blank from '../style/img/blank.svg';
import useScrollToTop from '../hooks/useScrollToTop';
import useAuthorization from '../hooks/useAuthorization';

const PostCardContainer = styled(Link)`
  position: relative;
  ${(props) => props.theme.FlexRow}
  justify-content: flex-start;
  padding: 1rem;
  margin: 1rem 0;
  width: 85%;
  min-width: 37.5rem;
  border-radius: ${(props) => props.theme.BR.normal};
  background-color: ${(props) => props.theme.CL.dark_1};
  transition: 0.2s linear;
  &:hover {
    transform: translateX(5px);
    background-color: #1c1c1c;
  }
`;

const PostCardDesc = styled.div`
  ${(props) => props.theme.FlexCol}
  align-items: flex-start;
  gap: 1rem;
  width: 800px;
  word-break: break-word;
  p {
    opacity: 0.7;
  }
`;

const ImgContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: ${(props) => props.theme.BR.normal};
  overflow: hidden;
  margin-right: 2rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardSection = styled.section`
  ${(props) => props.theme.FlexCol}
  padding: 5rem 0;
`;

const CardEmptyContainer = styled.div`
  ${(props) => props.theme.FlexCol}
  height: calc(100vh - 260px);
  gap: 1rem;
  span {
    color: tomato;
  }
`;

const PostCardDate = styled.div`
  position: absolute;
  bottom: 10px;
  right: 20px;
  opacity: 0.5; ;
`;

function HomePage() {
  const dispatch = useDispatch();
  // scroll to top 훅
  const topRef = useScrollToTop();

  // 첫 로딩될 때 리스트 가져옴
  const { isLoading, error, postList } = useSelector((state) => {
    return state.postList;
  });

  useAuthorization();
  useEffect(() => {
    dispatch(__getPostList());
  }, [dispatch]);

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      {isLoading ? (
        <CardEmptyContainer>로딩중...</CardEmptyContainer>
      ) : (
        <CardSection ref={topRef}>
          {postList.length !== 0 ? (
            postList.map((post) => (
              <PostCardContainer to={`/${post.id}`} key={post.id}>
                <ImgContainer>
                  {post.viewUrl !== '' ? (
                    <img src={post.viewUrl} alt="썸네일" />
                  ) : (
                    <img src={blank} alt="이미지업로드" />
                  )}
                </ImgContainer>
                <PostCardDesc>
                  <h1>{post.title}</h1>
                  <p>
                    {post.content.length > 70
                      ? `${post.content.slice(0, 70)}...`
                      : post.content}
                  </p>
                  <PostCardDate>{post.date}</PostCardDate>
                </PostCardDesc>
              </PostCardContainer>
            ))
          ) : (
            <CardEmptyContainer>
              <h1>아무런 게시글을 등록하지 않았어요 🙂</h1>
              <p>
                사이드바에 <span>추가하기</span> 버튼을 통해 게시글을 추가할 수
                있습니다
              </p>
            </CardEmptyContainer>
          )}
        </CardSection>
      )}
    </>
  );
}

export default HomePage;
