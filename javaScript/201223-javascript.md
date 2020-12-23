# 31. RegExp

- 정규 표현식(regular expression, regexp)은 일정한 패턴을 가진 문자열의 집합을 표현하기 위해 사용하는 형식 언어(formal language)다. 정규 표현식은 자바스크립트의 고유 문법이 아니며, 대부분의 프로그래밍 언어와 코드 에디터에 내장되어 있다. 자바스크립트는 펄(Perl)의 정규 표현식 문법을 ES3부터 도입했다.
- 정규 표현식은 문자열을 대상으로 패턴 매칭 기능을 제공한다. 패턴 매칭 기능이란 특정 패턴과 일치하는 문자열을 검색하거나 추출 또는 치환할 수 있는 기능을 말한다.
- 정규 표현식 객체(RegExp 객체)를 생성하기 위해서는 정규 표현식 리터럴과 RegExp 생성자 함수를 사용할 수 있다.
- 정규 표현식 리터럴은 패턴과 플래그로 구성된다.

![Untitled](https://user-images.githubusercontent.com/72958778/102950998-302ccb00-450f-11eb-9020-32ac038dc672.png)


```markdown
// 정규 표현식
const target = 'Is this all there is?';

const regexp = new RegExp(/is/i); // ES6
// const regexp = new RegExp(/is/, 'i');
// const regexp = new RegExp('is', 'i');

regexp.test(target); // -> true
```

## 플래그

- 플래그는 i, g, m 3종류가 있다
- 하나 이상의 플래그를 동시에 설정 가능 (순서 상관 없음)
- i - ignore case 대소문자를 구별하지 않고 패턴을 검색한다.
- g - Global 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색한다.
- m - Multi line	문자열의 행이 바뀌더라도 패턴 검색을 계속한다.

## RegExp 메서드

RegExp.prototype.exec

```markdown
const target = 'Is this all there is?';
const regExp = /is/;

regExp.exec(target); 
// -> ["is", index: 5, input: "Is this all there is?", groups: undefined]
```

RegExp.prototype.test

```markdown
const target = 'Is this all there is?';
const regExp = /is/;

regExp.test(target); // -> true
```

String.prototype.match

```markdown
const target = 'Is this all there is?';
const regExp = /is/;

target.match(regExp); 
// -> ["is", index: 5, input: "Is this all there is?", groups: undefined]
```

## 아래의 방법은 손으로 익혀본다.

어떤 문자열 내에 패턴과 일치하는 문자열이 존재할 때 ‘정규 표현식과 매치(match)한다’고 표현한다. 패턴을 표현하는 몇 가지 방법에 대해 살펴보자.

## 패턴

- [문자열 검색](https://poiemaweb.com/fastcampus/regexp#51-%EB%AC%B8%EC%9E%90%EC%97%B4-%EA%B2%80%EC%83%89)
- [임의의 문자열 검색](https://poiemaweb.com/fastcampus/regexp#52-%EC%9E%84%EC%9D%98%EC%9D%98-%EB%AC%B8%EC%9E%90%EC%97%B4-%EA%B2%80%EC%83%89)
- [반복 검색](https://poiemaweb.com/fastcampus/regexp#53-%EB%B0%98%EB%B3%B5-%EA%B2%80%EC%83%89)
- [OR 검색](https://poiemaweb.com/fastcampus/regexp#54-or-%EA%B2%80%EC%83%89)
- [NOT 검색](https://poiemaweb.com/fastcampus/regexp#55-not-%EA%B2%80%EC%83%89)
- [시작 위치로 검색](https://poiemaweb.com/fastcampus/regexp#56-%EC%8B%9C%EC%9E%91-%EC%9C%84%EC%B9%98%EB%A1%9C-%EA%B2%80%EC%83%89)
- [마지막 위치로 검색](https://poiemaweb.com/fastcampus/regexp#57-%EB%A7%88%EC%A7%80%EB%A7%89-%EC%9C%84%EC%B9%98%EB%A1%9C-%EA%B2%80%EC%83%89)

## 자주 사용하는 정규표현식

- [특정 단어로 시작하는지 검사](https://poiemaweb.com/fastcampus/regexp#61-%ED%8A%B9%EC%A0%95-%EB%8B%A8%EC%96%B4%EB%A1%9C-%EC%8B%9C%EC%9E%91%ED%95%98%EB%8A%94%EC%A7%80-%EA%B2%80%EC%82%AC)
- [특정 단어로 끝나는지 검사](https://poiemaweb.com/fastcampus/regexp#62-%ED%8A%B9%EC%A0%95-%EB%8B%A8%EC%96%B4%EB%A1%9C-%EB%81%9D%EB%82%98%EB%8A%94%EC%A7%80-%EA%B2%80%EC%82%AC)
- [숫자로만 이루어진 문자열인지 검사](https://poiemaweb.com/fastcampus/regexp#63-%EC%88%AB%EC%9E%90%EB%A1%9C%EB%A7%8C-%EC%9D%B4%EB%A3%A8%EC%96%B4%EC%A7%84-%EB%AC%B8%EC%9E%90%EC%97%B4%EC%9D%B8%EC%A7%80-%EA%B2%80%EC%82%AC)
- [하나 이상의 공백으로 시작하는지 검사](https://poiemaweb.com/fastcampus/regexp#64-%ED%95%98%EB%82%98-%EC%9D%B4%EC%83%81%EC%9D%98-%EA%B3%B5%EB%B0%B1%EC%9C%BC%EB%A1%9C-%EC%8B%9C%EC%9E%91%ED%95%98%EB%8A%94%EC%A7%80-%EA%B2%80%EC%82%AC)
- [아이디로 사용 가능한지 검사](https://poiemaweb.com/fastcampus/regexp#65-%EC%95%84%EC%9D%B4%EB%94%94%EB%A1%9C-%EC%82%AC%EC%9A%A9-%EA%B0%80%EB%8A%A5%ED%95%9C%EC%A7%80-%EA%B2%80%EC%82%AC)
- [메일 주소 형식에 맞는지 검사](https://poiemaweb.com/fastcampus/regexp#66-%EB%A9%94%EC%9D%BC-%EC%A3%BC%EC%86%8C-%ED%98%95%EC%8B%9D%EC%97%90-%EB%A7%9E%EB%8A%94%EC%A7%80-%EA%B2%80%EC%82%AC)
- [핸드폰 번호 형식에 맞는지 검사](https://poiemaweb.com/fastcampus/regexp#67-%ED%95%B8%EB%93%9C%ED%8F%B0-%EB%B2%88%ED%98%B8-%ED%98%95%EC%8B%9D%EC%97%90-%EB%A7%9E%EB%8A%94%EC%A7%80-%EA%B2%80%EC%82%AC)
- [특수 문자 포함 여부 검사](https://poiemaweb.com/fastcampus/regexp#68-%ED%8A%B9%EC%88%98-%EB%AC%B8%EC%9E%90-%ED%8F%AC%ED%95%A8-%EC%97%AC%EB%B6%80-%EA%B2%80%EC%82%AC)

# 32. String

- 표준 빌트인 객체(standard built-in object)인 String은 원시 타입인 문자열을 다룰 때 유용한 프로퍼티와 메서드를 제공한다
- String 생성자 함수에 인수를 전달하지 않고 new 연산자와 함께 호출하면 [[StringData]] 내부 슬롯에 빈 문자열을 할당한 String 래퍼 객체를 생성한다.
- String 래퍼 객체는 배열과 마찬가지로 length 프로퍼티와 인덱스를 나타내는 숫자 형식의 문자열을 프로퍼티 키로, 각 문자를 프로퍼티 값으로 갖는 유사 배열 객체이면서 이터러블이다.
- String 생성자 함수에 문자열이 아닌 값을 인수로 전달하면 전달받은 인수를 문자열로 강제 변환한 후, [[StringData]] 내부 슬롯에 변환된 문자열을 할당한 String 래퍼 객체를 생성한다.

```markdown
const strObj = new String();
console.log(strObj); // String {length: 0, [[PrimitiveValue]]: ""}
```

# **length 프로퍼티**

length 프로퍼티는 문자열의 문자 개수를 반환한다.

```markdown
'Hello'.length;    // -> 5
'안녕하세요!'.length; // -> 6
```

## String 메서드

- String 객체의 메서드는 언제나 새로운 문자열을 반환한다. 문자열은 변경 불가능(immutable)한 원시값이기 때문에 String 래퍼 객체도 읽기 전용(read only) 객체로 제공된다.

## 아래 메서드는 손으로 익혀보자.

- [3.1. String.prototype.indexOf](https://poiemaweb.com/fastcampus/string#31-stringprototypeindexof)
- [3.2. String.prototype.search](https://poiemaweb.com/fastcampus/string#32-stringprototypesearch)
- [3.3. String.prototype.includes](https://poiemaweb.com/fastcampus/string#33-stringprototypeincludes)
- [3.4. String.prototype.startsWith](https://poiemaweb.com/fastcampus/string#34-stringprototypestartswith)
- [3.5. String.prototype.endsWith](https://poiemaweb.com/fastcampus/string#35-stringprototypeendswith)
- [3.6. String.prototype.charAt](https://poiemaweb.com/fastcampus/string#36-stringprototypecharat)
- [3.7. String.prototype.substring](https://poiemaweb.com/fastcampus/string#37-stringprototypesubstring)
- [3.8. String.prototype.slice](https://poiemaweb.com/fastcampus/string#38-stringprototypeslice)
- [3.9. String.prototype.toUpperCase](https://poiemaweb.com/fastcampus/string#39-stringprototypetouppercase)
- [3.10. String.prototype.toLowerCase](https://poiemaweb.com/fastcampus/string#310-stringprototypetolowercase)
- [3.11. String.prototype.trim](https://poiemaweb.com/fastcampus/string#311-stringprototypetrim)
- [3.12. String.prototype.repeat](https://poiemaweb.com/fastcampus/string#312-stringprototyperepeat)
- [3.13. String.prototype.replace](https://poiemaweb.com/fastcampus/string#313-stringprototypereplace)
- [3.14. String.prototype.split](https://poiemaweb.com/fastcampus/string#314-stringprototypesplit)

# 35. 스프레드 문법

- ES6에서 도입된 스프레드 문법(spread syntax; 전개 문법) ...은 하나로 뭉쳐 있는 여러 값들의 집합을 펼쳐서(전개, 분산하여, spread) 개별적인 값들의 목록으로 만든다.
- 스프레드 문법을 사용할 수 있는 대상은 Array, String, Map, Set, DOM 컬렉션(NodeList, HTMLCollection), arguments와 같이 for…of 문으로 순회할 수 있는 이터러블에 한정된다.
- 스프레드 문법의 결과물은 값으로 사용할 수 없고, 다음과 같이 쉼표로 구분한 값의 목록을 사용하는 문맥에서만 사용할 수 있다.
    - 함수 호출문의 인수 목록
    - 배열 리터럴의 요소 목록
    - 객체 리터럴의 프로퍼티 목록

스프레드 문법은 앞에서 살펴본 [Rest 파라미터](https://poiemaweb.com/fastcampus/es6-function#4-rest-%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0)와 형태가 동일하여 혼동할 수 있으므로 주의할 필요가 있다.

- Rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받기 위해 매개변수 이름 앞에 `...`을 붙이는 것이다. 스프레드 문법은 여러 개의 값이 하나로 뭉쳐 있는 배열과 같은 이터러블을 펼쳐서 개별적인 값들의 목록을 만드는 것이다. 따라서 Rest 파라미터와 스프레드 문법은 서로 반대의 개념이다.

## 함수 호출문의 인수 목록에서 사용하는 경우

요소들의 집합인 배열을 펼쳐서 개별적인 값들의 목록으로 만든 후, 이를 함수의 인수 목록으로 전달해야 하는 경우가 있다.

Math.max 메서드는 매개변수 개수를 확정할 수 없는 가변 인자 함수이다.

```markdown
const arr = [1, 2, 3];

// 스프레드 문법을 사용하여 배열 arr을 1, 2, 3으로 펼쳐서 Math.max에 전달한다.
// Math.max(...[1, 2, 3])은 Math.max(1, 2, 3)과 같다.
const max = Math.max(...arr); // -> 3
```

## 배열 리터럴 내부에서 사용하는 경우

스프레드 문법을 배열 리터럴에서 사용하면 ES5에서 사용하던 기존의 방식보다 더욱 간결하고 가독성 좋게 표현할 수 있다.

## concat

스프레드 문법을 사용하면 별도의 메서드를 사용하지 않고 배열 리터럴만으로 2개의 배열을 1개의 배열로 결합할 수 있다.

```markdown
// ES6
const arr = [...[1, 2], ...[3, 4]];
console.log(arr); // [1, 2, 3, 4]
```

## splice

```markdown
// ES6
const arr1 = [1, 4];
const arr2 = [2, 3];

arr1.splice(1, 0, ...arr2);
console.log(arr1); // [1, 2, 3, 4]
```

## 배열 복사

```markdown
// ES6
const origin = [1, 2];
const copy = [...origin];

console.log(copy); // [1, 2]
console.log(copy === origin); // false
```

## 이터러블을 배열로 변환

arguments 객체는 이터러블이면서 유사 배열 객체이다. 따라서 스프레드 문법의 대상이 될 수 있다.

```markdown
// ES6
function sum() {
  // 이터러블이면서 유사 배열 객체인 arguments를 배열로 변환
  return [...arguments].reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3)); // 6
```

rest 파라미터를 사용해서 사용 가능

```markdown
// Rest 파라미터 args는 함수에 전달된 인수들의 목록을 배열로 전달받는다.
const sum = (...args) => args.reduce((pre, cur) => pre + cur, 0);

console.log(sum(1, 2, 3)); // 6
```

## 객체 리터럴 내부에서 사용하는 경우

```markdown
// 객체 병합. 프로퍼티가 중복되는 경우, 뒤에 위치한 프로퍼티가 우선권을 갖는다.
const merged = { ...{ x: 1, y: 2 }, ...{ y: 10, z: 3 } };
console.log(merged); // { x: 1, y: 10, z: 3 }

// 특정 프로퍼티 변경
const changed = { ...{ x: 1, y: 2 }, y: 100 };
// changed = { ...{ x: 1, y: 2 }, ...{ y: 100 } }
console.log(changed); // { x: 1, y: 100 }

// 프로퍼티 추가
const added = { ...{ x: 1, y: 2 }, z: 0 };
// added = { ...{ x: 1, y: 2 }, ...{ z: 0 } }
console.log(added); // { x: 1, y: 2, z: 0 }
```

# 36. 디스트럭처링 할당

디스트럭처링 할당(destructuring assignment; 구조 분해 할당)은 구조화된 배열과 같은 이터러블 또는 객체를 destructuring(비구조화, 구조 파괴)하여 1개 이상의 변수에 개별적으로 할당하는 것을 말한다. 배열과 같은 이터러블 또는 객체 리터럴에서 필요한 값만 추출하여 변수에 할당할 때 유용하다.

## 배열 디스트럭처링 할당

- 배열 디스트럭처링 할당의 대상(할당문의 우변)은 이터러블이어야 하며, 할당 기준은 배열의 인덱스다. 즉, 순서대로 할당된다.

```markdown
const arr = [1, 2, 3];

// ES6 배열 디스트럭처링 할당
// 변수 one, two, three를 선언하고 배열 arr을 디스트럭처링하여 할당한다.
// 이때 할당 기준은 배열의 인덱스다.
const [one, two, three] = arr;

console.log(one, two, three); // 1 2 3
```

- 우변에 이터러블을 할당하지 않으면 에러가 발생한다.

```markdown
const [x, y] = [1, 2];

const [x, y]; // SyntaxError: Missing initializer in destructuring declaration

const [a, b] = {}; // TypeError: {} is not iterable
```

- 배열 디스트럭처링 할당의 변수 선언문은 다음처럼 선언과 할당을 분리할 수도 있다. 단, 이 경우 const 키워드로 변수를 선언할 수 없으므로 권장하지 않는다.

```markdown
let x, y;
[x, y] = [1, 2];
```

- 배열 디스트럭처링 할당의 기준은 배열의 인덱스다. 즉, 순서대로 할당된다. 이때 변수의 개수와 이터러블의 요소 개수가 반드시 일치할 필요는 없다.

```markdown
const [a, b] = [1, 2];
console.log(a, b); // 1 2

const [c, d] = [1];
console.log(c, d); // 1 undefined

const [e, f] = [1, 2, 3];
console.log(e, f); // 1 2

const [g, , h] = [1, 2, 3];
console.log(g, h); // 1 3
```

- 배열 디스트럭처링 할당을 위한 변수에 기본값을 설정할 수 있다.

```markdown
const arr = [1, 2, 3];

// ES6 배열 디스트럭처링 할당
// 변수 one, two, three를 선언하고 배열 arr을 디스트럭처링하여 할당한다.
// 이때 할당 기준은 배열의 인덱스다.
const [one, two, three] = arr;

console.log(one, two, three); // 1 2 3
```

- 배열 디스트럭처링 할당을 위한 변수에 Rest 파라미터와 유사하게 Rest 요소(Rest element) ...을 사용할 수 있다. Rest 요소는 Rest 파라미터와 마찬가지로 반드시 마지막에 위치해야 한다.

```markdown
// Rest 요소
const [x, ...y] = [1, 2, 3];
console.log(x, y); // 1 [ 2, 3 ]
```

## 객체 디스트럭처링 할당

ES6의 객체 디스트럭처링 할당은 객체의 각 프로퍼티를 객체로부터 추출하여 1개 이상의 변수에 할당한다. 이때 객체 디스트럭처링 할당의 대상(할당문의 우변)은 객체이어야 하며, 할당 기준은 프로퍼티 키다. 즉, 순서는 의미가 없으며 선언된 변수 이름과 프로퍼티 키가 일치하면 할당된다.

```markdown
const user = { firstName: 'Ungmo', lastName: 'Lee' };

// ES6 객체 디스트럭처링 할당
// 변수 lastName, firstName을 선언하고 user 객체를 디스트럭처링하여 할당한다.
// 이때 프로퍼티 키를 기준으로 디스트럭처링 할당이 이루어진다. 순서는 의미가 없다.
const { lastName, firstName } = user;

console.log(firstName, lastName); // Ungmo Lee
```

객체 디스트럭처링 할당을 위한 변수에 Rest 파라미터나 Rest 요소와 유사하게 Rest 프로퍼티 …을 사용할 수 있다. Rest 프로퍼티는 Rest 파라미터나 Rest 요소와 마찬가지로 반드시 마지막에 위치해야 한다.

```markdown
// Rest 프로퍼티
const { x, ...rest } = { x: 1, y: 2, z: 3 };
console.log(x, rest); // 1 { y: 2, z: 3 }
```