import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { __deletePostList } from '../redux/modules/deletePostListSlice';
import { __getPostList } from '../redux/modules/postListSlice';
import Button from '../common/Button';
import Modal from '../components/Modal';
import EditPost from '../components/EditPost';

function DetailPage() {
  const { id } = useParams();
  const post = useSelector((state) => state.postList.postList);
  const postList = post.find((item) => item.id === Number(id));
  const dispatch = useDispatch();

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
      <div>
        <h1>{postList.title}</h1>
        <p>{postList.content}</p>
        <button onClick={() => deleteBtnHandler(postList.id)}>삭제</button>
        <Button large onClick={toggleModal}>
          수정
        </Button>
        <Modal state={showModal} setState={setShowModal}>
          <EditPost post={postList} setState={toggleModal} />
        </Modal>
      </div>
    </>
  );
}

export default DetailPage;
