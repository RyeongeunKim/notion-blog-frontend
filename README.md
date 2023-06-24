# Notion Blog

## 1. 미리보기
![ezgif com-video-to-gif (1)](https://github.com/RyeongeunKim/notion-blog-frontend/assets/80612679/0458eb41-a194-401c-993d-da0c1356dc91)
<br/>
## 2. 프로젝트 소개

노션은 간편하게 글을 작성할 수 있지만 블로그 플랫폼 처럼 공유하기 쉽지 않습니다. (긴 url, 불편한 검색 등)</br>
노션 API를 이용하여 노션 데이터베이스를 개인 블로그로 커스텀하는 것을 목표로 프로젝트를 진행하고 있습니다.<br/><br/>

## 3. 핵심 기능 정의

- 노션 데이터베이스에 글을 작성하고 개인 블로그에 해당 글을 가져온다.
- 블로그에서 작성한 글 목록을 볼 수 있다.
- 글을 클릭하면 세부 내용을 볼 수 있다.

</br>

## 4. 프로젝트 실행 방법

### 1) 통합 생성
1. 통합을 생성하여 노션 데이터베이스 ID 를 복사합니다 : https://developers.notion.com/docs/create-a-notion-integration</br>
2. 프로젝트(frontend) 루트 폴더에 .env 파일을 추가합니다.</br>
  <img width="148" alt="image" src="https://github.com/RyeongeunKim/notion-blog-frontend/assets/80612679/1a2f0fd0-4b70-4404-8dab-bad66585561f"></br>
3. .env 파일에 아래와 같은 내용을 작성합니다.
   ```
   REACT_APP_NOTION_DATABASE_ID=데이터베이스ID
   ```
</br>

### 2) 백엔드 서버 실행

> 클라이언트 단에서 노션 API 호출 시 도메인 출처가 달라 CORS 에러 발생으로 백앤드 서버 구동이 필요합니다.

1. Backend(Git) : https://github.com/RyeongeunKim/notion-blog-backend.git
2. 프로젝트(backend) 루트 폴더에 .env 파일을 추가합니다.</br>
3. 노션 통합 시크릿 키를 복사합니다 : https://developers.notion.com/docs/authorization
3. .env 파일에 아래와 같은 내용을 작성합니다.
   ```
   NOTION_KEY=시크릿키
   PORT=8080
   ```
</br>

### 3) 실행(Frontend, Backend 동일)
```
> npm
> npm start 
```
</br>
