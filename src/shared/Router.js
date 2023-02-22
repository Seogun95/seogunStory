import React from 'react';
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 한다.
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import Layout from './Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login/" element={<LoginPage />} />
        <Route path="signup/" element={<SignupPage />} />
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/:id"
          element={
            <Layout>
              <DetailPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
