import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { __getPostList } from '../redux/modules/postListSlice';
import { Link } from 'react-router-dom';
import blank from '../style/img/blank.svg';

const PostCardContainer = styled(Link)`
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
  }
`;

const PostCardDesc = styled.div`
  ${(props) => props.theme.FlexCol}
  align-items: flex-start;
  gap: 1rem;
  width: 500px;
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
  ${(props) => props.theme.FlexRow}
  height: calc(100vh - 260px);
`;

function HomePage() {
  const dispatch = useDispatch();

  // 첫 로딩될 때 리스트 가져옴
  const { isLoading, error, postList } = useSelector((state) => {
    return state.postList;
  });
  console.log(postList);
  useEffect(() => {
    dispatch(__getPostList());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <CardSection>
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
                <h1>
                  {post.title.length > 20
                    ? `${post.title.slice(0, 20)}...`
                    : post.title}
                </h1>

                <p>
                  {' '}
                  {post.content.length > 70
                    ? `${post.content.slice(0, 70)}...`
                    : post.content}
                </p>
              </PostCardDesc>
            </PostCardContainer>
          ))
        ) : (
          <CardEmptyContainer>
            <h1>아무런 게시글을 등록하지 않았어요!</h1>
          </CardEmptyContainer>
        )}
      </CardSection>
    </>
  );
}

export default HomePage;
