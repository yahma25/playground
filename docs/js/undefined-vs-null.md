# undefined vs null in JavaScript/TypeScript

## 알아보게된 배경

reference
 
* https://github.com/Microsoft/TypeScript/issues/8940
* https://github.com/hmcts/cmc-validators/pull/13/files/df4c0226501088dcca893dae00a18b14128b4dac

## 의미 비교

[ECMAScript® 2022 Language Specification](https://tc39.es/ecma262/#sec-undefined-value)

<br>

## 동작 비교

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
// native 함수에서 값을 찾지 못했을 때
const nums = [1, 2, 3];
console.log(nums.find(num => num === 4)); // undefined
```

```javascript

```

### null

```javascript
// 외부 API
document
```

```javascript
// Back-end API

```

## 동작의 차이

```javascript
// default parameter
```

<br>



<br>

## Reference

* https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines#null-and-undefined
* https://tc39.es/ecma262/#sec-undefined-value