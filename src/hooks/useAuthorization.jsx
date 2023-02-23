import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { jwtserver } from '../util/api';

const useAuthorization = () => {
  const navigate = useNavigate();
  const token = Cookies.get('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      authCheck();
    }
  }, [navigate, token]);

  const authCheck = async () => {
    try {
      await jwtserver.get('/user', {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      if (error.response.status === 401) {
        alert('토큰이 만료되었거나 없습니다. 로그인 해주세요!');
        Cookies.remove('token');
        navigate('/login');
      }
    }
  };

  return [token];
};

export default useAuthorization;
