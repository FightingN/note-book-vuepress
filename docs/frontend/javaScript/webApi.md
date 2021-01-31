## API 和 webAPI

- API: 应用程序编程接口（暴露出来的工具）
- webAPI：浏览器平台对外公开的提供操作浏览器和网页的接口（BOM、DOM）
- DOM：文档对象模型，提供一套标准规范【JS 操作 HTML 标签，通过 DOM】

## 文档树

- 文档树：浏览器在加载 html 文件时，会把文档、文档中的标签、属性、文本、注释转换成对象，然后按照标签的关系（父子、兄弟、祖孙）以树状结构存储到内存中。【HTML==>转换元素（DOM 里面对象）】
- 文档树中的对象，也被称为**节点对象** 。
- 节点对象的分类：**文档（document）**、**元素（标签转换的对象）**、文本、属性、注释

<img :src="$withBase('/image/javascript/document.png')" alt="">

## 获取元素

### id 获取元素

```js
<button id="btn">按钮2</button>;
// 根据id获取单个元素，返回一个元素
var btn = document.getElementById("btn");
// dir可以打印出对象中的属性和方法
console.dir(btn);
console.log(btn);
// 细节：若页面上有相同的id值的标签时，在获取时，获取的是id值第一次出现的标签。
```

### 根据标签名获取一组元素

- **语法**：document.getElementsByTagName('标签名');

```js
<button>按钮1</button>
<button>按钮2</button>
<button>按钮3</button>
<button>按钮4</button>
<script>
// 需求：获取所有按钮
// 根据标签名获取一组元素，返回的是一个伪数组
var btns = document.getElementsByTagName('button');
console.log(btns);
console.log( btns[0] );
console.log( btns[1] );

// 遍历数组获取每个元素
// for (var i = 0; i < btns.length; i++) {
// 	console.log( btns[i] );
// }

</script>
```

:::tip 数组和伪数组的区别？

- 相同：都有索引和长度（length）
- 不同点：伪数组不能够调用真正数组中内置的方法（push、pop、sort...）

:::

### 根据选择器获取单个元素

**语法**：document.querySelector('选择器');

```html
<div class="c1">div1</div>
<div id="d2">div2</div>
<p>段落</p>

<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>

<div id="a1">
  <p>a</p>
</div>

<div class="c2">
  <p>b</p>
</div>

<script type="text/javascript">
  var p1 = document.querySelector(".c2 p");
  console.log(p1); //<p>b</p>

  var li1 = document.querySelector("li:first-child");
  console.log(li1); //<li>1</li>

  // .c1，小括号选择器
  var div1 = document.querySelector(".c1");
  console.log(div1); //<div class="c1">div1</div>

  var div2 = document.querySelector("#d2");
  console.log(div2); //<div id="d2">div2</div>

  var obj = document.querySelector("p");
  console.log(obj); //<p>段落</p>
</script>
```

```html
<button>按钮1</button>
<button>按钮2</button>
<button>按钮3</button>

<script>
  // 根据选择器获取单个元素
  // 细节：若有多个标签选择器一样时，将来获取的是第一次出现的标签
  var btn = document.querySelector("button");
  console.log(btn); //<button>按钮1</button>
</script>
```

### 根据选择器获取一组元素

**语法**：document.querySelectorAll('选择器');

```html
<ul class="c1">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>10</li>
</ul>

<script type="text/javascript">
  var lis = document.querySelectorAll(".c1 li");

  // console.log(lis);

  for (var i = 0; i < lis.length; i++) {
    console.log(lis[i]);
  }
</script>
```

:::tip 注意

根据选择器获取元素的方式在 ie8 以下有兼容性问题

:::

## 事件基础

### 什么是事件

- 用户做的动作就认为事件(用户和网页之间的交互行为（鼠标点击、鼠标进入、鼠标离开、键盘按下、键盘弹起、手指按压、手指移动等等）)

### 事件三要素

- 当用户做某个元素上，做了某个动作，调用某个函数里面去写处理程序
  - 事件源：被触发的元素，比如点击的按钮【在哪个元素上发生的事件】
  - 事件类型：如何触发的事件，比如==点击==按钮 【用户做什么动作，动作不同就是事件类型不同】
  - 事件处理程序：事件发生后的结果。【事件处理程序】函数

### 给元素注册事件

语法：事件源.事件类型 = 事件处理程序;

- 事件源 → 触发的那个元素
- 事件类型 → 点击 onclick
- 事件处理程序 → 函数

```js
// 获取按钮元素
var btn = document.getElementById("btn");
btn.onclick = function () {
  // 函数体中的代码，就是事件发生后要执行的程序
  alert("燃烧段段的卡路里");
};

// 事件处理程序的本质是什么？
// ① onclick本质上就是事件源这个对象中的某一个键值对而已。默认值是null，表示没有注册事件
// ② 给事件源注册onclick事件，其实本质上就是给onclick赋值函数，所以onclick是事件源的一个方法而已
// ③ 点击按钮时，浏览器自动调用了btn.onclick();
```

### 事件处理程序中的 this

**事件处理程序中的 this 指向事件源** 【当前事件源】

```js
// 点击按钮打印this
// 1、获取元素2、添加事件，3、写处理程序
// 获取元素
var btn = document.querySelector("input");

// 添加事件
btn.onclick = function () {
  console.log(this);
};

var d1 = document.getElementById("d1");

d1.onclick = function () {
  console.log(this);
};
```

### 取消 a 标签默认行为

#### 事件处理程序中最后设置**return false**

```html
<a id="link" href="https://www.baidu.com">点击</a>
<script>
  var link = document.getElementById("link");
  link.onclick = function () {
    alert("你好");
    // 方式1：取消a点击后的默认跳转行为 return false;
    return false;
  };
</script>
```

#### 设置 a 标签的 href 属性值为：**javascript:**

```js
  <!-- 方式二：给a标签的herf值设置javascript: ,表示将来点击a时，会阻止默认跳转行为，并且仅仅会执行js代码-->
  <a href="javascript:">点击2</a>
  <!-- 扩展：通过a可以打开打电话应用 -->
  <a href="tel:">打电话</a>
  <!-- 扩展：通过a可以打开电子邮件应用 -->
  <a href="mailto:">打开邮件</a>
```

### 给一组按钮注册事件，点击弹出‘你好’

```html
<input type="button" value="按钮1" />
<input type="button" value="按钮2" />
<input type="button" value="按钮3" />
<input type="button" value="按钮4" />
<input type="button" value="按钮5" />
<input type="button" value="按钮6" />
<input type="button" value="按钮7" />
<input type="button" value="按钮8" />
<script type="text/javascript">
  // 获取元素
  var btns = document.querySelectorAll("input");
  // 遍历添加事件
  for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
      alert("你好哇哈哈");
      console.log(this);
    };
  }
</script>
```

## 事件类型

- onclick【点击事件，单击事件】
- onmouseenter 鼠标进入元素事件
- onmouseleave 鼠标离开元素事件
- onmouseover，onmouseout【支持冒泡】鼠标移入移出

```html
<div></div>
<script>
  var div = document.querySelector("div");

  div.onmouseenter = function () {
    console.log("鼠标进入了div");
  };
  div.onmouseleave = function () {
    console.log("鼠标离开了div");
  };
</script>
```

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>Document</title>
  <style>
    .box1 {
      width: 500px;
      height: 500px;
      border: 1px solid blue;
      background: blue;
      margin: 0 auto;
    }

    .box2 {
      width: 400px;
      height: 400px;
      border: 1px solid green;
      background: green;
      margin: 50px auto;
    }

    .box3 {
      width: 300px;
      height: 300px;
      border: 1px solid purple;
      background: purple;
      margin: 50px auto;
    }

    .box4 {
      width: 200px;
      height: 200px;
      border: 1px solid gold;
      background: gold;
      margin: 50px auto;
    }
  </style>
</head>

<body>
  <div class="box1">
    <div class="box2">
      <div class="box3">
        <div class="box4"></div>
      </div>
    </div>
  </div>
  <script>
    var divs = document.querySelectorAll("div");
    // 【onmosueover 支持冒泡】
    // for (var i = 0; i < divs.length; i++) {
    //   divs[i].onmouseover = function (e) {
    //     alert(this.className);
    //   };
    // }

    // 【onmosueenter 不支持冒泡】
    for (var i = 0; i < divs.length; i++) {
      divs[i].onmouseenter = function (e) {
        alert(this.className);
      };
    }
  </script>
</body>
```

### oninput 输入事件

```html
<body>
  <input type="text" />

  <script type="text/javascript">
    // 在输入框输入的时候，一输入立刻打印出文本框内容

    var txt = document.querySelector("input");

    // 添加事件
    txt.oninput = function () {
      console.log(txt.value);
    };
  </script>
</body>
```

### onmousedown 鼠标按下 onmouseup 鼠标抬起 onmousemove 鼠标移动

```html
<body>
  <input type="button" value="按钮" />

  <script type="text/javascript">
    var btn = document.querySelector("input");

    // btn.addEventListener('mousedown',function () {});

    btn.onmousedown = function () {
      console.log("鼠标按下");
    };

    btn.onmouseup = function () {
      console.log("鼠标抬起");
    };

    // 鼠标移动
    document.onmousemove = function () {
      console.log(Math.random());
    };
  </script>
</body>
```

### onkeydown 键盘按下 onkeyup 键盘抬起

```html
<body>
  <script type="text/javascript">
    // 鼠标：onmousedown，onmouseup，onmousemove
    // 键盘：onkeydown，onkeyup
    // 键盘按下
    document.onkeydown = function () {
      console.log("键盘按下");
    };
    // 键盘抬起
    document.onkeyup = function () {
      console.log("键盘抬起");
    };
  </script>
</body>
```

## 操作元素的属性

### 语法格式

- 获取：

  - **语法：元素.属性名;**

- 设置：
  - **语法：元素.属性名= 值;**

### 常见的属性

> id、title、href、src、className、innerText / textContent、innerHTML

#### 变换类名

```html
<head>
  <meta charset="UTF-8" />
  <title>Document</title>
  <style type="text/css">
    .c1 {
      background: red;
    }
    .c2 {
      background: yellow;
    }
  </style>
</head>
<body>
  <input type="button" value="点击" />

  <div class="c1" id="d1">div</div>

  <script type="text/javascript">
    // 获取元素
    var btn = document.querySelector("input");
    var div = document.querySelector(".c1");

    // 添加事件
    btn.onclick = function () {
      // div.id='d2';
      // alert(div.id)
      // div.className = 'c2';
    };
  </script>
</body>
```

#### className 操作类名

```html
<div id="box" class="a"></div>
<script>
  var div = document.getElementById("box");
  // 获取类名
  console.log(div.class); // undefined
  console.log(div.className); // a
  // 设置类名
  div.className = "b";
</script>
```

#### 修改内容(innerText 和 innerHTML)

- 修改标签的内容,只适用于双标签
- innerText：只识别文本
- innerHTML：文本与标签

```html
<div id="box"><h2>我是div中的标题</h2></div>
<script>
  // 1. 获取div元素
  var div = document.getElementById("box");
  console.dir(div);
  // 【获取】
  // ① 通过innerText获取,仅仅包含文本
  console.log(div.innerText); //我是div中的标题
  // ② 通过innerHTML获取，若有子标签时，会包含文本和子标签
  console.log(div.innerHTML); //<h2>我是div中的标题</h2>

  // 【设置】
  // ① 通过innerText设置,若设置中包含了子标签，该标签不会被渲染而是当做普通文本显示
  // div.innerText = '<a href="#">我是div中的超链接</a>';
  // ② 通过innerHTML设置,若设置中包含了子标签，该标签会被渲染显示
  div.innerHTML = '<a href="#">我是div中的超链接</a>';
</script>
```

- 注意替换内容时，会把之前的内容全部覆盖掉，而不是追加内容

#### innerText 和 textContent 的兼容性问题

- innerText：IE 兼容性好
- textContent：火狐兼容性好

```html
<div id="box"><h2>我是div中的标题</h2></div>
<script>
  // 1. 获取div元素
  var div = document.getElementById("box");
  console.log("innerText:" + div.innerText);
  console.log("textContent:" + div.textContent);
  // 相同点：获取的都是文本
  // 不同点：
  // ① textContent属性在ie低版本中不支持，innerText基本没有兼容问题
  // ② textContent标准属性（官宣），innerText（野路子，但是兼容性好,推荐使用）
</script>
```

#### 案例:点击 a 元素切换图片

```html
<body>
  <a href="http://www.baidu.com">点击换图</a>
  <br />
  <img src="images/a.jpg" />

  <script type="text/javascript">
    //点击a元素切换图片
    // 获取元素
    var link = document.querySelector("a");
    var img = document.querySelector("img");

    // 添加事件
    link.onclick = function () {
      // 修改图片
      img.src = "images/b.jpg";

      return false;
    };
  </script>
</body>
```

## 操作元素的样式

### 通过 style 属性设置样式

- 语法:元素.style.样式属性名 = '样式属性值';

```html
<div>111</div>
<script>
  var div = document.querySelector("div");
  div.style.width = "300px";
  div.style.height = "300px";
  // background-color → backgroundColor
  div.style.backgroundColor = "red";
  // div.style.fontSize = '50px';
  div.style.font = 'bold 50px "宋体"';

  // 若操作少量的样式时，适合用style属性操作
</script>
```

```html
<body>
  <div>内容</div>
  <script type="text/javascript">
    // 获取元素
    var div = document.querySelector("div");
    // 鼠标进入div修改div的样式【background】
    // 添加事件
    div.onmouseenter = function () {
      // 元素.style.样式属性名 = '样式属性值';
      div.style.background = "red";
      div.style.height = "100px";
      div.style.color = "yellow";
      div.style.fontSize = "60px";
      div.style.textAlign = "center";
      // border-top-width：borderTopWidth
    };
    // 清空样式
    div.onmouseleave = function () {
      div.style = "none";
      // div.style.background = '';
      // div.style.height = '';
      // div.style.color = '';
      // div.style.fontSize = '';
      // div.style.textAlign = '';
    };
  </script>
</body>
```

### 通过 className 设置样式

- 语法：元素.className = '类名'

```html
<body>
  <div class="c1">内容</div>
  <script type="text/javascript">
    // 获取元素
    var div = document.querySelector("div");
    // 注册事件
    div.onmouseenter = function () {
      div.className = "c2";
    };
    div.onmouseleave = function () {
      div.className = "c1";
    };
  </script>
</body>
```

#### 开关灯小案例

```html
<body>
  <input type="button" value="关灯" />
  <script type="text/javascript">
    // 点击按钮的时候，改变body的背景颜色和按钮的文字
    // 获取元素
    var btn = document.querySelector("input");
    // 获取body的时候：document.body
    // 注册事件
    btn.onclick = function () {
      // 获取按钮的文字
      var val = btn.value;
      // 根据按钮的文字，判断是开灯还是关灯
      if (val === "关灯") {
        // 获取body
        document.body.style.background = "black";
        // 修改按钮的文字
        btn.value = "开灯";
      } else {
        // 获取body
        document.body.style.background = "white";
        // 修改按钮的文字
        btn.value = "关灯";
      }
    };
  </script>
</body>
```

- 做法二：

```html
<body>
  <input type="button" value="关灯" />

  <script type="text/javascript">
    // 记录次数法【奇偶性】
    // 通过记录用户的点击次数，判断次数是奇数还是偶数
    // 定义一个变量，用来记录次数【只要函数被调用，那么就说明点击了一次】
    var count = 0;
    // 获取元素
    var btn = document.querySelector("input");
    // 添加事件
    btn.onclick = function () {
      // 每次一进入函数，立刻记录次数
      count++;

      if (count % 2 == 1) {
        // 获取body
        document.body.style.background = "black";

        // 修改按钮的文字
        btn.value = "开灯";
      } else {
        // 获取body
        document.body.style.background = "white";

        // 修改按钮的文字
        btn.value = "关灯";
      }

      console.log(count);
    };

    // 用布尔值如何判断改变
  </script>
</body>
```

#### 给一组 li 注册点击事件，鼠标点击那个 li 就弹出这个 li 在这一组中的索引位置

```html
<head>
  <meta charset="UTF-8" />
  <title>Document</title>
  <style type="text/css">
    ul li {
      background: red;
      margin: 10px;
    }
  </style>
</head>
<body>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
  </ul>

  <script type="text/javascript">
    // 点击（所有）li，打印点击的这个li的索引值

    // 获取元素
    var lis = document.querySelectorAll("ul li"); // [li,li,li,li,li,li,li,li]

    // 添加事件
    for (var i = 0; i < 10; i++) {
      // i就是索引值

      // 当i为0或者满足条件，那么此时的i就是索引值，但是因为程序执行太快，反应不过来，所以我们需要记录下来【记录下来当前的索引】
      // 给每一个li添加一个属性，记录这个li在数组中的索引位置
      lis[i].index = i;
      // lis[0].index = 0;
      // lis[1].index = 1;
      // lis[2].index = 2;

      lis[i].onclick = function () {
        console.log(this.index);
      };
    }
  </script>
</body>
```

#### 购物车商品加减按钮

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      div {
        width: 80px;
      }
      input[type="text"] {
        width: 50px;
        height: 44px;
        outline: none;
        border: 1px solid #ccc;
        text-align: center;
      }
      input[type="button"] {
        height: 24px;
        width: 22px;
      }
      input {
        float: left;
      }
    </style>
  </head>

  <body>
    <div>
      <input type="text" id="total" value="1" readonly />
      <input type="button" value="+" id="add" />
      <input type="button" value="-" id="reduce" disabled />
    </div>

    <script>
      //   先获取元素
      var total = document.querySelector("#total");
      var add = document.querySelector("#add");
      var reduce = document.querySelector("#reduce");
      // 定义一个变量,记录次数

      // 添加事件

      // 先让加可以加起来
      add.onclick = function () {
        var count = total.value;
        count++;
        total.value = count;
        reduce.disabled = false;
      };
      reduce.onclick = function () {
        var re = total.value;
        re--;
        total.value = re;
        if (re == 1) {
          reduce.disabled = true;
        }
      };
    </script>
  </body>
</html>
```

## 操作表单元素的属性

### value 操作表单元素的内容

- 获取：==元素.value;== 返回字符串
- 设置：==元素.value = 值;==

### disabled 操作表单元素是否禁用

- 获取：==元素.disabled;== 返回布尔值（true→ 禁用，false→ 不禁用）;
- 设置：==元素.disabled = 布尔值;==

### checked 操作表单元素是否选中

- 获取：==元素.checked;== 返回布尔值（true→ 选中，false→ 不选中）;
- 设置：==元素.checked = 布尔值;==

### selected 操作表单元素的是否选中

- 获取： ==元素.selected;==
- 设置：==元素.selected = 布尔值;==

```html
<select>
  <option>北京</option>
  <option>上海</option>
  <option>添加</option>
  <option id="gz">广州</option>
</select>

<input type="button" value="点击" id="btn" />

<script type="text/javascript">
  // 获取元素
  var btn = document.getElementById("btn");
  var gz = document.getElementById("gz");

  // 添加事件
  btn.onclick = function () {
    alert(gz.selected);
    gz.selected = true;
  };
</script>
```

## 自定义属性行内属性

- 标签上的自定义属性不可以元素点的方式访问
- 获取

  > - 语法：**元素.getAttribute(name);**

- 设置

  > - 语法：**元素.setAttribute(name,value);**

- 移除

  > - 语法：**元素.removeAttribute(name,value);**

  ```html
  <body>
    <img src="a.jpg" bigSrc="b.jpg" />
    <script type="text/javascript">
      var img = document.querySelector("img");
      // console.dir(img);
      img.index = 999;

      console.dir(img);
      // var img = document.querySelector('img');

      // // console.log(img.bigSrc);

      // // var n = img.getAttribute('src');

      // // console.log(n);

      // // img.setAttribute('src','wahaha.jpg');

      // img.removeAttribute('src');
    </script>
  </body>
  ```

## 节点的层级

### 节点的关系

- 父子关系
- 兄弟关系

### 节点的 nodeType、nodeName、nodeValue 的属性

- 节点的 nodeType 属性的作用：元素 → 1； 文本 →3
- 节点的 nodeName 属性的作用：元素 → 大写的标签名 文本 → `#text`
- 节点的 nodeValue 属性的作用：元素 → null 文本 → 文本的内容

```html
<body>
  <div id="box">
    <p>段落</p>
    <h1 class="h1">标题</h1>
    <img src="a.jpg" />
  </div>
  <input type="button" value="点击" id="btn" />
  <script type="text/javascript">
    // 获取元素
    var btn = document.getElementById("btn");
    // 添加事件
    btn.onclick = function () {
      var box = document.getElementById("box");
      var all = box.childNodes;
      console.log("all", all);
      // 遍历all里面的所有节点，查看每个节点的nodeType，如果是1，说明就是元素节点
      for (var i = 0; i < all.length; i++) {
        if (all[i].nodeType === 1) {
          console.log("1", all[i]);
        }
      }
      console.log(all[0].nodeValue);
      var h1 = document.querySelector("h1");
      // 下一个元素兄弟
      // var n = h1.nextSibling.nextSibling;
      // 前一个元素兄弟
      var n = h1.previousSibling.previousSibling;
      console.log(n);
      var box = document.getElementById("box");
      // 获取所有子节点【文本和元素】
      var all = box.childNodes;
      var all = box.children;
      var all = box.firstChild;
      var all = box.lastChild;
      console.log(all);
      var h1 = document.querySelector(".h1");
      var par = h1.parentNode;
      console.log(par);
    };
  </script>
</body>
```

### 根据子节点获取父节点

- 语法：**子节点.parentNode**

### 根据父节点获取子节点

- 语法：**父节点.childNodes;** 获取的子节点包含文本和元素
- 语法：**父元素.children;** 获取的子节点仅仅包含元素
- 语法：**父节点.firstElementChild;** 获取第一个子元素节点
- 语法：**父节点.lastElementChild;** 获取最后一个元素节点

### 获取兄弟节点

- 获取下一个兄弟
  - 语法：**节点.nextElementSibling**
- 获取上一个兄弟
  - 语法：**节点.previousElementSibling**

## 创建元素

### 动态创建元素

- 通过 innerHTML 创建元素

- 语法：**元素.innerHTML = '内容';**

```html
<body>
  <input type="button" value="点击" />
  <ul>
    <li>1</li>
  </ul>
  <div></div>
  <script type="text/javascript">
    var btn = document.querySelector("input");
    var ul = document.querySelector("ul");
    var div = document.querySelector("div");
    btn.onclick = function () {
      div.innerHTML = '<img src="a.jpg">';
      // 获取ul中的内容
      // var val = ul.innerHTML;
      // // var val = ul.children;
      // // 以前的内容加上新的内容
      // ul.innerHTML = val + '<li>aaa</li>';
    };
  </script>
</body>
```

- 通过 document.createElement 创建元素

- 语法：**document.createElement(‘标签名’);** 返回一个新的元素对象

```html
<body>
  <input type="button" value="点击" />
  <ul>
    <li>1</li>
  </ul>
  <script type="text/javascript">
    var btn = document.querySelector("input");
    var ul = document.querySelector("ul");
    btn.onclick = function () {
      // 创建li
      var newLi = document.createElement("li");
      // 放到ul中【让哪个元素中加.appenedChild(追加的元素) 父元素.appendChild(子元素)】
      ul.appendChild(newLi);
      // li添加内容
      newLi.innerText = "xindeli";
    };
  </script>
</body>
```

**性能测试**

> - innerHTML 在追加多个元素时执行速度慢，性能差。不推荐使用
> - createElement 方法执行速度快，**性能高** ，在实际开发中**推荐使用** 。

### 动态追加元素

- 语法：**父元素.appendChild(子元素);**

### 动态删除元素

- 语法：**父元素.removeChild(子元素);**

```html
<body>
  <input type="button" value="点击" />

  <div>
    <img src="a.jpg" />
    <img src="b.jpg" id="img2" />
  </div>

  <script type="text/javascript">
    var btn = document.querySelector("input");
    // 要想删除一个元素，必须找到它的父元素【必须由其父元素调用方法】
    var img2 = document.getElementById("img2");
    btn.onclick = function () {
      img2.parentNode.removeChild(img2);
    };
  </script>
</body>
```

### 插入元素

- 语法：**父节点.insertBefore(新的节点,旧的子节点)**
  DOM 提供了 insertBefore()方法，这个方法将一个新元素插入到一个现有的元素中
  需要满足三个条件：

1. 新元素：你想插入的元素 （newElement）
2. 目标元素：你想把这个新元素插入到那个元素（targetElement）之前
3. 父元素：目标元素的父元素（parentElement）

> parentElement.insertBefore( newElement , targetElement );

```js
//这里parentElement = targetElement.parentNode
var newEle = getElementById("#newEle"); //新添加的元素
var oldEle = getElementById("#oldEle"); //现有的元素
oldEle.parentNode.insertBefore(newEle, oldEle);
//将newEle插入到oldEle之前
```

### 替换元素

- 语法：**父节点.replaceChild(新的节点,旧的子节点)**

### 克隆元素

- 语法：元素.cloneNode(true 或 false); 返回一份新的克隆后的元素

- true，克隆元素内部所有的内容
- false,默认，克隆的是外部的标签

```html
<ul>
  <li>我是li1</li>
  <li>我是li2</li>
  <li>我是li3</li>
</ul>
<div>
  <p>段落</p>
  <h2>标题</h2>
  <a href="#">超链接</a>
</div>
<script>
  var ul = document.querySelector("ul");
  // 创建一个新的li
  var newLi = document.createElement("li");
  newLi.innerText = "新的li";
  // 获取旧的li
  var oldLi = ul.children[0];
  // 插入
  // ul.insertBefore(newLi,oldLi);

  // 替换
  ul.replaceChild(newLi, oldLi);

  var div = document.querySelector("div");
  // 克隆
  // var newDiv = div.cloneNode(false);
  var newDiv = div.cloneNode(true);
  document.body.appendChild(newDiv);
</script>
```

## 事件监听

### 为什么要学事件监听

- 需求：给一个元素连续绑定两次点击事件，并且事件处理程序都有效。

### 事件监听注册事件

- 语法：**事件源.addEventListener('事件类型',事件处理程序,是否捕获);**
  - 事件源 → 操作的元素
  - 事件类型 → 在此不加 on, onclick→click
  - 事件处理程序 → 函数
  - 是否捕获，可选参数，默认为 false。 true→ 捕获，false→ 冒泡

```html
<body>
  <input type="button" value="点击" />

  <script>
    // 需求：给一个元素连续绑定两次点击事件，并且事件处理程序都有效。
    var btn = document.querySelector("input");

    // btn.onclick = function () {
    // 	console.log(123);
    // }

    btn.onclick = function () {
      console.log(456);
      console.dir(btn);
    };

    // 移除事件【on的方式】
    btn.onclick = null;

    console.dir(btn);

    // 元素.on事件==>元素.事件 = null

    // btn.addEventListener('click',function () {
    // 	console.log(123);
    // });
    // btn.addEventListener('click',function () {
    // 	console.log(456);
    // });
    // btn.addEventListener('click',function () {
    // 	console.log(789);
    // });
  </script>
</body>
```

### 事件监听移除事件

- 语法：**事件源.removeEventListener('事件类型',事件处理程序的名称)**
- 事件源，操作的元素
- 事件类型，不加 on
- 事件处理程序的名字：函数名
  - 注意：若将来要通过事件监听的方式移除事件时，之前注册事件**要把事件处理程序单独抽取出来命名**

:::tip

- 绑定事件： on 的方式：元素.onclick = function () {}
- 事件监听：元素.addEventListener('click',function () {},参数);
- 移除事件： on 的方式：元素.onclick = null;
- 事件监听：元素.removeEventListener('click',事件处理名称);

:::

```html
<body>
  <input type="button" value="点击" />
  <script type="text/javascript">
    var btn = document.querySelector("input");

    var fn1 = function () {
      console.log(123);
    };

    var fn2 = function () {
      console.log(456);
    };

    var fn3 = function () {
      console.log(789);
    };

    btn.addEventListener("click", fn1);
    btn.addEventListener("click", fn2);
    btn.addEventListener("click", fn3);

    // 移除事件
    btn.removeEventListener("click", fn1);

    btn.removeEventListener("click", fn2);

    btn.removeEventListener("click", fn3);
  </script>
</body>
```

### 事件流

<img :src="$withBase('/image/javascript/events.png')" alt="">

**事件流** ：事件触发后的三个阶段（捕获阶段、**目标阶段**、**冒泡阶段**）。

**注意：** 在事件触发后，这三个阶段始终是存在的

**顺序 ① 先捕获，② 到达目标，③ 再冒泡。** 但是在触发后，针对捕获和冒泡，仅仅启用一个。

### 事件冒泡

- 事件冒泡：目标阶段 →document
- 事件触发后，事件类型会一级一级的网上冒泡，直到到 document

<img :src="$withBase('/image/javascript/events2.png')" alt="">

```html
  <style>
    .box1 {
      width: 500px;
      height: 500px;
      border:1px solid blue;
      background: blue;
      margin:0 auto;

    }
    .box2 {
      width: 400px;
      height: 400px;
      border:1px solid green;
      background: green;
      margin: 50px auto;

    }
    .box3 {
      width: 300px;
      height: 300px;
      border:1px solid purple;
      background: purple;
      margin: 50px auto;

    }
    .box4 {
      width: 200px;
      height: 200px;
      border:1px solid gold;
      background: gold;
      margin: 50px auto;

    }
  </style>
</head>
<body>
  <div class="box1">
    <div class="box2">
      <div class="box3">
        <div class="box4"></div>
      </div>
    </div>
  </div>
  <script>
    // 获取所有div
    var divs = document.querySelectorAll('div');

    for(var i = 0; i < divs.length; i++) {

      divs[i].addEventListener('click',function () {

        alert(this.className);

      },false);

      // divs[i].onclick = function() {

      //   alert(this.className);

      // };

    }

    document.onclick = function () {
      alert('wahaha');
    }
  </script>
</body>
```

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>Document</title>
  <style>
    .box1 {
      width: 500px;
      height: 500px;
      border: 1px solid blue;
      background: blue;
      margin: 0 auto;
    }
    .box2 {
      width: 400px;
      height: 400px;
      border: 1px solid green;
      background: green;
      margin: 50px auto;
    }
    .box3 {
      width: 300px;
      height: 300px;
      border: 1px solid purple;
      background: purple;
      margin: 50px auto;
    }
    .box4 {
      width: 200px;
      height: 200px;
      border: 1px solid gold;
      background: gold;
      margin: 50px auto;
    }
  </style>
</head>
<body>
  <div class="box1">
    <div class="box2">
      <div class="box3">
        <div class="box4"></div>
      </div>
    </div>
  </div>
  <script>
    var divs = document.querySelectorAll("div");
    for (var i = 0; i < divs.length; i++) {
      divs[i].onclick = function (e) {
        alert(this.className);
        // 停止冒泡
        e.stopPropagation();
      };
    }
  </script>
</body>
```

### 事件捕获

- 事件捕获：document→ 目标阶段; 反冒泡

<img :src="$withBase('/image/javascript/events3.png')" alt="">

## 事件对象

### 什么是事件对象

事件对象，在事件==触发后== ，在==事件处理程序中== （函数体），所获取并操作的==对象==。

事件对象中存放了和当前事件相关的信息（比如鼠标的位置、键盘按下哪个键等等）

事件触发后保存信息的对象

### 获取事件对象

- 语法：**`事件源.事件类型 = function(e){ // 第一个形参e就是事件对象 }`**

```html
<body>
  <input type="button" value="点击" />
  <script type="text/javascript">
    var btn = document.querySelector("input");

    btn.onclick = function (e) {
      console.log(e);
    };
  </script>
</body>
```

### 鼠标事件对象相关属性

- 鼠标事件类型

  - onclick
  - onmouseenter
  - onmouseleave
  - onmousedown 鼠标按下
  - onmouseup 鼠标弹起
  - onmousemove 鼠标移动

- 鼠标事件对象相关属性-获取鼠标的位置 - 事件对象.clientX / 事件对象.clientY 参照是==浏览器== - 事件对象.pageX / 事件对象.pageY 参照是==文档== - 事件对象.offsetX / 事件对象.offsetY 参照是==当前的元素==

  <img :src="$withBase('/image/javascript/offset.png')" alt="">

```html
<body>
  <div></div>

  <script type="text/javascript">
    // 点击div查看鼠标位置
    var div = document.querySelector("div");

    // 添加事件
    div.onclick = function (e) {
      console.log(e.clientX, e.clientY); // 浏览器
      console.log(e.pageX, e.pageY); // 文档
      console.log(e.offsetX, e.offsetY); // 元素
    };
  </script>
</body>
```

### 键盘事件对象相关属性

- 键盘事件
- 事件类型
  - onkeydown 键盘按下事件
  - onkeyup 键盘弹起事件
- 注意：
  - 一般情况给 document 绑定键盘事件。
- 键盘事件对象相关属性-键盘按下哪个键
  - ==事件对象.keyCode== 获取键盘按键对应的键码值
  - 事件对象.altKey 表示 alt 键是否按下，返回布尔值。
  - 事件对象.shiftKey 表示 shift 键是否按下，返回布尔值。
  - ==事件对象.ctrlKey== 表示 ctrl 键是否按下，返回布尔值。true（按下），false(没有按下)

```html
<body>
  <script type="text/javascript">
    // 键盘按下查看键值
    document.onkeydown = function (e) {
      // console.log(e.keyCode);
      // console.log(e.altKey);
      // console.log(e.ctrlKey);
      console.log(e.shiftKey);
    };
  </script>
</body>
```

- 判断键码值

```html
<body>
  <script type="text/javascript">
    document.onkeydown = function (e) {
      // console.log(e.keyCode);
      // 判断上下左右键
      // var keyVal = e.keyCode;
      if (e.keyCode === 37) {
        console.log("←");
      } else if (e.keyCode === 38) {
        console.log("↑");
      } else if (e.keyCode === 39) {
        console.log("→");
      } else if (e.keyCode === 40) {
        console.log("↓");
      }
    };
  </script>
</body>
```

### 事件对象的公共属性和方法

- 属性：
  - ==事件对象.target== 获取最先触发的元素
  - 和 this 的区别
  - this 在事件处理程序中始终代表的是事件源
  - e.target 代表不一定是事件源，代表的是最先触发的元素【目标阶段 → document】

```html
<head>
  <meta charset="UTF-8" />
  <title>Document</title>
  <style type="text/css">
    div {
      width: 300px;
      height: 200px;
      background: red;
    }
    div p {
      background: pink;
    }
    div h1 {
      background: yellow;
    }
  </style>
</head>
<body>
  <div>
    <p>段落</p>
    <h1>标题</h1>
    <img src="a.jpg" />
  </div>

  <script type="text/javascript">
    var div = document.querySelector("div");

    div.onclick = function (e) {
      // console.log(this);
      console.log(e.target);
    };
  </script>
</body>
```

- 方法：
  - 事件对象.preventDefault(); 阻止默认行为
  - ==事件对象.stopPropagation();== 停止冒泡传播

```html
<body>
  <a href="http://www.baidu.com">链接</a>

  <script type="text/javascript">
    var link = document.querySelector("a");

    link.onclick = function (e) {
      // 第一种
      // return false;

      e.preventDefault();
    };
  </script>
</body>
```

- 兼容性问题

```html
<body>
  <script type="text/javascript">
    document.onmousemove = function (e) {
      // 事件对象，存在兼容性
      // window.event;
      var ev = e || window.event;
    };
  </script>
</body>
```

## 事件委托

### 事件委托

**事件委托** （事件代理）：把子孙元素的事件注册，完全交给子孙元素的上级元素代理。
注意：委托是下级元素委托上级元素。 没有上级委托下级

### 如何实现事件委托

:::tip 实现步骤

- 给子孙元素的上级注册事件

- 在事件处理程序中，通过==事件对象.target== 获取最先触发的元素

- 可以通过==事件对象.target 的 nodeName== 属性检测最先触发的是否是指定元素

:::

```html
<head>
  <meta charset="UTF-8" />
  <title>Document</title>
  <style type="text/css">
    li {
      background: red;
      margin: 10px;
    }
    ul {
      background: yellow;
    }
  </style>
</head>
<body>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
  </ul>

  <script type="text/javascript">
    // 事件委托
    var ul = document.querySelector("ul");
    // 添加事件
    ul.onclick = function (e) {
      // 事件注册给ul，怎么能知道点的是哪个li
      // var li = e.target;
      // console.log(li.innerText);
      var liElement = e.target;
      // 判断判断这个元素是不是我们要找的元素，如果是正常操作即可
      if (liElement.nodeName === "LI") {
        console.log(liElement.innerText);
      }
    };

    // var lis = document.querySelectorAll('li');

    // for (var i = 0; i < lis.length; i++) {

    // 	lis[i].onclick = function () {

    // 		console.log(this.innerText);

    // 	}

    // }
  </script>
</body>
```

### 事件委托的作用

- 减少事件的绑定，节省内存。
- 上级元素可以代理未来新动态添加的元素。

### 事件委托的原理

- 关键：事件对象.target； 可以获取最先触发的元素
- 原理：因为**事件冒泡**的存在,我们才可以获取到最先触发的元素。【目标 → document】

## BOM 介绍

### BOM 的概念：浏览器对象模型

<img :src="$withBase('/image/javascript/bom.png')" alt="">

### 顶级对象-window

**window 对象介绍**

【对象.属性，对象.方法名()】

- window 对象被 称为==顶级对象== 或==全局对象== 。
- 因为全局变量和全局函数本质上都是 window 对象的属性或方法。
- window 对象可以省略。

```html
<body>
  <script type="text/javascript">
    // alert(123);
    // window.alert('哇哈哈');
    // window.prompt('提示内容');
    // window.confirm('确认框');

    var n = 2;
    alert(window.n);
    function fn() {
      alert(123);
    }
    window.fn();
  </script>
</body>
```

### 定时器

#### 一次性定时器

var num1= **window.setTimeout(callback, time);**

- 作用：延迟执行一段程序，仅仅执行==一次== （定时炸弹），返回一个数字，表示是哪个定时器。
- 参数：
  - callback, 函数定义，函数体中存放定义器要执行的代码。
  - time, 等待的时间，数字，表示的是毫秒
- 清除定时器：**window.clearTimeout(定时器的标识);**

```html
<body>
  <input type="button" value="点击" />

  <script type="text/javascript">
    // 启动定时器
    var num1 = window.setTimeout(function () {
      alert("延迟性定时器");
    }, 1000);

    // var num2 = window.setTimeout(function () {},1000);

    // 获取元素
    var btn = document.querySelector("input");

    btn.onclick = function () {
      console.log(num1);
      console.log(num2);
      // 点击清除定时器
      window.clearTimeout(num1);
    };
  </script>
</body>
```

#### 重复性定时器

- window.setInterval(callback, time);
- 作用：延迟执行一段程序，==重复执行== （闹钟）。返回一个数字，表示是哪个定时器。
- 参数：
  - callback, 函数定义，函数体中存放定义器要执行的代码。
  - time, 等待的时间，数字，表示的是毫秒
- 清除定时器：**window.clearInterval(定时器的标识);**

```html
<body>
  <input type="button" value="点击" />
  <script type="text/javascript">
    var dsq = window.setInterval(function () {
      alert(123);
    }, 1000);

    var btn = document.querySelector("input");

    btn.onclick = function () {
      window.clearInterval(dsq);
    };

    // window.setTimeout(function () {},1000); 清除：window.clearTimeout(定时器标识);
    // window.setInterval(function () {},1000); 清除：window.clearInterval(定时器标识);
  </script>
</body>
```

#### 定时器执行

- 定时器代码要等非定时器代码执行完成后在执行

### location 对象

- **location**对象，将来操作浏览器的地址栏。
- 属性：
  - location.href 设置或获取地址栏地址
- 方法：
  - location.reload(); 刷新页面
  - location.assign(url)；跳转到指定的 url
  - location.replace(url);用指定的 url 替换当前的 url

assign 和 replace 的区别：assign 会产生历史记录，replace 不会产生历史记录

```html
<body>
  <input type="button" value="点击" />

  <script type="text/javascript">
    var btn = document.querySelector("input");

    // 点击打印地址栏的内容
    btn.onclick = function () {
      var str = location.href;

      alert(str);

      // location.href = 'http://www.baidu.com';

      // 方法
      // location.reload();
      // location.assign('http://www.ifeng.com');
      // location.replace('http://www.baidu.com');
    };

    // 文件夹，文件【英文】
    // 第一个网页.html【firsthtml.html】
  </script>
</body>
```

### history 对象

- **history 对象** ，用来操作历史记录
- 属性：
  - history.length; 获取历史记录的长度
- 方法：
  - history.back(); 回退上一个历史记录
  - history.forward(); 前进下一个历史记录
  - history.go(数字); 正数，表示前进； 负数，表示回退；

### navigator 对象

- navigator 对象， 用来获取浏览器的信息。
- 属性：
  - navigator.userAgent; 用来获取浏览器的信息

```html
<body>
  <script type="text/javascript">
    // 浏览器信息
    var str = navigator.userAgent;
    // indexOf，lastIndexOf
    // alert(str);
    if (str.indexOf("Chrome") != -1) {
      // 如果str中有Chrome

      alert("你狠时髦用谷歌");
    } else if (str.indexOf("Firefox") != -1) {
      alert("你狠流行用火狐");
    } else {
      alert("杀马特非主流用IE");
    }
  </script>
</body>
```

### onload 事件

- onload 事件是页面加载事件，一般绑定给 window
- 当页面吧图片，链接，引入资源加载完成之后，再回头立刻执行的事件

```html
<head>
  <meta charset="UTF-8" />
  <title>Document</title>
  <script type="text/javascript">
    // 加载事件，页面加载完成之后在执行的事件
    // window.onload = function () {
    // 	var div = document.getElementById('d1');
    // 	console.log(div);
    // }
    function init() {
      var div = document.getElementById("d1");
      console.log(div);
    }
  </script>
</head>
<body onload="init();">
  <div id="d1">内容</div>
</body>
```

### open()方法

[详情](https://www.runoob.com/jsref/met-win-open.html)

- open() 方法用于打开一个新的浏览器窗口或查找一个已命名的窗口
- 语法：window.open(URL,name,specs,replace)

  - URL 可选。打开指定的页面的 URL。如果没有指定 URL，打开一个新的空白窗口
  - name：可选。指定 target 属性或窗口的名称。支持以下值：

    \_blank - URL 加载到一个新的窗口。这是默认

    \_parent - URL 加载到父框架

    \_self - URL 替换当前页面

    \_top - URL 替换任何可加载的框架集

    name - 窗口名称

```js
function open_win() {
  window.open("http://www.runoob.com");
}
```

```js
function openWin() {
  myWindow = window.open("", "", "width=200,height=100");
  myWindow.document.write("<p>这是'我的窗口'</p>");
  myWindow.focus();
}
```

## 元素的 offset 系列属性

### 获取元素的大小

**元素.offsetWidth / 元素.offsetHeight;**

- 返回的是数字。 大小包含： 内容 + padding + border;

- 注意：该属性仅仅==只能够读取== ，不能够设置

```html
<head>
  <meta charset="UTF-8" />
  <title>Document</title>
  <style type="text/css">
    div {
      width: 100px;
      height: 100px;
      background: red;
      border: 10px solid blue;
      padding: 10px;
    }
  </style>
</head>
<body>
  <div></div>
  <input type="button" value="点击" />

  <script type="text/javascript">
    var btn = document.querySelector("input");
    var div = document.querySelector("div");

    btn.onclick = function () {
      // 获取div的宽和高
      console.log(div.offsetWidth);
      console.log(div.offsetHeight);
    };
  </script>
</body>
```

### 获取元素的位置

**元素.offsetLeft / 元素.offsetTop;** --->只读

- 返回的是数字。（参照谁？看定位关系,依照父元素的定位当参照物）

  ① 若父级有定位,则参照物为父元素

  ② 若父级无定位,则往上找,直到找到定位元素当参照物

  ③ 当什么都不设定位时,找的是浏览器的可视窗口(有的说是 body),说 body 的前提是清除了 margin 和 padding,其实就相当于浏览器的可视窗口了

### 获取元素的父元素

**元素.offsetParent** 和 元素.parentNode 的区别

- 元素.offsetParent ，获取“父元素”， 按照定位关系。
- 元素.parentNode， 获取“父元素”， 按照标签关系。

<img :src="$withBase('/image/javascript/offsetParent.png')" alt="">

## 元素的 client 系列属性

### 获取元素的大小

\*\*元素.clientWidth / 元素.clientHeight---->不能设置是只读

- 获取元素的大小，包含 【内容 + padding】没有 border

```html
<div></div>
<script>
  var div = document.querySelector("div");
  // 获取元素的大小
  console.log(div.clientWidth);
  console.log(div.clientHeight);

  // 获取边框的厚度
  console.log(div.clientLeft);
  console.log(div.clientTop);

  // 坑！设置(不能设置，是只读的)
  div.clientWidth = 1000 + "px";
  div.clientHeight = 1000 + "px";
</script>
```

### 获取边框的厚度

- 元素.clientLeft / 元素.clientTop

<img :src="$withBase('/image/javascript/offsetParent2.png')" alt="">

## 元素的 scroll 系列属性

### 获取元素的大小

- 元素.scrollWidth / 元素.scrollHeight
- 获取的元素的大小 ,包含 【内容+ padding + 溢出】没有 border

```html
<head>
  <meta charset="UTF-8" />
  <title>Document</title>
  <style type="text/css">
    div {
      width: 100px;
      height: 100px;
      background: red;
      border: 10px solid blue;
      padding: 10px;
    }
    p {
      width: 300px;
      height: 300px;
      background: yellow;
    }
  </style>
</head>
<body>
  <div>
    <p>段落</p>
  </div>
  <script type="text/javascript">
    var div = document.querySelector("div");

    // console.log( div.scrollWidth );
    // console.log( div.scrollHeight );
  </script>
</body>
```

### 获取被卷起的页面间距

- 元素.scrollLeft / **元素.scrollTop**
- 获取的是在该元素中卷去的页面的间距。【该属性不仅可以获取，还可以设置】

<img :src="$withBase('/image/javascript/scrollTop.png')" alt="">

```html
<head>
  <meta charset="UTF-8" />
  <title>Document</title>
  <style type="text/css">
    div {
      width: 500px;
      height: 500px;
      border: 1px solid #ccc;
      margin: 0 auto;
      overflow: scroll;
    }
  </style>
</head>
<body>
  <div>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>
  </div>
  <input type="button" value="点击回到顶部" />
  <script type="text/javascript">
    // onscroll事件：滚动事件【谁有滚动条加给谁】

    var div = document.querySelector("div");

    div.onscroll = function () {
      // 滚动过程中打印出卷出去的值
      console.log(div.scrollTop);
    };

    // var btn = document.querySelector('input');

    // btn.onclick = function () {

    // 	div.scrollTop = 0;

    // }
  </script>
</body>
```

- 获取 body document.body
- 获取 html document.documentElement.scrollTop
- 获取 body document.body.scrollTop

## 移动端 touch 事件

### touch 事件类型

移动设备上无法使用鼠标，当手指触碰屏幕时会触发 click、mousedown、mouseup 事件。

但是，touch 事件要比鼠标事件执行效率高，用户体验好。

**注意：以下事件必须通过事件监听注册**

- touchstart，手指按下事件
- touchmove，手指移动事件
- touchend，手指松开事件

```html
<body>
  <script type="text/javascript">
    // touchstart：手指按下
    // document.ontouchstart = function () {
    // 	console.log('手指按下');
    // } 存在兼容性问题不推荐使用
    document.addEventListener("touchstart", function () {
      console.log("哇哈哈哈");
    });

    document.addEventListener("touchend", function () {
      console.log("外抬起");
    });

    document.addEventListener("touchmove", function () {
      console.log("move移动");
    });
  </script>
</body>
```

### touch 事件对象

- 常见的属性

  - 事件对象.touches ：位于屏幕上的所有手指的列表；e.touches，找某个手指对象 e.touches[0]
  - 事件对象.targetTouches ：位于该元素上的所有手指的列表；
  - 事件对象.changedTouches：被改变的手指列表。 touchstart 时包含刚与触摸屏接触的触点，touchend 时包含离开触摸屏的触点

- 手指的位置

  - 手指对象.clientX/Y 手指相对于可视区域
  - 手指对象.pageX/Y 手指相对于文档

  **注意：手指对象.clientX/Y 使用较多**

```html
<body>
  <script type="text/javascript">
    // 按下文档打印touch事件对象
    document.addEventListener("touchstart", function (e) {
      // console.log(e);e.touches === [手指1]
      console.log(e.touches); // 屏幕所有的手指列表
      console.log(e.targetTouches); // 元素上的所有手指列表
      console.log(e.changedTouches); // 改变
    });
    document.addEventListener("touchend", function (e) {
      console.log(e.touches[0]); // 屏幕所有的手指列表
      console.log(e.targetTouches[0]); // 元素上的所有手指列表
      console.log(e.changedTouches[0]); // 改变
    });
  </script>
</body>
```

- 打印手指的位置

```html
<head>
  <meta charset="UTF-8" />
  <title>Document</title>
  <style type="text/css">
    body {
      height: 6000px;
    }
  </style>
</head>
<body>
  <script type="text/javascript">
    // 手指按下打印出手指的位置
    document.addEventListener("touchstart", function (e) {
      // 打印手指位置【手指对象.clientXY】
      console.log(e.touches[0].clientX, e.touches[0].clientY);
      console.log(e.touches[0].pageX, e.touches[0].pageY);
    });
  </script>
</body>
```

### 常见的手势

​ 注意：以下手势的实现是在 touch 事件基础上。我们不需要自己实现以下所有手势，有专门的第三方可以直接拿来使用。

​ 以下手势仅仅是了解。
<img :src="$withBase('/image/javascript/touch.png')" alt="">

- 模拟点击 tap 实现

```html
<body>
  <script type="text/javascript">
    // 模拟点击，【判断用户是否是点击】【按下的手指位置和抬起的手指位置一模一样】
    var sx, sy;
    document.addEventListener("touchstart", function (e) {
      // 获取按下的位置
      sx = e.touches[0].clientX;
      sy = e.touches[0].clientY;
    });

    // 获取抬起手指位置
    document.addEventListener("touchend", function (e) {
      var ex = e.changedTouches[0].clientX;
      var ey = e.changedTouches[0].clientY;

      // 如果都想同，就是点击
      if (sx == ex && sy == ey) {
        console.log("点击");
      } else {
        console.log("移动");
      }
    });
  </script>
</body>
```

- 模拟滑动

```html
<body>
  <script type="text/javascript">
    // 我们需要知道按下的位置，和抬起的位置
    var startx, starty;
    document.addEventListener("touchstart", function (e) {
      // 记录x和y的位置
      startx = e.touches[0].clientX;
      starty = e.touches[0].clientY;
    });

    document.addEventListener("touchend", function (e) {
      // 抬起的手指位置
      var endx = e.changedTouches[0].clientX;
      var endy = e.changedTouches[0].clientY;

      // 先判断横滑还是纵滑
      // 判断是哪个方向滑动
      if (Math.abs(endx - startx) > Math.abs(endy - starty)) {
        if (endx > startx) {
          console.log("右滑");
        } else {
          console.log("左划");
        }
      } else {
        // console.log('纵滑');
        if (endy > starty) {
          console.log("↓");
        } else {
          console.log("↑");
        }
      }
    });
  </script>
</body>
```

## transitionend 事件

- css 中过渡结束后检测的行为【transitionend，谁有过渡把这个事件绑定给谁】

```html
<head>
  <meta charset="UTF-8" />
  <title>Document</title>
  <style type="text/css">
    div {
      width: 100px;
      height: 100px;
      background: red;
    }
  </style>
</head>
<body>
  <input type="button" value="点击" />
  <div></div>

  <script type="text/javascript">
    var btn = document.querySelector("input");
    var div = document.querySelector("div");

    btn.onclick = function () {
      div.style.width = "600px";
      div.style.height = "600px";
      div.style.transition = "2s";
    };

    div.addEventListener("transitionend", function () {
      div.style.background = "yellow";
      div.style.transition = "none";
    });
  </script>
</body>
```
