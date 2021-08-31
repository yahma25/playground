# 메모리 누수 샘플

## 순환 참조

문제 - 1
```html
<html>
  <body>
    <script type="text/javascript">
      document.write('Circular references between JavaScript and DOM!');

      var obj;

      window.onload = function() {
        obj = document.getElementById('DivElement');
        document.getElementById('DivElement').expandoProperty = obj;
        obj.bigString = new Array(1000).join(new Array(2000).join('XXXXX'));
      };
    </script>

    <div id="DivElement">Div Element</div>
  </body>
</html>
```

문제 - 2
```html
<html>
  <script type="text/javascript">
    document.write('Circular references between JavaScript and DOM!');

    function myFunction(element) {
      this.elementReference = element;
      // circular reference
      element.expandoProperty = this;
    }

    function Leak() {
      // leak!
      new myFunction(document.getElementById('myDiv'));
    }
  </script>
  <body onload="Leak()">
    <div id="myDiv"></div>
  </body>
</html>
```

## 이벤트 핸들링

문제
```html
<html>
  <body>
    <script type="text/javascript">
      document.write('Program to illustrate memory leak via closure');
      window.onload = function outerFunction() {
        var obj = document.getElementById('element');
        obj.onclick = function innerFunction() {
          alert('Hi! I will leak');
        };
        obj.bigString = new Array(1000).join(new Array(2000).join('XXXXX'));
        // This is used to make the leak significant
      };
    </script>
    <button id="element">Click Me</button>
  </body>
</html>

```

해결
```html
<html>
  <body>
    <script type="text/javascript">
      document.write('Avoiding memory leak via closure by breaking the circular reference');
      window.onload = function outerFunction() {
        var obj = document.getElementById('element');
        obj.onclick = function innerFunction() {
          alert('Hi! I have avoided the leak');
          // Some logic here
        };
        obj.bigString = new Array(1000).join(new Array(2000).join('XXXXX'));
        obj = null; //This breaks the circular reference
      };
    </script>
    <button id="element">"Click Here"</button>
  </body>
</html>

```
