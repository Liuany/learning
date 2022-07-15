//1.单行箭头表达式（单行箭头表达式返回值不需要'{}'）
let single_foo = (a,b) => a + b;
//上述表达式等价于
let single_Foo = function (a,b) {
    return a + b;
}
console.log("单行箭头表达式结果为：" + single_foo(4,5));
console.log("多行常规表达式结果为：" + single_Foo(4,5));

//2.多行箭头表达式（多行箭头表达式返回值需要'{}',并且需要加return关键字）
let mul_foo = (a,b) => {
    if(true){
        return a * b;
    }
}
//上述表达式等价于
let mul_Foo = function (a,b) {
    if(true){
        let result = a * b;
        return result;
    }
}
console.log("多行箭头表达式结果为：" + mul_foo(10,20));
console.log("多行常规表达式结果为：" + mul_Foo(10,20));

//3.无参表达式
let no_foo = () => {}
//上述表达式等价于
let no_Foo = function () {}

//4.一个参数（无需使用'()'小括号）
let one_foo = arg => arg * arg
console.log("一个参数多行箭头表达式结果为：" + one_foo(10));
//eg:
let arr = [1,2,3,4,5];
console.log(arr.filter(value => value%2 == 0));
//上述表达式等价于
console.log(arr.filter(function (value) { return value %2 == 0}));

//5.常规表达式中的this关键字（在这个函数中setInterval指向的是setInterval对象）
function Foo (name) {
    this.name = name;
    console.log(this.name)
    setTimeout(function () {
        console.log(this);
    },200);
}
let FooResult = new Foo ('我是常规表达式');
//箭头表达式中的this关键字不会创建自己的this，它只会从自己的作用域链的上一层继承this
function foo (name) {
    this.name = name;
    console.log(this.name)
    setTimeout(() =>  {
        console.log(this);
    },100);
}
let fooResult = new foo ('我是箭头表达式');

//6.箭头函数嵌套（箭头函数柯里化）
let ADD1 = function (a,b) {
    return a + b
}

let ADD2 = function (a) {
    return function (b) {
        return a + b;
    }
}
//上述函数等价于
let ADD3 = (a) => (b) => a + b;
console.log("测试F1函数" + ADD1(9, 7));
console.log("测试F2函数" + ADD2(9)(7));
console.log("测试F3函数" + ADD3(9)(7));

