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