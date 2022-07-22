# Q&A

##### 1.Java 中应该使用什么数据类型来代表价格?

如果不是特别关系内存和性能的话，使用BigDecimal，否则使用预定义精度的double类型。

#####2.怎么将byte转换为String?

可以使用 String 接收 byte[] 参数的构造器来进行转换，需要注意的点是要使用的正确的编码，否则会使用平台默认编码，这个编码可能跟原来的编码相同，也可能不同。

```java
public static void main(String[] args) {
    // 怎么将byte转成String？
    byte[] b = {65, 66 , 67, 97, 98, 99};
    String str = extracted(b);
    System.out.println(str);    // ABCabc
}

public static String byteToString(byte[] b) {
    String res = new String(b);
    return res;
}
```

##### 3.Java 中怎样将 bytes 转换为 long 类型?

#####4.我们能将 int 强制转换为 byte 类型的变量吗? 如果该值大于 byte 类型的范围，将会出现什么现象?

可以做强制转换，但是Java中int是32位的，而byte是8位的，所以，如果是强制转换，int类型的高24位将会被丢弃，byte 类型的范围是从 -128 到 127。

```java
public static void main(String[] args) {
    int i1 = 97;
    byte b1 = intToByte(i1);
    System.out.println(b1);     // 97

    int i2 = 156;
    byte b2 = intToByte(i2);
    System.out.println(b2);     // -100
}

public static byte intToByte(int i){
    byte res = (byte)i;
    return res;
}
```

##### 5.存在两个类，B 继承 A，C 继承 B，我们能将 B 转换为 C 么? 如 C = (C) B

编译上可以，向下转型。但是不建议使用，运行时容易出现类型转换异常。

```java
// Goo -> Foo -> Boo
public static void downTransition(){
    Goo goo = new Goo("我是爷爷");
    Boo boo = (Boo) goo;
    boo.claim();
}
```

![downTransition](C:\Users\Administrator\Desktop\学习\images\downTransition.png)

##### 6.哪个类包含 clone 方法? 是 Cloneable 还是 Object?

java.lang.Cloneable是一个标志性接口，不包含任何方法，clone()方法在Object类中定义。需要注意的是clone()方法是一个本地方法，使用C或者C++来实现的。

###### 拓展

- 什么是clone方法？clone方法有什么作用？

首先要明白一个基本点：基本数据类型的传递是值传递，其他类型的传递是引用传递。

```java
Person person = new Person();
Person newPerson = person;
System.out.println(person);     // com.question.clone.Person@1b6d3586
System.out.println(newPerson);  // com.question.clone.Person@1b6d3586
```

上述代码证明，单纯得将一个对象赋值给另一个对象，实际上是将引用地址赋值给了新的对象，它们指向的是同一片内存区域，因此当对newPerson的属性进行操作时，同样会改变person属性，这显然是不合理的。

为了规避这一现象，Java提供了clone方法。具体操作如下：

- 实现clone的类首先需要继承Cloneable接口（Cloneable接口实质是一个标识接口，没有任何的接口方法）
- 在类中重写Object类中的clone()方法
- 在clone()方法中调用super.clone()。无论clone类继承结构是什么，super.clone()会直接或间接java.lang.Object类中的clone()方法
- 把浅复制的引用指向原型对象新的克隆体。

###### 浅复制和深复制

- **浅复制**：被复制的对象的所有变量都含有与原来对象一样的值（这部分值在内存中开辟了新空间），而其他对象的引用仍指向原来的对象。换言之，浅复制仅仅复制了所考虑对象的引用，而不赋值它所引用的对象。
- **深复制**：被复制的对象的所有变量都含有与原来对象一样的值，除去那些引用对其他对象的变量（因此如果要完整得实现克隆，非基本数据类型的属性也要实现Cloneable接口并重写clone方法），那些引用其他对象的变量将指向被复制的新对象，而不知原来那些被引用的对象。换言之，深复制把浅复制的对象所引用的对象都复制了一遍。

![浅复制和深复制](C:\Users\Administrator\Desktop\学习\images\浅复制和深复制.png)

###### 代码实现

``` java
public class Person implements Cloneable{

    private String name;
    Money m;
    int age;

    public Person(){

    }

    public Person(String name, int age){
        this.name = name;
        m = new Money();
        this.age = 18;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        Person person = (Person) super.clone();     // 浅复制：克隆Person对象
        person.m = (Money) this.m.clone();  // 深复制：克隆Person对象中引用指向对象
        return person;
    }
}

class Money implements Cloneable{

    double money = 12.0;

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}

public static void main(String[] args) throws CloneNotSupportedException {
    Person person1 = new Person("曹操", 18);
    Person person2 = (Person) person1.clone();

    System.out.println(person1.m);  // com.question.clone.Money@1b6d3586
    System.out.println(person2.m);  // com.question.clone.Money@4554617c

    person2.m.money = 1000.0;
    person2.age = 24;

    System.out.println(person1.m.money);    // 12.0
    System.out.println(person2.m.money);    // 1000.0

    System.out.println(person1.age);	// 18
    System.out.println(person2.age);	// 24
}
```

