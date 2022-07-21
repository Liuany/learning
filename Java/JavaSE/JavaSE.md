# 语法

## 注释

#### 单行注释

```java
// 这是一段单行注释
```

#### 多行注释

```java
/*
这是多行注释的第一行
这是多行注释的第二行
这是多行注释的第三行
这是多行注释的第四行
这是多行注释的第五行
*/
```

```java
/**
*这是多行注释的第二种方式，可以为注释添加说明
*@Description 描述
*@Author 作者是谁
*/
```



## 关键字

> Java关键字是预先定义的具有特别意义的标识符，也可以叫Java保留字，Java关键字不能用作变量名、方法名、类名包名和参数

| Java关键字类别       | Java关键字   | 关键字含义                                                   |
| -------------------- | ------------ | ------------------------------------------------------------ |
| 访问控制             | private      | 一种访问控制方式：私用模式，访问控制修饰符，可以应用于类、方法或字段（在类中声明的变量） |
| 访问控制             | protected    | 一种访问控制方式：保护模式，可以应用于类、方法或字段（在类中声明的变量）的访问控制修饰符 |
| 访问控制             | public       | 一种访问控制方式：共用模式，可以应用于类、方法或字段（在类中声明的变量）的访问控制修饰符。 |
| 类、方法和变量修饰符 | abstract     | 表明类或者成员方法具有抽象属性，用于修改类或方法             |
| 类、方法和变量修饰符 | class        | 声明一个类，用来声明新的Java类                               |
| 类、方法和变量修饰符 | extends      | 表明一个类型是另一个类型的子类型。对于类，可以是另一个类或者抽象类；对于接口，可以是另一个接口 |
| 类、方法和变量修饰符 | final        | 用来说明最终属性，==表明一个类不能派生出子类==，或者成员方法不能被覆盖，或者成员域的值不能被改变，用来定义常量 |
| 类、方法和变量修饰符 | implements   | 表明一个类实现了给定的接口                                   |
| 类、方法和变量修饰符 | interface    | 接口                                                         |
| 类、方法和变量修饰符 | native       | 用来声明一个方法是由与计算机相关的语言（如C/C++/FORTRAN语言）实现的 |
| 类、方法和变量修饰符 | new          | 用来创建新实例对象                                           |
| 类、方法和变量修饰符 | static       | 表明具有静态属性                                             |
| 类、方法和变量修饰符 | strictfp     | 用来声明FP_strict（单精度或双精度浮点数）表达式遵循IEEE 754算术规范 |
| 类、方法和变量修饰符 | synchronized | 表明一段代码需要同步执行                                     |
| 类、方法和变量修饰符 | transient    | 声明不用序列化的成员域                                       |
| 类、方法和变量修饰符 | volatile     | 表明两个或者多个变量必须同步地发生变化                       |
| 程序控制             | break        | 提前跳出一个块                                               |
| 程序控制             | continue     | 回到一个块的开始处                                           |
| 程序控制             | return       | 从成员方法中返回数据                                         |
| 程序控制             | do           | 用在do-while循环结构中                                       |
| 程序控制             | while        | 用在循环结构中                                               |
| 程序控制             | if           | 条件语句的引导词                                             |
| 程序控制             | else         | 用在条件语句中，表明当条件不成立时的分支                     |
| 程序控制             | for          | 一种循环结构的引导词                                         |
| 程序控制             | instanceof   | 用来测试一个对象是否是指定类型的实例对象                     |
| 程序控制             | switch       | 分支语句结构的引导词                                         |
| 程序控制             | case         | 用在switch语句之中，表示其中的一个分支                       |
| 程序控制             | default      | 默认，例如：用在switch语句中，表明一个默认的分支。Java8 中也作用于声明接口函数的默认实现 |
| 错误处理             | try          | 尝试一个可能抛出异常的程序块                                 |
| 错误处理             | catch        | 用在异常处理中，用来捕捉异常                                 |
| 错误处理             | throw        | 抛出一个异常                                                 |
| 错误处理             | throws       | 声明在当前定义的成员方法中所有需要抛出的异常                 |
| 包相关               | import       | 表明要访问指定的类或包                                       |
| 包相关               | package      | 包                                                           |
| 基本类型             | boolean      | 基本数据类型之一，声明布尔类型的关键字                       |
| 基本类型             | byte         | 基本数据类型之一，字节类型                                   |
| 基本类型             | char         | 基本数据类型之一，字符类型                                   |
| 基本类型             | double       | 基本数据类型之一，双精度浮点数类型                           |
| 基本类型             | float        | 基本数据类型之一，单精度浮点数类型                           |
| 基本类型             | int          | 基本数据类型之一，整数类型                                   |
| 基本类型             | long         | 基本数据类型之一，长整数类型                                 |
| 基本类型             | short        | 基本数据类型之一,短整数类型                                  |
| 基本类型             | null         | 空，表示无值，不能将null赋给原始类型（byte、short、int、long、char、float、double、boolean）变量 |
| 基本类型             | true         | 真，boolean变量的两个合法值中的一个                          |
| 基本类型             | false        | 假，boolean变量的两个合法值之一                              |
| 变量引用             | super        | 表明当前对象的父类型的引用或者父类型的构造方法               |
| 变量引用             | this         | 指向当前实例对象的引用，用于引用当前实例                     |
| 变量引用             | void         | 声明当前成员方法没有返回值，void可以用作方法的返回类型，以指示该方法不返回值 |
| 保留字               | goto         | 保留关键字，没有具体含义                                     |
| 保留字               | const        | 保留关键字，没有具体含义，是一个类型修饰符，使用const声明的对象不能更新 |



## 标识符

> 在java语言中，标识符常用来给类、对象、变量、方法、接口、自定义数据类型等命名的。

#### 标识符命名规则

- 所有标识符都应该以字母（A-Z 或者 a-z），美元符($)、或者下划线(_)开始
- 首字符之后可以是字母（A-Z 或者 a-z），美元符($)、或者下划线(_)或数字的任何字符组合
- 不能使用关键字作为变量名或方法名
- 标识符是==大小写敏感==的

```java
public class Tags {
    // 这里myName是一个标识符
    private String myName = "'Jobs'";

    public static void main(String[] args) {
        // 这里的bean是一个标识符
        Tags bean = new Tags();
        bean.getName();
    }

    public void getName() {
        System.out.println("my name is " + this.myName);
    }
}
```



##  数据类型

> 强类型语言：要求变量的使用要严格符合规定，所有变量都必须先定义后才能使用。

> 若类型语言：例如javaScript。其数据的使用更加自由，效率更高，但安全性差。

#### 基本数据类型

###### 八大基本数据类型

- 整数类型：

  byte：-2^7 ~ 2^7-1，即-128 ~ 127。1字节。Byte。末尾加B。

  short：-2^15 ~ 2^15-1，即-32768 ~ 32767。2字节。Short。末尾加S。

  int：-2^31 ~ 2^31-1，即-2147483648 ~ 2147483647。4字节。Integer。

  long：-2^63 ~ 2^63-1，即-9223372036854774808 ~ 9223372036854774807。8字节。Long。末尾加L。（也可以不加L）

- 浮点类型：

  float：4字节。Float。末尾加F。（也可以不加F）

  double：8字节。Double。

- 字符类型：

  char：2字节。Character。

- 布尔类型：

​		bealon：true & false

```java
// 整型
byte num1 = 20;
short num2 = 100;
int num3 = 100001;
long num4 = 200000000000l;

// 浮点型
float str1 = 4.1f;
double str2 = 3.1415926;

// 字符型
char letter = 'A';

// 布尔型
boolean isAuth = true;
boolean access = false;
```

```Java
/**
* @ Description:基本数据类型拓展
* @ Author: Kevin
* @ Date: 2022-07-18
*/
public static void expand(){
    // 整型拓展： 二进制：0b   八进制：0   十六进制：0x
    int num1 = 10;  // 十进制
    int num2 = 0b10;    // 二进制
    int num3 = 010;    //八进制
    int num4 = 0x10;    //十六进制

    System.out.println("****************************整型拓展begin****************************");
    System.out.println("十进制[10]：" + num1);   // 10
    System.out.println("二进制[0b10]：" + num2);   // 2
    System.out.println("八进制[010]：" + num3);   // 8
    System.out.println("十六进制[0x10]：" + num4);   // 16
    System.out.println("*****************************整型拓展end*****************************\n");

    // 浮点型拓展
    // 由于float数据类型是一个有限的、离散的、含误差的、大约的、接近但不等于的数据，因为用来作比较时常常会引发误差
    // 解决方法为避免使用float来作比较，使用BigDecimal类来进行比较
    // 转义字符：eg:\t 制表符  \n 换行符 ...
    float f = 0.1f;
    double d = 1.0 / 10;

    float f1 = 12346542134654654f;
    float f2 = f1 + 1;
    System.out.println("****************************浮点拓展begin****************************");
    System.out.println(f);
    System.out.println(d);
    System.out.println(f == d);
    System.out.println(f1 == f2);
    System.out.println("*****************************浮点拓展end*****************************\n");

    // 字符拓展
    // 字符的本质是整型，因此可以进行相互转换和比较，其对比的规则是参照Unicode表
    // Unicode编码：Unicode表 97 = a 65 = A
    // 补充：excel最初的版本最多只能有2^16=65536行数据
    char c1 = 'a';
    char c2 = '中';
    char c3 = '\u0061'; // Unicode编码
    System.out.println("****************************字符拓展begin****************************");
    System.out.println(c1);
    System.out.println((int) c1);    // 强制转换
    System.out.println(c2);
    System.out.println((int) c2);    // 强制转换
    System.out.println(97 == c1);   // 不作强制转换依然相等
    System.out.println((int) 'A');  // 65
    System.out.println(c3);
    System.out.println("*****************************字符拓展end*****************************\n");
}
```



###### 字节

> 字节（Byte）是计算机信息技术用于计量存储容量的一种计量单位，也表示一些计算机编程语言中的数据类型和语言字符 。一个字节存储8位无符号数，储存的数值范围为0-255。如同字元一样，字节型态的变数只需要用一个位元组（8位元）的内存空间储存。

- 位（bit）：计算机内部储存的最小单位，eg：11001100是一个八位二进制数。
- byte（位）：是计算机中数据处理的基本单位，习惯上用B来表示。
- 1B（byte）= 8bit（位）
- 字符：是指计算机中使用的字母、数字、字和符号

> 1bit表示一位	1Byte表示一个字节 1B = 8b	1024B = 1KB	1024KB = 1M	1024M = 1G	1024G = 1T 



###### 基本类型间的转换

> 由于Java是强语言类型语言，所以要进行有些运算的时候，需要用到类型转换。

- 不能对布尔值进行转换。
- 不能把对象类型转成不相干的类型。
- 把高容量类型转换成低容量类型时，需要强制转换，==低容量类型转换成高容量类型时则自动转换==。
- 转换时可能出现内存溢出或者精度问题。

```java
/**
* @ Description:类型转换
* @ Author: Kevin
* @ Date: 2022-07-18
*/
public static  void transform() {
    // 由于Java是强语言类型语言，所以要进行有些运算的时候，需要用到类型转换
    // 不能对布尔值进行转换
    // 不能把对象类型转成不相干的类型
    // 把高容量类型转换成低容量类型时，需要强制转换，低容量类型转换成高容量类型时则自动转换
    // 转换时可能出现内存溢出或者精度问题

    // 由高转低
    int i  = 128;
    byte b = (byte) i;  // 内存溢出
    System.out.println(b);  // -128,由于byte的最大值为127，但强转的值大于最大值时，将出现内存溢出或者精度问题

    System.out.println((int) 36.5);     //36
    System.out.println((int) -45.12f);  //-45 向上取整

    char c = 'a';
    int d = c + 1;
    System.out.println(d);  //98
    System.out.println((char) d);   //b

    // JDK7新特性，数字之间可以用下划线分割
    int salary = 1000_000_000;
    int years = 20;
    int total = years * salary;     // 超过int最大值，内存溢出
    long total1 = years * salary;   // 计算完之后再作强制转换是将溢出后的值进行转换
    long total2 = years * (long)salary;     // 先作转换，解决了精度问题后再计算，结果正确
    System.out.println(total);  // -1474836480
    System.out.println(total1); // -1474836480
    System.out.println(total2); // 20000000000
}
```



## 变量

> 变量就是可以变化的量，在内存中定义一块区域，其值可以改变。

- Java是一种强类型语言，每个变量都必须声明其类型，类型可以是基本类型，也可以是引用类型。
- Java变量是程序中最基本的存储单元，其要素包括变量名，变量类型和作用域。
- 可以使用逗号分割开来声明多个变量，==但不建议这么做==。
- 变量名必须是合法的标识符。
- 变量声明是一条完整的语句，因此每一个声明都必须以分好结束。

#### 类变量

> 类变量定义在类内，方法体之外，必须用static修饰词进行修饰，作用域为整个类。

#### 实例变量

> 也称之为成员变量，定义在类内，方法体之外，作用域为整个类。

#### 局部变量

> 定义在方法体内，必须声明和初始化，其作用域仅限于方法体。

#### 常量

> 常量的隶属于类，其生命周期与类同步，常量一旦定义其值就不可以改变。

#### 变量命名规则

- 所有变量、方法、类名都应==见名知意==
- 类成员变量：首字母小写和驼峰原则：monthSalary，除第一个字母小写外，后面单词的首字母大写
- 局部变量：首字母小写和驼峰原则
- 常量：大写字母和下划线：MAX_VALUE
- 类名：首字母大写和驼峰原则：Father，GodFather
- 方法名：首字母小写和驼峰原则



## 运算符

- 算术运算符：+，-，*，/，%，++，--
- 赋值运算符：=
- 关系运算符：>，<，>=，<=，!=，instanceof
- 逻辑运算符：&&，||，!
- 条件运算符（三目表达式）：条件语句 ? [如果为真] 结果1 : [如果为假] 结果2
- 扩展赋值运算：+=，-=，*=，/=



## 方法

#### 定义

> 方法是语句的集合，它们在一起执行一个功能

- 方法是解决一类问题的步骤的有序组合
- 方法包含于类或对象中
- 方法在程序中被创建，在其他地方被引用

> 设计方法的原则：方法的本意是功能块，就是实现某个功能的语句块集合。我们设计方法的时候，最好保持方法的原子性，就是一个方法只完成一个功能，这样利于我们后期的拓展。

- 方法命名规则：方法名首字母小写 + 小驼峰

```java
修饰符 返回值类型 方法名（参数类型 参数名, ...params）{
	...
	方法体
	...
	return 返回值;
}
```

1. 修饰符：修饰符，这是可选的，告诉编译器如何调用该方法。定义了该方法的访问类型。
2. 返回值类型：方法可能会有返回值。returnValueType是方法返回值的数据类型。有些方法执行所需的操作，但没有返回值。在这种情况下returnValueType是关键字viod。
3. 方法名：是方法的实际名称。方法名和参数表共同构成方法签名。
4. 参数类型：参数像是一个占位符。当方法被调用时，传递值给形参。这个值被称为实参或变量。参数列表是指方法的参数类型、顺序和参数个数。参数是可选的，方法可以不包含任何参数。
   - 形式参数：在方法被调用时被用于接受外界参数。
   - 实参：调用方法时实际传给方法的参数。
5. 方法体：方法体包含具体的语句，定义该方法的功能。

#### 方法的重载

> 方法重载就是在一个类中，有相同函数名称，但形参不同的函数。

- 方法重载的原则
  1. 方法名称必须相同。
  2. 参数列表必须不同（个数不同、类型不同、参数排列顺序不同，满足其中一个或者多个都可以）。
  3. 方法的返回值类型可以相同，也可以不同。
  4. 仅仅返回值类型不同不足以成为方法的重载。

- 实现理论

  方法名称相同时，编译器会根据调用方法的参数个数，参数类型等逐个匹配，以选择对应的方法，如果匹配失败，则编译器报错。

```java
public class $01_OverLoading {

    public static void main(String[] args) {
        int res1 = bigger(10, 20);
        System.out.println(res1);   // 20
        double res2 = bigger(10.0, 20.0);
        System.out.println(res2);   // 20.0
        double res3 = bigger(10, 20);   //虽然传入的是整型，但由于返回值为浮点型，因此编译器会将实参强转为浮点型
        System.out.println(res3);   // 20.0
    }

    public static int bigger(int a, int b){
        int result = 0;
        if(a > b){
            result = a;
        }else if(a < b){
            result = b;
        }
        return result;
    }

    public static double bigger(double a, double b){    //参数类型不同的重载
        double result = 0;
        if(a > b){
            result = a;
        }else if(a < b){
            result = b;
        }
        return result;
    }

    public static  int bigger(int a, int b, String c){     //参数数量不同的重载
        // 方法体
        return 0;
    }

    public static int bigger(String c, int a, int b){       //参数顺序不同的重载
        // 方法体
        return 0;
    }
}
```



#### 可变参数

> JDK1.5之后有的新特性，在方法的声明中允许在指定类型后加一个省略号（...）用于传入同类型不限量的参数个数。

- 一个方法中只能指定一个可变参数，它必须是方法的最后一个参数。任何普通参数必须在它之前声明

```java
public static void main(String[] args) {
    getInfo("张三", "李四", "王五");
}

public static void getInfo(String name, String ...params){
    System.out.println(name);
    for(int i=0;i<params.length;i++){
        System.out.println(params[i]); // 张三 李四 王五
    }
}
```



#### 递归

> 递归就是方法自己调用自己，由于递归设计不合理非常容易造成内存溢出问题，因此应当避免使用。

- 递归头：什么时候不调用自身方法。如果没有头，将陷入死循环。
- 递归体：什么时候需要调用自身方法。

```java
public static void main(String[] args) {
    long result = factorial(5);
    System.out.println(result);		//120
}

//阶乘
public static long factorial(int num){
    if(num == 1){
        return 1;
    }else{
        return num * factorial(num - 1);
    }
}
```



## 数组

> 数组是相同类型数据的有序集合，数组描述的是相同类型的若干数据，按照一定的先后次序排列组合而成。其中，每一个数据称作一个数组元素，每个数组元素可以通过一个下标来访问他们。

#### 数组的声明和创建

- 首先必须声明数组变量，才能在程序中使用数组

```java
int[] nums;		// 选方法，定义一个int类型的数组
int nums2[];		// 推荐方法，定义一个int类型的数组

int matrixArray[][]	// 义一个int类型的二维数组
```

- Java语言使用new操作符来创建数组

```java
int[] arrayInt = new int[5];    // 创建一个长度为5的int类型数组

int arrayInt2[] = new int[5];    // 不推荐方法

int[][] matrixArray = new int[5][10];    // 创建一个5*10的二维int类型数组
```

- 数组使用下标来访问数组元素

```java
int[] arrayInt = new int[5];
arrayInt[0] = 1;
arrayInt[1] = 2;
arrayInt[2] = 3;
arrayInt[3] = 4;
arrayInt[4] = 5;	
System.out.println(arrayInt[2]);    // 3

// 数组求和
int sum = 0;
for(int i=0;i<arrayInt.length;i++){
    sum += arrayInt[i];
}
System.out.println(sum);    //15
```

#### 数组的基本特点

1. 其长度是确定的。数组一旦被创建，它的==大小就是不可以改变的==。
2. 其元素必须是相同类型，==不允许出现混合类型==。
3. 数组的元素可以是任何数据类型，包括基本类型和引用类型。
4. 数组变量属于引用类型，数组也可以看成是对象，数组中的每个元素相当于该对象的成员变量。
5. 数组本省就是对象，Java中对象是存储在堆中的，因此数组无论保存原始类型还是其他对象类型，数组本省是在堆中的。

#### 数组越界

- 下标合法区间==[0, length - 1]==，如果越界就会报错
- ArrayIndexOutOfBoundsException：数组下标越界异常

#### Arrays工具类

```java
int[] a = {5, 6, 45, 984, 21, 621};
// 打印数组
System.out.println(Arrays.toString(a));     // [5, 6, 21, 45, 621, 984]
// 排序
Arrays.sort(a);
System.out.println(Arrays.toString(a));     // [5, 6, 21, 45, 621, 984]
// 填充数据
Arrays.fill(a, 2, 4, 0);
System.out.println(Arrays.toString(a));     // [5, 6, 0, 0, 621, 984] 此时是排序后的数组
```

#### 冒泡排序

> 冒泡排序是数组的八大排序中最为有名的排序方法，通过逐一比较，交换位置得到数组的排序结果。

1. 比较数组中，两个相邻元素，如果第一个比第二个大，则==交换他们的位置==。
2. ==每一次比较，都会产生出一个最大，或者最小值。==（实际上就是把本轮比较的最大值或者最小值放到最后一位）。
3. 下一轮循环可以减少一次排序，因为当前最值已在末尾。
4. 依次循环，直到结束。

```java
public static void main(String[] args) {
    int[] nums = {23, 15, 456, 69, 32, 6,45, 92, 115};
    int[] result = sort(nums);
    System.out.println(Arrays.toString(result));	// [6, 15, 23, 32, 45, 69, 92, 115, 456]
}

public static int[] sort(int[] array){
    // 声明临时变量
    int temp;
    for(int i=0;i<array.length;i++){
        // 判断是否已经排好序
        boolean isDone = false;
        for(int j=0;j<array.length-1-i;j++){
            if(array[j]>array[j+1]){	// 若改为array[j]<array[j+1]则为降序排序
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                isDone = true;
            }
        }
        if(!isDone){    // 优化手段：如果isDone的值为false，说明本轮比较未发生位置变化，则排序已经完成，跳出循环。
            break;
        }
    }
    return array;
}
```

#### 稀疏数组

> 稀疏数组可以看作是普通数组的压缩,当普通数组只有少量有效数据时,可以使用稀疏数组的方式存储,从而达到节省空间的目的。

###### 稀疏数组的处理方式

- 记录一共有几行几列，有多少不同值。
- 把具有不同值的元素和行列及值记录在一个小规模的数组中，从而缩小程序的规模。

###### 模型

<img src="C:\Users\Administrator\Desktop\学习\images\棋盘.png" alt="棋盘" style="zoom: 33%;" />                                    <img src="C:\Users\Administrator\Desktop\学习\images\稀疏数组模型.png" alt="稀疏数组模型" style="zoom:80%;" />

```java
public static void main(String[] args) {
    // 创建棋盘
    int[][] board = new int[12][12];
    boardInit(board);
    printArray(board);
    // 将棋盘转为稀疏数组
    int[][] sparseArray = transferSparse(board);
    // 打印稀疏数组
    printArray(sparseArray);
    // 将稀疏数组转换成棋盘
    printArray(reduceSparse(sparseArray));

}

/**
* @description 棋盘初始化
* @param board
* @return
*/
public static int[][] boardInit(int[][] board){
    // 白子
    board[2][3] = 1;
    board[7][1] = 1;
    board[4][5] = 1;
    board[2][6] = 1;
    board[9][8] = 1;

    //黑子
    board[6][5] = 2;
    board[7][4] = 2;
    board[4][4] = 2;
    board[2][1] = 2;
    board[10][8] = 2;
    return board;
}

/**
* @description 将数组转换成稀疏数组
* @param board
* @return
*/
public static int[][] transferSparse(int[][] board){
    int[][] sparseArray;
    int count = 0;
    for (int i = 0; i < board.length-1; i++) {
        for (int j = 0; j < board[0].length-1; j++) {
            if(board[i][j] != 0){
                count ++;
            }
        }
    }

    sparseArray = new int[count+1][3];
    sparseArray[0][0] = board.length;
    sparseArray[0][1] = board[0].length;
    sparseArray[0][2] = count;

    int line = 0;
    for (int i = 0; i < board.length; i++) {
        for (int j = 0; j < board[0].length; j++) {
            if(board[i][j] != 0){
                line ++;
                sparseArray[line][0] = i;
                sparseArray[line][1] = j;
                sparseArray[line][2] = board[i][j];
            }
        }
    }
    return sparseArray;
}

/**
* @description 将稀疏数组还原成棋盘
* @param sparseArray
* @return
*/
public static int[][] reduceSparse(int[][] sparseArray){
    int[][] board = new int[sparseArray[0][0]][sparseArray[0][1]];
    for (int i = 1; i < sparseArray.length; i++) {
        board[sparseArray[i][0]][sparseArray[i][1]] = sparseArray[i][2];
    }
    return board;
}

public static void printArray(int [][] array){
    System.out.println("*********************************************");
    for(int[] line : array){
        for(int cell : line){
            System.out.print(cell + "\t");
        }
        System.out.println();
    }
    System.out.println("*********************************************");
    System.out.println();
}
```



# 面向对象

> 物以类聚，人以群分。面向对象编程（Object-Oriented Programming, OOP）以类的方式组织代码，以对象的形式封装数据。

- 从认识论角度考虑是先有对象后有类。对象，是具体事物。类，是抽象的，是对对象的抽象。
- 从代码运行角度考虑是先有类后有对象。类是对象的模板。

#### 类

> 类是一种抽象的数据类型，它是对某一类事物整体描述/定义，但是并不能代表某一具体的事物。

- 类是抽象出来的一类事物的模型。
- 类包含构造器、成员变量和方法体。

```java
public class Student {

    // 无参构造，当一个类没有写任何构造方法时，无参构造是默认的构造器
    public Student(){

    }

    // 有参构造，可以重载
    public Student(String name){
        this.name = name;
    }

    // 成员变量
    String name;
    int age;

    // 方法体
    public void study(){
        System.out.println(this.name + "在学习");
    }
}
```

#### 对象

> 对象是抽象概念的具体实例。

- 使用new关键字实例化对象，除了分配内存空间外，还会给创建好的对象进行默认初始化及对类中的对象进行调用。
- 实例化的对象储存在堆空间中，其引用地址则保存在栈空间中。

```java
// 类：抽象的，必须实例化才能使用
// 类实例化后会返回一个自己的对象
// James、Jack对象就是Student的具体实例
Student James = new Student();
Student Jack = new Student();

James.name = "James";   // James在学习
Jack.name = "Jack";     // Jack在学习

James.study();
Jack.study();

James.age = 18;
Jack.age = 24;
System.out.println(James.age);  // 18
System.out.println(Jack.age);   // 24
```

#### 构造器

> 用于类实例化时初始化一些数据

- 使用new关键字实例化对象必须要有构造器。
- 必须和类的名字相同。
- 不能有返回值，也不能写void。
- 分为无参构造器有有参构造器。在未定义无参构造器时程序会为类自动生成一个无参构造器，实例化对象时若未传入任何参数则默认调用无参构造器，有传入参数则调用对应的有参构造器，有参构造器允许重载。
- IDEA可以使用==Alt+Insert==来快捷生成构造器

#### 封装

> 程序设计追求==”高内聚，低耦合“==，高内聚就是内部数据操作细节自己完成，不允许外部干涉；低耦合就是仅暴露少量的方法给外部使用。通常，禁止直接访问一个对象中数据的实际表示，而通过操作接口来访问，这称为信息隐藏，即属性私有。

###### 封装的好处

- 提高程序的安全性，保护数据
- 隐藏代码的实现细节
- 统一接口
- 提升系统的可维护性

```java
public class Animal {
    // 属性私有
    private String name;    //名字
    private String age;     //年龄

    // 提供一些可以操作这些属性的方法get/set
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }
}
```

#### 继承

> 继承的本质是对某一批类的抽象，从而实现对现实世界更好的建模。extends的意思是“扩展”，即子类是父类的拓展。

- 继承是类和类之间的一种关系。除此之外，类和类之间的关系还有依赖、组合、聚合等。
- 继承关系的两个类，一个为子类（派生类），一个为父类（超类）。子类继承父类，使用关键字extends来表示。
- 子类和父类之间，从意义上讲应该具有“is a”的关系。
- ==Java类只有单继承，没有多继承！==
- 在未继承其他类的情况下，Object类是所有类的父类。

```java
// 父类
public class Pet {

    // 父类的私有属性子类不可以直接使用，必须通过暴露的get/set方法进行操作
    private String meat = "beef";
    // 父类的公有属性子类可以直接使用
    String food = "骨头";

    public String getMeat() {
        return meat;
    }

    public void setMeat(String meat) {
        this.meat = meat;
    }

    // 父类定义的public方法，实例化的子类可以直接调用
    public void yell(){
        System.out.println("叫了一下");
    }
}

// 子类
public class Dog extends Pet{

    // 子类的私有属性
    private int age;

    // 子类的公有方法
    public void eat(){
        System.out.println("狗喜欢吃骨头");
    }
}

public class Application {
    public static void main(String[] args) {
        // 实例化子类
        Dog dog = new Dog();
        // 操作父类的公有属性
        System.out.println(dog.food);   // 骨头
        // 操作父类的私有属性
        System.out.println(dog.getMeat());  // beef
        // 嗲用父类的公有方法
        dog.yell();     // 叫了一下
    }
}
```

###### Super

> super就是子类继承父类之后在子类中的父类对象，可以通过super来访问父类的非私有方法和非私有属性。

- super()调用父类的构造方法，必须在构造方法的第一行，默认是调用父类的无参构造方法，可以修改为调用有参构造方法。
- super只能出现在子类的方法或者构造方法之中
- super和this不能同时调用构造方法，也就是说在任意构造方法中无法调用其他构造方法
- super代表的是父类引用，this代表的是当前类
- super必须在有继承关系后才能在子类使用，this的使用没有条件
- super()是父类的无参构造，this()是当前类的无参构造

```java
// 父类
public class Person {

    String desc = "人";

    // 父类的私有属性子类无房访问
    private String history = "由猿类进化";

    // 父类无参构造
    public Person(){
        System.out.println("父类无参构造被调用了");
    }

    public void print(){
        System.out.println(this.desc);
    }
}

// 子类
public class Man extends Person{

    String desc = "男人";

    // 子类无参构造
    public Man(){
        // 隐藏代码:在子类的无参构造中一定会先执行父类的无参构造，且该方法的调用必须是在第一行，因此在无参构造中不可调用其他构造方法。
        super();
        System.out.println("子类无参构造被调用了");
    }

    public void print(){
        // 输出子类（自身）的desc
        System.out.println(this.desc);
        // 输出父类的desc
        System.out.println(super.desc);
    }

    public void test(){
        print();
        this.print();
        super.print();
    }

}

// 测试
public class Application {
    public static void main(String[] args) {
        Man man = new Man();
        man.test();
    }
}
```

![](C:\Users\Administrator\Desktop\学习\images\super.png)

###### 方法重写

> 重写必须有继承关系，指的是子类重写父类的方法

==Q：为什么需要重写？==

A：父类的方法子类不一定需要或不一定满足。

- 方法名必须相同
- 参数列表必须相同
- 修饰符范围可以扩大但不能缩小（public > protected > defualt > private）
- 抛出异常的范围可以缩小但不能扩大（ClassNotFoundException < Exception）
- ==以下三类方法无法被重写：==
  1. 被static修饰的方法：该类方法属于类，不属于实例对象，因此不能被重写。
  2. 被final修复的方法：被final关键字修饰的方法或属性存储在常量池，这部分属性和方法不可被修改。
  3. 被private修饰的方法：该类方法属于父类私有，不能被子类继承，因此无法被重写。

```java
// 父类
public class Foo {

    private String name = "父亲";

    public void claim(){
        System.out.println("我是" + this.name);
    }

    public static void hobby(){
        System.out.println("我喜欢钓鱼");
    }

    public void showAge(){
        System.out.println("我今年36岁了");
    }
}

// 子类
public class Boo extends Foo {

    private String name = "儿子";

    /**
     * @descrtion 重写父类claim方法
     */
    @Override
    public void claim() {
        System.out.println("我是儿子");
    }

    public static void hobby(){
        System.out.println("我喜欢玩英雄联盟");
    }

    /**
     * @descrtion 重写父类showAge方法
     */
    public void showAge(){
        System.out.println("我今年10岁了");
    }

    public void useFooMethod(){
        super.claim();
        super.hobby();
        super.showAge();
    }
}

public static void main(String[] args) {
    // Foo foo:定义引用类型，这里是父类，其引用保存在栈内    new Boo():开辟内存空间，定义实际类型，其内存分配在堆空间
    Foo foo = new Boo();    // 该对象为父类对象，但引用指向了子类对象
    // 由于子类重写了父类的claim方法，因此调用的是子类的claim方法
    foo.claim();    // 我是儿子
    // 子类继承了父类的所有方法，并调用父类的静态方法hobby
    foo.hobby();    // 我喜欢钓鱼
    // 虽然子类没有使用@Override来注释showAge方法，但该方法同样被重写了，因此调的是子类的showAge方法
    foo.showAge();  // 我今年10岁了

    // 这是一个完全的父类的对象，其方法调用均为父类
    Foo foo2 = new Foo();
    foo2.claim();   // 我是父亲
    foo2.hobby();   // 我喜欢钓鱼
    foo2.showAge(); // 我今年36岁了

    // 该对象为子类对象，它可以调用父类的非私有属性和方法，在方法重写时调用的是重写后的方法
    Boo boo = new Boo();
    boo.claim();    // 我是儿子
    boo.hobby();    // 我喜欢玩英雄联盟
    boo.showAge();  // 我今年10岁了
    boo.useFooMethod(); // 在该方法中使用super关键字调用父类的方法
}
```



#### 多态

> 多态即是一方法可以根据发送对象的不同而采取多种不同的行为方式，一个对象的实际类型是确定的，但可以指向对象的引用的类型有很多（如父类、有关系的类），因此程序只有在运行时才知道具体调用的方法是哪个，在编程时是无法知晓的，这便是多态的一种表现形式。

###### 多态存在的条件

1. 实现多态的基础条件是必须要有继承关系。
2. 实现多态的编程方式是子类重写父类的方法。
3. 实现多态的具体表现是父类引用指向子类对象

- 多态是方法的多态，不存在属性的多态。
- 只有存在继承关系的两类才能进行类型转换，否则将抛出ClassCastException异常

```java
//父、子类参照继承章节

public static void main(String[] args) {
    // 一个类型的实际类型是确定的
    // new Boo()
    // new Foo()

    // 可以指向的引用类型就是不确定的：父类的引用指向子类

    // 子类能调用的方法都是自己的或者继承自父类的
    Boo boo = new Boo();

    // 父类可以指向子类，在父类的方法被子类重写的情况下是调用子类的方法，但是父类不可以调用子类的独有方法
    Foo foo = new Boo();
    Object obj = new Boo();

    // 对象能执行哪些方法，主要看左边的引用类型是什么，和右边的实际类型关系不大
    ((Boo) foo).useFooMethod();     // 父类向下强转为子类，调用子类方法，但这种方式基本不用
    boo.useFooMethod();     // 子类调用自己的独有方法
}
```

#### instanceof

> 其本质是判断两个类之间是否存在父子关系：A instanceof B 即A是否为B的子类

- 实例化一个对象时，左边决定了实例化对象的引用类型，引用类型是用来作instanceof的依据，实际类型不用作instanceof的比较。
- 如果两个引用类型之间没有父子关系，则会出现编译错误。
- A instanceof B可以理解为A是不是B的子类，是则返回true,否则返回false。

```java
public static void main(String[] args) {
    // Object > Foo
    // Object > Foo > Boo
    // Object > Foo > Coo

    Object boo = new Boo(); // 引用类型是Object
    System.out.println(boo instanceof Boo);   // true
    System.out.println(boo instanceof Foo);   // true
    System.out.println(boo instanceof Object);   // true
    System.out.println(boo instanceof Coo);   // false
    System.out.println(boo instanceof String);   // false

    Foo foo = new Boo();    // 引用类型是Foo
    System.out.println(foo instanceof Boo);   // true
    System.out.println(foo instanceof Foo);   // true
    System.out.println(foo instanceof Object);   // true
    System.out.println(foo instanceof Coo);   // false
    // System.out.println(foo instanceof String);    编译报错

    Boo son = new Boo();    // 引用类型是Boo
    System.out.println(son instanceof Boo);   // true
    System.out.println(son instanceof Foo);   // true
    System.out.println(son instanceof Object);   // true
    // System.out.println(son instanceof Coo);   编译报错
    // System.out.println(son instanceof String);    编译报错
}
```



###### 强制转换

> 能进行强制装换的两个类一定存在父子关系

- 强制转换的条件是存在父子关系，父类引用可以指向子类对象。
- 把子类转成父类，向上转型，无需强制转换，但会造成独有方法的丢失。
- 把父类转成子类，向下转型，需要强制转换，可以获得子类的独有方法，但也会丢失父类的私有属性和方法。

```java
public static void main(String[] args) {
    // 类型的相互转换：父 - 子
    Foo foo = new Boo();    // Boo实际类型向上转换为Foo引用类型无需强制转换
    Boo boo = (Boo)foo;     // 将foo强制转换成Boo类型属于将父类型转换为子类型的向下转换则需要进行强制转换

    boo.useFooMethod(); // 将父类型强制转换成子类型之后可以调用子类型的独有方法
}
```



#### static

> static是一个关键字，被static修饰的属性和方法在类被加载时就会被分配到内存空间

- 被static修饰的属性和方法无需实例化对象就可以被使用
- 静态代码块在类加载时就会被调用，优先级最高，==且无论实例化多少个对象该代码块在一个进程中都只会被执行一次==

###### 静态属性和方法 

```java
public class Teacher {
    
    // 静态代码块：优先级最高，仅在类加载时调用一次
    static {
        System.out.println("我是静态代码块");
    }

    // 匿名代码块：优先级次于静态代码块，在类每次实例化前都会被加载，多用于数据的初始化
    {
        System.out.println("我是匿名代码块");
    }

    private static String name = "张三";  // 静态属性无需实例化就可以使用
    private double salary = 8000.00;    // 非静态属性必须实例化后才能使用

    // 静态方法无需实例化就可以调用
    public static void goClass(){
        System.out.println("每个老师都要求去上课");
    }

    // 非静态方法必须实例化后才能调用
    public void drive(){
        System.out.println("不是每个老师都会开车");
    }

    public static void main(String[] args) {
        System.out.println(Teacher.name);   // 静态变量可以直接调用
//        System.out.println(name);   // 本类之间使用方式
        Teacher.goClass();      //静态方法可以直接使用
//        goClass();  // 本类之间使用方式
        System.out.println("================分割线================");

        Teacher zhang = new Teacher();
        System.out.println("================分割线================");
        Teacher wang = new Teacher();
    }
}
```

![static](C:\Users\Administrator\Desktop\学习\images\static.png)

#### 抽象类

> 抽象类被abstract关键字修饰，是对类方法是抽象

- 抽象类中可以没有抽象方法，但有抽象方法的类必须是抽象类。
- 抽象类不能实例化，只能由子类继承并重写抽象方法。
- 抽象方法只有声明，没有实现，通过子类重写来实现。
- 抽象类用得不多，主要是用来优化代码。

```java
// 被abstract关键字修饰的类即为抽象类
public abstract class Action {

    // 抽象方法被abstract关键字修饰，只有定义，没有实现
    public abstract void run();
}

// 继承抽象类的类必须实现抽象类的抽象方法
public class Run  extends Action{
    @Override
    public void run() {
        System.out.println("开跑！！");
    }
}
```

#### 接口

> 接口是一组规范，其本质就是契约，接口不能实例化，也不能有方法的实现。

| 类型   | 特征                             |
| ------ | -------------------------------- |
| 普通类 | 只有具体的实现                   |
| 抽象类 | 具体的实现和规范（抽象方法）都有 |
| 接口   | 只有规范                         |

- 接口是对某一类行为的约束的特殊类。
- 接口用于定于一些规范（抽象方法），其本身无法写方法的实现，但实现接口的类可按需重写接口的方法。
- 接口所有的方法都默认被public abstract修饰。
- 接口所有的属性都是常量，默认被public static final修饰，但是一般不在接口中定义常量。
- 接口不能实例化，接口没有构造方法。
- 不同于继承的单继承模式，一个类允许实现多个接口。
- 一个类若实现了一个或多个接口，则必须重写所实现接口的所有方法。

```java
// 接口被interface关键字修饰
public interface PageFunction {

//    public abstract add();    接口的所有方法默认被public abstract修饰，可以省略不写
    void add();
    void del(String id);
    void update(Boo boo);
    void query(String name);
}

public interface SubFunction {

    void exportData(String id);
}

// 一个类允许实现一个或多个接口
public class Page implements PageFunction, SubFunction{
    @Override
    public void add() {

    }

    @Override
    public void del(String id) {

    }

    @Override
    public void update(Boo boo) {

    }

    @Override
    public void query(String name) {

    }

    @Override
    public void exportData(String id) {

    }
}
```



#### 内部类

> 将一个类定义在一个类或者一个方法里，这样的类就称之为内部类。

==Q：大多数业务需求，不适用内部类也可以实现，为什么Java还要设计内部类？==

1、内部类可以很好地实现隐藏，非内部类是不可以被private、protected修饰的，但是内部类可以，从而达到了隐藏的作用。同时可以将一定逻辑关系的类组织在一起，增强可读性。

2、间接实现多继承。每个内部类都可以独立地继承类，实现接口，外部类继承类跟实现接口的情况与内部类无关。

##### 成员内部类

> 当某个类除了它的外部类外，不会被其他类使用时，使用成员内部类。

- 成员内部类是最普通的一种内部类，可以调用外部内的所有方法和属性，外部类要调用内部类的方法则必须先实例化内部类。

- 成员内部类不能包含静态属性和方法。

- 成员内部类的成员变量与方法允许与外部类重名，但这么做的话需要使用『外部类名.this』进行访问，不重名可以直接使用。

```java
// 父类
public class Father {
    public int strong(){
        return 9;
    }
}

// 母类
public class Mother {
    public int kind(){
        return 8;
    }
}

//子类（外部类）
public class Outer_01 {
    // 成员变量
    private String claim = "我是外部类";
    // 成员方法
    public void display(){
        System.out.println("我是外部类的方法");
    }
    // 成员内部类
    public class Inner {
        // 成员变量
        private String claim;
        // 内部类构造方法
        public Inner() {
            this.claim = "我是成员内部类";
        }
        // 成员方法
        public void display(){
            // 访问内部类的成员变量
            System.out.println("访问内部类的成员变量：" + claim);
            // 访问外部类的成员变量
            System.out.println("访问外部类的成员变量：" + Outer_01.this.claim);
            // 访问外部类的方法
            Outer_01.this.display();
        }
    }
}

// 一个java文件中定义两个类时只能有一个类被public修饰，且该类名必须与文件名一致
class Test01{
    public static void main(String[] args) {
        // 实例化外部类对象
        Outer_01 outer = new Outer_01();
        //调用外部类方法
        outer.display();	//我是外部类的方法
        //实例化外部类对象
        Outer_01.Inner inner = outer.new Inner();
        //调用内部类方法
        inner.display();	//访问内部类的成员变量：①我是成员内部类  ②访问外部类的成员变量：我是外部类  ③我是外部类的方法
    }
}
```

##### 局部内部类

- 定义在代码块里的类，比如定义在一个方法中。

- 起作用的范围仅限于它所在的代码块中。

- 局部内部类不能被pubic、protected、private、static修饰，但是可以被final修饰。

```java
public class Outer_02 {
    // 成员变量
    private String claim = "我是外部类";
    // 成员方法
    public void display(){
        class Inner {
            private String claim;

            public Inner(){
                this.claim = "我是局部内部类";
            }

            public void display(){
                System.out.println("我是局部内部类");
            }
        }
        // 局部内部类定义在外部内的方法体或者代码块中，在方法体重可以实例化局部内部类，调用局部内部类中的方法。
        Inner inner = new Inner();
        inner.display();
    }
}

class Test02{
    public static void main(String[] args) {
        // 实例化外部类
        Outer_02 outer = new Outer_02();
        // 实例化内部类
        outer.display();	//我是局部内部类
    }
}
```

##### 静态内部类

> 与成员内部类相比多了static关键字的修饰，静态内部类只能访问外部内的静态变量和静态方法。

```java
public class Outer_03 {
    // 成员变量
    public static String claim = "我是外部类";
    // 成员方法
    public static void display(){
        System.out.println("我是外部类的方法");
    }
    // 静态内部类
    public static class Inner{
        // 成员变量
        private String claim;
        // 内部类构造方法
        public Inner() {
            this.claim = "我是成员内部类";
        }
        // 成员方法
        public void display(){
            // 访问内部类的成员变量
            System.out.println("访问内部类的成员变量：" + claim);
            // 访问外部类的静态成员变量
            System.out.println("访问外部类的成员变量：" + Outer_03.claim);
            // 访问外部类的静态方法
            Outer_03.display();
        }
    }
}

class Test03{
    public static void main(String[] args) {
        // 访问外部内成员变量
        System.out.println(Outer_03.claim);		//我是外部类
        //访问外部类方法
        Outer_03.display(); 		//我是外部类的方法
        // 不再需要实例化外部内便可实例化内部类
        Outer_03.Inner inner = new Outer_03.Inner();
        inner.display(); //访问内部类的成员变量：①我是成员内部类  ②访问外部类的成员变量：我是外部类  ③我是外部类的方法
    }
}
```

##### 匿名内部类

- 匿名内部类是没有名称的内部类。

- 当一个类需要继承一个类或者实现一个接口时（必要条件），并且只使用一次的时候，可以考虑这种方式。

- 调用的时候直接使用父类的无参构造，并重写父类方法，从而达到优化代码的目的。

```java
// 创建一个接口
public interface MyInterface {
    public void display();
}

//实现一个内部类
public class Outer_04 {
    public static void main(String[] args) {
        // 匿名内部类
        MyInterface myInterface = new MyInterface() {
            @Override
            public void display() {
                System.out.println("匿名内部类");
            }
        };
        myInterface.display();  //匿名内部类
    }
}
```

##### 内部类模拟实现多继承

- 多继承是指一个类可以从多于一个父类那里继承行为和特征。

- 为了保证数据安全，Java只允许单继承。

- 由于外部类可以访问成员内部类全部属性和方法，因此通过定义成员内部类可以模拟实现继承多个类。

```java
public class Son {

    // 内部类继承父亲
    class  Father_1 extends Father{
        // 重写父亲类方法
        @Override
        public int strong() {
            // 比父亲更加强壮了
            return super.strong() + 1;
        }
    }
    //内部类继承母亲
    class Mother_1 extends Mother{
        // 重写母亲类方法
        @Override
        public int kind() {
            // 没有母亲那么温柔
            return super.kind() - 1;
        }
    }

    public static void main(String[] args) {
        Son son  = new Son();
        // 继承了父亲的强壮，并且比父亲更加强壮了
        System.out.println(son.new Father_1().strong());    // 10
        //继承了母亲的温柔，但不及母亲温柔
        System.out.println(son.new Mother_1().kind());      // 7
    }
}
```



# 异常

#### 什么是异常

- 实际工作中，遇到的情况不可能是完美的。比如：你写得某个模块，用户输入不一定符合你的要求，你的程序要打开某个文件，这个文件可能不能存在或者格式不正确，又或者内存空间不足以支持程序运行......
- 异常指程序运行中出现的不期而至的各种状况，如：文件找不到、网络连接失败、非法参数等。
- 异常发生在程序运行期间，它影响了正常的程序执行流程。

#### 异常的分类

1. 检查性异常：最具代表性的检查性异常是用户错误或问题引起的异常，这是程序员无法遇见的。例如要打开一个不存在的文件时，一个异常就发生了，这些异常编译时不能简单地忽略。
2. 运行时异常：运行时异常是可能被程序避免的异常。与检查性异常相反，运行时异常可以在编译时被忽略。
3. 错误：错误不是异常，而是脱离程序员控制的问题。错误在代码中通常被忽略。例如，当栈溢出时，一个错误就发生了，它在编译时检查不到。

#### 异常体系结构

- Java把异常当做对象来处理，并定义了一个基类java.lang.Throwable作为所以异常类的超类。
- 在Java API中已经定义了许多异常类，这些异常类分为两大类，错误==Error==和异常==Exception==。

![Throwable](C:\Users\Administrator\Desktop\学习\images\Throwable.png)

#### Error

> Error类对象由Java虚拟机生成并抛出，大多数错误与代码编写者所执行的操作无关

- Java虚拟机运行错误（VirtualMachineError），当JVM不再有继续执行操作所需的内存资源时，将出现OutOfMemoryError。这些异常发生是，JVM一般会选择线程终止。
- JVM试图执行应用时，如类定义错误（NoClassDefFoundError）、链接错误（LinkageError）。这些错误是不可查的，因为它们在应用程序控制和处理能力之外，而且绝大多数是程序运行时不允许出现的状况。

#### Exception

在Exception分支中有一个重要的子类RuntimeException（运行时异常）

- ArrayIndexOutOfBoundsException（数组下标越界）
- NullPointerException（空指针异常）
- ArithmeticException（算术异常）
- MissingResourceException（丢失资源）
- ClassNotFoundException（找不到类）
- ....

这些异常是不检查异常，程序中可以选择捕获，也可以不处理。这些异常一般是由程序逻辑错误引起的，程序应该从逻辑角度尽可能避免这些异常的发生。

#### Error和Exception的区别

> Error通常是灾难性的致命错误，是程序无法控制和处理的，当出现这些异常时，JVM一般会选择终止程序线程；Exception通常情况下是可以被程序处理的，并且在程序中应该尽可能的去处理这些异常。

#### 捕获异常和抛出异常

- 关键字：try、catch、finally、throw、throws

``` java
public class ExceptionDemo {
    public static void main(String[] args) {
        int a = 1;
        int b = 0;

        try {   // try-catch是捕获异常的主体结构

            if(b == 0){
                throw new ArithmeticException("主动抛出异常");    //在方法体中可以使用关键字throw来主动抛出异常
            }

//            int c = a / b;
            divide();
        } catch (ArithmeticException e) {
            System.out.println("异常被捕获了");
        } catch (Exception e) {     //catch允许有多个，但是必须由小及大，否则会出现编译错误
            System.out.println("Exception");
        } catch (Throwable e) {
            System.out.println("Throwable");
        } finally {
            System.out.println("finally的代码块一定会被执行，一般用来释放资源");
        }
    }

    public static int divide() throws ArithmeticException{  //使用throws关键字对方法进行处理，向上抛出异常，交由上级处理
        int a = 1;
        int b = 0;

        return  a / b;
    }
}
```

#### 自定义异常

> 一个普通的类继承了Exception类之后就成为了一个自定义异常类

```java
// 继承Exception类之后该类成为异常类
public class MyException extends Exception{

    // 规定数字大于10则抛出异常
    private int detail;

    public MyException(int detail) {
        this.detail = detail;
    }

    @Override
    public String toString() {      // toString()：异常打印信息
        final StringBuffer sb = new StringBuffer("MyException{");
        sb.append("detail=").append(detail);
        sb.append('}');
        return sb.toString();
    }
}

// 测试类
public class Application {
    public static void main(String[] args) {
        try {
            test(11);
        } catch (MyException e) {
            System.out.println("MyException=>" + e);	// MyException=>MyException{detail=11}
        }
    }

    // 可能会存在异常的方法
    public static void test(int a) throws MyException {
        System.out.println("传入参数为：" + a);	// 传入参数为：11
        if(a > 10){
            throw new MyException(a);
        }
        System.out.println("OK");
    }
}
```

#### 异常经验总结

- 处理运行时异常时，采用逻辑去合理规避同时辅助 try-catch处理。
- 在多重cathc块后面，可以加一个 catch (Exception) 来处理肯能被遗漏的异常。
- 在不确定的代码，也可以加上 try-catch 来处理潜在的异常。
- 尽量去处理异常，切忌只是简单地调用 printStackTrace() 去打印异常。
- 具体如何处理，要根据不同的业务需求会异常类型去决定。
- 尽量添加finally语句块去释放占用的资源。
