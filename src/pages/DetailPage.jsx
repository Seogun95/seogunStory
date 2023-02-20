import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { __deletePostList } from '../redux/modules/deletePostListSlice';
import { __getPostList } from '../redux/modules/postListSlice';

function DetailPage() {
  const { id } = useParams();
  const post = useSelector((state) => state.postList.postList);
  const postList = post.find((item) => item.id === Number(id));
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const deleteBtnHandler = async (id) => {
    await dispatch(__deletePostList(id));
    navigate(-1);
    dispatch(__getPostList());
  };

  useEffect(() => {
    dispatch(__getPostList());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>{postList.title}</h1>
        <p>{postList.content}</p>
        <button onClick={() => deleteBtnHandler(postList.id)}>삭제</button>
      </div>
    </>
  );
}

export default DetailPage;
