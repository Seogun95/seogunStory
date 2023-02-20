import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { __getPostList } from '../redux/modules/postListSlice';

const PostCardContainer = styled.div`
  ${(props) => props.theme.FlexRow}
  justify-content: flex-start;
  padding: 1rem;
  margin: 2rem 0;
  width: 100%;
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
  height: 150px;
  border-radius: ${(props) => props.theme.BR.normal};
  overflow: hidden;
  margin-right: 2rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function PostList() {
  const dispatch = useDispatch();

  // 첫 로딩될 때 리스트 가져오기 & display 바뀔때
  const { isLoading, error, postList } = useSelector((state) => {
    return state.postList;
  });

  useEffect(() => {
    dispatch(__getPostList());
  }, [dispatch]);

  // 상세 버튼 클릭시
  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {postList.map((post) => (
        <PostCardContainer key={post.id}>
          <ImgContainer>
            <img src="https://i.imgur.com/JPVRPFW.png" alt="썸네일" />
          </ImgContainer>
          <PostCardDesc>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </PostCardDesc>
        </PostCardContainer>
      ))}
    </div>
  );
}

export default PostList;
