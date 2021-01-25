## javaScript 组成

ECMAscript

> 定义了 javascript 的语法规范,描述了语言的基本语法和数据类型

BOM

> 浏览器对象模型,通过 BOM 可以操作浏览器窗口，比如：弹出框、控制浏览器跳转、获取分辨率等

DOM

> 文档对象模型,一套操作页面元素的 API,DOM 可以把 HTML 看做是文档树，通过 DOM 提供的 API 可以对树上的节点进行操作

## JavaScript 是什么

- 基于对象和事件驱动，运行在浏览器客户端的脚本语言、基于浏览器的脚本语言
- js 引擎: 执行 js 代码,最后将所有的 js 代码都要以对象的形式去执行，都要通过事件的方式去触发执行 DOM

## JavaScript 书写位置

内嵌式写法

```js
<script type="text/javascript">js</script>
```

`注意：`
该标签可以放到 head 标签中或者 body 标签中 2. 联式写法[推荐写法]

- 新建 js 文件
- 通过 script 标签引用到当前页面中

```js
<script type="text/javascript" src="test.js"></script>
```

`注意`

- 不能将代码写到外联式标签中。
- 行内式写法（不推荐）

```js
<div onclick="confirm('你想一夜暴富吗？')">内容</div>
```

## 变量（重点）

**概念**

- 变量指的是在程序中保存数据的一个容器

- 变量是计算机内存中存储数据的标识符，根据变量名称可以获取到内存中存储的数据

- 定义变量 var 变量名

## 定义变量及赋值

- 定义变量
  - var 变量名
- 赋值
  - 变量名 = 数据；
- 总结
  - 一个变量一次只能保存一个值
  - 最后一次的赋值结果
  - 变量是区分大小写（js 区分大小写）

## 变量命名规范

- **规则 必须遵守的，不遵守的话 JS 引擎 发现并报错**

  - 由字母(A-Za-z)、数字(0-9)、下划线(\_)、美元符号( \$ )组成，如：var usrAge, num01, \_name
  - 区分大小写 强调：JS 严格区分大小写 ，var app; 和 var App; 是两个变量
  - 不能 以数字开头，或者汉字定义变量名
  - 不能 是关键字、保留字 和 代码符号，例如：var、for、while、&, class
  - 不能出现空格

- **规范 建议遵守的，不遵守的话 JS 引擎 也不会报错**
  - 变量名必须有意义
  - 遵守驼峰命名法。首字母小写，后面单词的首字母需要大写。

## 数据类型（重点）

> 概念:数据类型指的是变量的数据类型

### 简单数据类型(基本数据类型、原始数据类型)

- **数值类型（Number）**
  - 凡是数字都属于该类型【整数，小数，负数】
  - 只要变量的值是一个具体的数字，那么当前变量的数据类型就是数值类型
  - 备注：进行算数计算时，八进制和十六进制表示的数值最终都将被转换成十进制数值。
  - number 类型表示的数字大小:
    - 最大值是 ±1.7976931348623157 乘以 10 的 308 次方 Number.MAX_VALUE
    - 最小值是 ±5 乘以 10 的-324 次方 Number.MIN_VALUE
- **字符串类型（String）**
  - 字符串可以是引号中的任意文本。可以使用单引号或双引号
  - 在 js 中一般写字符串类型的变量时候，推荐使用单引号。
  - 字母，汉字，符号作为数据存在必须要用引号包含
  - 不管是什么数据如果用引号包含就变成字符串类型

::: tip
转义字符【\】

- \n 换行
- \\\ 斜杠
- \\' 单引号
- \\" 双引号
- \\r 回车符
  :::

::: details 例子:点击查看代码

```js
var strMsg = "I 'm the GOD of my world ~!";
console.log(strMsg); // I 'm the GOD of my world ~!

var strMsg2 = 'I "	m the GOD of my world ~!';
console.log(strMsg2); //I "	m the GOD of my world ~!
```

:::

- **布尔类型（Boolean）**

```js
console.log(Number(false)); //0
console.log(Number(true)); //1
```

- **未定义（undefined）**

  - undefined 表示"缺少值"，就是此处应该有一个值，但是还没有定义。典型用法是：

    - 变量被声明了，但没有赋值时，就等于 undefined。
    - 调用函数时，应该提供的参数没有提供，该参数等于 undefined。
    - 对象没有赋值的属性，该属性的值为 undefined。
    - 函数没有返回值时，默认返回 undefined。
    - 转化为数字是 NaN
    - 转化为布尔值是 false

- **空（null）**
  - null 转化为布尔值是 false
  - 转化为数字是 0
  - null 表示一个值被定义了，定义为“空值”
  - null 表示"没有对象"，即该处不应该有值。典型用法是：
    - 作为函数的参数，表示该函数的参数不是对象。
    - 作为对象原型链的终点。

### 复杂数据类型（引用数据类型）

- object 类型【万物皆对象】
- array 数组

## 字面量

> 概念:在源代码中一个固定值的表示法。【通过看具体的值，就能够知道数据类型】

::: details 例子:点击查看代码

```js
//布尔字面量：true，false
var n = true;
var m = fasle;
```

:::

## 注释

- 单行注释 //
- 多行注释 /\*\*/

## 表达式和语句

- 表达式
  > 一个表达式可以产生一个值，有可能是运算、函数调用、有可能是字面量。表达式可以放在任何需要值的地方。
- 语句
  > 语句可以理解为一个行为，循环语句和判断语句就是典型的语句。一个程序有很多个语句组成，一般情况下;分割一个一个的语句

## 数据类型判断

### typeof

::: danger
typeof 变量 可以得到对应变量的数据类型
:::

```js
var a = "string";
console.log(a); //string
var a = 1;
console.log(a); //number
var a = false;
console.log(a); //boolean
var a;
console.log(typeof a); //undfined

var a = null;
console.log(typeof a); //object
var a = document;
console.log(typeof a); //object
var a = [];
console.log(a); //object

var a = function () {};
console.log(typeof a); //function   除了可以判断数据类型还可以判断function类型
```

::: danger
null、对象、数组返回的都是 object 类型
:::

### instanceof

```js
var a = [];
console.log(a instanceof Array); //返回true
```

### constructor

- a 实例所对应的构造函数是否为 Array

```js
let a = [];
console.log(a.constructor == Array); //true
```

```js
function employee(name, job, born) {
  this.name = name;
  this.job = job;
  this.born = born;
}

var bill = new employee("Bill Gates", "Engineer", 1985);
console.log(bill.constructor);
```

- 结果<br>
  <img :src="$withBase('/image/javascript/clipboard.png')" alt="" style="width:370px;height:94px">

## 判断一个变量是不是数字

## 数据类型转换

### 强制转换

- **isNaN(变量)**

  ```js
  isNaN(x) 方法
  ==>x是数字{false}
  ==>x不是数字{true}
  ```

- 加号：+

  - 如果是数值类型的变量相加，结果就是一个数值类型的结果
  - 如果是一个字符串类型的变量相加，最后的结果就是字符串（加号起到的作用就是拼接字符串的功能）
  - 如果+两边都是数字就是数学上的加，如果两边有字符串出现就会执行字符串的连接

- 减号：-

  - 如果是数值类型的变量相减，结果就是一个数值类型的结果
  - 如果是数字的字符串相减，得到的结果也是一个数值类型结果（发生了隐式类型转化）

  ```js
  var n1 = "123";
  var n2 = "123";
  n1 - n2 = 0;
  ```

  > 如果是非数字的字符串相减，得到的结果是 NaN

- 乘法

- 运算

  - 如果是数值类型的变量相除，结果就是一个数值类型的结果
  - 如果是数字的字符串相除，得到的结果也是一个数值类型结果（发生了隐式类型转化）
  - 如果是非数字的字符串相除，得到的结果是 NaN
  - 如果除数是 0 ，得到的结果是 Infinity （无穷大的值）

- %取余数

### 隐式转换

::: tip
转换为数值类型时，有三种方式：Number()，parseInt()，parseFloat()。
其中 Number()可以将任意类型转换为数值类型，而另外两个则是专门将字符串类型转换为数值。
:::

#### parseInt(变量)

```js
var num1 = parseInt("12.3abc"); // 返回12，如果第一个字符是数字会解析知道遇到非数字结束
var num2 = parseInt("abc123"); // 返回NaN，如果第一个字符不是数字或者符号就返回NaN
parseInt("22.5"); //  22
parseInt("0xA"); //returns   10  0xA是16进制的写法
```

- 只会保留整数部分，通过该方式进行数据类型转换后得到就是一个整数
- 如果一个变量中的值无法转换为具体数字，那么返回的结果是一个 NaN 的值
- NaN (not a number) ----NaN 对应的数据类型是数值类型
- 通过该方法可以将其他数据类型转为数值类型
- parseInt()方法还有基模式，可以把二进制、八进制、十六进制或其他任何进制的字符串转换成整数

#### parseFloat(变量)

- 把字符串转换成浮点数

```js
parseFloat("1234blue"); //returns   1234.0
parseFloat("0xA"); //returns   NaN  对于十六进制数0xA，该方法将返回NaN，因为在浮点数中，x不是有效字符。此外，parseFloat()也没有基模式。
parseFloat("22.5"); //returns   22.5
parseFloat("22.34.5"); //returns   22.34
parseFloat("0908"); //returns   908  使用parseFloat()方法的另一不同之处在于，字符串必须以十进制形式表示浮点数，而不能用八进制形式或十六进制形式。该
//方法会忽略前导0，所以八进制数0908将被解析为908。
parseFloat("blue"); //returns   NaN
```

- 通过该方法可以将其他数据类型转换为数值类型
- 在转换过程中，如果遇到小数，那么会直接将小数部分保留
- 如果转化不成功过，返回的结果 NaN

#### Number(变量)

- 可以通过该方法将数据类型转换为数值类型

```js
var n1 = "123";
console.log(typeof n1); //string
//方法一：通过Number()
n1 = Number(n1);
console.log(typeof n1); //number
```

- 在转换的过程中可以将原来的值保留，遇到小数直接保留下来，不会舍去
- 如果变量无法转换为数值类型，那么返回的结果是 NaN； 对应的数据类型依然是数值类
- 如果将布尔类型转换为数值类型，true 转化后的结果是 1 false 转化后的结果是 0

#### Boolean()

- 除了 0，NaN，false，undefined，null，‘’ 转为 false，其他的所有值都转换为 true。

#### **转字符串类型**

- 变量.toString()

```js
var num = 5;
console.log(num.toString());
```

- String(变量)
  :::tip
  - String()函数存在的意义：有些值没有 toString()，这个时候可以使用 String()。比如：undefined 和 null
  - 除了 null 和 undefined 没有 toString()方法，其他的数据类型都有 toString()方法，将数字类型转换为字符串时，可以传递一个参数作为基数，表示将十进制的数字转换为该基底的字符串。 String()方法可以将任意类型的数据转换为字符串，包括 undefined 和 null。
    :::

## 赋值运算符

```js
 += |  -=   |  *=  |  /=  |   %=
var  a += b ;    =====> 等价于        a = a+b;
a %= 3;>>a = a % 3;
a -= 6;>>a = a - 6;
```

## 一元运算符

### 前置++ 和 后置 ++

```js
var a = 1;
// a++,先赋值再自增
var b = a++; // 【b = 1，a = 2】
//++a  先自增再赋值
var b = ++a; // 【a = 2，b = 2】
```

### 前置-- 和 后置--

```js
var a = 1;
//a-- 先赋值,再自减
var b = a--; // [b=1, a=0]
//--a 先自减,再赋值
var b = --a; //[b=0, a=0]
```

## 比较运算符

```js
1.   >

2.   <

3.   >=     大于 或者 等于，只要有一个满足即可

4.   <=     小于 或者 等于，只要满足一个即可

5.  ==      只用来比较变量中的值是否相等，不考虑数据类型

6.  ===     用来判断值和数据类型必须同时相等

7.  !=	    判断值是否不相等，不考虑数据类型

8.  !==      判断值和数据类型


☞ 总结：
	  ✔ 通过比较运算符得到的结果只有两个结果，一个是正确的，一个是错误的
      ✔ 通过比较运算符得到的结果 只有 true[正确] 和 false[错误]
```

## 逻辑运算符

```js
 1.   ||  或： 条件只要有一个满足即可
      总结：
      	  1. 如果条件中有一个结为true(代表有一个条件满足了)，那么通过或运算后最后的结果为true
          2. 如果条件中结果都不满足，那么通过或运算后结果为false

 2.   &&  且： 要求所有的条件都必须满足才可以
 	  总结：
	      1. 如果条件都为真（true），那么通过且运算后最后的结果也是真（true）
          2. 如果条件中自少有一个条件不满足（false），那么通过且运算后的结果为false

 3.   !	  非（取反） :
```

## 运算符优先级（了解）

```js
优先级从高到底
	1. ()  优先级最高
	2. 一元运算符  ++   --   !
	3. 算数运算符  先*  /  %   后 +   -
	4. 关系运算符  >   >=   <   <=
	5. 相等运算符   ==   !=    ===    !==
	6. 逻辑运算符 先&&   后||
	7. 赋值运算符
```

## 条件判断 if()

### 语法

```js
☞   if ( 条件表达式 ) {

   	   逻辑代码。。。
     }else {

       逻辑代码。。。
     }


☞   if ( 条件表达式 ) {

	}else if ( 条件表达式 ) {

    }else {

    }
// 执行：先判断第一个if条件，如果第一个if条件满足，就执行对应的代码块
// 如果第一个if条件不满足，再判断第二个if条件，满足的话，就执行对应的代码块
// 如果第一个和第二个if条件都不满足，就判断第三个if条件，如果满足就执行对应的代码块
// 如果以上的所有if条件都不满足，就执行else里面的代码块
```

## 三元运算

- 语法: 表达式 ? 结果 1 ： 结果 2
  - 表达式为真,显示结果 1,为假显示结果 2
- 使用场景： 三元运符可以替代简单的条件判断

## switch 语句

```js
// 定义变量表示今天星期
var n = "3";

// switch
// 用n和case后面的值比较，谁相等就执行谁，都不满足就执行default
// break：跳出语句，不在继续执行
switch (n) {
  case "1":
    document.write("今天是星期一要上班");
    break;
  case "2":
    document.write("今天是星期二也要上班");
    break;
  case "3":
    document.write("今天是星期三");
    break;
  case "4":
    document.write("今天是星期四");
    break;
  case "5":
    document.write("今天是周五啦哇哈哈");
    break;
  case "6":
    document.write("今天星期六可以睡觉啦");
    break;
  default:
    document.write("今天是星期天明天又得上班了");
    break;
}

var n = 2;
switch (true) {
  case a > b:
    document.write();
}
```

::: tip

- 如果在程序中要表示一个范围，那么推荐使用条件判断
- 如果程序中表示的是一个具体的值， 可以用 switch 语句
  :::

::: danger

- switch 判断等不等用的是全等判断的
- switch 后面的变量数据类型必须和 case 后面的值数据类型保持一至
- break 语句必须加
  :::

## 循环

### while 循环

> 目的:用循环重复的执行一段代码

```js
/*
循环执行：1、循环变量初始化(i = 1)
		  2、循环条件的判断(i<=100)【true】
		  3、循环体执行（i++）
		  4、回到条件判断（i<=100）【true】
		  5、循环体
		  6、回到条件判断（i<=100）【false】==》停止循环
		 */
//1、变量初始化
var i = 1;
//2、循环条件判断
while (i <= 100) {
  //一堆代码，循环体
  document.write(i + "<br />");
  //变量的改变
  i++; // i = i + 1;// i += 1;
}
```

### do .. while 循环

```js
do {
  循环体代码;
} while (条件表达式);
```

- 执行过程

  - 循环体==>条件判断（true）==>循环体==>条件判断(true)==>循环体==>条件判断(false)==>跳出循环

  ☞ 先执行循环体代码

  ☞ 然后判断条件

  ☞ 如果条件为 true，继续执行循环体代码

  ☞ 如果条件为 false,循环体代码立即结束，跳出循环

`与while循环的区别：`

- 如果条件不满足，do while 循环会比 while 循环多执行一次

- 如果条件满足，do while 循环和 while 循环执行的次数是一样一样的。

### for 循环

☞ 如果能明确循环次数，推荐使用 for 循环， 如果循环次数不确定，可以使用 while 获取 do while 循环

```js
for (变量初始化; 条件表达式 ;  变量自增（变量自减）) {

     循环体代码

}
// 变量初始化，条件判断，变量改变
for ( var i = 1; i <= 100; i++ ) {
	// 循环体
	document.write(i+' ');
}

```

`执行过程`

- 先执行变量初始化

- 条件判断，结构是否为 true

- 如果条件为 true，进入循环体中执行代码 【如果条件为 false，循环立即结束】

- 变量自增或自减 -- 条件判断 -- true --- 执行代码

### 练习

#### 九九乘法表

```js
// 九九乘法表
// 第一列  第二列  第三列
// 第一行  1*1 =1
// 第二行  1*2 =2  2*2=4
// 第三行  1*3 =3  2*3=6  3*3=9
// 结论:列 X 行 = 行*列
for (var i = 1; i < 9; i++) {
  //i代表行数
  for (var j = 1; j <= i; j++) {
    document.write(j + "X" + i + "=" + j * i + " ");
  }
  document.write("<br>");
}
```

### continue 和 break

#### continue

☞ 立即跳出本次循环，继续下一次循环（本次循环体 continue 之后的 代码 就都少执行这一次）

☞ 通俗理解： 吃 5 个包子，第 3 个掉地下了，就扔掉第 3 个，继续吃第 4 个第 5 个包子。

#### break

☞ 理解跳出整个循环（循环结束），开始执行 循环后面的代码

☞ 通俗理解： 吃 5 个包子，吃到第 3 个吃饱了，就不再吃后 面的包子。

## 数组

> 可以一次保存多条数据， 数组也是一个用来保存数据的容器

## 创建数组

### 构造函数创建数组

```js
var 自定义数组名称 = new Array();
```

### 字面量创建数组

```js
var 自定义数组名称 = [];
```

### new Function 创建函数

> 语法：==var 变量名 = new Function('参数 1'，'参数 2'，...,'函数体中的代码');==

::: tip

- 函数也可以通过 new 关键字调用
- 函数本质也是对象
- 类型：Function
- 函数名.prototype
- 函数名.call

```js
var 变量名 = new Function('参数 1'，'参数 2'，...,'函数体中的代码');
var fn = new Function('a','b','console.log( a + b);');
fn(100,200);
```

:::

## 数组赋值

### 构造函数方式

```js
var ary = new Array(1, 2, 3, 5, 6);
```

### 字面量方式赋值

```js
var ary = [1, 2, 3, 4, 6];
```

### 通过索引方式赋值

```js
var ary = [];

ary[0] = 1;

ary[1] = 2;
```

::: tip
数组：[20,22,36,19,26,18]

下标：[0, 1, 2, 3, 4, 5]

取值：数组[下标]

赋值：数组[下标] = 值；

属性：length：数组长度【数组个数】【数组.length】
:::

**总结**

- 数组中索引值是从 0 开始的，最大下标：数组长度-1

- 通过索引的方式给数组赋值，要按照顺序个数设置

- 通过 数组名.length 可以获取到当前数组的长度

## 获取数组中的值

> 数组名[索引号]

```js
var  ary = [1,2,3,4,5];
ary[0];
ary[1];
var arr = [
			[1,2,3],
			[4,5,6],
			[7,8,9]
			];
第一行：1[0][0],2[0][1],3[0][2]
```

## 数组遍历、冒泡排序、去重

### 冒泡排序

```js
var arr = [5, 8, 3, 6, 9];
for (var i = 0; i < arr.length; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      var temp;
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr); //[3,5,6,8,9]
```

- 要确定比较趟数（一个数组比较多少趟才可以排序好）：长度-1
- 每趟要比较的次数：长度-趟数
- 比较交换：如果前一个大于后一个，就交换

```js
// 趟数：数组长度-1
// 每趟交换次数：数组长度-趟数

var arr = [23, 231, 129, 16, 249, 26];
// 确定趟数：比较多少趟才可以比较出结果
for (var i = 1; i < arr.length; i++) {
  // 趟数【i代表趟数】
  // alert(i+"趟");
  for (var j = 0; j < arr.length - i; j++) {
    // j代表每趟比较次数
    //每次比较交换【如果前面的数大于后面的数字，就交换】
    // arr[下标] > arr[下标+1];
    if (arr[j] > arr[j + 1]) {
      var temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
document.write(arr);
```

### 去重

```js
// 数组去重

var arr1 = [2, 4, 6, 5, 2, 6, 3];

// 去除数组重复元素
function getArr(arr) {
  // 循环遍历数组，判断判断新数组中是否存在这个数据，如果不存在，就放到新数组中

  // 定义一个新的数组保存不重复的数
  var newArr = [];

  // 遍历数组
  for (var i = 0; i < arr.length; i++) {
    // i代表arr的下标

    // 假设法：假设不存在
    var flag = true;

    // 让arr[i]去newArr中和每一个数比较，如果没找到相等的，就放到新数组中
    for (var j = 0; j < newArr.length; j++) {
      // j代表新数组的下标

      if (newArr[j] == arr[i]) {
        flag = false;
      }
    }

    // 等循环结束后就知道是否要不要放入新数组中
    // 如果flag为true，说明要放入新数组中，如果flag为false，说明有相同的数据，不要放入新数组
    if (flag) {
      newArr[newArr.length] = arr[i];
    }
  }

  // 当两个循环都结束之后，最后的newArr就是我们要找的不重复数组
  return newArr;
}

console.log(getArr(arr1));
```

## 函数

### 基本概念

> 概念：一段代码的封装

- 定义函数：

```js
function fn(){} ,var fn = function (){}
```

- 调用函数：函数名()
- 参数：形参，实参
- 作用：可以封装一段特定功能代码，然后通过函数名调用，实现对该段代码重复使用

### 函数的创建方式

#### 函数声明及调用(推荐)

```js
☞ 函数的声明：
function  自定义函数名() {
    //一堆代码
    具体的功能代码
    //函数体

}
注意：
	 1. 由于函数是用来实现某种特定功能代码，所以一般我们设置函数名的时候，以动词开始。
   2. 函数不能自己执行代码，需要通过函数名调用实现代码的执行

 ☞ 调用函数（执行函数）

     函数名();  //函数的调用
```

#### 函数表达式（字面量）及执行方式（了解）

```js
var fn = function () {};

fn();
```

### 函数的参数

#### 形参

- 在函数创建时，在小扩号中定义的变量
  > 形参：占位符，本身没有真实数据

```js

function 函数名(形式参数，形参,形参,形参...) {//形参，就是一个占位符，命名规则和规范和变量一样
	//函数体
}
```

`注意`
函数也可以做为参数进行传递

#### 实参

> 实参，在函数调用时，在小扩号中所传入的实际的数据。

```js
函数名(实际参数，数据,数据,数据...);   //实参，就是实际的数据
```

#### 函数的返回值

- 注意：函数内部的值不可以直接拿到函数外面用
- 如何在函数外面获取到上面代码计算出的任意两个数之和？

```js
function getS(r) {
  // 求面积【PI假设为3.14】
  var s = 3.14 * r * r;
  // 输出
  document.write("面积为" + s);
}
getS(10); //314
console.log(getS(10)); //undefined
```

```js
function getS(r) {
  // 求面积【PI假设为3.14】
  return 3.14 * r * r;
}
getS(10); //空
console.log(getS(10)); //314
```

- 返回值：函数执行完后，可以把执行的结果 通过 **return 语法** 返回给 调用者

```js
function add(num1，num2){
 //函数体
 return num1 + num2; // 注意：return 后的代码不执行
}
var resNum = add(21,6); // 调用函数，传入 两个实参，并通过 resNum 接收函数返回值
alert(resNum);// 27

```

::: tip

- 如果函数没有显示的使用 return 语句 ，那么函数有默认的返回值：undefined
- 如果函数中写了 return 语句，后面没有写任何其他内容，那么函数的返回值依然是 undefined
- 一个函数只能有一个返回值
- return 代码执行完成后，后面的代码不再执行
- 函数也可以作为返回值（理解）
- retrurn：函数一旦遇到了 return，立刻停止函数的执行，在 return 后面（除了返回值），都不会执行
  :::

#### arguments 的使用

- 如果函数参数不确定，可以定义函数的时候不写参数，通过 arguments 获取
- 如果函数的参数确定，那么推荐定义函数的时候写参数

```js
function showargs() {
  console.log(arguments);
}

showargs(1, 2, 3, 4, 5);
```

- arguments 是一个伪数组,有长度

```js
function add() {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return "传入参数不合法";
  }
}
console.log(add(2, 3)); //5
console.log(add(1, 2, 3)); //传入参数不合法
```

```js
// 求若干个数的最大值

function fn() {
  // 形参无法固定

  // console.log(arguments); arguments = [1,11,33,22,22];

  for (var i = 0; i < arguments.length; i++) {
    alert(arguments[i]);
  }
}
fn(1, 11, 33, 22, 22);
```

### 匿名函数

> 匿名函数： 没有函数名的函数,要运算符配合使用

```js
例如：
var  fn = function () {

}
    // 【匿名函数】
    // 运算符的目的不是作运算，目的就是为了不报错！
    (function(){});  // 常见的，推荐使用
    !function(){};
    -function(){};
```

::: tip 注意

- 匿名函数不能单独使用
- 可以将匿名函数赋值给一个变量
- 可以让匿名函数自己调用自己
  :::

::: tip 作用

- 可以实现避免全局变量污染。
- 可以模拟块级作用域。
  :::

### 自调用函数

> 函数封装好，立即执行

```js
(function () {})();
```

`总结：`自调用函数可以是命名函数也可以是匿名函数

### 函数作用域

#### 全局作用域（全局变量）

- 在 script 标签中或者 js 文件中定义的变量，在任何地方都可以访问
- 在函数内部声明变量不使用 var 关键字 （不建议使用）

```js
var age = 18;
console.log(age); //18

function fn() {
  console.log(age);
}

fn(); //18
```

#### 局部作用域（局部变量）

- 在函数内部定义的变量
- 局部变量只能在定义变量的函数中使用

```js
function fn(a) {
  a = 100;
  var b = 200;
}
fn();
console.log(a); //a is not defined
console.log(b); //b is not defined
```

### 作用域链

- 当访问一个变量时，会先从本作用域中去找这个变量，若找不到则向上一级作用域中去找，依次类推，就形成了一个作用域链

```js
var a = 1;
function fn1() {
  var a = 2;
  function fn2() {
    console.log(a); //a的值
  }
  fn2();
}
fn1(); //2
```

### 预解析

- js 代码执行先执行预解析
- 先进行变量提升： 把变量声明提升到当前作用域的最上面，不包括变量的赋值
- 函数提升： 把函数声明提升到当前作用域的最上面，不包括函数的调用

## 对象

- 类中的具体的某个实例【属性和方法的集合体】
- 必须是一个具体的事物。 （手机，汽车不是对象，属于一类对象）

::: tip 总结

- 程序中的对象：
  - 对象必须有对应的属性【描述对象的特点，在程序中一般使用名词描述】
  - 对象必须有行为动作方法 【方法用来描述具体对象的行为动作，一般方法使用动词】
- 对象.属性名【arr.length】
- 对象.方法名();【document.write('123');】
- 属性：访问，【对象.属性名】【对象['属性名']】
- 方法：执行，【对象.方法名()】
  :::

### 对象字面量创建对象

```js
语法:
var  变量名  =  {  key: value, key: value,  key: functon () {}  };
```

- 创建对象，必须要确定具体的事物
- 创建对象，必须要确定对象有哪些属性【特征】或者方法【动作，行为】
- 如果一次想要输出多个对象，那么可以将每一个对象放到一个数组中。
- 访问对象属性 （对象.属性 | 对象['属性名']）【对象.属性名，对象['属性名']】
- 访问对象方法 （对象.方法名()）
  ::: tip 注意
- 如果通过 对象['属性名']访问对象的属性时候，必须保证使用字符串格式
  - 函数：独立存在的函数
  - 方法： 属于对象的函数（匿名函数）
    :::

```js
// 字面量创建对象
var obj = {
  // 键值对【对象中的成员】
  name: "张三丰",
  age: 23,
  sex: "男",

  // 方法
  taiji: function () {
    alert("太极好好太极");
  },
  lanqiu: function () {
    alert("打篮球");
  },
};
alert(obj["age"]);
alert(obj);
// alert( obj.name );
// alert(obj.age);
// alert(obj.sex);
// alert( obj.taiji );
// obj.taiji();
// obj.lanqiu();
```

### 通过 Object 创建对象

> 构造函数 ，是一种特殊的函数(方法)，与 new 一起使用，用于初始化(创建)对象

```js
var 变量 = new Object();
```

- Object 是一个构造函数
- 通过 new 调用构造函数

☞ 添加属性：
对象变量.属性名 = 值;

☞ 添加方法：
对象变量.方法名 = function () {}

```js
// 通过构造函数

var obj1 = new Object();

// 属性
// 设置属性
obj1.name = "李寻欢";

obj1.age = 22;

obj1.sex = "男";

// 方法
// 添加方法

obj1.feidao = function () {
  alert("飞刀飞飞飞");
};

obj1.feidao();

var obj2 = new Object();

obj2.name = "阿飞";
obj2.age = 22;
obj2.sex = "男";

obj2.fei = function () {
  alert("轻功水上漂");
};

obj2.fei();
```

### 工厂方式创建对象

```js
// 如果大量创建的话，用函数封装【工厂模式】

function creatObj(name, age, sex) {
  // 创建对象
  var obj = new Object();

  obj.name = name;

  obj.age = age;

  obj.sex = sex;

  obj.running = function () {
    alert("泡泡EQ跑");
  };

  // 把创建好的对象返回
  return obj;
}

var obj1 = creatObj("李寻欢", 22, "男");

alert(obj1.name);

var obj2 = creatObj("阿飞", 23, "男");

alert(obj2.name);
```

### 自定义构造函数创建对象

```js
☞ 使用帕斯卡命名法 （每个单词首字母大写）

☞ 例如：
function  CreateHero ( name, age, height ) {
this.name = name;
this.age = age;
this.height = height;
}
```

```js
// 自定义构造函数

function CreateObject(name, age, sex) {
  // 对象.属性
  // 当前new的对象【谁new构造函数，this就是谁】
  this.name = name;
  this.age = age;
  this.sex = sex;

  this.taiji = function () {
    alert("打太极");
  };
}

var obj1 = new CreateObject("李寻欢", 22, "男");

alert(obj1.name);

var obj2 = new CreateObject("鼬", 16, "男");

alert(obj2["name"]);
```

## new 关键字执行过程

- 在内存中创建一个空对象
- this 指向创建的对象
- 执行函数
- 返回当前对象

`注意：` 在构造函数中，默认的返回值就是当前创建的对象

## instance0f 关键字介绍

```js
// function A(name) {
//     this.name=name;
// }

// function B(name) {
//     this.name=name;
// }
// var obj = new A('李寻欢');
// // 判断

// var re = obj instanceof A;
// alert(re) //结果是true和false
```

- 判断是不是数组

```js
// 判断一个数是不是数组

var arr = 1;

var re = arr instanceof Array;

alert(re); // false
```

## 遍历对象

☞ 通过 for in 遍历 对象的成员 for(key in 对象){对象[key]}

☞ 遍历对象中的属性

☞ 遍历对象中的值

```js
var obj = {
  name: "张三丰",
  age: "23",
  taiji: function () {
    alert("你好");
  },
};

for (key in obj) {
  alert(obj[key]);
  //依次弹出：张三丰，23，function(){
  // alert('你好')
  //}
}
```

## 简单数据类型和复杂数据类型的存储形式

- 之前在别的笔记已总结,此处省略

## 内置对象介绍

☞ JavaScript 组成： ECMAScript | DOM | BOM

☞ ECMAScript： 变量 ， 函数， 数据类型 ，流程控制，内置对象。。。

☞ js 中的对象： 自定义对象 ， 内置对象 ， 浏览器对象（不属于 ECMAScript）

☞ Math 对象，Array 对象，Date 对象。。。。

☞ 通过查文档学习内置对象 MDN (https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)

## Math 对象

```js
  ☞ 提供了一系列与数学相关的方法或属性  ( 静态  |  实例)

  ☞ Math.PI          获取圆周率【属性】
  ☞ Math.random()    返回大于等于0小于1之间的随机数 [灵活使用]

  ☞ Math.floor() 	 向下取整，返回一个小于当前数字的整数
  ☞ Math.ceil()	     向上取整，返回一个大于当前数字的整数

  ☞ Math.round()     四舍五入（小数如果小于0.5,返回小于当前数字的整数，如果小数部分大于0.5返回大于当前数字的一个整数）
  ☞ Math.abs()		取绝对值（返回当前数字的绝对值，正整数）

  ☞ Math.max()       返回一组数中的最大值 （可以设置多个参数，返回其中最大值，参数不可以是数组）
  ☞ Math.min()       返回一组数中的最小值 （可以同时设置多个参数，与最大值效果一样）

  ☞ Math.sin(x)	     返回一个正弦的三角函数 ( 注意： x 是一个以弧度为单位的角度)
  ☞ Math.cos(x)	     返回一个余弦的三角函数 （注意： x 参数是一个以弧度为单位的角度）

  ☞ Math.pow(x,y)	 返回x的y次幂
```

## Date 对象

☞ Date 是一个构造函数，必须通过 new Date() 创建一个实例成员才能使用

☞ 用法一：空构造函数
var d = new Date();

☞GMT 格林威治时间（0 时区）

```js
var n1 = new Date();
console.log(n1); // Sat Sep 21 2019 18:17:58 GMT+0800 (中国标准时间)
```

☞ 用法二： 传入日期格式的字符串
var d = new Date("1988-8-8")

```js
var n2 = new Date("1999/9/9 6:6:6");
console.log(n2); //Thu Sep 09 1999 06:06:06 GMT+0800 (中国标准时间)
```

☞ 用法三： 传入数字
var d = new Date(year, month[,day,time,second]); //必须设置年和月
备注： 月份从 0 开始， 0 代表 1 月

```js
var n3 = new Date(1999, 9, 9, 6, 6, 6);
console.log(n3); //Sat Oct 09 1999 06:06:06 GMT+0800 (中国标准时间)
// // 创建指定时间日期
var n4 = new Date(123456779534563);
console.log(n4); //Sat Mar 11 5882 05:52:14 GMT+0800 (中国标准时间)
```

☞ 获取当前时间的毫秒值：

```js
d.valueOf();
d.getTime(); // 推荐使用
Date.now(); //H5 新方法 有兼容信息
```

```js
// // toLocaleString()==>转成本地时间日期格式
// document.write(n1.toLocaleString() + "<br />");
// document.write(n2.toLocaleString() + "<br />");
// document.write(n3.toLocaleString() + "<br />");
// document.write(n4.toLocaleString() + "<br />");
```

☞ 通过 H5 提供的方法操作 多媒体标签
<a href="http://www.w3school.com.cn/html5/html5_ref_audio_video_dom.asp">W3School</a>

### Date 中的方法

☞ 日期格式化方法

```js
var d = new Date();
    d.toString();  //转化成字符串
    d.toDateString();  //转换成日期字符串
    d.toTimeString();  //转换成时间字符串
    d.toLocaleDateString();   //返回本地的日期格式  （不同浏览器不同效果）
    d.toLocaleTimeString();   //返回本地的时间格式  （不同浏览器不同效果）


☞ 获取日期其他部分(掌握)
	d.getSeconds()  //获取秒
    d.getMinutes()  //获取分钟
    d.getHours()    //获取小时
    d.getDay()      //返回周几   （0表示周日）
    d.getDate()     //返回当前月的第几天
    d.getMonth()    //返回月份   （从0开始）
    d.getFullYear()  //返回年份
```

自学文档
<a href="http://www.runoob.com/js/js-obj-date.html">菜鸟教程-Date</a>
<a href="http://www.w3school.com.cn/jsref/jsref_obj_math.asp">W3School-Math</a>

### 写一个函数，格式化日期对象，返回 yyyy-mm-dd HH:mm：ss 形式

```js
function fn(date) {
  var y = date.getFullYear();
  var mm = date.getMonth() + 1;
  var dd = date.getDay();
  // 小时

  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  mm = mm > 10 ? mm : "0" + mm;

  dd = dd > 10 ? dd : "0" + dd;

  h = h > 10 ? h : "0" + h;

  m = m > 10 ? m : "0" + m;

  s = s > 10 ? s : "0" + s;
  document.write(y + "-" + mm + "-" + dd + " " + h + ":" + m + ":" + s);
}
var n = new Date("1999/9/9 6:6:5");
fn(n); //1999-09-04 06:06:05
```

## Array 数组对象

☞ 判断变量是不是一个数组

```js
Array.isArray(ary)
☞ toString()   // 把数组转换为字符串，使用逗号分隔
☞ valueOf()   //  返回数组对象本身

☞ ary.pop() [常用]    //返回数组中最后一个字，且会修改数组的长度
☞ ary.shift()  //取出数组中的第一个元素，修改数组的长度

☞ ary.push() [常用]  // 该方法有一个返回值，表示数组最新的长度，该方法中可以设置多个参数
☞ ary.unshift(number)   //在数组中最开始位置添加一个值


☞ 其他方法汇总
	     ◆ reverse()  // 翻转数组
   	     ◆ concat()  //把两个数组拼接到一块,返回一个新数组
		 ◆ slice(startindex, endindex)   //从当前数组中截取一个新的数组
		   	  ✔ 第一个参数表示开始索引位置,第二个参数代表结束索引位置
		 ◆ splice(startindex, deletCont, options)  //删除或者替换数组中的某些值
		 	  ✔ 第一个参数代表从哪开始删除
              ✔ 第二个参数代表一共删除几个
              ✔ 第三个参数代表要替换的值
		 ◆ indexOf(content[,index])，lastIndexof()   //没找到返回-1
			  ✔ 找数组中的某个值,如果找到返回索引位置,如果没有找到返回-1
			  ✔ lastIndexof()  从数组的末尾开始找,如果找到,返回索引位置,如果没有找到返回-1
		 ◆ Join()   //将数组中的每一个元素通过一个字符链接到一块

```

### 例子

```js
// ☞ 将数组中的元素以 “|”链接的方式输出

// var ary = ['张三', '李四', '王五'];
// console.log(ary.join('|'))

// ☞  将一个数组中的字符串顺序反转  ['a'，'b','c','d'] -> ['d','c','b','a']

// var arr= ['a','b','c','d'];
// console.log(arr.reverse())

// ☞ 将数组中每一个'a' 的位置输出到控制台中 ['a','b','c','d','a','e','f','a','g','h']
// 当明确循环次数的时候,使用for循环
// 无法确定循环次数的用while循环
// var arr = ['a','b','c','d','a','e','f','a','g','h'];

// for ( var i = 0; i < arr.length; i++){

//     if (arr[i]=='a'){
//         document.write(i)
//     }

// }
```

## 字符串

☞ 特性: 不可变性

- 注意：别大量替换字符串

```js
属性：length，长度
☞ 字符方法
 	 1. charAt(index)  		//获取指定位置处的字符
  	 2. str[index]		   //获取指定位置的字符 （H5中的方法）

 ☞ 字符串方法
 	 1. concat()   //拼接字符串  等效于 +
     2. slice(strat,end)       //从指定位置开始，截取字符串到结束位置，end值取不到
     3. substring(start,end)   //从指定位置开始，截取字符串到结束位置， end值取不到
     4. substr(start,length)   //从指定位置开始，截取length长度个字符

  ☞ 位置方法
  	 1. indexOf(字符)   //返回字符在字符串中的位置【首次】
	 2. lastIndexOf(字符)  //从后往前找，只找第一个匹配的字符【尾次】

  ☞ 去除空白
  	  trim()      //只能去除字符串前后空白

  ☞ 大小写转换法
  	  toLocaleUpperCase()  //转化为大写
      toLocaleLowerCase()  //转化为小写

  ☞其他
  	 replace(a,b)  // 用b替换a
	 split()   //	以一个分割符,将一个字符串串分割成一个数组
```

### 例子

```js
// 截取字符串 “我爱中华人民共和国”  中 '中华' 输出到控制台中

// var n = '我爱中华人民共和国';

// // 应该先找到中的小标
// var re = n.indexOf('中');
// // 然后从中的下标开始截取

// var m = n.substr(re,2)
// console.log (m)

// 'qweqweoeqweroqweqweodfsfdo' 查找字符串中所有字母 'o'出现的位置

//   应该用遍历
// var n = 'qweqweoeqweroqweqweodfsfdo';

// for (var i = 0; i <n.length; i++){

//     if(n[i]==='o'){
//         console.log(i)
//     }
// }

//  把字符串中的所有字母'o'替换成 '-';
// var n = 'qweqweoeqweroqweqweodfsfdo';

// for ( var i =0; i < n.length; i++){
//   if(n[i]==='o') {
//    var n = n.replace('o','-');
//   }
// }
// document.write(n)
```

### 获取 url 中 的用户名和密码 https://www.test.com/login?uname=zs&pwd=123;

```js
var str = "https://www.test.com/loginu?name=zs&pwd=123";
//获取?的位置【查找：indexOf】
var index = str.indexOf("?");

// substring
var val = str.substring(index + 1); // name=zs&pwd=123

// 继续分割字符串
var arr = val.split("&"); // [name=zs,pwd=123]

// 遍历数组
for (var i = 0; i < arr.length; i++) {
  var newArr = arr[i].split("="); // [name,zs],[pwd,123]
  for (var j = 0; j < newArr.length; j++) {
    console.log(newArr[j]);
  }
}
```
