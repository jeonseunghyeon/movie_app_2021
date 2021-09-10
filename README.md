# 전승현 201840132 

##  [09월 08일] 학습내용
-------
<details>
<summary>create-react-app으로 리액트 앱 만들기</summary>

1. 명령 프롬프트를 실행한 다음 리액트 앱을 만들고 싶은 디렉토리로 이동해서 다음과 같이 명령을 실행한다.

2. 작업 디렉토리를 미리 만들고 실행하는 것이 작업하기가 편하다.
3. 앱의 이름은 자유롭게 해도 되지만 여기서는 movie_app_2021으로 통일한다.
4. 이제 다음과 같이 명령을 실행하면 작업 디렉토리 안에 앱 이름 디렉토리가 자동으로 생성되고 그 안에 필요한 파일들을 자동으로 설치해준다.

5. 명령은> npx create-react-app movie_app_2021

6. install중에 warning이 발생하지만 상관없다.

</details>

<details>
<summary>프로젝트 폴더 선택하기</summary>

1. 폴더를 선택하고 진행했으면 movie_app_2021폴더를 펼쳐 내용을 살펴본다

2. 만일 미리 열지 않았으면 File > Open Folder...메뉴를 선택하고 열면 된다


</details>

</details>

<details>
<summary>README.md 파일 수정하기</summary>

1. README.md 파일의 내용을 모두 지우고, 아래와 같이 입력한 후 저장한다.

2. README.md 파일은 1학기때와 같이 가장 위에 이름과 학번이 오게 하고,
다음 줄부터 날짜를 쓴 다음 매주 학습내용을 작성한다.

3. 가장 최근의 내용이 가장 위로 올라오게 작성한다.


</details>

<details>
<summary>package.json 파일 수정하기</summary>

1. test, eject 명령어는 사용하지 않기 때문에 삭제 한다. 그리고 파일을 저장한다.

</details>

<details>
<summary>리액트 앱 실행하기</summary>

1. 명령 프롬프트에서 프로젝트 폴더로 이동한 다음, >npm start로 앱을 실행한다

2. Terminal을 이용 할 때는 경로를 주의해야 한다.

3. 웹브라우저에 리액트 로고가 나타나면 정상적으로 프로젝트가 생성된 것이다.

</details>


<details>
<summary>리액트 앱 종료하기</summary>

1. App 실행되면 웹브라우저에 다음 화면이 나타난다.

2. App을 종료하려면 프롬프트에서 Ctrl + c를 누른다

</details>

<details>
<summary>깃허브에 리액트 앱 업로드하기</summary>

1. 로컬 저장소 초기화하기
+ 교재에는 구체적인 설명이 나와 있지 않으나 프로젝트 자체의 용량은 크지 않치만 node_modules 폴더에 파일이 많아 업로드,
복사, 삭제 시에 시간이 많이 소요된다.

+ 또한 필요한 것은 새로 작성된 source이기 때문에 node_modules폴더를 제외하도록.gitignore파일을 작성한다

+ VScode를 사용할 경우 좌측하단의 구름 아이콘을 클릭하면 바로 push가 가능하다.

+ 교재에서는 루트 폴더라고 하는데, 이는 프로젝트의 루트를 말하는 것이다. 교재 전체에서 그렇게 사
용하고 있으니 주의해야 한다.

2. 깃허브에 저장소 만들기

3. 깃허브 저장소에 리액트 앱 업로드하기

4. 깃허브 저장소 확인하기

</details>


<details>
<summary>컴포넌트</summary>

1. function으로 정의 내린 곳을 컴포넌트라고 한다

2. 아래 코드를 살펴보면 App()함수가 정의되어 있고, 함수는 html문서를 return해 주고 있다. 리액트에서는 이것을 "App컴포넌트를 정의했다"고한다.

</details>


<details>
<summary>JSX</summary>

1. 컴포넌트는 자바스크립트와 HTML을 조합한 JSX라는 문법을 사용해서 만든다

2. JSX의 문법은 JS와 HTML 문법의 조합한 것으로 사용하다 보면 자연스럽게 익힐 수 있다.

</details>

