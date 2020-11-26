# 10.객체 리터럴

# 객체

객체는 0개 이상의 프로퍼티와 메서드로 구성 된 집합
프로퍼티는 키와 값으로 구성, 객체의 상태값 표현

![Untitled 1](https://user-images.githubusercontent.com/72958778/100223021-4a9a7580-2f5e-11eb-8652-c48007cd8667.png)


메서드는 프로퍼티를 참조하고 조작할 수 있는 동작

![Untitled 1](https://user-images.githubusercontent.com/72958778/100223201-833a4f00-2f5e-11eb-8de2-a756808589c7.png)


자바스크립트는 프로토타입 기반 객체지향 언어로서 클래스 기반 객체지향 언어와는 달리 다양한 객체 생성 방법을 지원

- 객체 리터럴 (객체 리터럴은 중괄호({…}) 내에 0개 이상의 프로퍼티를 정의
- Object 생성자 함수
- 생성자 함수
- Object.create 메서드
- 클래스 (ES6)

# 프로퍼티

프로퍼티는 키(key)와 값(value)으로 구성

```markdown
var person = {
  // 프로퍼티 키는 name, 프로퍼티 값은 'Lee'
  name: 'Lee',
  // 프로퍼티 키는 age, 프로퍼티 값은 20
  age: 20
};
```

- **프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 또는 심벌 값**
- **프로퍼티 값 : 자바스크립트에서 사용할 수 있는 모든 값**

# 메서드

프로퍼티 값이 함수일 경우에 일반 함수와 구분을 두기 위해서 메서드라고 부른다. 객체에 묶여 있는 함수를 의미한다.

# 프로퍼티 접근

- 마침표 프로퍼티 접근 연산자(.)를 사용하는 **마침표 표기법(dot notation)**
- 대괄호 프로퍼티 접근 연산자([…])를 사용하는 **대괄호 표기법(bracket notation)**

    **(프로퍼티 키는 반드시 따옴표로 감싼 문자열)**

```markdown
// 마침표 표기법에 의한 프로퍼티 접근
console.log(person.name); // Lee

// 대괄호 표기법에 의한 프로퍼티 접근
console.log(person['name']); // Lee (프로퍼티 키는 반드시 따옴표로 감싼 문자열)
```

객체에 없는 프로퍼티에 접근하면 undefiend를 반환

프로퍼티 값은 재할당으로 값을 갱신 할 수 있고, 존재하지 않는 프로퍼티에 값을 할당하면 동적으로 생성 후 추 되고 프로퍼티 값이 할당된다.

delete 연산자를 이용하여 객체의 프로퍼티를 삭제할 수 있다.

## 프로퍼티 축약 표현

```markdown
// ES5
var x = 1, y = 2;
var obj = { x: x, y: y
};
console.log(obj); // {x: 1, y: 2}
```

아래로 변경됨 

```markdown
// ES6
let x = 1, y = 2;

// 프로퍼티 축약 표현
const obj = { x, y };

console.log(obj); // {x: 1, y: 2}
```

## 메서드 축약 표현

```markdown
// ES5
var obj = {
  name: 'Lee',
  sayHi: function() {
    console.log('Hi! ' + this.name);
  }
};

obj.sayHi(); // Hi! Lee
```

아래로 변경됨

```markdown
// ES6
const obj = {
  name: 'Lee',
  // 메서드 축약 표현
  sayHi() {
    console.log('Hi! ' + this.name);
  }
};

obj.sayHi(); // Hi! Lee
```

# 11. 원시값과 객체의 비교

# 원시값

원시값은 변경 불가능한 값이다

변경 불가능은 변수가 아니라 값을 뜻함

변경 불가 값이라 데이터의 신뢰성을 보장한다

```markdown
var str = 'string';

// 문자열은 유사 배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근할 수 있다.
// 하지만 문자열은 원시값이므로 변경할 수 없다. 이때 에러가 발생하지 않는다.
str[0] = 'S';

console.log(str); // string
```

```markdown
var score = 80;

// copy 변수에는 score 변수의 값 80이 복사되어 할당된다.
var copy = score;

console.log(score, copy);    // 80  80
console.log(score === copy); // true

// score 변수와 copy 변수의 값은 다른 메모리 공간에 저장된 별개의 값이다.
// 따라서 score 변수의 값을 변경해도 copy 변수의 값에는 어떠한 영향도 주지 않는다.
score = 100;

console.log(score, copy);    // 100  80
console.log(score === copy); // false
```

![Untitled](https://user-images.githubusercontent.com/72958778/100223313-aa911c00-2f5e-11eb-8368-44733334ced6.png)


copy 변수에는 score의 80이란 값을 받아서 메모리에 복사하였기 때문에 score 값을 100으로 변경하면 또 다른 메모리에 값을 생성하기 때문에 copy와 score는 같은 값이 아니게 된다.

두 변수의 원시값은 서로 다른 메모리 공간에 저장된 별개의 값이 되어 어느 한쪽에서 재할당을 통해 값을 변경하더라도 서로 간섭할 수 없다.

# 객체

변경 가능한 값

```markdown
var person = {
  name: 'Lee'
};
```

![Untitled 1](https://user-images.githubusercontent.com/72958778/100223366-c1d00980-2f5e-11eb-82e6-6644bedfee07.png)


객체를 할당한 변수가 기억하는 메모리 주소를 통해 메모리 공간에 접근하는 참조값에 접근할 수 있다. 참조값은 생성된 객체가 저장된 메모리 주소이다.

객체의 단점은 여러개의 식별자가 하나의 객체를 공유할 수 있다는 점

![Untitled 2](https://user-images.githubusercontent.com/72958778/100223403-cdbbcb80-2f5e-11eb-8ecb-79d3ef89d727.png)


위 그림과 같이 여러개의 식별자 중 한 식별자가 객체의 값을 변경하게 되면 모든 식별자가 영향을 받는다.

# 12. 함수

일련의 과정을 문으로 구현하고 코드블록으로 감싸서 하나의 실행 단위로 정의

```markdown
// 함수 정의
function add(x, y) {
  return x + y;
}

// 함수 호출
var result = add(2, 5);

// 함수 add에 인수 2, 5를 전달하면서 호출하면 반환값 7을 반환한다.
console.log(result); // 7
```

![Untitled](https://user-images.githubusercontent.com/72958778/100345129-379ea880-3025-11eb-938c-45ac677e7033.png)


# 함수의 사용 이유

- 유지보수 용이
- 가독성 향상
- 신뢰성을 높이는 효과

![Untitled 1](https://user-images.githubusercontent.com/72958778/100345177-46855b00-3025-11eb-8165-027f9e2dec21.png)


# 함수 리터럴

```markdown
var f = function add(x, y) {
  return x + y;
};
```

리터럴은 값을 생성하는 표기법이다

- 함수 이름
    - **함수 이름은 식별자**다. 따라서 식별자 네이밍 규칙을 준수해야 한다.
    - 함수 이름은 함수 몸체 내에서만 참조할 수 있는 식별자다.
    - 함수 이름은 생략할 수 있다. 이름이 있는 함수를 기명 함수(named function), 이름이 없는 함수를 무명/익명 함수(anonymous function)라 한다.
- 매개변수 목록
    - 0개 이상의 매개변수를 소괄호로 감싸고 쉼표로 구분한다.
    - 각 매개변수에는 함수를 호출할 때 지정한 인수가 순서대로 할당된다. 즉, 매개변수 목록은 순서에 의미가 있다.
    - 매개변수는 함수 몸체 내에서 변수와 동일하게 취급된다. 따라서 매개변수도 변수와 마찬가지로 식별자 네이밍 규칙을 준수해야 한다.
- 함수 몸체
    - 함수가 호출되었을 때 일괄적으로 실행될 문들을 하나의 실행 단위로 정의한 코드 블록이다.
    - 함수 몸체는 함수 호출에 의해 실행된다.
- 일반 객체는 호출할 수 없지만 함수는 호출할 수 있다.

# 함수정의

- 함수 선언문 (function declaration/function statement)
- 함수 표현식 (function expression)
- function 생성자 함수 (Function constructor)
- 화살표 함수 (arrow function): ES6

## 함수 선언문

- 함수 선언문은 함수리터럴과 형태가 동일하나, 함수 선언문은 함수 이름을 생략할 수 없다.
- 함수 선언문은 표현식이 아닌 문이다.
- 함수리터럴은 이름 생략 가능하나 함수 선언문은 불가

![Untitled 2](https://user-images.githubusercontent.com/72958778/100345220-569d3a80-3025-11eb-847d-03a605cf678e.png)


```markdown
(function bar() {
  console.log('bar');
});
bar();
```

# 반환문

```markdown
	function {
	return (x + y);
}
```

return 키워드 뒤에 반환값으로 사용할 표현식을 명시적으로 지정하지 않으면 undefined가 반환된다.

# 즉시 실행 함수

```markdown
(function foo (){
	실행 코드
}());
```

# 재귀함수

```markdown
function factorial(x) {
  // 종료 조건
  if (x < 0) return;
  
  // 기반 조건
  if (x === 0) return 1;
  
  // 재귀
  return x * factorial(x - 1);
}

factorial(3);
// 6
```

# 중첩함수

```markdown
function outer() {
  var x = 1;

  // 중첩 함수
  function inner() {
    var y = 2;
    // 외부 함수의 변수를 참조할 수 있다.
    console.log(x + y); // 3
  }

  inner();
}

outer();
```

# 콜백함수

```markdown
// n만큼 어떤 일을 반복한다
function repeat(n) {
  // i를 출력한다.
  for (var i = 0; i < n; i++) console.log(i);
}

repeat(5); // 0 1 2 3 4
```

- 콜백함수 - 함수의 매개변수를 통해 다른 함수로 전달되는 함수
- 고차함수 - 매개변수를 통해 외부에서 콜백 함수를 전달 받은 함수

                    - 고차함수는 콜백함수를 일부분으로 합성

              - 필요에 따라서 콜백함수에 인수 전달 가능

# 참조에 의한 전달과 외부상태의 변경

# 함수선언문과 리터럴, 함수표현식 공부 예정..