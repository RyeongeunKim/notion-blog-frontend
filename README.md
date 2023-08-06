# Notion Blog

## 1. 미리보기
![ezgif com-video-to-gif (6)](https://github.com/RyeongeunKim/notion-blog-frontend/assets/80612679/3d5afc97-f45b-464d-b8c6-eb077b1ced59)

<br/>

## 2. 프로젝트 소개

노션은 사용하기 편리한 플랫폼이지만, 기존의 블로그 플랫폼으로 활용하기에는 몇 가지 제한이 있습니다. </br>
특히 긴 URL이나 외부 사용자 접근 시 로그인 과정 등으로 인해 블로그로서의 공유와 접근성이 어렵다는 문제가 있습니다.</br>
</br>
이러한 문제를 해결하고자 노션 API를 활용하여 개인 블로그를 커스터마이징하는 프로젝트를 진행하고 있습니다. </br>
이 프로젝트의 목표는 노션 데이터베이스를 활용하여 간단하고 직관적인 블로그 플랫폼을 구축하는 것입니다. </br>
이를 통해 노션의 강력한 기능과 편리한 사용성을 그대로 유지하면서, 블로그로서의 공유와 접근성을 높일 수 있습니다.</br>
</br>
노션으로 작성한 글을 블로그 형태로 표현하고, </br>글의 카테고리, 태그, 검색 기능 등을 추가하여 사용자에게 더욱 편리한 블로그 경험을 제공할 예정입니다. </br>
이를 통해 노션 사용자들에게 블로그 플랫폼의 새로운 가능성을 열어주고, </br>더 나은 노션 활용 방법을 제시하는데 초점을 맞추고 있습니다.</br>

</br>

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
