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
        {postList &&
          postList.map((post) => (
            <PostCardContainer to={`/${post.id}`} key={post.id}>
              {/* <PostCardContainer> */}
              <ImgContainer>
                {post.viewUrl !== '' ? (
                  <img src={post.viewUrl} alt="썸네일" />
                ) : (
                  <img src={blank} alt="이미지업로드" />
                )}
              </ImgContainer>
              <PostCardDesc>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
              </PostCardDesc>
              {/* </PostCardContainer> */}
            </PostCardContainer>
          ))}
      </CardSection>
    </>
  );
}

export default HomePage;
