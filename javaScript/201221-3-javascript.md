# 26. ES6 함수의 추가 기능

## 메서드

- ES6 사양에서 메서드는 메서드 축약 표현으로 정의된 함수만을 의미한다.
- ES6 사양에서 정의한 메서드(이하 ES6 메서드)는 인스턴스를 생성할 수 없는 non-constructor다

## 화살표 함수

ES6 함수의 구분	constructor, prototype, super, arguments

일반 함수(Normal)	constructor,   prototype, arguments

메서드(Method)	super, arguments

화살표 함수(Arrow) 4개 다 없음

### 화살표 함수와 일반 함수의 차이

1. 화살표 함수는 인스턴스를 생성할 수 없는 non-constructor다.

2. 중복된 매개변수 이름을 선언할 수 없다.
3. 화살표 함수는 함수 자체의 this, arguments, super, new.target 바인딩을 갖지 않는다.

### this

- 화살표 함수는 함수 자체의 this 바인딩을 갖지 않는다. 따라서 화살표 함수 내부에서 this를 참조하면 상위 스코프의 this를 그대로 참조한다. 이를 lexical this라 한다.
- 만약 화살표 함수와 화살표 함수가 중첩되어 있다면 상위 화살표 함수에도 this 바인딩이 없으므로 스코프 체인 상에서 가장 가까운 상위 함수 중에서 화살표 함수가 아닌 함수의 this를 참조한다.
- 화살표 함수는 함수 자체의 this 바인딩을 갖지 않기 때문에 Function.prototype.call, Function.prototype.apply, Function.prototype.bind 메서드를 사용해도 화살표 함수 내부의 this를 교체할 수 없다.
- 프로퍼티에 할당한 화살표 함수도 스코프 체인 상에서 가장 가까운 상위 함수 중에서 화살표 함수가 아닌 함수의 this를 참조한다.

### super

- 화살표 함수는 함수 자체의 super 바인딩을 갖지 않는다. 따라서 화살표 함수 내부에서 super를 참조하면 this와 마찬가지로 상위 스코프의 super를 참조한다.
- super는 내부 슬롯 [[HomeObject]]를 갖는 ES6 메서드 내에서만 사용할 수 있는 키워드다.
- ES6 메서드는 자신을 바인딩한 객체를 가리키는 내부 슬롯 [[HomeObject]]를 갖는다.
- super 참조는 내부 슬롯 [[HomeObject]]를 사용하여 수퍼클래스의 메서드를 참조한다.

### arguments

- 화살표 함수는 함수 자체의 arguments 바인딩을 갖지 않는다. 따라서 화살표 함수 내부에서 arguments를 참조하면 this와 마찬가지로 상위 스코프의 arguments를 참조한다.

## Rest 파라미터

- Rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받는다.
- Rest 파라미터는 함수 정의 시 선언한 매개변수 개수를 나타내는 함수 객체의 length 프로퍼티에 영향을 주지 않는다.

### Rest 파라미터와 arguments 객체

ES6에서는 rest 파라미터를 사용하여 가변 인자 함수의 인수 목록을 배열로 직접 전달받을 수 있다. 이를 통해 유사 배열 객체인 arguments 객체를 배열로 변환하는 번거로움을 피할 수 있다.

# 27. 배열

배열(array)은 여러 개의 값을 순차적으로 나열한 자료 구조다. 배열은 사용 빈도가 매우 높은 가장 기본적인 자료 구조다.

- 배열이 가지고 있는 값을 요소(element)
- 배열의 요소는 배열에서 자신의 위치를 나타내는 0 이상의 정수인 인덱스(index)
- 배열은 요소의 개수, 즉 배열의 길이를 나타내는 length 프로퍼티

배열의 요소는 하나의 데이터 타입으로 통일되어 있으며 서로 연속적으로 인접해 있다. 이러한 배열을 밀집 배열(dense array)

배열의 요소가 연속적으로 이어져 있지 않는 배열을 희소 배열(sparse array)

- 희소 배열은 length와 배열 요소의 개수가 일치하지 않는다. 희소 배열은 length는 희소 배열의 실제 요소 개수보다 언제나 크다.
- 배열에는 같은 타입의 요소를 연속적으로 위치시키는 것이 최선이다.

## 직접 써보면서 익혀야 될 것 같다.

- 배열 리터럴
- Array 생성자 함수
- Array.of
- Array.from
- 배열 메서드
- 배열 고차 함수


# 28. Number

## Number 생성자 함수

표준 빌트인 객체인 Number 객체는 생성자 함수 객체다. 따라서 new 연산자와 함께 호출하여 Number 인스턴스를 생성할 수 있다.

Number 생성자 함수에 인수를 전달하지 않고 new 연산자와 함께 호출하면 [[NumberData]] 내부 슬롯에 0을 할당한 Number [래퍼 객체](https://poiemaweb.com/fastcampus/built-in-object#3-%EC%9B%90%EC%8B%9C-%EA%B0%92%EA%B3%BC-%EB%9E%98%ED%8D%BC-%EA%B0%9D%EC%B2%B4)를 생성한다.

## 직접 써보면서 익혀봐야겠다.

- Number 프로퍼티
- Number 메서드

# 29.Math 와 30.Date도 손으로 쓰면서 익혀보겠다.