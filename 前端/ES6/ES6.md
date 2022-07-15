

# ES6

###   **一、let**

#### 1、变量不能重复声明

> 同一个变量在同一作用域内不可重复声明，var可以重复声明

``` js
let star = '王阳明'
// let star = '王守仁'	//not defined
```

#### 2、块级作用域	全局、函数、eval

```js
if-else while for
{
    let girl = '霏霏'
}
console.log(gilr)
```

#### 3、不存在变量提升

> 变量需先声明再使用，var存在变量提升，可以先声明再使用，初始值为undefined

``` js
console.log(song)
let song = '快乐起床歌'
```

#### 4、不影响作用域链

> 在代码块中使用let，在代码块外调用不受影响

```js
function fn(){
    let statment = 'Hello Word'
    console.log(statment)
}
fn();
```



### 二、const

#### 1、声明时必须要赋予初始值

```js
const TEAM = 'Royle'
```

#### 2、一般常量用大写（潜规则）

```js
const A = '100'
```

#### 3、常量值不能修改

```js
const PLAYER = 'uzi'
```

#### 4、块级作用域

```js
if-else while for
{
    let girl = '霏霏'
}
console.log(gilr);	//此处输出报错
```

#### 5、数组和对象

> 对于数组和对象的元素的修改，不算做对常量的修改，不会报错。

```js
const PLAYERS = ['Uzi','Ming','Faker']
PLAYERS.push('XiaoHu')
```



### 三、变量的解构赋值

#### 1、数组的解构

```js
const F4 = ['张三','李四','王五','赵六']
let [zhang,Li,Wang,Zhao] = F4
console.log(zhang)
console.log(Li)
console.log(Wang)
console.log(Zhao)
```

#### 2、对象的解构

```js
const King = {
    firstName:'刘',
    lastName:'邦',
    tongyi:function(){
        console.log('我统一了中国，建立了汉王朝')
    }
}
let {firstName,lastName,tongyi} = King
console.log(firstName)
console.log(lastName)
console.log(tongyi)
//调用方法
tongyi()
```



### 四、模板字符串

#### 1、声明

```js
let str = `我也是一个字符串哦`
console.log(str, typeof str)
```

#### 2、内容中可以直接出现换行符

```js
let element = `<ul>
				<li>张三</li>
                <li>李四</li>
                <li>王五</li>
                <li>赵六</li>
               <ul>`
```

#### 3、变量拼接

```js
let star = 'Kobe Byrant'
let print = `${star} is a great basketball palyer`
console.log(print)
```



### 五、对象的简化写法

#### 1、写法

> ES6允许在大括号里面直接写入变量和函数，作为对象的属性和方法。
>
> 属性名或方法名要一一对应

```js
// ES6允许在大括号里面直接写入变量和函数，作为对象的属性和方法。
let name = '张三'
let change = function(){
    console.log('每天都要尝试去改变自己，让自己变得更好！');
}

const person = {
    // name:name,  
    name,
    // change:change()
    change,
    // improve:function(){...}
    improve(){
        console.log('提高自己')
    }
}
console.log(person,person.change(),person.improve())
```

### 六、箭头函数

> ES6 允许使用箭头（=>）定义一个函数以简化代码

#### 1、声明

```js
// 传统方式声明一个函数
let fnNormal = function(...params){

}
// 箭头函数
let fnArrow = (...params)=>{

}
```

#### 2、this

> this是静态的 this始终指向函数声明时所在作用域下的this的值

```js
function getName(){
    return console.log(this.name) 
}
let getName2 = ()=>{
    return console.log(this.name)
}
// 设置window对象的name属性
window.name = 'ES6'
const person = {
    name:'学习ES6'
}
// 直接调用
getName()   //this指向window
getName2()  //this指向window
// call方法调用
getName.call(person)    //this指向window
getName2.call(person)   //this指向函数
```

#### 3、不能构造实例对象

```js
let Student = (name,age)=>{
this.name = name
this.age = age
}

// let me = new Student('Peter',18)     //Student is not a constructor
// console.log(me)
```

#### 4、arguments

> 不能使用arguments变量

```js
let fn = ()=>{
    // console.log(arguments)   //arguments is not defined
}
fn()
```

#### 5、缩写

> 当参数只有一个的时候可以省略小括号

```js
let add = n =>{
    return n + n
}
console.log(add(8))		//16
```

> 当代码体只有一条语句时可以省略花括号，结果即为返回值

```js
let square = n => n * n
console.log(square(5))		//25
```



### 七、rest

> ES6引入rest参数，用于获取函数的实参，用来替代argument

#### 1、ES5获取实参的方式

```js
function stars(){
    console.log(arguments)  //arguments是一个Object实例对象
}
stars('刘德华','郭富城','张学友','黎明')
```

#### 2、ES6获取实参的方式

```js
function players(...args){
    console.log(args)   //args是一个数组对象
}
players('Kobe','T-mac','Iverson','Carter')
```

#### 3、rest参数必须是最后一个参数

```js
function fn(a,b,...args){
    console.log(a,b,args)
}
fn(1,2,3,4,5,6)     //1 2 (4) [3, 4, 5, 6]
```



### 八、扩展运算符

> 『...』扩展符能将『数组』转换为逗号分割的『参数序列』

#### 1、基本使用方法

```js
// 声明一个数组
const tfboys = ['王俊凯','易烊千玺','王源']
// 1、声明一个函数
function chunwan(){
    console.log(arguments)
}
chunwan(...tfboys)
```

#### 2、合并

```js
const basketballPlayers = ['Kobe','T-mac']
const footballPlayers = ['Messi','CR7']
const players = [...basketballPlayers,...footballPlayers]
console.log(players)    //['Kobe','T-mac','Messi','CR7']
```

#### 3、克隆

```js
const actors = ['胡歌','陈坤']
const stars = [...actors]
console.log(stars)  //['胡歌', '陈坤']
```

#### 4、将伪数组转换为数组

```js
let divs = document.querySelectorAll('div')
console.log(divs)   //伪数组：不能调用数组的方法
let divArr = [...divs]
console.log(divArr) //数组：可以调用数组的方法
```
