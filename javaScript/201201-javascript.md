# 17. 생성자 함수에 의한 객체 생성

## 1. Object 생성자 함수

new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환

```markdown
// 빈 객체의 생성
const person = new Object();
```

생성자 함수(constructor)란 new 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수를 말한다. 생성자 함수에 의해 생성된 객체를 인스턴스(instance)라 함.

자바스크립트는 Object 생성자 함수 이외에도 [String](https://poiemaweb.com/fastcampus/string), [Number](https://poiemaweb.com/fastcampus/number), Boolean, [Function](https://poiemaweb.com/fastcampus/function#44-function-%EC%83%9D%EC%84%B1%EC%9E%90-%ED%95%A8%EC%88%98)(함수), [Array](https://poiemaweb.com/fastcampus/array)(배열), [Date](https://poiemaweb.com/fastcampus/date), [RegExp](https://poiemaweb.com/fastcampus/regexp)(정규 표현식), [Promise](https://poiemaweb.com/fastcampus/promise) 등의 빌트인(built-in, 내장) 생성자 함수를 제공

## 2. 생성자 함수

### 객체 리터럴에 의한 객체 생성 방식의 문제점

동일한 프로퍼티의 개체를 한개만 생성 가능

### 생성자 함수에 의한 객체 생성 방식의 장점

this는 객체 자신의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수(self-referencing variable)

this가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 따라 동적으로 결정.

일반 함수와 동일한 방법으로 생성자 함수를 정의하고 new 연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작

[제목 없음](https://www.notion.so/5e6ab414fec64635920a07835ebd6cf0)

### 생성자 함수의 인스턴스 생성 과정

생성자 함수의 역할은 프로퍼티 구조가 동일한 인스턴스를 생성하기 위한 템플릿(클래스)으로서 동작하여 인스턴스를 생성하는 것과 생성된 인스턴스를 초기화(인스턴스 프로퍼티 추가 및 초기값 할당)하는 것

1. 인스턴스 생성과 this 바인딩 (런타임 이전에 진행)
2. 인스턴스 초기화
3. 인스턴스 반환

    생성자 함수 내부에서 명시적으로 this가 아닌 다른 값을 반환하는 것은 생성자 함수의 기본 동작을 훼손한다. 따라서 생성자 함수 내부에서 return 문을 반드시 생략해야 함

### 내부 메서드 [[Call]]과 [[Construct]]

함수가 일반 함수로서 호출되면 함수 객체의 내부 메서드 [[Call]]이 호출되고 new 연산자와 함께 생성자 함수로서 호출되면 내부 메서드 [[Construct]]가 호출됨.

![Untitled](https://user-images.githubusercontent.com/72958778/100750151-f34a4880-3428-11eb-8335-5b3084e6feba.png)


### onstructor와 non-constructor의 구분

자바스크립트 엔진은 함수 정의를 평가하여 함수 객체를 생성할 때 함수 정의 방식에 따라 함수를 constructor와 non-constructor로 구분

함수 정의 방식에 따라 constructor와 non-constructor를 구분

함수를 일반 함수로서 호출하면 함수 객체의 내부 메서드 [[Call]]이 호출되고 new 연산자와 함께 생성자 함수로서 호출하면 내부 메서드 [[Construct]]가 호출된다. non-constructor인 함수 객체는 내부 메서드 [[Construct]]를 갖지 않는다. 따라서 non-constructor인 함수 객체를 생성자 함수로서 호출하면 에러가 발생.

- constructor: 함수 선언문, 함수 표현식, 클래스(클래스도 함수다)
- non-constructor: 메서드(ES6 메서드 축약 표현), 화살표 함수

### new 연산자

new 연산자와 함께 함수를 호출하면 해당 함수는 생성자 함수로 동작한다. 다시 말해, 함수 객체의 내부 메서드 [[Call]]이 호출되는 것이 아니라 [[Construct]]가 호출된다. 단, new 연산자와 함께 호출하는 함수는 non-constructor가 아닌 constructor이어야 한다.

반대로 new 연산자 없이 생성자 함수를 호출하면 일반 함수로 호출된다. 다시 말해, 함수 객체의 내부 메서드 [[Construct]]가 호출되는 것이 아니라 [[Call]]이 호출

### new.target

- new.target은 this와 유사하게 constructor인 모든 함수 내부에서 암묵적인 지역 변수와 같이 사용되며 메타 프로퍼티라고 부른다. 참고로 IE는 new.target을 지원하지 않으므로 주의
- 함수 내부에서 new.target을 사용하면 new 연산자와 함께 생성자 함수로서 호출되었는지 확인할 수 있다. new 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 new.target은 함수 자신을 가리킨다. new 연산자 없이 일반 함수로서 호출된 함수 내부의 new.target은 undefined다.
- 대부분의 빌트인 생성자 함수(Object, String, Number, Boolean, Function, Array, Date, RegExp, Promise 등)는 new 연산자와 함께 호출되었는지를 확인한 후 적절한 값을 반환
- String, Number, Boolean 생성자 함수는 new 연산자와 함께 호출했을 때 String, Number, Boolean 객체를 생성하여 반환하지만 new 연산자 없이 호출하면 문자열, 숫자, 불리언 값을 반환