# undefined and null in JavaScript/TypeScript

## 알아보게된 배경

어느 날 내 자리를 지나가는 동료가 아래와 같은 코드를 보곤 농담식으로 null을 사용하지 말고 undefined 사용하라고 말했다.

```javascript
// ...
const xxx = null;
// ...
```
이유는 [Microsoft TypeScript 코딩 가이드](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines#null-and-undefined) 를 보면 `null`을 사용하지 말고 `undefined`를 사용하라고 안내되어 있기 때문이란다. 

`undefined, null`에 관련된 팀 코딩 컨벤션은 없었지만, 나는 의미론적/기능적으로 사용해오고 있었다.

`undefined`

* 옵셔널 파라미터가 존재하는 함수에 중간 순서의 파라미터를 [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) 값으로 설정되도록 하고 싶을 때.

`null`

* 의도적으로 빈 값을 사용하고 싶을 때
* 참조 관계를 끊을 때([GC](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management#garbage_collection) 동작을 위함)
* null 체크할 때(ex. `value == null ? a : b`).  

<br>

`"TypeScript에서는 null을 사용하면 안되는 것인가?"`라는 의문을 품고 관련 내용을 찾아봤다.

<br>

우선 [Microsoft TypeScript 코딩 가이드](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines#null-and-undefined) 를 보면 이유가 적혀있진 않았다.  
누군가 [Why "Use undefined, do not use null."? #8940](https://github.com/Microsoft/TypeScript/issues/8940) 이슈에 질문을 남겨놓은 것을 찾아봤는데 TypeScript 컴파일러를 개발하는 가이드일뿐 TypeScript 일반 가이드는 아니라고 답변했다.

[Nordic.js 2014 • Douglas Crockford - The Better Parts](https://www.youtube.com/watch?v=PSGEjv3Tqo0&t=561s)

<br>

## 의미 비교

![undefined-null](https://i.stack.imgur.com/T9M2J.png)

[ECMAScript® 2022 Language Specification](https://tc39.es/ecma262/#sec-undefined-value) 에 따르면 아래와 같이 정의되어 있다.

* `undefined value`, 변수가 값을 할당된 적이 없이 사용된 기본값
* `null value`, 객체 값이 의도적으로 없음을 나타내는 기본값

<br>

## 동작 비교

<br>

### 타입

```javascript
console.log(null == null); // true
console.log(undefined == undefined); // true
console.log(null == undefined); // true
console.log(null !== undefined); // true

console.log(0 == undefined); // false
console.log('' == undefined); // false
console.log(false == undefined); // false

console.log(typeof undefined); // 'undefined'
console.log(typeof null); // 'object'
```

<br>

### undefined

```javascript
// 변수에 값을 할당하지 않은 경우
let mhkim;
console.log(mhkim); // undefined
```

```javascript
// 존재하지 않는 property에 접근하는 경우
const mhkim = {
  gender: 'man',
  name: 'myoung ho kim'
};
console.log(mhkim.feature); // undefined
```

```javascript
// 반환 값이 없는 함수의 반환 값
function foo() {
  return;
}
console.log(foo()); // undefined
```

```javascript
// built-in 함수에서 값을 찾지 못했을 때
const nums = [1, 2, 3];
console.log(nums.find(num => num === 4)); // undefined
```

<br>

### null

<br>

#### DOM built-in function
```javascript
document.getElementById('foo'); // null, 'foo'라는 Id가 설정된 element가 없을 때
```

#### [React RefObject의 current 기본값](https://codesandbox.io/s/elated-bohr-p0hdb?file=/src/index.js)

* reference: [Adding a Ref to a DOM Element](https://reactjs.org/docs/refs-and-the-dom.html#adding-a-ref-to-a-dom-element)

#### 백엔드 팀에서 없음을 의미하기 위해 API 응답을 null로 반환

<br>

## 동작의 차이

```javascript
// default parameter
function foo(a = `I'am`, b) {
  console.log(a, b);
}
foo(undefined, 'Myoung Ho Kim'); // I'am Myoung Ho Kim
foo(null, '을 만나 by 폴킴'); // null 을 만나 by 폴킴
```

```javascript
// Serialization
console.log(JSON.stringify({life: undefined})); // {}
console.log(JSON.stringify({life: null})); // {"life":null}
```

<br>

## Reference

* https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines#null-and-undefined
* https://tc39.es/ecma262/#sec-undefined-value
* `✨` https://github.com/sindresorhus/meta/discussions/7
* `✨` https://2ality.com/2021/01/undefined-null-revisited.html#the-history-of-undefined-and-null
* https://google.github.io/styleguide/tsguide.html#null-vs-undefined
* `📑` https://engineering.dollarshaveclub.com/typescript-maybe-type-and-module-627506ecc5c8#6d6d
* `📑` https://github.com/microsoft/TypeScript/pull/7140
* `📑` https://github.com/microsoft/TypeScript/issues/7426
* `📑` https://github.com/microsoft/TypeScript/issues/9653

ps. Reference 글 뿐만 아니라 관련 topic에 대한 내용이 너무 많아서 나중에 다시 더 살펴봐야할 것 같다.
