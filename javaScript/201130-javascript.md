# 15. let, const와 블록 레벨 스코프

# var 키워드 문제점

- 변수 중복 선언 허용
- 함수 레벨 스코프 (전역 스코프)
- 변수 호이스팅

# let 키워드

- 변수 중복 선언 금지
- 블록 레벨 스코프 (지역 변수)

![Untitled](https://user-images.githubusercontent.com/72958778/100558757-fd6a2b00-32f2-11eb-994c-2215b5c4a7cf.png)


- 변수 호이스팅 발생 안하는 것처럼 동작

![Untitled 1](https://user-images.githubusercontent.com/72958778/100558763-0824c000-32f3-11eb-9883-ad07db0da39c.png)


(let 키워드로 선언한 변수는 “선언 단계”와 “초기화 단계”가 분리되어 진행)

![Untitled 2](https://user-images.githubusercontent.com/72958778/100558774-107cfb00-32f3-11eb-993c-ac864659198d.png)

일시적 사각지대(Temporal Dead Zone; TDZ)

# const 키워드

- 상수(constant)를 선언하기 위해 사용하지만, 반드시 상수만을 위해 사용하지 않음
- const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화
- 재할당 금지
- 상태유지와 가독성, 유지보수의 편의성에 좋음
- const 키워드로 선언된 변수에 객체를 할당한 경우, 객체 값을 변경할 수 있음

# var, let, const

- ES6를 사용한다면 var 키워드는 사용하지 않는다.
- 재할당이 필요한 경우에 한정해 let 키워드를 사용한다. 이때 변수의 스코프는 최대한 좁게 만든다.
- 변경이 발생하지 않고 읽기 전용으로 사용하는(재할당이 필요 없는 상수) 원시값과 객체에는 const 키워드를 사용한다. const 키워드는 재할당을 금지하므로 var, let 키워드보다 안전하다.
- 변수 선언에는 기본적으로 const를 사용하고 재할당이 필요할 경우 let을 한정해서 사용하는 것을 권장

# 16. 프로퍼티 어트리뷰트

## 1. 내부슬롯과 메서드

Ecmascript 사양에 등장하는 [[...]] 이중 대괄호는 대부분 내부슬롯과 내부메서드이다

내부슬롯과 내부메서드는 자바스크립트 엔진 내부 로직이므로 원칙적으로 자바스크립트는 내부슬롯과 내부메서드에 직접적으로 호출이나 접근 방법을 제공하지 않는다.

일부에서는 간접적으로 제공.

## 2. 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체

자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.

프로퍼티 상태

- 프로퍼티의 값
- 값의 갱신 여부
- 열거 가능 여부
- 재정의 가능 여부

프로퍼티 어트리뷰트 - 엔전이 관리하는 내부 상태값인 내부슬롯

- [[Value]]
- [[Writable]]
- [[Enumerable]]
- [[Configurable]]

프로퍼티 어트리뷰트에 직접 접근할 수 없지만 Object.getOwnPropertyDescriptor 메서드를 사용하여 간접적으로 확인할 수는 있다.

Object.getOwnPropertyDescriptor 메서드는 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터(PropertyDescriptor) 객체를 반환

```markdown
const person = {
  name: 'Lee'
};

// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// {value: "Lee", writable: true, enumerable: true, configurable: true}
```

Object.getOwnPropertyDescriptor 메서드는 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터(PropertyDescriptor) 객체를 반환, 

Object.getOwnPropertyDescriptor 메서드 호출 시

- 첫번째 매개변수에는 객체의 참조를 전달
- 두번째 매개변수에는 프로퍼티 키를 문자열로 전달
- 존재하지 않는 프로퍼티나 상속받은 프로퍼티에 대한 프로퍼티 디스크립터를 요구하면 undefined가 반환

## 3. 데이터 프로퍼티와 접근자 프로퍼티

- 데이터 프로퍼티(data property)키와 값으로 구성된 일반적인 프로퍼티다. 지금까지 살펴본 모든 프로퍼티는 데이터 프로퍼티다.
- 접근자 프로퍼티(accessor property)자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수(accessor function)로 구성된 프로퍼티다.

### 3.1. 데이터 프로퍼티

[제목 없음](https://www.notion.so/fe7a6c45cc14409c97c5bef1f5fa7966)

프로퍼티가 생성될 때 [[Value]]의 값은 프로퍼티 값으로 초기화되며 [[Writable]], [[Enumerable]], [[Configurable]]의 값은 true로 초기화된다. 이것은 프로퍼티를 동적 추가해도 마찬가지다.

### 3.2. 접근자 프로퍼티

[제목 없음](https://www.notion.so/55b76a0866374401ae70b11f1fa4fa3c)

## 4. 프로퍼티 정의

Object.defineProperty 메서드를 사용하면 프로퍼티의 어트리뷰트를 정의할 수 있다. 인수로는 객체의 참조와 데이터 프로퍼티의 키인 문자열, 프로퍼티 디스크립터 객체를 전달한다.

Object.defineProperty 메서드로 프로퍼티를 정의할 때 프로퍼티 디스크립터 객체의 프로퍼티를 일부 생략할 수 있다. 프로퍼티 디스크립터 객체에서 생략된 어트리뷰트는 다음과 같이 기본값이 적용

[제목 없음](https://www.notion.so/a26210e8d5874c6fafab675d6579b4e5)

### 5. 객체 변경 방지

[제목 없음](https://www.notion.so/d28545d153a1438f8f0b8b9c2adf4fa4)

Object.freeze 메서드로 동결하여도 중첩객체까지는 동결 불가능