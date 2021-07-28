

// ts普通申明 规定数据类型
// let num:类型 可以规定申明变量值的类型

// String
// let str:string;
let str:string = "123";
// str = true;//会提示错误,因为兼容js所以能修改成功

// Boolen
// let bool:boolean;
let bool:boolean = true;
// str = true;//会提示错误,因为兼容js所以能修改成功

// Number
// let num:number;
let num:number;
num = 321
// num = "wse";//会提示错误,因为兼容js所以能修改成功

// Array 指定数组内饰为某个类型后内部参数只能是此类型的item也可以使用;联合类型
let arr: number[] = [1, 2, 3, 4, 5];
let arr2: Array<number> = [1, 2, 3, 4, 5];
let arr3: number[] | string[] = ["1", "2", "3", "4", "5"];
arr3 = [1, 2, 3, 4, 5];
// arr3 = [1, 2, 3, "4", 5]; // 会报错此方式数组中只能有一个类型
let arr4: Array<number | string> = [1, "2", 3, 4, 5]; // 此方式可以将数组中的类型定义为多类型联合


// Tuple 类型
// ts中的元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
// 比如，你可以定义一对值分别为string和number类型的元组。
let x: [string, number];
x = ['hello', 10]; // OK
// x = [10, 'hello']; // Error


// Enums 类型
// 枚举类型用于定义数值集合。
// 列出所有可用值，一个枚举的默认初始值是0。你可以调整一开始的范围。
enum People {Student = 3, Teacher, Doctor};
let role1: People = People.Student;
let role2: People = People.Teacher;
let role3: People = People.Doctor;
console.log(role1, role2, role3) // 3 4 5
// 可以自己转换成js代码 之后打印一下People


// Any 类型
// any 是默认的类型，其类型的变量允许任何类型的值。
let any1: any = "10";
let any2: any[] = [1, '2', false];
// 但是存在一个可能导致bug的问题点
let num2:number;
num2 = 1; // 没问题
// num2 = "1"; // Error
num2 = any1; // 这就过了?嗯~

// Void 类型
// JavaScript 没有空值 Void 的概念，在 TypeScirpt 中，可以用 void 表示没有任何返回值的函数。
function alertName0(): void {
  console.log('My name is changdong');
}// ok
function alertName1(): void {
  console.log('My name is changdong');
  return;
}// ok
function alertName2(): void {
  console.log('My name is changdong');
  // return 123; // error但是还是会执行
}

// Null 和 Undefined
// TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。
// 和void相似，它们的本身的类型用处不是很大。
let u: undefined = undefined;
let n: null = null;
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把null和undefined赋值给number类型的变量。
// 然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 这能避免很多常见的问题。


// 启用 --strictNullChecks
let num3: number;
num3 = 1; // 运行正确
// num3 = undefined;    // 本应运行错误 但是在我这没报错! 就很头痛 后发现将tsconfig移动到文件同级后生效......暂定位原因隔离太多层级 或者配置"include": ["src/**/*"]
// num3 = null;    // 本应运行错误 但是在我这没报错! 就很头痛 后发现将tsconfig移动到文件同级后生效......暂定位原因隔离太多层级 或者配置"include": ["src/**/*"]

// 也许在某处你想传入一个string或null或undefined，你可以使用联合类型string | null | undefined。
// 启用 --strictNullChecks
let num4: number | null | undefined;
num4 = 1; // 运行正确
num4 = undefined;    // 运行正确
num4 = null;    // 运行正确

// 联合类型
// let num5: number | null | undefined; // 可以是后续类型中的某一个
// 固定取值范围
// let num6: '1' | 1 | '2'; // 值只能是后面指定的其中之一


// 也可以用来指定function类型
// function a (b:参数类型, c:参数类型):返回值类型 {}

function sum (a = 1, b = "q"):string {
  console.log(a, b)
  return a + b
}
// sum(1, 2)
