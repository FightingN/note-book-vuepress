[TOC]

## 面向对象

### 面向过程和面向对象

- 面向过程：关注的是**过程**中的每一步
  现实需求（吃蛋炒饭）：开始 → 买鸡蛋 → 买米 → 炒蛋 → 蒸米.......→ 蛋炒饭 → 结束
- 面向对象：关注的是**对象**能做什么，找对象做事
  现实需求：（吃蛋炒饭）: 老婆或老公或厨师做蛋炒饭（开始 → 买鸡蛋 → 买米 → 炒蛋 → 蒸米.......→ 蛋炒饭 → 结束）
- 注意：面向对象不是替代面向过程，而是对过程的高度封装。

### 如何面向对象编程

面向对象编程的概念：

> ​ Object Oriented Programming，简称 OOP ，是一种面向对象**编程开发思想** 。它将**真实世界各种复杂的关系** ，**抽象为一个个对象** ，然后由**对象之间**的**分工**与**合作**，完成对真实世界的模拟。
>
> ① 真实世界各种复杂的关系：盖房子
>
> ② 抽象为一个个对象（找对象）：找人，需要设计师、搬运工、砌墙师
>
> ③ 对象之间的分工：设计师设计图纸、搬运工搬砖，搬运材料、砌墙师砌墙
>
> ④ 对象之间的合作：搬运工搬砖给砌墙师用
>
> ⑤ 完成

面向对象编程的步骤：（重点）

1. 明确需求
2. 划分对象
3. 对象分工
4. 对象合作
5. 完成目标

### 面向对象的好处

- 适合大型项目的开发，提高开发效率
- 易于维护。

### 面向对象的特征

- **封装**：把过程封装到对象中
- **继承**：子承父业。减少代码冗余（减少代码量）
- [多态]：一种事物（动物），具有多种形态（一条狗、一只猫.....）。

## 二、类和对象

### 1 什么是类

- **生活中**：一类、种类
- **编程中**：
  - 类指的是抽象的名称：狗
  - class 关键字，ES6 之前没有类的概念。 我们现在学的是 ECMAScript3 和 ES5
  - 在 ES3 或 ES5 中通过**构造函数** 来创建对象
  - 构造函数：
    - 内置的：Object、Date、Array 等
    - 自定义：Dog
  - 总结：现阶段我们通过==构造函数== 来创建对象
  - new 关键字

### 2 什么是对象

- 生活中：万物皆对象。任何具体的事和物都可以看成对象
- 编程中：对象由**属性**和**方法**组成（或由键值对）。 具体的实例，实例对象
  - 属性：对象的静态特征，咱们班的班长，姓名、年龄、身高、性别
  - 方法：对象的功能特征，咱们班的班长，点名、写代码
  - 注意事项：
    - 方法的值用什么表示，用函数来表示
    - 对象方法中的 this，指向调用者。

### 3 类（构造函数）和对象的关系

- 类是对象的模板
- 对象是类的具体实例（通过关键字 instanceof 检测一个对象是否属于某一个类型）
  - 语法：对象名 instanceof 构造函数名; 返回布尔值
- 创建对象得通过类（构造函数）创建
- new 构造函数() → 具体的实例

```js
  <script>
    // 类： Object 构造函数 → 类 → 抽象的名词
    // 对象：new Object() 或 {} → 实例对象→ 具体的实例
    // 对象组成：属性和方法
    // 类和对象的关系：对象是类的一个实例，（对象属于类）
    var obj = {
      // 属性
      name:'张三',
      age:10,
      // 方法
      eat:function(){
        alert('我会吃....')
      },
      sayHi:function(){
        // 方法中的this指向调用者
        console.log('我叫' + this.name)
      }
    };

    obj.sayHi();


    // obj的构造函数是 Object
    console.log(obj instanceof Object);
  </script>
```

### 4 创建对象

- 语法：自定义构造函数

  > ```javascript
  > function 构造函数名(参数...){
  >     this.key = value；
  >     .......
  > }
  > // 注意规范：构造函数名首字母要大写  帕斯卡（每个单词首字母大写）  驼峰（从第二个单词开始首字母大写）
  > ```

- 语法：**new**关键字创建对象

  > ```javascript
  > var 对象名 = new 构造函数名(实参...);
  > ```

### 5 new 关键字的执行过程

1. 在内存中创建一个空对象
2. this 指向创建的对象
3. 向这个空对象中添加属性和方法
4. 返回当前的对象(默认返回值就是当前创建的对象)

### 6.构造函数和普通函数

- 相同点
  - 都是函数
- 不同点
  - 构造函数通过 new 关键字调用
  - 普通函数直接调用

```js
  <script>
    // 需求：每一个学生会自我介绍（叫什么、多大了）、敲代码、唱歌
    // 对象有什么属性？  姓名和年龄
    // 对象有什么方法？  自我介绍、敲代码、唱歌

    // 定义构造函数
    function Student(name,age) {
      // 属性
      this.name = name;
      this.age = age;
      // 方法
      this.sayHi = function(){
        console.log('我叫' + this.name + '，今年' + this.age);
      }
      this.writeCode = function(){
        console.log('我会编程！');
      }
      this.sing = function(){
        console.log("我会唱歌")
      }
    }


    // 创建对象
    // 一个函数是普通函数还构造函数，不是在定义时决定的，而是在调用时决定
    // Student();  → 普通函数
    var stu1 = new Student('张三',10);  // → 构造函数

    // 使用对象→ 使用对象的属性或使用对象的方法
    stu1.sayHi();
  </script>
```

## 三、原型

### 1.为什么要学习原型

- 前提：对象在内存中占据空间。对象的成员的数量可以决定对象在内存中占据空间的大小。
- 在对象中，属性一般是变化的。 方法都是 function，是不变的。
- 问题：对象的方法是不变的，每创建一个对象，都要存放 3 个方法，创建多个对象时，相对而言，会消耗内存。
- 原因：对象的方法是不变的
- 解决：想办法把不变的方法，抽取出来放在【原型】，让同类型的的对象共享即可。

### 2.什么是原型

- 原型就是一个对象，原型一直都在。
- 获取原型：
  - 语法：`构造函数名.prototype`

```js
<body>
  <script>

    // 定义构造函数
    function Student() {
      // 属性
      this.name = name;
      this.age = age;
    }

    // 原型是一个对象，本来就有。
    // 每定义一个函数，系统会为其分配一个原型
    // 获取原型：函数名.prototype。 原型内部默认有一个constructor,指向对应的构造器→ 构造函数
    var yx = Student.prototype;
    console.log(yx);
    // console.log(yx.constructor === Student);  //true




  </script>
</body>
```

### 3.构造函数和原型的关系

理论

- 构造函数可以通过 prototype 获取到原型
- 原型可以通过 constructor 找到构造函数

```js
 <script>

    // 【定义构造函数】
    function Student(name, age) {
      // 属性
      this.name = name;
      this.age = age;
    }

    // 【使用原型】
    var yx = Student.prototype;
    // 把方法添加到原型中。 对象.key = value;
    // 方法
    yx.sayHi = function () {
      console.log('我叫' + this.name + '，今年' + this.age);
    }
    yx.writeCode = function () {
      console.log('我会编程！');
    }
    yx.sing = function () {
      console.log("我会唱歌")
    }

    // 【创建对象】
    // 创建第1个学生对象
    var zs = new Student('张三', 10);
    // 创建第2个学生对象
    var ls = new Student('李四', 12);
    // 创建第3个学生对象
    var ww = new Student('王五', 20);
  </script>
```

### 4 原型的作用

- 节省内存。 因为原型中存放的成员（属性或方法），都可以被相关的构造函数所创建的对象==共享==。

### 5 实例对象和原型的关系

理论

> - // ① 首先，会从对象本身中去找
> - // ② 若对象中，找不到，则会通过`__proto__`所提供的原型地址，找原型
> - // ③ 去原型中查找。

```js
  <script>

    // 【定义构造函数】
    function Student(name, age) {
      // 属性
      this.name = name;
      this.age = age;
    }

    // 【使用原型】
    var yx = Student.prototype;
    // 把方法添加到原型中。 对象.key = value;
    // 方法
    yx.sayHi = function () {
      console.log('我叫' + this.name + '，今年' + this.age);
    }
    yx.writeCode = function () {
      console.log('我会编程！');
    }
    yx.sing = function () {
      console.log("我会唱歌")
    }

    // 【创建对象】
    // 创建第1个学生对象
    var zs = new Student('张三', 10);
    // zs.sayHi();
    // zs.sing();
    // console.log(zs);
    console.log(zs)

    // 对象在去访问或调用一个成员（属性或方法）时，过程是这样的：
    // 1. 先从对象自身查找，若查找不到
    // 2. 则会通过系统分配的__proto__（原型的地址）找到原型，去原型中查找要访问或调用成员
  </script>
```

![image](https://note.youdao.com/yws/public/resource/87878989158efcfd4b01af5369090c07/xmlnote/8577D46A4A444C84884D88A5D7FDC05E/13211)

### 6.认识 object

```js
<script>
  // 第一个构造函数：Object // 祖宗类 // 在js中任何类型的对象，都属于Object //
  Object 是构造函数 // Object.prototype console.log(document instanceof Object);
  console.log(console instanceof Object); var arr = new Array(); console.log(arr
  instanceof Array); console.log(arr instanceof Object);
</script>
```

### 7.原型链

![image](https://note.youdao.com/yws/public/resource/87878989158efcfd4b01af5369090c07/xmlnote/0A0397D3DC8045758364EC830E8C8C10/13219)
![image](https://note.youdao.com/yws/public/resource/87878989158efcfd4b01af5369090c07/xmlnote/0A9B29DD00DC44CB9C46126AEB75A974/13222)

## 四、继承介绍

### 1 什么是继承？

- 生活：子承父业
- 编程：类与类之间的关系。 子类继承父类中的成员。
  - 不用继承：
    - 学生类：姓名、年龄、性别、打招呼、跑
    - 医生类：姓名、年龄、性别、打招呼、跑
    - 老师类：姓名、年龄、性别、打招呼、跑
    - ....
  - 使用继承：
    - 人类[父类]：姓名、年龄、性别、打招呼、跑
    - 学生类[子类]→ 人类[父类]
    - 医生类[子类]→ 人类[父类]
    - 老师类[子类]→ 人类[父类]
    - ......

### 2 继承的作用

减少代码或简化代码。

## 五、原型继承

### 1.如何实现原型继承？

- 先更改子类的原型 prototype 指向一个**new 父类()** 对象。
  - 子类.prototype = new 父类();
- 再给子类的原型设置一个 constructor 指向子类
  - 子类.prototype.constructor = 子类
- 然后用子类构造函数 new 出来的实例对象就可以调用原型继承的方法

```js
   <script>
    // 【人类】- 父类
    function Person() {
      // 属性
      this.name = '姓名';
      this.age = 10;
      this.gender = '男';
    }
    Person.prototype.sayHi = function () {
      console.log('我叫' + this.name);
    }
    Person.prototype.run = function () {
      console.log('我会跑~~~');
    }
    // 【学生类】-子类→继承人类
    function Student() {
      this.stuId = '1111';
    }
    // ① 更改子类构造函数的prototype指向父类的一个具体实例
    Student.prototype = new Person();
    // ② 为了更加完善，在父类的实例对象中添加一个constructor指向子类
    Student.prototype.constructor = Student;
    // 创建一个学生对象
    var stu = new Student();
    console.log(stu);
  </script>
```

### 2.优缺点

优点：完美继承了方法

缺点：无法完美继承属性

## 六、借用继承

### 1 call 方法

- 语法：`函数名.call(调用者,函数实参，函数的实参...)`;
- 作用：该函数会立即执行，函数体内的 this 在被 call 时，this 指向调用者

```js
  <script>
    // 函数
    function Person(name,age,gender) {
      console.log(this===obj);
      this.name = name;
      this.age = age;
      this.gender = gender;
    }

    // 调用函数0
    // Person('张三',10,'男');
    // 普通函数内部this默认指向window


    // 【需求】:在调用执行Person时，更改函数内部this指向obj，实现把name、age、gender添加到obj中
    var obj = {};
    // 想办法实现Person函数内部this指向obj
    // 实现方式：函数名.call(调用者,函数实参，函数的实参...)
    // 在这一次调用时，函数内部this指向obj
    Person.call(obj,'张三',10,'男');

  </script>
```

### 2 使用 call 实现借用继承**\*\***

如何实现：

> - 在子类中，通过 call 调用父类，并更改父类中 this 的指向子类对象。

```js
  <script>
    // 【人类】- 父类
    function Person(name,age,gender) {
      // 属性
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
    Person.prototype.sayHi = function () {
      console.log('我叫' + this.name);
    }
    Person.prototype.run = function () {
      console.log('我会跑~~~');
    }


    // 【学生类】-子类→继承人类
    function Student(name,age,gender,stuId) {
      // 在被new时，在Student中的this指向当前创建的对象 stu、stu2
      this.stuId = stuId;
      // var obj = this;
      // 借用
      // Person.call(obj,name,age,gender);
      // 把this放在这里，相当于把要给学生的实例对象的地址放在这里
      Person.call(this,name,age,gender);
    }


    // 创建一个学生对象
    var stu = new Student('张三',10,'男',10086);
    // 创建一个学生对象
    var stu2 = new Student('李四',20,'女',10010);


    // 结论：如何实现借用继承
    // 在子类构造函数中，使用call语法方式借用父类函数，更改父类函数中this指向子类的一个实例对象
    // 语法：父类函数名.call(子类实例,实参,实参....)
  </script>
```

优缺点：

> ​ // 优点：完美继承了属性
>
> ​ // 缺点：无法继承方法。

## 七、组合继承

如何实现

> 原型继承和借用继承同时使用。

```js
  <script>
    // 【人类】- 父类
    function Person(name,age,gender) {
      // 属性
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
    Person.prototype.sayHi = function () {
      console.log('我叫' + this.name);
    }
    Person.prototype.run = function () {
      console.log('我会跑~~~');
    }


    // 【学生类】-子类→继承人类
    function Student(name,age,gender,stuId) {
      this.stuId = stuId;
      // 【借用继承】
      Person.call(this,name,age,gender);
    }
    // 【原型继承】
    Student.prototype = new Person();
    Student.prototype.constructor = Student;


    // 创建一个学生对象
    var stu1 = new Student('张三',10,'男',10086);
    // 创建一个学生对象
    var stu2 = new Student('李四',20,'女',10010);
   </script>
```

## 八、函数内部 this 的指向

- this 在函数中指向谁，不是在定义函数时决定的，而是在调用函数时决定的。

### 1 普通函数中 this 的指向

- this 指向 window

```js
// 【在普通函数中this指向window】
function fn() {
  console.log(this);
}
fn();

var fn = function () {
  console.log(this);
};
fn();

(function () {
  console.log(this);
})();

function fn1() {
  function fn2() {
    console.log(this);
  }
  fn2();
}
fn1();
```

### 2.定时器中 this 的指向

- this 指向 window

```js
// 【在定时器中this指向windnow】
setTimeout(function () {
  console.log(this);
}, 1000);
setInterval(function () {
  console.log(this);
}, 1000);
```

### 3 构造函数中 this 指向

- this 指向当前创建的对象-在内存中开辟的空间

```js
// 【在构造函数中this指向当前创建的对象】
// 要通过new关键字执行过程理解
function Student(name, age) {
  this.name = name;
  this.age = age;
}

Student.prototype.sayHi = function () {
  console.log("我叫" + this.name);
};

var stu1 = new Student("张三", 10);
var stu2 = new Student("李四", 10);
```

### 4.方法中 this 指向

- 对象.方法名(); 指向调用者

```js
// 【在方法中，this指向调用者。  对象.方法（）】
stu1.sayHi();
stu2.sayHi();
```

### 5 事件处理程序中 this 指向

- this 指向事件源

```js
// 【在事件处理程序中，this指向事件源】
document.onclick = function () {
  console.log(this);
};
```

## 九、改变 this 的指向

### 1 call 方法

- 语法：==函数名.call(调用者,参数 1...)==
- 作用：函数被借用时，会立即执行，并且函数体内的 this 会指向借用者或调用者

```js
function fn(name, age) {
  this.name = name;
  this.age = age;
}

// 对象字面量
var obj = {};
fn.call(obj, "李四", 11);
```

### 2 apply 方法

- 语法：==函数名.apply(调用者,[参数 1...])==
- 作用：函数被借用时，会立即执行，并且函数体内的 this 会指向借用者或调用者

```js
function fn(name, age) {
  this.name = name;
  this.age = age;
}

// 对象字面量
var obj = {};
fn.apply(obj, ["李四", 11]);
```

### 3 bind 方法

- 语法：==函数名.bind(调用者,参数 1...)==
- 作用：函数被借用时，不会立即执行，而是返回一个新的函数。需要自己手动调用新的函数

```js
function fn(name, age) {
  this.name = name;
  this.age = age;
}

// 对象字面量
var obj = {};
fn.bind(obj, "李四", 11);
```

```js
<body>
  <script>
    // 函数
    function fn(a, b) {
      this.a = a;
      this.b = b;
    }
    // 对象
    var obj = {};
    // 需求: 在调用时，更改函数fn内部this指向obj

    // 【call方法】
    // - 语法：函数名.call(呼叫者,参数1...)
    // - 作用：函数被借用时，会立即执行，并且函数体内的this会指向借用者或呼叫者
    // fn.call(obj,100,200);

    // 【apply方法】
    // - 语法：函数名.apply(呼叫者,[参数1...])
    // - 作用：函数被借用时，会立即执行，并且函数体内的this会指向借用者或呼叫者
    // fn.apply(obj,[300,600]);

    // 【bind方法】
    // - 语法：函数名.bind(呼叫者,参数1...)
    // - 作用：函数被借用时，不会立即执行，而是返回一个新的函数。需要自己手动调用新的函数
    // 接收新的函数
    var newFn = fn.bind(obj,1000,2000);
    // 直接调用
    newFn();
    // fn.bind(obj,10000,50000)();
  </script>
</body>
```

## 十、函数的其他成员
