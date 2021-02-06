## forEach()

- 从头至尾遍历数组，为每个元素调用指定函数。改变数组本身

### 语法

```js
--val 数组的每一项
--index 每一项的下标
--arr 数组对象
数组.forEach(function(val,index,arr){
    代码块
})
```

- 简写

```js
数组.forEach((val, index, arr) => {
  代码块;
});
```

### 例子

```js
let arr = [1, 3, 5, 2, 45, 56];
arr.forEach((val, index, arr) => {
  console.log("val", val); //1
  console.log("index", index); //0
  console.log("arr", arr); //[1,3,5,2,45,56]
});
```

## map()

- 调用的数组的每一个元素传递给指定的函数，并返回一个新数组。不改变原数组。函数的参数只有传进来的数组元素

### 语法

```js
数组.map(function(val,index,arr){
    return 。。。。
})
```

- 简写

```js
数组.map(()=>{
    return 。。。。
})
```

### 例子

```js
var arr = [10, 20, 30];
var result = arr.map(function (item, index, array) {
  console.log(array[index]); //10,20,30
  return item + 10;
});
console.log(result); //20,30,40
```

```js
var arr = [1, 2, 3, 4, 5];
var arr1 = arr.map(function (x) {
  return x * x; //一对一的关系，传进来一个值，返回一个对应的值。
}); //arr1 = [1,4,9,16,25]
```

## filter()

- 返回满足条件的新数组，该函数返回 true 或 false，输出是判定为 true 的元素

### 语法

```js
array.filter(function(currentValue,index,arr){
    return....
})
```

- 简写

```js
数组.filter((val,index,arr)=>{
    return ....
})
```

### 例子

```js
var arr = [1, 2, 3, 4, 5];
var arr1 = arr.filter(function (x) {
  return x < 3;
}); //arr1 = [1,2]
```

## every()和 some()

- 作用：对数组元素进行指定函数的逻辑判断，输入是特定函数，输出是 true 或者 false

- every()是对数组中的每一项运行给定函数，如果该函数对每一项返回 true,则最后返回 true。

```js
var arr = [1, 2, 3, 4, 5];
var arr1 = arr.every(function (x) {
  return x < 3;
}); //false
```

- some()是对数组中每一项运行指定函数，如果该函数对任一项返回 true，则最后返回 true。可以用来判断是否数组中所有数都满足某一条件或者是否存在某些值满足条件。

```js
var arr = [1, 2, 3, 4, 5];
var arr1 = arr.some(function (x) {
  return x < 3;
}); //true
```

## reduce()

- 使用指定的函数将数组元素进行组合生成单个值。输入是两个参数，第一个是执行化简操作的函数。第二个(可选)的参数是一个传递给函数的初始值。多对一，输入多个值最终返回一个值
  index 值从 1 开始增加。
- 第一次迭代： prev = 1,curr = 2,index = 1
- 第二次迭代： prev = 3,curr = 3,index = 2
- 第三次迭代： prev = 6,curr = 4,index = 3
- 第四次迭代： prev = 10,curr = 5,index = 4
- 第五次迭代： prev = 15,curr = 5,index = 5
- 第六次迭代： prev = 20，curr=5,index = 6

```js
var arr = [1, 2, 3, 4, 5, 5, 5];
var sum = arr.reduce(function (prev, curr, index, array) {
  return prev + curr;
}); //sum = 25
```

### 将多个数组合并成一个数组

```js
var arr = [1, 2, 3, 4, 5],
  arr1 = [6, 7, 8, 9],
  arr2 = [10, 11, 12];
var newArr = [arr, arr1, arr2];
var ret = newArr.reduce(function (a, b) {
  return a.concat(b);
}); // ret = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
```

## join(数组转字符串)

### 数组转字符串

- 数组转字符串，方法只接收一个参数：即默认为逗号分隔符（）。

```js
<script>
  var arr=[1,2,3,4]; console.log(arr.join()); //1,2,3,4
  console.log(arr.join(":")); //1:2:3:4 console.log(arr); //[1,2,3,4],原数组不变
</script>
```

- 字符串转数组 split

### join()实现重复的字符串

```js
let arr = new Array(3).join("123");
console.log(arr); //123123
```

## pop()和 push()

### push():

- 可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度

```js
var arr1 = [12, 34, 85];
console.log(arr1.push(56)); //打印出来的是数组的长度
console.log(arr1); //[12,34,85,56]
```

### pop()

- 数组末尾移除最后一项，减少数组的 length 值，然后返回移除的项

```js
var arr1 = [12, 34, 85, 56];
console.log(arr1.pop()); //56
```

## shift() 和 unshift()

### unshift()

- 将参数添加到原数组开头，并返回数组的长度

```js
var arr = ["Lily", "lucy", "Tom"];
var count = arr.unshift("Jack", "Sean");
console.log(count); // 5
console.log(arr); //["Jack", "Sean", "Lily", "lucy", "Tom"]
```

### shift()

- 删除原数组第一项，并返回删除元素的值；如果数组为空则返回 undefined

```js
var arr = ["Jack", "Sean", "Lily", "lucy", "Tom"];
var item = arr.shift();
console.log(item); // Jack
console.log(arr); // ["Sean", "Lily", "lucy", "Tom"]
```

## sort()

- 默认是升序，排序会修改原数据，也会返回一个新数组
- 用于对数组的元素进行排序,如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，说得更精确点，是按照字符编码的顺序进行排序。要实现这一点，首先应把数组的元素都转换成字符串（如有必要），以便进行比较

```js
var arr1 = ["a", "d", "c", "b"];
console.log(arr1.sort()); // ["a", "b", "c", "d"]
```

- 如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下：

  - 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
  - 若 a 等于 b，则返回 0。
  - 若 a 大于 b，则返回一个大于 0 的值。

```js
arr2 = [13, 24, 51, 3];
console.log(arr2.sort()); // [13, 24, 3, 51]
console.log(arr2); // [13, 24, 3, 51](元数组被改变)
```

### 语法

```js
array.sort(function (a, b) {});
```

- 解决 arr2 数组的排序问题
- sort()方法可以接收一个比较函数作为参数，以便我们指定哪个值位于哪个值的前面。比较函数接收两个参数，如果第一个参数应该位于第二个之前则返回一个负数，如果两个参数相等则返回 0，如果第一个参数应该位于第二个之后则返回一个正数。以下就是一个简单的比较函数

```js
function compare(value1, value2) {
  if (value1 < value2) {
    return -1;
  } else if (value1 > value2) {
    return 1;
  } else {
    return 0;
  }
}
arr2 = [13, 24, 51, 3];
console.log(arr2.sort(compare)); // [3, 13, 24, 51]
```

- 降序排列

```js
function compare(value1, value2) {
  if (value1 < value2) {
    return 1;
  } else if (value1 > value2) {
    return -1;
  } else {
    return 0;
  }
}
arr2 = [13, 24, 51, 3];
console.log(arr2.sort(compare)); // [51, 24, 13, 3]
```

### 总结

```js
var arr = [11,22,110,20,30,40].sort(function(a,b){

	return a-b;

})

console.log(arr);

结果是： [11, 20, 22, 30, 40, 110]

解释：a,b表示数组中的任意两个元素，若return > 0 b前a后；reutrn < 0 a前b后；a=b时存在浏览器兼容

简化一下：a-b输出从小到大排序，b-a输出从大到小排序。
```

## reverse()

- 反转数组项的顺序

```js
var arr = [13, 24, 51, 3];
console.log(arr.reverse()); //[3, 51, 24, 13]
console.log(arr); //[3, 51, 24, 13](原数组改变)
```

## concat()

[官网解释](https://www.w3school.com.cn/jsref/jsref_concat_array.asp)

- 和 reduce()配合可以把多个数组，拼接成一个数组,详情见 reduce()方法
- concat() 方法用于连接两个或多个数组,该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本

### 语法

```js
array.concat(arrayX,arrayX,......,arrayX)
必需。该参数可以是具体的值，也可以是数组对象。可以是任意多个。
```

- 返回一个新的数组。该数组是通过把所有 arrayX 参数添加到 arrayObject 中生成的。如果要进行 concat() 操作的参数是数组，那么添加的是数组中的元素，而不是数组。

### 例子

```js
var a = [1, 2, 3];
document.write(a.concat(4, 5)); //1,2,3,4,5
```

```js
var arr = new Array(3);
arr[0] = "George";
arr[1] = "John";
arr[2] = "Thomas";

var arr2 = new Array(3);
arr2[0] = "James";
arr2[1] = "Adrew";
arr2[2] = "Martin";

document.write(arr.concat(arr2)); //George,John,Thomas,James,Adrew,Martin
```

```js
var arr = new Array(3);
arr[0] = "George";
arr[1] = "John";
arr[2] = "Thomas";

var arr2 = new Array(3);
arr2[0] = "James";
arr2[1] = "Adrew";
arr2[2] = "Martin";

var arr3 = new Array(2);
arr3[0] = "William";
arr3[1] = "Franklin";

document.write(arr.concat(arr2, arr3)); //George,John,Thomas,James,Adrew,Martin,William,Franklin
```

## slice()

- 截取数组
- 返回从原数组中指定开始下标(可以截取到)到结束下标（截取不到）之间的项组成的新数组

### 语法

```js
array.slice(start, end);
```

- start 必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。
- end 可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素
- 使用负值截取元素时,如果 end 未被规定，那么 slice() 方法会选取从 start 到数组结尾的所有元素。

```js
var arr = [1, 2, 3];
console.log(arr.slice(1)); //[2,3]
```

```js
var arr = [1, 2, 3, 4, 5, 6];
console.log(arr.slice(1, 4)); //[2,3,4]
```

## splice( 从哪删 , 删几个 , 替换的内容 )

- 可以实现删除、插入和替换,该方法会改变原始数组

### 语法

```js
array.splice(index,howmany,item1,.....,itemX)
```

- index 必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
- howmany 必需。要删除的项目数量个数。如果设置为 0，则不会删除项目。
- item1, ..., itemX 可选。向数组添加的新项目。
- 删除：可以删除任意数量的项，只需指定 2 个参数：要删除的第一项的位置和要删除的项数。例如， splice(0,2)会删除数组中的前两项（0 下标对应的数也算一位）
- 插入：可以向指定位置插入任意数量的项，只需提供 3 个参数：起始位置、 0（要删除的项数）和要插入的项。例如，splice(2,0,4,6)会从当前数组的位置 2 开始插入 4 和 6。
- 替换：可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定 3 个参数：起始位置、要删除的项数和要插入的任意数量的项。插入的项数不必与删除的项数相等。例如，splice (2,1,4,6)会删除当前数组位置 2 的项，然后再从位置 2 开始插入 4 和 6。
- splice()方法始终都会返回一个数组，该数组中包含从原始数组中删除的项，如果没有删除任何项，则返回一个空数组。

```js
var arr = [1, 3, 5, 7, 9, 11];
var arrRemoved = arr.splice(0, 2);
console.log(arr); //[5, 7, 9, 11]
console.log(arrRemoved); //[1, 3]

var arrRemoved2 = arr.splice(2, 0, 4, 6);
console.log(arr); // [5, 7, 4, 6, 9, 11]
console.log(arrRemoved2); // []

var arrRemoved3 = arr.splice(1, 1, 2, 4);
console.log(arr); // [5, 2, 4, 4, 6, 9, 11]
console.log(arrRemoved3); //[7]
```

## indexOf(),lastIndexOf()

- indexOf()：接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的开头（位置 0）开始向后查找。
- lastIndexOf：接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的末尾开始向前查找。
  (在一个字符串中的指定位置从后向前搜索)

这两个方法都返回要查找的项在数组中的位置，或者在没找到的情况下返回-1。在比较第一个参数与数组中的每一项时，会使用全等操作符。

```js
var arr = [1, 3, 5, 7, 7, 5, 3, 1];
console.log(arr.indexOf(5)); //2
console.log(arr.lastIndexOf(5)); //5

console.log(arr.indexOf(5, 2)); //2
console.log(arr.lastIndexOf(5, 4)); //2

console.log(arr.indexOf("5")); //-1
```

## 扩展运算符(...)

[官网链接](http://es6.ruanyifeng.com/#docs/array#%E6%89%A9%E5%B1%95%E8%BF%90%E7%AE%97%E7%AC%A6)

### 作用：解构数组

```js
console.log(...[1, 2, 3]);
// 1 2 3
console.log(1, ...[2, 3, 4], 5);
// 1 2 3 4 5

function push(array, ...items) {
  array.push(...items);
}
```

### 解构 Dom 元素

```js
<div></div>
<div></div>
<div></div>
<script>
    console.log([...document.querySelectorAll('div')])
    // [<div>, <div>, <div>]
</script>
```

### 用于函数的调用

```js
let items = [1, 3, 4, 7];
let arry = [];
function pushAdd(array, ...items) {
  array.push(...items);
}
pushAdd(arry, items);
console.log(arry); //[1,3,4,7]若按照之前的写法需要循环遍历将items数组的元素取出，再往arry里push()
```

```js
function add(x, y) {
  return x + y;
}

const numbers = [4, 38];
add(...numbers); // 42
```

- 扩展运算符与正常的函数参数可以结合使用

```js
function f(v, w, x, y, z) {}
const args = [0, 1];
f(-1, ...args, 2, ...[3]);
```

- 扩展运算符后面还可以放置表达式

```js
let x = 2;
const arr = [...(x > 0 ? ["a"] : []), "b"];
console.log(arr); //[a,b]
```

- 如果扩展运算符后面是一个空数组，则不产生任何效果。

```js
[...[], 1];
// [1]
```

- 注意，只有函数调用时，扩展运算符才可以放在圆括号中，否则会报错

```js
(...[1, 2])
// Uncaught SyntaxError: Unexpected number

console.log((...[1, 2]))
// Uncaught SyntaxError: Unexpected number

console.log(...[1, 2])
// 1 2
```

- 上面三种情况，扩展运算符都放在圆括号里面，但是前两种情况会报错，因为扩展运算符所在的括号不是函数调用。

### 替代函数的 apply 方法

- apply：调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.apply(A, arguments);即 A 对象应用 B 对象的方法。
- 由于扩展运算符可以展开数组，所以不再需要 apply 方法，将数组转为函数的参数了。

```js
// ES5 的写法
function f(x, y, z) {
  // ...
}
var args = [0, 1, 2];
f.apply(null, args);

// ES6的写法
function f(x, y, z) {
  // ...
}
let args = [0, 1, 2];
f(...args);
```

### 替代 apply 的例子

- 下面是扩展运算符取代 apply 方法的一个实际的例子，应用 Math.max 方法，简化求出一个数组最大元素的写法。

```js
// ES5 的写法
Math.max.apply(null, [14, 3, 77]);

// ES6 的写法
Math.max(...[14, 3, 77]);

// 等同于
Math.max(14, 3, 77);
```

- 另一个例子是通过 push 函数，将一个数组添加到另一个数组的尾部。

```js
// ES5的 写法
  var arr1 = [0, 1, 2];
  var arr2 = [3, 4, 5];
  Array.prototype.push.apply(arr1, arr2);
   <!--arr1.push.apply(null,arr2)这样写是不对的-->
  console.log(arr1);//0,1,2,3,4,5
  console.log(arr2)//3,4,5
 // ES6 的写法
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr1.push(...arr2);
```

- 上面代码的 ES5 写法中，push 方法的参数不能是数组，所以只好通过 apply 方法变通使用 push 方法。有了扩展运算符，就可以直接将数组传入 push 方法。

```js
// ES5
new (Date.bind.apply(Date, [null, 2015, 1, 1]))();
// ES6
let myData = new Date(...[2015, 1, 1]).toLocaleDateString();
console.log(myData); //2015/1/1
```

### 复制数组

- 数组是复杂的数据类型，直接复制的话，只是复制了指向底层数据结构的指针，而不是克隆一个全新的数组。

```js
const a1 = [1, 2];
const a2 = a1;

a2[0] = 2;
a1; // [2, 2]
```

- 上面代码中，a2 并不是 a1 的克隆，而是指向同一份数据的另一个指针。修改 a2，会直接导致 a1 的变化。
- ES5 只能用变通方法来复制数组,

```js
const a1 = [1, 2];
const a2 = a1.concat();

a2[0] = 2;
a1; // [1, 2]
```

- 上面代码中，a1 会返回原数组的克隆，再修改 a2 就不会对 a1 产生影响
- 扩展运算符提供了复制数组的简便写法

```js
const a1 = [1, 2];
// 写法一
const a2 = [...a1];
// 写法二
const [...a2] = a1;
//这种方法是深拷贝
```

### 合并数组

- 扩展运算符提供了数组合并的新写法

```js
const arr1 = ["a", "b"];
const arr2 = ["c"];
const arr3 = ["d", "e"];

// ES5 的合并数组
arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6 的合并数组
[...arr1, ...arr2, ...arr3];
// [ 'a', 'b', 'c', 'd', 'e' ]
```

```js
const a1 = [{ foo: 1 }];
const a2 = [{ bar: 2 }];

const a3 = a1.concat(a2);
const a4 = [...a1, ...a2];

a3[0] === a1[0]; // true
a4[0] === a1[0]; // true
```

### 与解构赋值结合

### 字符串

- 扩展运算符还可以将字符串转为真正的数组

```js
[..."hello"];
// [ "h", "e", "l", "l", "o" ]
```

- 上面的写法，有一个重要的好处，那就是能够正确识别四个字节的 Unicode 字符

```js
'x\uD83D\uDE80y'.length // 4
[...'x\uD83D\uDE80y'].length // 3
```

- 上面代码的第一种写法，JavaScript 会将四个字节的 Unicode 字符，识别为 2 个字符，采用扩展运算符就没有这个问题。因此，正确返回字符串长度的函数，可以像下面这样写。

```js
function length(str) {
  return [...str].length;
}

length("x\uD83D\uDE80y"); // 3
```

### 实现了 Iterator 接口的对象

### Map 和 Set 结构，Generator 函数

## Array.from()

- Array.from 方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象

```js
let arrayLike = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
```

- 实际应用中，常见的类似数组的对象是 DOM 操作返回的 NodeList 集合，以及函数内部的 arguments 对象。Array.from 都可以将它们转为真正的数组。

```js
// NodeList对象
let ps = document.querySelectorAll("p");
Array.from(ps).filter((p) => {
  return p.textContent.length > 100;
});

// arguments对象
function foo() {
  var args = Array.from(arguments);
  // ...
}
```

- 上面代码中，querySelectorAll 方法返回的是一个类似数组的对象，可以将这个对象转为真正的数组，再使用 filter 方法。
- 只要是部署了 Iterator 接口的数据结构，Array.from 都能将其转为数组。

```js
Array.from("hello");
// ['h', 'e', 'l', 'l', 'o']

let namesSet = new Set(["a", "b"]);
Array.from(namesSet); // ['a', 'b']
```

- 上面代码中，字符串和 Set 结构都具有 Iterator 接口，因此可以被 Array.from 转为真正的数组。
- 如果参数是一个真正的数组，Array.from 会返回一个一模一样的新数组。

```js
Array.from([1, 2, 3]);
// [1, 2, 3]
```

- 值得提醒的是，扩展运算符（...）也可以将某些数据结构转为数组。

```js
// arguments对象
function foo() {
  const args = [...arguments];
}

// NodeList对象
[...document.querySelectorAll("div")];
```

- 扩展运算符背后调用的是遍历器接口（Symbol.iterator），如果一个对象没有部署这个接口，就无法转换。Array.from 方法还支持类似数组的对象。所谓类似数组的对象，本质特征只有一点，即必须有 length 属性。因此，任何有 length 属性的对象，都可以通过 Array.from 方法转为数组，而此时扩展运算符就无法转换。

```js
Array.from({ length: 3 });
// [ undefined, undefined, undefined ]
```

- 上面代码中，Array.from 返回了一个具有三个成员的数组，每个位置的值都是 undefined。扩展运算符转换不了这个对象。
- 对于还没有部署该方法的浏览器，可以用 Array.prototype.slice 方法替代。

```js
const toArray = (() =>
  Array.from ? Array.from : (obj) => [].slice.call(obj))();
```

- Array.from 还可以接受第二个参数，作用类似于数组的 map 方法，用来对每个元素进行处理，将处理后的值放入返回的数组。

```js
Array.from(arrayLike, (x) => x * x);
// 等同于
Array.from(arrayLike).map((x) => x * x);

Array.from([1, 2, 3], (x) => x * x);
// [1, 4, 9]
```

- 下面的例子是取出一组 DOM 节点的文本内容。

```js
let spans = document.querySelectorAll("span.name");

// map()
let names1 = Array.prototype.map.call(spans, (s) => s.textContent);

// Array.from()
let names2 = Array.from(spans, (s) => s.textContent);
```

- 下面的例子将数组中布尔值为 false 的成员转为 0。

```js
Array.from([1, , 2, , 3], (n) => n || 0);
// [1, 0, 2, 0, 3]
```

- 另一个例子是返回各种数据的类型。

```js
function typesOf() {
  return Array.from(arguments, (value) => typeof value);
}
typesOf(null, [], NaN);
// ['object', 'object', 'number']
```

- 如果 map 函数里面用到了 this 关键字，还可以传入 Array.from 的第三个参数，用来绑定 this。
- Array.from()可以将各种值转为真正的数组，并且还提供 map 功能。这实际上意味着，只要有一个原始的数据结构，你就可以先对它的值进行处理，然后转成规范的数组结构，进而就可以使用数量众多的数组方法。

```js
Array.from({ length: 2 }, () => "jack");
// ['jack', 'jack']
```

- 上面代码中，Array.from 的第一个参数指定了第二个参数运行的次数。这种特性可以让该方法的用法变得非常灵活。
- Array.from()的另一个应用是，将字符串转为数组，然后返回字符串的长度。因为它能正确处理各种 Unicode 字符，可以避免 JavaScript 将大于\uFFFF 的 Unicode 字符，算作两个字符的 bug。

```js
function countSymbols(string) {
  return Array.from(string).length;
}
```

## Array.of()

### 作用

- Array.of 方法用于将一组值，转换为数组

```js
Array.of(3, 11, 8); // [3,11,8]
Array.of(3); // [3]
Array.of(3).length; // 1
```

- 这个方法的主要目的，是弥补数组构造函数 Array()的不足。因为参数个数的不同，会导致 Array()的行为有差异

```js
Array(); // []
Array(3); // [, , ,]
Array(3, 11, 8); // [3, 11, 8]
```

- 上面代码中，Array 方法没有参数、一个参数、三个参数时，返回结果都不一样。只有当参数个数不少于 2 个时，Array()才会返回由参数组成的新数组。参数个数只有一个时，实际上是指定数组的长度。
- Array.of 基本上可以用来替代 Array()或 new Array()，并且不存在由于参数不同而导致的重载。它的行为非常统一

```js
Array.of(); // []
Array.of(undefined); // [undefined]
Array.of(1); // [1]
Array.of(1, 2); // [1, 2]
```

- Array.of 总是返回参数值组成的数组。如果没有参数，就返回一个空数组。
- Array.of 方法可以用下面的代码模拟实现

```js
function ArrayOf() {
  return [].slice.call(arguments);
}
```

## 数组去重的方法

### 最基本的去重方法

```javascript
思路：定义一个新数组，并存放原数组的第一个元素，然后将原数组进行循环遍历,然后再对新数组也进行循环遍历,再对两个数组中的值进行比较,如果不相同就往新数组中加入.如果相同就跳出.

function unique(arr){

　　var res = [arr[0]];

　　for(var i=1;i<arr.length;i++){

　　　　var repeat = false;

　　　　for(var j=0;j<res.length;j++){

　　　　　　if(arr[i] == res[j]){

　　　　　　　　repeat = true;

　　　　　　　　break;

　　　　　　}

　　　　}

　　　　if(!repeat){

　　　　　　res.push(arr[i]);

　　　　}

　　}

　　return res;

}
```

### 利用 ES6 的 set 和 from()

```javascript
//利用Array.from()将Set结构转换成数组
function dedupe(array) {
  return Array.from(new Set(array));
}
dedupe([1, 1, 2, 3]); //[1,2,3]
```

```javascript
//也可以数组去重
let array = [1, 3, 1];
let a = [...new Set(array)];
console.log(a);
```

### ES6 中 set 方法的介绍

> ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

[用法介绍](http://note.youdao.com/noteshare?id=3a07b0576c776fd1273a6972bcd8b777&sub=50D651C6FCBA479D93BB9DA80CFE7F47)

### 利用下标查询 indexOf

:::tip 思路分析

- 先定义一个新数组,然后给新数组定义旧数组中的第一个值,然后循环遍历旧数组.
- 然后用 indexof 判断旧数组中的值是否在新数组中存在,如果不存在就用 push 方法加在新数组中
- 把新数组返回
  :::

```javascript
function unique(arr) {
  var newArr = [arr[0]];
  for (var i = 1; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) == -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
```

### 利用对象的属性去重（推荐）

```javascript
思路：每次取出原数组的元素，然后再对象中访问这个属性，如果存在就说明重复

function unique(arr){

　　var res =[];

　　var json = {};

　　for(var i=0;i<arr.length;i++){

　　　　if(!json[arr[i]]){

　　　　　　res.push(arr[i]);

　　　　　　json[arr[i]] = 1;

　　　　}

　　}

　　return res;

}
```

## 数组排序

### 标准排序

```javascript
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
```

### 冒泡排序

```javascript
for (var i = 0; i < arr.length; i++) {
  //比的趟数
  // i=0时  j=0 进入循环
  // i=0是 j=1 j<6-0 进入循环
  for (var j = 0; j < arr.length - i; j++) {
    if (arr[j] > arr[j + 1]) {
      str = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = str;
    }
  }
}
```

### 冒泡排序方法二:

```javascript
var arr = [5, 4, 6, 1, 3, 2];
var i = arr.length;
var str;
while (i > 0) {
  // i等于6
  for (var j = 0; j < i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      str = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = str;
    }
  }
  i--;
}
console.log(arr);
```
