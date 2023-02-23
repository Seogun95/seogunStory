# 서근스토리

향해 12기 CRUD / JWT 로그인 기능 과제 23.02.17 - 23.02.24

## 목차

- [1. 프로젝트 소개](#1-프로젝트-소개)
- [2. 프로젝트 와이어 프레임](#2-프로젝트-와이어-프레임)
- [3. 프로젝트 S.A](#3-프로젝트-sa)
- [4. 기술스택](#4-기술스택)
- [5. API Table](#5-api-table)
- [6. 구현기능](#6-구현-기능)
- [7. 구현영상](#7-구현-영상)

## 1. 프로젝트 소개

로그인을 하고, 블로그에 이미지와 글을 모두 작성해보세요!

## 2. 프로젝트 와이어 프레임

![CleanShot 2023-02-23 at 11 15 44](https://user-images.githubusercontent.com/76584961/220807196-ddceb1f1-8fd8-4633-8f31-e2f230eeffda.png)
![CleanShot 2023-02-23 at 11 15 53](https://user-images.githubusercontent.com/76584961/220807211-6dbe0a08-9e20-4a27-b571-ff24e0cfecd4.png)

## 3. 프로젝트 S.A

[작성중]

## 4. 기술스택

<p>
  <img width="30" src="https://user-images.githubusercontent.com/76584961/216442416-85fcfa93-7512-4b9e-9ff4-1f3b4a9a6567.gif" alt="js">
  <img width="30" src="https://user-images.githubusercontent.com/76584961/218177725-96163589-fe2d-46ee-87b8-554b1b085260.png" alt="react">
  <img width="30" src="https://user-images.githubusercontent.com/76584961/218177308-36505717-ca4c-4da9-bb04-ffefa5ace9aa.png" alt="styled">
 </p>

## 5. API Table

| Number | Method   | URL        | Description     | Request                                                                                                     | Response                                                                                                                                                                              |
| ------ | -------- | ---------- | --------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1      | `POST`   | /blog      | 글작성          | { postTitle: ‘제목, postDate: 2023년 01월 01일, postAutor: ‘작성자’, postContent: ‘본문내용’, postId: id, } | { ”ok”:true }                                                                                                                                                                         |
| 2      | `GET`    | /blog      | 홈 글 전체 조회 | -                                                                                                           | { ”ok”:true, postCategory: ‘카테고리’, postTitle: ‘제목’, postDate: 2023년 01월 01일, postAutor: ‘작성자’, postContent: ‘본문내용’ }                                                  |
| 3      | `PUT`    | /blog/{id} | 글 수정         | { postTitle: ‘제목’, postContent: ‘본문내용’, }                                                             | -                                                                                                                                                                                     |
| 4      | `GET`    | /blog/{id} | 디테일 글 조회  | -                                                                                                           | { ”ok”:true, postTitle: ‘제목’, postContent: ‘본문내용’ }                                                                                                                             |
| 5      | `DELETE` | /blog/{id} | 글 삭제         | -                                                                                                           | -                                                                                                                                                                                     |
| 6      | `POST`   | register   |                 | body <br />id: string <br />password: string                                                                | 201 없음                                                                                                                                                                              |
| 7      | `POST`   | login      |                 | body <br />id: string <br />password: string                                                                | 201 token: string { "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImtvYjIxMDAiLCJpYXQiOjE2NzI3NTUyMjMsImV4cCI6MTY3Mjc1NTI4M30.aVVgNMb69m4HQ_OxkJ9Rpd5or98OnEMU8SajJZvNnkk" } |
| 8      | `GET`    | login      |                 | header <br />authorization: string <br />ex) authorization : Bearer<br />asdffsfsdfafljeope                 | header authorization: string ex) authorization : Bearer asdffsfsdfafljeop                                                                                                             |

## 6. 구현 기능

### 1) 로그인 화면

![CleanShot 2023-02-23 at 11 09 59](https://user-images.githubusercontent.com/76584961/220807536-fd665d3b-8502-4504-83f7-e7b94481206a.png)
![CleanShot 2023-02-23 at 11 10 12](https://user-images.githubusercontent.com/76584961/220807545-d8952696-6c8c-4172-a4d7-7858cd36647d.png)

### 2) 홈 화면

![CleanShot 2023-02-23 at 11 34 34](https://user-images.githubusercontent.com/76584961/220809308-eac317fe-de2f-4343-8dda-fb8441775fe2.png)
![CleanShot 2023-02-23 at 11 10 29](https://user-images.githubusercontent.com/76584961/220807578-285aa033-7c96-4a77-aff6-b7132e0afb53.png)

### 3) 게시글 추가 모달창

![CleanShot 2023-02-23 at 11 20 50](https://user-images.githubusercontent.com/76584961/220807680-7b9a8d1d-1ed0-4a3a-a4cd-5bdfcda76d29.png)
![CleanShot 2023-02-23 at 11 20 59](https://user-images.githubusercontent.com/76584961/220807689-c5eaccdf-4154-4ba8-9cd6-0c531b41d6fe.png)

### 4) 디테일 화면 및 수정 모달창

![CleanShot 2023-02-23 at 11 21 39](https://user-images.githubusercontent.com/76584961/220807781-c1eeaad8-a890-4a10-ab78-495cfe42ea2c.png)
![CleanShot 2023-02-23 at 11 21 43](https://user-images.githubusercontent.com/76584961/220807788-1db5836b-d3c3-445b-9ee0-f0579f3aaaab.png)

## 7. 구현 영상

![CleanShot 2023-02-23 at 11 10 58](https://user-images.githubusercontent.com/76584961/220807854-150c32b2-40cd-4f6e-98d1-bac0dd5eefc3.gif)
