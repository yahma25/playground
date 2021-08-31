# 가비지 컬렉션(Garbage Collection)

<br/>

## 정의

할당된 메모리가 쓸모없어졌을 때 자동으로 해제시켜주는 방법

<br/>

## 메모리 라이프 사이클

1. 필요할 때 메모리 할당
2. 읽기/쓰기로 값 사용
3. 필요 없으면 해제

<br/>

### 메모리 할당

```js
// 기본형 값 할당
var a = 123;
var b = '123';

// 객체 할당
var obj = {
  abc: 1,
  func: function() {}
};

// 함수 선언 할당(함수 객체)
function func(a) {
  return console.log(a);
}

// 함수 호출하여 할당
var date = new Date();
```

<br/>

### 값 사용

```js
// ex 1)
var num1 = 5;
var num2 = 5;
var num3 = num1 + num2;

// ex 2)
function sum(a, b) {
  return a + b;
}
var total = sum(5, 5);
```

<br/>

### 메모리 해제

가비지 컬렉터(Garbage Collector)가 할당된 메모리를 계속 추적하고 사용하지 않는 메모리를 발견하면 회수한다. `사용하지 않는 메모리`를 판단하는 방법이 가비지 컬렉션의 핵심이다.

<br/>

## 사용하지 않는 메모리 판별

가비지 컬렉션은 `참조(Reference)` 상태를 기준으로 메모리 해제 대상으로 지정(수집)하고 해제한다.

### 방식 1) Referennce-counting

[샘플 코드(MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Memory_Management#reference-counting_garbage_collection)

```js
// x = { a: { b: 2 } }
var x = {
  a: {
    b: 2
  }
};

// 'x'와 'y' 둘 다 '{ a: { b: 2 } }' 객체를 참조함
var y = x;

// '{ a: { b: 2 } }' 객체는 y만 참조함
// x는 가비지 컬렉션 대상 후보가 될 수 있음
x = 1;

// z가 '{ a: { b: 2 } }'의 일부인 a 속성의 '{ b: 2 }' 객체를 참조함
var z = y.a;

// y는 가비지 컬렉션 대상 후보가 될 수 있음
y = "mozilla";

// '{ a: { b: 2 } }'를 참조하는 대상은 없어졌지만, z가 아직 '{ a: { b: 2 } }'의 일부인 a를 참조하고 있음

// z는 가비지 컬렉션 대상 후보가 될 수 있음
z = null;

// 그 어느 것도 '{ a: { b: 2 } }' 객체를 참조하지 않게 됨
// x, y, z는 참고하고 있는 객체가 없으므로 현재 scope의 처리가 끝나면 가비지 컬렉터에 의해 메모리 해제 됨

```

#### 문제점

아래와 같이 순환 참조가 된 상태의 경우, 수집 대상에 포함되지 않아 메모리 누수 발생

```js
function memoryLeak() {
  var ref1 = {};
  var ref2 = {};
  ref1.a = ref2;
  ref2.a = ref1;
}

memoryLeak();
```

Internet Explorer 6, 7은 이 문제를 갖고 있음

<br/>

### 방식 2) Mark-and-sweep

참조 연결이 `닿을 수 있는 객체들(Reachable Objects)`을 체크하고 체크되지 않은 대상은 가비지 컬렉션 대상으로 지정하여 해제한다.

![Java-GC-mark-and-sweep](https://plumbr.io/app/uploads/2015/05/Java-GC-mark-and-sweep.png)

위 그림과 같이 최상위(전역) scrope에 있는 roots 라고 불리는 오브젝트 집합부터 시작해서 자식 오브젝트의 참조 끝까지 순회한다.
순회가 끝나면 `닿지 않는 객체들(Non-Reachable Objects)`에 대해 메모리를 해제한다.
가비지 컬렉션은 `런타임 환경`에서 실행되므로 웹 사이트의 성능에 영향을 덜 미치기 위하여 최적화가 적용되어 있다.

#### 대표 최적화 기법 3가지

**Generational collection** 

`새로운 객체`, `오래된 객체`로 분류한다. 즉시 사용되고 사라질 가능성이 있는 최근에 생성된 `새로운 객체` 위주로 우선 감시하고, 계속 사용되고 있는 `오래된 객체`는 상대적으로 덜 감시한다.

 **incremental collection** 
 
 참조 관계의 개수가 많아지면 체크(Mark)하는 데에 시간이 오래 걸리므로 가비지 컬렉션을 여러 개로 분리하여 각자 별도로 수행한다. 분리, 변경사항 추적에 추가 작업이 필요하지만, 짧은 간격으로 실행할 수 있는 장점이 있다.
 
**idle-time collection** 

가비지 컬렉터는 CPU가 유휴 상태일 때에만 가비지 컬렉션을 실행한다.

<br/>

## Reference

* [자바스크립트의 메모리관리 - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Memory_Management)
* [가비지 컬렉션 (javascript.info)](https://ko.javascript.info/garbage-collection)
* [GC Algorithms: Basics | Plumbr – User Experience & Application Performance Monitoring](https://plumbr.io/handbook/garbage-collection-algorithms)
