# 전승현 201840132 

##  [09월 29일] 학습내용
------

<details>
<summary>상대경로 이미지 삽입 방법</summary>

1. 교재에서의 이미지 삽입은 절대 경로를 사용했다. 상대 경로로 삽입할 때는 어떻게 하면 될까?
2. Import를 사용하는 방법도 있지만 이미지가 많을 경우는 코드가 길어져 적합하지 않다.
3. public 폴더에 images폴더를 생성한다
4. 그리고 필요한 곳에 
~~~
<img src=“image/[이미지 이름]”> 
~~~
형태로 태그를 작성하면 된다.

</details>

<details>
<summary> 음식 앱에 prop-types 도입하기</summary>

1. 정의한 props의 값이 컴포넌트에 제대로 전달되지 않으면 어떻게 해야 할까?
2. Picture props에 {dish.image}가 아닌 {true}를 전달하면 어떻게 될까?
3. 여러가지 이유로 원하는 대로 이미지 등이 나오지 않을 때 이를 검사할 수 있는 방법은 없을까?
4.  이번 절에서는 이 검사 방법에 대해 알아 보도록 한다.

~~~
import React from 'react';
~~~

</details>


<details>
<summary>음식 데이터에 rating 추가하기</summary>

1. • foodLike 배열의 각 요소에 rating(평점)을 추가한다
2. • Rating props를 Food 컴포넌트에 전달하면서 이 값을 검사해 보기로 한다
3. • 그러기 위해서는 props의 자료형을 검사할 수 있도록 만들어 주는 prop-types라는 도구가 필요하
다.
4. • 다음 액션에서는 도구를 설치해 본다.


</details>

<details>
<summary>정상 설치 여부 확인</summary>

1. Package.json 파일을 열어 dependencies 키에 있는 값을 살펴보자
2. Prop-types가 등록되어 있으면 설치가 정상적으로 된 것이다
3. Prop-types는 컴포넌트가 전달받은 props가 원하는 값인지 확인해 주는 역할을 한다
4. prop-types를 통해 미리 ‘Food 컴포넌트는 반드시 picture props가 전달되야 한다’고 정의할 수 있
다.


</details>

<details>
<summary> prop-types 적용하기</summary>

1. import PropTypes from ‘prop-types’; 를 App.js 파일 맨 위에 추가해 주자.
2. 그리고 ration props를 Food 컴포넌트에 전달하자. 
3. 아직 prop-types를 적용한 상태는 아니다.

</details>


<details>
<summary>Food.propTypes 작성하기</summary>

1. 이제 prop-types를 적용해 보자.
2. Food.propType에 객체를 적어 주기만 하면 된다.
3. 모든 props는 문자열이고 반드시 있어야 한다는 조건을 추가해 보자.
4. 실행하면 별 문제가 없어 보이지만, 콘솔 탭을 확인해 보면 경고 메시지가 보인다.

</details>


<details>
<summary>Food.propTypes의 rating 키 값 확인하기</summary>

1. isRequired는 필요하다는 뜻 이다.
2. rating에는 string이라는 자료형이 반드시 필요하다’는 이야기 이다.


</details>

<details>
<summary> prop-types 경고 해결하기</summary>

1. rating: PropTypes.string.isRequired 대신 rating: PropTypes.number.isRequired 로 교체
2. Console탭을 확인해 보면 prop type 경고 메시지가 사라져 있다


</details>


<details>
<summary>다른 종류의 prop-types 경고 해결하기</summary>

1. Picture props의 이름을 image로 바꿔보자.
2. 화면에 사진이 나오지 않게 된다
3. Console 탭을 살펴보면 그 이유를 알 수 있다.
4. Food 컴포넌트에 picture라는 이름의 props가 필요한데, 그 값이 undefined다.

</details>

<details>
<summary>코드 원래대로 돌려 놓기</summary>

1. 이럴 경우도 props오류가 발생한 다는 생각하며, 오류 메시지를 눈으로 익혀 둔다.

</details>

<details>
<summary>isRequired의 뜻 살펴보기</summary>

1. rating props는 필수가 아니어도 되는 항목이다.
2. 다만 값이 전달되는 경우 자료형이 number이기는 해야 한다.

</details>

##  [09월 15일] 학습내용
------

<details>
<summary>JSX</summary>

1. 컴포넌트는 자바스크립트와 HTML을 조합한 JSX라는 문법을 사용해서 만든다.
2. JSX의 문법은 JS와 HTML 문법의 조합한 것으로 사용하다 보면 자연스럽게 익힐 수 있다.

</details>

<details>
<summary>Potato 컴포넌트 만들기</summary>

1. src폴더 안에 Potato.js라는 이름의 새 파일을 만든다.
2. 첫 글자는 반드시 대문자를 사용한다
3. Import 구문을 입력해야 리액트가 JSX를 이해할 수 있으니 반드시 입력한다.

~~~
import React from 'react';
~~~

</details>


<details>
<summary>Potato()함수를 작성한다</summary>

~~~
import React from 'react';
function Potato() {

}
~~~


</details>

<details>
<summary>Potato 컴포넌트가 JSX를 반환하도록 만든다.</summary>

~~~
import React from 'react';
function Potato() {
    return <h3>I love potato</h3>;
}
~~~

</details>

<details>
<summary>마지막 줄에 export 구문을 다음과 같이 추가한다.</summary>

~~~
import React from 'react';
function Potato() {
    return <h3>I love potato</h3>;
}

export default Potato;
~~~

</details>


<details>
<summary>Photo컴포넌트 사용하기.</summary>

1. Export구문을 추가하면 다른 파일에서 해당 컴포넌트를 사용할 수 있다.
2. 교재의 액션06 처럼 코딩하는 경우 오류가 발생한다.

~~~
ReactDOM.render(<App />, document.getElementById('root'));
-> ReactDOM.render(<App /><Potato />, document.getElementById('root'));
~~~

</details>


<details>
<summary>props</summary>

- Props란 컴포넌트에서 컴포넌트로 전달하는 데이터를 말한다. 함수의 매개변수 역할을 하는 것이다.<br>
 따라서 props를 사용하면 컴포넌트를 효율적으로 사용할 수 있다.


</details>

<details>
<summary>map() 함수로 컴포넌트 많이 만들기</summary>

1. 이제 앞서 만든 foodLike에 있는 데이터로 컴포넌트를 여러 개 만든다.
2. 이때 사용되는 함수가 JS의 map()이다.
3. 이번 절에서는 map()함수의 동작을 크롬 개발자 도구의 console을 통해 살펴본다

</details>


<details>
<summary>import를 이용한 이미지 삽입 방법</summary>

1. 교재에서의 이미지 삽입은 절대 경로를 사용했다. 상대 경로로 삽입할 때는 어떻게 하면 될까?
2. 먼저 알아 둬야 할 것은 src폴더 내부에 이미지를 저장해야 한다는 것이다.
3. 그리고 상대 경로 삽입 방법은 2가지가 있는데 한가지는 import를 사용하는 방법과 require를 사용하는 방법이다.
4. 여기서는 import방법을 설명한다.
5. img01은 별칭이고 실제 이미지의 위치는 /src/images/1.jpg이다. 반드시 src 아래 두어야 한다.
6. 그리고 실제 사용한 때는 img01로 사용한다.

~~~
import img01 from './images/1.jpg'
~~~
</details>




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

