//对象数据源
const note = {
    id: 1,
    title: 'My first note',
    date: '01/01/1970',
  }

//传统赋值方式
// const id = note.id;
// const title = note.title;
// const date = note.date;
// console.log("id=" + id);
// console.log("title=" + title);
// console.log("date=" + date);

//ES6方式(对象名称必须一致，使用':'可以取别名)
const { id:nodeId, title, date } = note
console.log("nodeId=" + nodeId);
console.log("title=" + title);
console.log("date=" + date);

//使用ES6计算字符长度（不常用）
const { length } = "I love China";
console.log("ES6:" + length)
//上述表达式等价于
const arg = "I love China";
console.log("常规:" + arg.length);

//复合对象（若要获取eitor对象则必须要单独再定义一个eitor元素）
const data = {
    code: 1,
    name: 'My first note',
    day: '01/01/1970',
    eitor: {
      firstName: 'Sherlock',
      lastName: 'Holmes',
    },
  }
const {code, name, day, eitor, eitor : {firstName, lastName}} = data;
console.log("code=" + code);
console.log("name=" + name);
console.log("day=" + day);
console.log(eitor);
console.log("firstName=" + firstName);
console.log("lastName=" + lastName);

//数组结构
const date2 = ['1970', '12', '01']
// 常规方式
const year2 = date2[0]
const month2 = date2[1]
const day2 = date2[2]
console.log(year2)
console.log(month2)
console.log(day2)
//ES6方式（数组结构名称可以不一致，数值对应数组下标位置数值，可以定义一个空元素以跳过当前下标数值）
const [nian, yue, ri] = date2
console.log(nian)
console.log(yue)
console.log(ri)

//嵌套数组（下标数值相对应，这里我们跳过了下标为2的元素）
const nestedArray = [1, 2, [3, 4], 5]
const [one, , [three, four], five] = nestedArray
console.log(one)
console.log(three)
console.log(four)
console.log(five)

//复合结构
const conNote = {
    title2: 'My first note',
    author2: {
      firstName2: 'Sherlock',
      lastName2: 'Holmes',
    },
    tags2: ['personal', 'writing', 'investigations'],
  }

const { title2, author2, author2 : {firstName2, lastName2}, tags2 : [personal, writing, investigations]} = conNote
console.log(title2);
console.log(author2);
console.log(firstName2);
console.log(lastName2);
console.log(personal);
console.log(writing);
console.log(investigations);