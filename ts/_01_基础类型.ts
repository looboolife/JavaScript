/**
 * boolean
 */
let isDone: boolean = false;


/**
 * number/biginit(es2020)
 * 
 * ts支持的数字都是浮点数或者大整数
 * 浮点数类型是number 大整数类型是bigint
 * 支持十进制,十六进制和es6的二进制和八进制
 */
let decLiteral: number = 6;
let hexliteral: number = 0xf00d;
//二进制
let binaryLiteral: number = 0b1010;
//八进制
let octalLiteral: number = 0o744;
//es2020 才可以
// let bigLiteral:bigint = 100n;


/**
 * string
 * 
 * 可以使用单引号(')双引号(")表示数据类型
 * 还可以使用反引号(`)表示模板字符串
 * 并且以${exper}嵌入表达式
 */
let name: string = "bob";
name = "smith";
let sentence: string = `Hello, my name is ${name}`;

/**
 * Array
 * 
 * 方式一: 元素类型 + [] ,number[]
 * 方式二: 数组泛型 Array<元素类型>
 */
let list1: number[] = [1, 2];
let list2: Array<number> = [1, 2];
console.log(list1[3])

/**
 * Tuple(元组)
 * 元组表示一个已知元素数量和类型的<b>数组</b>,各元素的类型不必相同
 * 数组的数量和类型顺序必须和定义一样
 */
let x: [string, number] = ["hello", 100];
//error, Type 'string' is not assignable to type 'number'
//x = [10, "123"];
console.log(x[0].substr(1));
//error, Property 'substr' does not exist on type 
// console.log(x[1].substr(1));
//error, Tuple type '[string, number]' of length '2' has no element at index '3'
// x[3] = "wo";


/**
 * enum
 * 
    编译后的 Color = {"Red":0,0:"Red"}
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    var c = Color.Blue;
 * 
 * 默认从0开始为元素编号,也可以手动指定
 */
enum Color { Red = 2, Green, Blue }
let c: Color = Color.Blue;

/**
 * unknown
 */
let notSure: unknown = 4;
notSure = "maybe a string instead";
notSure = true;

/**
 * any
 */
let notSure2: any = 4;
notSure2 = "maybe a string instead";
notSure2 = false;

/**
 * void
 * 表示没有任何类型,可以作为函数的返回值,表示此函数没有返回值
 * 
 * 声明一个void类型的变量没有用处
 * 它只能为它赋值null(只在--strictNullChecks和--strict未指定时)和undefined
 */
function warnUser(): void {
    console.log("this is my warning message");
}

let unusable: void = undefined;
//strict = false
//let nullVar: void = null;

/**
 * null 和 undefined
 * 当指定 --strictNullChecks标记,null和undefined只能赋值给any和他们各自的类型
 * (除了undefined还可以赋值给void)
 */
let u: undefined = undefined;
let n: null = null;

/**
 * never
 * 表示那些永远不存在的值的类型
 * never类型是那些<t>总会抛出异常</t>或者根本就<t>不会有返回值</t>的函数表达式或者箭头函数表达式的返回值
 */

//抛出异常
function error(message: string): never {
    throw new Error(message);
}

//推断返回类型为never
function fail() {
    return error("something failed");
}

//没有返回值
function infiniteLoop(): never {
    while (true) {
    }
}

/**
 * object
 * 表示非原始类型
 * 也就是除了number string boolean bigint symbol null undefined
 */
function create(o: object): void {
    console.log(o);
}

//create(1);
create({ a: 1 })

/**
 * 类型断言
 * 类似于Java的强转
 * 方式一:"尖括号"语法
 * 方式二: as 语法
 * 两种方式是等价的
 * 在ts里面使用jsx时,只有as语法断言是被允许的
 */
//方式一: 尖括号
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

//方式二 as 语法
let someValue1: any = "this is a string";
let strLength1: number = (someValue1 as string).length;

/**
 * Number String Boolean Symbol Object
 * 
 * 这些大写开头的不属于语言的基本类型,
 * 不应该被当做一个类型,但是他也不报错啊?????
 */
function reverse(s: String): String {
    return s.split("").reverse().join("");
}

reverse("hello world");


export { }
