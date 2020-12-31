# 40. 이벤트

## 이벤트 드리븐 프로그래밍

브라우저는 처리해야 할 특정 사건이 발생하면 이를 감지하여 이벤트(event)를 발생(trigger)시킨다. 예를 들어, 클릭, 키보드 입력, 마우스 이동 등이 일어나면 브라우저는 이를 감지하여 특정한 타입의 이벤트를 발생시킨다.

이벤트가 발생했을 때 호출될 함수를 **이벤트 핸들러(event handler)**라 하고, 이벤트가 발생했을 때 브라우저에게 이벤트 핸들러의 호출을 위임하는 것을 **이벤트 핸들러 등록**이라 한다.

함수를 언제 호출할지 알 수 없으므로 개발자가 명시적으로 함수를 호출하는 것이 아니라 브라우저에게 함수 호출을 위임하는 것이다.

이벤트와 그에 대응하는 함수(이벤트 핸들러)를 통해 사용자와 애플리케이션은 상호작용(interaction)을 할 수 있다. 이와 같이 프로그램의 흐름을 이벤트 중심으로 제어하는 프로그래밍 방식을 **이벤트 드리븐 프로그래밍(event-driven programming)**이라 한다.

## 이벤트 타입

### 마우스 이벤트

![111](https://user-images.githubusercontent.com/72958778/103393034-0e14f780-4b64-11eb-9e80-19b0f603f7bc.png)

### 키보드 이벤트

![__2020-12-28_221937](https://user-images.githubusercontent.com/72958778/103393040-110fe800-4b64-11eb-9839-e3db99a0de4d.png)

### 포커스 이벤트

![__2020-12-28_222042](https://user-images.githubusercontent.com/72958778/103393041-11a87e80-4b64-11eb-9ed9-ba323e935ce5.png)

### 폼 이벤트

![__2020-12-28_222056](https://user-images.githubusercontent.com/72958778/103393042-11a87e80-4b64-11eb-90ac-6aa30e87a411.png)

### 값 변경 이벤트

![__2020-12-28_222156](https://user-images.githubusercontent.com/72958778/103393043-12411500-4b64-11eb-8677-d70cadacc912.png)

### DOM 뮤테이션 이벤트

![__2020-12-28_222222](https://user-images.githubusercontent.com/72958778/103393044-12d9ab80-4b64-11eb-845b-cd506cddc888.png)

### 뷰 이벤트

![__2020-12-28_222238](https://user-images.githubusercontent.com/72958778/103393046-12d9ab80-4b64-11eb-8378-1b6efed6af8d.png)

### 리소스 이벤트

![__2020-12-28_222253](https://user-images.githubusercontent.com/72958778/103393048-13724200-4b64-11eb-9038-b712ea130e1c.png)

## 이벤트 핸들러 등록

이벤트 핸들러(event handler 또는 event listener)는 이벤트가 발생했을 때 브라우저에 호출을 위임한 함수다. 다시 말해, 이벤트가 발생하면 브라우저에 의해 호출될 함수가 이벤트 핸들러다.

이벤트 핸들러를 등록하는 방법은 3가지다.

### 이벤트 핸들러 어트리뷰트 방식

- 이벤트 핸들러 어트리뷰트 값으로 함수 호출문 등의 문- (statement)을 할당하면 이벤트 핸들러가 등록된다.
- 이벤트 핸들러 어트리뷰트 값으로 함수 참조가 아닌 함수 호출문 등의 문을 할당한다는 것이다.
- 이벤트 핸들러 어트리뷰트 값은 사실 암묵적으로 생성될 이벤트 핸들러의 함수 몸체를 의미한다.

### 이벤트 핸들러 프로퍼티 방식

이벤트 핸들러 프로퍼티의 키는 이벤트 핸들러 어트리뷰트와 마찬가지로 onclick과 같이 on 접두사와 이벤트의 종류를 나타내는 이벤트 타입으로 이루어져 있다. 이벤트 핸들러 프로퍼티에 함수를 바인딩하면 이벤트 핸들러가 등록된다.

이벤트 핸들러 프로퍼티에 하나의 이벤트 핸들러만 바인딩할 수 있다는 단점이 있다.

```markdown
<!DOCTYPE html>
<html>
<body>
  <button>Click me!</button>
  <script>
    const $button = document.querySelector('button');

    // 이벤트 핸들러 프로퍼티에 이벤트 핸들러를 바인딩
    $button.onclick = function () {
      console.log('button click');
    };
  </script>
</body>
</html>
```

![Untitled](https://user-images.githubusercontent.com/72958778/103393052-153c0580-4b64-11eb-9e8e-7b6a412e0799.png)

이벤트 핸들러를 등록하기 위해서는 이벤트를 발생시킬 객체인 이벤트 타깃(event target)과 이벤트의 종류를 나타내는 문자열인 이벤트 타입(event type) 그리고 이벤트 핸들러를 지정할 필요가 있다.

### addEventListener 메서드 방식

EventTarget.prototype.addEventListener 메서드를 사용하여 이벤트 핸들러를 등록할 수 있다.

![Untitled 1](https://user-images.githubusercontent.com/72958778/103393059-179e5f80-4b64-11eb-9c28-35d414225034.png)

- addEventListener 메서드의 첫 번째 매개변수에는 이벤트의 종류를 나타내는 문자열인 이벤트 타입을 전달한다. 이때 이벤트 핸들러 프로퍼티 방식과는 달리 on 접두사를 붙이지 않는다. 두 번째 매개변수에는 이벤트 핸들러를 전달한다. 마지막 매개변수에는 이벤트를 캐치할 이벤트 전파 단계(캡처링 또는 버블링)를 지정한다. 생략하거나 false를 지정하면 버블링 단계에서 이벤트를 캐치하고, true를 지정하면 캡처링 단계에서 이벤트를 캐치한다.
- addEventListener 메서드 방식은 이벤트 핸들러 프로퍼티에 바인딩된 이벤트 핸들러에 아무런 영향을 주지 않는다. 따라서 버튼 요소에서 클릭 이벤트가 발생하면 2개의 이벤트 핸들러가 모두 호출된다.
- addEventListener 메서드는 하나 이상의 이벤트 핸들러를 등록할 수 있다. 이때 이벤트 핸들러는 등록된 순서대로 호출된다.
- addEventListener 메서드를 통해 참조가 동일한 이벤트 핸들러를 중복 등록하면 하나의 이벤트 핸들러만 등록된다.

## 이벤트 핸들러 제거

- addEventListener 메서드로 등록한 이벤트 핸들러를 제거하려면 EventTarget.prototype.removeEventListener 메서드를 사용한다. removeEventListener 메서드에 전달할 인수는 addEventListener 메서드와 동일하다. 단, addEventListener 메서드에 전달한 인수와 removeEventListener 메서드에 전달한 인수가 일치하지 않으면 이벤트 핸들러가 제거되지 않는다.
- removeEventListener 메서드에 인수로 전달한 이벤트 핸들러는 addEventListener 메서드에 인수로 전달한 등록 이벤트 핸들러와 동일한 함수이어야 한다.
- 기명 이벤트 핸들러 내부에서 removeEventListener 메서드를 호출하여 이벤트 핸들러를 제거하는 것은 가능하다. 이때 이벤트 핸들러는 단 한 번만 호출된다
- 이벤트 핸들러 프로퍼티 방식으로 등록한 이벤트 핸들러는 removeEventListener 메서드로 제거할 수 없다. 이벤트 핸들러 프로퍼티 방식으로 등록한 이벤트 핸들러를 제거하려면 이벤트 핸들러 프로퍼티에 null을 할당한다.

## 이벤트 객체

이벤트가 발생하면 이벤트에 관련한 다양한 정보를 담고 있는 이벤트 객체가 동적으로 생성된다. 생성된 이벤트 객체는 이벤트 핸들러의 첫 번째 인수로 전달된다.

### 이벤트 객체의 상속 구조

![Untitled 2](https://user-images.githubusercontent.com/72958778/103393060-179e5f80-4b64-11eb-8832-912a9cd24008.png)

위 그림의 Event, UIEvent, MouseEvent 등 모두 생성자 함수다. 따라서 다음과 같이 생성자 함수를 호출하여 이벤트 객체를 생성할 수 있다.

## 이벤트 전파

```markdown
<!DOCTYPE html>
<html>
<body>
  <ul id="fruits">
    <li id="apple">Apple</li>
    <li id="banana">Banana</li>
    <li id="orange">Orange</li>
  </ul>
</body>
</html>
```

![Untitled 3](https://user-images.githubusercontent.com/72958778/103393061-1836f600-4b64-11eb-8a0b-30886d085199.png)

- 캡처링 단계(capturing phase) : 이벤트가 상위 요소에서 하위 요소 방향으로 전파
- 타깃 단계(target phase) : 이벤트가 이벤트 타깃에 도달
- 버블링 단계(bubbling phase) : 이벤트가 하위 요소에서 상위 요소 방향으로 전파

이벤트는 이벤트를 발생시킨 이벤트 타깃은 물론 상위 DOM 요소에서도 캐치할 수 있다. 즉, DOM 트리를 통해 전파되는 이벤트는 이벤트 패스(이벤트가 통과하는 DOM 트리 상의 경로. Event.prototype.composedPath 메서드로 확인할 수 있다)에 위치한 모든 DOM 요소에서 캐치할 수 있다.

## 이벤트 위임

- 이벤트 위임(Event delegation)은 여러 개의 하위 DOM 요소에 각각 이벤트 핸들러를 등록하는 대신 하나의 상위 DOM 요소에 이벤트 핸들러를 등록하는 방법을 말한다. “40.7. 이벤트 전파”에서 살펴본 바와 같이 이벤트는 이벤트 타깃은 물론 상위 DOM 요소에서도 캐치할 수 있다. 이벤트 위임을 통해 상위 DOM 요소에 이벤트 핸들러를 등록하면 여러 개의 하위 DOM 요소에 이벤트 핸들러를 등록할 필요가 없다. 또한 동적으로 하위 DOM 요소를 추가하더라도 일일이 추가된 DOM 요소에 이벤트 핸들러를 등록할 필요가 없다.
- 이벤트 위임을 통해 하위 DOM 요소에서 발생한 이벤트를 처리할 때 주의할 점은 상위 요소에 이벤트 핸들러를 등록하기 때문에 이벤트 타깃, 즉 이벤트를 실제로 발생시킨 DOM 요소가 개발자가 기대한 DOM 요소가 아닐 수도 있다는 것이다.
- 일반적으로 이벤트 객체의 target 프로퍼티와 currentTarget 프로퍼티는 동일한 DOM 요소를 가리키지만 이벤트 위임을 통해 상위 DOM 요소에 이벤트를 바인딩한 경우 이벤트 객체의 target 프로퍼티와 currentTarget 프로퍼티가 다른 DOM 요소를 가리킬 수 있다.