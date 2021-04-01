- 前言
  - [参考链接](https://www.html.cn/interview/17442.html)

## 溢出显示省略号

```css
white-space: nowrap; //规定段落中的文本不进行换行
overflow: hidden; //内容溢出隐藏
text-overflow: ellipsis; //	当文本溢出包含它的元素时,显示省略符号来代表被修剪的文本。
```

## 两行或三行，超出部分用省略号显示

- 只兼容 Chrome 内核浏览器

```css
 overflow: hidden;
 text-overflow: ellipsis;
 display: -webkit-box;
 -webkit-line-clamp: 2;（行数）
 -webkit-box-orient: vertical;
```

- webkit-line-clamp 是一个 不规范的属性（unsupported WebKit property），它没有出现在 CSS 规范草案中。限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他外来的 WebKit 属性。常见结合属性：
- display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
- -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。

## 介绍一下标准的 CSS 的盒子模型

- 有两种盒子模型：

  - IE 盒模型（box-sizing:border-box）---怪异盒模型

  - W3C 标准盒模型（content-box）

- 盒模型由四部分组成

  - 分为内容（content）
  - 填充（padding）
  - 边界（margin）
  - 边框（border）

- W3C 标准盒模型

  - 属性 width，height 只包含内容 content，不包含 border 和 padding,设置 border 和 padding 会增加盒模型的大小

- IE 盒模型

  - 属性 width，height 包含 content、border 和 padding，指的是 content+padding+border。设置 border 和 padding 不会增加盒模型的大小

## 如何居中 div

### margin:0 auto

- 利用 margin:0auto 来实现元素的水平居中

  ```html
  div { width: 200px; margin: 0auto; }
  ```

### text-align:center

- 水平居中，利用 text-align:center 实现

  ```html
  <style>
    .container {
      background: rgba(0, 0, 0, 0.5);
      text-align: center;
      font-size: 0;
    }

    .box {
      display: inline-block;
      width: 500px;
      height: 400px;
      background-color: pink;
    }
  </style>

  <body>
    <div class="container">
      <div class="box">1111</div>
    </div>
  </body>
  ```

### 绝对定位+margin：auto

- 利用绝对定位，设置四个方向的值都为 0，并将 margin 设置为 auto，由于宽高固定，因此对应方向实现平分，可以实现水平和垂直方向上的居中。

```html
<style>
  div {
    position: absolute;
    width: 300px;
    height: 300px;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: pink;
    /*方便看效果*/
  }
</style>

<body>
  <div>1111</div>
</body>
```

### 绝对定位+margin 值

- 利用绝对定位，先将元素的左上角通过 top:50%和 left:50%定位到页面的中心，然后再通过 margin 负值来调整元素的中心点到页面的中心

  ```html
  <style>
    /*确定容器的宽高宽500高300的层设置层的外边距*/
    div {
      position: absolute;
      /*绝对定位*/
      width: 500px;
      height: 300px;
      top: 50%;
      left: 50%;
      margin: -150px 0 0 -250px;
      /*外边距为自身宽高的一半*/
      background-color: pink;
      /*方便看效果*/
    }
  </style>

  <body>
    <div>1111</div>
  </body>
  ```

### 绝对定位+translate

- 利用绝对定位，先将元素的左上角通过 top:50%和 left:50%定位到页面的中心，然后再通过 translate 来调整元素的中心点到页面的中心----宽高不固定的时候可以使用

  ```html
  <style>
    /*未知容器的宽高，利用`transform`属性*/
    div {
      position: absolute;
      /*相对定位或绝对定位均可*/
      width: 500px;
      height: 300px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: pink;
      /*方便看效果*/
    }
  </style>

  <body>
    <div>1111</div>
  </body>
  ```

### flex 布局

- 使用 flex 布局，通过 align-items:center 和 justify-content:center 设置容器的垂直和水平方向上为居中对齐，然后它的子元素也可以实现垂直和水平的居中----宽高不固定的时候可以使用

  ```html
  <style>
    /*利用flex布局实际使用时应考虑兼容性*/
    .container {
      display: flex;
      align-items: center;
      /*垂直居中*/
      justify-content: center;
      height: 300px;
      /*水平居中*/
    }

    .containerdiv {
      width: 100px;
      height: 100px;
      background-color: pink;
      /*方便看效果*/
    }
  </style>

  <body>
    <div class="container">
      <div class="containerdiv"></div>
    </div>
  </body>
  ```

### text-align:center 和 vertical-align:middle 属性

- 利用 text-align:center 和 vertical-align:middle 属性

```html
<style>
  .container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
    font-size: 0;
    white-space: nowrap;
    overflow: auto;
  }

  .container::after {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  .box {
    display: inline-block;
    width: 500px;
    height: 400px;
    background-color: pink;
    white-space: normal;
    vertical-align: middle;
  }
</style>

<body>
  <div class="container">
    <div class="box"></div>
  </div>
</body>
```

## 用纯 CSS 创建一个三角形的原理是什么

- 采用的是相邻边框连接处的均分原理。

```css
div {
  width: 0;
  height: 0;
  border-width: 20px;
  border-style: solid;
  border-color: yellow black red pink;
}
```

## CSS 选择符有哪些

- id 选择器（#myid）
- 类选择器（.myclassname）
- 标签选择器（div,h1,p）
- 包含选择符（h1 p）
- 相邻后代选择器（子）选择器（ul>li）
- 兄弟选择器（li~a）
- 相邻兄弟选择器（li+a）
- 属性选择器（a[rel="external"]）
- 伪类选择器（a:hover,li:nth-child）
- 伪元素选择器（::before、::after）
- 通配符选择器（\*）

## CSS3 新增伪类

- elem:nth-child(n)选中当前元素的兄弟元素,n 可以接受具体的数值，也可以接受函数。
  - odd:奇数行
  - even:偶数行

```html
<style>
  li:nth-child(2) {
    color: red;
  }
</style>

<body>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
</body>
```

- elem:nth-last-child(n)作用同上，不过是从后开始查找。

- elem:last-child 选中最后一个子元素。

```html
<style>
  li:last-child {
    color: red;
  }
</style>

<body>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
</body>
```

- elem:only-child 如果 elem 是父元素下唯一的子元素，则选中之。
- elem:nth-of-type(n)选中父元素下第 n 个 elem 类型元素，n 可以接受具体的数值，也可以接受函数。
- elem:first-of-type 选中父元素下第一个 elem 类型元素。

```html
<style>
  li:first-of-type {
    color: red;
  }
</style>

<body>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
</body>
```

- elem:last-of-type 选中父元素下最后一个 elem 类型元素。
- elem:only-of-type 如果父元素下的子元素只有一个 elem 类型元素，则选中该元素。
- elem:empty 选中不包含子元素和内容的 elem 类型元素。
- elem:target 选择当前活动的 elem 元素。
- :not(elem)选择非 elem 元素的每个元素。
- :enabled 控制表单控件的禁用状态。
- :disabled 控制表单控件的禁用状态。
- :checked 单选框或复选框被选中。

## flex 布局

## css 背景色渐变

[css 教程](https://www.runoob.com/css3/css3-gradients.html)

- 语法

  ```js
  background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
  ```

- **线性渐变 - 从上到下**

  ```js
  #grad {
      background-image: linear-gradient(#e66465, #9198e5);
  }
  ```

- **线性渐变 - 从左到右**

  ```js
  #grad {
    height: 200px;
    background-image: linear-gradient(to right, red , yellow);
  }
  ```

- 更多复杂的请跳转 css 教程链接

## 盒子阴影

[盒子阴影](https://www.jianshu.com/p/f5cb00b19747)

[css3 教程](https://www.runoob.com/css3/css3-text-effects.html)
